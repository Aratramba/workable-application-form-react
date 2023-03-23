var e,l,a,t,n=require("react/jsx-runtime"),r=require("react"),i=require("intl-tel-input"),s=require("react-dropzone"),o=require("@radix-ui/react-dialog"),d=require("@radix-ui/react-visually-hidden");e=module.exports,l="ApplicationForm",a=()=>L,Object.defineProperty(e,l,{get:a,set:t,enumerable:!0,configurable:!0});const c={telephoneInitialCountry:"US",telephonePreferredCountries:["us","gb","ca","de","au"],telephoneAllowDropdown:!0,telephoneAutoHideDialCode:!1,telephoneAutoPlaceholder:"polite",telephoneCustomContainer:"",telephoneCustomPlaceholder:null,telephoneDropdownContainer:null,telephoneExcludeCountries:[],telephoneFormatOnDisplay:!0,telephoneGeoIpLookup:null,telephoneHiddenInput:"",telephoneLocalizedCountries:null,telephoneNationalMode:!1,telephoneOnlyCountries:[],telephonePlaceholderNumberType:"MOBILE",telephoneSeparateDialCode:!0,labelForm:"Application",labelSubmit:"Submit application",labelAdd:"Add",labelSave:"Save",labelCancel:"Cancel",labelEdit:"Edit",labelDelete:"Delete",labelClose:"Close",labelOptional:"(optional)",labelClear:"Clear",labelDropzoneUpload:"Upload a file",labelDropzoneDragDrop:"or drag and drop here",labelDropzoneMaxSize:"Max file size is ",labelDropzoneAcceptableFileTypes:"Acceptable file types: ",labelDropzoneReplaceFile:"Replace file",labelDropzoneNoFilesAccepted:"No files accepted",labelDropzoneAborted:"File reading was aborted",labelDropzoneError:"File reading has failed",iconCancel:()=>(0,n.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:24,height:24,children:(0,n.jsx)("path",{d:"M7.7574 7.7574 12 12.0001m0 0 4.2426 4.2426M12 12.0001l4.2426-4.2427M12 12.0001l-4.2426 4.2426",stroke:"currentColor",strokeWidth:"1.5"})}),iconCheck:()=>(0,n.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:24,height:24,children:(0,n.jsx)("path",{d:"M6.5 12.5 10 16l7.5-7.5",stroke:"currentColor",strokeWidth:"1.5"})}),iconEdit:()=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:24,height:24,children:[(0,n.jsx)("path",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",d:"M9 6.75H4.75v12.5h12.5V15"}),(0,n.jsx)("path",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",d:"M17.5 4.25l-7.25 7.25v2.75H13l7.24-7.26 -2.75-2.75Z"})]}),iconDelete:()=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:24,height:24,children:(0,n.jsx)("path",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",d:"M7.25 7.75h9.5m-9.5 0v10.5h9.5V7.75m-9.5 0H5m11.75 0H19m-4.75 0v-3h-4.5v3"})}),iconClear:()=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:24,height:24,children:(0,n.jsx)("path",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",d:"M7.25 7.75h9.5m-9.5 0v10.5h9.5V7.75m-9.5 0H5m11.75 0H19m-4.75 0v-3h-4.5v3"})})},u=r.createContext(c),p=({label:e,required:l,id:a})=>{const t=r.useContext(u);return(0,n.jsx)("div",{className:"form-label-wrapper",children:(0,n.jsxs)("label",{className:"form-label",htmlFor:`workable-${a}`,children:[e,l?(0,n.jsx)("span",{className:"form-label__required",children:"*"}):(0,n.jsx)("span",{className:"form-label__optional",children:t.labelOptional})]})})},h=({required:e,id:l,label:a,defaultValue:t})=>{const i=(0,r.useContext)(u);return(0,n.jsxs)("div",{className:"toggle-wrapper",children:[(0,n.jsxs)("div",{className:"toggle",children:[(0,n.jsx)("input",{type:"checkbox",name:l,required:e,id:`workable-${l}`,className:"toggle__input",defaultChecked:Boolean(t)}),(0,n.jsx)("span",{className:"toggle__check",children:i.iconCheck()})]}),(0,n.jsx)(p,{label:a,id:l,required:e})]})},m=({children:e})=>(0,n.jsx)("div",{className:"form-field",children:(0,n.jsx)("div",{className:"form-field__wrapper",children:e})}),x=({count:e=0,maxLength:l})=>l?(0,n.jsxs)("span",{className:"form-field__maxlength",children:[e," / ",l]}):null,b=({required:e,id:l,defaultValue:a,maxLength:t})=>{const[i,s]=(0,r.useState)(null);return(0,n.jsxs)(m,{children:[(0,n.jsx)("input",{type:"text",name:l,required:e,id:`workable-${l}`,defaultValue:a,className:"form-field__text",maxLength:t,onChange:e=>s(e.target.value)}),(0,n.jsx)(x,{count:i?.length,maxLength:t})]})},f=({id:e,required:l,maxLength:a,defaultValue:t})=>{const[i,s]=(0,r.useState)(null);return(0,n.jsxs)(m,{children:[(0,n.jsx)("textarea",{name:e,required:l,id:`workable-${e}`,defaultValue:t,rows:5,className:"form-field__textarea",maxLength:a,onChange:e=>s(e.target.value)}),(0,n.jsx)(x,{count:i?.length,maxLength:a})]})},j=({children:e})=>(0,n.jsx)("div",{className:"form-item",children:e}),g=({required:e,id:l,defaultValue:a})=>(0,n.jsx)(m,{children:(0,n.jsx)("input",{type:"date",name:l,defaultValue:a,required:e,id:`workable-${l}`,className:"form-field__text form-field__date"})}),y=({required:e,id:l,maxLength:a,defaultValue:t})=>(0,n.jsx)(m,{children:(0,n.jsx)("input",{type:"number",name:l,defaultValue:t,required:e,id:`workable-${l}`,className:"form-field__text form-field__number",maxLength:a})}),v=({required:e,id:l,maxLength:a,defaultValue:t})=>{const s=(0,r.useRef)(null),o=(0,r.useContext)(u),[d,c]=(0,r.useState)("");return(0,r.useEffect)((()=>{if(!s.current)return;const e=((l=i)&&l.__esModule?l.default:l)(s.current,{initialCountry:o.telephoneInitialCountry,allowDropdown:o.telephoneAllowDropdown,autoHideDialCode:o.telephoneAutoHideDialCode,autoPlaceholder:o.telephoneAutoPlaceholder,customContainer:o.telephoneCustomContainer,customPlaceholder:o.telephoneCustomPlaceholder,dropdownContainer:o.telephoneDropdownContainer,excludeCountries:o.telephoneExcludeCountries,formatOnDisplay:o.telephoneFormatOnDisplay,geoIpLookup:o.telephoneGeoIpLookup,hiddenInput:o.telephoneHiddenInput,localizedCountries:o.telephoneLocalizedCountries,nationalMode:o.telephoneNationalMode,onlyCountries:o.telephoneOnlyCountries,placeholderNumberType:o.telephonePlaceholderNumberType,preferredCountries:o.telephonePreferredCountries,separateDialCode:o.telephoneSeparateDialCode,utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"});var l;const a=()=>{const l=e.getSelectedCountryData();c(l.dialCode)};a(),s.current.addEventListener("countrychange",a)}),[]),(0,n.jsxs)(m,{children:[(0,n.jsx)("input",{type:"tel",ref:s,name:l,defaultValue:t,required:e,id:`workable-${l}`,maxLength:a,className:"form-field__text form-field__telephone"}),(0,n.jsx)("input",{type:"hidden",name:`${l}_dialcode`,value:d,readOnly:!0})]})};const _=({id:e,supportedFileTypes:l,maxFileSize:a,onAvatarUpload:t=(()=>""),onFileUpload:i=(()=>"")})=>{const o=(0,r.useContext)(u),d=Boolean(l.filter((e=>["jpg","jpeg","gif","png"].includes(e))).length),[c,p]=(0,r.useState)("initial"),[h,m]=(0,r.useState)(null),[x,b]=(0,r.useState)(""),[f,j]=(0,r.useState)(""),{acceptedFiles:g,getRootProps:y,getInputProps:v,inputRef:_}=(0,s.useDropzone)({maxFiles:1,multiple:!1,maxSize:a,accept:{"application/octet-stream":l.map((e=>e))},onDrop:l=>{if(p("loading"),!l.length)return b(o.labelDropzoneNoFilesAccepted),void p("error");l.forEach((l=>{const a=new FileReader;a.onabort=()=>{w(),b(o.labelDropzoneAborted),p("error")},a.onerror=()=>{w(),b(o.labelDropzoneError),p("error")},a.onload=async()=>{const a="avatar"===e?await t(l):await i(l);"string"!=typeof a&&"error"in a?(b(a.error),p("error")):(j(a),p("success"))},a.readAsDataURL(l)})),m(l.map((e=>Object.assign(e,{preview:URL.createObjectURL(e)})))[0])}}),w=()=>{h&&URL.revokeObjectURL(h.preview),j("")};(0,r.useEffect)((()=>()=>w()),[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{type:"button","data-action":"remove-entry",onClick:e=>{e.preventDefault(),g.length=0,g.splice(0,g.length),_.current.value="",m(null),p("initial"),b("")},style:{display:"none"}}),(0,n.jsxs)("div",{...y({className:"dropzone"}),"data-state":c,children:[(0,n.jsx)("input",{...v()}),(0,n.jsx)("input",{name:e,type:"hidden",value:f,readOnly:!0}),g.length>0?(0,n.jsxs)(n.Fragment,{children:[d&&h&&(0,n.jsx)("img",{style:{maxWidth:240},src:h.preview,onLoad:()=>{URL.revokeObjectURL(h.preview)}},h.name),!d&&g.map((e=>(0,n.jsx)("p",{children:e.name},e.name))),(0,n.jsxs)("p",{className:"dropzone__label",children:[(0,n.jsx)("span",{children:o.labelDropzoneReplaceFile})," ",o.labelDropzoneDragDrop]})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{className:"dropzone__label",children:[(0,n.jsx)("span",{children:o.labelDropzoneUpload})," ",o.labelDropzoneDragDrop]}),(0,n.jsx)("p",{className:"dropzone__info",children:a&&`${o.labelDropzoneMaxSize} ${Math.floor(a/1e6)}Mb. Acceptable file types .\n              ${l.join(", ")}.`})]}),"loading"===c&&(0,n.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"dropzone__loading-icon",children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n                .spinner_b2T7{animation:spinner_xe7Q .8s linear infinite}.spinner_YRVV{animation-delay:-.65s}.spinner_c9oY{animation-delay:-.5s}@keyframes spinner_xe7Q{93.75%,100%{r:3px}46.875%{r:.2px}}"}}),(0,n.jsx)("circle",{className:"spinner_b2T7",cx:"4",cy:"12",r:"3"}),(0,n.jsx)("circle",{className:"spinner_b2T7 spinner_YRVV",cx:"12",cy:"12",r:"3"}),(0,n.jsx)("circle",{className:"spinner_b2T7 spinner_c9oY",cx:"20",cy:"12",r:"3"})]}),"success"===c&&(0,n.jsx)("span",{className:"dropzone__success-icon",children:o.iconCheck()}),x&&(0,n.jsx)("p",{className:"dropzone__message",children:x})]})]})};const w=({onClick:e,theme:l="primary",type:a="button",size:t="md",children:r,style:i,disabled:s,className:o="",...d})=>(0,n.jsx)("button",{type:a,onClick:e,className:`button button--${l} button--${t} button--${s?"disabled":"enabled"} ${o}`,style:i,disabled:s,...d,children:r}),C=({name:e,children:l,displayClearButton:a=!0})=>{const t=(0,r.useContext)(u),i=(0,r.useRef)(null);return(0,n.jsxs)("fieldset",{className:"form-fieldset",ref:i,children:[e&&(0,n.jsxs)("legend",{className:"form-legend",children:[(0,n.jsx)("span",{className:"form-legend__title",children:e}),a&&(0,n.jsx)("span",{className:"form-legend__clear",children:(0,n.jsxs)(w,{type:"button",theme:"ghost",onClick:()=>{i.current.querySelectorAll("input, textarea, select").forEach((e=>{"checkbox"===e.type||"radio"===e.type?e.checked=!1:e.value="",e.dispatchEvent(new Event("change"))}));i.current.querySelectorAll('[data-action="remove-entry"]').forEach((e=>{e.click()}))},children:[t.iconClear(),t.labelClear]})})]}),l]})},k=({id:e,required:l,label:a,fields:t})=>{const i=(0,r.useContext)(u),[s,c]=(0,r.useState)("initial"),p=(0,r.useRef)(null),h=(0,r.useRef)(null),[m,x]=(0,r.useState)(null),b=(0,r.useRef)(0),[f,j]=(0,r.useReducer)(((e,l)=>{const a=e.findIndex((({id:e})=>e===l.id));let t=[...e];switch(l.type){case"add":return[...e,l];case"remove":return t.splice(a,1),t;case"edit":return t.splice(a,1,l),t}}),[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{type:"hidden",name:e,value:JSON.stringify(f),ref:h,onChange:e=>j(JSON.parse(e.target.value))}),Boolean(f.length)&&(0,n.jsx)("div",{className:"complex-multiple__entries",children:f.map((e=>(0,n.jsxs)("div",{className:"complex-multiple__entry",children:[(0,n.jsx)("table",{className:"complex-multiple__entry-table",children:(0,n.jsx)("tbody",{children:Object.entries(e.data).map((([e,l])=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:l.label}),"on"===l.value?(0,n.jsx)("td",{children:i.iconCheck()}):(0,n.jsx)("td",{children:l.value})]},e)))})}),(0,n.jsxs)("div",{className:"complex-multiple__entry-actions",children:[(0,n.jsxs)(w,{type:"button",theme:"ghost",onClick:()=>{x(e.id),c("dialog")},children:[i.iconEdit(),(0,n.jsx)(d.Root,{children:i.labelEdit})]}),(0,n.jsxs)(w,{type:"button",theme:"ghost","data-action":"remove-entry",onClick:()=>j({id:e.id,type:"remove"}),children:[i.iconDelete(),(0,n.jsx)(d.Root,{children:i.labelDelete})]})]})]},e.id)))}),(0,n.jsx)("div",{className:"complex-multiple__add",children:(0,n.jsx)(w,{type:"button",onClick:()=>c("dialog"),children:i.labelAdd})}),(0,n.jsx)(o.Root,{open:"dialog"===s,children:(0,n.jsxs)(o.Portal,{children:[(0,n.jsx)(o.Overlay,{className:"dialog-overlay"}),(0,n.jsx)(o.Content,{className:"dialog-content application-form-dialog",onEscapeKeyDown:()=>c("initial"),onPointerDownOutside:()=>c("initial"),onInteractOutside:()=>c("initial"),children:(0,n.jsxs)("div",{className:"dialog-content__form",children:[(0,n.jsx)(d.Root,{asChild:!0,children:(0,n.jsx)(o.Title,{className:"dialog-title",children:m?i.labelEdit:i.labelAdd})}),(0,n.jsx)(w,{"aria-label":i.labelClose,onClick:()=>c("initial"),theme:"tertiary",className:"dialog-content__close",children:i.iconCancel()}),(0,n.jsx)("form",{className:"complex-multiple__form",ref:p,children:(0,n.jsxs)(C,{name:a,displayClearButton:!1,children:[t.map((e=>{const l={...f.find((({id:e})=>e===m))};return(0,n.jsx)(q,{name:e.id,field:{...e,defaultValue:m&&l?l.data[e.id]?.value:null}},e.id)})),(0,n.jsxs)("div",{className:"button-row",children:[(0,n.jsx)(w,{type:"button",onClick:()=>(()=>{if(!h.current)return;if(!p)return;const e=new FormData(p.current),l=Object.fromEntries(e.entries()),a=m?{id:m,type:"edit",data:{}}:{id:"entry-"+ ++b.current,type:"add",data:{}};Object.entries(l).forEach((([e,l])=>{const n=t.find((l=>l.id===e));l.trim().length&&(a.data[e]={key:e,value:l,label:n.label})})),j(a),c("initial"),x(null)})(),children:i.labelSave}),(0,n.jsx)(w,{type:"button",theme:"tertiary",onClick:()=>{x(null),c("initial")},children:i.labelCancel})]})]})})]})})]})})]})};const N=({required:e,id:l,options:a,defaultValue:t})=>(0,n.jsx)(m,{children:(0,n.jsxs)("select",{className:"form-field__select",name:l,required:e,id:`workable-${l}`,defaultValue:t,children:[(0,n.jsx)("option",{value:null}),a?.map((e=>(0,n.jsx)("option",{value:e.value,children:e.value},e.name)))]})}),D=({id:e,options:l,singleOption:a,defaultValue:t})=>(0,n.jsx)("fieldset",{className:"form-field__choice-fieldset",children:l?.map((l=>(0,n.jsxs)("div",{className:"form-field__choice-wrapper",children:[(0,n.jsx)("input",{type:a?"radio":"checkbox",name:e,id:`${e}${l.name}`,value:l.value,className:"form-field__choice",defaultChecked:Array.isArray(t)?t.includes(l.value):t===l.value}),(0,n.jsx)("label",{htmlFor:`${e}${l.value}`,children:l.value})]},l.name)))}),q=({name:e,field:l,onAvatarUpload:a,onFileUpload:t})=>{if(!l)return console.log(`Missing field: ${e}`),null;let r;switch(l.type){case"paragraph":r=()=>(0,n.jsx)(f,{...l});break;case"file":r=()=>(0,n.jsx)(_,{...l,onAvatarUpload:a,onFileUpload:t});break;case"boolean":r=()=>(0,n.jsx)(h,{...l});break;case"date":r=()=>(0,n.jsx)(g,{...l});break;case"multiple":r=()=>(0,n.jsx)(D,{...l});break;case"dropdown":r=()=>(0,n.jsx)(N,{...l});break;case"number":r=()=>(0,n.jsx)(y,{...l});break;case"group":r=()=>(0,n.jsx)(k,{...l});break;default:r=()=>(0,n.jsx)(b,{...l})}return"phone"===l.id&&(r=()=>(0,n.jsx)(v,{...l})),"boolean"===l.type?(0,n.jsx)(j,{children:r&&(0,n.jsx)(r,{})}):(0,n.jsxs)(j,{children:[(0,n.jsx)(p,{label:l.label,id:l.id,required:l.required}),r&&(0,n.jsx)(r,{}),l.helper&&(0,n.jsx)("p",{className:"form-helper",children:l.helper})]})},S=({children:e})=>(0,n.jsx)("div",{className:"button-row",children:e}),z=({children:e,as:l="h2"})=>{const a=l;return(0,n.jsx)(a,{className:`heading heading--${l}`,children:e})},A=({children:e,onSubmit:l})=>{const[a,t]=r.useState("initial"),[i,s]=r.useState(null),o=r.useContext(u);return(0,n.jsxs)("form",{className:`form--${a}`,onSubmit:e=>{t("saving"),s(null),l(e,(e=>{e?(s(e),t("error")):t("complete")}))},encType:"multipart/form-data",children:[o.labelForm&&(0,n.jsx)(z,{as:"h1",children:o.labelForm}),e,(0,n.jsx)("p",{className:"form__error "+(i?"enabled":"disabled"),onClick:()=>s(null),children:i})]})},F=e=>{const l={};return Object.keys(e).forEach((a=>{let t=e[a];try{t=JSON.parse(t)}catch(e){}Array.isArray(t)?l[a]=t.map((e=>{if("object"==typeof e&&null!==e){if("value"in t)return O(t.value);if("data"in e){const l={};return Object.keys(e.data).forEach((a=>{l[a]=O(e.data[a].value)})),l}return F(e)}return O(e)})):l[a]=O(t)})),l},O=e=>{if("string"!=typeof e||0!==e.trim().length)return"on"===e||"off"===e?"on"===e:e},E=(e,l)=>{const a={name:e.name,firstname:e.firstname,lastname:e.lastname,email:e.email,headline:e.headline,summary:e.summary,address:e.address,phone:e.phone?`+${e.phone_dialcode}${e.phone}`:void 0,cover_letter:e.cover_letter,education_entries:e.education,experience_entries:e.experience,answers:[],skills:e.skills,tags:e.tags,disqualified:e.disqualified,disqualification_reason:e.disqualification_reason,disqualified_at:e.disqualified_at,social_profiles:e.social_profiles,domain:e.domain,recruiter_key:e.recruiter_key};return l.filter((e=>!Object.keys(a).includes(e.id))).forEach((l=>{const t=e[l.id];if(t)switch(l.type){case"text":case"email":case"phone":case"paragraph":const e={label:l.label,question_key:l.id,body:t};a.answers.push(e);break;case"multiple":const n={label:l.label,question_key:l.id,choices:t};a.answers.push(n);break;case"boolean":const r={label:l.label,question_key:l.id,checked:t};a.answers.push(r);break;case"dropdown":const i={label:l.label,question_key:l.id,choices:t};a.answers.push(i);break;case"date":const s={label:l.label,question_key:l.id,date:t};a.answers.push(s);break;case"number":const o={label:l.label,question_key:l.id,value:+t};a.answers.push(o);break;case"file":const d={label:l.label,question_key:l.id,file:{name:l.id,data:t}};a.answers.push(d)}})),Object.keys(a).forEach((e=>void 0===a[e]?delete a[e]:{})),a},L=({config:e={},form:l=[],onAvatarUpload:a,onFileUpload:t,onSave:r=(()=>{})})=>{const i=l.reduce(((e,l)=>[...e,...l.fields]),[]);return(0,n.jsx)("div",{className:"application-form",children:(0,n.jsx)(u.Provider,{value:{...c,...e},children:(0,n.jsxs)(A,{onSubmit:(e,l)=>{e.preventDefault();const a=new FormData(e.currentTarget),t=Object.fromEntries(a.entries()),n={};Object.keys(t).forEach((e=>{const l=i.find((l=>l.id===e));n[e]="multiple"===l?.type||"dropdown"===l?.type?a.getAll(e):a.get(e)}));const s=F(n),o=E(s,i);return r(o,(e=>{e?l(e):l()})),!1},children:[l.map((e=>(0,n.jsx)(C,{name:e.name,children:e.fields.map((e=>(0,n.jsx)(q,{name:e.id,field:e,onAvatarUpload:a,onFileUpload:t},e.id)))},e.name))),(0,n.jsx)(C,{children:(0,n.jsx)(S,{children:(0,n.jsx)(w,{type:"submit",size:"lg",style:{width:"100%"},children:e.labelSubmit||c.labelSubmit})})})]})})})};
//# sourceMappingURL=main.js.map
