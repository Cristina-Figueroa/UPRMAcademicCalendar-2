(()=>{var e={};e.id=745,e.ids=[745],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2048:e=>{"use strict";e.exports=require("fs")},6162:e=>{"use strict";e.exports=require("stream")},1568:e=>{"use strict";e.exports=require("zlib")},4405:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>c,pages:()=>p,routeModule:()=>x,tree:()=>d}),r(5748),r(8032),r(2699),r(5866),r(2843);var a=r(3191),i=r(8716),s=r(7922),n=r.n(s),o=r(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["(dashboard)",{children:["guidelines",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5748)),"C:\\Users\\crist\\VSCode\\UPRMAcademicCalendar-2\\UPRMAcademicCalendar-2-1\\app\\(dashboard)\\guidelines\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,8032)),"C:\\Users\\crist\\VSCode\\UPRMAcademicCalendar-2\\UPRMAcademicCalendar-2-1\\app\\(dashboard)\\layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,2699)),"C:\\Users\\crist\\VSCode\\UPRMAcademicCalendar-2\\UPRMAcademicCalendar-2-1\\app\\(dashboard)\\loading.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,2843)),"C:\\Users\\crist\\VSCode\\UPRMAcademicCalendar-2\\UPRMAcademicCalendar-2-1\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],p=["C:\\Users\\crist\\VSCode\\UPRMAcademicCalendar-2\\UPRMAcademicCalendar-2-1\\app\\(dashboard)\\guidelines\\page.tsx"],c="/(dashboard)/guidelines/page",u={require:r,loadChunk:()=>Promise.resolve()},x=new a.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/(dashboard)/guidelines/page",pathname:"/guidelines",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4476:(e,t,r)=>{Promise.resolve().then(r.bind(r,1753))},1753:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>eA});var a,i=r(326),s=r(7577),n=r(3743),o=r(7840),l=r(3551),d=r(424),p=r(1135),c=r(8634),u=r(4018),x=r(1703),h=r(2791),m=r(6799),f=r(3145),g=r(6947),y=r(9914),b=r(5656),v=r(4641),j=r(3643),Z=r(955),P=r(1685),w=r(7898);function _(e){return(0,w.ZP)("MuiFormLabel",e)}let S=(0,P.Z)("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),C=e=>{let{classes:t,color:r,focused:a,disabled:i,error:s,filled:n,required:o}=e,l={root:["root",`color${(0,v.Z)(r)}`,i&&"disabled",s&&"error",n&&"filled",a&&"focused",o&&"required"],asterisk:["asterisk",s&&"error"]};return(0,c.Z)(l,_,t)},k=(0,x.ZP)("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},t)=>({...t.root,..."secondary"===e.color&&t.colorSecondary,...e.filled&&t.filled})})((0,j.Z)(({theme:e})=>({color:(e.vars||e).palette.text.secondary,...e.typography.body1,lineHeight:"1.4375em",padding:0,position:"relative",variants:[...Object.entries(e.palette).filter((0,Z.Z)()).map(([t])=>({props:{color:t},style:{[`&.${S.focused}`]:{color:(e.vars||e).palette[t].main}}})),{props:{},style:{[`&.${S.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${S.error}`]:{color:(e.vars||e).palette.error.main}}}]}))),E=(0,x.ZP)("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})((0,j.Z)(({theme:e})=>({[`&.${S.error}`]:{color:(e.vars||e).palette.error.main}}))),M=s.forwardRef(function(e,t){let r=(0,h.i)({props:e,name:"MuiFormLabel"}),{children:a,className:s,color:n,component:o="label",disabled:l,error:d,filled:c,focused:u,required:x,...m}=r,f=(0,b.Z)(),g=(0,y.Z)({props:r,muiFormControl:f,states:["color","required","focused","disabled","error","filled"]}),v={...r,color:g.color||"primary",component:o,disabled:g.disabled,error:g.error,filled:g.filled,focused:g.focused,required:g.required},j=C(v);return(0,i.jsxs)(k,{as:o,ownerState:v,className:(0,p.Z)(j.root,s),ref:t,...m,children:[a,g.required&&(0,i.jsxs)(E,{ownerState:v,"aria-hidden":!0,className:j.asterisk,children:[" ","*"]})]})});var R=r(7080);function T(e){return(0,w.ZP)("MuiInputLabel",e)}(0,P.Z)("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);let A=e=>{let{classes:t,formControl:r,size:a,shrink:i,disableAnimation:s,variant:n,required:o}=e,l={root:["root",r&&"formControl",!s&&"animated",i&&"shrink",a&&"normal"!==a&&`size${(0,v.Z)(a)}`,n],asterisk:[o&&"asterisk"]},d=(0,c.Z)(l,T,t);return{...t,...d}},$=(0,x.ZP)(M,{shouldForwardProp:e=>(0,R.Z)(e)||"classes"===e,name:"MuiInputLabel",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[{[`& .${S.asterisk}`]:t.asterisk},t.root,r.formControl&&t.formControl,"small"===r.size&&t.sizeSmall,r.shrink&&t.shrink,!r.disableAnimation&&t.animated,r.focused&&t.focused,t[r.variant]]}})((0,j.Z)(({theme:e})=>({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%",variants:[{props:({ownerState:e})=>e.formControl,style:{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"}},{props:{size:"small"},style:{transform:"translate(0, 17px) scale(1)"}},{props:({ownerState:e})=>e.shrink,style:{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"}},{props:({ownerState:e})=>!e.disableAnimation,style:{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})}},{props:{variant:"filled"},style:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"}},{props:{variant:"filled",size:"small"},style:{transform:"translate(12px, 13px) scale(1)"}},{props:({variant:e,ownerState:t})=>"filled"===e&&t.shrink,style:{userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"}},{props:({variant:e,ownerState:t,size:r})=>"filled"===e&&t.shrink&&"small"===r,style:{transform:"translate(12px, 4px) scale(0.75)"}},{props:{variant:"outlined"},style:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"}},{props:{variant:"outlined",size:"small"},style:{transform:"translate(14px, 9px) scale(1)"}},{props:({variant:e,ownerState:t})=>"outlined"===e&&t.shrink,style:{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}}]}))),z=s.forwardRef(function(e,t){let r=(0,h.i)({name:"MuiInputLabel",props:e}),{disableAnimation:a=!1,margin:s,shrink:n,variant:o,className:l,...d}=r,c=(0,b.Z)(),u=n;void 0===u&&c&&(u=c.filled||c.focused||c.adornedStart);let x=(0,y.Z)({props:r,muiFormControl:c,states:["size","variant","required","focused"]}),m={...r,disableAnimation:a,formControl:c,shrink:u,size:x.size,variant:x.variant,required:x.required,focused:x.focused},f=A(m);return(0,i.jsx)($,{"data-shrink":u,ref:t,className:(0,p.Z)(f.root,l),...d,ownerState:m,classes:f})});var q=r(3913);function F(e){return(0,w.ZP)("MuiFormHelperText",e)}let L=(0,P.Z)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),U=e=>{let{classes:t,contained:r,size:a,disabled:i,error:s,filled:n,focused:o,required:l}=e,d={root:["root",i&&"disabled",s&&"error",a&&`size${(0,v.Z)(a)}`,r&&"contained",o&&"focused",n&&"filled",l&&"required"]};return(0,c.Z)(d,F,t)},O=(0,x.ZP)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.size&&t[`size${(0,v.Z)(r.size)}`],r.contained&&t.contained,r.filled&&t.filled]}})((0,j.Z)(({theme:e})=>({color:(e.vars||e).palette.text.secondary,...e.typography.caption,textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${L.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${L.error}`]:{color:(e.vars||e).palette.error.main},variants:[{props:{size:"small"},style:{marginTop:4}},{props:({ownerState:e})=>e.contained,style:{marginLeft:14,marginRight:14}}]}))),N=s.forwardRef(function(e,t){let r=(0,h.i)({props:e,name:"MuiFormHelperText"}),{children:s,className:n,component:o="p",disabled:l,error:d,filled:c,focused:u,margin:x,required:m,variant:f,...g}=r,v=(0,b.Z)(),j=(0,y.Z)({props:r,muiFormControl:v,states:["variant","size","disabled","error","filled","focused","required"]}),Z={...r,component:o,contained:"filled"===j.variant||"outlined"===j.variant,variant:j.variant,size:j.size,disabled:j.disabled,error:j.error,filled:j.filled,focused:j.focused,required:j.required};delete Z.ownerState;let P=U(Z);return(0,i.jsx)(O,{as:o,className:(0,p.Z)(P.root,n),ref:t,...g,ownerState:Z,children:" "===s?a||(a=(0,i.jsx)("span",{className:"notranslate",children:"​"})):s})});var I=r(3165);function B(e){return(0,w.ZP)("MuiTextField",e)}(0,P.Z)("MuiTextField",["root"]);var D=r(1121);let W={standard:m.Z,filled:f.Z,outlined:g.Z},H=e=>{let{classes:t}=e;return(0,c.Z)({root:["root"]},B,t)},V=(0,x.ZP)(q.Z,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),G=s.forwardRef(function(e,t){let r=(0,h.i)({props:e,name:"MuiTextField"}),{autoComplete:a,autoFocus:s=!1,children:n,className:o,color:l="primary",defaultValue:d,disabled:c=!1,error:x=!1,FormHelperTextProps:m,fullWidth:f=!1,helperText:g,id:y,InputLabelProps:b,inputProps:v,InputProps:j,inputRef:Z,label:P,maxRows:w,minRows:_,multiline:S=!1,name:C,onBlur:k,onChange:E,onFocus:M,placeholder:R,required:T=!1,rows:A,select:$=!1,SelectProps:q,slots:F={},slotProps:L={},type:U,value:O,variant:B="outlined",...G}=r,Y={...r,autoFocus:s,color:l,disabled:c,error:x,fullWidth:f,multiline:S,required:T,select:$,variant:B},X=H(Y),J=(0,u.Z)(y),K=g&&J?`${J}-helper-text`:void 0,Q=P&&J?`${J}-label`:void 0,ee=W[B],et={slots:F,slotProps:{input:j,inputLabel:b,htmlInput:v,formHelperText:m,select:q,...L}},er={},ea=et.slotProps.inputLabel;"outlined"===B&&(ea&&void 0!==ea.shrink&&(er.notched=ea.shrink),er.label=P),$&&(q&&q.native||(er.id=void 0),er["aria-describedby"]=void 0);let[ei,es]=(0,D.Z)("input",{elementType:ee,externalForwardedProps:et,additionalProps:er,ownerState:Y}),[en,eo]=(0,D.Z)("inputLabel",{elementType:z,externalForwardedProps:et,ownerState:Y}),[el,ed]=(0,D.Z)("htmlInput",{elementType:"input",externalForwardedProps:et,ownerState:Y}),[ep,ec]=(0,D.Z)("formHelperText",{elementType:N,externalForwardedProps:et,ownerState:Y}),[eu,ex]=(0,D.Z)("select",{elementType:I.Z,externalForwardedProps:et,ownerState:Y}),eh=(0,i.jsx)(ei,{"aria-describedby":K,autoComplete:a,autoFocus:s,defaultValue:d,fullWidth:f,multiline:S,name:C,rows:A,maxRows:w,minRows:_,type:U,value:O,id:J,inputRef:Z,onBlur:k,onChange:E,onFocus:M,placeholder:R,inputProps:ed,slots:{input:F.htmlInput?el:void 0},...es});return(0,i.jsxs)(V,{className:(0,p.Z)(X.root,o),disabled:c,error:x,fullWidth:f,ref:t,required:T,color:l,variant:B,ownerState:Y,...G,children:[null!=P&&""!==P&&(0,i.jsx)(en,{htmlFor:J,id:Q,...eo,children:P}),$?(0,i.jsx)(eu,{"aria-describedby":K,id:J,labelId:Q,value:O,input:eh,...ex,children:n}):eh,g&&(0,i.jsx)(ep,{id:K,...ec,children:g})]})});var Y=r(7841),X=r(2265);let J=({show:e,onClose:t,onSave:r})=>{let a=(0,n.Z)(),o=useMemo(()=>({guideline_name:"",shift_days:"",day_type:"NORMALES",start:"",period_type:"SEMESTER"}),[]),[l,p]=(0,s.useState)(o),[c,u]=(0,s.useState)({}),[x,h]=(0,s.useState)("");(0,s.useEffect)(()=>{e&&(p(o),u({}),h())},[e,o]);let m=e=>{p({...l,[e.target.name]:e.target.value})},f=()=>{let e={};return l.guideline_name.trim()||(e.guideline_name="Guideline name is required"),l.shift_days.trim()||(e.shift_days="Shift days is required"),l.start.trim()||(e.start="Start is required"),u(e),0===Object.keys(e).length};return i.jsx(d.Z,{open:e,onClose:t,children:(0,i.jsxs)("div",{style:{padding:"20px",background:a.palette.background.paper,color:a.palette.text.primary,margin:"10% auto",width:"400px",borderRadius:"8px",boxShadow:a.shadows[5]},children:[i.jsx("h2",{style:{color:a.palette.text.primary},children:"Add New Guideline"}),x&&i.jsx("p",{style:{color:"red",marginBottom:"15px"},children:x}),i.jsx(G,{name:"guideline_name",label:"Guideline Name",fullWidth:!0,value:l.guideline_name,onChange:m,style:{marginBottom:"15px",borderColor:c.guideline_name?"red":void 0},error:!!c.guideline_name,helperText:c.guideline_name||""}),i.jsx(G,{name:"shift_days",label:"Shift Days",type:"number",fullWidth:!0,value:l.shift_days,onChange:m,style:{marginBottom:"15px",borderColor:c.shift_days?"red":void 0},error:!!c.shift_days,helperText:c.shift_days||""}),(0,i.jsxs)(I.Z,{name:"day_type",value:l.day_type,onChange:m,fullWidth:!0,style:{marginBottom:"15px",color:a.palette.text.primary},children:[i.jsx(Y.Z,{value:"NORMALES",children:"Normales"}),i.jsx(Y.Z,{value:"LABORABLES",children:"Laborables"}),i.jsx(Y.Z,{value:"SABADOS",children:"Sabados"})]}),i.jsx(G,{name:"start",label:"Start",fullWidth:!0,value:l.start,onChange:m,style:{marginBottom:"15px",borderColor:c.start?"red":void 0},error:!!c.start,helperText:c.start||""}),(0,i.jsxs)(I.Z,{name:"period_type",value:l.period_type,onChange:m,fullWidth:!0,style:{marginBottom:"15px",color:a.palette.text.primary},children:[i.jsx(Y.Z,{value:"SEMESTER",children:"Semestre"}),i.jsx(Y.Z,{value:"SUMMER",children:"Verano Corto"}),i.jsx(Y.Z,{value:"EXTENDED SUMMER",children:"Verano Extendido"})]}),(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[i.jsx(X.Z,{onClick:t,color:"secondary",style:{backgroundColor:a.palette.action.hover,color:a.palette.text.primary},children:"Cancel"}),i.jsx(X.Z,{onClick:()=>{f()?(r(l),t()):h("Please fill out all required fields.")},color:"primary",variant:"contained",style:{backgroundColor:a.palette.primary.main,color:a.palette.primary.contrastText},children:"Save"})]})]})})};var K=r(1353),Q=r(9979),ee=r(5988),et=r(2742),er=r(6889),ea=r(1969);let ei=ea.ZP.select`
  border: ${({hasError:e})=>e?"2px solid red":"1px solid #ccc"};
  box-shadow: ${({hasError:e})=>e?"0 0 5px red":"none"};
  padding: 8px;
  border-radius: 4px;
  width: 100%;
  transition: border 0.3s ease, box-shadow 0.3s ease;
`,es=ea.ZP.input`
  border: ${({hasError:e})=>e?"2px solid red":"1px solid #ccc"};
  box-shadow: ${({hasError:e})=>e?"0 0 5px red":"none"};
  padding: 8px;
  border-radius: 4px;
  width: 100%;
  transition: border 0.3s ease, box-shadow 0.3s ease;
`,en=(0,ea.ZP)(X.Z)`
  position: fixed;
  bottom: 75px;
  right: 23px;
  padding: 10px 15px;
  font-size: 30px;
  border-radius: 50%;
  height: 40px;
  min-width: 40px;
  cursor: 'pointer';
  background-color: 'green';
`,eo=(0,ea.ZP)(X.Z)`
  margin-left: 10px;
  height: 40px;
  min-width: 40px;
  background-color: '#ff6b6b', // Red color for cancel button
`,el=ea.ZP.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  margin-top: -30px;
  border-radius: 10px;
`,ed=ea.ZP.table`
  width: 100%;
  border-collapse: collapse;
  font-family: 'Arial', sans-serif;
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  table-layout: fixed;
`,ep=ea.ZP.thead`
  background-color: ${({theme:e})=>(e.palette.mode,e.palette.primary.main)};
  color: ${({theme:e})=>(e.palette.mode,e.palette.text.primary)};
`,ec=ea.ZP.tr`
  text-align: left;
  padding: 12px 18px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`,eu=ea.ZP.th`
  padding: 20px 18px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;

  /* Set specific widths */
  &:nth-child(1) {
    width: 25%; /* Name column */
    text-align: center;

  }
  &:nth-child(2) {
    width: 45%; /* Description column */
    text-align: center;
  }
  &:nth-child(3) {
    // width: 20%; /* Period column */
    // text-align: center;
  }

`,ex=(0,ea.ZP)(eu)`
  display: flex; /* Enable Flexbox */
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
`,eh=ea.ZP.tbody``,em=ea.ZP.tr`
  width: 100%;

  &:nth-child(even) {
    background-color: ${({theme:e})=>e.palette?.background?.rowAlt||"#f4f4f4"};
  }
  &:nth-child(odd) {
    background-color: ${({theme:e})=>e.palette?.background?.default||"#ffffff"};
  }
  &:hover {
    background-color: ${({theme:e})=>e.palette?.action?.hover||"#e0f5e0"};
    cursor: pointer;
  }
`,ef=ea.ZP.td`
  padding: 18px 18px;
  font-size: 14px;
  font-weight: normal;
`,eg=(0,ea.ZP)(ef)`
  font-weight: bold;
`,ey=(0,ea.ZP)(ef)`
  max-width: 100px; /* Adjust this value as needed */
  white-space: wrap; /* Prevent wrapping */
  overflow: hidden; /* Truncate overflowing text */
  text-overflow: ellipsis; /* Add ellipsis for long text */
  // background-color:pink;
  // text-align: center;
`;(0,ea.ZP)(ef)`
  display: flex; /* Enable Flexbox */
  justify-content: flex-end; 
  text-align: right;
`,(0,ea.ZP)(ef)`
  display: flex; /* Enable Flexbox */
  justify-content: center; 
  text-align: right;
`;let eb=ea.ZP.tfoot`
  background-color: ${({theme:e})=>e.palette.background.paper};
  color: ${({theme:e})=>(e.palette.mode,e.palette.text.primary)};
`,ev=ea.ZP.tr`
  padding: 12px 18px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`,ej=ea.ZP.th`
  padding: 14px 28px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`,eZ=ea.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;ea.ZP.div`
  display: flex;
  // flex-direction: row;
  justify-content: center;
`;let eP=ea.ZP.div`
  display: flex;
  justify-content: right; 
`,ew=ea.ZP.div`
  position: fixed; //center
  top: 80px;
  left: 45%;
  transform: translateX(-50%);
  padding: 10px 20px;
  border-radius: 5px;
  background-color: ${({type:e})=>"success"===e?"#4caf50":"#f44336"};
  color: white;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  animation: fadeInOut 3s ease;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    10% {
      opacity: 1;
      transform: translateY(0);
    }
    90% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-10px);
    }
  }
`,e_=(0,ea.ZP)(X.Z)`
  position: fixed;
  bottom: 21px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 50%;
  border: none;
  height: 46px;
  min-width: 46px;
  cursor: 'pointer';
`,eS=(0,ea.ZP)(X.Z)`
  // font-size: 30px;
  border-radius: 100px;
  height: 40px;
  min-width: 40px;
`,eC=(0,ea.ZP)(X.Z)`
  // font-size: 30px;
  border-radius: 100px;
  height: 40px;
  min-width: 40px;
`,ek=()=>{let[e,t]=(0,s.useState)([]),[r,a]=(0,s.useState)(null),d=(0,n.Z)(),[p,c]=(0,s.useState)(1),[u,x]=(0,s.useState)(5),h=p*u,m=e.slice(h-u,h),f=Math.ceil(e.length/u),g=(0,s.useCallback)(e=>{e>=1&&e<=f&&c(e)},[f]),y=(0,s.useCallback)(e=>{x(parseInt(e.target.value,10)),c(1)},[]),[b,v]=(0,s.useState)(!0),[j,Z]=(0,s.useState)(null),[P,w]=(0,s.useState)(""),_=(e,t)=>{Z(e),w(t),setTimeout(()=>{Z(null),w("")},3e3)},[S,C]=(0,s.useState)(!1),[k,E]=(0,s.useState)(!1);(0,s.useEffect)(()=>{(async()=>{try{let e=await fetch("http://127.0.0.1:5000/guidelines/",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error(`HTTP error! Status: ${e.status}`);let r=await e.json();t(r)}catch(e){console.error("Error fetching guidelines:",e),a(e.message)}finally{v(!1)}})()},[]);let[M,R]=(0,s.useState)(!1),[T,A]=(0,s.useState)(null),$=e=>{A(e),R(!0)},z=async()=>{try{let e=await fetch(`http://127.0.0.1:5000/guidelines/${T}`,{method:"DELETE",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error(`HTTP error! Status: ${e.status}`);_("Guideline deleted successfully!","success"),t(e=>e.filter(e=>e[0]!==T))}catch(e){console.error("Error deleting guideline:",e),_("Failed to delete the guideline. Please try again.","error")}finally{R(!1),A(null)}try{let e=await fetch("http://127.0.0.1:5000/guidelines/"),r=await e.json();t(r)}catch(e){console.error("Error refreshing guidelines:",e)}},[q,F]=(0,s.useState)({guideline_name:!1,shift_days:!1,day_type:!1,start:!1,period_type:!1}),L=async e=>{let r={guideline_name:!e.guideline_name,shift_days:!e.shift_days,day_type:!e.day_type,start:!e.start,period_type:!e.period_type};if(F(r),Object.values(r).some(e=>e)){_("Please fill in all required fields.","error");return}try{let r=await fetch("http://127.0.0.1:5000/guidelines/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({guideline_name:e.guideline_name,shift_days:e.shift_days,day_type:e.day_type,start:e.start,period_type:e.period_type})});if(!r.ok)throw Error(`HTTP error! Status: ${r.status}`);let a=await r.json();_(a.message,"success"),t(t=>[...t,{...e,guideline_id:a.guideline_id}])}catch(e){console.error("Error adding guideline:",e),_("Failed to add the guideline. Please try again.","error")}try{let e=await fetch("http://127.0.0.1:5000/guidelines/"),r=await e.json();t(r)}catch(e){console.error("Error refreshing guidelines:",e),_("Failed to update the guideline. Please try again.","error")}},[U,O]=(0,s.useState)(null),[N,I]=(0,s.useState)(!1),[B,D]=(0,s.useState)({guideline_name:"",day_type:"",shift_days:"",start:"",period_type:""}),W=e=>{O(e.guideline_id),D({guideline:e.guideline_name,shift_days:e.shift_days,day_type:e.day_type,start:e.start,period_type:e.period_type})},H=(e,t)=>{D(r=>({...r,[t]:e.target.value}))},V=async()=>{let r={guideline_id:U,guideline_name:B.guideline,shift_days:B.shift_days,day_type:B.day_type,start:B.start,period_type:B.period_type};console.log(r);try{let a=await fetch(`http://127.0.0.1:5000/guidelines/${r.guideline_id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!a.ok)throw Error(`Failed to update guideline. Status: ${a.status}`);let i=e.map(e=>e.guideline_id===r.guideline_id?r:e);t(i),_("Guideline updated successfully!","success")}catch(e){console.error("Error updating guideline:",e),_("Failed to update the guideline. Please try again.","error")}finally{O(null)}try{let e=await fetch("http://127.0.0.1:5000/guidelines/"),r=await e.json();t(r)}catch(e){console.error("Error refreshing guidelines:",e),_("Failed to update the guideline. Please try again.","error")}},G=()=>{O(null),D({})};return(0,i.jsxs)(i.Fragment,{children:[j&&i.jsx(ew,{type:P,children:j}),M&&i.jsx(ee.Z,{open:M,onClose:()=>R(!1),onConfirm:z,message:"Are you sure you want to delete this guideline? This action cannot be undone."}),N&&i.jsx(ee.Z,{open:N,onClose:()=>{I(!1)},onConfirm:()=>{I(!1),O(null),D({}),C(!1)},message:"You have unsaved changes. Are you sure you want to leave editing mode?"}),i.jsx(et.Z,{loading:b}),!b&&i.jsx(el,{theme:d,children:(0,i.jsxs)(ed,{children:[i.jsx(ep,{theme:d,children:(0,i.jsxs)(ec,{children:[i.jsx(eu,{theme:d,children:"Directriz"}),i.jsx(eu,{theme:d,children:"Descripci\xf3n"}),i.jsx(eu,{theme:d,children:"Periodo"})," ",S&&i.jsx(ex,{theme:d,children:"Acciones"})," "]})}),i.jsx(eh,{children:m.map((e,t)=>i.jsx(em,{theme:d,children:U===e.guideline_id?(0,i.jsxs)(i.Fragment,{children:[i.jsx(ef,{children:i.jsx(es,{value:B.guideline,onChange:e=>H(e,"guideline")})}),(0,i.jsxs)(ef,{children:[i.jsx(es,{type:"number",value:B.shift_days,onChange:e=>H(e,"shift_days"),placeholder:"Shift Days"}),(0,i.jsxs)(ei,{value:B.day_type,onChange:e=>H(e,"day_type"),children:[i.jsx("option",{value:"NORMALES",children:"Normales"}),i.jsx("option",{value:"LABORABLES",children:"Laborables"}),i.jsx("option",{value:"SABADOS",children:"Sabados"})]})]}),(0,i.jsxs)(ef,{children:[(0,i.jsxs)(ei,{value:B.period_type,onChange:e=>H(e,"period_type"),children:[i.jsx("option",{value:"SEMESTER",children:"Semestre"}),i.jsx("option",{value:"SUMMER",children:"Verano Corto"}),i.jsx("option",{value:"EXTENDED SUMMER",children:"Verano Extendido"})]}),i.jsx(es,{type:"text",value:B.start,onChange:e=>H(e,"start"),placeholder:"Start"})]}),(0,i.jsxs)(ef,{children:[i.jsx(X.Z,{onClick:V,children:"Save"}),i.jsx(eo,{onClick:G,children:"Cancel"})]})]}):(0,i.jsxs)(i.Fragment,{children:[i.jsx(eg,{theme:d,children:e.guideline_name}),i.jsx(ey,{theme:d,children:"SABADOS"===e.start?`Cuenta ${e.shift_days} ${e.day_type} desde ${e.start}`:`Cuenta ${e.shift_days} dias ${e.day_type} desde ${e.start}`}),i.jsx(ef,{children:e.period_type})," ",S&&(0,i.jsxs)(ef,{children:[i.jsx(eS,{onClick:()=>W(e),children:"Edit"}),i.jsx(eC,{onClick:()=>$(e.guideline_id),style:{color:"red"},children:i.jsx(er.Z,{})})]})]})},t))}),i.jsx(eb,{theme:d,children:i.jsx(ev,{children:i.jsx(ej,{colSpan:S?4:3,theme:d,children:(0,i.jsxs)(eZ,{children:[i.jsx(Q.Z,{rowsPerPage:u,onRowsPerPageChange:y}),i.jsx(eP,{children:i.jsx(K.Z,{currentPage:p,totalPages:f,onPageChange:g})})]})})})})]})}),i.jsx(e_,{theme:d,variant:"contained",style:{color:"white",backgroundColor:S?"red":(d.palette.mode,d.palette.primary.main)},onClick:()=>{null!==U?I(!0):C(e=>!e)},children:S?(0,i.jsxs)(i.Fragment,{children:[" ",i.jsx(l.Z,{sx:{fontSize:"xxlarge"}})]}):i.jsx(o.Z,{})}),i.jsx(en,{theme:d,variant:"contained",style:{color:"white"},onClick:()=>E(!0),children:"+"}),i.jsx(J,{show:k,onClose:()=>E(!1),onSave:L})]})};var eE=r(7180),eM=r(6766);let eR=ea.ZP.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  margin-top: -10px;
  color: ${({theme:e})=>(e.palette.mode,e.palette.text.primary)};
`,eT=ea.ZP.p`
  margin-bottom: 15px;
  margin-top: -10px;
`;function eA(){let e=(0,n.Z)(),[t,r]=(0,s.useState)(!1);return t?i.jsx(i.Fragment,{children:(0,i.jsxs)(eR,{theme:e,children:[(0,i.jsxs)(eT,{theme:e,children:["Esta p\xe1gina proporciona una ",i.jsx("strong",{children:"visi\xf3n general "}),"de las ",i.jsx("strong",{children:"directrices"})," seguidas en el ",i.jsx("strong",{children:"proceso de generaci\xf3n del calendario acad\xe9mico"}),". Estas directrices aseguran que el calendario cumpla con los est\xe1ndares institucionales e incluya eventos clave como los per\xedodos de ex\xe1menes y los plazos acad\xe9micos. Ten en cuenta que esta no es una lista exhaustiva, y tambi\xe9n se deben considerar otras directrices internas y aspectos a tener en cuenta."]}),i.jsx(s.Suspense,{fallback:i.jsx(eM.Z,{}),children:i.jsx(eE.Z,{theme:e,children:i.jsx(ek,{})})})]})}):null}},1353:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var a=r(326);r(7577);var i=r(1969),s=r(3743),n=r(2265),o=r(1426);let l=(0,o.Z)((0,a.jsx)("path",{d:"M16.88 2.88c-.49-.49-1.28-.49-1.77 0L6.7 11.29c-.39.39-.39 1.02 0 1.41l8.41 8.41c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.54 12l7.35-7.35c.48-.49.48-1.28-.01-1.77"}),"ArrowBackIosNewRounded"),d=(0,o.Z)((0,a.jsx)("path",{d:"M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76"}),"ArrowForwardIosRounded"),p=i.ZP.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 270px;
`,c=(0,i.ZP)(n.Z)`
  margin: 0 5px;
  border-radius: 25px;
`,u=({currentPage:e,totalPages:t,onPageChange:r})=>((0,s.Z)(),(0,a.jsxs)(p,{children:[a.jsx(c,{variant:"contained",onClick:()=>r(e-1),disabled:1===e,children:a.jsx(l,{})}),(0,a.jsxs)("span",{children:["Page ",e," of ",t]}),a.jsx(c,{variant:"contained",onClick:()=>r(e+1),disabled:e===t,children:a.jsx(d,{})})]}))},9979:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var a=r(326);r(7577);var i=r(3165),s=r(7841),n=r(1969);let o=n.ZP.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,l=({rowsPerPage:e,onRowsPerPageChange:t})=>(0,a.jsxs)(o,{children:["Rows per page:",(0,a.jsxs)(i.Z,{value:e,onChange:t,style:{marginLeft:10,maxHeight:30},children:[a.jsx(s.Z,{value:5,children:"5"}),a.jsx(s.Z,{value:10,children:"10"}),a.jsx(s.Z,{value:15,children:"15"}),a.jsx(s.Z,{value:20,children:"20"})]})]})},5748:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});let a=(0,r(8570).createProxy)(String.raw`C:\Users\crist\VSCode\UPRMAcademicCalendar-2\UPRMAcademicCalendar-2-1\app\(dashboard)\guidelines\page.tsx#default`)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[561,104,1,721],()=>r(4405));module.exports=a})();