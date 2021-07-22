/*! js-cookie v3.0.0-rc.1 | MIT */
!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self, function () { var n = e.Cookies, r = e.Cookies = t(); r.noConflict = function () { return e.Cookies = n, r } }()) }(this, function () { "use strict"; function e(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) e[r] = n[r] } return e } var t = { read: function (e) { return e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent) }, write: function (e) { return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) } }; return function n(r, o) { function i(t, n, i) { if ("undefined" != typeof document) { "number" == typeof (i = e({}, o, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)), i.expires && (i.expires = i.expires.toUTCString()), t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape), n = r.write(n, t); var c = ""; for (var u in i) i[u] && (c += "; " + u, !0 !== i[u] && (c += "=" + i[u].split(";")[0])); return document.cookie = t + "=" + n + c } } return Object.create({ set: i, get: function (e) { if ("undefined" != typeof document && (!arguments.length || e)) { for (var n = document.cookie ? document.cookie.split("; ") : [], o = {}, i = 0; i < n.length; i++) { var c = n[i].split("="), u = c.slice(1).join("="); '"' === u[0] && (u = u.slice(1, -1)); try { var f = t.read(c[0]); if (o[f] = r.read(u, f), e === f) break } catch (e) { } } return e ? o[e] : o } }, remove: function (t, n) { i(t, "", e({}, n, { expires: -1 })) }, withAttributes: function (t) { return n(this.converter, e({}, this.attributes, t)) }, withConverter: function (t) { return n(e({}, this.converter, t), this.attributes) } }, { attributes: { value: Object.freeze(o) }, converter: { value: Object.freeze(r) } }) }(t, { path: "/" }) });

document.addEventListener('DOMContentLoaded', function () {

    (function (document) {

        'use strict';

        var lgpdCookieName = window.location.host.replace(/[^0-9A-Z]/ig, '-') + '-lgpd-cookies-accepted';

        var lgpdCookiesAccepted = Cookies.get(lgpdCookieName) || 'not';

        if (lgpdCookiesAccepted != 'yes') {

            document.querySelector('body').insertAdjacentHTML('beforeend', `<div class="lgpd-container" style="position: fixed; bottom: 0; left: 0; right: 0; z-index: 999; display: flex; justify-content: center; font-family: sans-serif;font-size: 1rem; color: #333; min-width: 100%; background-color: #f5f5f5; border: 1px solid #ccc; padding: 0.5rem; box-shadow: 0 5px 10px black; transform: translateY(100%); transition: all ease-in-out 0.7s;">
                <div class="lgpd-content">
                    <div style="font-size: 0.9rem; font-weight: bold;">Uso de cookies neste site</div>
                    <div style="padding: 0.2rem 1rem 0 0; font-size: 0.9rem;">
                        Nosso website faz o uso de "cookies" para entregar anúncios específicos e também gerar uma experiência
                        completa em nosso site. Ao continuar, você concorda com a nossa Política de Privacidade.
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; justify-content: space-between; align-items: flex-end;">
                    <a href="" class="lgpd-accept-trigger" style="font-size: 0.9rem; text-decoration: none; color: #f5f5f5; background-color: #61a229; display: flex; align-items: center; justify-content: center; letter-spacing: 1px; padding: 2px 6px; border-radius: 4px;">
                        Eu concordo
                    </a>
                    <a href="https://lgpd.ml" target="_blank" style="color: #96c399; font-family: sans-serif; font-size: 0.7rem; letter-spacing: 1px; text-decoration: none;">by lgpd.ml</a>
                </div>
            </div>`)

            setTimeout(function () {

                var elementContainer = document.querySelector('.lgpd-container');
                var containerHeight = elementContainer.offsetHeight || elementContainer.clientHeight || 0;
                var currentBodyPaddingBottom = parseInt(document.querySelector('body').style.paddingBottom.replace(/[^0-9]/g, '') || 0);
        
                elementContainer.style.transform = 'translateY(0)';

                document.querySelector('body').style.paddingBottom = (containerHeight + currentBodyPaddingBottom) + 'px';

                document.querySelector('.lgpd-accept-trigger').addEventListener('click', function (ev) {

                    ev.preventDefault();

                    Cookies.set(lgpdCookieName, 'yes', { expires: 360 })

                    elementContainer.style.transform = 'translateY(100%)'

                    setTimeout(function () {
                        elementContainer.remove();
                    }, 500)
                })

            }, 100)
        }

    })(document);

});