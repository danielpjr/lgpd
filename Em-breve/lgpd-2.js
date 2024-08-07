/*! js-cookie v3.0.0-rc.1 | MIT */
!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self, function () { var n = e.Cookies, r = e.Cookies = t(); r.noConflict = function () { return e.Cookies = n, r } }()) }(this, function () { "use strict"; function e(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) e[r] = n[r] } return e } var t = { read: function (e) { return e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent) }, write: function (e) { return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) } }; return function n(r, o) { function i(t, n, i) { if ("undefined" != typeof document) { "number" == typeof (i = e({}, o, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)), i.expires && (i.expires = i.expires.toUTCString()), t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape), n = r.write(n, t); var c = ""; for (var u in i) i[u] && (c += "; " + u, !0 !== i[u] && (c += "=" + i[u].split(";")[0])); return document.cookie = t + "=" + n + c } } return Object.create({ set: i, get: function (e) { if ("undefined" != typeof document && (!arguments.length || e)) { for (var n = document.cookie ? document.cookie.split("; ") : [], o = {}, i = 0; i < n.length; i++) { var c = n[i].split("="), u = c.slice(1).join("="); '"' === u[0] && (u = u.slice(1, -1)); try { var f = t.read(c[0]); if (o[f] = r.read(u, f), e === f) break } catch (e) { } } return e ? o[e] : o } }, remove: function (t, n) { i(t, "", e({}, n, { expires: -1 })) }, withAttributes: function (t) { return n(this.converter, e({}, this.attributes, t)) }, withConverter: function (t) { return n(e({}, this.converter, t), this.attributes) } }, { attributes: { value: Object.freeze(o) }, converter: { value: Object.freeze(r) } }) }(t, { path: "/" }) });

document.addEventListener('DOMContentLoaded', function () {

    (function (document) {

        'use strict';

        var lgpdCookieName = window.location.host.replace(/[^0-9A-Z]/ig, '-') + '-lgpd-cookies-accepted';

        var lgpdCookiesAccepted = Cookies.get(lgpdCookieName) || 'not';

        if (lgpdCookiesAccepted != 'yes') {

            document.querySelector('body').insertAdjacentHTML('beforeend', `<div class="lgpd-overlay"
style="position: fixed; top:0; bottom: 0; left: 0; right: 0; background-color: #000; opacity: 0; z-index: 998; transition: opacity ease-in-out 0.7s;">
</div>
<div class="lgpd-container"
style="position: fixed; top: 1.5rem; bottom: 1.5rem; left: 1.5rem; right: 1.5rem; z-index: 999; display: flex; align-items: center; justify-content: center; font-family: sans-serif;font-size: 1rem; color: #333;">
<div class="lgpd-content"
    style="max-width: 600px; min-height: 100px; background-color: #f5f5f5; border: 1px solid #ccc; border-radius: 6px; padding: 2rem; box-shadow: 0 10px 20px black; transform: scale(0.1); opacity: 0.1; transition: all ease-in-out 0.7s;">
    <div style="font-size: 1.1rem; font-weight: bold;">Uso de cookies neste site</div>
    <div style="padding: .8rem 0 1rem 0; line-height: 22px;">
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

            <div style="padding-bottom: 1.5rem; line-height: 22px;">
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
                    <div style="padding: 10px 0; margin-top: 5px; border-top: 1px solid #ccc; line-height: 22px;">
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
                    <div style="padding: 10px 0; margin-top: 5px; border-top: 1px solid #ccc; line-height: 22px;">
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

                    Cookies.set(lgpdCookieName, 'yes', { expires: 360 })

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

});