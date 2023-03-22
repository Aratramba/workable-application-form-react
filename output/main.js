var e,l,n,t,a=require("react/jsx-runtime"),i=require("react"),s=require("intl-tel-input"),r=require("react-dropzone"),o=require("@radix-ui/react-dialog"),d=require("@radix-ui/react-visually-hidden");e=module.exports,l="ApplicationForm",n=()=>R,Object.defineProperty(e,l,{get:n,set:t,enumerable:!0,configurable:!0});const c={telephoneInitialCountry:"US",telephonePreferredCountries:["us","gb","ca","de","au"],telephoneAllowDropdown:!0,telephoneAutoHideDialCode:!1,telephoneAutoPlaceholder:"polite",telephoneCustomContainer:"",telephoneCustomPlaceholder:null,telephoneDropdownContainer:null,telephoneExcludeCountries:[],telephoneFormatOnDisplay:!0,telephoneGeoIpLookup:null,telephoneHiddenInput:"",telephoneLocalizedCountries:null,telephoneNationalMode:!1,telephoneOnlyCountries:[],telephonePlaceholderNumberType:"MOBILE",telephoneSeparateDialCode:!0,labelForm:"Application",labelSubmit:"Submit application",labelAdd:"Add",labelSave:"Save",labelCancel:"Cancel",labelEdit:"Edit",labelDelete:"Delete",labelClose:"Close",labelOptional:"(optional)",labelClear:"Clear",labelDropzoneUpload:"Upload a file",labelDropzoneDragDrop:"or drag and drop here",labelDropzoneMaxSize:"Max file size is ",labelDropzoneAcceptableFileTypes:"Acceptable file types: ",labelDropzoneReplaceFile:"Replace file",labelDropzoneNoFilesAccepted:"No files accepted",labelDropzoneAborted:"File reading was aborted",labelDropzoneError:"File reading has failed",iconCancel:()=>(0,a.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:24,height:24,children:(0,a.jsx)("path",{d:"M7.7574 7.7574 12 12.0001m0 0 4.2426 4.2426M12 12.0001l4.2426-4.2427M12 12.0001l-4.2426 4.2426",stroke:"currentColor",strokeWidth:"1.5"})}),iconCheck:()=>(0,a.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:24,height:24,children:(0,a.jsx)("path",{d:"M6.5 12.5 10 16l7.5-7.5",stroke:"currentColor",strokeWidth:"1.5"})}),iconEdit:()=>(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:24,height:24,children:[(0,a.jsx)("path",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",d:"M9 6.75H4.75v12.5h12.5V15"}),(0,a.jsx)("path",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",d:"M17.5 4.25l-7.25 7.25v2.75H13l7.24-7.26 -2.75-2.75Z"})]}),iconDelete:()=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:24,height:24,children:(0,a.jsx)("path",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",d:"M7.25 7.75h9.5m-9.5 0v10.5h9.5V7.75m-9.5 0H5m11.75 0H19m-4.75 0v-3h-4.5v3"})}),iconClear:()=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:24,height:24,children:(0,a.jsx)("path",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",d:"M7.25 7.75h9.5m-9.5 0v10.5h9.5V7.75m-9.5 0H5m11.75 0H19m-4.75 0v-3h-4.5v3"})})},u=i.createContext(c),p=({label:e,required:l,slug:n})=>{const t=i.useContext(u);return(0,a.jsx)("div",{className:"form-label-wrapper",children:(0,a.jsxs)("label",{className:"form-label",htmlFor:`field-${n}`,children:[e,l?(0,a.jsx)("span",{className:"form-label__required",children:"*"}):(0,a.jsx)("span",{className:"form-label__optional",children:t.labelOptional})]})})},h=({name:e,required:l,id:n,defaultValue:t,label:s,slug:r})=>{const o=(0,i.useContext)(u);return(0,a.jsxs)("div",{className:"toggle-wrapper",children:[(0,a.jsxs)("div",{className:"toggle",children:[(0,a.jsx)("input",{type:"checkbox",name:e,required:l,id:n,defaultChecked:Boolean(t),className:"toggle__input"}),(0,a.jsx)("span",{className:"toggle__check",children:o.iconCheck()})]}),(0,a.jsx)(p,{label:s,slug:r,required:l})]})},m=({children:e})=>(0,a.jsx)("div",{className:"form-field",children:(0,a.jsx)("div",{className:"form-field__wrapper",children:e})}),x=({count:e=0,maxLength:l})=>l?(0,a.jsxs)("span",{className:"form-field__maxlength",children:[e," / ",l]}):null,f=({name:e,required:l,id:n,defaultValue:t,maxLength:s})=>{const[r,o]=(0,i.useState)(null);return(0,a.jsxs)(m,{children:[(0,a.jsx)("input",{type:"text",name:e,required:l,id:n,defaultValue:t,className:"form-field__text",maxLength:s,onChange:e=>o(e.target.value)}),(0,a.jsx)(x,{count:r?.length,maxLength:s})]})},b=({name:e,required:l,id:n,defaultValue:t,maxLength:s})=>{const[r,o]=(0,i.useState)(null);return(0,a.jsxs)(m,{children:[(0,a.jsx)("textarea",{name:e,required:l,defaultValue:t,id:n,rows:5,className:"form-field__textarea",maxLength:s,onChange:e=>o(e.target.value)}),(0,a.jsx)(x,{count:r?.length,maxLength:s})]})},j=({children:e})=>(0,a.jsx)("div",{className:"form-item",children:e}),g=({name:e,required:l,id:n,defaultValue:t})=>(0,a.jsx)(m,{children:(0,a.jsx)("input",{type:"date",name:e,required:l,id:n,defaultValue:t,className:"form-field__text form-field__date"})}),y=({name:e,required:l,id:n,defaultValue:t,maxLength:i})=>(0,a.jsx)(m,{children:(0,a.jsx)("input",{type:"number",name:e,required:l,id:n,defaultValue:t,className:"form-field__text form-field__number",maxLength:i})}),_=({name:e,required:l,id:n,defaultValue:t,maxLength:r})=>{const o=(0,i.useRef)(null),d=(0,i.useContext)(u),[c,p]=(0,i.useState)("");return(0,i.useEffect)((()=>{if(!o.current)return;const e=((l=s)&&l.__esModule?l.default:l)(o.current,{initialCountry:d.telephoneInitialCountry,allowDropdown:d.telephoneAllowDropdown,autoHideDialCode:d.telephoneAutoHideDialCode,autoPlaceholder:d.telephoneAutoPlaceholder,customContainer:d.telephoneCustomContainer,customPlaceholder:d.telephoneCustomPlaceholder,dropdownContainer:d.telephoneDropdownContainer,excludeCountries:d.telephoneExcludeCountries,formatOnDisplay:d.telephoneFormatOnDisplay,geoIpLookup:d.telephoneGeoIpLookup,hiddenInput:d.telephoneHiddenInput,localizedCountries:d.telephoneLocalizedCountries,nationalMode:d.telephoneNationalMode,onlyCountries:d.telephoneOnlyCountries,placeholderNumberType:d.telephonePlaceholderNumberType,preferredCountries:d.telephonePreferredCountries,separateDialCode:d.telephoneSeparateDialCode,utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"});var l;const n=()=>{const l=e.getSelectedCountryData();p(l.dialCode)};n(),o.current.addEventListener("countrychange",n)}),[]),(0,a.jsxs)(m,{children:[(0,a.jsx)("input",{type:"tel",ref:o,name:e,required:l,id:n,defaultValue:t,maxLength:r,className:"form-field__text form-field__telephone"}),(0,a.jsx)("input",{type:"hidden",name:`${e}_dialcode`,value:c,readOnly:!0})]})};const k=({name:e,field:l})=>{const n=(0,i.useContext)(u),t=Boolean(l.supported_file_types.filter((e=>["jpg","jpeg","gif","png"].includes(e))).length),[s,o]=(0,i.useState)("initial"),[d,c]=(0,i.useState)(null),[p,h]=(0,i.useState)(""),[m,x]=(0,i.useState)(""),{acceptedFiles:f,getRootProps:b,getInputProps:j,inputRef:g}=(0,r.useDropzone)({maxFiles:1,multiple:!1,maxSize:l.max_file_size,accept:{"application/octet-stream":l.supported_file_types.map((e=>`.${e}`))},onDrop:e=>{if(o("loading"),!e.length)return h(n.labelDropzoneNoFilesAccepted),void o("error");e.forEach((e=>{const l=new FileReader;l.onabort=()=>{y(),h(n.labelDropzoneAborted),o("error")},l.onerror=()=>{y(),h(n.labelDropzoneError),o("error")},l.onload=()=>{x(l.result.toString().split("base64,")[1]),o("success")},l.readAsDataURL(e)})),c(e.map((e=>Object.assign(e,{preview:URL.createObjectURL(e)})))[0])}}),y=()=>{d&&URL.revokeObjectURL(d.preview),x("")};(0,i.useEffect)((()=>()=>y()),[]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{type:"button","data-action":"remove-entry",onClick:e=>{e.preventDefault(),f.length=0,f.splice(0,f.length),g.current.value="",c(null),o("initial"),h("")},style:{display:"none"}}),(0,a.jsxs)("div",{...b({className:"dropzone"}),"data-state":s,children:[(0,a.jsx)("input",{...j()}),(0,a.jsx)("textarea",{name:e,style:{display:"none"},"data-filename":f?.[0]?.name,value:m,readOnly:!0}),f.length>0?(0,a.jsxs)(a.Fragment,{children:[t&&d&&(0,a.jsx)("img",{style:{maxWidth:240},src:d.preview,onLoad:()=>{URL.revokeObjectURL(d.preview)}},d.name),!t&&f.map((e=>(0,a.jsx)("p",{children:e.name},e.name))),(0,a.jsxs)("p",{className:"dropzone__label",children:[(0,a.jsx)("span",{children:n.labelDropzoneReplaceFile})," ",n.labelDropzoneDragDrop]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{className:"dropzone__label",children:[(0,a.jsx)("span",{children:n.labelDropzoneUpload})," ",n.labelDropzoneDragDrop]}),(0,a.jsx)("p",{className:"dropzone__info",children:l.max_file_size&&`${n.labelDropzoneMaxSize} ${Math.floor(l.max_file_size/1e6)}Mb. Acceptable file types .\n              ${l.supported_file_types.join(", .")}.`})]}),"loading"===s&&(0,a.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n                .spinner_b2T7{animation:spinner_xe7Q .8s linear infinite}.spinner_YRVV{animation-delay:-.65s}.spinner_c9oY{animation-delay:-.5s}@keyframes spinner_xe7Q{93.75%,100%{r:3px}46.875%{r:.2px}}"}}),(0,a.jsx)("circle",{className:"spinner_b2T7",cx:"4",cy:"12",r:"3"}),(0,a.jsx)("circle",{className:"spinner_b2T7 spinner_YRVV",cx:"12",cy:"12",r:"3"}),(0,a.jsx)("circle",{className:"spinner_b2T7 spinner_c9oY",cx:"20",cy:"12",r:"3"})]}),p&&(0,a.jsx)("p",{className:"dropzone__message",children:p})]})]})};const v=({onClick:e,theme:l="primary",type:n="button",size:t="md",children:i,style:s,disabled:r,className:o="",...d})=>(0,a.jsx)("button",{type:n,onClick:e,className:`button button--${l} button--${t} button--${r?"disabled":"enabled"} ${o}`,style:s,disabled:r,...d,children:i}),w=({name:e,children:l,displayClearButton:n=!0})=>{const t=(0,i.useContext)(u),s=(0,i.useRef)(null);return(0,a.jsxs)("fieldset",{className:"form-fieldset",ref:s,children:[e&&(0,a.jsxs)("legend",{className:"form-legend",children:[(0,a.jsx)("span",{className:"form-legend__title",children:e}),n&&(0,a.jsx)("span",{className:"form-legend__clear",children:(0,a.jsxs)(v,{type:"button",theme:"ghost",onClick:()=>{s.current.querySelectorAll("input, textarea, select").forEach((e=>{"checkbox"===e.type||"radio"===e.type?e.checked=!1:e.value="",e.dispatchEvent(new Event("change"))}));s.current.querySelectorAll('[data-action="remove-entry"]').forEach((e=>{e.click()}))},children:[t.iconClear(),t.labelClear]})})]}),l]})},C=({name:e,field:l})=>{const n=(0,i.useContext)(u),[t,s]=(0,i.useState)("initial"),r=(0,i.useRef)(null),c=(0,i.useRef)(null),[p,h]=(0,i.useState)(null),m=(0,i.useRef)(0),[x,f]=(0,i.useReducer)(((e,l)=>{const n=e.findIndex((({id:e})=>e===l.id));let t=[...e];switch(l.type){case"add":return[...e,l];case"remove":return t.splice(n,1),t;case"edit":return t.splice(n,1,l),t}}),[]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("input",{type:"hidden",name:e,value:JSON.stringify(x),ref:c,onChange:e=>f(JSON.parse(e.target.value))}),Boolean(x.length)&&(0,a.jsx)("div",{className:"complex-multiple__entries",children:x.map((e=>(0,a.jsxs)("div",{className:"complex-multiple__entry",children:[(0,a.jsx)("table",{className:"complex-multiple__entry-table",children:(0,a.jsx)("tbody",{children:Object.entries(e.data).map((([e,l])=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:l.label}),"on"===l.value?(0,a.jsx)("td",{children:n.iconCheck()}):(0,a.jsx)("td",{children:l.value})]},e)))})}),(0,a.jsxs)("div",{className:"complex-multiple__entry-actions",children:[(0,a.jsxs)(v,{type:"button",theme:"ghost",onClick:()=>{h(e.id),s("dialog")},children:[n.iconEdit(),(0,a.jsx)(d.Root,{children:n.labelEdit})]}),(0,a.jsxs)(v,{type:"button",theme:"ghost","data-action":"remove-entry",onClick:()=>f({id:e.id,type:"remove"}),children:[n.iconDelete(),(0,a.jsx)(d.Root,{children:n.labelDelete})]})]})]},e.id)))}),(0,a.jsx)("div",{className:"complex-multiple__add",children:(0,a.jsx)(v,{type:"button",onClick:()=>s("dialog"),children:n.labelAdd})}),(0,a.jsx)(o.Root,{open:"dialog"===t,children:(0,a.jsxs)(o.Portal,{children:[(0,a.jsx)(o.Overlay,{className:"dialog-overlay"}),(0,a.jsx)(o.Content,{className:"dialog-content application-form-dialog",onEscapeKeyDown:()=>s("initial"),onPointerDownOutside:()=>s("initial"),onInteractOutside:()=>s("initial"),children:(0,a.jsxs)("div",{className:"dialog-content__form",children:[(0,a.jsx)(d.Root,{asChild:!0,children:(0,a.jsx)(o.Title,{className:"dialog-title",children:p?n.labelEdit:n.labelAdd})}),(0,a.jsx)(v,{"aria-label":n.labelClose,onClick:()=>s("initial"),theme:"tertiary",className:"dialog-content__close",children:n.iconCancel()}),(0,a.jsx)("form",{className:"complex-multiple__form",ref:r,children:(0,a.jsxs)(w,{name:l.label,displayClearButton:!1,children:[l.fields.map((e=>{const l={...x.find((({id:e})=>e===p))};return(0,a.jsx)(q,{name:e.key,field:{...e,name:e.key,label:e.label,slug:e.key,value:p&&l?l.data[e.key]?.value:null}},e.key)})),(0,a.jsxs)("div",{className:"button-row",children:[(0,a.jsx)(v,{type:"button",onClick:()=>(()=>{if(!c.current)return;if(!r)return;const e=new FormData(r.current),n=Object.fromEntries(e.entries()),t=p?{id:p,type:"edit",data:{}}:{id:"entry-"+ ++m.current,type:"add",data:{}};Object.entries(n).forEach((([e,n])=>{const a=l.fields.find((l=>l.key===e));n.trim().length&&(t.data[e]={key:e,value:n,label:a.label})})),f(t),s("initial"),h(null)})(),children:n.labelSave}),(0,a.jsx)(v,{type:"button",theme:"tertiary",onClick:()=>{h(null),s("initial")},children:n.labelCancel})]})]})})]})})]})})]})};const N=({name:e,required:l,id:n,defaultValue:t,choices:i})=>(0,a.jsx)(m,{children:(0,a.jsxs)("select",{className:"form-field__select",name:e,required:l,id:n,defaultValue:t,children:[(0,a.jsx)("option",{value:null}),i?.map((e=>(0,a.jsx)("option",{value:e.id,children:e.body},e.id)))]})}),D=({name:e,required:l,id:n,choices:t,multiple:i})=>(0,a.jsx)("fieldset",{className:"form-field__choice-fieldset",children:t?.map((l=>(0,a.jsxs)("div",{className:"form-field__choice-wrapper",children:[(0,a.jsx)("input",{type:i?"checkbox":"radio",name:e,id:`${n}${l.id}`,value:l.id,className:"form-field__choice"}),(0,a.jsx)("label",{htmlFor:`${n}${l.id}`,children:l.body})]},l.id)))}),q=({name:e,field:l})=>{if(!l)return console.log(`Missing field: ${e}`),null;const n={name:l.name,required:l.required,id:`field-${l.slug}`,defaultValue:l.value};let t;switch("max_length"in l&&(n.maxLength=l.max_length),"choices"in l&&(n.choices=l.choices),"single_answer"in l&&(n.multiple=!l.single_answer),l.type){case"free_text":t=()=>(0,a.jsx)(b,{...n});break;case"file":t=()=>(0,a.jsx)(k,{name:l.slug,field:l});break;case"boolean":t=()=>(0,a.jsx)(h,{...n,label:l.label,slug:l.slug});break;case"date":t=()=>(0,a.jsx)(g,{...n});break;case"multiple_choice":t=()=>(0,a.jsx)(D,{...n});break;case"dropdown":t=()=>(0,a.jsx)(N,{...n});break;case"numeric":t=()=>(0,a.jsx)(y,{...n});break;case"complex":t=l.multiple?()=>(0,a.jsx)(C,{name:e,field:l}):()=>(0,a.jsx)("div",{children:"complex simple (not implemented)"});break;default:t=()=>(0,a.jsx)(f,{...n})}return"phone"===l.name&&(t=()=>(0,a.jsx)(_,{...n})),"boolean"===l.type?(0,a.jsx)(j,{children:t&&(0,a.jsx)(t,{})}):(0,a.jsxs)(j,{children:[(0,a.jsx)(p,{label:l.label,slug:l.slug,required:l.required}),t&&(0,a.jsx)(t,{})]})},S=({children:e})=>(0,a.jsx)("div",{className:"button-row",children:e}),z=({children:e,as:l="h2"})=>{const n=l;return(0,a.jsx)(n,{className:`heading heading--${l}`,children:e})},O=({children:e,onSubmit:l})=>{const[n,t]=i.useState("initial"),[s,r]=i.useState(null),o=i.useContext(u);return(0,a.jsxs)("form",{className:`form--${n}`,onSubmit:e=>{t("saving"),r(null),l(e,(e=>{e?(r(e),t("error")):t("complete")}))},encType:"multipart/form-data",children:[o.labelForm&&(0,a.jsx)(z,{as:"h1",children:o.labelForm}),e,(0,a.jsx)("p",{className:"form__error "+(s?"enabled":"disabled"),onClick:()=>r(null),children:s})]})},E=e=>{const l={};return Object.keys(e).forEach((n=>{let t=e[n];try{t=JSON.parse(t)}catch(e){}Array.isArray(t)?l[n]=t.map((e=>{if("object"==typeof e&&null!==e){if("value"in t)return L(t.value);if("data"in e){const l={};return Object.keys(e.data).forEach((n=>{l[n]=L(e.data[n].value)})),l}return E(e)}return L(e)})):l[n]=L(t)})),l},L=e=>{if("string"!=typeof e||0!==e.trim().length)return"on"===e||"off"===e?"on"===e:e},A=(e,l,n)=>{const t={name:e.name,firstname:e.firstname,lastname:e.lastname,email:e.email,headline:e.headline,summary:e.summary,address:e.address,avatar:e.avatar,phone:e.phone?`+${e.phone_dialcode}${e.phone}`:void 0,cover_letter:e.cover_letter,education_entries:e.education,experience_entries:e.experience,answers:[],skills:e.skills,tags:e.tags,disqualified:e.disqualified,disqualification_reason:e.disqualification_reason,disqualified_at:e.disqualified_at,social_profiles:e.social_profiles,domain:e.domain,recruiter_key:e.recruiter_key};l.filter((e=>!Object.keys(t).includes(e.key))).forEach((l=>{const n=e[l.key];if(n)switch(l.type){case"string":const e={question_key:l.key,body:n};t.answers.push(e);break;case"free_text":const a={question_key:l.key,body:n};t.answers.push(a);break;case"boolean":const i={question_key:l.key,checked:n};t.answers.push(i);break;case"date":const s={question_key:l.key,date:n};t.answers.push(s);break;case"file":const r={question_key:l.key,name:l.key,file_url:"https://faces-img.xcdn.link/image-lorem-face-4053.jpg"};t.answers.push(r)}}));return n.filter((e=>!Object.keys(t).includes(e.id))).forEach((l=>{const n=e[l.id];if(n)switch(l.type){case"short_text":const e={question_key:l.id,body:n};t.answers.push(e);break;case"free_text":const a={question_key:l.id,body:n};t.answers.push(a);break;case"multiple_choice":const i={question_key:l.id,choices:n};t.answers.push(i);break;case"boolean":const s={question_key:l.id,checked:n};t.answers.push(s);break;case"dropdown":const r={question_key:l.id,choices:n};t.answers.push(r);break;case"date":const o={question_key:l.id,date:n};t.answers.push(o);break;case"numeric":const d={question_key:l.id,value:+n};t.answers.push(d);break;case"file":const c={question_key:l.id,file_url:"https://faces-img.xcdn.link/image-lorem-face-4053.jpg"};t.answers.push(c)}})),Object.keys(t).forEach((e=>void 0===t[e]?delete t[e]:{})),t},F="...",R=({formFields:e=[],questions:l=[],config:n={},fieldsets:t=[],onSave:i=(()=>{})})=>{const s=[...(e||[]).map((e=>({...e,name:e.key,label:e.label,slug:e.key}))),...(l||[]).map((e=>({...e,name:e.id,label:e.body,slug:e.id})))];t.length||t.push({name:"",fields:s.map((e=>e.name))}),t.some((e=>e.fields.some((e=>e===F))))||t[t.length-1].fields.push(F);const r=t.map((e=>({name:e.name,fields:e.fields.map((e=>{if(e===F)return F;const l=s.find((({name:l})=>l===e));return l?(s.splice(s.indexOf(l),1),l):null})).flat().filter(Boolean)}))).map((e=>{const l=e.fields.find((e=>e===F));return l&&e.fields.splice(e.fields.indexOf(l),1,...s),e}));return(0,a.jsx)("div",{className:"application-form",children:(0,a.jsx)(u.Provider,{value:{...c,...n},children:(0,a.jsxs)(O,{onSubmit:(n,t)=>{n.preventDefault();const a=new FormData(n.currentTarget),s=Object.fromEntries(a.entries()),r={};Object.keys(s).forEach((e=>{const n=l.find((l=>l.id===e));r[e]="multiple_choice"===n?.type||"dropdown"===n?.type?a.getAll(e):a.get(e)}));const o=E(r),d=A(o,e,l);return i(d,(e=>{e?t(e):t()})),!1},children:[r.map(((e,l)=>(0,a.jsx)(w,{name:e.name,children:e.fields.filter((({name:e})=>Boolean(e))).map((e=>(0,a.jsx)(q,{name:e.name,field:e},e.name)))},e.name||e.fields[0]?.name||l))),(0,a.jsx)(w,{children:(0,a.jsx)(S,{children:(0,a.jsx)(v,{type:"submit",size:"lg",style:{width:"100%"},children:n.labelSubmit||c.labelSubmit})})})]})})})};
//# sourceMappingURL=main.js.map