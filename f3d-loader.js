/* FERC 3D-hero: загрузчик для ferc.by (Webflow). На компьютерах 3D подгружается после загрузки страницы; на телефонах — по кнопке «Заглянуть внутрь». */
(function(){
  var root=document.documentElement;if(!root.classList.contains('f3d-on'))return;
  var me=document.currentScript,BASE=(me&&me.src?me.src.replace(/[^\/]*$/,''):'https://cdn.jsdelivr.net/gh/LLC-FERC/ferc-3d@main/');   // файлы берём из той же версии, что и загрузчик
  var stage=document.getElementById('f3d-stage'),cut=document.getElementById('f3d-t-cut');if(!stage||!cut)return;
  stage.insertAdjacentHTML('afterbegin','<canvas id="f3d-bg" aria-hidden="true"></canvas><canvas id="f3d-cv" aria-label="3D-модель установки FERC EVO"></canvas>');
  stage.insertAdjacentHTML('beforeend','<div class="f3d-aux"><div id="f3d-labels"></div><div id="f3d-loading"></div><div id="f3d-exp" hidden><input type="checkbox" id="f3d-o-transp"><button id="f3d-b-png"></button></div><div id="f3d-toast" hidden></div><button data-view="front" aria-pressed="true"></button><button id="f3d-t-flow"></button><button id="f3d-t-lab"></button><div id="f3d-legend"></div><div id="f3d-st-sup"></div><div id="f3d-st-ext"></div></div>');
  var lite=matchMedia('(max-width: 991px)').matches||!!(navigator.connection&&navigator.connection.saveData),started=null;
  function load(src){return new Promise(function(res,rej){var s=document.createElement('script');s.src=src;s.onload=res;s.onerror=rej;document.head.appendChild(s);});}
  window.FERC3D_boot=function(){if(started)return started;started=load('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js').then(function(){return load(BASE+'ferc-hero.js');}).then(function(){return window.FERC3D_start(BASE);});return started;};
  var live=new MutationObserver(function(){if(document.body.classList.contains('live')){root.classList.add('f3d-live');live.disconnect();}});live.observe(document.body,{attributes:true,attributeFilter:['class']});
  cut.addEventListener('click',function(e){e.preventDefault();if(window.__ready)return;e.stopImmediatePropagation();cut.textContent='Загружаю модель…';
    window.FERC3D_boot().then(function(){window.__ready=true;cut.textContent='Заглянуть внутрь';cut.click();});},true);
  if(!lite){var go=function(){var f=function(){window.FERC3D_boot().then(function(){window.__ready=true;});};('requestIdleCallback' in window)?requestIdleCallback(f,{timeout:1500}):setTimeout(f,300);};
    if(document.readyState==='complete')go();else addEventListener('load',go);}
})();
