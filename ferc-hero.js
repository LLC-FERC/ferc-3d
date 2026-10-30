/* FERC EVO — 3D-сцена первого экрана ferc.by. ООО «ФЕРЦ». */
window.FERC3D_start=async function(BASE){
'use strict';
const LOGO_D="M258.67,6.33 L258.67,137.17 L259.17,137.50 L284.33,137.50 L284.67,137.17 L284.67,101.83 L284.83,100.50 L285.33,100.00 L324.83,100.00 L327.00,102.33 L334.00,113.50 L336.83,117.33 L340.33,123.17 L346.83,132.67 L349.00,136.50 L350.67,137.67 L381.33,137.50 L381.33,136.50 L374.00,126.00 L354.00,95.83 L354.50,95.00 L356.00,94.67 L356.50,94.17 L362.17,91.50 L364.33,89.83 L365.00,89.67 L368.50,86.83 L373.00,82.17 L376.50,77.33 L379.67,71.17 L379.83,69.67 L380.67,68.17 L380.83,66.50 L381.67,64.50 L382.83,55.50 L382.83,48.50 L381.67,40.17 L379.67,33.67 L377.67,29.33 L374.67,24.67 L370.67,20.17 L364.17,15.17 L358.50,12.17 L357.50,12.00 L356.17,11.17 L346.33,8.17 L343.00,7.83 L339.50,7.00 L335.33,6.83 L331.17,6.17 L324.17,6.00 L259.67,6.00Z M285.00,29.50 L285.33,29.17 L329.83,29.33 L334.83,29.83 L337.50,30.67 L339.17,30.83 L344.17,33.00 L348.33,35.67 L351.00,38.50 L353.83,43.33 L354.17,45.33 L354.83,46.83 L355.17,50.33 L355.00,56.67 L354.00,61.00 L352.50,64.50 L350.67,67.33 L349.00,69.17 L344.17,73.00 L337.17,75.83 L332.33,76.83 L327.67,77.17 L285.17,77.00 L284.67,76.17 L284.67,30.67Z M132.50,6.17 L132.17,6.50 L132.17,136.67 L132.50,137.33 L244.00,137.33 L244.50,136.67 L244.50,115.17 L244.33,114.67 L243.67,114.33 L159.33,114.33 L158.50,113.50 L158.50,78.33 L159.33,77.67 L232.33,77.67 L233.00,77.00 L233.00,56.33 L232.50,55.83 L159.00,55.67 L158.50,55.00 L158.67,30.00 L159.33,29.33 L242.17,29.33 L242.83,28.33 L242.67,6.33 L241.50,6.00Z M121.67,6.17 L6.17,6.17 L6.00,136.83 L6.50,137.50 L31.50,137.50 L32.00,137.00 L32.17,86.50 L32.50,86.00 L33.67,85.67 L107.33,85.83 L108.50,85.33 L108.50,64.33 L107.83,64.00 L32.50,63.83 L32.17,63.50 L32.33,29.83 L33.17,29.33 L121.50,29.33 L121.83,28.83Z M411.50,23.50 L406.83,28.17 L403.00,32.83 L400.00,37.33 L396.17,44.67 L395.83,46.33 L395.00,47.50 L395.00,48.33 L394.17,49.83 L393.83,52.00 L393.00,53.83 L392.83,55.67 L392.00,58.50 L391.00,67.17 L391.00,76.33 L392.00,82.67 L392.00,84.33 L392.83,87.00 L393.17,89.67 L395.00,95.50 L395.67,96.50 L397.17,100.83 L402.17,109.33 L406.17,114.50 L411.17,119.67 L415.67,123.00 L416.33,123.83 L420.33,126.50 L421.33,126.83 L422.50,127.83 L425.33,129.00 L430.50,131.83 L431.50,132.00 L432.50,132.67 L434.50,133.17 L435.67,133.83 L436.83,134.00 L438.00,134.67 L440.00,135.00 L441.83,135.83 L443.67,136.00 L445.17,136.67 L447.33,136.83 L451.00,137.83 L454.33,138.00 L457.00,138.67 L466.00,139.17 L476.67,139.17 L483.33,138.83 L488.00,138.00 L492.17,137.67 L493.83,137.00 L497.33,136.50 L498.33,136.00 L500.00,135.83 L504.17,134.67 L505.17,134.00 L507.17,133.67 L508.33,133.00 L512.00,131.83 L513.33,131.00 L514.50,130.83 L515.67,130.00 L517.00,129.67 L517.83,129.00 L521.17,127.50 L525.67,124.67 L524.83,122.67 L523.83,121.50 L517.50,110.50 L515.83,108.17 L514.33,105.33 L513.67,104.83 L513.00,104.83 L510.00,106.67 L506.67,108.00 L505.17,109.00 L501.33,110.17 L500.33,110.83 L498.67,111.17 L497.50,111.83 L495.83,112.00 L494.00,112.83 L491.67,113.17 L489.17,114.00 L486.83,114.17 L483.33,115.00 L479.67,115.17 L476.83,115.67 L470.50,115.83 L460.17,115.00 L450.67,113.00 L449.17,112.17 L448.50,112.17 L445.50,111.00 L444.17,110.17 L442.67,109.83 L435.83,105.83 L433.00,103.67 L428.67,99.33 L426.00,96.17 L423.00,91.50 L421.00,87.00 L420.50,84.83 L420.00,84.17 L418.83,79.50 L418.17,73.17 L418.33,67.00 L418.83,62.83 L419.67,60.33 L419.83,58.50 L422.00,53.00 L422.67,52.17 L423.83,49.50 L427.00,45.17 L432.33,39.83 L436.50,36.83 L441.67,34.00 L442.67,33.83 L443.83,33.00 L445.00,32.83 L446.33,32.00 L448.00,31.67 L449.17,31.00 L451.50,30.67 L453.00,30.00 L459.17,28.83 L465.83,28.17 L472.67,28.00 L483.17,28.83 L494.00,31.00 L495.17,31.67 L497.50,32.00 L498.67,32.67 L499.83,32.83 L501.17,33.67 L502.33,33.83 L509.50,37.50 L511.67,34.50 L514.00,30.17 L514.67,29.50 L517.00,25.17 L520.67,19.50 L521.33,18.00 L521.00,17.17 L514.83,14.00 L514.00,13.83 L512.83,13.00 L511.67,12.83 L510.33,12.00 L506.67,10.83 L505.17,10.00 L503.67,9.83 L501.83,9.00 L500.83,9.00 L499.00,8.17 L497.17,8.00 L494.00,7.00 L491.67,6.83 L489.67,6.17 L485.67,5.83 L482.33,5.17 L473.67,4.67 L462.33,4.67 L456.17,5.00 L444.33,7.00 L433.83,10.17 L433.00,10.83 L431.50,11.17 L430.17,12.00 L426.83,13.17 L424.00,15.00 L421.50,16.17 L418.33,18.17Z";
const $=s=>document.getElementById('f3d-'+s);
const stage=$('stage'), cv=$('cv');
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
try{await document.fonts.load('800 100px Inter');}catch(e){}

// ---------- рендер ----------
const renderer=new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:true,preserveDrawingBuffer:true});
const WEAK=document.documentElement.classList.contains('f3d-weak');renderer.setPixelRatio(Math.min(devicePixelRatio,WEAK?1:1.5));   // 1.5 достаточно для резкости, заметно легче для видеокарты
renderer.outputEncoding=THREE.sRGBEncoding;
renderer.toneMapping=THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure=0.88;
renderer.shadowMap.enabled=true;
renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=true;   // сцена статична: тени считаем один раз, а не каждый кадр
renderer.setClearColor(0x000000,0);
const ANI=renderer.capabilities.getMaxAnisotropy();
const MAXT=Math.min(renderer.capabilities.maxTextureSize,8192);
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(30,1,0.05,100);
(function(){
  const pm=new THREE.PMREMGenerator(renderer);const es=new THREE.Scene();
  es.add(new THREE.Mesh(new THREE.BoxGeometry(24,12,24),new THREE.MeshBasicMaterial({color:0x55585c,side:THREE.BackSide})));
  const soft=(w,h,x,y,z,ry,rx,i)=>{const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:new THREE.Color(i,i,i),side:THREE.DoubleSide}));m.position.set(x,y,z);m.rotation.set(rx||0,ry||0,0);es.add(m);};
  soft(10,3,0,5.8,0,0,Math.PI/2,3);soft(6,4,-9,2,4,Math.PI/2,0,3.2);soft(6,4,9,2,-3,-Math.PI/2,0,2.2);soft(8,3,0,2.5,11,Math.PI,0,2.6);
  scene.environment=pm.fromScene(es,0.04).texture;pm.dispose();
})();
scene.add(new THREE.HemisphereLight(0xffffff,0x3a3a3a,0.35));
const key=new THREE.DirectionalLight(0xffffff,1.5);key.position.set(-3,7,6);key.castShadow=true;
key.shadow.mapSize.set(2048,2048);Object.assign(key.shadow.camera,{left:-3.5,right:3.5,top:3.5,bottom:-3.5,near:1,far:20});
key.shadow.bias=-0.0005;key.shadow.radius=4;
const kt=new THREE.Object3D();kt.position.set(0,0.8,0);scene.add(kt);key.target=kt;scene.add(key);
const rim=new THREE.DirectionalLight(0xfff4d6,0.5);rim.position.set(6,4,-6);scene.add(rim);

const C=h=>new THREE.Color(h).convertSRGBToLinear();
const DS=THREE.DoubleSide;
const MAT={
  skin:new THREE.MeshPhysicalMaterial({color:C(0x383E42),roughness:.5,metalness:0,clearcoat:.4,clearcoatRoughness:.3,side:DS}),
  frame:new THREE.MeshStandardMaterial({color:C(0x8A8E92),roughness:.45,metalness:.35,side:DS}),
  inner:new THREE.MeshStandardMaterial({color:C(0xAEB4B9),roughness:.38,metalness:.85,side:DS}),
  galv:new THREE.MeshStandardMaterial({color:C(0xB4BABF),roughness:.34,metalness:.88,side:DS}),
  black:new THREE.MeshStandardMaterial({color:C(0x161616),roughness:.5,metalness:.1,side:DS}),
  handle:new THREE.MeshStandardMaterial({color:C(0x151515),roughness:.45,metalness:.1,side:DS}),
  fabric:new THREE.MeshStandardMaterial({color:C(0x3B3E42),roughness:.92,side:DS}),
  steel:new THREE.MeshStandardMaterial({color:C(0xE2E5E8),roughness:.22,metalness:.9,side:DS}),
  pvc:new THREE.MeshStandardMaterial({color:C(0x6B7277),roughness:.55,metalness:0,envMapIntensity:.55,side:DS}),   // серый ПВХ: лопатки каплеуловителя
  copper:new THREE.MeshStandardMaterial({color:C(0xC27C4C),roughness:.35,metalness:.85,side:DS}),
  rotor:new THREE.MeshStandardMaterial({color:C(0xAEB6BC),roughness:.38,metalness:.75,side:DS}),
  silencer:new THREE.MeshStandardMaterial({color:C(0xD5D9DC),roughness:.5,metalness:.5,side:DS}),
  fan:new THREE.MeshStandardMaterial({color:C(0x2B3440),roughness:.42,metalness:.6,side:DS}),
  actuator:new THREE.MeshStandardMaterial({color:C(0x8E9399),roughness:.5,metalness:.3,side:DS}),
  media:new THREE.MeshStandardMaterial({color:C(0xEDEBE4),roughness:.95,side:DS}),
  pframe:new THREE.MeshStandardMaterial({color:C(0x2C3135),roughness:.55,metalness:.15,side:DS}),   // порошковая окраска скрытого каркаса
  breaker:new THREE.MeshStandardMaterial({color:C(0x0E0F10),roughness:.38,metalness:0,side:DS}),     // уголки-прерыватели (пластик)
  fins:new THREE.MeshStandardMaterial({color:C(0xC8CDD2),roughness:.38,metalness:.85,side:DS}),     // алюминиевое оребрение
  tsheet:new THREE.MeshStandardMaterial({color:C(0xB9BEC3),roughness:.35,metalness:.85,side:DS}),   // трубная доска с выходами медных трубок
  base:new THREE.MeshStandardMaterial({color:C(0xA9AFB4),roughness:.45,metalness:.8,envMapIntensity:.32,side:DS}),
  inox:new THREE.MeshStandardMaterial({color:C(0xD6DADE),roughness:.3,metalness:1,side:DS}),   // шлифованная нержавеющая сталь
  nozzle:new THREE.MeshStandardMaterial({color:C(0x2c2f33),roughness:.42,metalness:.55,side:DS}),
  alu:new THREE.MeshStandardMaterial({color:C(0xD3D7DB),roughness:.26,metalness:.92,side:DS}),
};

// ---------- оцинковка: мелкий кристаллический «цветок», трипланарная проекция ----------
const SPANGLE=(function(){
  const N=512,c=document.createElement('canvas');c.width=c.height=N;const g=c.getContext('2d');const img=g.createImageData(N,N);
  const G=32,cs=N/G,seeds=[];                       // сетка затравок, ~2 на ячейку
  for(let j=0;j<G;j++)for(let i=0;i<G;i++){const a=[];for(let k=0;k<2;k++)a.push({x:(i+Math.random())*cs,y:(j+Math.random())*cs,v:Math.random(),gx:Math.random()*2-1,gy:Math.random()*2-1});seeds.push(a);}
  for(let y=0;y<N;y++)for(let x=0;x<N;x++){
    const ci=Math.floor(x/cs),cj=Math.floor(y/cs);let d1=1e9,d2=1e9,best=null;
    for(let dj=-1;dj<=1;dj++)for(let di=-1;di<=1;di++){
      const ii=(ci+di+G)%G,jj=(cj+dj+G)%G,ox=(ci+di-ii)*cs,oy=(cj+dj-jj)*cs;
      for(const s of seeds[jj*G+ii]){const dx=x-(s.x+ox),dy=y-(s.y+oy),d=dx*dx+dy*dy;
        if(d<d1){d2=d1;d1=d;best={s,dx,dy};}else if(d<d2)d2=d;}}
    const s=best.s;let v=0.35+0.5*s.v+0.12*((best.dx*s.gx+best.dy*s.gy)/cs);   // грань кристалла с лёгким градиентом
    const edge=Math.sqrt(d2)-Math.sqrt(d1);if(edge<1.1)v*=0.8;                    // границы зёрен
    v+=(Math.random()-0.5)*0.06;
    const r=Math.max(0,Math.min(255,v*255));const o=(y*N+x)*4;img.data[o]=img.data[o+1]=img.data[o+2]=r;img.data[o+3]=255;}
  g.putImageData(img,0,0);
  const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.anisotropy=ANI;return t;})();
function galvanize(mat,tile){
  mat.onBeforeCompile=sh=>{
    sh.uniforms.spgTex={value:SPANGLE};sh.uniforms.spgTile={value:tile};
    sh.vertexShader=sh.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 vWP;varying vec3 vWN;')
      .replace('#include <project_vertex>','#include <project_vertex>\nvWP=(modelMatrix*vec4(transformed,1.)).xyz;vWN=normalize(mat3(modelMatrix)*objectNormal);');
    sh.fragmentShader=sh.fragmentShader.replace('#include <common>','#include <common>\nvarying vec3 vWP;varying vec3 vWN;uniform sampler2D spgTex;uniform float spgTile;float spg;')
      .replace('#include <map_fragment>',`#include <map_fragment>
        {vec3 w=pow(abs(vWN),vec3(4.));w/=(w.x+w.y+w.z);vec3 p=vWP/spgTile;
         spg=texture2D(spgTex,p.yz).r*w.x+texture2D(spgTex,p.xz).r*w.y+texture2D(spgTex,p.xy).r*w.z;
         diffuseColor.rgb*=mix(0.7,1.18,spg);}`)
      .replace('#include <roughnessmap_fragment>','#include <roughnessmap_fragment>\nroughnessFactor*=mix(1.6,0.45,spg);');
  };mat.needsUpdate=true;}
galvanize(MAT.inner,0.45);galvanize(MAT.galv,0.45);galvanize(MAT.base,0.45);
// процедурный рисунок ТО: торцы ламелей (шаг 2.5 мм) и шахматная решётка медных трубок Ø12 на трубной доске
function hxPattern(mat,tubes){mat.onBeforeCompile=sh=>{
  sh.vertexShader=sh.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 vHP;varying vec3 vHN;').replace('#include <project_vertex>','#include <project_vertex>\nvHP=(modelMatrix*vec4(transformed,1.)).xyz*1000.;vHN=normalize(mat3(modelMatrix)*objectNormal);');
  sh.fragmentShader=sh.fragmentShader.replace('#include <common>','#include <common>\nvarying vec3 vHP;varying vec3 vHN;float hxM=0.;')
   .replace('#include <map_fragment>',`#include <map_fragment>
     {vec3 n=abs(vHN);
      if(${tubes?'n.z>max(n.x,n.y)':'false'}){vec2 q=vec2(vHP.x/22.,vHP.y/25.);float row=floor(q.x);q.y+=mod(row,2.)*.5;vec2 f=(fract(q)-.5)*vec2(22.,25.);float d=length(f);
        float tube=1.-smoothstep(5.5,6.5,d);float ring=(1.-smoothstep(7.,8.,d))-tube;
        diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.78,.43,.24),tube);diffuseColor.rgb*=1.-ring*.35;hxM=tube;}
      else if(n.x>max(n.y,n.z)){float s=fract(vHP.z/2.5);diffuseColor.rgb*=mix(.62,1.05,smoothstep(.0,.35,s)*smoothstep(1.,.65,s));}}`);
  };mat.needsUpdate=true;}
hxPattern(MAT.fins,false);hxPattern(MAT.tsheet,true);
// шлифовка нержавейки: продольные риски вдоль установки
const BRUSH=(function(){const N=512,c=document.createElement('canvas');c.width=c.height=N;const g=c.getContext('2d');g.fillStyle='#808080';g.fillRect(0,0,N,N);
  for(let i=0;i<2600;i++){const y=Math.random()*N,v=Math.random()<.5?255:0;g.fillStyle=`rgba(${v},${v},${v},${.05+Math.random()*.12})`;g.fillRect(Math.random()*N-N*.5,y,N*(.3+Math.random()*1.2),.6+Math.random()*.9);}
  const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.anisotropy=ANI;return t;})();
(function(mat){mat.onBeforeCompile=sh=>{sh.uniforms.brT={value:BRUSH};
  sh.vertexShader=sh.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 vBP;varying vec3 vBN;').replace('#include <project_vertex>','#include <project_vertex>\nvBP=(modelMatrix*vec4(transformed,1.)).xyz;vBN=normalize(mat3(modelMatrix)*objectNormal);');
  sh.fragmentShader=sh.fragmentShader.replace('#include <common>','#include <common>\nvarying vec3 vBP;varying vec3 vBN;uniform sampler2D brT;float brs;')
   .replace('#include <map_fragment>',`#include <map_fragment>
     {vec3 n=abs(vBN);vec2 uv=n.y>max(n.x,n.z)?vec2(vBP.x*0.6,vBP.z*6.):(n.z>n.x?vec2(vBP.x*0.6,vBP.y*6.):vec2(vBP.z*0.6,vBP.y*6.));
      brs=texture2D(brT,uv).r;diffuseColor.rgb*=mix(0.9,1.08,brs);}`)
   .replace('#include <roughnessmap_fragment>','#include <roughnessmap_fragment>\nroughnessFactor*=mix(1.35,0.7,brs);');};mat.needsUpdate=true;})(MAT.inox);

await new Promise(r=>setTimeout(r,0));   // отдаём управление браузеру — страница не «замирает» во время сборки сцены
// ---------- наклейки ----------
function tex(w,h,draw,opt){const c=document.createElement('canvas');c.width=w;c.height=h;const g=c.getContext('2d');draw(g,w,h);
  const t=new THREE.CanvasTexture(c);t.encoding=THREE.sRGBEncoding;t.anisotropy=ANI;
  if(opt&&opt.repeat){t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(opt.repeat[0],opt.repeat[1]);}return t;}
const INK='#EDC01C';
function icon(g,s,k,o){
  o=o||{};const ink=o.ink||INK;if(o.bg){g.fillStyle=o.bg;g.fillRect(0,0,s,s);}
  g.strokeStyle=ink;g.fillStyle=ink;g.lineCap='round';g.lineJoin='round';
  const lw=s*0.05,m=s*0.1,a=m,b=s-m,cx=s/2,cy=s/2;g.lineWidth=lw;g.strokeRect(a,a,b-a,b-a);g.beginPath();
  if(k==='filter'){const n=4,x1=s*0.36,x2=s*0.64,t=s*0.24,bo=s*0.76;g.moveTo(x1,t);for(let i=1;i<=n;i++)g.lineTo(i%2?x2:x1,t+(bo-t)*i/n);g.lineWidth=lw*1.1;g.stroke();}
  else if(k==='heater'){const r=s*0.22;g.moveTo(cx,cy-r);g.lineTo(cx,cy+r);g.moveTo(cx-r,cy);g.lineTo(cx+r,cy);g.lineWidth=lw*1.25;g.stroke();}
  else if(k==='cooler'){const r=s*0.22;g.moveTo(cx-r,cy);g.lineTo(cx+r,cy);g.lineWidth=lw*1.25;g.stroke();}
  else if(k==='fan'){const L=o.dir<0;   // шеврон от углов квадрата к середине противоположной стороны
    g.moveTo(L?b:a,a);g.lineTo(L?a:b,cy);g.lineTo(L?b:a,b);g.stroke();}
  else if(k==='rotor'){const r=s*0.25,ah=s*0.075;          // круг из двух стрелок по контуру
    for(const [t0,t1] of [[-Math.PI*0.92,-Math.PI*0.12],[Math.PI*0.08,Math.PI*0.88]]){g.beginPath();g.arc(cx,cy,r,t0,t1);g.stroke();
      const ex=cx+r*Math.cos(t1),ey=cy+r*Math.sin(t1),tx=-Math.sin(t1),ty=Math.cos(t1),nx=Math.cos(t1),ny=Math.sin(t1);
      g.beginPath();g.moveTo(ex+tx*ah,ey+ty*ah);g.lineTo(ex-tx*ah*0.35+nx*ah*0.75,ey-ty*ah*0.35+ny*ah*0.75);g.lineTo(ex-tx*ah*0.35-nx*ah*0.75,ey-ty*ah*0.35-ny*ah*0.75);g.closePath();g.fill();}}
  else if(k==='damper'){g.moveTo(a,b);g.lineTo(b,a);g.stroke();g.beginPath();g.arc(cx,cy,s*0.055,0,Math.PI*2);g.fill();}
  else if(k==='silencer'){const bw=s*0.1,t=a+lw*1.6,bo=b-lw*1.6,hh=(bo-t)*0.62;   // три кулисы в шахматном порядке
    g.fillRect(s*0.3-bw/2,t,bw,hh);g.fillRect(s*0.5-bw/2,bo-hh,bw,hh);g.fillRect(s*0.7-bw/2,t,bw,hh);}
  else if(k==='droplet'){const t=a+lw*1.8,bo=b-lw*1.8,amp=s*0.09,n=60;   // одна вертикальная волнистая линия
    g.moveTo(cx,t);for(let i=1;i<=n;i++){const y=t+(bo-t)*i/n;g.lineTo(cx+amp*Math.sin(i/n*Math.PI*2),y);}g.stroke();}
}
function chevron(g,x,y,h,dir,w){const d=dir<0?-1:1,hw=h*0.5;g.beginPath();g.moveTo(x-d*hw*0.55,y-hw);g.lineTo(x-d*hw*0.55+d*w,y-hw);g.lineTo(x+d*hw*0.45+d*w,y);
  g.lineTo(x-d*hw*0.55+d*w,y+hw);g.lineTo(x-d*hw*0.55,y+hw);g.lineTo(x+d*hw*0.45,y);g.closePath();g.fill();}
const logoPath=new Path2D(LOGO_D);

// ---------- загрузка модели ----------
let J,BIN;
try{
  const [r1,r2]=await Promise.all([fetch(BASE+'pv2.json'),fetch(BASE+'pv2.bin')]);
  if(!r1.ok||!r2.ok)throw new Error('http');
  J=await r1.json();BIN=await r2.arrayBuffer();
}catch(e){$('loading').textContent='Модель не загрузилась. Обновите страницу.';return;}
const root=new THREE.Group();root.scale.setScalar(0.001);root.position.set(1.155,0.113,0.475*0+0.475);scene.add(root);
const DOORS=new THREE.Group();root.add(DOORS);   // двери стороны обслуживания (снимаются в разрезе)
const geos=J.protos.map(p=>{   // формат v2: координаты с шагом 0.2 мм, дельта по осям; индексы — дельта+zigzag+varint (в 3 раза меньше по сети)
  const n=p.n,u8=new Uint8Array(BIN),dv=new DataView(BIN),pos=new Float32Array(n*3);let off=p.o;
  for(let c=0;c<3;c++){let v=0;const lo=p.lo[c],st=p.st;for(let i=0;i<n;i++){v=(v+dv.getUint16(off,true))&0xFFFF;off+=2;pos[i*3+c]=lo+v*st;}}
  const idx=n>65535?new Uint32Array(p.ni):new Uint16Array(p.ni);let o=p.o+p.vl,last=0;
  for(let i=0;i<p.ni;i++){let x=0,m=1,b;do{b=u8[o++];x+=(b&127)*m;m*=128;}while(b&128);last+=(x&1)?-(x+1)/2:x/2;idx[i]=last;}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pos,3));g.setIndex(new THREE.BufferAttribute(idx,1));
  g.computeVertexNormals();return g;});
const mtx=new THREE.Matrix4();const HANDLES=[],TOPFRAME=[],SKINS=[],LATCHP=[],ACTS=[];
for(let [pi,a,cat,mod,name,door] of J.inst){
  const opi=J.protos[pi].op??pi;   // исходный номер детали (до упаковки модели v2)
  if(name.startsWith('Деталь1^513'))continue;                 // скрытый лист под крышкой
  if(name.startsWith('Панель внутренняя^513'))cat='inner';
  if(name.startsWith('Трубка('))continue;
  if(cat==='rotor')continue;
  if(cat==='silencer')cat='inox';                               // корпус кулис — нержавеющая сталь
  if(name.startsWith('Водяной нагрев')){if(opi===139)cat='fins';else if(opi===36||opi===169)cat='tsheet';else if(opi===64||opi===31)cat='galv';}   // ТО: алюминиевые ламели, медные трубки
  if(/^(Зашивка|Стяжка направляющих|Направляющая роторного)/.test(name))continue;      // под прежний корпус 780×780 — заменены сплошной зашивкой
  if(name.startsWith('Поддон'))cat='inox';
  if(/^(Уголок_New|Швеллер|Швелле |Уголок установочный|Направляющая каплеуловителя)/.test(name))cat='base';      // опорная рама: без ложных бликов от окружения внутри профиля                       // поддон охладителя — нержавейка
  const isTopFrame=name.startsWith('РАмка Панель_7_0,2');
  if(/^Рама модуля/.test(name))cat='pframe';                    // несущий скрытый каркас — полимерное покрытие
  if(/^Соединитель для профиля/.test(name))cat='breaker';       // угловые соединители-прерыватели — чёрные                                   // ротор рисуем ниже барабаном
  if(/^Клапан/.test(mod)&&(cat==='galv'||cat==='steel'))cat='alu';   // воздушные клапаны — алюминий   // дренаж поддона охладителя — переносим в секцию каплеуловителя
  const m=new THREE.Mesh(geos[pi],MAT[cat]||MAT.galv);if(cat==='handle'&&door)HANDLES.push({m,pi});if(cat==='skin')SKINS.push({m,door});if(cat==='actuator')ACTS.push(m);
  mtx.set(a[0],a[3],a[6],a[9], a[1],a[4],a[7],a[10], a[2],a[5],a[8],a[11], 0,0,0,1);
  m.matrixAutoUpdate=false;m.matrix.copy(mtx);
  if(name.startsWith('Водяной нагрев')&&(opi===206||opi===34||opi===302||opi===356))continue;   // коллекторы и патрубки ТО — ровные цилиндры, см. ниже
  const NZ=false;   // наружные патрубки теплоносителя
  if(NZ)m.material=MAT.nozzle;
  if(name.startsWith('Крышка шумоглушителя'))m.matrix.premultiply(new THREE.Matrix4().makeTranslation(0,a[4]<0?-35:35,0));   // кулисы выше: зазор до корпуса ~15 мм
  m.castShadow=true;m.receiveShadow=true;
  (door?DOORS:root).add(m);if(isTopFrame)TOPFRAME.push(m);
  if(/^(Водяной нагрев|Охладитель _|Стяжка ТО)/.test(name)){const c=m.clone();c.matrix.premultiply(new THREE.Matrix4().makeTranslation(275,0,0));root.add(c);}
}
$('loading').hidden=true;

await new Promise(r=>setTimeout(r,0));   // отдаём управление браузеру — страница не «замирает» во время сборки сцены
// ---------- дополнения: поддон ротора, фильтрующие вставки ----------
function box(sx,sy,sz,mat,x,y,z,parent){const m=new THREE.Mesh(new THREE.BoxGeometry(sx,sy,sz),mat);m.position.set(x,y,z);m.castShadow=m.receiveShadow=true;(parent||root).add(m);return m;}
function cyl(r,h,mat,parent,seg){const m=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,seg||32),mat);m.castShadow=true;(parent||root).add(m);return m;}
// поддон для конденсата в секции ротора (мм): дно x −320…−15, глубина z −920…−30
(function(){
  const x0=-296,x1=-40,z0=-870,z1=-80,y0=26,   // поддон между плитами зашивки и угловыми соединителями
  h=34,t=1.5,cx=(x0+x1)/2,cz=(z0+z1)/2;
  box(x1-x0,t,z1-z0,MAT.inox,cx,y0,cz);
  box(x1-x0,h,t,MAT.inox,cx,y0+h/2,z0);box(x1-x0,h,t,MAT.inox,cx,y0+h/2,z1);
  box(t,h,z1-z0,MAT.inox,x0,y0+h/2,cz);box(t,h,z1-z0,MAT.inox,x1,y0+h/2,cz);
  // дренажный патрубок на сторону обслуживания
  // одинаковые патрубки: под ротором и под охладителем/каплеуловителем
  for(const dx of [-168,-1000]){
    const yy=y0+16;
    const p=cyl(16,200,MAT.inox);p.rotation.x=Math.PI/2;p.position.set(dx,yy,20);              // труба из нержавейки до z=120
    const e=new THREE.Mesh(new THREE.RingGeometry(10,16,32),MAT.inox);e.position.set(dx,yy,120.2);root.add(e);
    const c=new THREE.Mesh(new THREE.CircleGeometry(10,24),MAT.black);c.position.set(dx,yy,120);root.add(c);
  }
})();
// роторный рекуператор: корпус 780×780 с барабаном Ø736, сотовая алюминиевая насадка, ступица, спицы, ремень, привод
(function(){
  const X0=-300,X1=-34,CY=625,CZ=-475,HZ=450,HY=600,H=450,RW=436,XC=(X0+X1)/2,L=X1-X0-3;   // торцы барабана заподлицо с плитами   // барабан максимального диаметра по ширине секции
  const honey=tex(1024,1024,(g,w,h)=>{const c=w/2;g.fillStyle='#aeb4ba';g.fillRect(0,0,w,h);
    for(let r=8;r<c;r+=3.2){g.beginPath();g.arc(c,c,r,0,Math.PI*2);g.strokeStyle=(Math.round(r/3.2)%2)?'rgba(255,255,255,.35)':'rgba(40,45,50,.35)';g.lineWidth=1.1;g.stroke();
      const n=Math.floor(2*Math.PI*r/3.6),off=(Math.round(r/3.2)%2)*0.5;g.beginPath();
      for(let k=0;k<n;k++){const a=(k+off)/n*Math.PI*2,ca=Math.cos(a),sa=Math.sin(a);g.moveTo(c+ca*r,c+sa*r);g.lineTo(c+ca*(r+3.2),c+sa*(r+3.2));}
      g.strokeStyle='rgba(30,34,38,.45)';g.lineWidth=.7;g.stroke();}
    const gr=g.createRadialGradient(c,c,c*0.1,c,c,c);gr.addColorStop(0,'rgba(255,255,255,.08)');gr.addColorStop(1,'rgba(0,0,0,.12)');g.fillStyle=gr;g.fillRect(0,0,w,h);},{});
  const faceMat=new THREE.MeshStandardMaterial({map:honey,bumpMap:honey,bumpScale:.8,roughness:.42,metalness:.75,side:DS});
  const G=new THREE.Group();root.add(G);
  const add=(geo,mat,x,y,z,ry,rz)=>{const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);if(ry)m.rotation.y=ry;if(rz)m.rotation.z=rz;m.castShadow=m.receiveShadow=true;G.add(m);return m;};
  // лицевые плиты корпуса с круглым проёмом
  const sh=new THREE.Shape();sh.moveTo(-HZ,-HY);sh.lineTo(HZ,-HY);sh.lineTo(HZ,HY);sh.lineTo(-HZ,HY);sh.lineTo(-HZ,-HY);   // зашивка на всё сечение — без просветов
  const hole=new THREE.Path();hole.absarc(0,0,RW+1,0,Math.PI*2,true);sh.holes.push(hole);
  const plate=new THREE.ExtrudeGeometry(sh,{depth:2,bevelEnabled:false,curveSegments:96});
  for(const x of [X0,X1-2])add(plate,MAT.galv,x,CY,CZ,Math.PI/2);
  // угловые стойки
  // барабан: обечайка, торцы с сотовой насадкой, ремень
  const shell=new THREE.CylinderGeometry(RW,RW,L,128,1,true);add(shell,MAT.alu,XC,CY,CZ,0,Math.PI/2);
  const face=new THREE.CircleGeometry(RW-1,128);
  add(face,faceMat,XC-L/2,CY,CZ,-Math.PI/2);add(face,faceMat,XC+L/2,CY,CZ,Math.PI/2);
  for(const dx of [-L/2+6,L/2-6]){const t=new THREE.TorusGeometry(RW+0.5,2.2,8,160);add(t,MAT.steel,XC+dx,CY,CZ,Math.PI/2);}  // кромки обода
  add(new THREE.TorusGeometry(RW+2.5,3.2,8,160),MAT.black,XC,CY,CZ,Math.PI/2);                                     // приводной ремень
  for(const x of [X0+2.5,X1-2.5]){add(new THREE.TorusGeometry(RW+1.5,3,8,160),MAT.black,x,CY,CZ,Math.PI/2);}           // щёточные уплотнения
  // ступица и спицы
  add(new THREE.CylinderGeometry(42,42,L+24,48),MAT.steel,XC,CY,CZ,0,Math.PI/2);
  for(const dx of [-L/2-2,L/2+2]){add(new THREE.CylinderGeometry(72,72,6,48),MAT.galv,XC+dx,CY,CZ,0,Math.PI/2);
    for(let k=0;k<8;k++){const a=k/8*Math.PI*2,rm=(72+RW)/2,m=new THREE.Mesh(new THREE.BoxGeometry(5,RW-72,22),MAT.galv);
      m.position.set(XC+dx,CY+Math.cos(a)*rm,CZ+Math.sin(a)*rm);m.rotation.x=a;m.castShadow=true;G.add(m);}}
  // разделительная балка по оси (приток снизу / вытяжка сверху) с щётками
  for(const x of [X0-5,X1+3]){box(8,56,2*H,MAT.galv,x,CY,CZ,G);box(10,6,2*H,MAT.black,x,CY-31,CZ,G);box(10,6,2*H,MAT.black,x,CY+31,CZ,G);}
  // привод: мотор-редуктор со шкивом в нижнем углу корпуса
  const mz=CZ+HZ-90,my=CY-HY+95;
  add(new THREE.CylinderGeometry(40,40,120,32),MAT.fan,XC-30,my,mz,0,Math.PI/2);
  add(new THREE.CylinderGeometry(22,22,24,32),MAT.black,XC+45,my,mz,0,Math.PI/2);
  box(150,10,90,MAT.galv,XC,my-45,mz,G);
})();
// ПВХ-профиль рамки крышки над секцией входа и шумоглушителя (в STEP у этой панели нет рамки):
// берём настоящий профиль рамки крышки соседней секции (РАмка Панель_7) и удлиняем, сохраняя усовые резы
(function(){
  const OX0=-1106,OX1=-314,NX0=-2383,NX1=-1064,d0=NX0-OX0,d1=NX1-OX1,mid=(OX0+OX1)/2;
  for(const m of TOPFRAME){
    const g=m.geometry.clone();g.applyMatrix4(m.matrix);g.computeBoundingBox();const bb=g.boundingBox;
    const pos=g.attributes.position,long=bb.max.x-bb.min.x>300,cx=(bb.min.x+bb.max.x)/2;
    for(let i=0;i<pos.count;i++){const x=pos.getX(i);pos.setX(i,x+(long?(x<mid?d0:d1):(cx<mid?d0:d1)));}
    pos.needsUpdate=true;g.computeVertexNormals();
    const k=new THREE.Mesh(g,MAT.frame);k.castShadow=k.receiveShadow=true;root.add(k);}
})();
// фильтрующие кассеты в направляющих: гофрированное стекловолокно в оцинкованной рамке
(function(){
  const fib=tex(512,512,(g,w,h)=>{g.fillStyle='#f5f5f2';g.fillRect(0,0,w,h);
    for(let i=0;i<5000;i++){const x=Math.random()*w,y=Math.random()*h,a=Math.random()*Math.PI,l=6+Math.random()*26;
      g.strokeStyle=Math.random()<.5?'rgba(255,255,250,.35)':'rgba(150,152,156,.16)';g.lineWidth=.6+Math.random()*.8;
      g.beginPath();g.moveTo(x,y);g.lineTo(x+Math.cos(a)*l,y+Math.sin(a)*l);g.stroke();}},{repeat:[1,1]});
  fib.wrapS=fib.wrapT=THREE.RepeatWrapping;
  const mat=new THREE.MeshStandardMaterial({map:fib,bumpMap:fib,bumpScale:.4,roughness:.96,metalness:0,side:DS,vertexColors:true});
  function pleatGeo(xc,D,y0,y1,z0,z1,p){
    const n=Math.round((z1-z0)/(p/2)),pos=[],uv=[],col=[],dz=(z1-z0)/n;
    for(let i=0;i<n;i++){const za=z0+i*dz,zb=za+dz,xa=xc+(i%2?D/2:-D/2),xb=xc+(i%2?-D/2:D/2);
      const q=[[xa,y0,za],[xb,y0,zb],[xb,y1,zb],[xa,y0,za],[xb,y1,zb],[xa,y1,za]];
      const u=[[0,0],[1,0],[1,1],[0,0],[1,1],[0,1]];
      for(let k=0;k<6;k++){pos.push(...q[k]);uv.push((i+u[k][0])*0.12,u[k][1]*(y1-y0)/180);const c=q[k][0]>xc?1.0:0.72;col.push(c,c,c);}}
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setAttribute('color',new THREE.Float32BufferAttribute(col,3));
    g.computeVertexNormals();return g;}
  for(const [x,y0,y1] of [[125,52,548],[-960,702,1198]]){
    const m=new THREE.Mesh(pleatGeo(x,40,y0+4,y1-4,-919,-31,34),mat);m.castShadow=m.receiveShadow=true;root.add(m);
    box(48,4,896,MAT.galv,x,y0+2,-475);box(48,4,896,MAT.galv,x,y1-2,-475);            // верх/низ рамки
    box(48,y1-y0,8,MAT.galv,x,(y0+y1)/2,-27);box(48,y1-y0,8,MAT.galv,x,(y0+y1)/2,-923); // торцы
    for(const dx of [-25,25])for(const yy of [y0+(y1-y0)/3,y0+2*(y1-y0)/3])box(1.5,3,888,MAT.galv,x+dx,yy,-475); // проволочные стяжки
  }
})();
// заполнение кулис шумоглушителей: тёмная минвата, кашированная стеклохолстом
(function(){
  const weave=tex(256,256,(g,w,h)=>{g.fillStyle='#2b2e31';g.fillRect(0,0,w,h);
    const n=16,c=w/n;
    for(let i=0;i<n;i++)for(let j=0;j<n;j++){const horiz=(i+j)%2===0;
      const gr=g.createLinearGradient(i*c,j*c,horiz?i*c:(i+1)*c,horiz?(j+1)*c:j*c);
      gr.addColorStop(0,'#24272a');gr.addColorStop(.5,'#3a3e42');gr.addColorStop(1,'#24272a');
      g.fillStyle=gr;g.fillRect(i*c+0.6,j*c+0.6,c-1.2,c-1.2);}
    for(let k=0;k<2200;k++){g.fillStyle=`rgba(${Math.random()<.5?'255,255,255':'0,0,0'},${Math.random()*0.06})`;g.fillRect(Math.random()*w,Math.random()*h,1+Math.random()*2,1);}
  },{repeat:[1,1]});
  const mk=(sx,sy)=>{const t=weave.clone();t.needsUpdate=true;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(sx/60,sy/60);
    return new THREE.MeshStandardMaterial({map:t,bumpMap:t,bumpScale:0.6,roughness:.92,metalness:0,side:DS});};
  const SPL=[[-2456,-1914,60,539],[-1856,-1314,710,1189]];   // между бортами и крышками кулис
  for(const [x0,x1,y0,y1] of SPL){const mat=mk(x1-x0,y1-y0);
    for(const zc of [-175,-375,-575,-775])box(x1-x0,y1-y0,97,mat,(x0+x1)/2,(y0+y1)/2,zc);}
})();

await new Promise(r=>setTimeout(r,0));   // отдаём управление браузеру — страница не «замирает» во время сборки сцены
// ---------- обозначения на стороне обслуживания ----------
const ZS=24.8;
const STICK=new THREE.Group();DOORS.add(STICK);
function decal(t,w,h,x,y,z,parent){const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshStandardMaterial({map:t,transparent:true,roughness:.5,polygonOffset:true,polygonOffsetFactor:-2}));
  m.position.set(x,y,z===undefined?ZS:z);(parent||STICK).add(m);return m;}
const ICON={};const iconT=(k,dir)=>{const key=k+(dir<0?'L':'');return ICON[key]||(ICON[key]=tex(256,256,(g,s)=>icon(g,s,k,{dir})));};
// двери стороны обслуживания: [x0,x1,y0,y1,элемент,подпись,направление вентилятора]
const L0=1,L1=599,U0=651,U1=1248;
const DOORLIST=[
  [-2684,-1687,L0,L1,'silencer','Шумоглушитель'],
  [-1684,-1187,L0,L1,'fan','Вентилятор приточный',-1],
  [-1184,-887,L0,L1,'droplet','Каплеуловитель'],
  [-884,-587,L0,L1,'cooler','Охладитель фреоновый (DX)'],
  [-584,-337,L0,L1,'heater','Нагреватель водяной'],
  [-334,-1,L0,U1,'rotor','Роторный рекуператор'],
  [1,248,L0,L1,'filter','Фильтр'],
  [-2359,-2087,U0,U1,null,'Вход удаляемого воздуха'],
  [-2084,-1087,U0,U1,'silencer','Шумоглушитель'],
  [-1084,-837,U0,U1,'filter','Фильтр'],
  [-834,-337,U0,U1,'fan','Вентилятор вытяжной',1],
  [1,273,U0,U1,null,'Выход к клапану выброса'],
];
// ручки: одна вертикальная по центру каждой двери, на середине яруса
(function(){
  const bb=new THREE.Box3(),c=new THREE.Vector3();let ref=null;
  for(const h of HANDLES){if(!geos[h.pi].boundingBox)geos[h.pi].computeBoundingBox();bb.copy(geos[h.pi].boundingBox).applyMatrix4(h.m.matrix);bb.getCenter(c);
    const sz=new THREE.Vector3();bb.getSize(sz);if(!ref&&sz.y>sz.x&&Math.abs(c.x-125)<30)ref={h,c:c.clone()};}
  if(!ref)return;
  for(const h of HANDLES)h.m.visible=false;
  const put=(x,y)=>{const m=new THREE.Mesh(ref.h.m.geometry,ref.h.m.material);m.matrixAutoUpdate=false;
    m.matrix.copy(ref.h.m.matrix).premultiply(new THREE.Matrix4().makeTranslation(x-ref.c.x,y-ref.c.y,0));m.castShadow=true;DOORS.add(m);};
  for(const [x0,x1,y0,y1,k] of DOORLIST){const cx=(x0+x1)/2;
    if(k==='filter'||k==='fan')continue;                                   // там поворотные замки
    if(y1-y0>900)put(cx,(y0+y1)/2);else put(cx,y0<600?ref.c.y:ref.c.y+650);}
  // поворотные замки-ручки на секциях фильтров и вентиляторов: по два у края двери
  const lm=MAT.handle;
  // лёгкая поворотная ручка: тонкая круглая розетка без квадратного основания и гладкий продольный рычаг
  const ros=new THREE.CylinderGeometry(13,14,3,40);ros.rotateX(Math.PI/2);ros.translate(0,0,1.5);
  const rosE=new THREE.TorusGeometry(13.2,1.4,10,40);rosE.translate(0,0,3);
  const pin=new THREE.CylinderGeometry(6,7,12,24);pin.rotateX(Math.PI/2);pin.translate(0,0,9);
  const prof=[];const LEN=96;
  for(let i=0;i<=24;i++){const t=i/24,y=-t*LEN;           // профиль рычага: скругление у оси, плавное сужение, скруглённый конец
    const r=t<0.12?9.5*Math.sin(Math.PI/2*t/0.12):t>0.9?7*Math.cos(Math.PI/2*(t-0.9)/0.1):9.5-2.5*(t-0.12)/0.78;
    prof.push(new THREE.Vector2(Math.max(r,0.01),y));}
  const lev=new THREE.LatheGeometry(prof,28);lev.scale(1,1,.72);lev.translate(0,8,18);
  const latch=(x,y)=>{const g=new THREE.Group();for(const geo of [ros,rosE,pin,lev]){const m=new THREE.Mesh(geo,lm);m.castShadow=true;g.add(m);}
    g.position.set(x,y,ZS);DOORS.add(g);LATCHP.push([x,y]);};
  for(const [x0,x1,y0,y1,k] of DOORLIST){if(k!=='filter'&&k!=='fan')continue;const ins=x1-x0<300?30:42;for(const x of [x0+ins,x1-ins]){const yt=y1-90;latch(x,yt);latch(x,(y0+y1)-yt+80);}}   // симметрично относительно середины двери   // по 4 замка: у обоих краёв, сверху и снизу   // вверху — ниже фирменной ленты
})();
const S=100;
for(const [x0,x1,y0,y1,k,,dir] of DOORLIST){
  if(!k)continue;
  decal(iconT(k,dir),S,S,(x0+x1)/2,y0+78+S/2);   // все значки — внизу по центру секции, над дренажными патрубками
}
// винты с полукруглой головкой под шестигранник (ISO 7380) по периметру всех наружных панелей, шаг ~250 мм
(function(){
  const R=7.5,IN=15,STEP=250;
  const head=new THREE.SphereGeometry(R,28,10,0,Math.PI*2,0,Math.PI/2);head.rotateX(Math.PI/2);head.scale(1,1,0.42);
  const wash=new THREE.CylinderGeometry(R*1.12,R*1.12,0.8,28);wash.rotateX(Math.PI/2);wash.translate(0,0,0.4);
  const hex=new THREE.CylinderGeometry(2.6,2.6,0.5,6);hex.rotateX(Math.PI/2);hex.translate(0,0,R*0.42+0.05);
  const mHead=new THREE.MeshStandardMaterial({color:C(0xC9CDD1),roughness:.28,metalness:.95});
  const mHex=new THREE.MeshStandardMaterial({color:0x0b0c0d,roughness:.6,metalness:.2});
  const all=new THREE.Box3(),bb=new THREE.Box3(),ctr=new THREE.Vector3(),sz=new THREE.Vector3();
  const boxes=SKINS.map(s=>{const g=s.m.geometry;if(!g.boundingBox)g.computeBoundingBox();const b=g.boundingBox.clone().applyMatrix4(s.m.matrix);all.union(b);return {b,door:s.door};});
  all.getCenter(ctr);
  const keep=[[-168,42],[-1000,42]];                       // дренажные патрубки
  const busy=(p,ax)=>ax===2&&p[2]>0&&(keep.some(([x,y])=>Math.hypot(p[0]-x,p[1]-y)<36)||LATCHP.some(([x,y])=>Math.abs(p[0]-x)<32&&p[1]<y+34&&p[1]>y-118));
  const seen=new Set(),sets={door:[],fix:[]};
  for(const {b,door} of boxes){b.getSize(sz);const d=[sz.x,sz.y,sz.z];const ax=d.indexOf(Math.min(...d));
    const [u,v]=[0,1,2].filter(k=>k!==ax);if(d[u]<120||d[v]<120)continue;
    const lo=[b.min.x,b.min.y,b.min.z],hi=[b.max.x,b.max.y,b.max.z];
    if(ax===1&&hi[1]<120)continue;                                 // днище не видно
    const out=ax===1?1:(lo[ax]+hi[ax])/2>[ctr.x,ctr.y,ctr.z][ax]?1:-1, face=out>0?hi[ax]+0.05:lo[ax]-0.05;
    const line=(a,b2)=>{const n=Math.max(1,Math.round((b2-a)/STEP));return Array.from({length:n+1},(_,i)=>a+(b2-a)*i/n);};
    const us=line(lo[u]+IN,hi[u]-IN),vs=line(lo[v]+IN,hi[v]-IN),pts=[];
    for(const a of us){pts.push([a,vs[0]],[a,vs[vs.length-1]]);}
    for(const c of vs.slice(1,-1)){pts.push([us[0],c],[us[us.length-1],c]);}
    for(const [a,c] of pts){const p=[0,0,0];p[u]=a;p[v]=c;p[ax]=face;
      const key=p.map(q=>Math.round(q/6)).join(',');if(seen.has(key))continue;seen.add(key);
      if(busy(p,ax))continue;
      const n=[0,0,0];n[ax]=out;(door?sets.door:sets.fix).push({p,n});}
  }
  const o=new THREE.Object3D(),Z=new THREE.Vector3(0,0,1),N=new THREE.Vector3(),q=new THREE.Quaternion(),qz=new THREE.Quaternion();
  for(const [list,parent] of [[sets.door,DOORS],[sets.fix,root]]){if(!list.length)continue;
    const ims=[[wash,mHead],[head,mHead],[hex,mHex]].map(([g,m])=>{const im=new THREE.InstancedMesh(g,m,list.length);im.castShadow=true;parent.add(im);return im;});
    list.forEach(({p,n},i)=>{N.set(...n);q.setFromUnitVectors(Z,N);qz.setFromAxisAngle(Z,(i*0.7)%1.05);o.quaternion.copy(q).multiply(qz);
      o.position.set(p[0],p[1],p[2]);o.updateMatrix();for(const im of ims)im.setMatrixAt(i,o.matrix);});}
})();
// приводы воздушных клапанов FERC FRP: фирменная наклейка по форме лицевой грани
const FRP_LABEL='data:image/png;base64,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gUAACAQCQCAQAAKBABAIBIBAIBAAAoEAEAgEgEAgAAQCASAQCACBQAAIBAJAIBAAAoEAEAgEAkAgEAACgQAQCASAQCAABAIBIBAIAIFAAAgEAkAgEAgAgUAACAQCQCAQAAKBABAIBIBAIAAEAgEgEAgAgUAACAQCASAQCACBQAAIBAJAIBAAAoEAEAgEgEAgAAQCASAQCASAQCAABAIBIBAIAIFAAAgEAkAgEAACgQAQCASAQCAABAKBABAIBIBAIAAEAgEgEAgAgUAACAQCQCAQAAKBABAIBAJAIBAAAoEAEAgEgEAgAAQCASAQCACBQAAIBAJAIBAAAoFAAAgEAkAgEAACgQAQCASAQCAABAIBIBAIAIFAAAgEAkAgEAgAgUAACAQCQCAQAAKBABAIBIBAIAAEAgEgEAgAgUAgAAQCASAQCACBQAAIBAJAIBAAAoEAEAgEgEAgAAQCASAQCASAQCAABAIBIBAIAIFAAAgEAkAgEAACgQAQCASAQCAQAAKBABAIBIBAIAAEAgEgEAgAgUAACAQCQCAQAAKBABAIBAJAIBAAAoEAEAgEgEAgAAQCASAQCACBQAAIBAJAIBAIAIFAAAgEAkAgEAACgQAQCASAQCAABAIBIBAIAIFAAAgEAgEgEAgAgUAACAQCQCAQAAKBABAIBIBAIAAEAgEgEAgEgEAgAAQCASAQCACBQAAIBAJAIBAAAoEAEAgEgEAgAAQCgQAQCASAQCAABAIBIBAIAIFAAAgEAkAgEAACgQAQCASAQCAQAAKBABAIBIBAIAAEAgEgEAgAgUAACAQCQCAQAAKBQAAIBAJAIBAAAoEAEAgEgEAgAAQCASAQCACBQAAIBAJAIBAIAIFAAAgEAkAgEAACgQAQCASAQCAABAIBIBAIAIFAIAAEAgEgEAgAgUAACAQCQCAQAAKBABAIBIBAIAAEAgEgEAgEgEAgAAQCASAQCACBQAAIBAJAIBAAAoEAEAgEgEAgEAACgQAQCASAQCDPkP8fXZV8nFQeM0gAAAAASUVORK5CYII=';
(function(){
  if(!ACTS.length)return;
  // шильд по контуру лицевой грани привода: купол сверху, скруглённые углы, вырезы под вал, крепёжные отверстия и паз
  const lt=new THREE.TextureLoader().load(FRP_LABEL);lt.encoding=THREE.sRGBEncoding;lt.anisotropy=ANI;
  const lm=new THREE.MeshStandardMaterial({map:lt,transparent:true,alphaTest:.02,roughness:.45,metalness:0,polygonOffset:true,polygonOffsetFactor:-2});
  const bb=new THREE.Box3();
  for(const m of ACTS){const g=m.geometry;if(!g.boundingBox)g.computeBoundingBox();bb.copy(g.boundingBox).applyMatrix4(m.matrix);
    const p=new THREE.Mesh(new THREE.PlaneGeometry(80,160),lm);p.position.set(bb.min.x-2.25+40,bb.max.y+3.03-80,30.75);p.receiveShadow=true;root.add(p);}
})();
// пиктограммы клапанов на корпусах клапанов (снаружи, сторона обслуживания)
for(const y of [430,1080]){decal(iconT('damper'),70,70,337,y,33.5,root);}
// фирменная лента: ❯❯❯ FERC ❮❮❮ по всей длине стороны обслуживания (верхний ярус)
(function(){
  const X0=-2066,X1=-1105,Y=1130,HH=100,LX=-1585.5;   // только на двери верхнего шумоглушителя              // мм
  const W=X1-X0, pxmm=Math.min(MAXT/W,2.2), cw=Math.round(W*pxmm), ch=Math.round(HH*pxmm);
  const t=tex(cw,ch,(g,w,h)=>{
    g.fillStyle=INK;
    const lh=h*0.9, lw=lh*532/144, lx=(LX-X0)*pxmm-lw/2, ly=(h-lh)/2;
    g.save();g.translate(lx,ly);g.scale(lh/144,lh/144);g.fill(logoPath);g.restore();
    const chh=h*0.62, chw=chh*0.30, step=chh*0.86, gap=chh*0.55;
    for(let x=lx-gap;x>chh*0.5;x-=step)chevron(g,x,h/2,chh,1,chw);
    for(let x=lx+lw+gap;x<w-chh*0.5;x+=step)chevron(g,x,h/2,chh,-1,chw);
  });
  decal(t,W,HH,(X0+X1)/2,Y,ZS+0.4);
})();
// шильдик
const plate=tex(560,400,(g,w,h)=>{g.fillStyle='#f6f6f3';g.fillRect(0,0,w,h);g.strokeStyle='#9a9a95';g.lineWidth=4;g.strokeRect(10,10,w-20,h-20);
  g.fillStyle=INK;g.font="800 54px Inter, sans-serif";g.fillText('FERC EVO',36,84);g.font="600 30px Inter, sans-serif";g.fillText('Установка ПВ1',36,134);
  g.font="400 22px Inter, sans-serif";g.fillStyle='#444';g.fillText('Приточно-вытяжная, роторный',36,176);g.fillText('рекуператор',36,204);
  g.strokeStyle='#bbb';g.lineWidth=2;for(let i=0;i<4;i++){g.beginPath();g.moveTo(36,250+i*30);g.lineTo(w-36,250+i*30);g.stroke();}
  g.fillStyle='#444';g.font="500 20px Inter, sans-serif";g.fillText('ООО «ФЕРЦ», г. Минск',36,h-30);});
// проходные фланцы из нержавеющей стали (как на установках): круглая пластина на 8 винтах, чёрная резиновая втулка
(function(){
  const R=50,disc=new THREE.CylinderGeometry(R,R,1.5,64);disc.rotateX(Math.PI/2);
  const bev=new THREE.TorusGeometry(R-0.4,0.9,6,64);
  const grom=new THREE.TorusGeometry(19.5,3.2,12,40);
  const scr=new THREE.SphereGeometry(2.6,12,6,0,Math.PI*2,0,Math.PI/2);scr.rotateX(Math.PI/2);scr.scale(1,1,.5);
  const ss=new THREE.MeshStandardMaterial({color:C(0xEDEFF1),roughness:.12,metalness:1});
  const rub=new THREE.MeshStandardMaterial({color:C(0x111213),roughness:.75,metalness:0});
  for(const dx of [0,275])for(const [x,y] of [[-819.1,235],[-703.6,455.3]]){   // по осям патрубков ТО
    const g=new THREE.Group();g.position.set(x+dx,y,ZS+0.8);DOORS.add(g);
    const d=new THREE.Mesh(disc,ss);d.castShadow=d.receiveShadow=true;g.add(d);
    const e=new THREE.Mesh(bev,ss);e.position.z=0.2;g.add(e);
    const r=new THREE.Mesh(grom,rub);r.position.z=1.6;g.add(r);
    for(let i=0;i<8;i++){const a=i/8*Math.PI*2+Math.PI/8,m=new THREE.Mesh(scr,ss);m.position.set(Math.cos(a)*(R-9),Math.sin(a)*(R-9),0.8);g.add(m);}
  }
})();
// латунные резьбовые муфты на концах патрубков и перемычки к коллекторам (внутри)
(function(){
  const brass=new THREE.MeshStandardMaterial({color:C(0xC9A04A),roughness:.28,metalness:1});
  // теплообменник: два вертикальных коллектора Ø35 и патрубки Ø35, выходящие прямо из них наружу (одна ось — без смещений)
  const R=17.5,ZC=-47,ZE=120.5;                                    // радиус трубы, ось коллекторов, торец патрубка
  const body=new THREE.CylinderGeometry(R+2.5,R+2.5,32,48);body.rotateX(Math.PI/2);   // муфта плотно на патрубке, стенка 2,5 мм
  const thr=new THREE.TorusGeometry(R+2.7,1,6,48);
  const face=new THREE.RingGeometry(R-3.5,R+2.5,48);const hole=new THREE.CircleGeometry(R-3.5,40);
  const hdr=new THREE.CylinderGeometry(R,R,474.5-16.1,48);           // коллектор
  const cap=new THREE.CircleGeometry(R,40);
  const nz=new THREE.CylinderGeometry(R,R,ZE-ZC,48);nz.rotateX(Math.PI/2);   // патрубок
  const HX=[[-769.1,-50,235],[-703.6,0,455.3]];               // [ось коллектора X, вынос патрубка по X, высота Y]: нижний вынесен влево, чтобы не перекрывать ручку двери
  const sph=new THREE.SphereGeometry(R,48,24);
  for(const dx of [0,275]){
    for(const [xh,ox,y] of HX){const x=xh+ox;
      const h=new THREE.Mesh(hdr,MAT.copper);h.position.set(xh+dx,(474.5+16.1)/2,ZC);h.castShadow=h.receiveShadow=true;root.add(h);
      for(const yy of [16.1,474.5]){const c=new THREE.Mesh(cap,MAT.copper);c.rotation.x=yy>100?-Math.PI/2:Math.PI/2;c.position.set(xh+dx,yy,ZC);root.add(c);}
      if(ox){const L=Math.abs(ox),j=new THREE.Mesh(new THREE.CylinderGeometry(R,R,L,48),MAT.nozzle);j.rotation.z=Math.PI/2;j.position.set(xh+ox/2+dx,y,ZC);root.add(j);   // прямая перемычка от коллектора
        const e=new THREE.Mesh(sph,MAT.nozzle);e.position.set(x+dx,y,ZC);root.add(e);}                              // скруглённый угол
      const n=new THREE.Mesh(nz,MAT.nozzle);n.position.set(x+dx,y,(ZC+ZE)/2);n.castShadow=n.receiveShadow=true;root.add(n);
      const b=new THREE.Mesh(body,brass);b.position.set(x+dx,y,ZE-16+14);b.castShadow=true;root.add(b);
      for(let i=0;i<5;i++){const t=new THREE.Mesh(thr,brass);t.position.set(x+dx,y,ZE-16+2+i*6);root.add(t);}
      const f=new THREE.Mesh(face,brass);f.position.set(x+dx,y,ZE+14.1);root.add(f);
      const o=new THREE.Mesh(hole,MAT.black);o.position.set(x+dx,y,ZE+13.9);root.add(o);}
  }
})();
// затенение внутри опорной рамы: нижняя полка швеллера внутри в тени, не даёт белых бликов в вырезах
(function(){const m=new THREE.MeshBasicMaterial({color:0x050506,side:THREE.DoubleSide,toneMapped:false});
  for(const [xa,xb] of [[-2601,-1790],[-1580,-440],[-229,-106]])for(const [z0,z1] of [[-33,17],[-967,-917]]){const L=xb-xa,xc=(xa+xb)/2;   // только внутри швеллеров
    const p=new THREE.Mesh(new THREE.PlaneGeometry(L,z1-z0),m);p.rotation.x=-Math.PI/2;p.position.set(xc,-110.5,(z0+z1)/2);root.add(p);
    const q=new THREE.Mesh(new THREE.PlaneGeometry(L,84),m);q.position.set(xc,-68,z0>-500?z0+1:z1-1);root.add(q);}
})();
// шильдик на секции шумоглушителя убран
// наклейка с паспортными данными: нижняя секция вентилятора, вверху по центру
const label=tex(300,475,(g,w,h)=>{g.fillStyle='#f3f3ef';g.fillRect(0,0,w,h);
  g.fillStyle='#1d1e20';g.fillRect(0,0,w,54);g.fillStyle=INK;g.font="800 30px Inter, sans-serif";g.fillText('FERC',14,38);
  g.fillStyle='#d6d6d0';g.fillRect(104,14,182,8);g.fillRect(104,30,150,8);
  g.fillStyle='#d98a4a';g.fillRect(40,82,150,44);g.fillRect(40,130,210,58);g.strokeStyle='#8c5a33';g.lineWidth=2;g.strokeRect(40,82,150,44);g.strokeRect(40,130,210,58);
  g.fillStyle='#b8b8b2';for(let i=0;i<4;i++)g.fillRect(40+i*52,196,30,4);
  g.fillStyle='#9a9a95';for(let i=0;i<8;i++)g.fillRect(22,222+i*21,(i%5===4?160:250)-((i*37)%60),5);
  g.fillStyle='#1d1e20';g.fillRect(0,h-70,w,2);g.strokeStyle='#111';g.lineWidth=12;g.strokeRect(6,6,w-12,h-12);g.fillStyle='#7d7d78';for(let i=0;i<3;i++)g.fillRect(14,h-58+i*16,120,5);
  for(let i=0;i<8;i++)for(let j=0;j<8;j++)if((i*7+j*13+i*j)%3)g.fillRect(w-70+i*7,h-62+j*7,6,6);g.fillStyle='#1d1e20';for(const [qx,qy] of [[0,0],[42,0],[0,42]]){g.fillRect(w-70+qx,h-62+qy,14,14);}
});
decal(label,120,190,(-1684-1187)/2,599-40-95);

root.traverse(o=>{if(o.isMesh&&o.material.transparent){o.castShadow=false;o.receiveShadow=false;}});
const floor=new THREE.Mesh(new THREE.PlaneGeometry(30,30),new THREE.ShadowMaterial({opacity:.42}));floor.rotation.x=-Math.PI/2;floor.receiveShadow=true;scene.add(floor);

await new Promise(r=>setTimeout(r,0));   // отдаём управление браузеру — страница не «замирает» во время сборки сцены
// ---------- потоки ----------
const FLOW=new THREE.Group();FLOW.visible=false;scene.add(FLOW);
const css=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const W2=p=>new THREE.Vector3(p[0]*0.001+1.155,p[1]*0.001+0.113,p[2]*0.001+0.475);
const arrowGeo=new THREE.ConeGeometry(0.05,0.13,16);const UP=new THREE.Vector3(0,1,0);
function mkPath(pts,splitX,c1,c2,dir){const P=pts.map(W2);const segs=[];let len=0;for(let i=0;i<P.length-1;i++){const l=P[i].distanceTo(P[i+1]);segs.push({a:P[i],b:P[i+1],l,s:len});len+=l;}
  const m1=new THREE.MeshBasicMaterial({color:C(c1),transparent:true,opacity:.95,depthTest:false}),m2=new THREE.MeshBasicMaterial({color:C(c2),transparent:true,opacity:.95,depthTest:false});
  const arrows=[];for(let i=0;i<Math.round(len/0.3);i++){const m=new THREE.Mesh(arrowGeo,m1);m.renderOrder=20;FLOW.add(m);arrows.push(m);}
  return {segs,len,arrows,m1,m2,split:splitX*0.001+1.155,dir};}
const paths=[mkPath([[750,300,-475],[-3100,300,-475]],-168,css('--outdoor'),css('--supply'),-1),
             mkPath([[-2215,1800,-475],[-2215,950,-475],[750,950,-475]],-168,css('--extract'),css('--exhaust'),1)];
function updFlow(t){for(const p of paths){const N=p.arrows.length;p.arrows.forEach((m,i)=>{const d=((i/N)+t*0.08)%1*p.len;let sg=p.segs[0];for(const s of p.segs)if(d>=s.s&&d<=s.s+s.l){sg=s;break;}
  const dv=new THREE.Vector3().subVectors(sg.b,sg.a).normalize();m.position.copy(sg.a).addScaledVector(dv,d-sg.s);m.quaternion.setFromUnitVectors(UP,dv);
  m.material=(p.dir<0?m.position.x<p.split:m.position.x>p.split)?p.m2:p.m1;});}}

// ---------- подписи ----------
const labelsEl=$('labels');
const iconURL={};function iconImg(k,dir){const key=k+(dir<0?'L':'');if(iconURL[key])return iconURL[key];const c=document.createElement('canvas');c.width=c.height=96;const g=c.getContext('2d');g.fillStyle='#383E42';g.fillRect(0,0,96,96);icon(g,96,k,{dir});return iconURL[key]=c.toDataURL();}
const LAB=DOORLIST.filter(d=>d[4]||d[5].startsWith('Вход')).map(([x0,x1,y0,y1,k,nm,dir])=>[nm,k,dir,[(x0+x1)/2,(k==='rotor'?U0+40:y1-30),40]]);
LAB.push(['Клапан наружного воздуха','damper',1,[470,560,0]],['Клапан выброса','damper',1,[470,1210,0]],['Поддон с дренажом','',0,[-168,60,140]]);
const LABELS=LAB.map(([nm,k,dir,p])=>{const el=document.createElement('div');el.className='tag'+(k?'':' noimg');
  el.innerHTML=(k?`<img alt="" src="${iconImg(k,dir)}">`:'')+'<span></span>';el.querySelector('span').textContent=nm;labelsEl.appendChild(el);return {el,p:W2(p)};});
labelsEl.hidden=true;

await new Promise(r=>setTimeout(r,0));   // отдаём управление браузеру — страница не «замирает» во время сборки сцены
// ---------- студия: полированный бетонный пол, циклорама, фирменная LED-линия ----------
const BGC=0x151618;
renderer.setClearColor(BGC,1);scene.fog=new THREE.Fog(BGC,8.5,19);
floor.visible=false;                                          // прежняя теневая подложка не нужна
const STUDIO=new THREE.Group();scene.add(STUDIO);
key.shadow.mapSize.set(2048,2048);key.shadow.radius=3;key.shadow.bias=-0.0003;
// отражение установки в полу
const REFL=root.clone();REFL.scale.y=-0.001;REFL.position.y=-0.113;STUDIO.add(REFL);
if(WEAK){REFL.visible=false;key.shadow.mapSize.set(1024,1024);}   // слабое устройство: без зеркального отражения, тени проще
REFL.traverse(o=>{if(o.isMesh){o.castShadow=false;o.receiveShadow=false;}});
// бетон: заполнитель, облачность, следы затирки, деформационные швы
const conc=tex(1024,1024,(g,w,h)=>{
  g.fillStyle='#2f3134';g.fillRect(0,0,w,h);
  for(let i=0;i<70;i++){const x=Math.random()*w,y=Math.random()*h,r=60+Math.random()*220,gr=g.createRadialGradient(x,y,0,x,y,r),l=Math.random()<.5;
    gr.addColorStop(0,l?'rgba(255,255,255,.06)':'rgba(0,0,0,.09)');gr.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=gr;
    for(const dx of [-w,0,w])for(const dy of [-h,0,h]){g.save();g.translate(dx,dy);g.fillRect(x-r,y-r,2*r,2*r);g.restore();}}
  g.lineCap='round';for(let i=0;i<55;i++){const x=Math.random()*w,y=Math.random()*h,r=80+Math.random()*200,a=Math.random()*6.28;
    g.strokeStyle=`rgba(255,255,255,${.015+Math.random()*.02})`;g.lineWidth=14+Math.random()*26;g.beginPath();g.arc(x,y,r,a,a+0.6+Math.random()*.8);g.stroke();}
  for(let i=0;i<26000;i++){const v=Math.random()<.5?255:0;g.fillStyle=`rgba(${v},${v},${v},${.04+Math.random()*.12})`;const r=.4+Math.random()*1.6;g.fillRect(Math.random()*w,Math.random()*h,r,r);}
  g.fillStyle='rgba(10,10,12,.55)';for(const p of [0,512]){g.fillRect(p,0,2.2,h);g.fillRect(0,p,w,2.2);}
},{repeat:[12,12]});
const floorMat=new THREE.MeshLambertMaterial({map:conc,transparent:true,opacity:.88});   // диффузный пол: отражение даёт зеркальная копия установки, без «горячего» блика ключевого света
const pfloor=new THREE.Mesh(new THREE.PlaneGeometry(36,36),floorMat);pfloor.rotation.x=-Math.PI/2;pfloor.receiveShadow=true;STUDIO.add(pfloor);
// контактная тень (мягкое затемнение под установкой)
const cshT=tex(512,256,(g,w,h)=>{g.filter='blur(26px)';g.fillStyle='rgba(0,0,0,.9)';g.fillRect(w*.13,h*.22,w*.74,h*.56);g.filter='blur(6px)';g.fillStyle='rgba(0,0,0,.7)';g.fillRect(w*.17,h*.32,w*.66,h*.36);},{});
const csh=new THREE.Mesh(new THREE.PlaneGeometry(4.6,1.9),new THREE.MeshBasicMaterial({map:cshT,transparent:true,depthWrite:false,opacity:.85,fog:false}));
csh.rotation.x=-Math.PI/2;csh.position.set(-0.03,0.002,0.0);csh.renderOrder=2;STUDIO.add(csh);
// циклорама
const wall=new THREE.Mesh(new THREE.CylinderGeometry(11.5,11.5,9,160,1,true),new THREE.MeshStandardMaterial({color:C(0x2a2b2e),roughness:.95,metalness:0,side:THREE.BackSide}));
wall.position.y=4.5;wall.receiveShadow=false;STUDIO.add(wall);
// фирменная жёлтая LED-линия на стене и её отражение
const TH=2.45,TL=2.3,LY=1.6;
const ledM=new THREE.MeshBasicMaterial({color:new THREE.Color(1.0,0.78,0.12).multiplyScalar(1.45),toneMapped:false,side:THREE.DoubleSide,fog:false});
const led=new THREE.Mesh(new THREE.CylinderGeometry(11.42,11.42,0.035,200,1,true,TH-TL/2,TL),ledM);led.position.y=LY;STUDIO.add(led);
const haloT=tex(64,256,(g,w,h)=>{const gr=g.createLinearGradient(0,0,0,h);gr.addColorStop(0,'rgba(237,192,28,0)');gr.addColorStop(.5,'rgba(237,192,28,.55)');gr.addColorStop(1,'rgba(237,192,28,0)');g.fillStyle=gr;g.fillRect(0,0,w,h);},{});
const halo=new THREE.Mesh(new THREE.CylinderGeometry(11.38,11.38,0.9,200,1,true,TH-TL/2,TL),new THREE.MeshBasicMaterial({map:haloT,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,side:THREE.DoubleSide,opacity:.32,fog:false}));
halo.position.y=LY;STUDIO.add(halo);
const ledR=led.clone();ledR.position.y=-LY;STUDIO.add(ledR);const haloR=halo.clone();haloR.position.y=-LY;haloR.material=halo.material.clone();haloR.material.opacity=.2;STUDIO.add(haloR);
// пятно мягкого света на полу и лёгкая заливка
const pool=new THREE.Mesh(new THREE.PlaneGeometry(9,6),new THREE.MeshBasicMaterial({map:tex(512,512,(g,w,h)=>{const gr=g.createRadialGradient(w/2,h/2,0,w/2,h/2,w/2);gr.addColorStop(0,'rgba(255,250,240,.05)');gr.addColorStop(1,'rgba(255,250,240,0)');g.fillStyle=gr;g.fillRect(0,0,w,h);},{}),transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,fog:false}));
pool.rotation.x=-Math.PI/2;pool.position.set(0.2,0.003,0.3);STUDIO.add(pool);
const fill=new THREE.DirectionalLight(0xdfe8ff,0.35);fill.position.set(-6,2.5,3);scene.add(fill);
await new Promise(r=>setTimeout(r,0));   // отдаём управление браузеру — страница не «замирает» во время сборки сцены
// ---------- камера и управление ----------
const target=new THREE.Vector3(0,0.75,0);
const VIEWS={front:{th:-0.70,ph:1.38,r:7.4},back:{th:Math.PI-0.55,ph:1.2,r:6.2},side:{th:-1.35,ph:1.35,r:5.6},top:{th:-0.3,ph:0.55,r:6.6}};
const sph=Object.assign({},VIEWS.front), goal=Object.assign({t:target.clone()},VIEWS.front);
function setView(v){Object.assign(goal,VIEWS[v]);goal.t=new THREE.Vector3(0,0.75,0);
  while(goal.th-sph.th>Math.PI)goal.th-=2*Math.PI;while(goal.th-sph.th<-Math.PI)goal.th+=2*Math.PI;
  document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.view===v));}
document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>setView(b.dataset.view));
function placeCam(){camera.position.set(target.x+sph.r*Math.sin(sph.ph)*Math.sin(sph.th),target.y+sph.r*Math.cos(sph.ph),target.z+sph.r*Math.sin(sph.ph)*Math.cos(sph.th));camera.lookAt(target);}
const ptrs=new Map();let mode=null,last=null,pinch0=0,lastTouch=-1e9;
cv.addEventListener('contextmenu',e=>e.preventDefault());
cv.addEventListener('pointerdown',e=>{lastTouch=performance.now();cv.setPointerCapture(e.pointerId);ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});
  mode=(e.button===2||e.shiftKey)?'pan':'rot';if(ptrs.size===2){mode='pinch';const [a,b]=[...ptrs.values()];pinch0=Math.hypot(a.x-b.x,a.y-b.y);}last={x:e.clientX,y:e.clientY};
  document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed','false'));$('hint').hidden=true;});
cv.addEventListener('pointermove',e=>{if(!ptrs.has(e.pointerId))return;ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(mode==='pinch'&&ptrs.size===2){const [a,b]=[...ptrs.values()];const d=Math.hypot(a.x-b.x,a.y-b.y);goal.r=THREE.MathUtils.clamp(goal.r*pinch0/d,2,14);pinch0=d;return;}
  const dx=e.clientX-last.x,dy=e.clientY-last.y;last={x:e.clientX,y:e.clientY};
  if(mode==='rot'){goal.th-=dx*0.006;goal.ph=THREE.MathUtils.clamp(goal.ph-dy*0.005,0.15,1.62);}
  else if(mode==='pan'){const k=sph.r*0.0011;const right=new THREE.Vector3().setFromMatrixColumn(camera.matrix,0),up=new THREE.Vector3().setFromMatrixColumn(camera.matrix,1);goal.t.addScaledVector(right,-dx*k).addScaledVector(up,dy*k);}});
const up=e=>{ptrs.delete(e.pointerId);if(ptrs.size===0)mode=null;else if(ptrs.size===1){mode='rot';const v=[...ptrs.values()][0];last={x:v.x,y:v.y};}};
cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',up);
// колесо мыши не перехватываем — страница прокручивается как обычно
function tog(id,fn){const b=$(id);b.onclick=()=>{const on=b.getAttribute('aria-pressed')!=='true';b.setAttribute('aria-pressed',on);fn(on);};}
tog('t-cut',on=>{DOORS.visible=!on;renderer.shadowMap.needsUpdate=true;REFL.children[0].visible=!on;$('t-cut').textContent=on?'Закрыть двери':'Заглянуть внутрь';});tog('t-flow',on=>{FLOW.visible=on;});tog('t-lab',on=>{labelsEl.hidden=!on;});

// ---------- легенда и состав ----------
const LEG=[['damper','Воздушный клапан','только на наружном воздухе'],['filter','Фильтр','панельный'],['rotor','Роторный рекуператор','поддон с дренажом'],
  ['heater','Нагреватель водяной','подача и обратка'],['cooler','Охладитель фреоновый','с поддоном, дренаж — в секции каплеуловителя'],['droplet','Каплеуловитель','после охладителя'],['fan','Вентилятор','стрелка — направление воздуха'],['silencer','Шумоглушитель','пластинчатый']];
$('legend').innerHTML=LEG.map(([k,n,d])=>`<div class="li"><img alt="" src="${iconImg(k)}"><div><b>${n}</b><span>${d}</span></div></div>`).join('');
const chain=a=>a.map(x=>`<span>${x}</span>`).join('<i>→</i>');
$('st-sup').innerHTML=chain(['Клапан','Фильтр','Ротор','Нагреватель','Охладитель DX','Каплеуловитель','Вентилятор','Шумоглушитель']);
$('st-ext').innerHTML=chain(['Вход сверху','Шумоглушитель','Фильтр','Вентилятор','Ротор','Клапан выброса']);

// ---------- цикл ----------
function setOff(w,h){if(w>900)camera.setViewOffset(w,h,-w*0.22,h*0.03,w,h);else{camera.clearViewOffset();}}
function resize(){const r=stage.getBoundingClientRect();renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;camera.fov=r.width>900?28:Math.min(50,2*Math.atan(Math.tan(14*Math.PI/180)*1.88*0.62/(r.width/r.height))*180/Math.PI);setOff(r.width,r.height);camera.updateProjectionMatrix();drawBG($('bg').getContext('2d'),($('bg').width=r.width*Math.min(devicePixelRatio,2)),($('bg').height=r.height*Math.min(devicePixelRatio,2)));}
new ResizeObserver(resize).observe(stage);resize();
const v3=new THREE.Vector3();
function drawLabels(){if(labelsEl.hidden)return;const r=stage.getBoundingClientRect();const cd=new THREE.Vector3();camera.getWorldDirection(cd);
  for(const l of LABELS){v3.copy(l.p).project(camera);const vis=v3.z<1&&(cd.z<0.2||!DOORS.visible);l.el.style.opacity=vis?1:0;
    l.el.style.left=((v3.x+1)/2*r.width)+'px';l.el.style.top=((1-v3.y)/2*r.height)+'px';}}
let inView=true;new IntersectionObserver(es=>{inView=es[0].isIntersecting;},{rootMargin:'100px'}).observe(stage);
let t0=performance.now(),tAcc=0;
let lastR=0;
function loop(now){if(!inView||document.hidden){t0=now;requestAnimationFrame(loop);return;}   // вне экрана не рисуем
  if(!mode&&window.__live&&now-lastR<31){requestAnimationFrame(loop);return;}lastR=now;   // плавное покачивание — 30 кадров/с, при вращении рукой — полная частота
  const dt=Math.min(0.05,(now-t0)/1000);t0=now;if(!reduce)tAcc+=dt;const k=1-Math.pow(0.0015,dt);
  if(!reduce&&!mode&&now-lastTouch>5000){goal.th=-0.70+0.20*Math.sin(tAcc*0.16);goal.ph=1.38+0.03*Math.sin(tAcc*0.11);}
  sph.r+=(goal.r-sph.r)*k;sph.th+=(goal.th-sph.th)*k;sph.ph+=(goal.ph-sph.ph)*k;target.lerp(goal.t,k);placeCam();
  if(FLOW.visible)updFlow(tAcc);renderer.render(scene,camera);if(!window.__live&&tAcc>0.4){window.__live=true;document.body.classList.add('live');}drawLabels();requestAnimationFrame(loop);}
requestAnimationFrame(loop);

// ---------- фон героя ----------
function drawBG(g,w,h){g.fillStyle='#151618';g.fillRect(0,0,w,h);}
// ---------- кадр высокого разрешения для заставки (служебная функция) ----------
window.FERC3D_shot=function(w,h,type,q){const pr=renderer.getPixelRatio(),r=stage.getBoundingClientRect(),fov=camera.fov;
  renderer.setPixelRatio(1);renderer.setSize(w,h,false);camera.aspect=w/h;setOff(w,h);camera.updateProjectionMatrix();renderer.render(scene,camera);
  const url=renderer.domElement.toDataURL(type||'image/webp',q||0.86);
  renderer.setPixelRatio(pr);renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;camera.fov=fov;setOff(r.width,r.height);camera.updateProjectionMatrix();return url;};
};
