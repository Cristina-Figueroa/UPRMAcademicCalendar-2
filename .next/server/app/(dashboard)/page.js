(()=>{var e={};e.id=130,e.ids=[130],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2048:e=>{"use strict";e.exports=require("fs")},6162:e=>{"use strict";e.exports=require("stream")},1568:e=>{"use strict";e.exports=require("zlib")},904:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,originalPathname:()=>h,pages:()=>c,routeModule:()=>f,tree:()=>l}),r(3101),r(8032),r(2699),r(5866),r(2843);var i=r(3191),n=r(8716),s=r(7922),a=r.n(s),o=r(5231),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);r.d(t,d);let l=["",{children:["(dashboard)",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3101)),"C:\\Users\\crist\\VSCode\\UPRMAcademicCalendar-2\\UPRMAcademicCalendar-2-1\\app\\(dashboard)\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,8032)),"C:\\Users\\crist\\VSCode\\UPRMAcademicCalendar-2\\UPRMAcademicCalendar-2-1\\app\\(dashboard)\\layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,2699)),"C:\\Users\\crist\\VSCode\\UPRMAcademicCalendar-2\\UPRMAcademicCalendar-2-1\\app\\(dashboard)\\loading.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,2843)),"C:\\Users\\crist\\VSCode\\UPRMAcademicCalendar-2\\UPRMAcademicCalendar-2-1\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\crist\\VSCode\\UPRMAcademicCalendar-2\\UPRMAcademicCalendar-2-1\\app\\(dashboard)\\page.tsx"],h="/(dashboard)/page",u={require:r,loadChunk:()=>Promise.resolve()},f=new i.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/(dashboard)/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},2876:(e,t,r)=>{Promise.resolve().then(r.bind(r,1406))},1406:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>eD});var i=r(326),n=r(7577),s=r(1969),a=r(3743),o=r(7180),d=r(2265),l=r(6579),c=r(7841),h=r(3913),u=r(3165);let f=s.ZP.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  // margin: 0;
  margin-top: -10px;
`,m=s.ZP.label`
  margin-bottom: 15px;
`,p=({academicPeriod:e,setAcademicPeriod:t})=>((0,a.Z)(),(0,i.jsxs)(f,{children:[i.jsx(m,{children:"Select an Academic Period"}),i.jsx(l.Z,{className:"select",children:i.jsx(h.Z,{fullWidth:!0,sx:{minWidth:180},children:(0,i.jsxs)(u.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:e,onChange:e=>t(e.target.value),sx:{maxWidth:400},children:[i.jsx(c.Z,{value:"fall",children:"Fall Semester"}),i.jsx(c.Z,{value:"spring",children:"Spring Semester"}),i.jsx(c.Z,{value:"summerV1",children:"Summer V1 Session"}),i.jsx(c.Z,{value:"summerV2",children:"Summer V2 Session"}),i.jsx(c.Z,{value:"summerExtended",children:"Summer Extended Session"})]})})})]}));var x=r(5353),g=r(8295),y=r.n(g),M=r(2487),v=r.n(M),b=r(4012),w=r.n(b),j=r(3616),D=r.n(j),T=r(7824),$=r.n(T),S=r(9818),k=r.n(S);y().extend(D()),y().extend(v()),y().extend($()),y().extend(k());let Y={YY:"year",YYYY:{sectionType:"year",contentType:"digit",maxLength:4},M:{sectionType:"month",contentType:"digit",maxLength:2},MM:"month",MMM:{sectionType:"month",contentType:"letter"},MMMM:{sectionType:"month",contentType:"letter"},D:{sectionType:"day",contentType:"digit",maxLength:2},DD:"day",Do:{sectionType:"day",contentType:"digit-with-letter"},d:{sectionType:"weekDay",contentType:"digit",maxLength:2},dd:{sectionType:"weekDay",contentType:"letter"},ddd:{sectionType:"weekDay",contentType:"letter"},dddd:{sectionType:"weekDay",contentType:"letter"},A:"meridiem",a:"meridiem",H:{sectionType:"hours",contentType:"digit",maxLength:2},HH:"hours",h:{sectionType:"hours",contentType:"digit",maxLength:2},hh:"hours",m:{sectionType:"minutes",contentType:"digit",maxLength:2},mm:"minutes",s:{sectionType:"seconds",contentType:"digit",maxLength:2},ss:"seconds"},P={year:"YYYY",month:"MMMM",monthShort:"MMM",dayOfMonth:"D",dayOfMonthFull:"Do",weekday:"dddd",weekdayShort:"dd",hours24h:"HH",hours12h:"hh",meridiem:"A",minutes:"mm",seconds:"ss",fullDate:"ll",keyboardDate:"L",shortDate:"MMM D",normalDate:"D MMMM",normalDateWithWeekday:"ddd, MMM D",fullTime:"LT",fullTime12h:"hh:mm A",fullTime24h:"HH:mm",keyboardDateTime:"L LT",keyboardDateTime12h:"L hh:mm A",keyboardDateTime24h:"L HH:mm"},C="Missing UTC plugin\nTo be able to use UTC or timezones, you have to enable the `utc` plugin\nFind more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc",Z="Missing timezone plugin\nTo be able to use timezones, you have to enable both the `utc` and the `timezone` plugin\nFind more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone",O=(e,t)=>t?(...r)=>e(...r).locale(t):e;class z{constructor({locale:e,formats:t}={}){this.isMUIAdapter=!0,this.isTimezoneCompatible=!0,this.lib="dayjs",this.dayjs=void 0,this.locale=void 0,this.formats=void 0,this.escapedCharacters={start:"[",end:"]"},this.formatTokenMap=Y,this.setLocaleToValue=e=>{let t=this.getCurrentLocaleCode();return t===e.locale()?e:e.locale(t)},this.hasUTCPlugin=()=>void 0!==y().utc,this.hasTimezonePlugin=()=>void 0!==y().tz,this.isSame=(e,t,r)=>{let i=this.setTimezone(t,this.getTimezone(e));return e.format(r)===i.format(r)},this.cleanTimezone=e=>{switch(e){case"default":return;case"system":return y().tz.guess();default:return e}},this.createSystemDate=e=>{if(this.hasUTCPlugin()&&this.hasTimezonePlugin()){let t=y().tz.guess();if("UTC"!==t)return y().tz(e,t)}return y()(e)},this.createUTCDate=e=>{if(!this.hasUTCPlugin())throw Error(C);return y().utc(e)},this.createTZDate=(e,t)=>{if(!this.hasUTCPlugin())throw Error(C);if(!this.hasTimezonePlugin())throw Error(Z);let r=void 0!==e&&!e.endsWith("Z");return y()(e).tz(this.cleanTimezone(t),r)},this.getLocaleFormats=()=>{let e=y().Ls,t=e[this.locale||"en"];return void 0===t&&(t=e.en),t.formats},this.adjustOffset=e=>{if(!this.hasTimezonePlugin())return e;let t=this.getTimezone(e);if("UTC"!==t){let r=e.tz(this.cleanTimezone(t),!0);if(r.$offset===(e.$offset??0))return e;e.$offset=r.$offset}return e},this.date=(e,t="default")=>{let r;return null===e?null:(r="UTC"===t?this.createUTCDate(e):"system"!==t&&("default"!==t||this.hasTimezonePlugin())?this.createTZDate(e,t):this.createSystemDate(e),void 0===this.locale)?r:r.locale(this.locale)},this.getInvalidDate=()=>y()(new Date("Invalid date")),this.getTimezone=e=>{if(this.hasTimezonePlugin()){let t=e.$x?.$timezone;if(t)return t}return this.hasUTCPlugin()&&e.isUTC()?"UTC":"system"},this.setTimezone=(e,t)=>{if(this.getTimezone(e)===t)return e;if("UTC"===t){if(!this.hasUTCPlugin())throw Error(C);return e.utc()}if("system"===t)return e.local();if(!this.hasTimezonePlugin()){if("default"===t)return e;throw Error(Z)}return y().tz(e,this.cleanTimezone(t))},this.toJsDate=e=>e.toDate(),this.parse=(e,t)=>""===e?null:this.dayjs(e,t,this.locale,!0),this.getCurrentLocaleCode=()=>this.locale||"en",this.is12HourCycleInCurrentLocale=()=>/A|a/.test(this.getLocaleFormats().LT||""),this.expandFormat=e=>{let t=this.getLocaleFormats(),r=e=>e.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(e,t,r)=>t||r.slice(1));return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(e,i,n)=>{let s=n&&n.toUpperCase();return i||t[n]||r(t[s])})},this.isValid=e=>null!=e&&e.isValid(),this.format=(e,t)=>this.formatByString(e,this.formats[t]),this.formatByString=(e,t)=>this.dayjs(e).format(t),this.formatNumber=e=>e,this.isEqual=(e,t)=>null===e&&null===t||null!==e&&null!==t&&e.toDate().getTime()===t.toDate().getTime(),this.isSameYear=(e,t)=>this.isSame(e,t,"YYYY"),this.isSameMonth=(e,t)=>this.isSame(e,t,"YYYY-MM"),this.isSameDay=(e,t)=>this.isSame(e,t,"YYYY-MM-DD"),this.isSameHour=(e,t)=>e.isSame(t,"hour"),this.isAfter=(e,t)=>e>t,this.isAfterYear=(e,t)=>this.hasUTCPlugin()?!this.isSameYear(e,t)&&e.utc()>t.utc():e.isAfter(t,"year"),this.isAfterDay=(e,t)=>this.hasUTCPlugin()?!this.isSameDay(e,t)&&e.utc()>t.utc():e.isAfter(t,"day"),this.isBefore=(e,t)=>e<t,this.isBeforeYear=(e,t)=>this.hasUTCPlugin()?!this.isSameYear(e,t)&&e.utc()<t.utc():e.isBefore(t,"year"),this.isBeforeDay=(e,t)=>this.hasUTCPlugin()?!this.isSameDay(e,t)&&e.utc()<t.utc():e.isBefore(t,"day"),this.isWithinRange=(e,[t,r])=>e>=t&&e<=r,this.startOfYear=e=>this.adjustOffset(e.startOf("year")),this.startOfMonth=e=>this.adjustOffset(e.startOf("month")),this.startOfWeek=e=>this.adjustOffset(this.setLocaleToValue(e).startOf("week")),this.startOfDay=e=>this.adjustOffset(e.startOf("day")),this.endOfYear=e=>this.adjustOffset(e.endOf("year")),this.endOfMonth=e=>this.adjustOffset(e.endOf("month")),this.endOfWeek=e=>this.adjustOffset(this.setLocaleToValue(e).endOf("week")),this.endOfDay=e=>this.adjustOffset(e.endOf("day")),this.addYears=(e,t)=>this.adjustOffset(t<0?e.subtract(Math.abs(t),"year"):e.add(t,"year")),this.addMonths=(e,t)=>this.adjustOffset(t<0?e.subtract(Math.abs(t),"month"):e.add(t,"month")),this.addWeeks=(e,t)=>this.adjustOffset(t<0?e.subtract(Math.abs(t),"week"):e.add(t,"week")),this.addDays=(e,t)=>this.adjustOffset(t<0?e.subtract(Math.abs(t),"day"):e.add(t,"day")),this.addHours=(e,t)=>this.adjustOffset(t<0?e.subtract(Math.abs(t),"hour"):e.add(t,"hour")),this.addMinutes=(e,t)=>this.adjustOffset(t<0?e.subtract(Math.abs(t),"minute"):e.add(t,"minute")),this.addSeconds=(e,t)=>this.adjustOffset(t<0?e.subtract(Math.abs(t),"second"):e.add(t,"second")),this.getYear=e=>e.year(),this.getMonth=e=>e.month(),this.getDate=e=>e.date(),this.getHours=e=>e.hour(),this.getMinutes=e=>e.minute(),this.getSeconds=e=>e.second(),this.getMilliseconds=e=>e.millisecond(),this.setYear=(e,t)=>this.adjustOffset(e.set("year",t)),this.setMonth=(e,t)=>this.adjustOffset(e.set("month",t)),this.setDate=(e,t)=>this.adjustOffset(e.set("date",t)),this.setHours=(e,t)=>this.adjustOffset(e.set("hour",t)),this.setMinutes=(e,t)=>this.adjustOffset(e.set("minute",t)),this.setSeconds=(e,t)=>this.adjustOffset(e.set("second",t)),this.setMilliseconds=(e,t)=>this.adjustOffset(e.set("millisecond",t)),this.getDaysInMonth=e=>e.daysInMonth(),this.getWeekArray=e=>{let t=this.startOfWeek(this.startOfMonth(e)),r=this.endOfWeek(this.endOfMonth(e)),i=0,n=t,s=[];for(;n<r;){let e=Math.floor(i/7);s[e]=s[e]||[],s[e].push(n),n=this.addDays(n,1),i+=1}return s},this.getWeekNumber=e=>e.week(),this.getYearRange=([e,t])=>{let r=this.startOfYear(e),i=this.endOfYear(t),n=[],s=r;for(;this.isBefore(s,i);)n.push(s),s=this.addYears(s,1);return n},this.dayjs=O(y(),e),this.locale=e,this.formats=(0,x.Z)({},P,t),y().extend(w())}getDayOfWeek(e){return e.day()+1}}var L=r(1367),A=r(6333),U=r(1222),H=r(4750);let _=["localeText"],W=n.createContext(null),E=function(e){let{localeText:t}=e,r=(0,L.Z)(e,_),{utils:s,localeText:a}=n.useContext(W)??{utils:void 0,localeText:void 0},{children:o,dateAdapter:d,dateFormats:l,dateLibInstance:c,adapterLocale:h,localeText:u}=function({props:e,name:t}){return(0,A.Z)({props:e,name:t,defaultTheme:U.Z,themeId:H.Z})}({props:r,name:"MuiLocalizationProvider"}),f=n.useMemo(()=>(0,x.Z)({},u,a,t),[u,a,t]),m=n.useMemo(()=>{if(!d)return s||null;let e=new d({locale:h,formats:l,instance:c});if(!e.isMUIAdapter)throw Error(["MUI X: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`","For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`","More information on the installation documentation: https://mui.com/x/react-date-pickers/getting-started/#installation"].join(`
`));return e},[d,h,l,c,s]),p=n.useMemo(()=>m?{minDate:m.date("1900-01-01T00:00:00.000"),maxDate:m.date("2099-12-31T00:00:00.000")}:null,[m]),g=n.useMemo(()=>({utils:m,defaultDates:p,localeText:f}),[p,m,f]);return(0,i.jsx)(W.Provider,{value:g,children:o})},R=s.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  margin-left: 10px;

  // width: 50%; /* Half the width of the page */
  // max-width: 600px; /* Optional: Restrict the max width */
  // margin: 0 auto; /* Horizontally center */
  box-sizing: border-box;
  align-items: space-between; /* Centers the content horizontally */
  justify-content: center; /* Centers the content vertically */
  border-radius: 8px;
  // box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;s.ZP.label`
  margin-bottom: 15px;
`;let F=s.ZP.input`
  padding: 8px 12px;
  font-size: 1rem; /* Relative to container size */
  border: 1px solid ${({theme:e})=>e.palette.divider};
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.palette.primary.main};
    box-shadow: 0 0 4px ${({theme:e})=>e.palette.primary.light};
  }
`,V=({startDate:e,setStartDate:t})=>{let r=(0,a.Z)(),[s,o]=(0,n.useState)(e||"");return i.jsx(R,{theme:r,children:i.jsx(E,{dateAdapter:z,children:i.jsx("div",{children:i.jsx(F,{theme:r,type:"date",value:s,onChange:e=>{let r=e.target.value;o(r),t(r),console.log(r)}})})})})},I=s.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  box-sizing: border-box;
  align-items: space-between; /* Centers the content horizontally */
  justify-content: center; /* Centers the content vertically */
`,B=({handleClick:e})=>{let t=(0,a.Z)();return i.jsx(I,{theme:t,children:i.jsx(d.Z,{className:"submit",onClick:e,variant:"contained",sx:{borderRadius:2,color:"white"},children:"SUBMIT"})})};var G=r(2742),N=r(3551),q=r(5988),J=r(6889),X=r(7840);let Q=(0,r(1426).Z)((0,i.jsx)("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download");s.ZP.select`
  border: ${({hasError:e})=>e?"2px solid red":"1px solid #ccc"};
  box-shadow: ${({hasError:e})=>e?"0 0 5px red":"none"};
  padding: 8px;
  border-radius: 4px;
  width: 100%;
  transition: border 0.3s ease, box-shadow 0.3s ease;
`,s.ZP.input`
  border: ${({hasError:e})=>e?"2px solid red":"1px solid #ccc"};
  box-shadow: ${({hasError:e})=>e?"0 0 5px red":"none"};
  padding: 8px;
  border-radius: 4px;
  width: 100%;
  transition: border 0.3s ease, box-shadow 0.3s ease;
`;let K=(0,s.ZP)(d.Z)`
  position: fixed;
  bottom: 75px;
  right: 23px;
  padding: 10px 15px;
  font-size: 30px;
  border-radius: 50%;
  height: 40px;
  min-width: 40px;
  cursor: 'pointer';
`,ee=(0,s.ZP)(d.Z)`
  margin-left: 10px;
  height: 40px;
  min-width: 40px;
  background-color: '#ff6b6b', // Red color for cancel button
`,et=s.ZP.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  margin-top: -30px;
  border-radius: 10px;
`,er=s.ZP.table`
  width: 100%;
  border-collapse: collapse;
  font-family: 'Arial', sans-serif;
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  table-layout: fixed;
`,ei=s.ZP.thead`
  background-color: ${({theme:e})=>(e.palette.mode,e.palette.primary.main)};
  color: ${({theme:e})=>(e.palette.mode,e.palette.text.primary)};
`,en=s.ZP.tr`
  text-align: left;
  padding: 12px 18px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`,es=s.ZP.th`
  padding: 20px 18px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;

  /* Set specific widths */
  &:nth-child(1) {
    width: 30%; /* Name column */
    // text-align: center;

  }
  &:nth-child(2) {
    width: 45%; /* Description column */
    // text-align: center;
  }
  &:nth-child(3) {
    // width: 25%; /* Actions column */
    text-align: right;
  }

`;(0,s.ZP)(es)`
  display: flex; /* Enable Flexbox */
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
`;let ea=s.ZP.tbody``,eo=s.ZP.tr`
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
`,ed=s.ZP.td`
  padding: 18px 18px;
  font-size: 14px;
  font-weight: normal;
`,el=(0,s.ZP)(ed)`
  font-weight: bold;
`,ec=(0,s.ZP)(ed)`
  max-width: 100px; /* Adjust this value as needed */
  white-space: wrap; /* Prevent wrapping */
  overflow: hidden; /* Truncate overflowing text */
  text-overflow: ellipsis; /* Add ellipsis for long text */
  // background-color:pink;
  // text-align: center;
`,eh=(0,s.ZP)(ed)`
  display: flex; /* Enable Flexbox */
  justify-content: flex-end; 
  text-align: right;
`;(0,s.ZP)(ed)`
  display: flex; /* Enable Flexbox */
  justify-content: center; 
  text-align: right;
`,s.ZP.tfoot`
  background-color: ${({theme:e})=>e.palette.background.paper};
  color: ${({theme:e})=>(e.palette.mode,e.palette.text.primary)};
`,s.ZP.tr`
  padding: 12px 18px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`,s.ZP.th`
  padding: 14px 28px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`,s.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,s.ZP.div`
  display: flex;
  // flex-direction: row;
  justify-content: center;
`,s.ZP.div`
  display: flex;
  justify-content: right; 
`;let eu=s.ZP.div`
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
`,ef=(0,s.ZP)(d.Z)`
  position: fixed;
  bottom: 21px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 50%;
  border: none;
  height: 46px;
  min-width: 46px;
  cursor: 'pointer';
`,em=(0,s.ZP)(d.Z)`
  // font-size: 30px;
  border-radius: 100px;
  height: 40px;
  min-width: 40px;
`,ep=(0,s.ZP)(d.Z)`
  // font-size: 30px;
  border-radius: 100px;
  height: 40px;
  min-width: 40px;
`,ex=(0,s.ZP)(d.Z)`
  position: fixed;
  bottom: 124px;
  right: 23px;
  padding: 10px 12px;
  border-radius: 50%;
  height: 42px;
  min-width: 40px;
  cursor: 'pointer';
`;s.ZP.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 20px;
  margin-top: -40px;
  color: ${({theme:e})=>(e.palette.mode,e.palette.text.primary)};
`,s.ZP.h1`
  // color: #2c3e50;
  color: ${({theme:e})=>(e.palette.mode,e.palette.text.primary)};
  // text-align: center;
  margin-bottom: 20px;
  margin-top: 10px;
`;let eg=s.ZP.h2`
  // color: #34495e;
  color: ${({theme:e})=>(e.palette.mode,e.palette.text.primary)};
  margin-top: 20px;
`;s.ZP.p`
  margin-bottom: 15px;
`;let ey=s.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers the content horizontally */
  justify-content: center; /* Centers the content vertically */
`,eM=function(){let e=(0,a.Z)(),[t,r]=(0,n.useState)(!1),[s,o]=(0,n.useState)(""),[l,c]=(0,n.useState)("fall"),[h,u]=(0,n.useState)(""),[f,m]=(0,n.useState)(""),[x,g]=(0,n.useState)([]),[y,M]=(0,n.useState)([]),[v,b]=(0,n.useState)(null),[w,j]=(0,n.useState)(""),D=(e,t)=>{b(e),j(t),setTimeout(()=>{b(null),j("")},3e3)},T=async()=>{let e=await fetch("http://127.0.0.1:5000/submit-academic-period/get-important-dates");M((await e.json()).important_dates)},[$,S]=(0,n.useState)(!1),[k,Y]=(0,n.useState)({date:"",event:""}),[P,C]=(0,n.useState)({date:!1,event:!1}),Z=async()=>{let e={date:!k.date,event:!k.event};if(C(e),Object.values(e).some(e=>e)){D("Please fill in all required fields.","error");return}try{let e=await fetch("http://127.0.0.1:5000/submit-academic-period/add-important_dates",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:k.date,event:k.event})});if(!e.ok)throw Error(`HTTP error! Status: ${e.status}`);let t=await e.json();M(e=>[...e,t]),Y({date:"",event:""}),C({date:!1,event:!1}),S(!1),D("Event added successfully!","success")}catch(e){console.error("Error saving event:",e),D("Failed to save the event. Please try again.","error")}try{let e=await fetch("http://127.0.0.1:5000/submit-academic-period/get-important_dates/"),t=await e.json();M(t)}catch(e){console.error("Error refreshing important_dates:",e)}},[O,z]=(0,n.useState)(!1),[L,A]=(0,n.useState)(!1),U=()=>{z(!0)},H=async()=>{let e=await fetch("http://127.0.0.1:5000/download",{method:"GET",headers:{Accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}});if(e.ok){let t=await e.blob(),r=document.createElement("a");r.href=URL.createObjectURL(t),r.download="dias-de-calendario.xlsx",r.click()}else alert("Failed to download the file.")},[_,W]=(0,n.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[v&&i.jsx(eu,{type:w,children:v}),L&&i.jsx(q.Z,{open:L,onClose:()=>{A(!1)},onConfirm:()=>{z(!1),A(!1),o(""),c("fall")},message:"Are you sure you want to discard this generation?"}),(0,i.jsxs)(n.Suspense,{fallback:i.jsx(G.Z,{loading:t}),children:[!O&&(0,i.jsxs)(i.Fragment,{children:[i.jsx(eg,{theme:e,children:"Select a start date to get started"}),i.jsx(ey,{children:i.jsx(V,{startDate:s,setStartDate:o})}),i.jsx(ey,{children:i.jsx(p,{academicPeriod:l,setAcademicPeriod:c})}),i.jsx(ey,{children:i.jsx(B,{handleClick:()=>{if(r(!0),!s){m("Please select a start date");return}let e=new Date(s).getMonth(),t="",i=0;if(t=l,7===e&&"fall"===l||8===e&&"fall"===l)i=15;else if(0===e&&"spring"===l||1===e&&"spring"===l)i=15;else if(4===e&&"summerV1"===l||5===e&&"summerV1"===l)i=4;else if(4===e&&"summerExtended"===l||5===e&&"summerExtended"===l)i=6;else if(5===e&&"summerV2"===l||6===e&&"summerV2"===l)i=4;else{t="unknown",i=0,m("Invalid start date for academic period. Please select another date for calendar.");return}m(""),fetch("http://127.0.0.1:5000/submit-academic-period/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({startDate:s,academicPeriod:t,weeks:i})}).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()}).then(e=>{console.log("Response from Flask:",e),u(),M(e.important_dates),console.log("Updated responseMessage:",h),T(t,s),U(),r(!1)}).catch(e=>{console.error("Error:",e),m(e.message)})}})})]}),(0,i.jsxs)(ey,{children:[f&&i.jsx("p",{style:{color:"red"},children:f}),h&&i.jsx("p",{children:h})]}),t&&i.jsx(G.Z,{loading:t}),!t&&O&&(0,i.jsxs)(i.Fragment,{children:[i.jsx(et,{theme:e,children:(0,i.jsxs)(er,{theme:e,children:[i.jsx(ei,{theme:e,children:(0,i.jsxs)(en,{theme:e,children:[i.jsx(es,{theme:e,children:"Date"}),i.jsx(es,{theme:e,children:"Event"}),i.jsx(es,{theme:e,children:"Actions"})]})}),(0,i.jsxs)(ea,{children:[$&&(0,i.jsxs)(eo,{theme:e,children:[i.jsx(el,{theme:e,children:i.jsx("input",{type:"date",value:k.date,onChange:e=>Y({...k,date:e.target.value}),style:{borderColor:P.date?"red":void 0}})}),i.jsx(ed,{theme:e,children:i.jsx("input",{type:"text",placeholder:"Event Name",value:k.event,onChange:e=>Y({...k,event:e.target.value}),style:{borderColor:P.event?"red":void 0}})}),i.jsx(eh,{theme:e,children:(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginLeft:"-30px"},children:[i.jsx(d.Z,{onClick:Z,children:"Save"}),i.jsx(ee,{onClick:()=>{S(!1),C(!1)},sx:{color:"red",fontWeight:"bold"},children:"Cancel"})]})})]}),y.map((t,r)=>(0,i.jsxs)(eo,{theme:e,children:[i.jsx(el,{theme:e,children:t.date}),i.jsx(ec,{theme:e,children:t.event}),(0,i.jsxs)(eh,{theme:e,children:[i.jsx(em,{theme:e,children:i.jsx(X.Z,{})}),i.jsx(ep,{theme:e,children:i.jsx(J.Z,{})})]})]},r))]})]})}),$?i.jsx(ee,{onClick:()=>{Y({date:"",event:""}),C({date:!1,event:!1}),S(!1)},variant:"contained",sx:{backgroundColor:"red",color:"white"},children:"✕"}):i.jsx(K,{theme:e,onClick:()=>{S(!0)},variant:"contained",style:{color:"white"},children:"+"}),i.jsx(ef,{variant:"contained",onClick:()=>{A(!0)},theme:e,style:{display:O?"block":"none",color:"white",backgroundColor:"red"},children:i.jsx(N.Z,{sx:{fontSize:"xxlarge"}})}),i.jsx(ex,{theme:e,style:{color:"white",backgroundColor:(e.palette.mode,e.palette.primary.main)},onClick:()=>{W(!0)},children:i.jsx(Q,{})})]})]}),_&&(0,i.jsxs)("div",{style:{position:"fixed",top:"50%",left:"55%",transform:"translate(-50%, -50%)",border:`1px solid ${"dark"===e.palette.mode?"#555":"grey"}`,backgroundColor:e.palette.background.paper,boxShadow:"dark"===e.palette.mode?"0px 4px 6px rgba(0, 0, 0, 0.7)":"0px 4px 6px rgba(0, 0, 0, 0.1)",padding:"20px",borderRadius:"10px",zIndex:1e3},children:[i.jsx("h2",{children:"Are you sure you want to download the data?"}),i.jsx(d.Z,{onClick:H,style:{backgroundColor:(e.palette.mode,e.palette.primary.main),color:"white",padding:"10px 20px",border:"none",borderRadius:"5px",cursor:"pointer",marginRight:"10px"},children:"Yes, Download"}),i.jsx(d.Z,{onClick:()=>{W(!1)},style:{backgroundColor:"#dc3545",color:"white",padding:"10px 20px",border:"none",borderRadius:"5px",cursor:"pointer"},children:"Cancel"})]})]})};var ev=r(6766);let eb=s.ZP.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 20px;
  margin-top: -40px;
  color: ${({theme:e})=>(e.palette.mode,e.palette.text.primary)};
`,ew=s.ZP.h2`
  // color: #34495e;
  color: ${({theme:e})=>(e.palette.mode,e.palette.text.primary)};
  margin-top: 20px;
`,ej=s.ZP.p`
  margin-bottom: 15px;
`;function eD(){let e=(0,a.Z)(),[t,r]=(0,n.useState)(null),[s,d]=(0,n.useState)(!0),[l,c]=(0,n.useState)(!1);return l?i.jsx(i.Fragment,{children:(0,i.jsxs)(eb,{theme:e,children:[i.jsx(ew,{theme:e,children:"Academic Calendar Generator"}),(0,i.jsxs)(ej,{theme:e,children:["The ",i.jsx("strong",{children:"Academic Calendar Generator"})," is a tool created by"," ",i.jsx("strong",{children:"UPRM Calendar Generator Team"})," to simplify academic calendar planning. Built as part of our capstone project, this tool addresses the challenges of manual calendar creation by automating date calculations, following institutional guidelines, and adapting to unexpected changes."]}),i.jsx(n.Suspense,{fallback:i.jsx(ev.Z,{}),children:(0,i.jsxs)(o.Z,{theme:e,children:[s?i.jsx(ev.Z,{}):i.jsx(eM,{}),i.jsx(eM,{})]})})]})}):null}},8295:function(e){var t;t=function(){"use strict";var e="millisecond",t="second",r="minute",i="hour",n="week",s="month",a="quarter",o="year",d="date",l="Invalid Date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=function(e,t,r){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(r)+e},f="en",m={};m[f]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}};var p="$isDayjsObject",x=function(e){return e instanceof v||!(!e||!e[p])},g=function e(t,r,i){var n;if(!t)return f;if("string"==typeof t){var s=t.toLowerCase();m[s]&&(n=s),r&&(m[s]=r,n=s);var a=t.split("-");if(!n&&a.length>1)return e(a[0])}else{var o=t.name;m[o]=t,n=o}return!i&&n&&(f=n),n||!i&&f},y=function(e,t){if(x(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new v(r)},M={s:u,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+u(Math.floor(r/60),2,"0")+":"+u(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var i=12*(r.year()-t.year())+(r.month()-t.month()),n=t.clone().add(i,s),a=r-n<0,o=t.clone().add(i+(a?-1:1),s);return+(-(i+(r-n)/(a?n-o:o-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(l){return({M:s,y:o,w:n,d:"day",D:d,h:i,m:r,s:t,ms:e,Q:a})[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};M.l=g,M.i=x,M.w=function(e,t){return y(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var v=function(){function u(e){this.$L=g(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[p]=!0}var f=u.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(c);if(i){var n=i[2]-1||0,s=(i[7]||"0").substring(0,3);return r?new Date(Date.UTC(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(t)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return M},f.isValid=function(){return this.$d.toString()!==l},f.isSame=function(e,t){var r=y(e);return this.startOf(t)<=r&&r<=this.endOf(t)},f.isAfter=function(e,t){return y(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<y(e)},f.$g=function(e,t,r){return M.u(e)?this[t]:this.set(r,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,a){var l=this,c=!!M.u(a)||a,h=M.p(e),u=function(e,t){var r=M.w(l.$u?Date.UTC(l.$y,t,e):new Date(l.$y,t,e),l);return c?r:r.endOf("day")},f=function(e,t){return M.w(l.toDate()[e].apply(l.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),l)},m=this.$W,p=this.$M,x=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case o:return c?u(1,0):u(31,11);case s:return c?u(1,p):u(0,p+1);case n:var y=this.$locale().weekStart||0,v=(m<y?m+7:m)-y;return u(c?x-v:x+(6-v),p);case"day":case d:return f(g+"Hours",0);case i:return f(g+"Minutes",1);case r:return f(g+"Seconds",2);case t:return f(g+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(n,a){var l,c=M.p(n),h="set"+(this.$u?"UTC":""),u=((l={}).day=h+"Date",l[d]=h+"Date",l[s]=h+"Month",l[o]=h+"FullYear",l[i]=h+"Hours",l[r]=h+"Minutes",l[t]=h+"Seconds",l[e]=h+"Milliseconds",l)[c],f="day"===c?this.$D+(a-this.$W):a;if(c===s||c===o){var m=this.clone().set(d,1);m.$d[u](f),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else u&&this.$d[u](f);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[M.p(e)]()},f.add=function(e,a){var d,l=this;e=Number(e);var c=M.p(a),h=function(t){var r=y(l);return M.w(r.date(r.date()+Math.round(t*e)),l)};if(c===s)return this.set(s,this.$M+e);if(c===o)return this.set(o,this.$y+e);if("day"===c)return h(1);if(c===n)return h(7);var u=((d={})[r]=6e4,d[i]=36e5,d[t]=1e3,d)[c]||1,f=this.$d.getTime()+e*u;return M.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||l;var i=e||"YYYY-MM-DDTHH:mm:ssZ",n=M.z(this),s=this.$H,a=this.$m,o=this.$M,d=r.weekdays,c=r.months,u=r.meridiem,f=function(e,r,n,s){return e&&(e[r]||e(t,i))||n[r].slice(0,s)},m=function(e){return M.s(s%12||12,e,"0")},p=u||function(e,t,r){var i=e<12?"AM":"PM";return r?i.toLowerCase():i};return i.replace(h,function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return M.s(t.$y,4,"0");case"M":return o+1;case"MM":return M.s(o+1,2,"0");case"MMM":return f(r.monthsShort,o,c,3);case"MMMM":return f(c,o);case"D":return t.$D;case"DD":return M.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return f(r.weekdaysMin,t.$W,d,2);case"ddd":return f(r.weekdaysShort,t.$W,d,3);case"dddd":return d[t.$W];case"H":return String(s);case"HH":return M.s(s,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return p(s,a,!0);case"A":return p(s,a,!1);case"m":return String(a);case"mm":return M.s(a,2,"0");case"s":return String(t.$s);case"ss":return M.s(t.$s,2,"0");case"SSS":return M.s(t.$ms,3,"0");case"Z":return n}return null}(e)||n.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(e,d,l){var c,h=this,u=M.p(d),f=y(e),m=(f.utcOffset()-this.utcOffset())*6e4,p=this-f,x=function(){return M.m(h,f)};switch(u){case o:c=x()/12;break;case s:c=x();break;case a:c=x()/3;break;case n:c=(p-m)/6048e5;break;case"day":c=(p-m)/864e5;break;case i:c=p/36e5;break;case r:c=p/6e4;break;case t:c=p/1e3;break;default:c=p}return l?c:M.a(c)},f.daysInMonth=function(){return this.endOf(s).$D},f.$locale=function(){return m[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),i=g(e,t,!0);return i&&(r.$L=i),r},f.clone=function(){return M.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},u}(),b=v.prototype;return y.prototype=b,[["$ms",e],["$s",t],["$m",r],["$H",i],["$W","day"],["$M",s],["$y",o],["$D",d]].forEach(function(e){b[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),y.extend=function(e,t){return e.$i||(e(t,v,y),e.$i=!0),y},y.locale=g,y.isDayjs=x,y.unix=function(e){return y(1e3*e)},y.en=m[f],y.Ls=m,y.p={},y},e.exports=t()},9818:function(e){var t;t=function(){return function(e,t){var r=t.prototype,i=r.format;r.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return i.bind(this)(e);var n=this.$utils(),s=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return r.ordinal(t.$D);case"gggg":return t.weekYear();case"GGGG":return t.isoWeekYear();case"wo":return r.ordinal(t.week(),"W");case"w":case"ww":return n.s(t.week(),"w"===e?1:2,"0");case"W":case"WW":return n.s(t.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return n.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();case"z":return"["+t.offsetName()+"]";case"zzz":return"["+t.offsetName("long")+"]";default:return e}});return i.bind(this)(s)}}},e.exports=t()},4012:function(e){var t;t=function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d/,i=/\d\d/,n=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},d=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e||"Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},h=function(e,t){var r,i=a.meridiem;if(i){for(var n=1;n<=24;n+=1)if(e.indexOf(i(n,0,t))>-1){r=n>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[s,function(e){this.afternoon=h(e,!1)}],a:[s,function(e){this.afternoon=h(e,!0)}],Q:[r,function(e){this.month=3*(e-1)+1}],S:[r,function(e){this.milliseconds=100*+e}],SS:[i,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,d("seconds")],ss:[n,d("seconds")],m:[n,d("minutes")],mm:[n,d("minutes")],H:[n,d("hours")],h:[n,d("hours")],HH:[n,d("hours")],hh:[n,d("hours")],D:[n,d("day")],DD:[i,d("day")],Do:[s,function(e){var t=a.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var i=1;i<=31;i+=1)t(i).replace(/\[|\]/g,"")===e&&(this.day=i)}],w:[n,d("week")],ww:[i,d("week")],M:[n,d("month")],MM:[i,d("month")],MMM:[s,function(e){var t=c("months"),r=(c("monthsShort")||t.map(function(e){return e.slice(0,3)})).indexOf(e)+1;if(r<1)throw Error();this.month=r%12||r}],MMMM:[s,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw Error();this.month=t%12||t}],Y:[/[+-]?\d+/,d("year")],YY:[i,function(e){this.year=o(e)}],YYYY:[/\d{4}/,d("year")],Z:l,ZZ:l};return function(r,i,n){n.p.customParseFormat=!0,r&&r.parseTwoDigitYear&&(o=r.parseTwoDigitYear);var s=i.prototype,d=s.parse;s.parse=function(r){var i=r.date,s=r.utc,o=r.args;this.$u=s;var l=o[1];if("string"==typeof l){var c=!0===o[2],h=!0===o[3],f=o[2];h&&(f=o[2]),a=this.$locale(),!c&&f&&(a=n.Ls[f]),this.$d=function(r,i,n,s){try{if(["x","X"].indexOf(i)>-1)return new Date(("X"===i?1e3:1)*r);var o=(function(r){var i,n;i=r,n=a&&a.formats;for(var s=(r=i.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(t,r,i){var s=i&&i.toUpperCase();return r||n[i]||e[i]||n[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(e,t,r){return t||r.slice(1)})})).match(t),o=s.length,d=0;d<o;d+=1){var l=s[d],c=u[l],h=c&&c[0],f=c&&c[1];s[d]=f?{regex:h,parser:f}:l.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,i=0;r<o;r+=1){var n=s[r];if("string"==typeof n)i+=n.length;else{var a=n.regex,d=n.parser,l=e.slice(i),c=a.exec(l)[0];d.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}})(i)(r),d=o.year,l=o.month,c=o.day,h=o.hours,f=o.minutes,m=o.seconds,p=o.milliseconds,x=o.zone,g=o.week,y=new Date,M=c||(d||l?1:y.getDate()),v=d||y.getFullYear(),b=0;d&&!l||(b=l>0?l-1:y.getMonth());var w,j=h||0,D=f||0,T=m||0,$=p||0;return x?new Date(Date.UTC(v,b,M,j,D,T,$+60*x.offset*1e3)):n?new Date(Date.UTC(v,b,M,j,D,T,$)):(w=new Date(v,b,M,j,D,T,$),g&&(w=s(w).week(g).toDate()),w)}catch(e){return new Date("")}}(i,l,s,n),this.init(),f&&!0!==f&&(this.$L=this.locale(f).$L),(c||h)&&i!=this.format(l)&&(this.$d=new Date("")),a={}}else if(l instanceof Array)for(var m=l.length,p=1;p<=m;p+=1){o[1]=l[p-1];var x=n.apply(this,o);if(x.isValid()){this.$d=x.$d,this.$L=x.$L,this.init();break}p===m&&(this.$d=new Date(""))}else d.call(this,r)}}},e.exports=t()},7824:function(e){var t;t=function(){return function(e,t,r){t.prototype.isBetween=function(e,t,i,n){var s=r(e),a=r(t),o="("===(n=n||"()")[0],d=")"===n[1];return(o?this.isAfter(s,i):!this.isBefore(s,i))&&(d?this.isBefore(a,i):!this.isAfter(a,i))||(o?this.isBefore(s,i):!this.isAfter(s,i))&&(d?this.isAfter(a,i):!this.isBefore(a,i))}}},e.exports=t()},3616:function(e){var t;t=function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(t,r,i){var n=r.prototype,s=n.format;i.en.formats=e,n.format=function(t){void 0===t&&(t="YYYY-MM-DDTHH:mm:ssZ");var r,i,n=this.$locale().formats,a=(r=t,i=void 0===n?{}:n,r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(t,r,n){var s=n&&n.toUpperCase();return r||i[n]||e[n]||i[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(e,t,r){return t||r.slice(1)})}));return s.call(this,a)}}},e.exports=t()},2487:function(e){var t;t=function(){"use strict";var e="week",t="year";return function(r,i,n){var s=i.prototype;s.week=function(r){if(void 0===r&&(r=null),null!==r)return this.add(7*(r-this.week()),"day");var i=this.$locale().yearStart||1;if(11===this.month()&&this.date()>25){var s=n(this).startOf(t).add(1,t).date(i),a=n(this).endOf(e);if(s.isBefore(a))return 1}var o=n(this).startOf(t).date(i).startOf(e).subtract(1,"millisecond"),d=this.diff(o,e,!0);return d<0?n(this).startOf("week").week():Math.ceil(d)},s.weeks=function(e){return void 0===e&&(e=null),this.week(e)}}},e.exports=t()},3101:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});let i=(0,r(8570).createProxy)(String.raw`C:\Users\crist\VSCode\UPRMAcademicCalendar-2\UPRMAcademicCalendar-2-1\app\(dashboard)\page.tsx#default`)}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[561,104,1,721],()=>r(904));module.exports=i})();