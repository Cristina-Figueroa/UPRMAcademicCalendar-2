(()=>{var e={};e.id=135,e.ids=[135],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2048:e=>{"use strict";e.exports=require("fs")},6162:e=>{"use strict";e.exports=require("stream")},1568:e=>{"use strict";e.exports=require("zlib")},5457:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>h,pages:()=>c,routeModule:()=>x,tree:()=>d}),r(762),r(8032),r(2699),r(5866),r(2843);var a=r(3191),i=r(8716),o=r(7922),n=r.n(o),s=r(5231),l={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);r.d(t,l);let d=["",{children:["(dashboard)",{children:["holidays",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,762)),"C:\\Users\\crist\\VSCode\\UPRMAcademicCalendar-2\\UPRMAcademicCalendar-2-1\\app\\(dashboard)\\holidays\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,8032)),"C:\\Users\\crist\\VSCode\\UPRMAcademicCalendar-2\\UPRMAcademicCalendar-2-1\\app\\(dashboard)\\layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,2699)),"C:\\Users\\crist\\VSCode\\UPRMAcademicCalendar-2\\UPRMAcademicCalendar-2-1\\app\\(dashboard)\\loading.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,2843)),"C:\\Users\\crist\\VSCode\\UPRMAcademicCalendar-2\\UPRMAcademicCalendar-2-1\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\crist\\VSCode\\UPRMAcademicCalendar-2\\UPRMAcademicCalendar-2-1\\app\\(dashboard)\\holidays\\page.tsx"],h="/(dashboard)/holidays/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new a.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/(dashboard)/holidays/page",pathname:"/holidays",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4122:(e,t,r)=>{Promise.resolve().then(r.bind(r,3765))},4495:(e,t,r)=>{Promise.resolve().then(r.bind(r,653))},1344:(e,t,r)=>{Promise.resolve().then(r.bind(r,8500)),Promise.resolve().then(r.bind(r,3870)),Promise.resolve().then(r.bind(r,1729)),Promise.resolve().then(r.bind(r,2837)),Promise.resolve().then(r.bind(r,7265)),Promise.resolve().then(r.bind(r,4654)),Promise.resolve().then(r.bind(r,8139)),Promise.resolve().then(r.bind(r,7438)),Promise.resolve().then(r.bind(r,7495))},6979:(e,t,r)=>{Promise.resolve().then(r.bind(r,8139))},8823:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},3765:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>G});var a=r(326),i=r(7577),o=r(3743),n=r(1353),s=r(9979),l=r(7840),d=r(6889),c=r(2265),h=r(3551),p=r(5988),x=r(2742),u=r(1969);let m=u.ZP.select`
  border: ${({hasError:e})=>e?"2px solid red":"1px solid #ccc"};
  box-shadow: ${({hasError:e})=>e?"0 0 5px red":"none"};
  padding: 8px;
  border-radius: 4px;
  width: 100%;
  transition: border 0.3s ease, box-shadow 0.3s ease;
`,f=u.ZP.input`
  border: ${({hasError:e})=>e?"2px solid red":"1px solid #ccc"};
  box-shadow: ${({hasError:e})=>e?"0 0 5px red":"none"};
  padding: 8px;
  border-radius: 4px;
  width: 95%;
  transition: border 0.3s ease, box-shadow 0.3s ease;
`,g=(0,u.ZP)(c.Z)`
  position: fixed;
  bottom: 75px;
  right: 23px;
  padding: 10px 15px;
  font-size: 30px;
  border-radius: 50%;
  height: 40px;
  min-width: 40px;
  cursor: 'pointer';
`,y=(0,u.ZP)(c.Z)`
  margin-left: 10px;
  position: fixed;
  bottom: 75px;
  right: 23px;
  font-size: 20px;
  border-radius: 100px;
  height: 40px;
  min-width: 40px;
  background-color: 'red', // Red color for cancel button
`,b=u.ZP.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  margin-top: -30px;
  border-radius: 10px;
`,j=u.ZP.table`
  width: 100%;
  border-collapse: collapse;
  font-family: 'Arial', sans-serif;
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  table-layout: fixed;

`,v=u.ZP.thead`
  background-color: ${({theme:e})=>(e.palette.mode,e.palette.primary.main)};
  color: ${({theme:e})=>(e.palette.mode,e.palette.text.primary)};
`,P=u.ZP.tr`
  text-align: left;
  padding: 12px 18px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`,w=u.ZP.th`
  padding: 20px 18px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;

  /* Set specific widths */
  &:nth-child(1) {
    width: 25%; /* Date column */
    text-align: center;

  }
  &:nth-child(2) {
    width: 55%; /* Description column */
    text-align: center;

  }
  // &:nth-child(3) {
  //   width: 30%; /* Actions column */
  //   text-align: center;
  // }
`,Z=(0,u.ZP)(w)`
  display: flex; /* Enable Flexbox */
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
`,C=u.ZP.tbody``,S=u.ZP.tr`
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
`,_=u.ZP.td`
  padding: 18px 18px;
  font-size: 14px;
  font-weight: normal;
`,k=(0,u.ZP)(_)`
  font-weight: bold;
`,A=(0,u.ZP)(_)`
  max-width: 100px; /* Adjust this value as needed */
  white-space: wrap; /* Prevent wrapping */
  overflow: hidden; /* Truncate overflowing text */
  text-overflow: ellipsis; /* Add ellipsis for long text */
`,E=(0,u.ZP)(_)`
  display: flex; /* Enable Flexbox */
  justify-content: flex-end; 
  text-align: right;
`;(0,u.ZP)(_)`
  display: flex; /* Enable Flexbox */
  justify-content: center; 
  text-align: right;
`;let M=u.ZP.tfoot`
  background-color: ${({theme:e})=>e.palette.background.paper};
  color: ${({theme:e})=>(e.palette.mode,e.palette.text.primary)};
`,R=u.ZP.tr`
  padding: 12px 18px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`,$=u.ZP.th`
  padding: 14px 28px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`,U=u.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;u.ZP.div`
  display: flex;
  // flex-direction: row;
  justify-content: center;
`;let T=u.ZP.div`
  display: flex;
  justify-content: right; 
`,D=u.ZP.div`
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
`,F=(0,u.ZP)(c.Z)`
  position: fixed;
  bottom: 21px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 50%;
  border: none;
  height: 46px;
  min-width: 46px;
  cursor: 'pointer';
`,z=(0,u.ZP)(c.Z)`
  // font-size: 30px;
  border-radius: 100px;
  height: 40px;
  min-width: 40px;
`,q=(0,u.ZP)(c.Z)`
  margin-left: 10px;
  height: 40px;
  min-width: 40px;
  background-color: '#ff6b6b', // Red color for cancel button
`,H=(0,u.ZP)(c.Z)`
  font-size: 30px;
  border-radius: 100px;
  height: 40px;
  min-width: 40px;
`,O=()=>{let[e,t]=(0,i.useState)([]),[r,u]=(0,i.useState)(null),O=(0,o.Z)(),[V,I]=(0,i.useState)(1),[J,L]=(0,i.useState)(5),G=V*J,Y=e.slice(G-J,G),N=Math.ceil(e.length/J),W=(0,i.useCallback)(e=>{e>=1&&e<=N&&I(e)},[N]),B=(0,i.useCallback)(e=>{L(parseInt(e.target.value,10)),I(1)},[]),[X,K]=(0,i.useState)(!0),[Q,ee]=(0,i.useState)(null),[et,er]=(0,i.useState)(""),ea=(e,t)=>{ee(e),er(t),setTimeout(()=>{ee(null),er("")},3e3)},[ei,eo]=(0,i.useState)(!1),[en,es]=(0,i.useState)(!1),[el,ed]=(0,i.useState)(null);(0,i.useEffect)(()=>{(async()=>{try{let e=await fetch("http://127.0.0.1:5000/holidays/",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error(`HTTP error! Status: ${e.status}`);let r=await e.json();t(r)}catch(e){console.error("Error fetching holidays:",e),u(e.message)}finally{K(!1)}})()},[]);let[ec,eh]=(0,i.useState)(!1),[ep,ex]=(0,i.useState)(null),eu=e=>{ex(e),eh(!0)},em=async()=>{try{let e=await fetch(`http://127.0.0.1:5000/holidays/${ep}`,{method:"DELETE",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error(`HTTP error! Status: ${e.status}`);ea("Holiday deleted successfully!","success"),t(e=>e.filter(e=>e[0]!==ep))}catch(e){console.error("Error deleting holiday:",e),ea("Failed to delete the holiday. Please try again.","error")}finally{eh(!1),ex(null)}try{let e=await fetch("http://127.0.0.1:5000/holidays/"),r=await e.json();t(r)}catch(e){console.error("Error refreshing holidays:",e)}},[ef,eg]=(0,i.useState)(!1),[ey,eb]=(0,i.useState)({date:"",description:"",formattedDate:""}),ej=(e,t=new Date().getFullYear())=>new Date(t,e,0).getDate(),[ev,eP]=(0,i.useState)(new Date().getFullYear()),[ew,eZ]=(0,i.useState)(31);(0,i.useEffect)(()=>{ey.month&&ev&&eZ(ej(ey.month,ev))},[ey.month,ev]);let eC=e=>{eb(t=>({...t,month:e,day:""})),eZ(ej(e))},eS=e=>{eb(t=>({...t,day:e}))};(0,i.useEffect)(()=>{if(ey.month&&ey.day){let e=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"][ey.month-1],t=String(ey.month).padStart(2,"0"),r=String(ey.day).padStart(2,"0");eb(a=>({...a,holiday_date:`${e} ${ey.day}`,formattedDate:`${t}-${r}`}))}},[ey.month,ey.day]);let[e_,ek]=(0,i.useState)({month:!1,day:!1,description:!1}),eA=async()=>{let e={month:!ey.month,day:!ey.day,description:!ey.description};if(ey.month&&ey.day){let t=ej(ey.month);ey.day>t&&(e.day=!0)}if(ek(e),Object.values(e).some(e=>e)){ea("Please fill in all required fields.","error");return}try{let e=await fetch("http://127.0.0.1:5000/holidays/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({holiday_date:ey.holiday_date,holiday_name:ey.description,formatted_date:ey.formattedDate})});if(console.log("Sending holiday:",{holiday_date:ey.holiday_date,holiday_name:ey.description,formatted_date:ey.formattedDate}),!e.ok)throw Error(`HTTP error! Status: ${e.status}`);let r=await e.json();t(e=>[...e,r]),eb({month:"",day:"",description:""}),ek({month:!1,day:!1,description:!1}),eg(!1),ea("Holiday added successfully!","success")}catch(e){console.error("Error saving holiday:",e),ea("Failed to save the holiday. Please try again.","error")}try{let e=await fetch("http://127.0.0.1:5000/holidays/"),r=await e.json();t(r)}catch(e){console.error("Error refreshing holidays:",e)}},eE=()=>{eg(!1),ek(!1)},eM=(e,t)=>{eb(r=>({...r,[e]:t}))},[eR,e$]=(0,i.useState)(null),eU=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],eT=(e,t)=>{ed(t),e.holiday_id||console.error("holiday_id is undefined or missing in the holiday object!"),e$({holiday_id:e.holiday_id,holiday_date:e.holiday_date,holiday_name:e.holiday_name,month:eU.findIndex(t=>t===e.holiday_date.split(" ")[0])+1,day:parseInt(e.holiday_date.split(" ")[1])})},eD=e=>{e$(t=>({...t,month:e,day:t.day>ej(e,ev)?1:t.day}))},eF=e=>{e$(t=>({...t,day:e}))};(0,i.useEffect)(()=>{eR?.month&&ev&&eZ(ej(eR.month,ev))},[eR?.month,ev]);let ez=async e=>{try{let r=await fetch(`http://127.0.0.1:5000/holidays/${e.holiday_id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({holiday_date:`${eU[e.month-1]} ${e.day}`,holiday_name:e.holiday_name,formatted_date:`${String(e.month).padStart(2,"0")}-${String(e.day).padStart(2,"0")}`})});if(!r.ok)throw Error(`HTTP error! Status: ${r.status}`);ea("Holiday updated successfully!","success"),await r.json(),t(t=>t.map(t=>t.holiday_id===e.holiday_id?e:t)),e$(null)}catch(e){console.error("Error saving holiday:",e)}try{let e=await fetch("http://127.0.0.1:5000/holidays/"),r=await e.json();t(r)}catch(e){console.error("Error refreshing holidays:",e),ea("Failed to update the holiday. Please try again.","error")}},eq=()=>{e$(null),ed(null)};return(0,a.jsxs)(a.Fragment,{children:[Q&&a.jsx(D,{type:et,children:Q}),ec&&a.jsx(p.Z,{open:ec,onClose:()=>eh(!1),onConfirm:em,message:"Are you sure you want to delete this holiday? This action cannot be undone."}),en&&a.jsx(p.Z,{open:en,onClose:()=>{es(!1)},onConfirm:()=>{es(!1),ed(null),e$({}),eo(!1)},message:"You have unsaved changes. Are you sure you want to leave editing mode?"}),a.jsx(x.Z,{loading:X}),!X&&a.jsx(b,{theme:O,children:(0,a.jsxs)(j,{children:[a.jsx(v,{theme:O,children:(0,a.jsxs)(P,{children:[a.jsx(w,{theme:O,children:"Fechas"}),a.jsx(w,{theme:O,children:"Descripci\xf3n"}),ei&&a.jsx(Z,{theme:O,children:"Acciones"})," "]})}),(0,a.jsxs)(C,{children:[ef&&(0,a.jsxs)(S,{theme:O,children:[(0,a.jsxs)(_,{theme:O,children:[(0,a.jsxs)(m,{hasError:e_.month,value:ey.month||"",onChange:e=>eC(e.target.value),children:[a.jsx("option",{value:"",disabled:!0,children:"Select Month"}),["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"].map((e,t)=>a.jsx("option",{value:t+1,children:e},t))]}),(0,a.jsxs)(m,{hasError:e_.day,value:ey.day||"",onChange:e=>eS(e.target.value),children:[a.jsx("option",{value:"",disabled:!0,children:"Select Day"}),Array.from({length:ew},(e,t)=>t+1).map(e=>a.jsx("option",{value:e,children:e},e))]})]}),(0,a.jsxs)(_,{children:[a.jsx(f,{hasError:e_.description,value:ey.description,onChange:e=>eM("description",e.target.value),placeholder:"Description"}),!ei&&(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-end"},children:[a.jsx(c.Z,{onClick:eA,children:"Save"}),a.jsx(q,{onClick:eE,sx:{color:"red",fontWeight:"bold"},children:"Cancel"})]})]}),ei&&a.jsx(_,{theme:O,children:(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginLeft:"-30px"},children:[a.jsx(c.Z,{onClick:eA,children:"Save"}),a.jsx(q,{onClick:eE,sx:{color:"red",fontWeight:"bold"},children:"Cancel"})]})})]}),Y.map((e,t)=>a.jsx(S,{theme:O,children:eR&&eR.holiday_id===e.holiday_id?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(_,{children:[(0,a.jsxs)(m,{value:eR?.month||"",onChange:e=>eD(e.target.value),children:[a.jsx("option",{value:"",disabled:!0,children:"Select Month"}),eU.map((e,t)=>a.jsx("option",{value:t+1,children:e},t))]}),(0,a.jsxs)(m,{value:eR?.day||"",onChange:e=>eF(e.target.value),children:[a.jsx("option",{value:"",disabled:!0,children:"Select Day"}),Array.from({length:ew},(e,t)=>t+1).map(e=>a.jsx("option",{value:e,children:e},e))]})]}),a.jsx(_,{children:a.jsx(f,{value:eR?.holiday_name||"",onChange:e=>e$(t=>({...t,holiday_name:e.target.value}))})}),(0,a.jsxs)(E,{children:[a.jsx(c.Z,{onClick:()=>ez(eR),children:"Save"}),a.jsx(c.Z,{onClick:eq,children:"Cancel"})]})]}):(0,a.jsxs)(a.Fragment,{children:[a.jsx(k,{children:e.holiday_date}),a.jsx(A,{children:e.holiday_name}),ei&&(0,a.jsxs)(E,{children:[a.jsx(z,{onClick:()=>eT(e,t),children:"Edit"}),a.jsx(H,{onClick:()=>eu(e.holiday_id),style:{color:"red"},children:a.jsx(d.Z,{})})]})]})},e.holiday_id))]}),a.jsx(M,{theme:O,children:a.jsx(R,{children:a.jsx($,{colSpan:ei?3:2,theme:O,children:(0,a.jsxs)(U,{children:[a.jsx(s.Z,{rowsPerPage:J,onRowsPerPageChange:B}),a.jsx(T,{children:a.jsx(n.Z,{currentPage:V,totalPages:N,onPageChange:W})})]})})})})]})}),a.jsx(F,{theme:O,variant:"contained",style:{color:"white",backgroundColor:ei?"red":(O.palette.mode,O.palette.primary.main)},onClick:()=>{null!==el?es(!0):eo(e=>!e)},children:ei?(0,a.jsxs)(a.Fragment,{children:[" ",a.jsx(h.Z,{sx:{fontSize:"xxlarge"}})]}):a.jsx(l.Z,{})}),ef?a.jsx(y,{onClick:()=>{eb({month:"",day:"",description:""}),ek({month:!1,day:!1,description:!1}),eg(!1)},variant:"contained",sx:{backgroundColor:"red",color:"white"},children:"✕"}):a.jsx(g,{theme:O,onClick:()=>{eg(!0)},variant:"contained",style:{color:"white",backgroundColor:ef?"red":(O.palette.mode,O.palette.primary.main)},children:"+"})]})};var V=r(7180),I=r(6766);let J=u.ZP.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  // margin: 0;
  margin-top: -10px;
  color: ${({theme:e})=>(e.palette.mode,e.palette.text.primary)};
`,L=u.ZP.p`
  margin-bottom: 15px;
  margin-top: -10px;
`;function G(){let e=(0,o.Z)(),[t,r]=(0,i.useState)(!1);return t?a.jsx(a.Fragment,{children:(0,a.jsxs)(J,{theme:e,children:[(0,a.jsxs)(L,{theme:e,children:["Esta p\xe1gina proporciona una ",a.jsx("strong",{children:"visi\xf3n general"})," de los ",a.jsx("strong",{children:"d\xedas festivos"})," incluidos en el ",a.jsx("strong",{children:"proceso de generaci\xf3n del calendario acad\xe9mico"}),". Aunque los d\xedas festivos siguen las directrices acad\xe9micas est\xe1ndar de Puerto Rico, pueden ajustarse para cumplir con los requisitos \xfanicos de tu instituci\xf3n."]}),a.jsx(i.Suspense,{fallback:a.jsx(I.Z,{}),children:a.jsx(V.Z,{theme:e,children:a.jsx(O,{})})})]})}):null}},653:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var a=r(326),i=r(7577),o=r(889),n=r(7650),s=r(6766);function l(e){return a.jsx(o.c,{children:a.jsx(n._,{children:a.jsx(i.Suspense,{fallback:a.jsx(s.Z,{}),children:e.children})})})}},6766:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var a=r(326),i=r(8139);function o(){return a.jsx(i.default,{})}},5988:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var a=r(326);r(7577);var i=r(424),o=r(5609),n=r(2265),s=r(3743);let l=({open:e,onClose:t,onConfirm:r,message:l})=>{let d=(0,s.Z)();return a.jsx(i.Z,{open:e,onClose:t,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,a.jsxs)("div",{style:{backgroundColor:d.palette.background.paper,color:d.palette.text.primary,padding:"20px",borderRadius:"8px",width:"300px",textAlign:"center",boxShadow:d.shadows[5]},children:[a.jsx(o.Z,{variant:"h6",gutterBottom:!0,children:l}),a.jsx(n.Z,{onClick:r,variant:"contained",color:"error",style:{marginRight:"10px"},children:"Confirm"}),a.jsx(n.Z,{onClick:t,variant:"outlined",style:{color:d.palette.text.primary},children:"Cancel"})]})})}},2742:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(326);r(7577);var i=r(8139),o=r(6579),n=r(3743);function s({loading:e}){let t=(0,n.Z)();return e?a.jsx(o.Z,{theme:t,sx:{display:"flex",justifyContent:"center",paddingTop:"100px"},children:a.jsx(i.default,{})}):null}},1353:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var a=r(326);r(7577);var i=r(1969),o=r(3743),n=r(2265),s=r(1426);let l=(0,s.Z)((0,a.jsx)("path",{d:"M16.88 2.88c-.49-.49-1.28-.49-1.77 0L6.7 11.29c-.39.39-.39 1.02 0 1.41l8.41 8.41c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.54 12l7.35-7.35c.48-.49.48-1.28-.01-1.77"}),"ArrowBackIosNewRounded"),d=(0,s.Z)((0,a.jsx)("path",{d:"M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76"}),"ArrowForwardIosRounded"),c=i.ZP.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 270px;
`,h=(0,i.ZP)(n.Z)`
  margin: 0 5px;
  border-radius: 25px;
`,p=({currentPage:e,totalPages:t,onPageChange:r})=>((0,o.Z)(),(0,a.jsxs)(c,{children:[a.jsx(h,{variant:"contained",onClick:()=>r(e-1),disabled:1===e,children:a.jsx(l,{})}),(0,a.jsxs)("span",{children:["Page ",e," of ",t]}),a.jsx(h,{variant:"contained",onClick:()=>r(e+1),disabled:e===t,children:a.jsx(d,{})})]}))},9979:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var a=r(326);r(7577);var i=r(3165),o=r(7841),n=r(1969);let s=n.ZP.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,l=({rowsPerPage:e,onRowsPerPageChange:t})=>(0,a.jsxs)(s,{children:["Rows per page:",(0,a.jsxs)(i.Z,{value:e,onChange:t,style:{marginLeft:10,maxHeight:30},children:[a.jsx(o.Z,{value:5,children:"5"}),a.jsx(o.Z,{value:10,children:"10"}),a.jsx(o.Z,{value:15,children:"15"}),a.jsx(o.Z,{value:20,children:"20"})]})]})},7495:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});let a=(0,r(984).Z)({palette:{mode:"light",primary:{main:"#008000"}},cssVariables:{colorSchemeSelector:"data-toolpad-color-scheme"},colorSchemes:{light:{palette:{background:{default:"#f9f9f9",paper:"#ffffff",rowAlt:"#f4f4f4"},text:{primary:"#333333"},action:{hover:"#e0f5e0"}}},dark:{palette:{background:{default:"#121212",paper:"#1e1e1e",rowAlt:"#252525"},text:{primary:"#e0e0e0"},action:{hover:"#333333"},primary:{main:"#4caf50"}}}}})},762:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});let a=(0,r(8570).createProxy)(String.raw`C:\Users\crist\VSCode\UPRMAcademicCalendar-2\UPRMAcademicCalendar-2-1\app\(dashboard)\holidays\page.tsx#default`)},8032:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});let a=(0,r(8570).createProxy)(String.raw`C:\Users\crist\VSCode\UPRMAcademicCalendar-2\UPRMAcademicCalendar-2-1\app\(dashboard)\layout.tsx#default`)},2699:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var a=r(9510),i=r(7383);function o(){return a.jsx(i.Z,{})}},2843:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var a=r(9510),i=r(1159),o=r(2906),n=r(5451),s=r(80),l=r(8127),d=r(7574),c=r(994),h=r(3720),p=r(2699);let x=(0,r(8570).createProxy)(String.raw`C:\Users\crist\VSCode\UPRMAcademicCalendar-2\UPRMAcademicCalendar-2-1\theme.ts#default`),u=[{segment:"",title:"Dashboard",icon:a.jsx(s.Z,{})},{segment:"about",title:"About",icon:a.jsx(d.Z,{})},{segment:"holidays",title:"Holidays",icon:a.jsx(c.Z,{})},{segment:"guidelines",title:"Guidelines",icon:a.jsx(h.Z,{})}],m={title:"UPRM Calendar Generation Tool",logo:a.jsx(l.Z,{sx:{marginTop:.8,marginRight:.2,color:"#008000"}})};function f(e){return a.jsx("html",{lang:"en","data-toolpad-color-scheme":"light",suppressHydrationWarning:!0,children:a.jsx("body",{children:a.jsx(i.Suspense,{fallback:a.jsx(p.default,{}),children:a.jsx(n.Z,{options:{enableCssLayer:!0},children:a.jsx(o.w,{navigation:u,branding:m,theme:x,children:e.children})})})})})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[561,104,1],()=>r(5457));module.exports=a})();