import{s as d,A as r,J as m,d as p}from"./scheduler.98dcdc08.js";import{S as _,i as h}from"./index.bc2cb9f6.js";import{u,t as l}from"./app.24ab8b05.js";function S(o,t){const e={},i={},s={$$scope:1};let f=o.length;for(;f--;){const c=o[f],a=t[f];if(a){for(const n in c)n in a||(i[n]=1);for(const n in a)s[n]||(e[n]=a[n],s[n]=1);o[f]=a}else for(const n in c)s[n]=1}for(const c in i)c in e||(e[c]=void 0);return e}function g(o){let t;return document.title=t=u(o[0],l),{c:r,l(e){m("svelte-1tippc1",document.head).forEach(p)},m:r,p(e,[i]){i&1&&t!==(t=u(e[0],l))&&(document.title=t)},i:r,o:r,d:r}}function k(o,t,e){let{title:i}=t;return o.$$set=s=>{"title"in s&&e(0,i=s.title)},[i]}class $ extends _{constructor(t){super(),h(this,t,k,g,d,{title:0})}}export{$ as T,S as g};
