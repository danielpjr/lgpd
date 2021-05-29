/*! js-cookie v3.0.0-rc.1 | MIT */
!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self, function () { var n = e.Cookies, r = e.Cookies = t(); r.noConflict = function () { return e.Cookies = n, r } }()) }(this, function () { "use strict"; function e(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) e[r] = n[r] } return e } var t = { read: function (e) { return e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent) }, write: function (e) { return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) } }; return function n(r, o) { function i(t, n, i) { if ("undefined" != typeof document) { "number" == typeof (i = e({}, o, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)), i.expires && (i.expires = i.expires.toUTCString()), t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape), n = r.write(n, t); var c = ""; for (var u in i) i[u] && (c += "; " + u, !0 !== i[u] && (c += "=" + i[u].split(";")[0])); return document.cookie = t + "=" + n + c } } return Object.create({ set: i, get: function (e) { if ("undefined" != typeof document && (!arguments.length || e)) { for (var n = document.cookie ? document.cookie.split("; ") : [], o = {}, i = 0; i < n.length; i++) { var c = n[i].split("="), u = c.slice(1).join("="); '"' === u[0] && (u = u.slice(1, -1)); try { var f = t.read(c[0]); if (o[f] = r.read(u, f), e === f) break } catch (e) { } } return e ? o[e] : o } }, remove: function (t, n) { i(t, "", e({}, n, { expires: -1 })) }, withAttributes: function (t) { return n(this.converter, e({}, this.attributes, t)) }, withConverter: function (t) { return n(e({}, this.converter, t), this.attributes) } }, { attributes: { value: Object.freeze(o) }, converter: { value: Object.freeze(r) } }) }(t, { path: "/" }) });

/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return n={134:function(t,e,n){"use strict";n.d(e,{default:function(){return r}});var e=n(279),i=n.n(e),e=n(370),a=n.n(e),e=n(817),o=n.n(e);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function e(t){!function(t){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this.resolveOptions(t),this.initSelection()}var t,n,r;return t=e,(n=[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var t="rtl"===document.documentElement.getAttribute("dir");this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";t=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(t,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var t=this,e=this.createFakeElement();this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(e),this.selectedText=o()(e),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var e;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==c(t)||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}])&&u(t.prototype,n),r&&u(t,r),e}();function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=p(n);return t=r?(t=p(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==s(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){t="data-clipboard-".concat(t);if(e.hasAttribute(t))return e.getAttribute(t)}var r=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(o,i());var t,e,n,r=d(o);function o(t,e){var n;return function(t){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this),(n=r.call(this)).resolveOptions(e),n.listenClick(t),n}return t=o,n=[{key:"isSupported",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof t?[t]:t,e=!!document.queryCommandSupported;return t.forEach(function(t){e=e&&!!document.queryCommandSupported(t)}),e}}],(e=[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===s(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=a()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){t=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(t){return y("action",t)}},{key:"defaultTarget",value:function(t){t=y("target",t);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(t){return y("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}])&&f(t.prototype,e),n&&f(t,n),o}()},828:function(t){var e;"undefined"==typeof Element||Element.prototype.matches||((e=Element.prototype).matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector),t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,n){var a=n(828);function i(t,e,n,r,o){var i=function(e,n,t,r){return function(t){t.delegateTarget=a(t.target,n),t.delegateTarget&&r.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,o),{destroy:function(){t.removeEventListener(n,i,o)}}}t.exports=function(t,e,n,r,o){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,r,o)}))}},879:function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var l=n(879),s=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!l.string(e))throw new TypeError("Second argument must be a String");if(!l.fn(n))throw new TypeError("Third argument must be a Function");if(l.node(t))return c=e,u=n,(a=t).addEventListener(c,u),{destroy:function(){a.removeEventListener(c,u)}};if(l.nodeList(t))return r=t,o=e,i=n,Array.prototype.forEach.call(r,function(t){t.addEventListener(o,i)}),{destroy:function(){Array.prototype.forEach.call(r,function(t){t.removeEventListener(o,i)})}};if(l.string(t))return t=t,e=e,n=n,s(document.body,t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var r,o,i,a,c,u}},817:function(t){t.exports=function(t){var e,n="SELECT"===t.nodeName?(t.focus(),t.value):"INPUT"===t.nodeName||"TEXTAREA"===t.nodeName?((e=t.hasAttribute("readonly"))||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),e||t.removeAttribute("readonly"),t.value):(t.hasAttribute("contenteditable")&&t.focus(),n=window.getSelection(),(e=document.createRange()).selectNodeContents(t),n.removeAllRanges(),n.addRange(e),n.toString());return n}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},o={},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r(134).default;function r(t){if(o[t])return o[t].exports;var e=o[t]={exports:{}};return n[t](e,e.exports,r),e.exports}var n,o});

(function (document) {

    'use strict';

    new ClipboardJS('.script .content .copy');

    document.querySelectorAll('section.script .left').forEach(function (el) {
        el.addEventListener('click', function (ev) {
            ev.preventDefault()
            this.style.display = 'none';
            if (this.classList.contains('copy')) {
                this.parentNode.querySelector('.copied').style.display = 'flex';
            } else {
                this.parentNode.querySelector('.copy').style.display = 'flex';
            }
        })
    })

    // Apartir daqui está ok

    var lgpdCookiesAccepted = Cookies.get('lgpd-cookies-accepted') || 'not';

    if (lgpdCookiesAccepted != 'yes') {

        document.querySelector('body').insertAdjacentHTML('beforeend', `<div class="lgpd-overlay"
style="position: absolute; top:0; bottom: 0; left: 0; right: 0; background-color: #000; opacity: 0; z-index: 998; transition: opacity ease-in-out 0.7s;">
</div>
<div class="lgpd-container"
style="position: absolute; top: 1.5rem; bottom: 1.5rem; left: 1.5rem; right: 1.5rem; z-index: 999; display: flex; align-items: center; justify-content: center; font-family: sans-serif;font-size: 1rem; color: #333;">
<div class="lgpd-content"
    style="max-width: 600px; min-height: 100px; background-color: #f5f5f5; border: 1px solid #ccc; border-radius: 6px; padding: 2rem; box-shadow: 0 10px 20px black; transform: scale(0.1); opacity: 0.1; transition: all ease-in-out 0.7s;">
    <div style="font-size: 1.1rem; font-weight: bold;">Uso de cookies neste site</div>
    <div style="padding: .8rem 0 1rem 0;">
        Nosso website faz o uso de "cookies" para entregar anúncios específicos e também gerar uma experiência
        completa em nosso site. Ao continuar, você concorda com a nossa Política de Privacidade.
    </div>
    <div
        style="height: 36px; display: flex; align-items: center; justify-content: space-between; letter-spacing: 1px;">
        <div>
            <a href="" class="lgpd-accept-trigger"
                style="text-decoration: none; color: #f5f5f5; display: inline-block; background-color: #61a229; height: 36px; display: flex; align-items: center; padding: 0 12px; border-radius: 4px;">
                Eu concordo
            </a>
        </div>
        <div>
            <a href="" class="lgpd-more-options-btn" style="text-decoration: none; color: #6c6c6c;">
                <span>[+]</span> opções
            </a>
        </div>
    </div>

    <div class="lgpd-more-options-slide"
        style="overflow: hidden; height: 0; -webkit-transition: height 0.5s ease-in-out; -moz-transition: height 0.5s ease-in-out; -o-transition: height 0.5s ease-in-out; transition: height 0.5s ease-in-out;">

        <div style="padding-top: 2.5rem;">

            <div style="font-weight: bold; padding-bottom: .5rem;">Visão geral sobre a privacidade</div>

            <div style="padding-bottom: 1.5rem;">
                Este site usa cookies para melhorar sua experiência enquanto você navega pelo site. Destes, os
                cookies
                que são categorizados como necessários são armazenados no seu navegador, pois são essenciais
                para o
                funcionamento das funcionalidades básicas do site. Também usamos cookies de terceiros que nos
                ajudam a
                analisar e entender como você usa este site. Esses cookies serão armazenados em seu navegador
                apenas com
                o seu consentimento. Você também tem a opção de cancelar esses cookies. Mas desativar alguns
                desses
                cookies pode afetar sua experiência de navegação.
            </div>

            <div style="border: 1px solid #ccc; border-radius: 4px; padding: 4px 10px; margin: 10px 0 15px 0;">
                <div style="display: flex; justify-content: space-between;">
                    <div class="lgpd-cookie-type-trigger"
                        style="display: flex; align-items: center; cursor: pointer;">
                        <svg width="14" height="14" fill="#777" viewBox="0 0 14 14"
                            style="-webkit-transition: all 0.5s ease-in-out; -moz-transition: all 0.5s ease-in-out; -o-transition: all 0.5s ease-in-out; transition: all 0.5s ease-in-out;">
                            <path
                                d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                        <span style="padding-left: 10px;">
                            Essenciais
                            <small style="color: #6c6c6c;"> --- sempre ativo</small>
                        </span>
                    </div>
                    <svg style="height: 24px; width: 24px;" fill="#61a229" viewBox="0 0 16 16">
                        <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                    </svg>
                </div>
                <div class="lgpd-cookie-type-slide" state="collapsed"
                    style="height: 0; overflow: hidden; -webkit-transition: height 0.5s ease-in-out; -moz-transition: height 0.5s ease-in-out; -o-transition: height 0.5s ease-in-out; transition: height 0.5s ease-in-out;">
                    <div style="padding: 10px 0; margin-top: 5px; border-top: 1px solid #ccc;">
                        Os cookies necessários são absolutamente essenciais para o funcionamento adequado do
                        site. Esta
                        categoria inclui apenas cookies que garantem funcionalidades básicas e recursos de
                        segurança do
                        site.
                        Esses cookies não armazenam nenhuma informação pessoal.
                    </div>
                </div>
            </div>

            <div style="border: 1px solid #ccc; border-radius: 4px; padding: 4px 10px;">
                <div style="display: flex; justify-content: space-between;">
                    <div class="lgpd-cookie-type-trigger"
                        style="display: flex; align-items: center; cursor: pointer;">
                        <svg width="14" height="14" fill="#777" viewBox="0 0 14 14"
                            style="-webkit-transition: all 0.5s ease-in-out; -moz-transition: all 0.5s ease-in-out; -o-transition: all 0.5s ease-in-out; transition: all 0.5s ease-in-out;">
                            <path
                                d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                        <span style="padding-left: 10px;">Não essenciais</span>
                    </div>
                    <div class="lgpd-toggle-switch" style="cursor: pointer;">
                        <svg class="lgpd-toggle-switch-enabled"
                            style="height: 24px; width: 24px; display: none;" fill="#61a229"
                            viewBox="0 0 16 16">
                            <path
                                d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                        </svg>
                        <svg class="lgpd-toggle-switch-disabled"
                            style="height: 24px; width: 24px; transform: rotate(180deg); cursor: pointer;"
                            fill="#6d6c6c" viewBox="0 0 16 16">
                            <path
                                d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                        </svg>
                    </div>
                </div>
                <div class="lgpd-cookie-type-slide" state="collapsed"
                    style="height: 0; overflow: hidden; -webkit-transition: height 0.5s ease-in-out; -moz-transition: height 0.5s ease-in-out; -o-transition: height 0.5s ease-in-out; transition: height 0.5s ease-in-out;">
                    <div style="padding: 10px 0; margin-top: 5px; border-top: 1px solid #ccc;">
                        Quaisquer cookies que podem não ser privilegiados para o funcionamento do site e sejam
                        usados
                        especificamente para coletar dados pessoais do usuário por meio de análises, conteúdo e
                        outros
                        conteúdos
                        incorporados são denominados cookies não informados. É obrigatório obter o consentimento
                        do
                        usuário
                        antes de executar esses cookies no seu site.
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`)

        setTimeout(function () {
            var notEssentilAuthorized = true;
            var moreOptionsSliding = false;
            var cookieTypeSlindg = false;
            var elementOverlay = document.querySelector('.lgpd-overlay');
            var elementContainer = document.querySelector('.lgpd-container');
            var elementContent = document.querySelector('.lgpd-content');

            elementOverlay.style.opacity = '0.7'
            elementContent.style.opacity = '1'
            elementContent.style.transform = 'scale(1)'

            document.querySelector('.lgpd-accept-trigger').addEventListener('click', function (ev) {

                ev.preventDefault();

                Cookies.set('lgpd-cookies-accepted', 'yes', { expires: 360 })

                elementOverlay.style.opacity = '0'
                elementContent.style.opacity = '0'
                elementContent.style.transform = 'scale(0)'

                setTimeout(function () {
                    elementOverlay.remove();
                    elementContainer.remove();
                }, 500)
            })

            document.querySelectorAll('.lgpd-cookie-type-trigger').forEach(function (el) {

                el.addEventListener('click', function (ev) {

                    if (false == cookieTypeSlindg) {

                        cookieTypeSlindg = true;

                        var slide = this.parentNode.parentNode.querySelector('.lgpd-cookie-type-slide');
                        var state = slide.getAttribute('state') || ''
                        var arrow = this.querySelector('svg')

                        if (state == 'collapsed') {

                            slide.style.height = slide.querySelector('div:first-child').clientHeight + 'px'
                            slide.setAttribute('state', 'expanded')
                            arrow.style.transform = 'rotate(90deg)'

                        } else {

                            slide.style.height = '0px'
                            slide.setAttribute('state', 'collapsed')
                            arrow.style.transform = 'rotate(0deg)'
                        }

                        setTimeout(function () { cookieTypeSlindg = false }, 600)
                    }
                })
            })

            document.querySelectorAll('.lgpd-toggle-switch svg').forEach(function (el) {

                el.addEventListener('click', function (ev) {

                    var classNameClicked = this.getAttribute('class') || ''
                    var classNameToShow = '.lgpd-toggle-switch-'

                    this.style.display = 'none';

                    notEssentilAuthorized = classNameClicked.indexOf('-enabled') == -1;

                    classNameToShow += notEssentilAuthorized ? 'enabled' : 'disabled';

                    this.parentNode.querySelector(classNameToShow).style.display = 'inherit';
                })
            })

            document.querySelector('.lgpd-more-options-btn').addEventListener('click', function (ev) {

                ev.preventDefault()

                if (false == moreOptionsSliding) {

                    moreOptionsSliding = true

                    var symbolContainer = ev.currentTarget.querySelector('span')
                    var currentSymbol = symbolContainer.textContent || symbolContainer.innerText
                    var slide = document.querySelector('.lgpd-more-options-slide')
                    var slideContent = slide.querySelector('div:first-child')

                    if (currentSymbol == '[+]') {

                        slide.style.height = slideContent.clientHeight + 'px'
                        symbolContainer.innerText = '[-]'

                    } else {

                        slide.style.height = slideContent.clientHeight + 'px'
                        symbolContainer.innerText = '[+]'
                        setTimeout(function () { slide.style.height = '0px' }, 100)
                    }

                    setTimeout(function () {
                        moreOptionsSliding = false
                        if (currentSymbol == '[+]') {
                            slide.style.height = 'auto';
                        }
                    }, 600)
                }
            })
        }, 100)
    }

})(document);
