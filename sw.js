if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,t)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=t(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-afb9f189"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.220bb902.css",revision:"e7dd5d9c632f04ebfc5865bcf61d66a5"},{url:"assets/index.6fbda6c9.js",revision:"4c8d23c94f484cab06aa90bbafea19b2"},{url:"assets/vendor.e59ab956.js",revision:"1d8735a58422e484312b693cf70f9a45"},{url:"index.html",revision:"ebee4120ad1795f63f424fc1c4e50599"},{url:"registerSW.js",revision:"d9231d896ef593958213e06cd96d7c0d"},{url:"manifest.webmanifest",revision:"9493ce56534ec92948f8392121bce099"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
