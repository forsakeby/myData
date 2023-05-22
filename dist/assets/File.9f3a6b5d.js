import{f as e,af as y,ai as d,a8 as O,o,V as l,bf as I,aP as P,aj as h,by as T,bK as $,d as b,w as _,bL as k,ae as x,a6 as L,B as m,aa as S,x as A,ab as D,bM as f,m as g,a2 as w,bN as j,C as V,bO as R,J as a,K as i,bI as C,bP as M,e as z,aQ as F,R as B,U as W,ac as H}from"./index.4784f860.js";import{a as v,b as U}from"./useUtil.94056f52.js";import{g as X,O as u}from"./icon.6cb472c0.js";import{m as K}from"./index.513faecd.js";import{T as G}from"./Layout.76a960d0.js";const J=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(y,{boxSize:"$20",get fallback(){return e(d,{get color(){return O()},boxSize:"$20",get as(){return X(o.obj)}})},get src(){return o.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(I,{size:"lg",css:{wordBreak:"break-all"},get children(){return o.obj.name}}),e(P,{color:"$neutral10",size:"sm",get children(){return[h(()=>T(o.obj.size))," \xB7 ",h(()=>$(o.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),E=()=>{const r=b(),n=_(()=>k(o.obj.name)),{currentObjLink:s}=v();return e(g,{get when(){return n().length},get children(){return e(x,{get children(){return[e(L,{as:m,colorScheme:"success",get rightIcon(){return e(d,{as:K})},get children(){return r("home.preview.open_with")}}),e(S,{get children(){return e(A,{get each(){return n()},children:t=>e(D,{as:"a",target:"_blank",get href(){return f(t.value,{raw_url:o.raw_url,name:o.obj.name,d_url:s(!0)})},get children(){return t.key}})})}})]}})}})},p=r=>{const n=b(),{copyCurrentRawLink:s}=U();return e(J,{get children(){return[e(w,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>s(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return o.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(E,{})}})]}})},N=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),Q=r=>{const{currentObjLink:n}=v(),s=_(()=>f(r.scheme,{raw_url:o.raw_url,name:o.obj.name,d_url:n(!0)}));return e(R,{w:"$full",h:"70vh",get children(){return[e(j.iframe,{w:"$full",h:"$full",get src(){return s()}}),e(d,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:G,onClick:()=>{window.open(s(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return V()},p:"$1",boxSize:"$7"})]}})},q=r=>()=>e(Q,{scheme:r}),Y=[{name:"Aliyun Video Previewer",type:u.VIDEO,provider:/^Aliyundrive(Open)?$/,component:a(()=>i(()=>import("./aliyun_video.9da324cf.js"),["assets/aliyun_video.9da324cf.js","assets/index.4784f860.js","assets/index.15d8d646.css","assets/useUtil.94056f52.js","assets/api.851bb415.js","assets/icon.6cb472c0.js","assets/index.68824d6d.js","assets/index.513faecd.js","assets/Layout.76a960d0.js","assets/Markdown.cebc6160.js","assets/index.a41b280c.js","assets/FolderTree.c0422a3a.js","assets/video_box.75829046.js"]))},{name:"Markdown",type:u.TEXT,component:a(()=>i(()=>import("./markdown.ae4a1701.js"),["assets/markdown.ae4a1701.js","assets/index.4784f860.js","assets/index.15d8d646.css","assets/useUtil.94056f52.js","assets/api.851bb415.js","assets/Markdown.cebc6160.js"]))},{name:"Markdown with word wrap",type:u.TEXT,component:a(()=>i(()=>import("./markdown_with_word_wrap.0033d297.js"),["assets/markdown_with_word_wrap.0033d297.js","assets/index.4784f860.js","assets/index.15d8d646.css","assets/useUtil.94056f52.js","assets/api.851bb415.js","assets/Markdown.cebc6160.js"]))},{name:"Text Editor",type:u.TEXT,component:a(()=>i(()=>import("./text-editor.47bfb25e.js"),["assets/text-editor.47bfb25e.js","assets/index.4784f860.js","assets/index.15d8d646.css","assets/useUtil.94056f52.js","assets/api.851bb415.js"]))},{name:"HTML render",exts:["html"],component:a(()=>i(()=>import("./html.7bcd1aa0.js"),["assets/html.7bcd1aa0.js","assets/index.4784f860.js","assets/index.15d8d646.css","assets/useUtil.94056f52.js","assets/api.851bb415.js"]))},{name:"Image",type:u.IMAGE,component:a(()=>i(()=>import("./image.c4d00aba.js"),["assets/image.c4d00aba.js","assets/index.4784f860.js","assets/index.15d8d646.css","assets/ImageWithError.a01eb7c4.js"]))},{name:"Video",type:u.VIDEO,component:a(()=>i(()=>import("./video.61db8f44.js"),["assets/video.61db8f44.js","assets/index.4784f860.js","assets/index.15d8d646.css","assets/useUtil.94056f52.js","assets/api.851bb415.js","assets/icon.6cb472c0.js","assets/index.68824d6d.js","assets/index.513faecd.js","assets/Layout.76a960d0.js","assets/Markdown.cebc6160.js","assets/index.a41b280c.js","assets/FolderTree.c0422a3a.js","assets/video_box.75829046.js"]))},{name:"Audio",type:u.AUDIO,component:a(()=>i(()=>import("./audio.5444a510.js"),["assets/audio.5444a510.js","assets/audio.e5b5af14.css","assets/index.4784f860.js","assets/index.15d8d646.css","assets/useUtil.94056f52.js","assets/api.851bb415.js","assets/icon.6cb472c0.js","assets/index.68824d6d.js","assets/index.513faecd.js","assets/Layout.76a960d0.js","assets/Markdown.cebc6160.js","assets/index.a41b280c.js","assets/FolderTree.c0422a3a.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:a(()=>i(()=>import("./ipa.def0c923.js"),["assets/ipa.def0c923.js","assets/index.4784f860.js","assets/index.15d8d646.css","assets/useUtil.94056f52.js","assets/api.851bb415.js","assets/icon.6cb472c0.js","assets/index.68824d6d.js","assets/index.513faecd.js","assets/Layout.76a960d0.js","assets/Markdown.cebc6160.js","assets/index.a41b280c.js","assets/FolderTree.c0422a3a.js"]))},{name:"Plist",exts:["plist"],component:a(()=>i(()=>import("./plist.579ee48c.js"),["assets/plist.579ee48c.js","assets/index.4784f860.js","assets/index.15d8d646.css","assets/useUtil.94056f52.js","assets/api.851bb415.js","assets/icon.6cb472c0.js","assets/index.68824d6d.js","assets/index.513faecd.js","assets/Layout.76a960d0.js","assets/Markdown.cebc6160.js","assets/index.a41b280c.js","assets/FolderTree.c0422a3a.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:a(()=>i(()=>import("./aliyun_office.756c2449.js"),["assets/aliyun_office.756c2449.js","assets/index.4784f860.js","assets/index.15d8d646.css"]))}],Z=r=>{const n=[];return Y.forEach(t=>{var c;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((c=t.exts)==null?void 0:c.includes(C(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),M(r.name).forEach(t=>{n.push({name:t.key,component:q(t.value)})}),n.push({name:"Download",component:a(()=>i(()=>Promise.resolve().then(()=>N),void 0))}),n},ee=()=>{const r=_(()=>Z({...o.obj,provider:o.provider})),[n,s]=z(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(w,{w:"$full",spacing:"$2",get children(){return[e(F,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{s(r().find(c=>c.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(E,{})]}}),e(B,{get fallback(){return e(W,{})},get children(){return e(H,{get component(){return n().component}})}})]}})}})},ie=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{J as F,ie as a};
