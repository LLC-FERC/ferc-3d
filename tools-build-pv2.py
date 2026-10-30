import json,numpy as np,zlib,re,collections,sys
J=json.load(open('/home/claude/ferc-3d/pv1.json'));B=open('/home/claude/ferc-3d/pv1.bin','rb').read()
P=J['protos']
def load(p):
    q=np.frombuffer(B,dtype=np.int16,count=p['n']*3,offset=p['o']).reshape(-1,3)
    idx=np.frombuffer(B,dtype=np.uint32 if p['b32'] else np.uint16,count=p['ni'],offset=p['io']).astype(np.int64)
    return q.astype(np.int64)+32768,idx
skip=lambda i:(i[4].startswith('Деталь1^513') or i[4].startswith('Трубка(') or i[2]=='rotor' or re.match(r'^(Зашивка|Стяжка направляющих|Направляющая роторного)',i[4]))
inst=[i for i in J['inst'] if not skip(i)]
used=sorted(set(i[0] for i in inst))
CELL=float(sys.argv[1]) if len(sys.argv)>1 else 2.5
def decimate(q,idx,p,cell):
    lo=np.array(p['lo']);sc=np.maximum(np.array(p['hi'])-lo,1e-3)
    pos=lo+q/65535*sc
    key=np.floor(pos/cell).astype(np.int64)
    _,inv=np.unique(key,axis=0,return_inverse=True);inv=inv.ravel()
    n=inv.max()+1
    acc=np.zeros((n,3));np.add.at(acc,inv,pos);cnt=np.bincount(inv,minlength=n)[:,None];newpos=acc/cnt
    t=inv[idx].reshape(-1,3)
    ok=(t[:,0]!=t[:,1])&(t[:,1]!=t[:,2])&(t[:,0]!=t[:,2]);t=t[ok]
    t=np.unique(np.sort(t,axis=1),axis=0) if False else t
    # remove unused verts
    u,ti=np.unique(t.ravel(),return_inverse=True)
    newpos=newpos[u];t=ti.reshape(-1,3)
    nq=np.round((newpos-lo)/sc*65535).clip(0,65535).astype(np.int64)
    return nq,t.ravel()
def varint(a):
    out=bytearray()
    for v in a.tolist():
        while v>=128:out.append((v&127)|128);v>>=7
        out.append(v)
    return bytes(out)
newP=[];blob=bytearray();remap={}
stats=collections.Counter()
for k in used:
    p=P[k];q,idx=load(p)
    if p['ni']//3>8000:
        q,idx=decimate(q,idx,p,CELL);stats['dec']+=1
    # requantize to STEP mm grid (store levels); keep lo, new step per proto
    lo=np.array(p['lo']);sc=np.maximum(np.array(p['hi'])-lo,1e-3);posmm=lo+q/65535*sc;STEPMM=0.2
    q=np.round((posmm-lo)/STEPMM).astype(np.int64);assert q.max()<65536
    # planar delta positions (uint16 wrap)
    pl=b''.join((np.diff(q[:,c],prepend=0)&0xFFFF).astype('<u2').tobytes() for c in range(3))
    d=np.diff(idx,prepend=0);zz=((d<<1)^(d>>63)).astype(np.int64)
    vi=varint(zz)
    remap[k]=len(newP)
    newP.append({'lo':p['lo'],'st':STEPMM,'n':int(len(q)),'ni':int(len(idx)),'o':len(blob),'vl':len(pl),'il':len(vi)})
    blob+=pl+vi
    stats['tris']+=len(idx)//3
newI=[[remap[i[0]]]+i[1:] for i in inst]
open('pv2.bin','wb').write(blob)
json.dump({'protos':newP,'inst':newI},open('pv2.json','w'),ensure_ascii=False,separators=(',',':'))
print('protos',len(newP),'inst',len(newI),dict(stats),'raw',len(blob)//1024,'KB zlib',len(zlib.compress(bytes(blob),9))//1024,'KB json zlib',len(zlib.compress(open('pv2.json','rb').read(),9))//1024)
