if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,t)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=t(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-afb9f189"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.a12c6f86.css",revision:"8fdb7a1b16d811261596e431cbe05cbd"},{url:"assets/index.a13f2957.js",revision:"643e5284892b0cd5ad4b8973e71e40dc"},{url:"assets/vendor.85799928.js",revision:"9a703449c1b6c044bdfad0a78a360f89"},{url:"index.html",revision:"ca276022db8516370f3b9e8b0204205a"},{url:"registerSW.js",revision:"d9231d896ef593958213e06cd96d7c0d"},{url:"manifest.webmanifest",revision:"9493ce56534ec92948f8392121bce099"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));