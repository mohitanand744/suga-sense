import{r as m,j as e,u as d}from"./index-BKlGNda8.js";const o=({totalResults:i=368,resultsPerPage:n=10})=>{const[s,a]=m.useState(1),r=Math.ceil(i/n),l=t=>{t>0&&t<=r&&a(t)};return e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 px-4 py-2 my-5 bg-white rounded-md shadow-lg sm:justify-between",children:[e.jsxs("div",{className:"relative flex flex-wrap items-center justify-center sm:justify-start w-full sm:w-[50%] gap-5",children:[e.jsxs("select",{className:"block px-3 py-2 text-sm text-black bg-white border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",defaultValue:n,children:[e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:25,children:"25"}),e.jsx("option",{value:50,children:"50"}),e.jsx("option",{value:100,children:"100"})]}),e.jsxs("div",{className:"text-sm font-bold text-gray-600",children:["Resultat: ",n*(s-1)+1,"-",Math.min(n*s,i)," von"," ",i]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:()=>l(s-1),className:`flex items-center justify-center w-8 h-8 border rounded-lg ${s===1?"text-gray-400 cursor-not-allowed":"text-gray-700 hover:bg-gray-100"}`,disabled:s===1,children:e.jsx("img",{className:"w-[30%]",src:"/images/aerro.png",alt:""})}),Array.from({length:r},(t,c)=>c+1).map(t=>t===1||t===r||t>=s-1&&t<=s+1?e.jsx("button",{onClick:()=>l(t),className:`flex items-center justify-center w-8 h-8 border rounded-lg active:scale-90 hover:scale-105 ${s===t?"bg-[#0480CA] text-white":"text-gray-700 hover:bg-gray-100"}`,children:t},t):t===s-2||t===s+2?e.jsx("button",{onClick:()=>t<s?l(s-5):l(s+5),className:"w-8 h-8 px-2 text-gray-700 transition-all duration-200 ease-in-out border rounded-md active:scale-90 hover:scale-105 hover:bg-gray-100",children:"..."},t):null),e.jsx("button",{onClick:()=>l(s+1),className:`flex items-center justify-center w-8 h-8 border rounded-lg ${s===r?"text-gray-400 cursor-not-allowed":"text-gray-700 hover:bg-gray-100"}`,disabled:s===r,children:e.jsx("img",{className:"w-[30%] rotate-180",src:"/images/aerro.png",alt:""})})]})]})};function h({pathname:i}){const n=[{name:"Janim Kim",age:22,gender:"männlich",phone:"20220 102 45",lastData:"2024-06-11 10:03:58",glucose:"9.6mmol/L",performance:"Sendeleistung: 3",startTime:"28-05-2024 03:13:32",endTime:"11-06-2024 10:05:50",period:"14 Tag(e) 6 Std.",monitorStatus:"aktiv",status:"normal"},{name:"Janim Kim",age:22,gender:"männlich",phone:"20220 102 45",lastData:"2024-06-11 10:03:58",glucose:"9.6mmol/L",performance:"Sendeleistung: 3",startTime:"28-05-2024 03:13:32",endTime:"11-06-2024 10:05:50",period:"14 Tag(e) 6 Std.",monitorStatus:"beendet",status:"normal"},{name:"Janim Kim",age:22,gender:"männlich",phone:"20220 102 45",lastData:"2024-06-11 10:03:58",glucose:"9.6mmol/L",performance:"Sendeleistung: 3",startTime:"28-05-2024 03:13:32",endTime:"11-06-2024 10:05:50",period:"14 Tag(e) 6 Std.",monitorStatus:"beendet",status:"normal"},{name:"Kanim Kim",age:22,gender:"männlich",phone:"20220 102 45",lastData:"2024-06-11 10:03:58",glucose:"9.6mmol/L",performance:"Sendeleistung: 3",startTime:"28-05-2024 03:13:32",endTime:"11-06-2024 10:05:50",period:"14 Tag(e) 6 Std.",monitorStatus:"OnGoing",status:"normal"}],s=d();return e.jsxs("div",{className:"",children:[e.jsx("h2",{className:"mb-4 text-lg font-semibold text-black md:text-2xl",children:"Ausgewählte Patienten"}),e.jsx("div",{className:"overflow-x-auto hideScrollBar",children:e.jsxs("table",{className:"w-full text-sm text-left border-collapse table-auto whitespace-nowrap lg:whitespace-normal",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"font-medium text-gray-600 bg-gray-100",children:[e.jsx("th",{className:"px-3 py-4",children:"Name und Details"}),e.jsx("th",{className:"px-3 py-4",children:"Letzte Daten"}),e.jsx("th",{className:"px-3 py-4",children:"Letzter Glucosewert"}),e.jsx("th",{className:"px-3 py-4 text-center",children:"Zeit"}),e.jsx("th",{className:"px-3 py-4",children:"Überwachungszeitraum"}),e.jsx("th",{className:"px-3 py-4",children:"Monitor status"}),e.jsx("th",{className:"px-3 py-4",children:"Status"}),e.jsx("th",{className:"px-3 py-4",children:"Aktion"})]})}),e.jsx("tbody",{children:n.map((a,r)=>e.jsxs("tr",{onClick:()=>{s("/dashboard/cgmreport")},className:`${r%2===0?"bg-white":"bg-gray-50"} hover:bg-gray-100`,children:[e.jsx("td",{className:"px-1",children:e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-black",children:a.name}),e.jsxs("div",{className:"flex flex-wrap items-center w-full text-sm text-gray-500",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("img",{src:"/images/age.png",alt:""})," ",e.jsxs("span",{className:"mx-1",children:[a.age," Jahre"]})," "]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("img",{src:"/images/gender.png",alt:""})," ",e.jsx("span",{className:"",children:a.gender})]})]}),e.jsxs("div",{className:"flex items-center gap-1 text-sm text-gray-500",children:[e.jsx("img",{src:"/images/icons.png",alt:""}),a.phone]})]})}),e.jsxs("td",{className:"flex flex-col gap-3 p-1 px-3",children:[e.jsx("span",{children:a.lastData})," ",e.jsx("span",{children:"Neueste Daten Nr..: 6855"})]}),e.jsxs("td",{className:"p-4",children:[e.jsx("span",{className:"font-bold text-blue-600",children:a.glucose}),e.jsx("div",{className:"text-sm text-gray-500",children:a.performance})]}),e.jsxs("td",{className:"p-4",children:[e.jsxs("div",{children:["Startzeit:"," ",e.jsx("span",{className:"text-blue-700",children:a.startTime})]}),e.jsxs("div",{children:["Beendet : ",a.endTime]})]}),e.jsx("td",{className:"p-4",children:a.period}),e.jsx("td",{className:"p-4",children:e.jsx("button",{onClick:l=>l.stopPropagation(),className:`w-[7rem] text-center px-4 py-2 rounded-xl text-sm font-medium ${a.monitorStatus==="aktiv"?"bg-yellow-400 text-white":a.monitorStatus==="OnGoing"?"bg-[#33d613] text-white":"bg-[#0480CA] text-white"}`,children:a.monitorStatus})}),e.jsx("td",{className:"p-4",children:e.jsx("button",{onClick:l=>l.stopPropagation(),className:"w-[6rem] text-center px-4 py-2 text-sm font-medium text-white bg-[#0480CA] rounded-xl",children:a.status})}),e.jsx("td",{className:"p-4",children:e.jsxs("label",{htmlFor:"my_modal_7",onClick:l=>l.stopPropagation(),className:" flex items-center gap-2 w-[6rem] text-center px-4 py-2 text-sm font-medium bg-gray-500 rounded-xl text-gray-50 hover:bg-gray-400 ",children:[e.jsx("img",{src:"/images/eye.png",alt:""})," Ansicht"]})})]},r))})]})}),e.jsx("input",{type:"checkbox",id:"my_modal_7",className:" modal-toggle"}),e.jsxs("div",{className:"modal",role:"dialog",children:[e.jsxs("div",{className:"text-center text-black bg-white modal-box",children:[e.jsx("h3",{className:"text-lg font-bold",children:"Send Request"}),e.jsxs("div",{className:"border border-blue-600 w-[16rem] mx-auto rounded-2xl mt-4 py-2",children:[e.jsx("p",{className:"font-semibold text-black ps-[1.6rem] text-start",children:"Janim Kim"}),e.jsxs("div",{className:"flex flex-wrap items-center ps-[1.6rem] w-full gap-5 text-sm text-gray-500",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("img",{src:"/images/age.png",alt:""})," ",e.jsx("span",{className:"mx-1",children:"22 Jahre"})," "]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("img",{src:"/images/gender.png",alt:""})," ",e.jsx("span",{className:"",children:"männlich"})]})]}),e.jsxs("div",{className:"flex items-center ps-[1.6rem] gap-1 mt-1 text-sm text-gray-500",children:[e.jsx("img",{src:"/images/icons.png",alt:""}),"5436 3555 53653"]})]}),e.jsx("p",{className:"py-4 text-gray-500",children:"We Sent Request To The Patients Application When Request Was Accept Details Will Automatic Saw."}),e.jsx("button",{className:"p-2 px-3 mt-4 text-white bg-gray-500 rounded-lg",children:"Send Request Again"}),e.jsx("p",{className:"mt-3 text-gray-600",children:"0:59"})]}),e.jsx("label",{className:"modal-backdrop",htmlFor:"my_modal_7",children:"Close"})]}),i==="dashboardpatienten"&&e.jsx(o,{})]})}export{h as default};
