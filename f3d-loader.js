/* FERC 3D-hero: загрузчик для ferc.by (Webflow). На компьютерах 3D подгружается после загрузки страницы; на телефонах — по кнопке «Заглянуть внутрь». */
(function(){
  var root=document.documentElement;if(!root.classList.contains('f3d-on'))return;
  var me=document.currentScript,BASE=(me&&me.src?me.src.replace(/[^\/]*$/,''):'https://cdn.jsdelivr.net/gh/LLC-FERC/ferc-3d@main/');   // файлы берём из той же версии, что и загрузчик
  var stage=document.getElementById('f3d-stage'),cut=document.getElementById('f3d-t-cut');if(!stage||!cut)return;
  cut.setAttribute('role','button');cut.setAttribute('aria-pressed','false');
  stage.insertAdjacentHTML('afterbegin','<canvas id="f3d-bg" aria-hidden="true"></canvas><canvas id="f3d-cv" aria-label="3D-модель установки FERC EVO"></canvas>');
  stage.insertAdjacentHTML('beforeend','<div class="f3d-aux"><div id="f3d-labels"></div><div id="f3d-loading"></div><div id="f3d-exp" hidden><input type="checkbox" id="f3d-o-transp"><button id="f3d-b-png"></button></div><div id="f3d-toast" hidden></div><button data-view="front" aria-pressed="true"></button><button id="f3d-t-flow"></button><button id="f3d-t-lab"></button><div id="f3d-legend"></div><div id="f3d-st-sup"></div><div id="f3d-st-ext"></div></div>');
  var weak=(function(){try{   // слабое устройство: мало ядер/памяти, медленная сеть или простая встроенная графика — 3D только по кнопке
    var c=navigator.connection||{};if((navigator.hardwareConcurrency||8)<=4||(navigator.deviceMemory||8)<=4||c.saveData||/(^|-)(2g|3g)$/.test(c.effectiveType||''))return true;
    var g=document.createElement('canvas').getContext('webgl');if(!g)return true;var d=g.getExtension('WEBGL_debug_renderer_info'),r=d?String(g.getParameter(d.UNMASKED_RENDERER_WEBGL)):'';
    var lose=g.getExtension('WEBGL_lose_context');if(lose)lose.loseContext();
    return /SwiftShader|llvmpipe|Software|Basic Render|Intel.*(HD|UHD) Graphics( [1-6]\d\d)?\b|Mali|Adreno|PowerVR/i.test(r)&&!/Iris|Arc/i.test(r);
  }catch(e){return false;}})();
  if(weak)root.classList.add('f3d-weak');
  var lite=weak||matchMedia('(max-width: 991px)').matches,started=null;
  function load(src){return new Promise(function(res,rej){var s=document.createElement('script');s.src=src;s.onload=res;s.onerror=rej;document.head.appendChild(s);});}
  window.FERC3D_boot=function(){if(started)return started;started=load('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js').then(function(){return load(BASE+'ferc-hero.js');}).then(function(){return window.FERC3D_start(BASE);});return started;};
  var live=new MutationObserver(function(){if(document.body.classList.contains('live')){root.classList.add('f3d-live');live.disconnect();}});live.observe(document.body,{attributes:true,attributeFilter:['class']});
  cut.addEventListener('click',function(e){e.preventDefault();if(window.__ready)return;e.stopImmediatePropagation();cut.textContent='Загружаю модель…';
    window.FERC3D_boot().then(function(){window.__ready=true;cut.textContent='Заглянуть внутрь';cut.click();});},true);
  if(!lite){   // 3D стартует после загрузки страницы, когда закрыт баннер cookies (или через 4 с) и браузер свободен — клики не подвисают
    var done=false,go=function(){if(done)return;done=true;var f=function(){window.FERC3D_boot().then(function(){window.__ready=true;});};('requestIdleCallback' in window)?requestIdleCallback(f,{timeout:2000}):setTimeout(f,300);};
    var arm=function(){var shown=!!document.querySelector('[fs-cc="banner"]')&&!/(^|;\s*)fs-cc=/.test(document.cookie)&&!window.__fercCC;if(!shown){setTimeout(go,600);return;}addEventListener('ferc-cc-closed',function(){setTimeout(go,400);});setTimeout(go,4000);};
    if(document.readyState==='complete')arm();else addEventListener('load',arm);}
})();
