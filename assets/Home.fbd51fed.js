import{d as e,u as t,b as a,e as s,o as i,c as o,f as l,w as n,g as c,t as r,_ as v,p as f,h as d,F as u,r as p,i as m,j as k}from"./app.205184e6.js";f("data-v-0cb9fda2");const h={key:0,class:"home-hero"},x={key:0,class:"figure"},g={key:1,id:"main-title",class:"title"},y={key:2,class:"description"};d();var _=e({expose:[],setup(e){const{site:f,frontmatter:d}=t(),u=a((()=>{const{heroImage:e,heroText:t,tagline:a,actionLink:s,actionText:i}=d.value;return e||t||a||s&&i})),p=a((()=>d.value.heroText||f.value.title));return(e,t)=>s(u)?(i(),o("header",h,[s(d).heroImage?(i(),o("figure",x,[l("img",{class:"image",src:s(n)(s(d).heroImage),alt:s(d).heroAlt},null,8,["src","alt"])])):c("v-if",!0),s(p)?(i(),o("h1",g,r(s(p)),1)):c("v-if",!0),s(d).tagline?(i(),o("p",y,r(s(d).tagline),1)):c("v-if",!0),s(d).actionLink&&s(d).actionText?(i(),o(v,{key:3,item:{link:s(d).actionLink,text:s(d).actionText},class:"action"},null,8,["item"])):c("v-if",!0),s(d).altActionLink&&s(d).altActionText?(i(),o(v,{key:4,item:{link:s(d).altActionLink,text:s(d).altActionText},class:"action alt"},null,8,["item"])):c("v-if",!0)])):c("v-if",!0)}});_.__scopeId="data-v-0cb9fda2",f("data-v-e39c13e0");const I={key:0,class:"home-features"},T={class:"wrapper"},b={class:"container"},A={class:"features"},L={key:0,class:"title"},$={key:1,class:"details"};d();var j=e({expose:[],setup(e){const{frontmatter:n}=t(),v=a((()=>n.value.features&&n.value.features.length>0)),f=a((()=>n.value.features?n.value.features:[]));return(e,t)=>s(v)?(i(),o("div",I,[l("div",T,[l("div",b,[l("div",A,[(i(!0),o(u,null,p(s(f),((e,t)=>(i(),o("section",{key:t,class:"feature"},[e.title?(i(),o("h2",L,r(e.title),1)):c("v-if",!0),e.details?(i(),o("p",$,r(e.details),1)):c("v-if",!0)])))),128))])])])])):c("v-if",!0)}});j.__scopeId="data-v-e39c13e0",f("data-v-30918238");const w={key:0,class:"footer"},C={class:"container"},F={class:"text"};d();var q=e({expose:[],setup(e){const{frontmatter:a}=t();return(e,t)=>s(a).footer?(i(),o("footer",w,[l("div",C,[l("p",F,r(s(a).footer),1)])])):c("v-if",!0)}});q.__scopeId="data-v-30918238",f("data-v-32eddf2f");const z={class:"home","aria-labelledby":"main-title"},B={class:"home-content"};d();var D=e({expose:[],setup:e=>(e,t)=>{const a=m("Content");return i(),o("main",z,[l(_),k(e.$slots,"hero",{},void 0,!0),l(j),l("div",B,[l(a)]),k(e.$slots,"features",{},void 0,!0),l(q),k(e.$slots,"footer",{},void 0,!0)])}});D.__scopeId="data-v-32eddf2f";export default D;
