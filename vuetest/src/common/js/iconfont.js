(function(window) {
    var svgSprite = '<svg><symbol id="icon-my" viewBox="0 0 1024 1024"><path d="M512.25 1012c-67.384 0-132.77-13.205-194.341-39.247-59.454-25.146-112.842-61.14-158.683-106.98-45.839-45.84-81.833-99.229-106.98-158.683C26.205 645.52 13 580.134 13 512.75c0-67.384 13.205-132.77 39.247-194.34 25.147-59.454 61.141-112.843 106.98-158.683 45.84-45.84 99.229-81.833 158.683-106.98C379.48 26.705 444.866 13.5 512.25 13.5c67.384 0 132.77 13.205 194.34 39.247 59.454 25.147 112.843 61.141 158.683 106.98 45.841 45.84 81.834 99.229 106.98 158.683 26.042 61.571 39.247 126.956 39.247 194.34 0 67.384-13.205 132.77-39.247 194.34-25.146 59.454-61.14 112.843-106.98 158.683-45.84 45.841-99.229 81.834-158.683 106.98C645.02 998.795 579.634 1012 512.25 1012zM512.25 77.5C272.252 77.5 77 272.752 77 512.75 77 752.748 272.252 948 512.25 948c239.998 0 435.25-195.252 435.25-435.25C947.5 272.752 752.248 77.5 512.25 77.5z"  ></path><path d="M512.25 518.957c-92.083 0-166.999-74.915-166.999-166.998 0-92.083 74.915-166.999 166.999-166.999 92.083 0 166.998 74.915 166.998 166.999C679.248 444.042 604.333 518.957 512.25 518.957zM512.25 238.961c-62.308 0-112.999 50.691-112.999 112.999 0 62.307 50.691 112.998 112.999 112.998s112.998-50.69 112.998-112.998C625.248 289.652 574.558 238.961 512.25 238.961z"  ></path><path d="M833.484 836.31c-0.175-0.437-18.011-44.085-66.205-86.905-64.469-57.277-150.273-86.32-255.029-86.32-105.941 0-192.439 29.665-257.092 88.171-46.55 42.124-63.937 84.528-64.099 84.944l-50.307-19.627c0.853-2.186 21.528-54.098 78.173-105.357 32.941-29.809 71.467-53.532 114.51-70.513 53.183-20.98 113.345-31.618 178.815-31.618 65.471 0 125.633 10.638 178.815 31.618 43.042 16.98 81.569 40.704 114.51 70.513 56.645 51.26 77.32 103.172 78.173 105.357l-50.307 19.627L833.484 836.31z"  ></path></symbol>' +
        '<symbol id="icon-myhome" viewBox="0 0 1024 1024"><path d="M510.98 87.52c-136.837 0-248.152 111.317-248.152 248.154 0 99.096 58.52 184.562 142.693 224.305C249.904 605.68 135.858 749.554 135.858 919.755c0 10.837 8.779 19.604 19.603 19.604 10.827 0 19.603-8.767 19.603-19.604 0-185.229 150.706-335.924 335.917-335.924 136.836 0 248.156-111.32 248.156-248.158C759.136 198.837 647.816 87.52 510.98 87.52zM510.98 544.624c-115.222 0-208.949-93.737-208.949-208.952 0-115.212 93.727-208.948 208.949-208.948 115.225 0 208.951 93.735 208.951 208.948C719.932 450.888 626.204 544.624 510.98 544.624zM738.518 621.482c-8.615-6.564-20.905-4.938-27.47 3.677-6.585 8.612-4.939 20.903 3.673 27.487 84.002 64.189 132.168 161.552 132.168 267.106 0 10.837 8.783 19.603 19.602 19.603 10.835 0 19.603-8.765 19.603-19.603C886.093 801.873 832.303 693.155 738.518 621.482z"  ></path></symbol>' +
        '<symbol id="icon-icondd1" viewBox="0 0 1024 1024"><path d="M722.446501 276.911774 305.293683 276.911774c-6.230911 0-11.273764 5.042853-11.273764 11.274788s5.042853 11.274788 11.273764 11.274788l417.152818 0c6.231935 0 11.274788-5.042853 11.274788-11.274788S728.678436 276.911774 722.446501 276.911774z"  ></path><path d="M722.446501 463.226157 305.293683 463.226157c-6.230911 0-11.273764 5.042853-11.273764 11.273764s5.042853 11.273764 11.273764 11.273764l417.152818 0c6.231935 0 11.274788-5.042853 11.274788-11.273764S728.678436 463.226157 722.446501 463.226157z"  ></path><path d="M583.410911 649.538493 305.293683 649.538493c-6.230911 0-11.273764 5.043876-11.273764 11.274788s5.042853 11.273764 11.273764 11.273764L583.410911 672.087045c6.230911 0 11.274788-5.042853 11.274788-11.273764S589.641823 649.538493 583.410911 649.538493z"  ></path><path d="M800.178887 62.389956 223.841579 62.389956c-49.92097 0-90.52576 40.605813-90.52576 90.524736l0 718.169593c0 49.919946 40.60479 90.52576 90.52576 90.52576l395.153782 0c0.36532 0 0.729617-0.021489 1.092891-0.056282 0.130983-0.01228 0.257873-0.034792 0.387833-0.052189 0.230244-0.029676 0.459464-0.061398 0.688685-0.105401 0.145309-0.027629 0.286526-0.064468 0.429789-0.099261 0.207731-0.050142 0.415462-0.099261 0.62217-0.160659 0.145309-0.041956 0.284479-0.093121 0.426719-0.141216 0.197498-0.067538 0.394996-0.137123 0.589424-0.215918 0.146333-0.059352 0.286526-0.12382 0.430812-0.189312 0.178055-0.081864 0.354064-0.163729 0.528026-0.254803 0.162706-0.083911 0.320295-0.176009 0.477884-0.268106 0.13917-0.080841 0.277316-0.162706 0.411369-0.248663 0.200568-0.12996 0.394996-0.268106 0.586354-0.408299 0.076748-0.058328 0.155543-0.113587 0.232291-0.173962 0.260943-0.201591 0.509606-0.414439 0.751107-0.639566 0.00307-0.001023 0.005117-0.00307 0.007163-0.005117l0.020466-0.01842c0.106424-0.101307 0.220011-0.195451 0.323365-0.299829l260.068154-241.243413c0.004093-0.004093 0.007163-0.00921 0.011256-0.01228 0.255827-0.237407 0.49835-0.48607 0.730641-0.74599 0.033769-0.036839 0.067538-0.072655 0.101307-0.109494 0.193405-0.224104 0.376577-0.455371 0.553609-0.694825 0.055259-0.073678 0.112564-0.146333 0.166799-0.222057 0.141216-0.201591 0.273223-0.411369 0.402159-0.62217 0.068562-0.112564 0.141216-0.225127 0.204661-0.338714 0.102331-0.180102 0.192382-0.367367 0.283456-0.554632 0.072655-0.149403 0.149403-0.295735 0.214894-0.448208 0.071631-0.162706 0.13303-0.329505 0.195451-0.496304 0.068562-0.181125 0.140193-0.360204 0.198521-0.543376 0.048095-0.146333 0.085958-0.295735 0.12689-0.444115 0.060375-0.211824 0.11768-0.424672 0.164752-0.639566 0.026606-0.12689 0.047072-0.255827 0.069585-0.38374 0.044002-0.24457 0.084934-0.48914 0.11154-0.734734 0.013303-0.110517 0.019443-0.222057 0.027629-0.332575 0.022513-0.270153 0.037862-0.538259 0.040932-0.809435 0-0.042979 0.007163-0.083911 0.007163-0.125867L890.68111 152.914692C890.682134 102.995769 850.07632 62.389956 800.178887 62.389956zM630.270149 924.511101 630.270149 788.023544c0-37.477566 30.498618-67.977207 67.977207-67.977207l152.441924 0L630.270149 924.511101zM868.132558 697.498808 698.247356 697.498808c-49.92097 0-90.526783 40.606837-90.526783 90.52576l0 151.037948L223.841579 939.062516c-37.47859 0-67.977207-30.498618-67.977207-67.977207L155.864372 152.914692c0-37.477566 30.498618-67.976184 67.977207-67.976184l576.337307 0c37.47859 0 67.953671 30.498618 67.953671 67.976184L868.132558 697.498808z"  ></path></symbol>' +
        '<symbol id="icon-changyonglogo40" viewBox="0 0 1024 1024"><path d="M517.741259 676.457586c-67.105351 3.637854-126.141932-36.759205-151.879106-91.833545-28.284183-60.517305-22.948665-120.268154 17.433044-173.59264 38.496779-50.837852 92.007507-71.033823 155.378813-63.46545 31.457456 3.75758 59.190077 16.672728 83.367733 37.193087 13.117762 11.140735 12.825097 16.119119-1.718131 24.465205-12.636808 7.255241-25.337061 14.395872-37.908378 21.765723-34.756595 20.361747-69.728084 40.370453-104.07945 61.402465-18.395976 11.256368-22.074761 29.214369-11.792581 47.845705 11.123338 20.149922 32.68747 24.840758 55.534827 11.631922 67.890226-39.261189 135.553279-78.912257 203.657376-117.804033 11.268648-6.433526 12.506848-12.979616 7.499811-23.883967-17.61724-38.361703-43.562145-69.872371-78.328973-93.444229-76.822666-52.086285-158.791539-60.431348-242.733347-20.86419-83.740216 39.473013-129.229247 108.788705-136.791479 200.144366-6.265704 75.734892 22.550599 139.857305 77.215616 192.627159 76.216869 73.571622 203.592908 85.148285 291.139823 26.002211 22.796192-15.395642 22.796192-15.395642 8.662287-38.911218-15.282055-25.418926-30.446429-30.143531-56.975643-17.425881C570.320779 670.340261 544.299125 678.157297 517.741259 676.457586z"  ></path><path d="M748.179582 568.833403c-1.26276-18.193361-11.128455-32.971949-19.642362-48.208978-2.7793-4.976338-7.238868-3.061732-11.218506-0.791016-15.604396 8.933463-31.160697 17.943674-46.883797 26.660196-6.683213 3.705392-7.865131 8.192589-4.001127 14.705933 8.954953 15.093766 17.844413 30.227442 26.429952 45.528939 3.730974 6.647397 8.205892 8.16803 14.644535 4.097318 9.402137-5.942339 19.108197-11.453866 28.184923-17.853623C743.767086 587.272357 748.511133 579.263963 748.179582 568.833403z"  ></path></symbol>' +
        '<symbol id="icon-search" viewBox="0 0 1030 1024"><path d="M738.618409 646.405992c96.606263 96.606263 192.944918 192.944918 290.889218 290.621611-31.310063 29.169204-62.352519 57.803193-93.662582 86.972397-93.662582-93.662582-190.001237-190.001237-286.875107-286.875107-104.099269 71.451169-215.691545 95.535833-336.917687 66.901844-96.87387-22.746627-175.015224-75.732887-233.621239-156.282708-120.690927-165.648966-98.747122-390.439162 42.81718-530.130212 149.860131-147.719272 377.861615-153.339027 534.947145-33.450922C814.08369 205.389036 876.436208 448.644141 738.618409 646.405992zM728.984544 407.700212C728.984544 230.008915 585.814598 86.036146 408.658514 86.036146 231.502431 86.036146 86.994448 230.276522 86.994448 407.164998c0 178.226513 143.972768 322.466888 321.664066 321.664066C587.152634 728.293849 728.984544 585.926725 728.984544 407.700212z"  ></path></symbol>' +
        '<symbol id="icon-3sousuo2" viewBox="0 0 1024 1024"><path d="M957.44 261.12c-7.68-12.8-23.04-15.36-35.84-10.24-12.8 7.68-15.36 23.04-10.24 35.84 38.4 69.12 58.88 148.48 58.88 227.84 0 253.44-207.36 460.8-460.8 460.8S51.2 765.44 51.2 512 258.56 51.2 512 51.2c76.8 0 151.04 17.92 217.6 56.32 12.8 7.68 28.16 2.56 35.84-10.24 7.68-12.8 2.56-28.16-10.24-35.84C680.96 20.48 596.48 0 512 0 230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512c0-89.6-23.04-176.64-66.56-250.88z m-366.08 84.48c-69.12-33.28-156.16-23.04-212.48 35.84-71.68 71.68-71.68 192 0 263.68 35.84 35.84 84.48 53.76 130.56 53.76 48.64 0 94.72-17.92 130.56-53.76 53.76-53.76 66.56-133.12 40.96-199.68l148.48-253.44-238.08 153.6z m15.36 261.12c-53.76 53.76-138.24 53.76-192 0-53.76-53.76-53.76-138.24 0-192 25.6-25.6 61.44-38.4 94.72-38.4 35.84 0 69.12 12.8 94.72 38.4 53.76 53.76 53.76 140.8 2.56 192z" fill="" ></path></symbol></svg>';
    var script = function() { var scripts = document.getElementsByTagName("script"); return scripts[scripts.length - 1] }();
    var shouldInjectCss = script.getAttribute("data-injectcss");
    var ready = function(fn) {
        if (document.addEventListener) {
            if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) { setTimeout(fn, 0) } else {
                var loadFn = function() {
                    document.removeEventListener("DOMContentLoaded", loadFn, false);
                    fn()
                };
                document.addEventListener("DOMContentLoaded", loadFn, false)
            }
        } else if (document.attachEvent) { IEContentLoaded(window, fn) }

        function IEContentLoaded(w, fn) {
            var d = w.document,
                done = false,
                init = function() {
                    if (!done) {
                        done = true;
                        fn()
                    }
                };
            var polling = function() {
                try { d.documentElement.doScroll("left") } catch (e) { setTimeout(polling, 50); return }
                init()
            };
            polling();
            d.onreadystatechange = function() {
                if (d.readyState == "complete") {
                    d.onreadystatechange = null;
                    init()
                }
            }
        }
    };
    var before = function(el, target) { target.parentNode.insertBefore(el, target) };
    var prepend = function(el, target) { if (target.firstChild) { before(el, target.firstChild) } else { target.appendChild(el) } };

    function appendSvg() {
        var div, svg;
        div = document.createElement("div");
        div.innerHTML = svgSprite;
        svgSprite = null;
        svg = div.getElementsByTagName("svg")[0];
        if (svg) {
            svg.setAttribute("aria-hidden", "true");
            svg.style.position = "absolute";
            svg.style.width = 0;
            svg.style.height = 0;
            svg.style.overflow = "hidden";
            prepend(svg, document.body)
        }
    }
    if (shouldInjectCss && !window.__iconfont__svg__cssinject__) { window.__iconfont__svg__cssinject__ = true; try { document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>") } catch (e) { console && console.log(e) } }
    ready(appendSvg)
})(window)