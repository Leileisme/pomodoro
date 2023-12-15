import{p as I,m as P,a5 as O,aj as J,B as U,q as T,C as Q,ac as j,v as A,h as o,N as X,ak as Z,aa as ee,al as K,W as q,c as r,E as w,k as ae,l as te,ad as B,L as ne,M as le,ab as se,H as G,r as ue,a9 as E,u as ie,am as re,an as oe,a as de,ao as H,w as $,n as ce,I as N,G as ve}from"./index-fa3ee689.js";const ge=I({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...P(),...O(),...J(),...U()},"VTable"),Se=T()({name:"VTable",props:ge(),setup(e,u){let{slots:n,emit:a}=u;const{themeClasses:i}=Q(e),{densityClasses:t}=j(e);return A(()=>o(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!n.top,"v-table--has-bottom":!!n.bottom,"v-table--hover":e.hover},i.value,t.value,e.class],style:e.style},{default:()=>{var s,d,m;return[(s=n.top)==null?void 0:s.call(n),n.default?o("div",{class:"v-table__wrapper",style:{height:X(e.height)}},[o("table",null,[n.default()])]):(d=n.wrapper)==null?void 0:d.call(n),(m=n.bottom)==null?void 0:m.call(n)]}})),{}}});const fe=I({text:String,clickable:Boolean,...P(),...U()},"VLabel"),Ce=T()({name:"VLabel",props:fe(),setup(e,u){let{slots:n}=u;return A(()=>{var a;return o("label",{class:["v-label",{"v-label--clickable":e.clickable},e.class],style:e.style},[e.text,(a=n.default)==null?void 0:a.call(n)])}),{}}});function me(e){const{t:u}=Z();function n(a){let{name:i}=a;const t={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[i],s=e[`onClick:${i}`],d=s&&t?u(`$vuetify.input.${t}`,e.label??""):void 0;return o(ee,{icon:e[`${i}Icon`],"aria-label":d,onClick:s},null)}return{InputIcon:n}}const he=I({focused:Boolean,"onUpdate:focused":w()},"focus");function $e(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:K();const n=q(e,"focused"),a=r(()=>({[`${u}--focused`]:n.value}));function i(){n.value=!0}function t(){n.value=!1}return{focusClasses:a,isFocused:n,focus:i,blur:t}}const ye=I({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...P(),...ae({transition:{component:te,leaveAbsolute:!0,group:!0}})},"VMessages"),be=T()({name:"VMessages",props:ye(),setup(e,u){let{slots:n}=u;const a=r(()=>B(e.messages)),{textColorClasses:i,textColorStyles:t}=ne(r(()=>e.color));return A(()=>o(le,{transition:e.transition,tag:"div",class:["v-messages",i.value,e.class],style:[t.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&a.value.map((s,d)=>o("div",{class:"v-messages__message",key:`${d}-${a.value}`},[n.message?n.message({message:s}):s]))]})),{}}}),pe=Symbol.for("vuetify:form");function Ve(){return se(pe,null)}const ke=I({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...he()},"validation");function Ie(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:K(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:G();const a=q(e,"modelValue"),i=r(()=>e.validationValue===void 0?a.value:e.validationValue),t=Ve(),s=ue([]),d=E(!0),m=r(()=>!!(B(a.value===""?null:a.value).length||B(i.value===""?null:i.value).length)),V=r(()=>!!(e.disabled??(t==null?void 0:t.isDisabled.value))),x=r(()=>!!(e.readonly??(t==null?void 0:t.isReadonly.value))),h=r(()=>{var l;return(l=e.errorMessages)!=null&&l.length?B(e.errorMessages).concat(s.value).slice(0,Math.max(0,+e.maxErrors)):s.value}),y=r(()=>{let l=(e.validateOn??(t==null?void 0:t.validateOn.value))||"input";l==="lazy"&&(l="input lazy");const c=new Set((l==null?void 0:l.split(" "))??[]);return{blur:c.has("blur")||c.has("input"),input:c.has("input"),submit:c.has("submit"),lazy:c.has("lazy")}}),b=r(()=>{var l;return e.error||(l=e.errorMessages)!=null&&l.length?!1:e.rules.length?d.value?s.value.length||y.value.lazy?null:!0:!s.value.length:!0}),M=E(!1),S=r(()=>({[`${u}--error`]:b.value===!1,[`${u}--dirty`]:m.value,[`${u}--disabled`]:V.value,[`${u}--readonly`]:x.value})),p=r(()=>e.name??ie(n));re(()=>{t==null||t.register({id:p.value,validate:v,reset:C,resetValidation:k})}),oe(()=>{t==null||t.unregister(p.value)}),de(async()=>{y.value.lazy||await v(!0),t==null||t.update(p.value,b.value,h.value)}),H(()=>y.value.input,()=>{$(i,()=>{if(i.value!=null)v();else if(e.focused){const l=$(()=>e.focused,c=>{c||v(),l()})}})}),H(()=>y.value.blur,()=>{$(()=>e.focused,l=>{l||v()})}),$(b,()=>{t==null||t.update(p.value,b.value,h.value)});function C(){a.value=null,ce(k)}function k(){d.value=!0,y.value.lazy?s.value=[]:v(!0)}async function v(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const c=[];M.value=!0;for(const f of e.rules){if(c.length>=+(e.maxErrors??1))break;const g=await(typeof f=="function"?f:()=>f)(i.value);if(g!==!0){if(g!==!1&&typeof g!="string"){console.warn(`${g} is not a valid value. Rule functions must return boolean true or a string.`);continue}c.push(g||"")}}return s.value=c,M.value=!1,d.value=l,s.value}return{errorMessages:h,isDirty:m,isDisabled:V,isReadonly:x,isPristine:d,isValid:b,isValidating:M,reset:C,resetValidation:k,validate:v,validationClasses:S}}const xe=I({id:String,appendIcon:N,centerAffix:{type:Boolean,default:!0},prependIcon:N,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":w(),"onClick:append":w(),...P(),...O(),...ke()},"VInput"),Be=T()({name:"VInput",props:{...xe()},emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:n,slots:a,emit:i}=u;const{densityClasses:t}=j(e),{rtlClasses:s}=ve(),{InputIcon:d}=me(e),m=G(),V=r(()=>e.id||`input-${m}`),x=r(()=>`${V.value}-messages`),{errorMessages:h,isDirty:y,isDisabled:b,isReadonly:M,isPristine:S,isValid:p,isValidating:C,reset:k,resetValidation:v,validate:l,validationClasses:c}=Ie(e,"v-input",V),f=r(()=>({id:V,messagesId:x,isDirty:y,isDisabled:b,isReadonly:M,isPristine:S,isValid:p,isValidating:C,reset:k,resetValidation:v,validate:l})),_=r(()=>{var g;return(g=e.errorMessages)!=null&&g.length||!S.value&&h.value.length?h.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return A(()=>{var z,F,L,R;const g=!!(a.prepend||e.prependIcon),W=!!(a.append||e.appendIcon),D=_.value.length>0,Y=!e.hideDetails||e.hideDetails==="auto"&&(D||!!a.details);return o("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},t.value,s.value,c.value,e.class],style:e.style},[g&&o("div",{key:"prepend",class:"v-input__prepend"},[(z=a.prepend)==null?void 0:z.call(a,f.value),e.prependIcon&&o(d,{key:"prepend-icon",name:"prepend"},null)]),a.default&&o("div",{class:"v-input__control"},[(F=a.default)==null?void 0:F.call(a,f.value)]),W&&o("div",{key:"append",class:"v-input__append"},[e.appendIcon&&o(d,{key:"append-icon",name:"append"},null),(L=a.append)==null?void 0:L.call(a,f.value)]),Y&&o("div",{class:"v-input__details"},[o(be,{id:x.value,active:D,messages:_.value},{message:a.message}),(R=a.details)==null?void 0:R.call(a,f.value)])])}),{reset:k,resetValidation:v,validate:l,isValid:p,errorMessages:h}}});export{Ce as V,me as a,xe as b,Be as c,Se as d,he as m,$e as u};
