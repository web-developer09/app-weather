"use strict";
 const api={
key:"0451aa87fff6857fdd52aec3964df37d",
dturl:'https://api.openweathermap.org/data/2.5/'
 };

 const box=document.querySelector('#box');

 box.addEventListener('keypress',appoff);

 function appoff(e){
     if(e.keyCode==13){
        getBox(box.value);
     console.log(box.value);
     }
 }

 function getBox(query){
     fetch(`${api.dturl}weather?q=${query}&units=metric&APPID=${api.key}`)
     .then((weather)=>{
         return weather.json();
     })
     .then(dispalW);
 }

 function dispalW(weather){
     const tempu=document.querySelector(".temp");
     tempu.innerHTML=`${Math.round(weather.main.temp)}°<span>C</span>`;

     const cname=document.querySelector(".c-name");

     cname.innerHTML=`${weather.name},${weather.sys.country}`;

const cdate=document.querySelector(".c-date");

     const month=[
     'January',
     'February',
     'March',
     'April',
     'May',
     'June',
     'July',
     'Augst',
     'September',
     'Octamber',
     'November',
     'December',
];

const week=[
    'Monday',
    'Tuesdy',
    'Weadnesday',
    'Thursday',
    'Friday',
    'Satuday',
    'Sunday',
];

const dt=new Date();
let dtt=dt.getDate();
let wk=dt.getDay();
let mn=dt.getMonth();
let yr=dt.getFullYear();

cdate.innerHTML=`${yr} , ${dtt} ${month[mn]} , ${week[wk-1]}`;


const ctype=document.querySelector(".colud-type");
ctype.innerHTML=`${weather.weather[0].main}`;

const tmp=document.querySelector(".temps");
tmp.innerHTML=`${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;

 console.log(weather);
}




