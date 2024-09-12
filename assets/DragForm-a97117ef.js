import{q as G,z as F,d as E,s as oe,I as V,o as f,c as $,y as k,g as u,x as J,W as T,J as P,F as ne,bB as se,r as x,v as le,B as h,w as c,a1 as O,j as w,C as ae,D as B,Y as X,a2 as K,X as ie,e as m,Z as re,bC as U,bh as Z,a0 as ue,bD as j,bE as de,O as Y,l as L,f as ce,a as pe,bF as me,a7 as fe,ap as ve}from"./index-93963865.js";import{a as Q,b as ye,E as ge}from"./el-form-item-481af741.js";import{i as _e,a as q,C as he,s as W,f as Ce,m as be,E as ke}from"./el-button-d209cb55.js";import{a as Ee,E as Se}from"./el-space-b6f6fd3e.js";/* empty css               */import{v as Ve}from"./el-loading-cb9f2d60.js";import{u as we,E as z}from"./typescript-2a5059be.js";import{_ as R}from"./plugin-vue_export-helper-1cff8a04.js";import"./vnode-40e000bf.js";const Te=G({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:F(String),default:"solid"}}),$e=E({name:"ElDivider"}),Ie=E({...$e,props:Te,setup(s){const o=s,e=oe("divider"),l=V(()=>e.cssVar({"border-style":o.borderStyle}));return(n,y)=>(f(),$("div",{class:k([u(e).b(),u(e).m(n.direction)]),style:P(u(l)),role:"separator"},[n.$slots.default&&n.direction!=="vertical"?(f(),$("div",{key:0,class:k([u(e).e("text"),u(e).is(n.contentPosition)])},[J(n.$slots,"default")],2)):T("v-if",!0)],6))}});var Ne=R(Ie,[["__file","/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue"]]);const xe=ne(Ne),ee=["success","info","warning","error"],Be=G({customClass:{type:String,default:""},dangerouslyUseHTMLString:{type:Boolean,default:!1},duration:{type:Number,default:4500},icon:{type:_e},id:{type:String,default:""},message:{type:F([String,Object]),default:""},offset:{type:Number,default:0},onClick:{type:F(Function),default:()=>{}},onClose:{type:F(Function),required:!0},position:{type:String,values:["top-right","top-left","bottom-right","bottom-left"],default:"top-right"},showClose:{type:Boolean,default:!0},title:{type:String,default:""},type:{type:String,values:[...ee,""],default:""},zIndex:Number}),De={destroy:()=>!0},Fe=["id"],Le=["textContent"],Me={key:0},ze=["innerHTML"],Pe=E({name:"ElNotification"}),Oe=E({...Pe,props:Be,emits:De,setup(s,{expose:o}){const e=s,{ns:l,zIndex:n}=se("notification"),{nextZIndex:y,currentZIndex:v}=n,{Close:i}=he,t=x(!1);let a;const p=V(()=>{const r=e.type;return r&&W[e.type]?l.m(r):""}),g=V(()=>e.type&&W[e.type]||e.icon),C=V(()=>e.position.endsWith("right")?"right":"left"),N=V(()=>e.position.startsWith("top")?"top":"bottom"),_=V(()=>{var r;return{[N.value]:`${e.offset}px`,zIndex:(r=e.zIndex)!=null?r:v.value}});function d(){e.duration>0&&({stop:a}=Ce(()=>{t.value&&b()},e.duration))}function S(){a==null||a()}function b(){t.value=!1}function te({code:r}){r===z.delete||r===z.backspace?S():r===z.esc?t.value&&b():d()}return le(()=>{d(),y(),t.value=!0}),we(document,"keydown",te),o({visible:t,close:b}),(r,D)=>(f(),h(re,{name:u(l).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:D[1]||(D[1]=A=>r.$emit("destroy")),persisted:""},{default:c(()=>[O(w("div",{id:r.id,class:k([u(l).b(),r.customClass,u(C)]),style:P(u(_)),role:"alert",onMouseenter:S,onMouseleave:d,onClick:D[0]||(D[0]=(...A)=>r.onClick&&r.onClick(...A))},[u(g)?(f(),h(u(q),{key:0,class:k([u(l).e("icon"),u(p)])},{default:c(()=>[(f(),h(ae(u(g))))]),_:1},8,["class"])):T("v-if",!0),w("div",{class:k(u(l).e("group"))},[w("h2",{class:k(u(l).e("title")),textContent:B(r.title)},null,10,Le),O(w("div",{class:k(u(l).e("content")),style:P(r.title?void 0:{margin:0})},[J(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(f(),$(X,{key:1},[T(" Caution here, message could've been compromised, never use user's input as message "),w("p",{innerHTML:r.message},null,8,ze)],2112)):(f(),$("p",Me,B(r.message),1))])],6),[[K,r.message]]),r.showClose?(f(),h(u(q),{key:0,class:k(u(l).e("closeBtn")),onClick:ie(b,["stop"])},{default:c(()=>[m(u(i))]),_:1},8,["class","onClick"])):T("v-if",!0)],2)],46,Fe),[[K,t.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Ue=R(Oe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/notification/src/notification.vue"]]);const M={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[]},H=16;let He=1;const I=function(s={},o=null){if(!be)return{close:()=>{}};(typeof s=="string"||U(s))&&(s={message:s});const e=s.position||"top-right";let l=s.offset||0;M[e].forEach(({vm:p})=>{var g;l+=(((g=p.el)==null?void 0:g.offsetHeight)||0)+H}),l+=H;const n=`notification_${He++}`,y=s.onClose,v={...s,offset:l,id:n,onClose:()=>{Ae(n,e,y)}};let i=document.body;Z(s.appendTo)?i=s.appendTo:ue(s.appendTo)&&(i=document.querySelector(s.appendTo)),Z(i)||(i=document.body);const t=document.createElement("div"),a=m(Ue,v,U(v.message)?{default:()=>v.message}:null);return a.appContext=o??I._context,a.props.onDestroy=()=>{j(null,t)},j(a,t),M[e].push({vm:a}),i.appendChild(t.firstElementChild),{close:()=>{a.component.exposed.visible.value=!1}}};ee.forEach(s=>{I[s]=(o={})=>((typeof o=="string"||U(o))&&(o={message:o}),I({...o,type:s}))});function Ae(s,o,e){const l=M[o],n=l.findIndex(({vm:a})=>{var p;return((p=a.component)==null?void 0:p.props.id)===s});if(n===-1)return;const{vm:y}=l[n];if(!y)return;e==null||e(y);const v=y.el.offsetHeight,i=o.split("-")[0];l.splice(n,1);const t=l.length;if(!(t<1))for(let a=n;a<t;a++){const{el:p,component:g}=l[a].vm,C=Number.parseInt(p.style[i],10)-v-H;g.props.offset=C}}function Ke(){for(const s of Object.values(M))s.forEach(({vm:o})=>{o.component.exposed.visible.value=!1})}I.closeAll=Ke;I._context=null;const Ze=de(I,"$notify");const je=E({__name:"TagsInput",props:{values:{},limit:{},maxlength:{}},emits:["ok"],setup(s,{emit:o}){const e=s,l=o,n=x(e.values||[]),y=t=>{n.value.splice(t,1),l("ok",n.value)},v=x(""),i=()=>{let t=v.value.trim();t&&(n.value.push(t),l("ok",n.value)),v.value=""};return(t,a)=>{const p=Ee,g=Se,C=Q,N=Y("drag-sort");return f(),h(N,{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=_=>n.value=_),"item-key":"index",onEnd:a[2]||(a[2]=_=>t.$emit("ok",n.value))},{item:c(({element:_,index:d})=>[m(g,{wrap:""},{default:c(()=>[m(p,{class:"drag",closable:"",onClose:S=>y(d)},{default:c(()=>[L(B(_),1)]),_:2},1032,["onClose"])]),_:2},1024)]),footer:c(()=>[!t.limit||n.value.length<t.limit?(f(),h(C,{key:0,modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=_=>v.value=_),onKeyup:ce(i,["enter"]),onBlur:i,maxlength:t.maxlength,style:{width:"120px"}},null,8,["modelValue","onKeyup","maxlength"])):T("",!0)]),_:1},8,["modelValue"])}}}),qe={class:"upload-img-box"},We=w("span",null,null,-1),Ge=[We],Je=E({__name:"UploadImage",setup(s){const o=x(!1);return(e,l)=>{const n=Ve;return O((f(),$("div",qe,Ge)),[[n,o.value]])}}}),lt=E({__name:"DragForm",setup(s){const o=x([]),e=pe({title:"",tags:[],content:[]}),l=new Map([[1,"文本"],[2,"图片"]]),n=i=>{o.value.push({type:i,value:"",uid:Date.now()})},y=i=>{o.value.splice(i,1)},v=()=>{let i=[];o.value.forEach(t=>{i.push({type:t.type,value:t.value})}),e.content=i,Ze({message:JSON.stringify(e)})};{let i={title:"标题",tags:["tag1","tag2","tag3"],content:[{type:1,value:"文段。。。"},{type:2,value:"https://element-plus.org/apple-touch-icon.png"}]};e.title=i.title,e.tags=i.tags,i.content.forEach((t,a)=>{o.value.push({type:t.type,value:t.value,uid:a})})}return(i,t)=>{const a=Q,p=ye,g=xe,C=ke,N=Y("drag-sort"),_=ge;return f(),h(_,{"label-width":"120px",style:{width:"600px"}},{default:c(()=>[m(p,{label:"标题"},{default:c(()=>[m(a,{modelValue:e.title,"onUpdate:modelValue":t[0]||(t[0]=d=>e.title=d),clearable:""},null,8,["modelValue"])]),_:1}),m(p,{label:"关键词"},{default:c(()=>[m(je,{values:e.tags,limit:5,maxlength:10,onOk:t[1]||(t[1]=d=>e.tags=d)},null,8,["values"])]),_:1}),m(g,{"border-style":"dashed"}),m(N,{modelValue:o.value,"onUpdate:modelValue":t[2]||(t[2]=d=>o.value=d),"item-key":"uid"},{item:c(({element:d,index:S})=>[m(p,{class:"drag"},{label:c(()=>[m(C,{type:"info",plain:"",icon:u(me),onClick:b=>y(S)},{default:c(()=>[L(B(u(l).get(d.type)),1)]),_:2},1032,["icon","onClick"])]),default:c(()=>[d.type===1?(f(),h(a,{key:0,modelValue:d.value,"onUpdate:modelValue":b=>d.value=b,type:"textarea",rows:3},null,8,["modelValue","onUpdate:modelValue"])):d.type===2?(f(),h(Je,{key:1,src:d.value,onOk:b=>d.value=b},null,8,["src","onOk"])):T("",!0)]),_:2},1024)]),_:1},8,["modelValue"]),m(p,null,{default:c(()=>[(f(!0),$(X,null,fe(u(l),d=>(f(),h(C,{key:d[0],type:"primary",plain:"",icon:u(ve),onClick:S=>n(d[0])},{default:c(()=>[L(B(d[1]),1)]),_:2},1032,["icon","onClick"]))),128))]),_:1}),m(g,{"border-style":"dashed"}),m(p,null,{default:c(()=>[m(C,{type:"primary",onClick:v},{default:c(()=>[L("确定")]),_:1})]),_:1})]),_:1})}}});export{lt as default};
