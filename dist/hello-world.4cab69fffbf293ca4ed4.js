!function(e){function n(n){for(var r,a,l=n[0],i=n[1],c=n[2],s=0,p=[];s<l.length;s++)a=l[s],o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(f&&f(n);p.length;)p.shift()();return u.push.apply(u,c||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,l=1;l<t.length;l++){var i=t[l];0!==o[i]&&(r=!1)}r&&(u.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={1:0},u=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var f=i;u.push([8,0]),t()}([function(e,n,t){"use strict";t(2);function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,o;return n=e,(t=[{key:"render",value:function(e){var n=document.createElement("h1"),t=document.querySelector("body");n.innerHTML='Webpack is awesome. This is the "'+e+'"page',t.appendChild(n)}}])&&r(n.prototype,t),o&&r(n,o),e}();n.a=o},,function(e,n,t){},,function(e,n,t){},,,,function(e,n,t){"use strict";t.r(n);t(4);function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.buttonCssClass="hello-world-button"}var n,t,o;return n=e,(t=[{key:"render",value:function(){var e=document.createElement("button"),n=document.querySelector("body");e.innerHTML="Hello World",e.onclick=function(){var e=document.createElement("p");e.innerHTML="Hello world",e.classList.add("hello-world-text"),n.appendChild(e)},e.classList.add(this.buttonCssClass),n.appendChild(e)}}])&&r(n.prototype,t),o&&r(n,o),e}(),u=t(0),a=t(1),l=t.n(a);(new u.a).render(l.a.upperFirst("hello world")),(new o).render(),console.log("Production Mode")}]);