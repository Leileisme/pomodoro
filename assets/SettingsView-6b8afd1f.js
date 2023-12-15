import{u as ne}from"./settings-a635e265.js";import{p as R,I as P,a4 as ue,m as W,a5 as se,B as re,q as p,W as F,H as T,c as i,a6 as ie,a7 as de,K as v,v as B,h as a,o as ce,a8 as fe,a9 as M,r as ve,X,R as h,x as me,Y as Ve,Q as U,aa as ye,ab as be,ac as Ce,ad as A,L as ge,J as Se,ae as _e,n as Ie,af as ke,s as he,d as G,e as Re,f as y,V as xe,u as w,ag as j,i as d,a0 as J,a1 as Pe,t as pe,ah as Be,ai as Ae}from"./index-fa3ee689.js";import{V as x,a as Ge}from"./VRow-88a30550.js";import{V as Y,b as we,c as K,d as $e}from"./VInput-973f6997.js";const Fe=(e,u)=>{const s=e.__vccOpts||e;for(const[l,o]of u)s[l]=o;return s};const z=Symbol.for("vuetify:selection-control-group"),D=R({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:P,trueIcon:P,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:ue},...W(),...se(),...re()},"SelectionControlGroup"),Te=R({...D({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),Ue=p()({name:"VSelectionControlGroup",props:Te(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:s}=u;const l=F(e,"modelValue"),o=T(),m=i(()=>e.id||`v-selection-control-group-${o}`),n=i(()=>e.name||m.value),t=new Set;return ie(z,{modelValue:l,forceUpdate:()=>{t.forEach(r=>r())},onForceUpdate:r=>{t.add(r),ce(()=>{t.delete(r)})}}),de({[e.defaultsTarget]:{color:v(e,"color"),disabled:v(e,"disabled"),density:v(e,"density"),error:v(e,"error"),inline:v(e,"inline"),modelValue:l,multiple:i(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:n,falseIcon:v(e,"falseIcon"),trueIcon:v(e,"trueIcon"),readonly:v(e,"readonly"),ripple:v(e,"ripple"),type:v(e,"type"),valueComparator:v(e,"valueComparator")}}),B(()=>{var r;return a("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(r=s.default)==null?void 0:r.call(s)])}),{}}}),Z=R({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...W(),...D()},"VSelectionControl");function De(e){const u=be(z,void 0),{densityClasses:s}=Ce(e),l=F(e,"modelValue"),o=i(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),m=i(()=>e.falseValue!==void 0?e.falseValue:!1),n=i(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),t=i({get(){const c=u?u.modelValue.value:l.value;return n.value?A(c).some(f=>e.valueComparator(f,o.value)):e.valueComparator(c,o.value)},set(c){if(e.readonly)return;const f=c?o.value:m.value;let V=f;n.value&&(V=c?[...A(l.value),f]:A(l.value).filter(g=>!e.valueComparator(g,o.value))),u?u.modelValue.value=V:l.value=V}}),{textColorClasses:r,textColorStyles:S}=ge(i(()=>{if(!(e.error||e.disabled))return t.value?e.color:e.baseColor})),{backgroundColorClasses:_,backgroundColorStyles:b}=Se(i(()=>t.value&&!e.error&&!e.disabled?e.color:void 0)),C=i(()=>t.value?e.trueIcon:e.falseIcon);return{group:u,densityClasses:s,trueValue:o,falseValue:m,model:t,textColorClasses:r,textColorStyles:S,backgroundColorClasses:_,backgroundColorStyles:b,icon:C}}const ee=p()({name:"VSelectionControl",directives:{Ripple:fe},inheritAttrs:!1,props:Z(),emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:s,slots:l}=u;const{group:o,densityClasses:m,icon:n,model:t,textColorClasses:r,textColorStyles:S,backgroundColorClasses:_,backgroundColorStyles:b,trueValue:C}=De(e),c=T(),f=i(()=>e.id||`input-${c}`),V=M(!1),g=M(!1),I=ve();o==null||o.onForceUpdate(()=>{I.value&&(I.value.checked=t.value)});function N(k){V.value=!0,_e(k.target,":focus-visible")!==!1&&(g.value=!0)}function E(){V.value=!1,g.value=!1}function le(k){e.readonly&&o&&Ie(()=>o.forceUpdate()),t.value=k.target.checked}return B(()=>{var q,H;const k=l.label?l.label({label:e.label,props:{for:f.value}}):e.label,[te,ae]=X(s),L=a("input",h({ref:I,checked:t.value,disabled:!!(e.readonly||e.disabled),id:f.value,onBlur:E,onFocus:N,onInput:le,"aria-disabled":!!(e.readonly||e.disabled),type:e.type,value:C.value,name:e.name,"aria-checked":e.type==="checkbox"?t.value:void 0},ae),null);return a("div",h({class:["v-selection-control",{"v-selection-control--dirty":t.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":V.value,"v-selection-control--focus-visible":g.value,"v-selection-control--inline":e.inline},m.value,e.class]},te,{style:e.style}),[a("div",{class:["v-selection-control__wrapper",r.value],style:S.value},[(q=l.default)==null?void 0:q.call(l,{backgroundColorClasses:_,backgroundColorStyles:b}),me(a("div",{class:["v-selection-control__input"]},[((H=l.input)==null?void 0:H.call(l,{model:t,textColorClasses:r,textColorStyles:S,backgroundColorClasses:_,backgroundColorStyles:b,inputNode:L,icon:n.value,props:{onFocus:N,onBlur:E,id:f.value}}))??a(U,null,[n.value&&a(ye,{key:"icon",icon:n.value},null),L])]),[[Ve("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),k&&a(Y,{for:f.value,clickable:!0,onClick:oe=>oe.stopPropagation()},{default:()=>[k]})])}),{isFocused:V,input:I}}}),Oe=R({...Z({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),$=p()({name:"VRadio",props:Oe(),setup(e,u){let{slots:s}=u;return B(()=>a(ee,h(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),s)),{}}});const Ne=R({height:{type:[Number,String],default:"auto"},...we(),...ke(D(),["multiple"]),trueIcon:{type:P,default:"$radioOn"},falseIcon:{type:P,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),Q=p()({name:"VRadioGroup",inheritAttrs:!1,props:Ne(),emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:s,slots:l}=u;const o=T(),m=i(()=>e.id||`radio-group-${o}`),n=F(e,"modelValue");return B(()=>{const[t,r]=X(s),S=K.filterProps(e),_=ee.filterProps(e),b=l.label?l.label({label:e.label,props:{for:m.value}}):e.label;return a(K,h({class:["v-radio-group",e.class],style:e.style},t,S,{modelValue:n.value,"onUpdate:modelValue":C=>n.value=C,id:m.value}),{...l,default:C=>{let{id:c,messagesId:f,isDisabled:V,isReadonly:g}=C;return a(U,null,[b&&a(Y,{id:c.value},{default:()=>[b]}),a(Ue,h(_,{id:c.value,"aria-describedby":f.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:V.value,readonly:g.value,"aria-labelledby":b?c.value:void 0,multiple:!1},r,{modelValue:n.value,"onUpdate:modelValue":I=>n.value=I}),l)])}})}),{}}}),O=e=>(Be("data-v-5293636b"),e=e(),Ae(),e),Ee=O(()=>d("h1",{class:"text-center"},"通知設定",-1)),Le=O(()=>d("h1",{class:"text-center"},"鈴聲設定",-1)),qe=O(()=>d("thead",null,[d("tr",null,[d("td",null,"名稱"),d("td",null,"視聽"),d("td",null,"選擇")])],-1)),He=["src"],Me={__name:"SettingsView",setup(e){const u=ne(),{alarms:s,selectedAlarm:l,notify:o}=he(u);return(m,n)=>(G(),Re(xe,null,{default:y(()=>[a(Ge,null,{default:y(()=>[a(x,{cols:"12"},{default:y(()=>[Ee]),_:1}),a(x,{cols:"12"},{default:y(()=>[a(Q,{inline:"",modelValue:w(o),"onUpdate:modelValue":n[0]||(n[0]=t=>j(o)?o.value=t:null)},{default:y(()=>[a($,{label:"開啟",value:"true"}),a($,{label:"關閉",value:"false"})]),_:1},8,["modelValue"])]),_:1}),a(x,{cols:"12"},{default:y(()=>[Le]),_:1}),a(x,{cols:"12"},{default:y(()=>[a($e,null,{default:y(()=>[qe,d("tbody",null,[(G(!0),J(U,null,Pe(w(s),t=>(G(),J("tr",{key:t.id},[d("td",null,pe(t.name),1),d("td",null,[d("audio",{src:t.file,controls:""},null,8,He)]),d("td",null,[a(Q,{modelValue:w(l),"onUpdate:modelValue":n[1]||(n[1]=r=>j(l)?l.value=r:null)},{default:y(()=>[a($,{value:t.id},null,8,["value"])]),_:2},1032,["modelValue"])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}},We=Fe(Me,[["__scopeId","data-v-5293636b"]]);export{We as default};
