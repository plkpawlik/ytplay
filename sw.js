if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,t)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=t(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-afb9f189"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.49e481ec.js",revision:"625430417a9d36e536fa0cfe63013a0a"},{url:"assets/index.e06519e8.css",revision:"69346912c0ab5cbc45b39c8e35f9f43b"},{url:"assets/vendor.27e0cb10.js",revision:"46a0cb7f1317c1a15c76147543d95180"},{url:"index.html",revision:"07f395dca1bfbe094a9e0eaf07bfc515"},{url:"registerSW.js",revision:"d9231d896ef593958213e06cd96d7c0d"},{url:"manifest.webmanifest",revision:"9493ce56534ec92948f8392121bce099"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
