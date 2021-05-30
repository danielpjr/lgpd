/*! js-cookie v3.0.0-rc.1 | MIT */
!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self, function () { var n = e.Cookies, r = e.Cookies = t(); r.noConflict = function () { return e.Cookies = n, r } }()) }(this, function () { "use strict"; function e(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) e[r] = n[r] } return e } var t = { read: function (e) { return e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent) }, write: function (e) { return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) } }; return function n(r, o) { function i(t, n, i) { if ("undefined" != typeof document) { "number" == typeof (i = e({}, o, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)), i.expires && (i.expires = i.expires.toUTCString()), t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape), n = r.write(n, t); var c = ""; for (var u in i) i[u] && (c += "; " + u, !0 !== i[u] && (c += "=" + i[u].split(";")[0])); return document.cookie = t + "=" + n + c } } return Object.create({ set: i, get: function (e) { if ("undefined" != typeof document && (!arguments.length || e)) { for (var n = document.cookie ? document.cookie.split("; ") : [], o = {}, i = 0; i < n.length; i++) { var c = n[i].split("="), u = c.slice(1).join("="); '"' === u[0] && (u = u.slice(1, -1)); try { var f = t.read(c[0]); if (o[f] = r.read(u, f), e === f) break } catch (e) { } } return e ? o[e] : o } }, remove: function (t, n) { i(t, "", e({}, n, { expires: -1 })) }, withAttributes: function (t) { return n(this.converter, e({}, this.attributes, t)) }, withConverter: function (t) { return n(e({}, this.converter, t), this.attributes) } }, { attributes: { value: Object.freeze(o) }, converter: { value: Object.freeze(r) } }) }(t, { path: "/" }) });

(function (document) {

    'use strict';

    var lgpdCookiesAccepted = Cookies.get('lgpd-cookies-accepted') || 'not';

    if (lgpdCookiesAccepted != 'yes') {

        document.querySelector('body').insertAdjacentHTML('beforeend', `<div class="lgpd-overlay" style="position: fixed; top:0; right: 0; bottom: 0; left: 0; background-color: #000; opacity: 0; z-index: 998; transition: opacity ease-in-out 0.7s;"></div>
            <div class="lgpd-container" style="position: fixed; top: 1.5rem; bottom: 1.5rem; left: 1.5rem; right: 1.5rem; z-index: 999; display: flex; align-items: center; justify-content: center; font-family: sans-serif;font-size: 1rem; color: #333;">
            <div class="lgpd-content" style="max-width: 600px; min-height: 100px; background-color: #f5f5f5; border: 1px solid #ccc; border-radius: 6px; padding: 2rem; box-shadow: 0 10px 20px black; transform: scale(0.1); opacity: 0.1; transition: all ease-in-out 0.7s;">
                <div style="font-size: 1.1rem; font-weight: bold;">Uso de cookies neste site</div>
                <div style="padding: .8rem 0 1rem 0; line-height: 22px;">
                    Este site faz uso cookies para melhorar sua experiência enquanto você navega pelo site.
                    Os cookies são necessários e armazenados no seu navegador, pois são essenciais para as funcionalidades básicas do site. Também usamos cookies de terceiros que nos ajudam a analisar e entender como você usa este site. 
                    Esses cookies serão armazenados em seu navegador apenas com o seu consentimento. 
                    Você também tem a opção de não autorizar esses cookies. 
                    Porém, a não autorização de cookies pode afetar sua experiência de navegação.
                </div>
                <div style="height: 36px; display: flex; align-items: center; justify-content: space-between; letter-spacing: 1px;">
                    <div>
                        <a href="" class="lgpd-accept-trigger" style="text-decoration: none; color: #f5f5f5; display: inline-block; background-color: #61a229; height: 36px; display: flex; align-items: center; padding: 0 12px; border-radius: 4px;">
                            Eu concordo
                        </a>
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
            
        }, 100)
    }

})(document);
