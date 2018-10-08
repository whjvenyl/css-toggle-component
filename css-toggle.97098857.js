parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"S3PC":[function(require,module,exports) {
var n=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}();function e(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function t(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function o(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}function r(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(r.prototype,HTMLElement.prototype),Object.setPrototypeOf(r,HTMLElement),function(){var a=["rect-slide","rect-flip","rect-move","rect-hide"],c=["flip","fadeout","slideall"],i=document.createElement("template"),s="\n.button\n{\n  position: absolute;\n  top: calc(50% - 18px);\n  left: calc(50% - 37px);\n  width: 74px;\n  height: 36px;\n  overflow: hidden;\n}\n\n.button.r, .button.r .layer\n{\n  border-radius: 100px;\n}\n.button.b2\n{\n  border-radius: 2px;\n}\n\n.checkbox\n{\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  opacity: 0;\n  cursor: pointer;\n  z-index: 3;\n}\n\n.knobs\n{\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n}\n\n.layer\n{\n  width: 100%;\n  background-color: #ebf7fc;\n  transition: 0.3s ease all;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n}\n";i.innerHTML="\n  <style>\n"+s+'\n/* Slide */\n.slide .knobs:before\n{\n  content: attr(data-yes);\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  width: 20px;\n  height: 10px;\n  color: #fff;\n  font-size: 10px;\n  font-weight: bold;\n  text-align: center;\n  line-height: 1;\n  padding: 9px 4px;\n  background-color: #03A9F4;\n  border-radius: 50%;\n  transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;\n}\n\n.slide .checkbox:checked + .knobs:before\n{\n  content: attr(data-no);\n  left: 42px;\n  background-color: #f44336;\n}\n\n.slide .checkbox:checked ~ .layer\n{\n  background-color: #fcebeb;\n}\n\n.slide .knobs, \n.slide .knobs:before, \n.slide .layer\n{\n  transition: 0.3s ease all;\n}\n\n/* Move  */\n.move .knobs:before, .move .knobs:after\n{\n  content: attr(data-yes);\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  width: 20px;\n  height: 10px;\n  color: #fff;\n  font-size: 10px;\n  font-weight: bold;\n  text-align: center;\n  line-height: 1;\n  padding: 9px 4px;\n  background-color: #03A9F4;\n  border-radius: 50%;\n  transition: 0.3s ease all;\n}\n\n.move .knobs:before\n{\n  content: attr(data-yes);\n}\n\n.move .knobs:after\n{\n  content: attr(data-no);\n}\n\n.move .knobs:after\n{\n  right: -28px;\n  left: auto;\n  background-color: #F44336;\n}\n\n.move .checkbox:checked + .knobs:before\n{\n  left: -28px;\n}\n\n.move .checkbox:checked + .knobs:after\n{\n  right: 4px;\n}\n\n.move .checkbox:checked ~ .layer\n{\n  background-color: #fcebeb;\n}\n\n/* Up down */\n.updown .knobs:before, .updown .knobs:after\n{\nposition: absolute;\ntop: 4px;\nleft: 4px;\nwidth: 20px;\nheight: 10px;\ncolor: #fff;\nfont-size: 10px;\nfont-weight: bold;\ntext-align: center;\nline-height: 1;\npadding: 9px 4px;\nbackground-color: #03A9F4;\nborder-radius: 50%;\ntransition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;\n}\n\n.updown .knobs:before\n{\ncontent: attr(data-yes);\n}\n\n.updown .knobs:after\n{\ncontent: attr(data-no);\n}\n\n.updown .knobs:after\n{\ntop: -28px;\nright: 4px;\nleft: auto;\nbackground-color: #F44336;\n}\n\n.updown .checkbox:checked + .knobs:before\n{\ntop: -28px;\n}\n\n.updown .checkbox:checked + .knobs:after\n{\ntop: 4px;\n}\n\n.updown .checkbox:checked ~ .layer\n{\nbackground-color: #fcebeb;\n}\n\n/* Flip style */\n.flip\n{\nperspective: 60px;\noverflow: visible;\n}\n\n.flip .knobs:before, .flip .knobs span\n{\ncontent: \'\';\nposition: absolute;\ntop: 4px;\nleft: 4px;\nwidth: 20px;\nheight: 10px;\ncolor: #fff;\nfont-size: 10px;\nfont-weight: bold;\ntext-align: center;\nline-height: 1;\npadding: 9px 4px;\nborder-radius: 50%;\ntransition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;\n}\n\n.flip .knobs:before\n{\nbackground-color: #03A9F4;\n}\n\n.flip .knobs span:before\n{\ncontent: attr(data-yes);\n}\n\n.flip .knobs:before, .flip .layer\n{\ntransform: rotateY(0);\ntransform-origin: center;\n}\n\n.flip .checkbox:checked + .knobs:before, .flip .checkbox:checked + .knobs span\n{\nleft: 42px;\n}\n\n.flip .checkbox:checked + .knobs:before\n{\ntransform: rotateY(180deg);\nbackground-color: #f44336;\n}\n\n.flip .checkbox:checked + .knobs span:before\n{\ncontent: attr(data-no);\nleft: 42px;\n}\n\n.flip .checkbox:checked ~ .layer\n{\nbackground-color: #fcebeb;\ntransform: rotateY(-180deg);\n}\n\n.flip .knobs, .flip .knobs:before, .flip .layer\n{\ntransition: 0.3s ease all;\n}\n\n/* Rotate style */\n.rotate\n{\noverflow: visible;\n}\n\n.rotate .knobs:before\n{\ncontent: attr(data-yes);\nposition: absolute;\ntop: 4px;\nleft: 4px;\nwidth: 20px;\nheight: 10px;\ncolor: #fff;\nfont-size: 10px;\nfont-weight: bold;\ntext-align: center;\nline-height: 1;\npadding: 9px 4px;\nbackground-color: #03A9F4;\nborder-radius: 50%;\n}\n\n.rotate .layer, .rotate .knobs, .rotate .knobs:before\n{\ntransform: rotateZ(0);\ntransition: 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;\n}\n\n.rotate .checkbox:checked + .knobs\n{\ntransform: rotateZ(-180deg);\n}\n\n.rotate .checkbox:checked + .knobs:before\n{\ncontent: attr(data-no);\n         background-color: #f44336;\ntransform: rotateZ(180deg);\n}\n\n.rotate .checkbox:checked ~ .layer\n{\n  background-color: #fcebeb;\ntransform: rotateZ(180deg);\n}\n\n/* Fade out */\n.fadeout .knobs:before, .fadeout .knobs:after, .fadeout .knobs span\n{\nposition: absolute;\ntop: 4px;\nwidth: 20px;\nheight: 10px;\n        font-size: 10px;\n        font-weight: bold;\n        text-align: center;\n        line-height: 1;\npadding: 9px 4px;\n         border-radius: 50%;\ntransition: 0.3s ease all;\n}\n\n.fadeout .knobs:before\n{\ncontent: attr(data-yes);\ncolor: #fff;\nleft: 4px;\n}\n\n.fadeout .knobs:after\n{\ncontent: attr(data-no);\nleft: 42px;\ncolor: #fff;\n       background-color: #f44336;\nopacity: 0;\n}\n\n.fadeout .knobs:before, .fadeout .knobs:after\n{\n  z-index: 2;\n}\n\n.fadeout .knobs span\n{\nleft: 4px;\n      background-color: #03A9F4;\n      z-index: 1;\n}\n\n.fadeout .checkbox:checked + .knobs:before\n{\nopacity: 0;\n}\n\n.fadeout .checkbox:checked + .knobs:after\n{\nopacity: 1;\n}\n\n.fadeout .checkbox:checked + .knobs span\n{\n  background-color: #fcebeb;\ntransform: scale(4);\n}\n\n/* Slide all */\n.slideall .knobs:before, .slideall .knobs:after, .slideall .knobs span\n{\n    position: absolute;\n    top: 4px;\n    width: 20px;\n    height: 10px;\n    font-size: 10px;\n    font-weight: bold;\n    text-align: center;\n    line-height: 1;\n    padding: 9px 4px;\n    border-radius: 50%;\n    transition: 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;\n}\n\n.slideall .knobs:before\n{\n    content: attr(data-yes);\n    left: 4px;\n}\n\n.slideall .knobs:after\n{\n    content: attr(data-no);\n    right: -24px;\n}\n\n.slideall .knobs:before, .slideall .knobs:after\n{\n    color: #fff;\n    z-index: 2;\n}\n\n.slideall .knobs span\n{\n    left: 4px;\n    background-color: #03a9f4;\n    z-index: 1;\n}\n\n.slideall .checkbox:checked + .knobs:before\n{\n    left: -24px;\n}\n\n.slideall .checkbox:checked + .knobs:after\n{\n    right: 4px;\n}\n\n.slideall .checkbox:checked + .knobs span\n{\n    left: 42px;\n    background-color: #F44336;\n}\n\n.slideall .checkbox:checked ~ .layer\n{\n    background-color: #fcebeb;\n}\n\n\n</style>\n<div class="button r" role="switch" aria-label="CSS Toggle Button" aria-checked="true">\n  <input type="checkbox" class="checkbox" aria-label="CSS Toggle Button">\n  <div class="knobs" data-yes="✔" data-no="✕"></div>\n  <div class="layer"></div>\n</div>\n';var l=document.createElement("template");l.innerHTML="\n  <style>\n  "+s+'\n  /* Rectangle Slide  */\n.rect-slide .knobs:before, .rect-slide .knobs:after, .rect-slide .knobs span\n{\n    position: absolute;\n    top: 4px;\n    width: 20px;\n    height: 10px;\n    font-size: 10px;\n    font-weight: bold;\n    text-align: center;\n    line-height: 1;\n    padding: 9px 4px;\n    border-radius: 2px;\n    transition: 0.3s ease all;\n}\n\n.rect-slide .knobs:before\n{\n    content: \'\';\n    left: 4px;\n    background-color: #03A9F4;\n}\n\n.rect-slide .knobs:after\n{\n    content: attr(data-no);\n    right: 4px;\n    color: #4e4e4e;\n}\n\n.rect-slide .knobs span\n{\n    display: inline-block;\n    left: 4px;\n    color: #fff;\n    z-index: 1;\n}\n\n.rect-slide .checkbox:checked + .knobs span\n{\n    color: #4e4e4e;\n}\n\n.rect-slide .checkbox:checked + .knobs:before\n{\n    left: 42px;\n    background-color: #F44336;\n}\n\n.rect-slide .checkbox:checked + .knobs:after\n{\n    color: #fff;\n}\n\n.rect-slide .checkbox:checked ~ .layer\n{\n    background-color: #fcebeb;\n}\n\n/* Rectangle Flip  */\n.rect-flip\n{\n    overflow: visible;\n}\n\n.rect-flip .knobs\n{\n    perspective: 70px;\n}\n\n.rect-flip .knobs:before, .rect-flip .knobs:after, .rect-flip .knobs span\n{\n    position: absolute;\n    top: 4px;\n    border-radius: 2px;\n}\n\n.rect-flip .knobs:before, .rect-flip .knobs:after\n{\n    width: 20px;\n    height: 10px;\n    color: #4e4e4e;\n    font-size: 10px;\n    font-weight: bold;\n    text-align: center;\n    line-height: 1;\n    padding: 9px 4px;\n}\n\n.rect-flip .knobs:before\n{\n    content: attr(data-yes);\n    left: 4px;\n}\n\n.rect-flip .knobs:after\n{\n    content: attr(data-no);\n    right: 4px;\n}\n\n.rect-flip .knobs span\n{\n    right: 4px;\n    width: 33px;\n    height: 28px;\n    background-color: #03a9f4;\n    transform: rotateY(0);\n    transform-origin: 0% 50%;\n    transition: 0.6s ease all;\n    z-index: 1;\n}\n\n.rect-flip .checkbox:checked + .knobs span\n{\n    transform: rotateY(-180deg);\n    background-color: #f44336;\n}\n\n.rect-flip .checkbox:checked ~ .layer\n{\n    background-color: #fcebeb;\n}\n/* Rectangle Move  */\n.rect-move .knobs:before, \n.rect-move .knobs:after, \n.rect-move .knobs span, \n.rect-move .knobs span:before, \n.rect-move .knobs span:after\n{\n    position: absolute;\n    top: 4px;\n    font-size: 10px;\n    font-weight: bold;\n    text-align: center;\n    line-height: 1;\n    border-radius: 2px;\n    transition: 0.3s ease all;\n}\n\n.rect-move .knobs:before\n{\n    content: attr(data-yes);\n    left: 4px;\n}\n\n.rect-move .knobs:after\n{\n    content: attr(data-no)\';\n    right: 4px;\n}\n\n.rect-move .knobs:before, \n.rect-move .knobs:after\n{\n    width: 27px;\n    height: 10px;\n    color: #4e4e4e;\n    padding: 9px 3px;\n    z-index: 1;\n}\n\n.rect-move .knobs span\n{\n    display: inline-block;\n    z-index: 2;\n}\n\n.rect-move .knobs span, \n.rect-move .knobs span:before, \n.rect-move .knobs span:after\n{\n    width: 20px;\n    height: 10px;\n    padding: 9px 4px;\n}\n\n.rect-move .knobs span:before, \n.rect-move .knobs span:after\n{\n    content: \'\';\n    top: 0;\n}\n\n.rect-move .knobs span:before\n{\n    left: -28px;\n    background-color: #F44336;\n}\n\n.rect-move .knobs span:after\n{\n    right: -42px;\n    background-color: #03A9F4;\n}\n\n.rect-move .checkbox:checked + .knobs span:before\n{\n    left:4px;\n}\n\n.rect-move .checkbox:checked + .knobs span:after\n{\n    right: -74px;\n}\n\n.rect-move .checkbox:checked ~ .layer\n{\n    background-color: #fcebeb;\n}\n/* Rectangle Hide  */\n.rect-hide .knobs:before, .rect-hide .knobs:after, .rect-hide .knobs span\n{\n    position: absolute;\n    top: 4px;\n    width: 20px;\n    height: 10px;\n    font-size: 10px;\n    font-weight: bold;\n    text-align: center;\n    line-height: 1;\n    padding: 9px 4px;\n    border-radius: 2px;\n    transition: 0.3s ease all;\n}\n\n.rect-hide .knobs:before, .rect-hide .knobs:after\n{\n    color: #4e4e4e;\n    z-index: 1;\n}\n\n.rect-hide .knobs:before\n{\n    content: attr(data-yes);\n    left: 4px;\n}\n\n.rect-hide .knobs:after\n{\n    content: attr(data-no);\n    right: 4px;\n}\n\n.rect-hide .knobs span\n{\n    width: 25px;\n    left: 37px;\n    background-color: #03A9F4;\n    z-index: 2;\n}\n\n.rect-hide .checkbox:checked + .knobs span\n{\n    left: 4px;\n    background-color: #F44336;\n}\n\n.rect-hide .checkbox:checked ~ .layer\n{\n    background-color: #fcebeb;\n}\n  </style>\n        <div class="button b2" role="switch" aria-label="CSS Toggle Button" aria-checked="true">\n          <input type="checkbox" class="checkbox" aria-label="CSS Toggle Button">\n          <div class="knobs">\n            <span></span>\n          </div>\n          <div class="layer"></div>\n        </div>\n  ';var b=function(s){function b(){e(this,b);var n=t(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));n.attachShadow({mode:"open"});var o=n.getAttribute("theme")||"slide";return a.includes(o)?n.shadowRoot.appendChild(l.content.cloneNode(!0)):n.shadowRoot.appendChild(i.content.cloneNode(!0)),n}return o(b,r),n(b,[{key:"connectedCallback",value:function(){var n=this.shadowRoot.querySelector(".button"),e=this.getAttribute("theme")||"slide",t=this.getAttribute("on-label")||"✔",o=this.getAttribute("off-label")||"✕";n.classList.add(e);var r=this.shadowRoot.querySelector(".knobs");if(r.setAttribute("data-yes",t),r.setAttribute("data-no",o),c.includes(e)){var a=document.createElement("span");a.setAttribute("data-yes",t),a.setAttribute("data-no",o),r.appendChild(a)}"rect-slide"===e&&(this.shadowRoot.querySelector("span").textContent=t)}}]),b}();window.customElements.define("css-toggle",b)}();
},{}]},{},["S3PC"], null)
//# sourceMappingURL=/css-toggle-component/css-toggle.97098857.map