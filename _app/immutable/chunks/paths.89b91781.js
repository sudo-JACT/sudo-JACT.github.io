import{A as c,s as h}from"./scheduler.98dcdc08.js";const e=[];function d(i,a=c){let o;const n=new Set;function r(t){if(h(i,t)&&(i=t,o)){const b=!e.length;for(const s of n)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(i))}function _(t,b=c){const s=[t,b];return n.add(s),n.size===1&&(o=a(r,u)||c),t(i),()=>{n.delete(s),n.size===0&&o&&(o(),o=null)}}return{set:r,update:u,subscribe:_}}var f;const g=((f=globalThis.__sveltekit_1r06lwb)==null?void 0:f.base)??"/sudo-JACT.github.io";var l;const w=((l=globalThis.__sveltekit_1r06lwb)==null?void 0:l.assets)??g;export{w as a,g as b,d as w};
