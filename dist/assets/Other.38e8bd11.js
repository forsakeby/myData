import{d as F,e as i,a as o,b7 as c,f as t,bf as m,c7 as A,aq as g,B as u,bd as l,n as h,I as N,a2 as P,a0 as j}from"./index.4784f860.js";import{o as z}from"./index.68824d6d.js";import{c as J}from"./useUtil.94056f52.js";import{G}from"./index.2804c43e.js";import{I as d}from"./SettingItem.72f85e9a.js";import"./api.851bb415.js";import"./index.513faecd.js";import"./item_type.be442da4.js";const re=()=>{const r=F();z("manage.sidemenu.other");const[p,_]=i(""),[k,y]=i(""),[f,b]=i(""),[$,v]=i(""),[q,S]=i(""),[a,Q]=i([]),[U,B]=o(()=>c.get(`/admin/setting/list?groups=${G.ARIA2},${G.SINGLE}`)),[H,M]=o(()=>c.post("/admin/setting/set_aria2",{uri:p(),secret:k()})),[O,R]=o(()=>c.post("/admin/setting/set_qbit",{url:f(),seedtime:$()}));(async()=>{const e=await B();l(e,n=>{var C,T,I,L,w;_(((C=n.find(s=>s.key==="aria2_uri"))==null?void 0:C.value)||""),y(((T=n.find(s=>s.key==="aria2_secret"))==null?void 0:T.value)||""),S(((I=n.find(s=>s.key==="token"))==null?void 0:I.value)||""),b(((L=n.find(s=>s.key==="qbittorrent_url"))==null?void 0:L.value)||""),v(((w=n.find(s=>s.key==="qbittorrent_seedtime"))==null?void 0:w.value)||""),Q(n)})})();const[x,D]=o(()=>c.post("/admin/setting/reset_token")),{copy:E}=J();return t(j,{get loading(){return U()},get children(){return[t(m,{mb:"$2",get children(){return r("settings_other.aria2")}}),t(A,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(d,g(()=>a().find(e=>e.key==="aria2_uri"),{get value(){return p()},onChange:e=>_(e)})),t(d,g(()=>a().find(e=>e.key==="aria2_secret"),{get value(){return k()},onChange:e=>y(e)}))]}}),t(u,{my:"$2",get loading(){return H()},onClick:async()=>{const e=await M();l(e,n=>{h.success(`${r("settings_other.aria2_version")} ${n}`)})},get children(){return r("settings_other.set_aria2")}}),t(m,{my:"$2",get children(){return r("settings_other.qbittorrent")}}),t(A,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(d,g(()=>a().find(e=>e.key==="qbittorrent_url"),{get value(){return f()},onChange:e=>b(e)})),t(d,g(()=>a().find(e=>e.key==="qbittorrent_seedtime"),{get value(){return $()},onChange:e=>v(e)}))]}}),t(u,{my:"$2",get loading(){return O()},onClick:async()=>{const e=await R();l(e,n=>{h.success(n)})},get children(){return r("settings_other.set_qbit")}}),t(m,{my:"$2",get children(){return r("settings.token")}}),t(N,{get value(){return q()},readOnly:!0}),t(P,{my:"$2",spacing:"$2",get children(){return[t(u,{onClick:()=>{E(q())},get children(){return r("settings_other.copy_token")}}),t(u,{colorScheme:"danger",get loading(){return x()},onClick:async()=>{const e=await D();l(e,n=>{h.success(r("settings_other.reset_token_success")),S(n)})},get children(){return r("settings_other.reset_token")}})]}})]}})};export{re as default};
