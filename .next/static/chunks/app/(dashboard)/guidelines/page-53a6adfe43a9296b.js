(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[745],{2156:function(e,n,t){Promise.resolve().then(t.bind(t,2951))},2951:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return eS}});var r=t(5008),i=t(7437),a=t(2265),o=t(1691),l=t(4862),s=t(5319),d=t(579),u=t(7066),c=t(8486),p=t(2187),h=t(4013),x=e=>{let{show:n,onClose:t,onSave:r}=e,l=(0,o.Z)(),s=useMemo(()=>({guideline_name:"",shift_days:"",day_type:"NORMALES",start:"",period_type:"SEMESTER"}),[]),[x,f]=(0,a.useState)(s),[g,y]=(0,a.useState)({}),[m,j]=(0,a.useState)("");(0,a.useEffect)(()=>{n&&(f(s),y({}),j())},[n,s]);let _=e=>{f({...x,[e.target.name]:e.target.value})},v=()=>{let e={};return x.guideline_name.trim()||(e.guideline_name="Guideline name is required"),x.shift_days.trim()||(e.shift_days="Shift days is required"),x.start.trim()||(e.start="Start is required"),y(e),0===Object.keys(e).length};return(0,i.jsx)(d.Z,{open:n,onClose:t,children:(0,i.jsxs)("div",{style:{padding:"20px",background:l.palette.background.paper,color:l.palette.text.primary,margin:"10% auto",width:"400px",borderRadius:"8px",boxShadow:l.shadows[5]},children:[(0,i.jsx)("h2",{style:{color:l.palette.text.primary},children:"Add New Guideline"}),m&&(0,i.jsx)("p",{style:{color:"red",marginBottom:"15px"},children:m}),(0,i.jsx)(u.Z,{name:"guideline_name",label:"Guideline Name",fullWidth:!0,value:x.guideline_name,onChange:_,style:{marginBottom:"15px",borderColor:g.guideline_name?"red":void 0},error:!!g.guideline_name,helperText:g.guideline_name||""}),(0,i.jsx)(u.Z,{name:"shift_days",label:"Shift Days",type:"number",fullWidth:!0,value:x.shift_days,onChange:_,style:{marginBottom:"15px",borderColor:g.shift_days?"red":void 0},error:!!g.shift_days,helperText:g.shift_days||""}),(0,i.jsxs)(c.Z,{name:"day_type",value:x.day_type,onChange:_,fullWidth:!0,style:{marginBottom:"15px",color:l.palette.text.primary},children:[(0,i.jsx)(p.Z,{value:"NORMALES",children:"Normales"}),(0,i.jsx)(p.Z,{value:"LABORABLES",children:"Laborables"}),(0,i.jsx)(p.Z,{value:"SABADOS",children:"Sabados"})]}),(0,i.jsx)(u.Z,{name:"start",label:"Start",fullWidth:!0,value:x.start,onChange:_,style:{marginBottom:"15px",borderColor:g.start?"red":void 0},error:!!g.start,helperText:g.start||""}),(0,i.jsxs)(c.Z,{name:"period_type",value:x.period_type,onChange:_,fullWidth:!0,style:{marginBottom:"15px",color:l.palette.text.primary},children:[(0,i.jsx)(p.Z,{value:"SEMESTER",children:"Semestre"}),(0,i.jsx)(p.Z,{value:"SUMMER",children:"Verano Corto"}),(0,i.jsx)(p.Z,{value:"EXTENDED SUMMER",children:"Verano Extendido"})]}),(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsx)(h.Z,{onClick:t,color:"secondary",style:{backgroundColor:l.palette.action.hover,color:l.palette.text.primary},children:"Cancel"}),(0,i.jsx)(h.Z,{onClick:()=>{v()?(r(x),t()):j("Please fill out all required fields.")},color:"primary",variant:"contained",style:{backgroundColor:l.palette.primary.main,color:l.palette.primary.contrastText},children:"Save"})]})]})})},f=t(8e3),g=t(7352),y=t(3124),m=t(7699),j=t(6672),_=t(9379);function v(){let e=(0,r._)(["\n  border: ",";\n  box-shadow: ",";\n  padding: 8px;\n  border-radius: 4px;\n  width: 100%;\n  transition: border 0.3s ease, box-shadow 0.3s ease;\n"]);return v=function(){return e},e}function b(){let e=(0,r._)(["\n  border: ",";\n  box-shadow: ",";\n  padding: 8px;\n  border-radius: 4px;\n  width: 100%;\n  transition: border 0.3s ease, box-shadow 0.3s ease;\n"]);return b=function(){return e},e}function Z(){let e=(0,r._)(["\n  position: fixed;\n  bottom: 75px;\n  right: 23px;\n  padding: 10px 15px;\n  font-size: 30px;\n  border-radius: 50%;\n  height: 40px;\n  min-width: 40px;\n  cursor: 'pointer';\n  background-color: 'green';\n"]);return Z=function(){return e},e}function w(){let e=(0,r._)(["\n  margin-left: 10px;\n  height: 40px;\n  min-width: 40px;\n  background-color: '#ff6b6b', // Red color for cancel button\n"]);return w=function(){return e},e}function S(){let e=(0,r._)(["\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 20px;\n  margin-top: -30px;\n  border-radius: 10px;\n"]);return S=function(){return e},e}function C(){let e=(0,r._)(["\n  width: 100%;\n  border-collapse: collapse;\n  font-family: 'Arial', sans-serif;\n  margin-top: 20px;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  table-layout: fixed;\n"]);return C=function(){return e},e}function P(){let e=(0,r._)(["\n  background-color: ",";\n  color: ",";\n"]);return P=function(){return e},e}function E(){let e=(0,r._)(["\n  text-align: left;\n  padding: 12px 18px;\n  font-size: 16px;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n"]);return E=function(){return e},e}function k(){let e=(0,r._)(["\n  padding: 20px 18px;\n  font-size: 16px;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n\n  /* Set specific widths */\n  &:nth-child(1) {\n    width: 25%; /* Name column */\n    text-align: center;\n\n  }\n  &:nth-child(2) {\n    width: 45%; /* Description column */\n    text-align: center;\n  }\n  &:nth-child(3) {\n    // width: 20%; /* Period column */\n    // text-align: center;\n  }\n\n"]);return k=function(){return e},e}function T(){let e=(0,r._)(["\n  display: flex; /* Enable Flexbox */\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between; \n"]);return T=function(){return e},e}function A(){let e=(0,r._)([""]);return A=function(){return e},e}function R(){let e=(0,r._)(["\n  width: 100%;\n\n  &:nth-child(even) {\n    background-color: ",";\n  }\n  &:nth-child(odd) {\n    background-color: ",";\n  }\n  &:hover {\n    background-color: ",";\n    cursor: pointer;\n  }\n"]);return R=function(){return e},e}function O(){let e=(0,r._)(["\n  padding: 18px 18px;\n  font-size: 14px;\n  font-weight: normal;\n"]);return O=function(){return e},e}function M(){let e=(0,r._)(["\n  font-weight: bold;\n"]);return M=function(){return e},e}function N(){let e=(0,r._)(["\n  max-width: 100px; /* Adjust this value as needed */\n  white-space: wrap; /* Prevent wrapping */\n  overflow: hidden; /* Truncate overflowing text */\n  text-overflow: ellipsis; /* Add ellipsis for long text */\n  // background-color:pink;\n  // text-align: center;\n"]);return N=function(){return e},e}function B(){let e=(0,r._)(["\n  display: flex; /* Enable Flexbox */\n  justify-content: flex-end; \n  text-align: right;\n"]);return B=function(){return e},e}function F(){let e=(0,r._)(["\n  display: flex; /* Enable Flexbox */\n  justify-content: center; \n  text-align: right;\n"]);return F=function(){return e},e}function z(){let e=(0,r._)(["\n  background-color: ",";\n  color: ",";\n"]);return z=function(){return e},e}function D(){let e=(0,r._)(["\n  padding: 12px 18px;\n  font-size: 16px;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n"]);return D=function(){return e},e}function L(){let e=(0,r._)(["\n  padding: 14px 28px;\n  font-size: 14px;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n"]);return L=function(){return e},e}function q(){let e=(0,r._)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]);return q=function(){return e},e}function G(){let e=(0,r._)(["\n  display: flex;\n  // flex-direction: row;\n  justify-content: center;\n"]);return G=function(){return e},e}function U(){let e=(0,r._)(["\n  display: flex;\n  justify-content: right; \n"]);return U=function(){return e},e}function W(){let e=(0,r._)(["\n  position: fixed; //center\n  top: 80px;\n  left: 45%;\n  transform: translateX(-50%);\n  padding: 10px 20px;\n  border-radius: 5px;\n  background-color: ",";\n  color: white;\n  font-size: 16px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  animation: fadeInOut 3s ease;\n\n  @keyframes fadeInOut {\n    0% {\n      opacity: 0;\n      transform: translateY(-10px);\n    }\n    10% {\n      opacity: 1;\n      transform: translateY(0);\n    }\n    90% {\n      opacity: 1;\n      transform: translateY(0);\n    }\n    100% {\n      opacity: 0;\n      transform: translateY(-10px);\n    }\n  }\n"]);return W=function(){return e},e}function Y(){let e=(0,r._)(["\n  position: fixed;\n  bottom: 21px;\n  right: 20px;\n  padding: 10px 15px;\n  border-radius: 50%;\n  border: none;\n  height: 46px;\n  min-width: 46px;\n  cursor: 'pointer';\n"]);return Y=function(){return e},e}function H(){let e=(0,r._)(["\n  // font-size: 30px;\n  border-radius: 100px;\n  height: 40px;\n  min-width: 40px;\n"]);return H=function(){return e},e}function I(){let e=(0,r._)(["\n  // font-size: 30px;\n  border-radius: 100px;\n  height: 40px;\n  min-width: 40px;\n"]);return I=function(){return e},e}let V=_.ZP.select(v(),e=>{let{hasError:n}=e;return n?"2px solid red":"1px solid #ccc"},e=>{let{hasError:n}=e;return n?"0 0 5px red":"none"}),X=_.ZP.input(b(),e=>{let{hasError:n}=e;return n?"2px solid red":"1px solid #ccc"},e=>{let{hasError:n}=e;return n?"0 0 5px red":"none"}),J=(0,_.ZP)(h.Z)(Z()),K=(0,_.ZP)(h.Z)(w()),Q=_.ZP.div(S()),$=_.ZP.table(C()),ee=_.ZP.thead(P(),e=>{let{theme:n}=e;return n.palette.mode,n.palette.primary.main},e=>{let{theme:n}=e;return n.palette.mode,n.palette.text.primary}),en=_.ZP.tr(E()),et=_.ZP.th(k()),er=(0,_.ZP)(et)(T()),ei=_.ZP.tbody(A()),ea=_.ZP.tr(R(),e=>{var n,t;let{theme:r}=e;return(null===(t=r.palette)||void 0===t?void 0:null===(n=t.background)||void 0===n?void 0:n.rowAlt)||"#f4f4f4"},e=>{var n,t;let{theme:r}=e;return(null===(t=r.palette)||void 0===t?void 0:null===(n=t.background)||void 0===n?void 0:n.default)||"#ffffff"},e=>{var n,t;let{theme:r}=e;return(null===(t=r.palette)||void 0===t?void 0:null===(n=t.action)||void 0===n?void 0:n.hover)||"#e0f5e0"}),eo=_.ZP.td(O()),el=(0,_.ZP)(eo)(M()),es=(0,_.ZP)(eo)(N());(0,_.ZP)(eo)(B()),(0,_.ZP)(eo)(F());let ed=_.ZP.tfoot(z(),e=>{let{theme:n}=e;return n.palette.background.paper},e=>{let{theme:n}=e;return n.palette.mode,n.palette.text.primary}),eu=_.ZP.tr(D()),ec=_.ZP.th(L()),ep=_.ZP.div(q());_.ZP.div(G());let eh=_.ZP.div(U()),ex=_.ZP.div(W(),e=>{let{type:n}=e;return"success"===n?"#4caf50":"#f44336"}),ef=(0,_.ZP)(h.Z)(Y()),eg=(0,_.ZP)(h.Z)(H()),ey=(0,_.ZP)(h.Z)(I());var em=()=>{let[e,n]=(0,a.useState)([]),[t,r]=(0,a.useState)(null),d=(0,o.Z)(),[u,c]=(0,a.useState)(1),[p,_]=(0,a.useState)(5),v=u*p,b=e.slice(v-p,v),Z=Math.ceil(e.length/p),w=(0,a.useCallback)(e=>{e>=1&&e<=Z&&c(e)},[Z]),S=(0,a.useCallback)(e=>{_(parseInt(e.target.value,10)),c(1)},[]),[C,P]=(0,a.useState)(!0),[E,k]=(0,a.useState)(null),[T,A]=(0,a.useState)(""),R=(e,n)=>{k(e),A(n),setTimeout(()=>{k(null),A("")},3e3)},[O,M]=(0,a.useState)(!1),[N,B]=(0,a.useState)(!1);(0,a.useEffect)(()=>{(async()=>{try{let e=await fetch("http://127.0.0.1:5000/guidelines/",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("HTTP error! Status: ".concat(e.status));let t=await e.json();n(t)}catch(e){console.error("Error fetching guidelines:",e),r(e.message)}finally{P(!1)}})()},[]);let[F,z]=(0,a.useState)(!1),[D,L]=(0,a.useState)(null),q=e=>{L(e),z(!0)},G=async()=>{try{let e=await fetch("http://127.0.0.1:5000/guidelines/".concat(D),{method:"DELETE",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("HTTP error! Status: ".concat(e.status));R("Guideline deleted successfully!","success"),n(e=>e.filter(e=>e[0]!==D))}catch(e){console.error("Error deleting guideline:",e),R("Failed to delete the guideline. Please try again.","error")}finally{z(!1),L(null)}try{let e=await fetch("http://127.0.0.1:5000/guidelines/"),t=await e.json();n(t)}catch(e){console.error("Error refreshing guidelines:",e)}},[U,W]=(0,a.useState)({guideline_name:!1,shift_days:!1,day_type:!1,start:!1,period_type:!1}),Y=async e=>{let t={guideline_name:!e.guideline_name,shift_days:!e.shift_days,day_type:!e.day_type,start:!e.start,period_type:!e.period_type};if(W(t),Object.values(t).some(e=>e)){R("Please fill in all required fields.","error");return}try{let t=await fetch("http://127.0.0.1:5000/guidelines/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({guideline_name:e.guideline_name,shift_days:e.shift_days,day_type:e.day_type,start:e.start,period_type:e.period_type})});if(!t.ok)throw Error("HTTP error! Status: ".concat(t.status));let r=await t.json();R(r.message,"success"),n(n=>[...n,{...e,guideline_id:r.guideline_id}])}catch(e){console.error("Error adding guideline:",e),R("Failed to add the guideline. Please try again.","error")}try{let e=await fetch("http://127.0.0.1:5000/guidelines/"),t=await e.json();n(t)}catch(e){console.error("Error refreshing guidelines:",e),R("Failed to update the guideline. Please try again.","error")}},[H,I]=(0,a.useState)(null),[em,ej]=(0,a.useState)(!1),[e_,ev]=(0,a.useState)({guideline_name:"",day_type:"",shift_days:"",start:"",period_type:""}),eb=e=>{I(e.guideline_id),ev({guideline:e.guideline_name,shift_days:e.shift_days,day_type:e.day_type,start:e.start,period_type:e.period_type})},eZ=(e,n)=>{ev(t=>({...t,[n]:e.target.value}))},ew=async()=>{let t={guideline_id:H,guideline_name:e_.guideline,shift_days:e_.shift_days,day_type:e_.day_type,start:e_.start,period_type:e_.period_type};console.log(t);try{let r=await fetch("http://127.0.0.1:5000/guidelines/".concat(t.guideline_id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!r.ok)throw Error("Failed to update guideline. Status: ".concat(r.status));let i=e.map(e=>e.guideline_id===t.guideline_id?t:e);n(i),R("Guideline updated successfully!","success")}catch(e){console.error("Error updating guideline:",e),R("Failed to update the guideline. Please try again.","error")}finally{I(null)}try{let e=await fetch("http://127.0.0.1:5000/guidelines/"),t=await e.json();n(t)}catch(e){console.error("Error refreshing guidelines:",e),R("Failed to update the guideline. Please try again.","error")}},eS=()=>{I(null),ev({})};return(0,i.jsxs)(i.Fragment,{children:[E&&(0,i.jsx)(ex,{type:T,children:E}),F&&(0,i.jsx)(y.Z,{open:F,onClose:()=>z(!1),onConfirm:G,message:"Are you sure you want to delete this guideline? This action cannot be undone."}),em&&(0,i.jsx)(y.Z,{open:em,onClose:()=>{ej(!1)},onConfirm:()=>{ej(!1),I(null),ev({}),M(!1)},message:"You have unsaved changes. Are you sure you want to leave editing mode?"}),(0,i.jsx)(m.Z,{loading:C}),!C&&(0,i.jsx)(Q,{theme:d,children:(0,i.jsxs)($,{children:[(0,i.jsx)(ee,{theme:d,children:(0,i.jsxs)(en,{children:[(0,i.jsx)(et,{theme:d,children:"Directriz"}),(0,i.jsx)(et,{theme:d,children:"Descripci\xf3n"}),(0,i.jsx)(et,{theme:d,children:"Periodo"})," ",O&&(0,i.jsx)(er,{theme:d,children:"Acciones"})," "]})}),(0,i.jsx)(ei,{children:b.map((e,n)=>(0,i.jsx)(ea,{theme:d,children:H===e.guideline_id?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eo,{children:(0,i.jsx)(X,{value:e_.guideline,onChange:e=>eZ(e,"guideline")})}),(0,i.jsxs)(eo,{children:[(0,i.jsx)(X,{type:"number",value:e_.shift_days,onChange:e=>eZ(e,"shift_days"),placeholder:"Shift Days"}),(0,i.jsxs)(V,{value:e_.day_type,onChange:e=>eZ(e,"day_type"),children:[(0,i.jsx)("option",{value:"NORMALES",children:"Normales"}),(0,i.jsx)("option",{value:"LABORABLES",children:"Laborables"}),(0,i.jsx)("option",{value:"SABADOS",children:"Sabados"})]})]}),(0,i.jsxs)(eo,{children:[(0,i.jsxs)(V,{value:e_.period_type,onChange:e=>eZ(e,"period_type"),children:[(0,i.jsx)("option",{value:"SEMESTER",children:"Semestre"}),(0,i.jsx)("option",{value:"SUMMER",children:"Verano Corto"}),(0,i.jsx)("option",{value:"EXTENDED SUMMER",children:"Verano Extendido"})]}),(0,i.jsx)(X,{type:"text",value:e_.start,onChange:e=>eZ(e,"start"),placeholder:"Start"})]}),(0,i.jsxs)(eo,{children:[(0,i.jsx)(h.Z,{onClick:ew,children:"Save"}),(0,i.jsx)(K,{onClick:eS,children:"Cancel"})]})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(el,{theme:d,children:e.guideline_name}),(0,i.jsx)(es,{theme:d,children:"SABADOS"===e.start?"Cuenta ".concat(e.shift_days," ").concat(e.day_type," desde ").concat(e.start):"Cuenta ".concat(e.shift_days," dias ").concat(e.day_type," desde ").concat(e.start)}),(0,i.jsx)(eo,{children:e.period_type})," ",O&&(0,i.jsxs)(eo,{children:[(0,i.jsx)(eg,{onClick:()=>eb(e),children:"Edit"}),(0,i.jsx)(ey,{onClick:()=>q(e.guideline_id),style:{color:"red"},children:(0,i.jsx)(j.Z,{})})]})]})},n))}),(0,i.jsx)(ed,{theme:d,children:(0,i.jsx)(eu,{children:(0,i.jsx)(ec,{colSpan:O?4:3,theme:d,children:(0,i.jsxs)(ep,{children:[(0,i.jsx)(g.Z,{rowsPerPage:p,onRowsPerPageChange:S}),(0,i.jsx)(eh,{children:(0,i.jsx)(f.Z,{currentPage:u,totalPages:Z,onPageChange:w})})]})})})})]})}),(0,i.jsx)(ef,{theme:d,variant:"contained",style:{color:"white",backgroundColor:O?"red":(d.palette.mode,d.palette.primary.main)},onClick:()=>{null!==H?ej(!0):M(e=>!e)},children:O?(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)(s.Z,{sx:{fontSize:"xxlarge"}})]}):(0,i.jsx)(l.Z,{})}),(0,i.jsx)(J,{theme:d,variant:"contained",style:{color:"white"},onClick:()=>B(!0),children:"+"}),(0,i.jsx)(x,{show:N,onClose:()=>B(!1),onSave:Y})]})},ej=t(2145),e_=t(4606);function ev(){let e=(0,r._)(["\n  font-family: Arial, sans-serif;\n  line-height: 1.6;\n  margin: 0;\n  margin-top: -10px;\n  color: ",";\n"]);return ev=function(){return e},e}function eb(){let e=(0,r._)(["\n  margin-bottom: 15px;\n  margin-top: -10px;\n"]);return eb=function(){return e},e}let eZ=_.ZP.div(ev(),e=>{let{theme:n}=e;return n.palette.mode,n.palette.text.primary}),ew=_.ZP.p(eb());function eS(){let e=(0,o.Z)(),[n,t]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{t(!0)},[]),n)?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(eZ,{theme:e,children:[(0,i.jsxs)(ew,{theme:e,children:["Esta p\xe1gina proporciona una ",(0,i.jsx)("strong",{children:"visi\xf3n general "}),"de las ",(0,i.jsx)("strong",{children:"directrices"})," seguidas en el ",(0,i.jsx)("strong",{children:"proceso de generaci\xf3n del calendario acad\xe9mico"}),". Estas directrices aseguran que el calendario cumpla con los est\xe1ndares institucionales e incluya eventos clave como los per\xedodos de ex\xe1menes y los plazos acad\xe9micos. Ten en cuenta que esta no es una lista exhaustiva, y tambi\xe9n se deben considerar otras directrices internas y aspectos a tener en cuenta."]}),(0,i.jsx)(a.Suspense,{fallback:(0,i.jsx)(e_.Z,{}),children:(0,i.jsx)(ej.Z,{theme:e,children:(0,i.jsx)(em,{})})})]})}):null}},4606:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(7437),i=t(5389);function a(){return(0,r.jsx)(i.default,{})}},3124:function(e,n,t){"use strict";var r=t(7437);t(2265);var i=t(579),a=t(6387),o=t(4013),l=t(1691);n.Z=e=>{let{open:n,onClose:t,onConfirm:s,message:d}=e,u=(0,l.Z)();return(0,r.jsx)(i.Z,{open:n,onClose:t,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.jsxs)("div",{style:{backgroundColor:u.palette.background.paper,color:u.palette.text.primary,padding:"20px",borderRadius:"8px",width:"300px",textAlign:"center",boxShadow:u.shadows[5]},children:[(0,r.jsx)(a.Z,{variant:"h6",gutterBottom:!0,children:d}),(0,r.jsx)(o.Z,{onClick:s,variant:"contained",color:"error",style:{marginRight:"10px"},children:"Confirm"}),(0,r.jsx)(o.Z,{onClick:t,variant:"outlined",style:{color:u.palette.text.primary},children:"Cancel"})]})})}},7699:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(7437);t(2265);var i=t(5389),a=t(2069),o=t(1691);function l(e){let{loading:n}=e,t=(0,o.Z)();return n?(0,r.jsx)(a.Z,{theme:t,sx:{display:"flex",justifyContent:"center",paddingTop:"100px"},children:(0,r.jsx)(i.default,{})}):null}},8e3:function(e,n,t){"use strict";var r=t(5008),i=t(7437);t(2265);var a=t(9379),o=t(1691),l=t(4013),s=t(1064),d=t(3665);function u(){let e=(0,r._)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  min-width: 270px;\n"]);return u=function(){return e},e}function c(){let e=(0,r._)(["\n  margin: 0 5px;\n  border-radius: 25px;\n"]);return c=function(){return e},e}let p=a.ZP.div(u()),h=(0,a.ZP)(l.Z)(c());n.Z=e=>{let{currentPage:n,totalPages:t,onPageChange:r}=e;return(0,o.Z)(),(0,i.jsxs)(p,{children:[(0,i.jsx)(h,{variant:"contained",onClick:()=>r(n-1),disabled:1===n,children:(0,i.jsx)(s.Z,{})}),(0,i.jsxs)("span",{children:["Page ",n," of ",t]}),(0,i.jsx)(h,{variant:"contained",onClick:()=>r(n+1),disabled:n===t,children:(0,i.jsx)(d.Z,{})})]})}},7352:function(e,n,t){"use strict";var r=t(5008),i=t(7437);t(2265);var a=t(8486),o=t(2187);function l(){let e=(0,r._)(["\n  margin-top: 10px;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return l=function(){return e},e}let s=t(9379).ZP.div(l());n.Z=e=>{let{rowsPerPage:n,onRowsPerPageChange:t}=e;return(0,i.jsxs)(s,{children:["Rows per page:",(0,i.jsxs)(a.Z,{value:n,onChange:t,style:{marginLeft:10,maxHeight:30},children:[(0,i.jsx)(o.Z,{value:5,children:"5"}),(0,i.jsx)(o.Z,{value:10,children:"10"}),(0,i.jsx)(o.Z,{value:15,children:"15"}),(0,i.jsx)(o.Z,{value:20,children:"20"})]})]})}}},function(e){e.O(0,[389,662,187,379,302,970,971,117,744],function(){return e(e.s=2156)}),_N_E=e.O()}]);