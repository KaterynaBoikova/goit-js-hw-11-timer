(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("7qfE"),n("lmye"),n("JjHl"),n("e+qc"),n("L1EO");new(function(){function t(t,e){this.selector=t,this.targetDate=new Date(e),this.htmlTextRefs=document.querySelectorAll(this.selector),this.intervalId=null}var e=t.prototype;return e.pad=function(t){return String(t).padStart(2,"0")},e.setTimer=function(){var t=this;this.intervalId=setInterval((function(){var e=t.targetDate-Date.now();t.htmlTextRefs[0].textContent=Math.floor(e/864e5),t.htmlTextRefs[1].textContent=t.pad(Math.floor(e%864e5/36e5)),t.htmlTextRefs[2].textContent=t.pad(Math.floor(e%36e5/6e4)),t.htmlTextRefs[3].textContent=t.pad(Math.floor(e%6e4/1e3)),Object.values(t.htmlTextRefs).map((function(t){return t.textContent})).every((function(t){return t<=0}))&&clearInterval(t.intervalId)}),1e3)},t}())(".value","Jul 25, 2021 22:13").setTimer()}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.989fd3f4f8dcb4a08441.js.map