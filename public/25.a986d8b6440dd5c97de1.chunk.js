(this.webpackJsonp=this.webpackJsonp||[]).push([[25],{84:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var o=c(14);const n=new Map;let r=0;const l=(e,t,c="")=>{c=t.country_code+c,r=Math.max(r,c.length),n.set(c,{country:e,code:t})};function s(e){n.size||o.default.countriesList.forEach(e=>{e.country_codes.forEach(t=>{t.prefixes?t.prefixes.forEach(c=>{l(e,t,c)}):l(e,t)})});let t,c=e.replace(/\D/g,""),s=c.slice(0,r);for(let e=s.length-1;e>=0&&(t=n.get(s.slice(0,e+1)),!t);--e);if(!t)return{formatted:c,country:void 0,code:void 0,leftPattern:""};const a=t.country,i=t.code.patterns||[],f=c.slice(t.code.country_code.length);let h="",d=0,u="";for(let e=i.length-1;e>=0;--e){h=i[e];const t=h.replace(/ /g,"");let c=0;for(let e=0,o=Math.min(f.length,t.length);e<o;++e){if(f[e]!==t[e]&&"X"!==t[e]){c=0;break}++c}c>d&&(d=c,u=h)}h=u||h,h=h.replace(/\d/g,"X"),h=t.code.country_code+" "+h,h.split("").forEach((e,t)=>{" "===e&&" "!==c[t]&&c.length>t&&(c=c.slice(0,t)+" "+c.slice(t))});let g=h&&h.length>c.length?h.slice(c.length):"";return g&&(g=g.replace(/X/g,"‒")),{formatted:c,country:a,code:t.code,leftPattern:g}}}}]);
//# sourceMappingURL=25.a986d8b6440dd5c97de1.chunk.js.map