"use strict";const e=document.querySelectorAll(".slider__image"),t=document.querySelectorAll(".slider__dott");let c=0;function s(){e.forEach((e,t)=>{t===c?e.classList.add("active"):e.classList.remove("active")}),t.forEach((e,t)=>{t===c?e.classList.add("active"):e.classList.remove("active")})}t.forEach((e,t)=>{e.addEventListener("click",()=>{c=t,s()})}),s(),setInterval(function(){c=(c+1)%e.length,s()},5e3);
//# sourceMappingURL=index.a007f208.js.map
