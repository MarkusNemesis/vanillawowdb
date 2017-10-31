function $(C) {
    if (arguments.length > 1) {
        var D = [];
        for (var B = 0, A = arguments.length; B < A; ++B) {
            D.push($(arguments[B]))
        }
        return D
    }
    if (typeof C == "string") {
        C = ge(C)
    }
    return C
}

function $E(A) {
    if (!A) {
        A = event
    }
    A._button = A.which ? A.which : A.button;
    A._target = A.target ? A.target : A.srcElement;
    return A
}

function $A(B) {
    var D = [];
    for (var C = 0, A = B.length; C < A; ++C) {
        D.push(B[C])
    }
    return D
}
Function.prototype.bind = function () {
    var A = this,
        C = $A(arguments),
        B = C.shift();
    return function () {
        return A.apply(B, C.concat($A(arguments)))
    }
};

function strcmp(B, A) {
    if (B == A) {
        return 0
    }
    if (B == null) {
        return -1
    }
    if (A == null) {
        return 1
    }
    return B < A ? -1 : 1
}

function trim(A) {
    return A.replace(/(^\s*|\s*$)/g, "")
}

function rtrim(B, C) {
    var A = B.length;
    while (--A > 0 && B.charAt(A) == C) {}
    B = B.substring(0, A + 1);
    if (B == C) {
        B = ""
    }
    return B
}

function sprintf(C) {
    for (var B = 1, A = arguments.length; B < A; ++B) {
        C = C.replace("$" + B, arguments[B])
    }
    return C
}

function str_replace(C, B, A) {
    while (C.indexOf(B) != -1) {
        C = C.replace(B, A)
    }
    return C
}

function urlencode(A) {
    A = encodeURIComponent(A);
    A = str_replace(A, "+", "%2B");
    return A
}

function number_format(A) {
    A = "" + parseInt(A);
    if (A.length <= 3) {
        return A
    }
    return number_format(A.substr(0, A.length - 3)) + "," + A.substr(A.length - 3)
}

function in_array(B, E, F, D) {
    if (B == null) {
        return -1
    }
    if (F) {
        return in_arrayf(B, E, F, D)
    }
    for (var C = D || 0, A = B.length; C < A; ++C) {
        if (B[C] == E) {
            return C
        }
    }
    return -1
}

function in_arrayf(B, E, F, D) {
    for (var C = D || 0, A = B.length; C < A; ++C) {
        if (F(B[C]) == E) {
            return C
        }
    }
    return -1
}

function array_walk(C, F, B) {
    var E;
    for (var D = 0, A = C.length; D < A; ++D) {
        E = F(C[D], B, C, D);
        if (E != null) {
            C[D] = E
        }
    }
}

function array_apply(C, F, B) {
    var E;
    for (var D = 0, A = C.length; D < A; ++D) {
        F(C[D], B, C, D)
    }
}

function ge(A) {
    return document.getElementById(A)
}

function gE(A, B) {
    return A.getElementsByTagName(B)
}

function ce(C, B) {
    var A = document.createElement(C);
    if (B) {
        cOr(A, B)
    }
    return A
}

function de(A) {
    A.parentNode.removeChild(A)
}

function ae(A, B) {
    return A.appendChild(B)
}

function ct(A) {
    return document.createTextNode(A)
}

function ae(a, b) {
    return a.appendChild(b)
}
function aef(a, b) {
    return a.insertBefore(b, a.firstChild)
}
function ee(a, b) {
    if (!b) {
        b = 0
    }
    while (a.childNodes[b]) {
        a.removeChild(a.childNodes[b])
    }
}
function ct(a) {
    return document.createTextNode(a)
}
function st(a, b) {
    if (a.firstChild && a.firstChild.nodeType == 3) {
        a.firstChild.nodeValue = b
    } else {
        aef(a, ct(b))
    }
}
function nw(a) {
    a.style.whiteSpace = "nowrap"
}

function rf() {
    return false
}

function rf2(A) {
    A = $E(A);
    if (A.ctrlKey || A.shiftKey || A.altKey || A.metaKey) {
        return
    }
    return false
}

function tb() {
    this.blur()
}

function ac(C) {
    var B = 0,
        A = 0;
    while (C) {
        B += C.offsetLeft;
        A += C.offsetTop;
        C = C.offsetParent
    }
    return [B, A]
}

function aE(B, C, A) {
    if (Browser.ie) {
        B.attachEvent("on" + C, A)
    } else {
        B.addEventListener(C, A, false)
    }
}

function dE(B, C, A) {
    if (Browser.ie) {
        B.detachEvent("on" + C, A)
    } else {
        B.removeEventListener(C, A, false)
    }
}

function sp(A) {
    if (!A) {
        A = event
    }
    if (Browser.ie) {
        A.cancelBubble = true
    } else {
        A.stopPropagation()
    }
}

function sc(F, G, B, D, E) {
    var C = new Date();
    var A = F + "=" + escape(B) + "; ";
    C.setDate(C.getDate() + G);
    A += "expires=" + C.toUTCString() + "; ";
    if (D) {
        A += "path=" + D + "; "
    }
    if (E) {
        A += "domain=" + E + "; "
    }
    document.cookie = A
}

function dc(A) {
    sc(A, -1)
}

function gc(D) {
    var A, E;
    if (!D) {
        var B = [];
        E = document.cookie.split("; ");
        for (var C = 0; C < E.length; ++C) {
            A = E[C].split("=");
            B[A[0]] = unescape(A[1])
        }
        return B
    } else {
        A = document.cookie.indexOf(D + "=");
        if (A != -1) {
            if (A == 0 || document.cookie.substring(A - 2, A) == "; ") {
                A += D.length + 1;
                E = document.cookie.indexOf("; ", A);
                if (E == -1) {
                    E = document.cookie.length
                }
                return unescape(document.cookie.substring(A, E))
            }
        }
    }
    return null
}

function ns(A) {
    A.onmousedown = A.onselectstart = A.ondragstart = rf;
    if (Browser.ie) {
        A.onfocus = tb
    }
}

function cO(C, A) {
    for (var B in A) {
        C[B] = A[B]
    }
}

function cOr(C, A) {
    for (var B in A) {
        if (typeof A[B] == "object") {
            if (!C[B]) {
                C[B] = {}
            }
            cOr(C[B], A[B])
        } else {
            C[B] = A[B]
        }
    }
}
var Browser = {
    ie: !! (window.attachEvent && !window.opera),
    opera: !! window.opera,
    safari: navigator.userAgent.indexOf("Safari") != -1,
    gecko: navigator.userAgent.indexOf("Gecko") != -1 && navigator.userAgent.indexOf("KHTML") == -1
};
Browser.ie7 = Browser.ie && navigator.userAgent.indexOf("MSIE 7.0") != -1;
Browser.ie6 = Browser.ie && navigator.userAgent.indexOf("MSIE 6.0") != -1 && !Browser.ie7;
navigator.userAgent.match(/Gecko\/([0-9]+)/);
Browser.geckoVersion = parseInt(RegExp.$1) | 0;
var OS = {
    windows: navigator.appVersion.indexOf("Windows") != -1,
    mac: navigator.appVersion.indexOf("Macintosh") != -1,
    linux: navigator.appVersion.indexOf("Linux") != -1
};

function g_getWindowSize() {
    var B = 0,
        A = 0;
    if (typeof window.innerWidth == "number") {
        B = window.innerWidth;
        A = window.innerHeight
    } else {
        if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
            B = document.documentElement.clientWidth;
            A = document.documentElement.clientHeight
        } else {
            if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
                B = document.body.clientWidth;
                A = document.body.clientHeight
            }
        }
    }
    return {
        w: B,
        h: A
    }
}

function g_getScroll() {
    var A = 0,
        B = 0;
    if (typeof (window.pageYOffset) == "number") {
        A = window.pageXOffset;
        B = window.pageYOffset
    } else {
        if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
            A = document.body.scrollLeft;
            B = document.body.scrollTop
        } else {
            if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                A = document.documentElement.scrollLeft;
                B = document.documentElement.scrollTop
            }
        }
    }
    return {
        x: A,
        y: B
    }
}

function g_getCursorPos(C) {
    var B, D;
    if (window.innerHeight) {
        B = C.pageX;
        D = C.pageY
    } else {
        var A = g_getScroll();
        B = C.clientX + A.x;
        D = C.clientY + A.y
    }
    return {
        x: B,
        y: D
    }
}

function g_scrollTo(C, B) {
    var M, K = g_getWindowSize(),
        L = g_getScroll(),
        I = K.w,
        E = K.h,
        G = L.x,
        D = L.y;
    C = $(C);
    if (B == null) {
        B = []
    } else {
        if (typeof B == "number") {
            B = [B]
        }
    }
    M = B.length;
    if (M == 0) {
        B[0] = B[1] = B[2] = B[3] = 0
    } else {
        if (M == 1) {
            B[1] = B[2] = B[3] = B[0]
        } else {
            if (M == 2) {
                B[2] = B[0];
                B[3] = B[1]
            } else {
                if (M == 3) {
                    B[3] = B[1]
                }
            }
        }
    }
    M = ac(C);
    var A = M[0] - B[3];
    var H = M[1] - B[0];
    var J = M[0] + C.offsetWidth + B[1];
    var F = M[1] + C.offsetHeight + B[2];
    if (J - A > I || A < G) {
        G = A
    } else {
        if (J - I > G) {
            G = J - I
        }
    }
    if (F - H > E || H < D) {
        D = H
    } else {
        if (F - E > D) {
            D = F - E
        }
    }
    scrollTo(G, D)
}

function g_setTextNodes(C, B) {
    if (C.nodeType == 3) {
        C.nodeValue = B
    } else {
        for (var A = 0; A < C.childNodes.length; ++A) {
            g_setTextNodes(C.childNodes[A], B)
        }
    }
}

function g_getTextContent(C) {
    var A = "";
    for (var B = 0; B < C.childNodes.length; ++B) {
        if (C.childNodes[B].nodeValue) {
            A += C.childNodes[B].nodeValue
        } else {
            if (C.childNodes[B].nodeName == "BR") {
                if (Browser.ie) {
                    A += "\r"
                } else {
                    A += "\n"
                }
            }
        }
        A += g_getTextContent(C.childNodes[B])
    }
    return A
}

function g_setSelectedLink(C, B) {
    if (!g_setSelectedLink.groups) {
        g_setSelectedLink.groups = {}
    }
    var A = g_setSelectedLink.groups;
    if (A[B]) {
        A[B].className = ""
    }
    C.className = "selected";
    A[B] = C
}

function g_toggleDisplay(A) {
    if (A.style.display == "none") {
        A.style.display = "";
        return true
    } else {
        A.style.display = "none";
        return false
    }
}

function g_initHeader(B) {
    var H = ce("dl");
    g_expandSite()
    for (var G = 0, J = mn_path.length; G < J; ++G) {
        var E = ce("dt");
        var L = ce("a");
        var I = ce("ins");
        var F = ce("big");
        var D = ce("span");
        if (mn_path[G][0] != B) {
            L.menu = mn_path[G][3];
            L.onmouseover = Menu.show;
            L.onmouseout = Menu.hide
        }
        if (mn_path[G][2]) {
            L.href = mn_path[G][2]
        } else {
            L.href = "javascript:;";
            ns(L);
            L.style.cursor = "default"
        }
        if (B != null && mn_path[G][0] == B) {
            L.className = "selected"
        }
        ae(F, ct(mn_path[G][1].charAt(0)));
        ae(I, F);
        ae(I, ct(mn_path[G][1].substr(1)));
        ae(L, I);
        ae(L, D);
        ae(E, L);
        ae(H, E)
    }
    ae(ge("toptabs-right-generic"), H);
    var A = ge("menu-buttons-generic");
    if (B != null && B >= 0 && B < mn_path.length) {
        switch (B) {
        case 0:
            Menu.addButtons(A, Menu.explode(mn_database));
            break;
        case 1:
            Menu.addButtons(A, mn_tools);
            break;
        case 2:
            Menu.addButtons(A, Menu.explode(mn_more));
            break;
        }
    } else {
        ae(A, ct(String.fromCharCode(160)))
    }
    g_initLanguageChanger();
    var M = ge("live-search-generic");
    var K = M.previousSibling;
    var C = M.parentNode;
    ns(K);
    K.onclick = function () {
        this.parentNode.onsubmit()
    };
    if (M.value == "") {
        M.className = "search-database"
    }
    M.onmousemove = function () {
        if (trim(this.value) != "") {
            M.className = ""
        }
    };
    M.onfocus = function () {
        M.className = ""
    };
    M.onblur = function () {
        if (trim(this.value) == "") {
            M.className = "search-database"
        }
    };
    C.onsubmit = function () {
        var N = this.elements[0].value;
        if (trim(N) == "") {
            return false
        }
        this.submit()
    }
}

function g_initLanguageChanger() {
    var A = ge("language-changer");
    if (!A) {
        return
    }
    A.menu = [[0, "English", (g_locale.id != 0 ? "?locale=0" : null)] /*,  [NOTE] deactivated [0, "Русский", (g_locale.id != 8 ? "?locale=8" : null)]*/ ];
    A.menu.rightAligned = 1;
    if (g_locale.id != 25) {
        A.menu[{
            0: 0,
            8: 1
        }[g_locale.id]].checked = 1
    }
    A.onmouseover = Menu.show;
    A.onmouseout = Menu.hide
}

function g_initPath(K, D) {
    var G = mn_path,
        H = null,
        C = null,
        L = 0,
        I = ge("main-precontents"),
        A = ce("div");
    A.className = "path";
    if (D != null) {
        var J = ce("div");
        J.className = "path-right";
        var M = ce("a");
        M.href = "javascript:;";
        M.id = "fi_toggle";
        ns(M);
        M.onclick = fi_Toggle;
        if (D) {
            M.className = "disclosure-on";
            ae(M, ct(LANG.fihide))
        } else {
            M.className = "disclosure-off";
            ae(M, ct(LANG.fishow))
        }
        ae(J, M);
        ae(I, J)
    }
    for (var F = 0; F < K.length; ++F) {
        var M, B, N = 0;
        for (var E = 0; E < G.length; ++E) {
            if (G[E][0] == K[F]) {
                N = 1;
                G = G[E];
                G.checked = 1;
                break
            }
        }
        if (!N) {
            L = 1;
            break
        }
        M = ce("a");
        B = ce("span");
        if (G[2]) {
            M.href = G[2]
        } else {
            M.href = "javascript:;";
            ns(M);
            M.style.textDecoration = "none";
            M.style.color = "white";
            M.style.cursor = "default"
        }
        if (F < K.length - 1 && G[3]) {
            B.className = "menuarrow"
        }
        ae(M, ct(G[4] == null ? G[1] : G[4]));
        if (F == 0) {
            M.menu = mn_path
        } else {
            M.menu = H[3]
        }
        M.onmouseover = Menu.show;
        M.onmouseout = Menu.hide;
        ae(B, M);
        ae(A, B);
        C = B;
        H = G;
        G = G[3];
        if (!G) {
            L = 1;
            break
        }
    }
    if (L && C) {
        C.className = ""
    }
    var J = ce("div");
    J.className = "clear";
    ae(A, J);
    ae(I, A);
    g_initPath.lastIt = H
}

function g_formatTimeElapsed(D) {
    function G(L, K, J) {
        if (J && LANG.timeunitsab[K] == "") {
            J = 0
        }
        if (J) {
            return L + " " + LANG.timeunitsab[K]
        } else {
            return L + " " + (L == 1 ? LANG.timeunitssg[K] : LANG.timeunitspl[K])
        }
    }
    var E = [31557600, 2629800, 604800, 86400, 3600, 60, 1];
    var H = [1, 3, 3, -1, 5, -1, -1];
    D = Math.max(D, 1);
    for (var C = 3, F = E.length; C < F; ++C) {
        if (D >= E[C]) {
            var B = C;
            var I = Math.floor(D / E[B]);
            if (H[B] != -1) {
                var A = H[B];
                D %= E[B];
                v2 = Math.floor(D / E[A]);
                if (v2 > 0) {
                    return G(I, B, 1) + " " + G(v2, A, 1)
                }
            }
            return G(I, B, 0)
        }
    }
    return "(n/a)"
}

function g_formatDateSimple(E, A) {
    function C(J) {
        return (J < 10 ? "0" + J : J)
    }
    var H = "",
        G = E.getDate(),
        D = E.getMonth() + 1,
        F = E.getFullYear();
    H += sprintf(LANG.date_simple, C(G), C(D), F);
    if (A == 1) {
        var I = E.getHours() + 1,
            B = E.getMinutes() + 1;
        H += LANG.date_at + C(I) + ":" + C(B)
    }
    return H
}

function g_createGlow(A, G) {
    var D = ce("span");
    for (var C = -1; C <= 1; ++C) {
        for (var B = -1; B <= 1; ++B) {
            var F = ce("div");
            F.style.position = "absolute";
            F.style.whiteSpace = "nowrap";
            F.style.left = C + "px";
            F.style.top = B + "px";
            if (C == 0 && B == 0) {
                F.style.zIndex = 4
            } else {
                F.style.color = "black";
                F.style.zIndex = 2
            }
            ae(F, ct(A));
            ae(D, F)
        }
    }
    D.style.position = "relative";
    D.className = "glow" + (G != null ? " " + G : "");
    var E = ce("span");
    E.style.visibility = "hidden";
    ae(E, ct(A));
    ae(D, E);
    return D
}

function g_appendReputation(G, F, D, E) {
    G = $(G);
    var B = ce("a");
    B.href = "javascript:;";
    B.className = "reputation";
    var H = ce("div");
    H.className = "reputation-text";
    var A = ce("del");
    ae(A, ct(g_reputation_standings[F]));
    ae(H, A);
    var C = ce("ins");
    ae(C, ct(E));
    ae(H, C);
    ae(B, H);
    H = ce("div");
    H.className = "reputation-bar" + F;
    if (D <= 0 || D > 100) {
        H.style.visibility = "hidden"
    }
    H.style.width = D + "%";
    ae(H, ct(String.fromCharCode(160)));
    ae(B, H);
    ae(G, B)
}

function g_convertRatingToPercent(E, A, D) {
    var C = {
        12: 1.5,
        13: 12,
        14: 15,
        15: 5,
        16: 10,
        17: 10,
        18: 8,
        19: 14,
        20: 14,
        21: 14,
        22: 0,
        23: 0,
        24: 0,
        25: 0,
        26: 0,
        27: 0,
        28: 10,
        29: 10,
        30: 10,
        31: 10,
        32: 14,
        33: 0,
        34: 0,
        35: 25,
        36: 10,
        37: 2.5
    };
    if (E < 10) {
        E = 10
    } else {
        if (E > 70) {
            E = 70
        }
    }
    if (D < 0) {
        D = 0
    }
    var B;
    if (C[A] == null) {
        B = 0
    } else {
        f = C[A];
        if (E >= 1 && E <= 59) {
            B = D / f / ((1 / 52) * E - (8 / 52))
        } else {
            if (E >= 60 && E <= 70) {
                B = D / f * ((-3 / 82) * E + (131 / 41))
            } else {
                B = 0
            }
        }
    }
    return B
}

function g_setRatingLevel(F, E, A, C) {
    var D = prompt(LANG.prompt_ratinglevel, E);
    if (D != null) {
        D |= 0;
        if (D != E && D >= 1 && D <= 70) {
            E = D;
            var B = g_convertRatingToPercent(E, A, C);
            B = (Math.round(B * 100) / 100);
            if (A != 12 && A != 37) {
                B += "%"
            }
            F.innerHTML = sprintf(LANG.tooltip_combatrating, B, E);
            F.onclick = g_setRatingLevel.bind(0, F, E, A, C)
        }
    }
}

function g_getMoneyHtml(C) {
    var B = 0,
        A = "";
    if (C >= 10000) {
        B = 1;
        A += '<span class="moneygold">' + Math.floor(C / 10000) + "</span>";
        C %= 10000
    }
    if (C >= 100) {
        if (B) {
            A += " "
        } else {
            B = 1
        }
        A += '<span class="moneysilver">' + Math.floor(C / 100) + "</span>";
        C %= 100
    }
    if (C >= 1) {
        if (B) {
            A += " "
        } else {
            B = 1
        }
        A += '<span class="moneycopper">' + C + "</span>"
    }
    return A
}

function g_getPatchVersion(E) {
    var D = g_getPatchVersion;
    var B = 0,
        C = D.T.length - 2,
        A;
    while (C > B) {
        A = Math.floor((C + B) / 2);
        if (E >= D.T[A] && E < D.T[A + 1]) {
            return D.V[A]
        }
        if (E >= D.T[A]) {
            B = A + 1
        } else {
            C = A - 1
        }
    }
    A = Math.ceil((C + B) / 2);
    return D.V[A]
}
g_getPatchVersion.V = ["1.12.0", "1.12.1", "1.12.2", "2.0.1", "2.0.3", "2.0.4", "2.0.5", "2.0.6", "2.0.7", "2.0.8", "2.0.10", "2.0.12", "2.1.0", "2.1.1", "2.1.2", "2.1.3", "2.2.0", "2.2.2", "2.2.3", "2.3.0", "2.3.2", "2.3.3", "2.4.0", "2.4.1", "2.4.2", "2.4.3", "3.0.2", "3.0.3", "3.0.8", "3.0.9", "3.1.0", "3.1.1", "3.1.2", "3.1.3 or Later", "Later than 3.1.3"];
g_getPatchVersion.T = [1153540800000, 1159243200000, 1160712000000, 1165294800000, 1168318800000, 1168578000000, 1168750800000, 1169528400000, 1171342800000, 1171602000000, 1173157200000, 1175572800000, 1179806400000, 1181016000000, 1182225600000, 1184040000000, 1190692800000, 1191297600000, 1191902400000, 1194930000000, 1199768400000, 1200978000000, 1206417600000, 1207022400000, 1210651200000, 1216094400000, 1223956800000, 1225774800000, 1232427600000, 1234242000000, 1239681600000, 1240286400000, 1242705600000, 1243915200000, 9999999999999];


function g_expandSite() {
    de(ge("sidebar"));
    de(ge("header-ad"));
    ge("wrapper").className = "noads";
    var A = ge("contribute-ad");
    if (A) {
        de(A)
    }
}

function g_insertTag(E, H, A, J) {
    var C = $(E);
    C.focus();
    if (C.selectionStart != null) {
        var K = C.selectionStart,
            G = C.selectionEnd,
            I = C.scrollLeft,
            D = C.scrollTop;
        var B = C.value.substring(K, G);
        if (typeof J == "function") {
            B = J(B)
        }
        C.value = C.value.substr(0, K) + H + B + A + C.value.substr(G);
        C.selectionStart = C.selectionEnd = G + H.length;
        C.scrollLeft = I;
        C.scrollTop = D
    } else {
        if (document.selection && document.selection.createRange) {
            var F = document.selection.createRange();
            if (F.parentElement() != C) {
                return
            }
            var B = F.text;
            if (typeof J == "function") {
                B = J(B)
            }
            F.text = H + B + A
        }
    }
    if (C.onkeyup) {
        C.onkeyup()
    }
}

function g_getLocaleFromDomain(B) {
    var A = g_getLocaleFromDomain.L;
    return (A[B] ? A[B] : 0)
}
g_getLocaleFromDomain.L = {
    fr: 2,
    de: 3,
    es: 6,
    wotlk: 25
};

function g_getIdFromTypeName(A) {
    var B = g_getIdFromTypeName.L;
    return (B[A] ? B[A] : -1)
}
g_getIdFromTypeName.L = {
    npc: 1,
    object: 2,
    item: 3,
    itemset: 4,
    quest: 5,
    spell: 6,
    zone: 7,
    faction: 8
};

function g_getIngameLink(A, C, B) {
    prompt(LANG.prompt_ingamelink, '/script DEFAULT_CHAT_FRAME:AddMessage("' + sprintf(LANG.message_ingamelink, "\\124c" + A + "\\124H" + C + "\\124h[" + B + ']\\124h\\124r");'))
}

function g_isEmailValid(A) {
    return A.match(/^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) != null
}

function g_onAfterTyping(a, d, c) {
    var e;
    var b = function() {
        if (e) {
            clearTimeout(e);
            e = null
        }
        e = setTimeout(d, c)
    };
    a.onkeyup = b
}
function g_onClick(c, d) {
    var b = 0;
    function a(e) {
        if (b) {
            if (b != e) {
                return
            }
        } else {
            b = e
        }
        d(true)
    }
    c.oncontextmenu = function() {
        a(1);
        return false
    };
    c.onmouseup = function(f) {
        f = $E(f);
        if (f._button == 3 || f.shiftKey || f.ctrlKey) {
            a(2)
        } else {
            if (f._button == 1) {
                d(false)
            }
        }
        return false
    }
}
function g_createOrRegex(c) {
    var e = c.split(" "), d = "";
    for (var b = 0, a = e.length; b < a; ++b) {
        if (b > 0) {
            d += "|"
        }
        d += e[b]
    }
    return new RegExp("(" + d + ")", "gi")
}
function g_addPages(l, b) {
    function o(q, d) {
        var i;
        if (q == b.page) {
            i = ce("span");
            i.className = "selected"
        } else {
            i = ce("a");
            i.href = (q > 1 ? b.url + b.sep + q + b.pound : b.url + b.pound)
        }
        ae(i, ct(d != null ? d : q));
        return i
    }
    if (!b.pound) {
        b.pound = ""
    }
    if (!b.sep) {
        b.sep = "."
    }
    if (b.allOrNothing && b.nPages <= 1) {
        return
    }
    var c = (b.align && b.align == "left");
    var e = ce("div"), k, p = ce("var");
    e.className = "pages";
    if (c) {
        e.className += " pages-left"
    }
    if (b.nPages > 1) {
        k = ce("div");
        k.className = "pages-numbers";
        var n = Math.max(2, b.page - 3);
        var h = Math.min(b.nPages - 1, b.page + 3);
        var m = [];
        if (b.page != b.nPages) {
            m.push(o(b.page + 1, LANG.lvpage_next + String.fromCharCode(8250)))
        }
        m.push(o(b.nPages));
        if (h < b.nPages - 1) {
            var a = ce("span");
            ae(a, ct("..."));
            m.push(a)
        }
        for (var g = h; g >= n; --g) {
            m.push(o(g))
        }
        if (n > 2) {
            var a = ce("span");
            ae(a, ct("..."));
            m.push(a)
        }
        m.push(o(1));
        if (b.page != 1) {
            m.push(o(b.page - 1, String.fromCharCode(8249) + LANG.lvpage_previous))
        }
        if (c) {
            m.reverse()
        }
        for (var g = 0, j = m.length; g < j; ++g) {
            ae(k, m[g])
        }
        k.firstChild.style.marginRight = "0";
        k.lastChild.style.marginLeft = "0"
    }
    var p = ce("var");
    ae(p, ct(sprintf(LANG[b.wording[b.nItems == 1 ? 0 : 1]], b.nItems)));
    if (b.nPages > 1) {
        var a = ce("span");
        ae(a, ct(String.fromCharCode(8211)));
        ae(p, a);
        var f = ce("a");
        f.className = "gotopage";
        f.href = "javascript:;";
        ns(f);
        if (Browser.ie) {
            ae(f, ct(" "))
        }
        f.onclick = function() {
            var d = prompt(sprintf(LANG.prompt_gotopage, 1, b.nPages), b.page);
            if (d != null) {
                d |= 0;
                if (d != b.page && d >= 1 && d <= b.nPages) {
                    document.location.href = (d > 1 ? b.url + b.sep + d + b.pound : b.url + b.pound)
                }
            }
        };
        f.onmouseover = function(d) {
            Tooltip.showAtCursor(d, LANG.tooltip_gotopage, 0, 0, "q")
        };
        f.onmousemove = Tooltip.cursorUpdate;
        f.onmouseout = Tooltip.hide;
        ae(p, f)
    }
    if (c) {
        ae(e, p);
        if (k) {
            ae(e, k)
        }
    } else {
        if (k) {
            ae(e, k)
        }
        ae(e, p)
    }
    ae(l, e)
}
function g_disclose(a, b) {
    b.className = "disclosure-" + (g_toggleDisplay(a) ? "on" : "off");
    return false
}

function g_userDescription() {
    var C = ge("description");
    var D = (typeof g_pageInfo == "object" && g_user.name == g_pageInfo.username);
    var B = (C.childNodes.length == 0);
    if (B) {
        if (D) {
            ae(C, ct(LANG.user_nodescription2))
        } else {
            ae(C, ct(LANG.user_nodescription))
        }
    }
    if (D) {
        var A = ce("button"),
            E = ce("div");
        E.className = "pad";
        A.onclick = function () {
            location.href = "?account#public-description"
        };
        if (B) {
            ae(A, ct(LANG.user_composeone))
        } else {
            ae(A, ct(LANG.user_editdescription))
        }
        ae(C, E);
        ae(C, A)
    }
}

function co_addYourComment() {
    tabsContribute.focus(0);
    var A = gE(document.forms.addcomment, "textarea")[0];
    A.focus()
}

function co_cancelReply() {
    ge("replybox-generic").style.display = "none";
    document.forms.addcomment.elements.replyto.value = ""
}

function co_validateForm(B) {
    var A = gE(B, "textarea")[0];
    if (Listview.funcBox.coValidate(A)) {
        if (g_user.permissions & 1) {
            return true
        }
    }
    return false
}

function ss_submitAScreenshot() {
    tabsContribute.focus(1)
}

function ss_validateForm(A) {
    if (!A.elements.screenshotfile.value.length) {
        alert(LANG.message_noscreenshot);
        return false
    }
    return true
}

function ss_appendSticky() {
    var J = ge("infobox-sticky");
    var F = g_pageInfo.type;
    var A = g_pageInfo.typeId;
}

function Ajax(B, C) {
    if (!B) {
        return
    }
    var A;
    try {
        A = new XMLHttpRequest()
    } catch (D) {
        try {
            A = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (D) {
            try {
                A = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (D) {
                if (window.createRequest) {
                    A = window.createRequest()
                } else {
                    alert(LANG.message_ajaxnotsupported);
                    return
                }
            }
        }
    }
    this.request = A;
    cO(this, C);
    this.method = this.method || (this.params && "POST") || "GET";
    A.open(this.method, B, this.async == null ? true : this.async);
    A.onreadystatechange = Ajax.onReadyStateChange.bind(this);
    if (this.method.toUpperCase() == "POST") {
        A.setRequestHeader("Content-Type", (this.contentType || "application/x-www-form-urlencoded") + "; charset=" + (this.encoding || "UTF-8"))
    }
    A.send(this.params)
}
Ajax.onReadyStateChange = function () {
    if (this.request.readyState == 4) {
        if (this.request.status == 0 || (this.request.status >= 200 && this.request.status < 300)) {
            this.onSuccess != null && this.onSuccess(this.request, this)
        } else {
            this.onFailure != null && this.onFailure(this.request, this)
        }
        if (this.onComplete != null) {
            this.onComplete(this.request, this)
        }
    }
};

function g_ajaxIshRequest(A) {
    var B = document.getElementsByTagName("head")[0];
    ae(B, ce("script", {
        type: "text/javascript",
        src: A
    }))
}
var Menu = {
    iframes: [],
    divs: [],
    selection: [],
    show: function () {
        try {
            clearTimeout(Menu.timer);
            if (Menu.currentLink) {
                Menu._show(this)
            } else {
                this.className = "open";
                Menu.timer = setTimeout(Menu._show.bind(0, this), 100)
            }
        } catch (A) {}
    },
    _show: function (B) {
        if (Menu.currentLink != B) {
            var A = ac(B);
            Menu._hide();
            Menu.selection = [-1];
            Menu.currentLink = B;
            Menu.showDepth(0, B.menu, A[0], A[1] + B.offsetHeight + 1, B.offsetHeight + 8, B.offsetWidth, A[1]);
            B.className = "open"
        } else {
            Menu.truncate(0);
            Menu.clean(0)
        }
    },
    showAtCursor: function (A) {
        A = $E(A);
        clearTimeout(Menu.timer);
        Menu._hide();
        Menu.selection = [-1];
        Menu.currentLink = null;
        var B = g_getCursorPos(A);
        Menu.showDepth(0, this.menu, B.x, B.y, 0, 0, 0)
    },
    hide: function () {
        try {
            clearTimeout(Menu.timer);
            if (Menu.currentLink) {
                Menu.timer = setTimeout(Menu._hide, 333)
            } else {
                this.className = ""
            }
        } catch (A) {}
    },
    _hide: function () {
        for (var B = 0, A = Menu.selection.length; B < A; ++B) {
            Menu.divs[B].style.display = "none";
            Menu.divs[B].style.visibility = "hidden";
            if (Browser.ie6) {
                Menu.iframes[B].style.display = "none"
            }
        }
        Menu.selection = [];
        if (Menu.currentLink) {
            Menu.currentLink.className = ""
        }
        Menu.currentLink = null
    },
    sepOver: function () {
        var B = this.d;
        var A = B.i;
        Menu.truncate(A);
        Menu.clean(A);
        Menu.selection[A] = -1
    },
    elemOver: function () {
        var E = this.d;
        var D = E.i;
        var C = this.i;
        var A = this.k;
        var B = this.firstChild.className == "menusub";
        Menu.truncate(D + B);
        if (B && C != Menu.selection[D]) {
            var F = ac(this);
            Menu.selection[D + 1] = -1;
            Menu.showDepth(D + 1, E.menuArray[C][3], F[0], F[1] - 2, this.offsetHeight, this.offsetWidth - 3, 0)
        }
        Menu.clean(D);
        Menu.selection[D] = A;
        if (this.className.length) {
            this.className += " open"
        } else {
            this.className = "open"
        }
    },
    getIframe: function (A) {
        var B;
        if (Menu.iframes[A] == null) {
            B = ce("iframe");
            B.src = "javascript:0;";
            B.frameBorder = 0;
            ae(ge("layers"), B);
            Menu.iframes[A] = B
        } else {
            B = Menu.iframes[A]
        }
        return B
    },
    getDiv: function (B, A) {
        var C;
        if (Menu.divs[B] == null) {
            C = ce("div");
            C.className = "menu";
            ae(ge("layers"), C);
            Menu.divs[B] = C
        } else {
            C = Menu.divs[B]
        }
        C.i = B;
        C.menuArray = A;
        return C
    },
    showDepth: function (Z, V, M, L, g, N, D) {
        var r, n = Menu.getDiv(Z, V);
        while (n.firstChild) {
            de(n.firstChild)
        }
        var l = ce("table"),
            A = ce("tbody"),
            E = ce("tr"),
            I = ce("td"),
            Q = ce("div"),
            G = ce("div");
        var S = 999;
        var P = g_getWindowSize(),
            C = g_getScroll(),
            J = P.w,
            T = P.h,
            B = C.x,
            o = C.y;
        if (g > 0) {
            if ((25 + 1) * V.length > T - 25 - D) {
                for (var X = 2; X < 4; ++X) {
                    if (g / X * V.length + 30 < T - D) {
                        break
                    }
                }
                S = Math.floor(V.length / X)
            }
        }
        var H = 0;
        var U = 0;
        for (var X = 0, e = V.length; X < e; ++X) {
            if (V[X][0] == null) {
                var Y = ce("span");
                Y.className = "separator";
                ns(Y);
                ae(Y, ct(V[X][1]));
                Y.d = n;
                Y.onmouseover = Menu.sepOver;
                ae(G, Y)
            } else {
                var q = ce("a");
                q.d = n;
                q.k = U++;
                q.i = X;
                if (V[X][2]) {
                    if (Menu.currentLink && Menu.currentLink.menuappend) {
                        if (V[X][2].indexOf(Menu.currentLink.menuappend) == -1) {
                            q.href = V[X][2] + Menu.currentLink.menuappend
                        } else {
                            q.href = V[X][2]
                        }
                    } else {
                        if (typeof V[X][2] == "function") {
                            q.href = "javascript:;";
                            q.onclick = V[X][2];
                            ns(q)
                        } else {
                            q.href = V[X][2]
                        }
                    }
                } else {
                    q.href = "javascript:;";
                    q.style.cursor = "default";
                    ns(q)
                }
                q.onmouseover = Menu.elemOver;
                var O = ce("span"),
                    F = ce("span");
                if (V[X][3] != null) {
                    O.className = "menusub"
                }
                if (V[X][5] != null) {
                    V[X][5] = V[X][5].toLowerCase();
                    F.className = "icontiny";
                    F.style.backgroundImage = "url(images/icons/small/" + V[X][5] + ".png)";
                    if (V[X].checked) {
                        var K = ce("span");
                        K.className = "menucheck";
                        ae(K, ct(V[X][1]));
                        ae(F, K);
                    } else {
                        ae(F, ct(V[X][1]));
                    }
                } else {
                    if (V[X].checked) {
                        F.className = "menucheck"
                    }
                    ae(F, ct(V[X][1]));
                }
                ae(O, F);
                ae(q, O);
                ae(G, q)
            }
            if (H++ == S) {
                Q.onmouseover = Menu.divOver;
                Q.onmouseout = Menu.divOut;
                ae(Q, G);
                if (!Browser.ie6) {
                    var R = ce("p");
                    ae(R, ce("em"));
                    ae(R, ce("var"));
                    ae(R, ce("strong"));
                    ae(R, Q);
                    ae(I, R)
                } else {
                    ae(I, Q)
                }
                ae(E, I);
                I = ce("td");
                R = ce("p");
                Q = ce("div");
                G = ce("div");
                H = 0
            }
        }
        Q.onmouseover = Menu.divOver;
        Q.onmouseout = Menu.divOut;
        ae(Q, G);
        if (!Browser.ie6) {
            if (S != 999) {
                var R = ce("p");
                ae(R, ce("em"));
                ae(R, ce("var"));
                ae(R, ce("strong"));
                ae(R, Q);
                ae(I, R)
            } else {
                ae(n, ce("em"));
                ae(n, ce("var"));
                ae(n, ce("strong"));
                ae(I, Q)
            }
        } else {
            ae(I, Q)
        }
        ae(E, I);
        ae(A, E);
        ae(l, A);
        ae(n, l);
        n.style.left = n.style.top = "-2323px";
        n.style.display = "";
        var K = l.offsetWidth,
            W = l.offsetHeight;
        if (V.rightAligned) {
            M = M + N - K
        } else {
            if (M + N + K + 15 > J) {
                M = Math.max(0, M - K - 3)
            } else {
                if (Z > 0) {
                    M += N
                }
            }
        }
        if (L + W > T + o) {
            L = Math.max(o + 5, T + o - W - 10)
        }
        n.style.left = M + "px";
        n.style.top = L + "px";
        if (Browser.ie6) {
            r = Menu.getIframe(Z);
            r.style.left = M + "px";
            r.style.top = L + "px";
            r.style.width = K + "px";
            r.style.height = W + "px";
            r.style.display = "";
            r.style.visibility = "visible"
        }
        n.style.visibility = "visible";
        if (Browser.opera) {
            n.style.display = "none";
            n.style.display = ""
        }
    },
    divOver: function () {
        clearTimeout(Menu.timer)
    },
    divOut: function () {
        clearTimeout(Menu.timer);
        Menu.timer = setTimeout(Menu._hide, 333)
    },
    truncate: function (A) {
        var B;
        while (Menu.selection.length - 1 > A) {
            B = Menu.selection.length - 1;
            Menu.divs[B].style.display = "none";
            Menu.divs[B].style.visibility = "hidden";
            if (Browser.ie6) {
                Menu.iframes[B].style.display = "none"
            }
            Menu.selection.pop()
        }
    },
    clean: function (A) {
        for (var B = A; B < Menu.selection.length; ++B) {
            if (Menu.selection[B] != -1) {
                d = gE(Menu.divs[B], "a")[Menu.selection[B]];
                if (d.className.indexOf("sub") != -1) {
                    d.className = "sub"
                } else {
                    d.className = ""
                }
                Menu.selection[B] = -1
            }
        }
    },
    append: function (A, B) {
        A[2] += B;
        if (A[3] != null) {
            Menu._append(A[3], B)
        }
    },
    _append: function (A, C) {
        var D, E = 0;
        for (var B = 0; B < A.length; ++B) {
            if (A[B][2].indexOf("sl=") != -1) {
                C = C.replace(/sl=([0-9]:?)+/, "");
                E = 1
            } else {
                if (A[B][2].indexOf("cl=") != -1) {
                    C = C.replace(/cl=[0-9]+/, "");
                    E = 1
                }
            }
            if (E) {
                C = C.replace("&filter=", ";");
                C = rtrim(C, ";");
                C = C.replace(";;", ";")
            }
            A[B][2] += C;
            if (A[B][3]) {
                Menu._append(A[B][3], C)
            }
        }
    },
    fixUrls: function (E, B, D) {
        for (var C = 0, A = E.length; C < A; ++C) {
            if (E[C][2] == null) {
                E[C][2] = B + E[C][0]
            }
            if (E[C][3]) {
                if (D) {
                    Menu.fixUrls(E[C][3], B, D)
                } else {
                    Menu.fixUrls(E[C][3], B + E[C][0] + ".", D)
                }
            }
        }
    },
    addButtons: function (F, E) {
        for (var C = 0, A = E.length; C < A; ++C) {
            if (E[C][0] == null) {
                continue
            }
            var B = ce("a"),
                D = ce("span");
            if (E[C][2]) {
                B.href = E[C][2]
            } else {
                B.href = "javascript:;";
                B.style.cursor = "default";
                B.style.textDecoration = "none";
                ns(B)
            }
            if (E[C][3] != null) {
                D.className = "menuarrowd";
                B.menu = E[C][3];
                B.onmouseover = Menu.show;
                B.onmouseout = Menu.hide
            }
            ae(D, ct(E[C][1]));
            ae(B, D);
            ae(F, B)
        }
    },
    explode: function (F) {
        var B = [],
            E = null,
            D;
        for (var C = 0, A = F.length; C < A; ++C) {
            if (F[C][0] != null) {
                if (E != null) {
                    D.push(F[C])
                } else {
                    B.push(F[C])
                }
            }
            if (E != null && (F[C][0] == null || C == A - 1)) {
                B.push([0, E[1], , D])
            }
            if (F[C][0] == null) {
                E = F[C];
                D = []
            }
        }
        return B
    }
};

function Tabs(A) {
    cO(this, A);
    if (this.parent) {
        this.parent = $(this.parent)
    } else {
        return
    }
    this.oldMode = (Browser.geckoVersion > 20000000 && Browser.geckoVersion <= 20060414);
    this.selectedTab = -1;
    this.uls = [];
    this.tabs = [];
    this.nShows = 0;
    if (this.poundable == null) {
        this.poundable = 1
    }
    this.poundedTab = null;
    if (this.onLoad == null) {
        this.onLoad = Tabs.onLoad.bind(this)
    }
    if (this.onShow == null) {
        this.onShow = Tabs.onShow.bind(this)
    }
    if (this.onHide) {
        this.onHide = this.onHide.bind(this)
    }
}
Tabs.prototype = {
    add: function (A, D) {
        var C, B = this.tabs.length;
        C = {
            caption: A,
            index: B,
            owner: this
        };
        cO(C, D);
        this.tabs.push(C);
        return B
    },
    focus: function (A) {
        if (A < 0) {
            A = this.tabs.length + A
        }
        this.forceScroll = 1;
        gE(this.uls[this.oldMode ? 0 : 2], "a")[A].onclick({}, true);
        this.forceScroll = null
    },
    show: function (C, E) {
        var B;
        if (isNaN(C) || C < 0) {
            C = 0
        } else {
            if (C >= this.tabs.length) {
                C = this.tabs.length - 1
            }
        }
        if (E == null && C == this.selectedTab) {
            return
        }
        if (this.selectedTab != -1) {
            B = this.tabs[this.selectedTab];
            if (this.onHide && !this.onHide(B)) {
                return
            }
            if (B.onHide && !B.onHide()) {
                return
            }
        }++this.nShows;
        var A = this.oldMode ? 0 : 3;
        for (var D = 0; D <= A; ++D) {
            B = gE(this.uls[D], "a");
            if (this.selectedTab != -1) {
                B[this.selectedTab].className = ""
            }
            B[C].className = "selected"
        }
        B = this.tabs[C];
        if (B.onLoad) {
            B.onLoad();
            B.onLoad = null
        }
        this.onShow(this.tabs[C], this.tabs[this.selectedTab]);
        if (B.onShow) {
            B.onShow(this.tabs[this.selectedTab])
        }
        this.selectedTab = C
    },
    flush: function (J) {
        if (this.oldMode) {
            var H, M, C, K;
            H = ce("ul");
            H.className = "old-tabs";
            for (var G = 0; G < this.tabs.length; ++G) {
                var D = this.tabs[G];
                M = ce("li");
                C = ce("div");
                K = ce("a");
                if (this.poundable) {
                    K.href = "#" + D.id
                } else {
                    K.href = "javascript:;"
                }
                ns(K);
                K.onclick = Tabs.onClick.bind(D, K);
                ae(K, ct(D.caption));
                ae(M, C);
                ae(M, K);
                ae(H, M)
            }
            this.uls[0] = H;
            ae(this.parent, H)
        } else {
            var L, E, K, I, A;
            var B = ce("div");
            B.className = "tabs-container";
            I = ce("div");
            I.style.visibility = "hidden";
            this.uls[0] = ce("ul");
            this.uls[0].className = "tabs";
            ae(I, this.uls[0]);
            ae(B, I);
            I = ce("div");
            I.className = "tabs-levels";
            for (var G = 1; G <= 3; ++G) {
                A = ce("div");
                A.className = "tabs-level";
                this.uls[G] = ce("ul");
                this.uls[G].className = "tabs";
                this.uls[G].style.top = (-30 * (3 - G)) + "px";
                ae(A, this.uls[G]);
                ae(I, A)
            }
            ae(B, I);
            for (var G = 0; G < this.tabs.length; ++G) {
                var D = this.tabs[G];
                for (var F = 0; F <= 3; ++F) {
                    E = ce("li");
                    K = ce("a");
                    b = ce("b");
                    if (this.poundable) {
                        K.href = "#" + D.id
                    } else {
                        K.href = "javascript:;"
                    }
                    if (F > 0) {
                        ns(K);
                        K.onclick = Tabs.onClick.bind(D, K)
                    }
                    if (!Browser.ie6) {
                        I = ce("div");
                        ae(I, ct(D.caption));
                        ae(K, I)
                    }
                    ae(b, ct(D.caption));
                    ae(K, b);
                    ae(E, K);
                    ae(this.uls[F], E)
                }
            }
            ae(this.parent, B)
        }
        if (this.onLoad) {
            L = this.onLoad();
            if (L != null) {
                this.poundedTab = J = L
            }
        }
        this.show(J)
    },
    setTabName: function (C, B) {
        var A = this.oldMode ? 0 : 3;
        for (var D = 0; D <= A; ++D) {
            _ = gE(this.uls[D], "a");
            g_setTextNodes(_[C], B)
        }
    },
    setTabPound: function (C, A) {
        if (!this.poundable) {
            return
        }
        var B = this.oldMode ? 0 : 3;
        for (var D = 0; D <= B; ++D) {
            _ = gE(this.uls[D], "a");
            _[C].href = "#" + this.tabs[C].id + ":" + A
        }
    }
};
Tabs.onClick = function (A, E, D) {
    if (D == null && this.index == this.owner.selectedTab) {
        return
    }
    var C = rf2(E);
    if (C == null) {
        return
    }
    this.owner.show(this.index, D);
    if (this.owner.poundable) {
        var B = A.href.indexOf("#");
        B != -1 && location.replace(A.href.substr(B))
    }
    return C
};
Tabs.onLoad = function () {
    if (!this.poundable || !location.hash.length) {
        return
    }
    var A = location.hash.substr(1).split(":")[0];
    if (A) {
        return in_array(this.tabs, A, function (B) {
            return B.id
        })
    }
};
Tabs.onShow = function (E, D) {
    var B;
    if (D) {
        ge("tab-" + D.id).style.display = "none"
    }
    B = ge("tab-" + E.id);
    B.style.display = "";
    if ((this.nShows == 1 && this.poundedTab != null && this.poundedTab >= 0) || this.forceScroll) {
        var C, A;
        if (this.__st) {
            C = this.__st;
            A = 15
        } else {
            C = B;
            A = this.parent.offsetHeight + 15
        }
        if (Browser.ie) {
            setTimeout(g_scrollTo.bind(this, C, A), 1)
        } else {
            g_scrollTo(C, A)
        }
    }
};
var Icon = {
    sizes: ["small", "medium", "large"],
    create: function (A, J, I, D, B, H) {
        var G;
        var E = ce("div"),
            C = ce("div");
        E.className = "icon" + Icon.sizes[J];
        if (A != null) {
            E.style.backgroundImage = "url(images/icons/" + Icon.sizes[J] + "/" + A.toLowerCase() + ".png)"
        }
        C.className = "tile";
        if (I || D) {
            var F = ce("a");
            if (I && I.length) {
                F.tooltip = I;
                F.onmouseover = Icon.over;
                F.onmouseout = Icon.out
            }
            if (D) {
                F.href = D
            } else {
                F.href = "javascript:;";
                ns(F)
            }
            ae(C, F)
        } else {
            if (J == 2) {
                E.ondblclick = function () {
                    prompt("", A)
                }
            }
        }
        if (B != null && (B > 1 || B.length)) {
            G = g_createGlow(B, "q1");
            G.style.right = "0";
            G.style.bottom = "0";
            G.style.position = "absolute";
            ae(C, G)
        }
        if (H != null && H > 0) {
            G = g_createGlow("(" + H + ")", "q");
            G.style.left = "0";
            G.style.top = "0";
            G.style.position = "absolute";
            ae(C, G)
        }
        ae(E, C);
        return E
    },
    over: function () {
        if (this.tooltip != null) {
            Tooltip.show(this, this.tooltip, 0, 0)
        }
    },
    out: function () {
        Tooltip.hide()
    }
};
var Tooltip = {
    clip: "main-contents",
    create: function (G) {
        var E = ce("div"),
            J = ce("table"),
            C = ce("tbody"),
            D = ce("tr"),
            B = ce("tr"),
            A = ce("td"),
            I = ce("th"),
            H = ce("th"),
            F = ce("th");
        E.className = "tooltip";
        I.style.backgroundPosition = "top right";
        H.style.backgroundPosition = "bottom left";
        F.style.backgroundPosition = "bottom right";
        if (G) {
            A.innerHTML = G
        }
        ae(D, A);
        ae(D, I);
        ae(C, D);
        ae(B, H);
        ae(B, F);
        ae(C, B);
        ae(J, C);
        Tooltip.icon = ce("p");
        Tooltip.icon.style.visibility = "hidden";
        ae(Tooltip.icon, ce("div"));
        ae(E, Tooltip.icon);
        ae(E, J);
        return E
    },
    fix: function (D, B, E) {
        var C = gE(D, "table")[0],
            G = gE(C, "td")[0],
            F = G.childNodes;
        if (F.length >= 2 && F[0].nodeName == "TABLE" && F[1].nodeName == "TABLE") {
            var A;
            if (F[1].offsetWidth > 300) {
                A = Math.max(300, F[0].offsetWidth) + 20
            } else {
                A = Math.max(F[0].offsetWidth, F[1].offsetWidth) + 20
            }
            if (A > 20) {
                D.style.width = A + "px";
                F[0].style.width = F[1].style.width = "100%";
                if (!B && D.offsetHeight > document.body.clientHeight) {
                    C.className = "shrink"
                }
            }
        }
        if (E) {
            D.style.visibility = "visible"
        }
    },
    fixSafe: function (C, B, A) {
        if (Browser.ie) {
            setTimeout(Tooltip.fix.bind(this, C, B, A), 1)
        } else {
            Tooltip.fix(C, B, A)
        }
    },
    append: function (B, A) {
        var B = $(B);
        var C = Tooltip.create(A);
        ae(B, C);
        Tooltip.fixSafe(C, 1, 1)
    },
    prepare: function () {
        if (!Tooltip.tooltip) {
            var B = Tooltip.create();
            B.style.position = "absolute";
            B.style.left = B.style.top = "-2323px";
            var A = ge("layers");
            ae(A, B);
            Tooltip.tooltip = B;
            Tooltip.tooltipTable = gE(B, "table")[0];
            Tooltip.tooltipTd = gE(B, "td")[0];
            if (Browser.ie6) {
                B = ce("iframe");
                B.src = "javascript:1;";
                B.frameBorder = 0;
                ae(A, B);
                Tooltip.iframe = B
            }
        }
    },
    move: function (O, M, P, K, B, A, U, H, N, T) {
        if (!Tooltip.tooltipTable) {
            return
        }
        var W, G = O,
            R = M,
            J = O,
            I = M,
            F = 0,
            E = 0,
            Q = g_getWindowSize(),
            D = g_getScroll(),
            L = Q.w,
            S = Q.h,
            C = D.x,
            V = D.y;
        if (U == null) {
            U = Tooltip.clip
        }
        if (H == null) {
            H = Tooltip.tooltip;
            N = Tooltip.tooltipTable.offsetWidth;
            T = Tooltip.tooltipTable.offsetHeight
        }
        H.style.width = N + "px";
        if (U) {
            W = ge(U);
            if (W) {
                c = ac(W);
                F = c[0];
                E = c[1];
                if (W.offsetWidth + F <= C + L) {
                    L = W.offsetWidth + F - C
                }
                if (W.offsetHeight + E <= V + S) {
                    S = W.offsetHeight + E - V
                }
            }
        }
        if (G + P + N > L) {
            G = Math.max(G - N, F) - B
        } else {
            G += P + B
        }
        if (G < F) {
            G = F
        } else {
            if (G + N > C + L) {
                G = C + L - N
            }
        }
        if (R - T > Math.max(V, E)) {
            R -= T + A
        } else {
            R += K + A
        }
        if (R < E) {
            R = E
        } else {
            if (R + T > V + S) {
                R = Math.max(V, V + S - T)
            }
        }
        if (Tooltip.iconVisible) {
            if (J >= G - 48 && J <= G && I >= R - 4 && I <= R + 48) {
                R -= 48 - (I - R)
            }
        }
        H.style.left = G + "px";
        H.style.top = R + "px";
        H.style.visibility = "visible";
        if (Browser.ie6 && Tooltip.iframe) {
            W = Tooltip.iframe;
            W.style.left = G + "px";
            W.style.top = R + "px";
            W.style.width = N + "px";
            W.style.height = T + "px";
            W.style.display = "";
            W.style.visibility = "visible"
        }
    },
    show: function (G, E, A, F, C) {
        if (Tooltip.disabled) {
            return
        }
        var B;
        Tooltip.prepare();
        if (C) {
            E = '<span class="' + C + '">' + E + "</span>"
        }
        B = Tooltip.tooltip;
        B.style.width = "550px";
        B.style.left = "-2323px";
        B.style.top = "-2323px";
        Tooltip.tooltipTd.innerHTML = E;
        B.style.display = "";
        var D = ac(G);
        Tooltip.fix(B, 0, 0);
        Tooltip.move(D[0], D[1], G.offsetWidth, G.offsetHeight, A, F)
    },
    showAtCursor: function (B, E, A, G, D) {
        if (Tooltip.disabled) {
            return
        }
        if (!A || A < 10) {
            A = 10
        }
        if (!G || G < 10) {
            G = 10
        }
        B = $E(B);
        Tooltip.prepare();
        if (D) {
            E = '<span class="' + D + '">' + E + "</span>"
        }
        var C;
        C = Tooltip.tooltip;
        C.style.width = "550px";
        C.style.left = "-2323px";
        C.style.top = "-2323px";
        Tooltip.tooltipTd.innerHTML = E;
        C.style.display = "";
        var F = g_getCursorPos(B);
        Tooltip.fix(C, 0, 0);
        Tooltip.move(F.x, F.y, 0, 0, A, G)
    },
    showAtXY: function (E, A, F, D, C) {
        if (Tooltip.disabled) {
            return
        }
        Tooltip.prepare();
        var B;
        B = Tooltip.tooltip;
        B.style.width = "550px";
        B.style.left = "-2323px";
        B.style.top = "-2323px";
        Tooltip.tooltipTd.innerHTML = E;
        B.style.display = "";
        Tooltip.fix(B, 0, 0);
        Tooltip.move(A, F, 0, 0, D, C, null, null, null, null)
    },
    cursorUpdate: function (B, A, D) {
        if (Tooltip.disabled || !Tooltip.tooltip) {
            return
        }
        B = $E(B);
        if (!A || A < 10) {
            A = 10
        }
        if (!D || D < 10) {
            D = 10
        }
        var C = g_getCursorPos(B);
        Tooltip.move(C.x, C.y, 0, 0, A, D)
    },
    hide: function () {
        if (Tooltip.tooltip) {
            Tooltip.tooltip.style.display = "none";
            Tooltip.tooltip.visibility = "hidden";
            Tooltip.tooltipTable.className = "";
            if (Browser.ie6) {
                Tooltip.iframe.style.display = "none"
            }
            Tooltip.setIcon(null)
        }
    },
    setIcon: function (A) {
        Tooltip.prepare();
        if (A) {
            Tooltip.icon.style.backgroundImage = "url(images/icons/medium/" + A.toLowerCase() + ".png)";
            Tooltip.icon.style.visibility = "visible"
        } else {
            Tooltip.icon.style.backgroundImage = "none";
            Tooltip.icon.style.visibility = "hidden"
        }
        Tooltip.iconVisible = A ? 1 : 0
    }
};
var g_listviews = {};
function Listview(a) {
    cO(this, a);
    if (this.id) {
        var m = (this.tabs ? "tab-" : "lv-") + this.id;
        if (this.parent) {
            var k = ce("div");
            k.id = m;
            ae($(this.parent), k);
            this.container = k
        } else {
            this.container = ge(m)
        }
    } else {
        return
    }
    if (this.template && Listview.templates[this.template]) {
        this.template = Listview.templates[this.template]
    } else {
        return
    }
    g_listviews[this.id] = this;
    if (this.data == null) {
        this.data = []
    }
    if (this.poundable == null) {
        if (this.template.poundable != null) {
            this.poundable = this.template.poundable
        } else {
            this.poundable = true
        }
    }
    if (this.searchable == null) {
        if (this.template.searchable != null) {
            this.searchable = this.template.searchable
        } else {
            this.searchable = false
        }
    }
    if (this.filtrable == null) {
        if (this.template.filtrable != null) {
            this.filtrable = this.template.filtrable
        } else {
            this.filtrable = false
        }
    }
    if (this.data.length == 1) {
        this.filtrable = false;
        this.searchable = false
    }
    if (this.searchable && this.searchDelay == null) {
        if (this.template.searchDelay != null) {
            this.searchDelay = this.template.searchDelay
        } else {
            this.searchDelay = 333
        }
    }
    if (this.hideBands == null) {
        this.hideBands = this.template.hideBands
    }
    if (this.hideNav == null) {
        this.hideNav = this.template.hideNav
    }
    if (this.hideHeader == null) {
        this.hideHeader = this.template.hideHeader
    }
    if (this.hideCount == null) {
        this.hideCount = this.template.hideCount
    }
    if (this.computeDataFunc == null && this.template.computeDataFunc != null) {
        this.computeDataFunc = this.template.computeDataFunc
    }
    if (this.createCbControls == null && this.template.createCbControls != null) {
        this.createCbControls = this.template.createCbControls
    }
    if (this.template.onBeforeCreate != null) {
        if (this.onBeforeCreate == null) {
            this.onBeforeCreate = this.template.onBeforeCreate
        } else {
            this.onBeforeCreate = [this.template.onBeforeCreate, this.onBeforeCreate]
        }
    }
    if (this.onAfterCreate == null && this.template.onAfterCreate != null) {
        this.onAfterCreate = this.template.onAfterCreate
    }
    if (this.createNote == null && this.template.createNote != null) {
        this.createNote = this.template.createNote
    }
    if (this.customFilter == null && this.template.customFilter != null) {
        this.customFilter = this.template.customFilter
    }
    if (this.customFilter) {
        this.customFilter = this.customFilter.bind(this)
    }
    if (this.clip == null && this.template.clip != null) {
        this.clip = this.template.clip
    }
    if (this.mode == null) {
        this.mode = this.template.mode
    }
    if (this.nItemsPerPage == null) {
        if (this.template.nItemsPerPage != null) {
            this.nItemsPerPage = this.template.nItemsPerPage
        } else {
            this.nItemsPerPage = 50
        }
    }
    this.nItemsPerPage |= 0;
    if (this.nItemsPerPage <= 0) {
        this.nItemsPerPage = 0
    }
    this.nFilters = 0;
    this.resetRowVisibility();
    if (this.mode == Listview.MODE_TILED) {
        if (this.nItemsPerRow == null) {
            var q = this.template.nItemsPerRow;
            this.nItemsPerRow = (q != null ? q : 4)
        }
        this.nItemsPerRow |= 0;
        if (this.nItemsPerRow <= 1) {
            this.nItemsPerRow = 1
        }
    } else {
        this.nItemsPerRow = 1
    }
    this.columns = [];
    for (var e = 0, j = this.template.columns.length; e < j; ++e) {
        var p = this.template.columns[e], c = {};
        cO(c, p);
        this.columns.push(c)
    }
    if (this.extraCols != null) {
        for (var e = 0, j = this.extraCols.length; e < j; ++e) {
            var l = null;
            var b = this.extraCols[e];
            if (b.after || b.before) {
                var h = in_array(this.columns, (b.after ? b.after : b.before), function(d) {
                    return d.id
                });
                if (h != -1) {
                    l = (b.after ? h + 1 : h - 1)
                }
            }
            if (l == null) {
                l = this.columns.length
            }
            this.columns.splice(l, 0, b)
        }
    }
    this.visibility = [];
    var n = [], o = [];
    if (this.visibleCols != null) {
        array_walk(this.visibleCols, function(d) {
            n[d] = 1
        })
    }
    if (this.hiddenCols != null) {
        array_walk(this.hiddenCols, function(d) {
            o[d] = 1
        })
    }
    for (var e = 0, j = this.columns.length; e < j; ++e) {
        var b = this.columns[e];
        if (n[b.id] != null || (!b.hidden && o[b.id] == null)) {
            this.visibility.push(e)
        }
    }
    if (this.sort == null && this.template.sort) {
        this.sort = this.template.sort.slice(0)
    } else {
        if (this.sort != null) {
            var g = this.sort;
            this.sort = [];
            for (var e = 0, j = g.length; e < j; ++e) {
                var b = parseInt(g[e]);
                if (isNaN(b)) {
                    var f = 0;
                    if (g[e].charAt(0) == "-") {
                        f = 1;
                        g[e] = g[e].substring(1)
                    }
                    var h = in_array(this.columns, g[e], function(d) {
                        return d.id
                    });
                    if (h != -1) {
                        if (f) {
                            this.sort.push(-(h + 1))
                        } else {
                            this.sort.push(h + 1)
                        }
                    }
                } else {
                    this.sort.push(b)
                }
            }
        } else {
            this.sort = []
        }
    }
    if (this.tabs) {
        this.tabIndex = this.tabs.add(this.getTabName(), {id: this.id,onLoad: this.initialize.bind(this)})
    } else {
        this.initialize()
    }
}
Listview.MODE_DEFAULT = 0;
Listview.MODE_CHECKBOX = 1;
Listview.MODE_DIV = 2;
Listview.MODE_TILED = 3;
Listview.prototype = {initialize: function() {
        if (this.data.length) {
            if (this.computeDataFunc != null) {
                for (var d = 0, a = this.data.length; d < a; ++d) {
                    this.computeDataFunc(this.data[d])
                }
            }
        }
        if (this.tabs) {
            this.pounded = (this.tabs.poundedTab == this.tabIndex);
            if (this.pounded) {
                this.readPound()
            }
        } else {
            this.readPound()
        }
        this.updateSortIndex();
        var b;
        if (this.onBeforeCreate != null) {
            if (typeof this.onBeforeCreate == "function") {
                b = this.onBeforeCreate()
            } else {
                for (var d = 0; d < this.onBeforeCreate.length; ++d) {
                    (this.onBeforeCreate[d].bind(this))()
                }
            }
        }
        this.noData = ce("div");
        this.noData.className = "listview-nodata text";
        if (this.mode == Listview.MODE_DIV) {
            this.mainContainer = this.mainDiv = ce("div");
            this.mainContainer.className = "listview-mode-div"
        } else {
            this.mainContainer = this.table = ce("table");
            this.thead = ce("thead");
            this.tbody = ce("tbody");
            if (this.mode == Listview.MODE_TILED) {
                this.table.className = "listview-mode-tiled";
                var e = (100 / this.nItemsPerRow) + "%", f = ce("colgroup"), c;
                for (var d = 0; d < this.nItemsPerRow; ++d) {
                    c = ce("col");
                    c.style.width = e;
                    ae(f, c)
                }
                ae(this.mainContainer, f)
            } else {
                this.table.className = "listview-mode-default";
                this.createHeader();
                this.updateSortArrow()
            }
            ae(this.table, this.thead);
            ae(this.table, this.tbody);
            if (this.mode == Listview.MODE_CHECKBOX && Browser.ie) {
                setTimeout(Listview.cbIeFix.bind(this), 1)
            }
        }
        this.createBands();
        if (this.customFilter != null) {
            this.updateFilters()
        }
        this.updateNav();
        this.applySort();
        this.refreshRows();
        if (this.onAfterCreate != null) {
            this.onAfterCreate(b)
        }
    },createHeader: function() {
        var h = ce("tr");
        if (this.mode == Listview.MODE_CHECKBOX) {
            var g = ce("th"), j = ce("div"), c = ce("a");
            g.style.width = "33px";
            c.href = "javascript:;";
            c.className = "listview-cb";
            ns(c);
            ae(c, ct(String.fromCharCode(160)));
            ae(j, c);
            ae(g, j);
            ae(h, g)
        }
        for (var f = 0, b = this.visibility.length; f < b; ++f) {
            var e = this.visibility[f], d = this.columns[e], g = ce("th");
            j = ce("div"), c = ce("a"), outerSpan = ce("span"), innerSpan = ce("span");
            d.__th = g;
            c.href = "javascript:;";
            if (this.filtrable && (d.filtrable == null || d.filtrable)) {
                c.onmouseup = Listview.headerClick.bind(this, d, e);
                c.onclick = c.oncontextmenu = rf
            } else {
                c.onclick = this.sortBy.bind(this, e + 1)
            }
            c.onmouseover = Listview.headerOver.bind(this, c, d);
            c.onmouseout = Tooltip.hide;
            ns(c);
            if (d.width != null) {
                g.style.width = d.width
            }
            if (d.align != null) {
                g.style.textAlign = d.align
            }
            if (d.span != null) {
                g.colSpan = d.span
            }
            ae(innerSpan, ct(d.name));
            ae(outerSpan, innerSpan);
            ae(c, outerSpan);
            ae(j, c);
            ae(g, j);
            ae(h, g)
        }
        if (this.hideHeader) {
            this.thead.style.display = "none"
        }
        ae(this.thead, h)
    },createBands: function() {
        var h = ce("div"), j = ce("div"), k = ce("div"), i = ce("div");
        this.bandTop = h;
        this.bandBot = j;
        this.noteTop = k;
        this.noteBot = i;
        h.className = "listview-band-top";
        j.className = "listview-band-bottom";
        this.navTop = this.createNav(true);
        this.navBot = this.createNav(false);
        k.className = i.className = "listview-note";
        if (this.note) {
            k.innerHTML = this.note
        } else {
            if (this.createNote) {
                this.createNote(k, i)
            }
        }
        if (!k.firstChild && this.mode != Listview.MODE_CHECKBOX) {
            ae(k, ct(String.fromCharCode(160)))
        }
        if (this.mode != Listview.MODE_CHECKBOX) {
            ae(i, ct(String.fromCharCode(160)))
        }
        ae(h, this.navTop);
        if (this.searchable) {
            var l = this.updateFilters.bind(this, true), d = (this._truncated ? "search-within-results2" : "search-within-results"), c = ce("span"), b = ce("em"), g = ce("a"), f = ce("input");
            c.className = "listview-quicksearch";
            ae(c, b);
            g.href = "javascript:;";
            g.onclick = function() {
                var a = this.nextSibling;
                a.value = "";
                a.className = d;
                l()
            };
            g.style.display = "none";
            ae(g, ce("span"));
            ae(c, g);
            ns(g);
            f.setAttribute("type", "text");
            f.className = d;
            f.style.width = (this._truncated ? "19em" : "15em");
            g_onAfterTyping(f, l, this.searchDelay);
            f.onmouseover = function() {
                if (trim(this.value) != "") {
                    this.className = ""
                }
            };
            f.onfocus = function() {
                this.className = ""
            };
            f.onblur = function() {
                if (trim(this.value) == "") {
                    this.className = d;
                    this.value = ""
                }
            };
            if (Browser.ie) {
                setTimeout(function() {
                    f.value = ""
                }, 1)
            }
            ae(c, f);
            this.quickSearchBox = f;
            this.quickSearchGlass = b;
            this.quickSearchClear = g;
            ae(h, c)
        }
        ae(h, k);
        ae(j, this.navBot);
        ae(j, i);
        if (this.mode == Listview.MODE_CHECKBOX) {
            if (this.note) {
                k.style.paddingBottom = "5px"
            }
            this.cbBarTop = this.createCbBar(true);
            this.cbBarBot = this.createCbBar(false);
            ae(h, this.cbBarTop);
            ae(j, this.cbBarBot);
            if (!this.noteTop.firstChild && !this.cbBarTop.firstChild) {
                this.noteTop.innerHTML = "&nbsp;"
            }
            if (!this.noteBot.firstChild && !this.cbBarBot.firstChild) {
                this.noteBot.innerHTML = "&nbsp;"
            }
            if (this.noteTop.firstChild && this.cbBarTop.firstChild) {
                this.noteTop.style.paddingBottom = "6px"
            }
            if (this.noteBot.firstChild && this.cbBarBot.firstChild) {
                this.noteBot.style.paddingBottom = "6px"
            }
        }
        if (this.hideBands & 1) {
            h.style.display = "none"
        }
        if (this.hideBands & 2) {
            j.style.display = "none"
        }
        ae(this.container, this.bandTop);
        if (this.clip) {
            var e = ce("div");
            e.className = "listview-clip";
            e.style.width = this.clip.w + "px";
            e.style.height = this.clip.h + "px";
            this.clipDiv = e;
            ae(e, this.mainContainer);
            ae(e, this.noData);
            ae(this.container, e)
        } else {
            ae(this.container, this.mainContainer);
            ae(this.container, this.noData)
        }
        ae(this.container, this.bandBot)
    },createNav: function(g) {
        var c = ce("div"), d = ce("a"), b = ce("a"), a = ce("a"), j = ce("a"), i = ce("span"), h = ce("b"), f = ce("b"), e = ce("b");
        c.className = "listview-nav";
        d.href = b.href = a.href = j.href = "javascript:;";
        ae(d, ct(String.fromCharCode(171) + LANG.lvpage_first));
        ae(b, ct(String.fromCharCode(8249) + LANG.lvpage_previous));
        ae(a, ct(LANG.lvpage_next + String.fromCharCode(8250)));
        ae(j, ct(LANG.lvpage_last + String.fromCharCode(187)));
        ns(d);
        ns(b);
        ns(a);
        ns(j);
        d.onclick = this.firstPage.bind(this);
        b.onclick = this.previousPage.bind(this);
        a.onclick = this.nextPage.bind(this);
        j.onclick = this.lastPage.bind(this);
        ae(h, ct("a"));
        ae(f, ct("a"));
        ae(e, ct("a"));
        ae(i, h);
        ae(i, ct(LANG.hyphen));
        ae(i, f);
        ae(i, ct(LANG.lvpage_of));
        ae(i, e);
        ae(c, d);
        ae(c, b);
        ae(c, i);
        ae(c, a);
        ae(c, j);
        if (g) {
            if (this.hideNav & 1) {
                c.style.display = "none"
            }
        } else {
            if (this.hideNav & 2) {
                c.style.display = "none"
            }
        }
        return c
    },createCbBar: function(a) {
        var b = ce("div");
        if (this.createCbControls) {
            this.createCbControls(b, a)
        }
        if (b.firstChild) {
            b.className = "listview-withselected" + (a ? "" : "2")
        }
        return b
    },refreshRows: function() {
        var a = (this.mode == Listview.MODE_DIV ? this.mainContainer : this.tbody);
        ee(a);
        if (this.nRowsVisible == 0) {
            if (!this.filtered) {
                this.bandTop.style.display = this.bandBot.style.display = "none";
                this.mainContainer.style.display = "none"
            }
            this.noData.style.display = "";
            this.showNoData();
            return
        }
        var n, b, c;
        if (!(this.hideBands & 1)) {
            this.bandTop.style.display = ""
        }
        if (!(this.hideBands & 2)) {
            this.bandBot.style.display = ""
        }
        if (this.nItemsPerPage > 0) {
            n = this.rowOffset;
            b = Math.min(n + this.nRowsVisible, n + this.nItemsPerPage);
            if (this.filtered && this.rowOffset > 0) {
                for (var f = 0, g = 0; f < this.data.length && g < this.rowOffset; ++f) {
                    var o = this.data[f];
                    if (o.__hidden || o.__deleted) {
                        ++n
                    } else {
                        ++g
                    }
                }
                b += (n - this.rowOffset)
            }
        } else {
            n = 0;
            b = this.nRowsVisible
        }
        var h = b - n;
        if (this.mode == Listview.MODE_DIV) {
            for (var e = 0; e < h; ++e) {
                var f = n + e, o = this.data[f];
                if (!o) {
                    break
                }
                if (o.__hidden || o.__deleted) {
                    ++h;
                    continue
                }
                ae(this.mainDiv, this.getDiv(f))
            }
        } else {
            if (this.mode == Listview.MODE_TILED) {
                var d = 0, l = ce("tr");
                for (var e = 0; e < h; ++e) {
                    var f = n + e, o = this.data[f];
                    if (!o) {
                        break
                    }
                    if (o.__hidden || o.__deleted) {
                        ++h;
                        continue
                    }
                    ae(l, this.getCell(f));
                    if (++d == this.nItemsPerRow) {
                        ae(this.tbody, l);
                        if (e + 1 < h) {
                            l = ce("tr")
                        }
                        d = 0
                    }
                }
                if (d != 0) {
                    for (; d < 4; ++d) {
                        var m = ce("td");
                        m.className = "empty-cell";
                        ae(l, m)
                    }
                    ae(this.tbody, l)
                }
            } else {
                for (var e = 0; e < h; ++e) {
                    var f = n + e, o = this.data[f];
                    if (!o) {
                        break
                    }
                    if (o.__hidden || o.__deleted) {
                        ++h;
                        continue
                    }
                    ae(this.tbody, this.getRow(f))
                }
            }
        }
        this.mainContainer.style.display = "";
        this.noData.style.display = "none"
    },showNoData: function() {
        var b = this.noData;
        ee(b);
        var a = -1;
        if (this.template.onNoData) {
            a = (this.template.onNoData.bind(this, b))()
        }
        if (a == -1) {
            ae(this.noData, ct(this.filtered ? LANG.lvnodata2 : LANG.lvnodata))
        }
    },getDiv: function(a) {
        var b = this.data[a];
        if (b.__div == null) {
            this.createDiv(b, a)
        }
        return b.__div
    },createDiv: function(b, a) {
        var c = ce("div");
        b.__div = c;
        (this.template.compute.bind(this, b, c, a))()
    },getCell: function(a) {
        var b = this.data[a];
        if (b.__div == null) {
            this.createCell(b, a)
        }
        return b.__td
    },createCell: function(b, a) {
        var c = ce("td");
        b.__td = c;
        (this.template.compute.bind(this, b, c, a))();
        if (this.template.getItemLink) {
            c.onclick = this.itemClick.bind(this, b)
        }
        if (Browser.ie6) {
            c.onmouseover = Listview.itemOver;
            c.onmouseout = Listview.itemOut
        }
    },getRow: function(a) {
        var b = this.data[a];
        if (b.__tr == null) {
            this.createRow(b)
        }
        return b.__tr
    },createRow: function(j) {
        var g = ce("tr");
        j.__tr = g;
        if (this.mode == Listview.MODE_CHECKBOX) {
            var c = ce("td");
            if (!j.__nochk) {
                c.className = "listview-cb";
                c.onclick = Listview.cbCellClick;
                var b = ce("input");
                ns(b);
                b.type = "checkbox";
                b.onclick = Listview.cbClick;
                if (j.__chk) {
                    b.checked = true;
                    if (Browser.ie) {
                        b.defaultChecked = true
                    }
                }
                j.__cb = b;
                ae(c, b)
            }
            ae(g, c)
        }
        for (var d = 0, e = this.visibility.length; d < e; ++d) {
            var f = this.visibility[d], a = this.columns[f], c = ce("td"), h;
            if (a.align != null) {
                c.style.textAlign = a.align
            }
            if (a.compute) {
                h = (a.compute.bind(this, j, c, g, f))()
            } else {
                if (j[a.value] != null) {
                    h = j[a.value]
                } else {
                    h = -1
                }
            }
            if (h != -1 && h != null) {
                c.insertBefore(ct(h), c.firstChild)
            }
            ae(g, c)
        }
        if (this.mode == Listview.MODE_CHECKBOX && j.__chk) {
            g.className = "checked"
        }
        if (this.template.getItemLink) {
            g.onclick = this.itemClick.bind(this, j)
        }
        if (Browser.ie6) {
            g.onmouseover = Listview.itemOver;
            g.onmouseout = Listview.itemOut
        }
    },itemClick: function(d, c) {
        c = $E(c);
        var a = 0, b = c._target;
        while (b && a < 3) {
            if (b.nodeName == "A") {
                return
            }
            b = b.parentNode
        }
        location.href = this.template.getItemLink(d)
    },validatePage: function() {
        var c = this.nItemsPerPage, b = this.rowOffset, a = this.nRowsVisible;
        if (b < 0) {
            this.rowOffset = 0
        } else {
            this.rowOffset = this.getRowOffset(b + c > a ? a - 1 : b)
        }
    },getRowOffset: function(b) {
        var a = this.nItemsPerPage;
        return (a > 0 && b > 0 ? Math.floor(b / a) * a : 0)
    },resetRowVisibility: function() {
        for (var b = 0, a = this.data.length; b < a; ++b) {
            this.data[b].__hidden = false
        }
        this.filtered = false;
        this.rowOffset = 0;
        this.nRowsVisible = this.data.length
    },getColText: function(b, a) {
        if (a.getVisibleText) {
            return a.getVisibleText(b)
        }
        if (a.getValue) {
            return a.getValue(b)
        }
        if (a.value) {
            return b[a.value]
        }
        if (a.compute) {
            return a.compute(b)
        }
        return ""
    },updateFilters: function(d) {
        Tooltip.hide();
        this.resetRowVisibility();
        var w, q, c;
        if (this.searchable) {
            w = trim(this.quickSearchBox.value);
            if (w) {
                this.quickSearchGlass.style.display = "none";
                this.quickSearchClear.style.display = "";
                w = w.toLowerCase().replace(/\s+/g, " ");
                q = w.split(" ");
                c = q.length
            } else {
                this.quickSearchGlass.style.display = "";
                this.quickSearchClear.style.display = "none"
            }
        }
        if (!w && this.nFilters == 0 && this.customFilter == null) {
            if (d) {
                this.updateNav();
                this.refreshRows()
            }
            return
        }
        var z = {1: function(i, j) {
                return i > j
            },2: function(i, j) {
                return i == j
            },3: function(i, j) {
                return i < j
            },4: function(i, j) {
                return i >= j
            },5: function(i, j) {
                return i <= j
            },6: function(i, k, j) {
                return k <= i && i <= j
            }};
        var p = {1: function(j, i, k) {
                return i > k
            },2: function(j, i, k) {
                return j <= k && k <= i
            },3: function(j, i, k) {
                return j < k
            },4: function(j, i, k) {
                return i >= k
            },5: function(j, i, k) {
                return j <= k
            },6: function(j, i, B, k) {
                return B <= i && j <= k
            }};
        var o = 0;
        for (var u = 0, v = this.data.length; u < v; ++u) {
            var g = this.data[u], m = 0;
            nSearchMatches = 0, matches = [];
            g.__hidden = true;
            if (this.customFilter && !this.customFilter(g)) {
                continue
            }
            for (var t = 0, h = this.visibility.length; t < h; ++t) {
                var n = this.visibility[t];
                var e = this.columns[n];
                if (e.__filter) {
                    var a = e.__filter, b = false;
                    if (e.type == null || e.type == "num") {
                        var r = null;
                        if (e.getValue) {
                            r = e.getValue(g)
                        } else {
                            if (e.value) {
                                r = parseFloat(g[e.value])
                            }
                        }
                        if (!r) {
                            r = 0
                        }
                        b = (z[a.type])(r, a.value, a.value2)
                    } else {
                        if (e.type == "range") {
                            var A = e.getMinValue(g), y = e.getMaxValue(g);
                            b = (p[a.type])(A, y, a.value, a.value2)
                        } else {
                            var l = this.getColText(g, e);
                            if (l) {
                                l = l.toString().toLowerCase();
                                if (a.invert) {
                                    b = l.match(a.regex) != null
                                } else {
                                    var x = 0;
                                    for (var s = 0, f = a.words.length; s < f; ++s) {
                                        if (l.indexOf(a.words[s]) != -1) {
                                            ++x
                                        } else {
                                            break
                                        }
                                    }
                                    b = (x == a.words.length)
                                }
                            }
                        }
                    }
                    if (a.invert) {
                        b = !b
                    }
                    if (b) {
                        ++m
                    } else {
                        break
                    }
                }
                if (w) {
                    var l = this.getColText(g, e);
                    if (l) {
                        l = l.toString().toLowerCase();
                        for (var s = 0, f = q.length; s < f; ++s) {
                            if (!matches[s]) {
                                if (l.indexOf(q[s]) != -1) {
                                    matches[s] = 1;
                                    ++nSearchMatches
                                }
                            }
                        }
                    }
                }
            }
            if ((this.nFilters == 0 || m == this.nFilters) && (!w || nSearchMatches == c)) {
                g.__hidden = false;
                ++o
            }
        }
        this.filtered = (o < this.data.length);
        this.nRowsVisible = o;
        if (d) {
            this.updateNav();
            this.refreshRows()
        }
    },changePage: function() {
        this.validatePage();
        this.refreshRows();
        this.updateNav();
        this.updatePound();
        var a = g_getScroll(), b = ac(this.container);
        if (a.y > b[1]) {
            scrollTo(a.x, b[1])
        }
    },firstPage: function() {
        this.rowOffset = 0;
        this.changePage();
        return false
    },previousPage: function() {
        this.rowOffset -= this.nItemsPerPage;
        this.changePage();
        return false
    },nextPage: function() {
        this.rowOffset += this.nItemsPerPage;
        this.changePage();
        return false
    },lastPage: function() {
        this.rowOffset = 99999999;
        this.changePage();
        return false
    },addSort: function(a, c) {
        var b = in_array(a, Math.abs(c), function(d) {
            return Math.abs(d)
        });
        if (b != -1) {
            c = a[b];
            a.splice(b, 1)
        }
        a.splice(0, 0, c)
    },sortBy: function(a) {
        if (a <= 0 || a > this.columns.length) {
            return
        }
        if (Math.abs(this.sort[0]) == a) {
            this.sort[0] = -this.sort[0]
        } else {
            var b = -1;
            if (this.columns[a - 1].type == "text") {
                b = 1
            }
            this.addSort(this.sort, b * a)
        }
        this.applySort();
        this.refreshRows();
        this.updateSortArrow();
        this.updatePound()
    },applySort: function() {
        if (this.sort.length == 0) {
            return
        }
        Listview.sort = this.sort;
        Listview.columns = this.columns;
        if (this.indexCreated) {
            this.data.sort(Listview.sortIndexedRows)
        } else {
            this.data.sort(Listview.sortRows)
        }
        this.updateSortIndex()
    },setSort: function(b, c, a) {
        if (this.sort.toString() != b.toString()) {
            this.sort = b;
            this.applySort();
            if (c) {
                this.refreshRows()
            }
            if (a) {
                this.updatePound()
            }
        }
    },readPound: function() {
        if (!this.poundable || !location.hash.length) {
            return
        }
        var b = location.hash.substr(1);
        if (this.tabs) {
            var g = b.indexOf(":");
            if (g == -1) {
                return
            }
            b = b.substr(g + 1)
        }
        var a = parseInt(b);
        if (!isNaN(a)) {
            this.rowOffset = a;
            this.validatePage();
            if (this.poundable != 2) {
                var d = [];
                var f = b.match(/(\+|\-)[0-9]+/g);
                if (f != null) {
                    for (var c = f.length - 1; c >= 0; --c) {
                        var e = parseInt(f[c]) | 0;
                        var b = Math.abs(e);
                        if (b <= 0 || b > this.columns.length) {
                            break
                        }
                        this.addSort(d, e)
                    }
                    this.setSort(d, false, false)
                }
            }
            if (this.tabs) {
                this.tabs.setTabPound(this.tabIndex, this.getTabPound())
            }
        }
    },updateSortArrow: function() {
        if (!this.sort.length || !this.thead) {
            return
        }
        var a = in_array(this.visibility, Math.abs(this.sort[0]) - 1);
        if (a == -1) {
            return
        }
        if (this.mode == Listview.MODE_CHECKBOX) {
            a += 1
        }
        var b = this.thead.firstChild.childNodes[a].firstChild.firstChild.firstChild;
        if (this.lsa && this.lsa != b) {
            this.lsa.className = ""
        }
        b.className = (this.sort[0] < 0 ? "sortdesc" : "sortasc");
        this.lsa = b
    },updateSortIndex: function() {
        var b = this.data;
        for (var c = 0, a = b.length; c < a; ++c) {
            b[c].__si = c
        }
        this.indexCreated = true
    },updateTabName: function() {
        if (this.tabs && this.tabIndex != null) {
            this.tabs.setTabName(this.tabIndex, this.getTabName())
        }
    },updatePound: function() {
        if (!this.poundable) {
            return
        }
        var a = this.getTabPound();
        if (this.tabs) {
            this.tabs.setTabPound(this.tabIndex, a);
            location.replace("#" + this.id + ":" + a)
        } else {
            location.replace("#" + a)
        }
    },updateNav: function() {
        var e = [this.navTop, this.navBot], j = this.nItemsPerPage, h = this.rowOffset, d = this.nRowsVisible, g = 0, b = 0, f = 0, k = 0;
        if (d > 0) {
            if (!(this.hideNav & 1)) {
                e[0].style.display = ""
            }
            if (!(this.hideNav & 2)) {
                e[1].style.display = ""
            }
        } else {
            e[0].style.display = e[1].style.display = "none"
        }
        if (j) {
            if (h > 0) {
                b = 1;
                if (h >= j + j) {
                    g = 1
                }
            }
            if (h + j < d) {
                f = 1;
                if (h + j + j < d) {
                    k = 1
                }
            }
        }
        for (var c = 0; c < 2; ++c) {
            var a = e[c].childNodes;
            a[0].style.display = (g ? "" : "none");
            a[1].style.display = (b ? "" : "none");
            a[3].style.display = (f ? "" : "none");
            a[4].style.display = (k ? "" : "none");
            a = a[2].childNodes;
            a[0].firstChild.nodeValue = h + 1;
            a[2].firstChild.nodeValue = j ? Math.min(h + j, d) : d;
            a[4].firstChild.nodeValue = d
        }
    },getTabName: function() {
        var a = this.name, b = this.data.length;
        if (b > 0 && !this.hideCount) {
            a += sprintf(LANG.qty, b)
        }
        return a
    },getTabPound: function() {
        var a = "";
        a += this.rowOffset;
        if (this.poundable != 2 && this.sort.length) {
            a += ("+" + this.sort.join("+")).replace(/\+\-/g, "-")
        }
        return a
    },getCheckedRows: function() {
        var d = [];
        for (var c = 0, a = this.data.length; c < a; ++c) {
            var b = this.data[c];
            if ((b.__cb && b.__cb.checked) || (!b.__cb && b.__chk)) {
                d.push(b)
            }
        }
        return d
    },deleteRows: function(c) {
        if (!c || !c.length) {
            return
        }
        for (var b = 0, a = c.length; b < a; ++b) {
            var d = c[b];
            if (!d.__hidden && !d.__hidden) {
                this.nRowsVisible -= 1
            }
            d.__deleted = true
        }
        this.updateTabName();
        if (this.rowOffset >= this.nRowsVisible) {
            this.previousPage()
        } else {
            this.refreshRows();
            this.updateNav()
        }
    },setData: function(a) {
        this.data = a;
        this.indexCreated = false;
        this.resetRowVisibility();
        if (this.tabs) {
            this.pounded = (this.tabs.poundedTab == this.tabIndex);
            if (this.pounded) {
                this.readPound()
            }
        } else {
            this.readPound()
        }
        this.applySort();
        this.updateSortArrow();
        if (this.customFilter != null) {
            this.updateFilters()
        }
        this.updateNav();
        this.refreshRows()
    },getClipDiv: function() {
        return this.clipDiv
    },getNoteTopDiv: function() {
        return this.noteTop
    },focusSearch: function() {
        this.quickSearchBox.focus()
    },clearSearch: function() {
        this.quickSearchBox.value = ""
    }};
Listview.sortRows = function(e, d) {
    var j = Listview.sort, k = Listview.columns;
    for (var h = 0, c = j.length; h < c; ++h) {
        var g, f = k[Math.abs(j[h]) - 1];
        if (f.sortFunc) {
            g = f.sortFunc(e, d, j[h])
        } else {
            g = strcmp(e[f.value], d[f.value])
        }
        if (g != 0) {
            return g * j[h]
        }
    }
    return 0
}, Listview.sortIndexedRows = function(d, c) {
    var g = Listview.sort, h = Listview.columns, e = h[Math.abs(g[0]) - 1], f;
    if (e.sortFunc) {
        f = e.sortFunc(d, c, g[0])
    } else {
        f = strcmp(d[e.value], c[e.value])
    }
    if (f != 0) {
        return f * g[0]
    }
    return (d.__si - c.__si)
}, Listview.cbSelect = function(b) {
    for (var d = 0, a = this.data.length; d < a; ++d) {
        var c = this.data[d];
        var f = b;
        if (!c.__nochk && c.__tr) {
            var e = c.__tr.firstChild.firstChild;
            if (f == null) {
                f = !e.checked
            }
            if (e.checked != f) {
                e.checked = f;
                c.__tr.className = (e.checked ? "checked" : "");
                if (Browser.ie) {
                    e.defaultChecked = f;
                    if (Browser.ie6) {
                        (Listview.itemOut.bind(c.__tr))()
                    }
                }
            }
        } else {
            if (f == null) {
                f = true
            }
        }
        c.__chk = f
    }
};
Listview.cbClick = function(a) {
    setTimeout(Listview.cbUpdate.bind(0, 0, this, this.parentNode.parentNode), 1);
    sp(a)
};
Listview.cbCellClick = function(a) {
    setTimeout(Listview.cbUpdate.bind(0, 1, this.firstChild, this.parentNode), 1);
    sp(a)
};
Listview.cbIeFix = function() {
    var d = gE(this.tbody, "tr");
    for (var c = 0, a = d.length; c < a; ++c) {
        var b = d[c].firstChild.firstChild;
        if (b) {
            b.checked = b.defaultChecked = false
        }
    }
};
Listview.cbUpdate = function(c, a, b) {
    if (c) {
        a.checked = !a.checked
    }
    b.className = (a.checked ? "checked" : "");
    if (Browser.ie) {
        a.defaultChecked = a.checked;
        if (Browser.ie6) {
            (Listview.itemOver.bind(b))()
        }
    }
};
Listview.itemOver = function() {
    this.style.backgroundColor = (this.className == "checked" ? "#2C2C2C" : "#202020")
};
Listview.itemOut = function() {
    this.style.backgroundColor = (this.className == "checked" ? "#242424" : "transparent")
};
Listview.headerClick = function(a, b, c) {
    c = $E(c);
    if (c._button == 3 || c.shiftKey || c.ctrlKey) {
        Tooltip.hide();
        setTimeout(Listview.headerFilter.bind(this, a, null), 1)
    } else {
        this.sortBy(b + 1)
    }
    return false
};
Listview.headerFilter = function(c, f) {
    var j = "";
    if (c.__filter) {
        if (c.__filter.invert) {
            j += "!"
        }
        j += c.__filter.text
    }
    if (f == null) {
        var f = prompt(sprintf(LANG.prompt_colfilter1 + (c.type == "text" ? LANG.prompt_colfilter2 : LANG.prompt_colfilter3), c.name), j)
    }
    if (f != null) {
        var e = {text: "",type: -1};
        f = trim(f.replace(/\s+/g, " "));
        if (f) {
            if (f.charAt(0) == "!" || f.charAt(0) == "-") {
                e.invert = 1;
                f = f.substr(1)
            }
            if (c.type == "text") {
                e.type = 0;
                e.text = f;
                if (e.invert) {
                    e.regex = g_createOrRegex(f)
                } else {
                    e.words = f.toLowerCase().split(" ")
                }
            } else {
                var i, b;
                if (f.match(/(>|=|<|>=|<=)\s*([0-9\.]+)/)) {
                    i = parseFloat(RegExp.$2);
                    if (!isNaN(i)) {
                        switch (RegExp.$1) {
                            case ">":
                                e.type = 1;
                                break;
                            case "=":
                                e.type = 2;
                                break;
                            case "<":
                                e.type = 3;
                                break;
                            case ">=":
                                e.type = 4;
                                break;
                            case "<=":
                                e.type = 5;
                                break
                        }
                        e.value = i;
                        e.text = RegExp.$1 + " " + i
                    }
                } else {
                    if (f.match(/([0-9\.]+)\s*\-\s*([0-9\.]+)/)) {
                        i = parseFloat(RegExp.$1);
                        b = parseFloat(RegExp.$2);
                        if (!isNaN(i) && !isNaN(b)) {
                            if (i > b) {
                                var g = i;
                                i = b;
                                b = g
                            }
                            if (i == b) {
                                e.type = 2;
                                e.value = i;
                                e.text = "= " + i
                            } else {
                                e.type = 6;
                                e.value = i;
                                e.value2 = b;
                                e.text = i + " - " + b
                            }
                        }
                    } else {
                        var d = f.toLowerCase().split(" ");
                        if (d.length == 1 && !isNaN(i = parseFloat(d[0]))) {
                            e.type = 2;
                            e.value = i;
                            e.text = "= " + i
                        } else {
                            if (c.type == "text") {
                                e.type = 0;
                                e.text = f;
                                if (e.invert) {
                                    e.regex = g_createOrRegex(f)
                                } else {
                                    e.words = d
                                }
                            }
                        }
                    }
                }
            }
            if (e.type == -1) {
                alert(LANG.message_invalidfilter);
                return
            }
        }
        if (!c.__filter || e.text != c.__filter.text || e.invert != c.__filter.invert) {
            var h = c.__th.firstChild.firstChild;
            if (f && e.text) {
                if (!c.__filter) {
                    h.className = "q5";
                    ++(this.nFilters)
                }
                c.__filter = e
            } else {
                if (c.__filter) {
                    h.className = "";
                    --(this.nFilters)
                }
                c.__filter = null
            }
            this.updateFilters(1)
        }
    }
};
Listview.headerOver = function(b, c, f) {
    var d = "";
    d += '<b class="q1">' + (c.tooltip ? c.tooltip : c.name) + "</b>";
    if (c.__filter) {
        d += "<br />" + sprintf((c.__filter.invert ? LANG.tooltip_colfilter2 : LANG.tooltip_colfilter1), c.__filter.text)
    }
    d += '<br /><span class="q2">' + LANG.tooltip_lvheader1 + "</span>";
    if (this.filtrable && (c.filtrable == null || c.filtrable)) {
        d += '<br /><span class="q2">' + (Browser.opera ? LANG.tooltip_lvheader3 : LANG.tooltip_lvheader2) + "</span>"
    }
    Tooltip.show(b, d, 0, 0, "q")
};
Listview.extraCols = {cost: {id: "cost",name: LANG.cost,getValue: function(a) {
            return (a.cost[3] ? a.cost[3][0][1] : 0) || a.cost[2] || a.cost[1] || a.cost[0]
        },compute: function(a, b) {
            Listview.funcBox.appendMoney(b, a.cost[0], null, a.cost[1], a.cost[2], a.cost[3])
        },sortFunc: function(d, c, e) {
            var g = 0, f = 0;
            if (d.cost[3] != null) {
                array_walk(d.cost[3], function(a, b, j, h) {
                    g += Math.pow(10, h) + a[1]
                })
            }
            if (c.cost[3] != null) {
                array_walk(c.cost[3], function(a, b, j, h) {
                    f += Math.pow(10, h) + a[1]
                })
            }
            return strcmp(g, f) || strcmp(d.cost[2], c.cost[2]) || strcmp(d.cost[1], c.cost[1]) || strcmp(d.cost[0], c.cost[0])
        }},count: {id: "count",name: LANG.count,width: "11%",value: "count",compute: function(b, c) {
            if (!(this._totalCount > 0 || b.outof > 0)) {
                return
            }
            if (b.outof) {
                var a = ce("div");
                a.className = "small q0";
                ae(a, ct(sprintf(LANG.lvdrop_outof, b.outof)));
                ae(c, a)
            }
            return b.count
        },getVisibleText: function(a) {
            var b = a.count;
            if (a.outof) {
                b += " " + a.outof
            }
            return b
        }},percent: {id: "percent",name: "%",width: "10%",value: "percent",compute: function(a, b) {
            if (a.count == -1) {
                return "??"
            }
            if (a.percent >= 1.95) {
                return a.percent.toFixed(0)
            } else if (a.percent < 0) {
                return ((-1 * a.percent) + ' (' + LANG.types[5][0] + ')')
            } else {
                return parseFloat(a.percent.toFixed(4))
            }
        },sortFunc: function(d, c, e) {
            return strcmp(Math.abs(d.percent), Math.abs(c.percent));
        },getVisibleText: function(a) {
            if (a.count == -1) {
                return "??"
            }
            if (a.percent >= 1.95) {
                return a.percent.toFixed(0)
            } else if (a.percent < 0) {
                return ((-1 * a.percent) + ' (' + LANG.types[5][0] + ')')
            } else {
                return parseFloat(a.percent.toFixed(1))
            }
        }},stock: {id: "stock",name: LANG.stock,width: "10%",value: "stock",compute: function(a, b) {
            if (a.stock > 0) {
                return a.stock
            } else {
                b.style.fontFamily = "Verdana, sans-serif";
                return String.fromCharCode(8734)
            }
        },getVisibleText: function(a) {
            if (a.stock > 0) {
                return a.stock
            } else {
                return String.fromCharCode(8734) + " infinity"
            }
        }}};
Listview.funcBox = {createSimpleCol: function(c, d, a, b) {
        return {id: c,name: LANG[d],width: a,value: b}
    },initLootTable: function(b) {
        var a;
        if (this._totalCount != null) {
            a = this._totalCount
        } else {
            a = b.outof
        }
        if (a == 0) {
            if (b.count != -1) {
                b.percent = b.count
            } else {
                b.percent = 0
            }
        } else {
            b.percent = b.count / a * 100
        }
    },assocArrCmp: function(e, d, c) {
        if (e == null) {
            return -1
        } else {
            if (d == null) {
                return 1
            }
        }
        var h = Math.max(e.length, d.length);
        for (var g = 0; g < h; ++g) {
            if (e[g] == null) {
                return -1
            } else {
                if (d[g] == null) {
                    return 1
                }
            }
            var f = strcmp(c[e[g]], c[d[g]]);
            if (f != 0) {
                return f
            }
        }
        return 0
    },location: function(f, g) {
        if (f.location == null) {
            return -1
        }
        for (var d = 0, b = f.location.length; d < b; ++d) {
            if (d > 0) {
                ae(g, ct(LANG.comma))
            }
            var e = f.location[d];
            if (e == -1) {
                ae(g, ct(LANG.ellipsis))
            } else {
                var c = ce("a");
                c.className = "q1";
                c.href = "?maps=" + e;
                ae(c, ct(g_zones[e]));
                ae(g, c)
            }
        }
    },arrayText: function(b, e) {
        if (b == null) {
            return
        }
        var d = "";
        for (var c = 0, a = b.length; c < a; ++c) {
            if (c > 0) {
                d += " "
            }
            if (!e[b[c]]) {
                continue
            }
            d += e[b[c]]
        }
        return d
    },createCenteredIcons: function(h, c, p, m) {
        if (h != null) {
            var l = ce("div"), a = ce("div");
            if (p) {
                var k = ce("div");
                k.style.position = "relative";
                k.style.width = "1px";
                var n = ce("div");
                n.className = "q0";
                n.style.position = "absolute";
                n.style.right = "2px";
                n.style.lineHeight = "26px";
                n.style.fontSize = "11px";
                n.style.whiteSpace = "nowrap";
                ae(n, ct(p));
                ae(k, n);
                ae(l, k)
            }
            var g = g_items;
            if (m == 1) {
                g = g_spells
            }
            for (var e = 0, j = h.length; e < j; ++e) {
                var o;
                if (h[e] == null) {
                    o = ce("div");
                    o.style.width = o.style.height = "26px"
                } else {
                    var b, f;
                    if (typeof h[e] == "object") {
                        b = h[e][0];
                        f = h[e][1]
                    } else {
                        b = h[e]
                    }
                    if (b) {
                        o = g.createIcon(b, 0, f)
                    } else {
                        o = Icon.create("inventoryslot_empty", 0, null, "javascript:;")
                    }
                }
                o.style.cssFloat = o.style.styleFloat = "left";
                ae(l, o)
            }
            l.style.margin = "0 auto";
            l.style.textAlign = "left";
            l.style.width = (26 * h.length) + "px";
            a.className = "clear";
            ae(c, l);
            ae(c, a);
            return true
        }
    },createSocketedIcons: function(b, e, c, g, n) {
        var m = 0, k = ce("div"), a = ce("div");
        for (var f = 0, h = b.length; f < h; ++f) {
            var l, j = c[f];
            if (!c || !j) {
                l = Icon.create(null, 0, null, "javascript:;")
            } else {
                if (g_items[j]) {
                    l = g_items.createIcon(j, 0)
                } else {
                    l = Icon.create(g_gems[j].icon, 0, null, "?item=" + j)
                }
            }
            l.className += " iconsmall-socket-" + g_file_gems[b[f]] + (!c || !j ? "-empty" : "");
            l.style.cssFloat = l.style.styleFloat = "left";
            if (g && g[f]) {
                l.insertBefore(ce("var"), l.childNodes[1]);
                ++m
            }
            ae(k, l)
        }
        k.style.margin = "0 auto";
        k.style.textAlign = "left";
        k.style.width = (26 * b.length) + "px";
        a.className = "clear";
        ae(e, k);
        ae(e, a);
        if (n && m == b.length) {
            k = ce("div");
            k.style.paddingTop = "4px";
            ae(k, ct(n));
            ae(e, k)
        }
    },getItemType: function(c, a, b) {
        if (b != null && g_item_subsubclasses[c] != null && g_item_subsubclasses[c][a] != null) {
            return {url: "?items=" + c + "." + a + "." + b,text: g_item_subsubclasses[c][a][b]}
        }
        if (g_item_subclasses[c] != null) {
            return {url: "?items=" + c + "." + a,text: g_item_subclasses[c][a]}
        } else {
            return {url: "?items=" + c,text: g_item_classes[c]}
        }
    },getQuestCategory: function(a) {
        if (a > 0) {
            return g_zones[a]
        } else {
            return g_quest_sorts[ - a]
        }
    },getFactionCategory: function(b, a) {
        if (b) {
            return g_faction_categories[b]
        } else {
            return g_faction_categories[a]
        }
    },createTextRange: function(b, a) {
        b |= 0;
        a |= 0;
        if (b > 1 || a > 1) {
            if (b != a && a > 0) {
                return b + "-" + a
            } else {
                return b + ""
            }
        }
        return null
    },coReport: function(c, d, f) {
        if (!g_user.id || !g_report_reasons[f]) {
            return
        }
        var a = "";
        if (f == 4) {
            a = prompt(LANG.prompt_details, "")
        } else {
            if (!confirm(sprintf((c == 0 ? LANG.confirm_report : LANG.confirm_report2), g_contact_reasons[f]))) {
                return
            }
        }
        if (a != null) {
            var e = "?report&type=" + c + "&typeid=" + d.id + "&reason=" + f;
            if (a) {
                e += "&reasonmore=" + urlencode(a)
            }
            new Ajax(e);
            var b = ce("span");
            ae(b, ct(LANG.lvcomment_reported));
            this.parentNode.replaceChild(b, this)
        }
    },coReportClick: function(b, a, c) {
        this.menu = [[2, g_report_reasons[2], Listview.funcBox.coReport.bind(this, a, b, 2)], [1, g_report_reasons[1], Listview.funcBox.coReport.bind(this, a, b, 1)], [3, g_report_reasons[3], Listview.funcBox.coReport.bind(this, a, b, 3)], [4, g_report_reasons[4], Listview.funcBox.coReport.bind(this, a, b, 4)]];
		if (a == 1 && b.op && typeof g_pageInfo != "undefined" && !g_pageInfo.sticky) {
            this.menu.splice(3, 0, [0, g_report_reasons[0], Listview.funcBox.coReport.bind(this, a, b, 0)])
        }
        (Menu.showAtCursor.bind(this, c))()
    },coGetColor: function(c, a) {
        if (c.user && g_customColors[c.user]) {
            return " comment-" + g_customColors[c.user]
        }
        switch (a) {
            case -1:
                var b = c.divPost.childNodes[1].className.match(/comment-([a-z]+)/);
                if (b != null) {
                    return " comment-" + b[1]
                }
                break;
            case 3:
            case 4:
                if (c.roles & 56) {
                    return " comment-green"
                } else {
                    if (c.roles & 64) {
                        return " comment-gold"
                    }
                }
                break
        }
        if (c.roles & 2) {
            return " comment-blue"
        } else {
            if (c.rating >= 10) {
                return " comment-green"
            } else {
                if (c.rating < 0) {
                    return " comment-bt"
                }
            }
        }
        return ""
    },coToggleVis: function(b) {
        this.firstChild.nodeValue = (g_toggleDisplay(b.divBody) ? LANG.lvcomment_hide : LANG.lvcomment_show);
        var a = b.divHeader.firstChild.lastChild;
        if (b.ratable) {
            a.style.display = ""
        } else {
            if (b.deleted || b.purged) {
                a.style.fontWeight = "normal";
                a.className = "q10";
                a.innerHTML = (b.deleted ? LANG.lvcomment_deleted : LANG.lvcomment_purged);
                a.style.display = ""
            }
        }
        g_toggleDisplay(b.divLinks);
        if (b.lastEdit != null) {
            g_toggleDisplay(b.divLastEdit)
        }
    },coRate: function(e, a) {
        if (a == 0) {
            var c = 5;
            if (g_user.roles & 2) {
                c = 25
            } else {
                if (g_user.roles & 16) {
                    c = 15
                }
            }
            var d = prompt(sprintf(LANG.prompt_customrating, c, c), 0);
            if (d == null) {
                return
            } else {
                d |= 0;
                if (d != 0 && Math.abs(d) <= c) {
                    a = d
                }
            }
            if (a == 0) {
                return
            }
        } else {
            if (g_user.roles & 26) {
                a *= 5
            }
        }
        new Ajax("?comment=rate&id=" + e.id + "&rating=" + a);
        e.rating += a;
        var b = e.divHeader.firstChild;
        b = b.childNodes[b.childNodes.length - 3];
        b.lastChild.firstChild.nodeValue = (e.rating > 0 ? "+" : "") + e.rating;
        Tooltip.hide();
        de(b.nextSibling);
        de(b.nextSibling)
    },coDelete: function(a) {
        if (a.purged) {
            alert(LANG.message_cantdeletecomment)
        } else {
            if (confirm(LANG.confirm_deletecomment)) {
                new Ajax("?comment=delete&id=" + a.id);
                this.deleteRows([a])
            }
        }
    },coDetach: function(a) {
        if (a.replyTo == 0) {
            alert(LANG.message_cantdetachcomment)
        } else {
            if (confirm(LANG.confirm_detachcomment)) {
                new Ajax("?comment=detach&id=" + a.id);
                a.replyTo = 0;
                alert(LANG.message_commentdetached)
            }
        }
    },coEdit: function(g, e) {
        g.divBody.style.display = "none";
        g.divLinks.firstChild.style.display = "none";
        var f = ce("div");
        f.className = "comment-edit";
        g.divEdit = f;
        if (e == -1) {
            if (g_users[g.user] != null) {
                g.roles = g_users[g.user].roles
            }
        }
        var a = Listview.funcBox.coEditAppend(f, g, e);
        var b = ce("div");
        b.className = "comment-edit-buttons";
        var d = ce("input");
        d.type = "button";
        d.value = LANG.compose_save;
        d.onclick = Listview.funcBox.coEditButton.bind(d, g, true, e);
        ae(b, d);
        ae(b, ct(" "));
        d = ce("input");
        d.type = "button";
        d.value = LANG.compose_cancel;
        d.onclick = Listview.funcBox.coEditButton.bind(d, g, false, e);
        ae(b, d);
        ae(f, b);
        var c = f;
        if (Browser.ie6) {
            c = ce("div");
            c.style.width = "99%";
            ae(c, f)
        }
        if (e == -1) {
            g.divPost.insertBefore(c, g.divBody.nextSibling)
        } else {
            g.__div.insertBefore(c, g.divBody.nextSibling)
        }
        a.focus()
    },coEditAppend: function(m, b, l) {
        var f = Listview.funcBox.coGetCharLimit(l);
        if (l == 1 || l == 3 || l == 4) {
            b.user = g_user.name;
            b.roles = g_user.roles;
            b.rating = 1
        } else {
            if (l == 2) {
                b.roles = g_user.roles;
                b.rating = 1
            }
        }
        if (l == -1 || l == 0) {
            var j = ce("div");
            j.className = "comment-edit-modes";
            ae(j, ct(LANG.compose_mode));
            var o = ce("a");
            o.className = "selected";
            o.onclick = Listview.funcBox.coModeLink.bind(o, 1, l, b);
            o.href = "javascript:;";
            ae(o, ct(LANG.compose_edit));
            ae(j, o);
            ae(j, ct("|"));
            var u = ce("a");
            u.onclick = Listview.funcBox.coModeLink.bind(u, 2, l, b);
            u.href = "javascript:;";
            ae(u, ct(LANG.compose_preview));
            ae(j, u);
            ae(m, j)
        }
        var a = ce("div");
        a.style.display = "none";
        a.className = "comment-body" + Listview.funcBox.coGetColor(b, l);
        ae(m, a);
        var h = ce("div");
        h.className = "comment-edit-body";
        var e = ce("div");
        e.className = "toolbar";
        var g = ce("textarea");
        g.className = "comment-editbox";
        g.rows = 10;
        g.value = b.body;
        switch (l) {
            case 1:
                g.name = "commentbody";
                //g.onfocus = g_revealCaptcha;
                break;
            case 2:
                g.name = "desc";
                g.originalValue = b.body;
                break;
            case 3:
                g.name = "body";
                //g.onfocus = g_revealCaptcha;
                break;
            case 4:
                g.name = "sig";
                g.originalValue = b.body;
                g.rows = (Browser.gecko ? 2 : 3);
                g.style.height = "auto";
                break
        }
        if (l != -1 && l != 0) {
            var d = ce("h3"), v = ce("a"), t = ce("div"), s = ce("div");
            var c = Listview.funcBox.coLivePreview.bind(g, b, l, t);
            if (b.body) {
                v.className = "disclosure-off";
                t.style.display = "none"
            } else {
                v.className = "disclosure-on"
            }
            ae(v, ct(LANG.compose_livepreview));
            ae(d, v);
            v.href = "javascript:;";
            v.onclick = function() {
                c(1);
                v.className = "disclosure-" + (g_toggleDisplay(t) ? "on" : "off")
            };
            ns(v);
            d.className = "first";
            s.className = "pad";
            ae(a, d);
            ae(a, t);
            ae(a, s);
            g_onAfterTyping(g, c, 50);
            aE(g, "focus", function() {
                c();
                a.style.display = "";
                if (l != 4) {
                    g.style.height = "22em"
                }
            })
        } else {
            if (l != 4) {
                aE(g, "focus", function() {
                    g.style.height = "22em"
                })
            }
        }
        var r = [{id: "b",title: LANG.markup_b,pre: "[b]",post: "[/b]"}, {id: "i",title: LANG.markup_i,pre: "[i]",post: "[/i]"}, {id: "u",title: LANG.markup_u,pre: "[u]",post: "[/u]"}, {id: "s",title: LANG.markup_s,pre: "[s]",post: "[/s]"}, {id: "small",title: LANG.markup_small,pre: "[small]",post: "[/small]"}, {id: "url",title: LANG.markup_url,onclick: function() {
                    var i = prompt(LANG.prompt_linkurl, "http://");
                    if (i) {
                        g_insertTag(g, "[url=" + i + "]", "[/url]")
                    }
                }}, {id: "quote",title: LANG.markup_quote,pre: "[quote]",post: "[/quote]"}, {id: "code",title: LANG.markup_code,pre: "[code]",post: "[/code]"}, {id: "ul",title: LANG.markup_ul,pre: "[ul]\n[li]",post: "[/li]\n[/ul]",rep: function(i) {
                    return i.replace(/\n/g, "[/li]\n[li]")
                }}, {id: "ol",title: LANG.markup_ol,pre: "[ol]\n[li]",post: "[/li]\n[/ol]",rep: function(i) {
                    return i.replace(/\n/g, "[/li]\n[li]")
                }}, {id: "li",title: LANG.markup_li,pre: "[li]",post: "[/li]"}];
        for (var p = 0, q = r.length; p < q; ++p) {
            var k = r[p];
            if (l == 4 && k.id == "quote") {
                break
            }
            var n = ce("button");
            var w = ce("img");
            n.setAttribute("type", "button");
            n.title = k.title;
            if (k.onclick != null) {
                n.onclick = k.onclick
            } else {
                n.onclick = g_insertTag.bind(0, g, k.pre, k.post, k.rep)
            }
            w.src = "templates/wowhead/images/pixel.gif";
            w.className = "toolbar-" + k.id;
            ae(n, w);
            ae(e, n)
        }
        ae(h, e);
        ae(h, g);
        ae(h, ce("br"));
        if (l == 4) {
            ae(h, ct(sprintf(LANG.compose_limit2, f, 3)))
        } else {
            ae(h, ct(sprintf(LANG.compose_limit, f)))
        }
        ae(m, h);
        return g
    },coLivePreview: function(f, e, a, b) {
        if (b != 1 && a.style.display == "none") {
            return
        }
        var c = this, i = Listview.funcBox.coGetCharLimit(e), g = (c.value.length > i ? c.value.substring(0, i) : c.value);
        if (e == 4) {
            var h;
            if ((h = g.indexOf("\n")) != -1 && (h = g.indexOf("\n", h + 1)) != -1 && (h = g.indexOf("\n", h + 1)) != -1) {
                g = g.substring(0, h)
            }
        }
        var d = Markup.toHtml(g, {mode: Markup.MODE_COMMENT,roles: f.roles});
        if (d) {
            a.innerHTML = d
        } else {
            a.innerHTML = '<span class="q6">...</span>'
        }
    },coEditButton: function(f, d, e) {
        if (d) {
            var a = gE(f.divEdit, "textarea")[0];
            if (!Listview.funcBox.coValidate(a, e)) {
                return
            }
            if (a.value != f.body) {
                var c = 0;
                if (f.lastEdit != null) {
                    c = f.lastEdit[1]
                }
                ++c;
                f.lastEdit = [g_serverTime, c, g_user.name];
                Listview.funcBox.coUpdateLastEdit(f);
                var b = Listview.funcBox.coGetCharLimit(e);
                f.divBody.innerHTML = Markup.toHtml((a.value.length > b ? a.value.substring(0, b) : a.value), {mode: Markup.MODE_COMMENT,roles: f.roles});
                f.body = a.value;
                if (e == -1) {
                    new Ajax("?forums=editpost&id=" + f.id, {method: "POST",params: "body=" + urlencode(f.body)})
                } else {
                    new Ajax("?comment=edit&id=" + f.id, {method: "POST",params: "body=" + urlencode(f.body)})
                }
            }
        }
        f.divBody.style.display = "";
        f.divLinks.firstChild.style.display = "";
        de(f.divEdit);
        f.divEdit = null
    },coGetCharLimit: function(a) {
        switch (a) {
            case 0:
            case 1:
            case 2:
                return 7500;
            case 4:
                return 250;
            default:
                return 15000
        }
    },coModeLink: function(e, b, f) {
        var j = Listview.funcBox.coGetCharLimit(e);
        var c = Markup.MODE_COMMENT;
        array_walk(gE(this.parentNode, "a"), function(k) {
            k.className = ""
        });
        this.className = "selected";
        var d = gE(this.parentNode.parentNode, "textarea")[0], i = d.parentNode, a = i.previousSibling;
        if (b == 4) {
            c = Markup.MODE_SIGNATURE
        }
        switch (e) {
            case 1:
                i.style.display = "";
                a.style.display = "none";
                i.firstChild.focus();
                break;
            case 2:
                i.style.display = "none";
                var g = (d.value.length > j ? d.value.substring(0, j) : d.value);
                if (b == 4) {
                    var h;
                    if ((h = g.indexOf("\n")) != -1 && (h = g.indexOf("\n", h + 1)) != -1 && (h = g.indexOf("\n", h + 1)) != -1) {
                        g = g.substring(0, h)
                    }
                }
                a.innerHTML = Markup.toHtml(g, {mode: c,roles: f.roles});
                a.style.display = "";
                break
        }
    },coReply: function(b) {
        document.forms.addcomment.elements.replyto.value = b.replyTo;
        var a = ge("gjkdlfgkjh436");
        gE(a, "span")[0].innerHTML = b.user;
        a.style.display = "";
        co_addYourComment()
    },coValidate: function(a, c) {
        c |= 0;
        if (c == 1 || c == -1) {
            if (trim(a.value).length < 1) {
                alert(LANG.message_forumposttooshort);
                return false
            }
        } else {
            if (trim(a.value).length < 10) {
                alert(LANG.message_commenttooshort);
                return false
            }
        }
        var b = Listview.funcBox.coGetCharLimit(c);
        if (a.value.length > b) {
            if (!confirm(sprintf(c == 1 ? LANG.confirm_forumposttoolong : LANG.confirm_commenttoolong, b, a.value.substring(b - 30, b)))) {
                return false
            }
        }
        return true
    },coCustomRatingOver: function(a) {
        Tooltip.showAtCursor(a, LANG.tooltip_customrating, 0, 0, "q")
    },coPlusRatingOver: function(a) {
        Tooltip.showAtCursor(a, LANG.tooltip_uprate, 0, 0, "q2")
    },coMinusRatingOver: function(a) {
        Tooltip.showAtCursor(a, LANG.tooltip_downrate, 0, 0, "q10")
    },coSortDate: function(a) {
        a.nextSibling.nextSibling.className = "";
        a.className = "selected";
        this.mainDiv.className += " listview-aci";
        this.setSort([1], true, false)
    },coSortHighestRatedFirst: function(a) {
        a.previousSibling.previousSibling.className = "";
        a.className = "selected";
        this.mainDiv.className = this.mainDiv.className.replace("listview-aci", "");
        this.setSort([-3, 2], true, false)
    },coUpdateLastEdit: function(f) {
        var b = f.divLastEdit;
        if (!b) {
            return
        }
        if (f.lastEdit != null) {
            var e = f.lastEdit;
            b.childNodes[1].firstChild.nodeValue = e[2];
            b.childNodes[1].href = "?user=" + e[2];
            var c = new Date(e[0]);
            var d = (g_serverTime - c) / 1000;
            if (b.childNodes[3].firstChild) {
                de(b.childNodes[3].firstChild)
            }
            Listview.funcBox.coFormatDate(b.childNodes[3], d, c);
            var a = "";
            if (f.rating != NULL) 
            {
            	a += LANG.lvcomment_patch1 + g_getPatchVersion(c) + LANG.lvcomment_patch2
            }
            if (e[1] > 1) {
                a += LANG.dash + sprintf(LANG.lvcomment_nedits, e[1])
            }
            b.childNodes[4].nodeValue = a;
            b.style.display = ""
        } else {
            b.style.display = "none"
        }
    },coFormatDate: function(f, e, b, g, h) {
        var d;
        if (e < 2592000) {
            var a = sprintf(LANG.date_ago, g_formatTimeElapsed(e));
            var c = new Date();
            c.setTime(b.getTime() + (g_localTime - g_serverTime));
            f.style.cursor = "help";
            f.title = c.toLocaleString()
        } else {
            a = LANG.date_on + g_formatDateSimple(b, g)
        }
        if (h == 1) {
            a = a.substr(0, 1).toUpperCase() + a.substr(1)
        }
        d = ct(a);
        ae(f, d)
    },ssCellOver: function() {
        this.className = "screenshot-caption-over"
    },ssCellOut: function() {
        this.className = "screenshot-caption"
    },ssCellClick: function(b, d) {
        d = $E(d);
        if (d.shiftKey || d.ctrlKey) {
            return
        }
        var a = 0, c = d._target;
        while (c && a < 3) {
            if (c.nodeName == "A") {
                return
            }
            if (c.nodeName == "IMG") {
                break
            }
            c = c.parentNode
        }
        ScreenshotViewer.show({screenshots: this.data,pos: b})
    },moneyHonorOver: function(a) {
        Tooltip.showAtCursor(a, LANG.tooltip_honorpoints, 0, 0, "q")
    },moneyArenaOver: function(a) {
        Tooltip.showAtCursor(a, LANG.tooltip_arenapoints, 0, 0, "q")
    },moneyAchievementOver: function(a) {
        Tooltip.showAtCursor(a, LANG.tooltip_achievementpoints, 0, 0, "q")
    },appendMoney: function(g, a, f, m, j, c, l) {
        var k, h = 0;
        if (a >= 10000) {
            h = 1;
            k = ce("span");
            k.className = "moneygold";
            ae(k, ct(Math.floor(a / 10000)));
            ae(g, k);
            a %= 10000
        }
        if (a >= 100) {
            if (h) {
                ae(g, ct(" "))
            } else {
                h = 1
            }
            k = ce("span");
            k.className = "moneysilver";
            ae(k, ct(Math.floor(a / 100)));
            ae(g, k);
            a %= 100
        }
        if (a >= 1 || f != null) {
            if (h) {
                ae(g, ct(" "))
            } else {
                h = 1
            }
            k = ce("span");
            k.className = "moneycopper";
            ae(k, ct(a));
            ae(g, k)
        }
        if (m != null && m != 0) {
            if (h) {
                ae(g, ct(" "))
            } else {
                h = 1
            }
            k = ce("span");
            k.className = "money" + (m < 0 ? "horde" : "alliance") + " tip";
            k.onmouseover = Listview.funcBox.moneyHonorOver;
            k.onmousemove = Tooltip.cursorUpdate;
            k.onmouseout = Tooltip.hide;
            ae(k, ct(number_format(Math.abs(m))));
            ae(g, k)
        }
        if (j >= 1) {
            if (h) {
                ae(g, ct(" "))
            } else {
                h = 1
            }
            k = ce("span");
            k.className = "moneyarena tip";
            k.onmouseover = Listview.funcBox.moneyArenaOver;
            k.onmousemove = Tooltip.cursorUpdate;
            k.onmouseout = Tooltip.hide;
            ae(k, ct(number_format(j)));
            ae(g, k)
        }
        if (c != null) {
            for (var b = 0; b < c.length; ++b) {
                if (h) {
                    ae(g, ct(" "))
                } else {
                    h = 1
                }
                var n = c[b][0];
                var e = c[b][1];
                k = ce("a");
                k.href = "?item=" + n;
                k.className = "moneyitem";
                k.style.backgroundImage = "url(images/icons/tiny/" + g_items.getIcon(n).toLowerCase() + ".gif)";
                ae(k, ct(e));
                ae(g, k)
            }
        }
        if (l != null) {
            if (h) {
                ae(g, ct(" "))
            } else {
                h = 1
            }
            k = ce("span");
            k.className = "moneyachievement tip";
            k.onmouseover = Listview.funcBox.moneyAchievementOver;
            k.onmousemove = Tooltip.cursorUpdate;
            k.onmouseout = Tooltip.hide;
            ae(k, ct(number_format(l)));
            ae(g, k)
        }
    },getUpperSource: function(a, b) {
        switch (a) {
            case 2:
                if (b.z) {
                    return LANG.source_zonedrop
                }
                break;
            case 4:
                return LANG.source_quests;
            case 5:
                return LANG.source_vendors
        }
        return g_sources[a]
    },getLowerSource: function(a, d, c) {
        switch (a) {
            case 3:
                if (d.p && g_sources_pvp[d.p]) {
                    return {text: g_sources_pvp[d.p]}
                }
                break
        }
        switch (c) {
            case 0:
            case 1:
            case 2:
                if (d.z) {
                    var b = {url: "?maps=" + d.z,text: g_zones[d.z]};
                    if (d.t && a == 5) {
                        b.pretext = LANG.lvitem_vendorin
                    }
                    if (d.dd) {
                        if (d.dd == 1) {
                            b.posttext = LANG.lvitem_normal
                        } else {
                            if (d.dd == 2) {
                                b.posttext = LANG.lvitem_heroic
                            }
                        }
                    }
                    return b
                }
                break;
            case 5:
                return {url: "?quests=" + d.c2 + "." + d.c,text: Listview.funcBox.getQuestCategory(d.c)};
                break;
            case 6:
                if (d.c && d.s) {
                    return {url: "?spells=" + d.c + "." + d.s,text: g_spell_skills[d.s]}
                } else {
                    return {url: "?spells=0",text: "??"}
                }
                break
        }
    }};
Listview.templates = {faction: {sort: [1],nItemsPerPage: -1,searchable: 1,filtrable: 1,columns: [{id: "name",name: LANG.name,type: "text",align: "left",value: "name",compute: function(d, e) {
                    var b = ce("a");
                    b.style.fontFamily = "Verdana, sans-serif";
                    b.href = this.template.getItemLink(d);
                    ae(b, ct(d.name));
                    if (d.expansion) {
                        var c = ce("span");
                        c.className = (d.expansion == 1 ? "bc-icon" : "wotlk-icon");
                        ae(c, b);
                        ae(e, c)
                    } else {
                        ae(e, b)
                    }
                },getVisibleText: function(a) {
                    var b = a.name;
                    if (a.expansion == 1) {
                        b += " bc"
                    } else {
                        if (a.expansion == 2) {
                            b += "wotlk wrath"
                        }
                    }
                    return b
                }}, {id: "side",name: LANG.side,type: "text",width: "10%",compute: function(b, c) {
                    if (b.side) {
                        var a = ce("span");
                        a.className = (b.side == 1 ? "alliance-icon" : "horde-icon");
                        ae(a, ct(g_sides[b.side]));
                        ae(c, a)
                    }
                },getVisibleText: function(a) {
                    if (a.side) {
                        return g_sides[a.side]
                    }
                },sortFunc: function(d, c, e) {
                    return strcmp(g_sides[d.side], g_sides[c.side])
                }}, {id: "category",name: LANG.category,type: "text",width: "16%",compute: function(d, e) {
                    if (d.category2 != null) {
                        e.className = "small q1";
                        var b = ce("a"), c = "?factions=" + d.category2;
                        if (d.category) {
                            c += "." + d.category
                        }
                        b.href = c;
                        ae(b, ct(Listview.funcBox.getFactionCategory(d.category, d.category2)));
                        ae(e, b)
                    }
                },getVisibleText: function(a) {
                    return Listview.funcBox.getFactionCategory(a.category, a.category2)
                },sortFunc: function(d, c, f) {
                    var e = Listview.funcBox.getFactionCategory;
                    return strcmp(e(d.category, d.category2), e(c.category, c.category2))
                }}],getItemLink: function(a) {
            return "?faction=" + a.id
        }},item: {sort: [1],searchable: 1,filtrable: 1,columns: [{id: "name",name: LANG.name,type: "text",align: "left",span: 2,value: "name",compute: function(m, c, k) {
                    var f = ce("td");
                    f.style.width = "1px";
                    f.style.padding = "0";
                    f.style.borderRight = "none";
                    var g = null, n = null;
                    if (m.stack != null) {
                        g = Listview.funcBox.createTextRange(m.stack[0], m.stack[1])
                    }
                    if (m.avail != null) {
                        n = m.avail
                    }
                    ae(f, g_items.createIcon(m.id, (this.iconSize == null ? 1 : this.iconSize), g, n));
                    ae(k, f);
                    c.style.borderLeft = "none";
                    var l = ce("a");
                    l.className = "q" + (7 - parseInt(m.name.charAt(0)));
                    l.style.fontFamily = "Verdana, sans-serif";
                    l.href = this.template.getItemLink(m);
                    if (m.rel) {
                        Icon.getLink(f.firstChild).rel = m.rel;
                        l.rel = m.rel
                    }
                    ae(l, ct(m.name.substring(1)));
                    ae(c, l);
                    if (typeof fi_nExtraCols == "number" && fi_nExtraCols >= 5) {
                        if (m.source != null && m.source.length == 1) {
                            var h = ce("div");
                            h.className = "small2";
                            var b = (m.sourcemore ? m.sourcemore[0] : {});
                            var j = 0;
                            if (b.t) {
                                j = b.t;
                                var l = ce("a");
                                if (b.q != null) {
                                    l.className = "q" + b.q
                                } else {
                                    l.className = "q1"
                                }
                                l.href = "?" + g_types[b.t] + "=" + b.ti;
                                if (b.n.length <= 30) {
                                    ae(l, ct(b.n))
                                } else {
                                    l.title = b.n;
                                    ae(l, ct(trim(b.n.substr(0, 27)) + "..."))
                                }
                                ae(h, l)
                            } else {
                                ae(h, ct(Listview.funcBox.getUpperSource(m.source[0], b)))
                            }
                            var e = Listview.funcBox.getLowerSource(m.source[0], b, j);
                            if (e != null) {
                                ae(h, ct(LANG.hyphen));
                                if (e.pretext) {
                                    ae(h, ct(e.pretext))
                                }
                                if (e.url) {
                                    var l = ce("a");
                                    l.className = "q1";
                                    l.href = e.url;
                                    ae(l, ct(e.text));
                                    ae(h, l)
                                } else {
                                    ae(h, ct(e.text))
                                }
                                if (e.posttext) {
                                    ae(h, ct(e.posttext))
                                }
                            }
                            ae(c, h)
                        }
                    }
                },getVisibleText: function(c) {
                    var e = c.name.substring(1);
                    if (typeof fi_nExtraCols == "number" && fi_nExtraCols >= 5) {
                        if (c.source != null && c.source.length == 1) {
                            var d = (c.sourcemore ? c.sourcemore[0] : {});
                            var b = 0;
                            if (d.t) {
                                b = d.t;
                                e += " " + d.n
                            } else {
                                e += " " + Listview.funcBox.getUpperSource(c.source[0], d)
                            }
                            var a = Listview.funcBox.getLowerSource(c.source[0], d, b);
                            if (a != null) {
                                if (a.pretext) {
                                    e += " " + a.pretext
                                }
                                e += " " + a.text;
                                if (a.posttext) {
                                    e += " " + a.posttext
                                }
                            }
                        }
                    }
                    return e
                }}, {id: "level",name: LANG.level,value: "level"}, {id: "reqlevel",name: LANG.req,tooltip: LANG.tooltip_reqlevel,value: "reqlevel",compute: function(a, b) {
                    if (a.reqlevel > 1) {
                        return a.reqlevel
                    }
                }}, {id: "dps",name: LANG.dps,value: "dps",compute: function(a, b) {
                    return (a.dps || 0).toFixed(1)
                },hidden: true}, {id: "speed",name: LANG.speed,value: "speed",compute: function(a, b) {
                    return (a.speed || 0).toFixed(2)
                },hidden: true}, {id: "armor",name: LANG.armor,value: "armor",compute: function(a, b) {
                    if (a.armor > 0) {
                        return a.armor
                    }
                },hidden: true}, {id: "slot",name: LANG.slot,type: "text",compute: function(a, b) {
                    nw(b);
                    return g_item_slots[a.slot]
                },getVisibleText: function(a) {
                    return g_item_slots[a.slot]
                },sortFunc: function(d, c, e) {
                    return strcmp(g_item_slots[d.slot], g_item_slots[c.slot])
                },hidden: true}, {id: "slots",name: LANG.slots,value: "nslots",hidden: true}, {id: "skill",name: LANG.skill,value: "skill",hidden: true}, {id: "glyph",name: LANG.glyphtype,type: "text",value: "glyph",compute: function(a, b) {
                    if (a.glyph) {
                        return g_item_glyphs[a.glyph]
                    }
                },getVisibleText: function(a) {
                    return g_item_glyphs[a.glyph]
                },sortFunc: function(d, c, e) {
                    return strcmp(g_item_glyphs[d.glyph], g_item_glyphs[c.glyph])
                },hidden: true}, {id: "source",name: LANG.source,type: "text",compute: function(k, d) {
                    if (this.iconSize == 0) {
                        d.className = "small"
                    }
                    if (k.source != null) {
                        if (k.source.length == 1) {
                            nw(d);
                            var c = (k.sourcemore ? k.sourcemore[0] : {});
                            var h = 0;
                            if (c.t) {
                                h = c.t;
                                var j = ce("a");
                                if (c.q != null) {
                                    j.className = "q" + c.q
                                } else {
                                    j.className = "q1"
                                }
                                j.href = "?" + g_types[c.t] + "=" + c.ti;
                                if (this.iconSize == 0 || c.n.length <= 20) {
                                    ae(j, ct(c.n))
                                } else {
                                    j.title = c.n;
                                    ae(j, ct(trim(c.n.substr(0, 17)) + "..."))
                                }
                                ae(d, j)
                            } else {
                                ae(d, ct(Listview.funcBox.getUpperSource(k.source[0], c)))
                            }
                            var f = Listview.funcBox.getLowerSource(k.source[0], c, h);
                            if (this.iconSize != 0 && f != null) {
                                var b = ce("div");
                                b.className = "small2";
                                if (f.pretext) {
                                    ae(b, ct(f.pretext))
                                }
                                if (f.url) {
                                    var j = ce("a");
                                    j.className = "q1";
                                    j.href = f.url;
                                    ae(j, ct(f.text));
                                    ae(b, j)
                                } else {
                                    ae(b, ct(f.text))
                                }
                                if (f.posttext) {
                                    ae(b, ct(f.posttext))
                                }
                                ae(d, b)
                            }
                        } else {
                            var l = "";
                            for (var e = 0, g = k.source.length; e < g; ++e) {
                                if (e > 0) {
                                    l += LANG.comma
                                }
                                l += g_sources[k.source[e]]
                            }
                            return l
                        }
                    }
                },getVisibleText: function(c) {
                    if (c.source != null) {
                        if (c.source.length == 1) {
                            var e = "";
                            var d = (c.sourcemore ? c.sourcemore[0] : {});
                            var b = 0;
                            if (d.t) {
                                b = d.t;
                                e += " " + d.n
                            } else {
                                e += " " + Listview.funcBox.getUpperSource(c.source[0], d)
                            }
                            var a = Listview.funcBox.getLowerSource(c.source[0], d, b);
                            if (a != null) {
                                if (a.pretext) {
                                    e += " " + a.pretext
                                }
                                e += " " + a.text;
                                if (a.posttext) {
                                    e += " " + a.posttext
                                }
                            }
                            return e
                        } else {
                            return Listview.funcBox.arrayText(c.source, g_sources)
                        }
                    }
                },sortFunc: function(f, d) {
                    var g = Listview.funcBox.assocArrCmp(f.source, d.source, g_sources);
                    if (g != 0) {
                        return g
                    }
                    var e = (f.sourcemore && f.source.length == 1 ? f.sourcemore[0].n : null), c = (d.sourcemore && d.source.length == 1 ? d.sourcemore[0].n : null);
                    return strcmp(e, c)
                }}, {id: "type",name: LANG.type,type: "text",compute: function(d, e) {
                    e.className = "small q1";
                    nw(e);
                    var b = ce("a");
                    var c = Listview.funcBox.getItemType(d.classs, d.subclass, d.subsubclass);
                    b.href = c.url;
                    ae(b, ct(c.text));
                    ae(e, b)
                },getVisibleText: function(a) {
                    return Listview.funcBox.getItemType(a.classs, a.subclass, a.subsubclass).text
                },sortFunc: function(d, c, f) {
                    var e = Listview.funcBox.getItemType;
                    return strcmp(e(d.classs, d.subclass, d.subsubclass).text, e(c.classs, c.subclass, c.subsubclass).text)
                }}],getItemLink: function(a) {
            return "?item=" + a.id
        },onBeforeCreate: function() {
            var b = false;
            for (var c = 0, a = this.data.length; c < a; ++c) {
                var d = this.data[c];
                if (d.slot > 0 && d.slot != 18) {
                    ++b
                } else {
                    d.__nochk = 1
                }
            }
            if (b > 0) {
                this.mode = 1;
                this._nComparable = b
            }
        },createCbControls: function(d, c) {
            if (!c && this._nComparable < 15) {
                return
            }
            var b = ce("input"), a = ce("input");
            b.type = a.type = "button";
            b.value = LANG.button_compare;
            a.value = LANG.button_deselect;
            b.onclick = this.template.compareItems.bind(this);
            a.onclick = Listview.cbSelect.bind(this, false);
            ae(d, b);
            ae(d, a)
        },compareItems: function() {
            var b = this.getCheckedRows();
            if (!b.length) {
                return
            }
            var a = "";
            array_walk(b, function(c) {
                a += c.id + ";"
            });
            su_addToSaved(rtrim(a, ";"))
        }},itemset: {sort: [1],nItemsPerPage: 75,searchable: 1,filtrable: 1,columns: [{id: "name",name: LANG.name,type: "text",align: "left",value: "name",compute: function(c, f) {
                    var b = ce("a");
                    b.className = "q" + (7 - parseInt(c.name.charAt(0)));
                    b.style.fontFamily = "Verdana, sans-serif";
                    b.href = this.template.getItemLink(c);
                    ae(b, ct(c.name.substring(1)));
                    ae(f, b);
                    if (c.note) {
                        var e = ce("div");
                        e.className = "small";
                        ae(e, ct(g_itemset_notes[c.note]));
                        ae(f, e)
                    }
                },getVisibleText: function(a) {
                    var b = a.name.substring(1);
                    if (a.note) {
                        b += " " + g_itemset_notes[a.note]
                    }
                    return b
                }}, {id: "level",name: LANG.level,type: "range",getMinValue: function(a) {
                    return a.minlevel
                },getMaxValue: function(a) {
                    return a.maxlevel
                },compute: function(a, b) {
                    if (a.minlevel > 0 && a.maxlevel > 0) {
                        if (a.minlevel != a.maxlevel) {
                            return a.minlevel + LANG.hyphen + a.maxlevel
                        } else {
                            return a.minlevel
                        }
                    } else {
                        return -1
                    }
                },sortFunc: function(d, c, e) {
                    if (e > 0) {
                        return strcmp(d.minlevel, c.minlevel) || strcmp(d.maxlevel, c.maxlevel)
                    } else {
                        return strcmp(d.maxlevel, c.maxlevel) || strcmp(d.minlevel, c.minlevel)
                    }
                }}, {id: "pieces",name: LANG.pieces,getValue: function(a) {
                    return a.pieces.length
                },compute: function(a, b) {
                    b.style.padding = "0";
                    Listview.funcBox.createCenteredIcons(a.pieces, b)
                },sortFunc: function(d, c) {
                    var f = (d.pieces != null ? d.pieces.length : 0);
                    var e = (c.pieces != null ? c.pieces.length : 0);
                    return strcmp(f, e)
                }}, {id: "type",name: LANG.type,type: "text",compute: function(a, b) {
                    return g_itemset_types[a.type]
                },sortFunc: function(d, c, e) {
                    return strcmp(g_itemset_types[d.type], g_itemset_types[c.type])
                }}, {id: "classes",name: LANG.classes,type: "text",compute: function(c, e) {
                    if (c.classes != null) {
                        var d = "";
                        for (var b = 0, a = c.classes.length; b < a; ++b) {
                            if (b > 0) {
                                d += LANG.comma
                            }
                            d += g_chr_classes[c.classes[b]]
                        }
                        return d
                    }
                },sortFunc: function(d, c, e) {
                    return Listview.funcBox.assocArrCmp(d.classes, c.classes, g_chr_classes)
                }}],getItemLink: function(a) {
            return "?itemset=" + a.id
        }},npc: {sort: [1],nItemsPerPage: 100,searchable: 1,filtrable: 1,columns: [{id: "name",name: LANG.name,type: "text",align: "left",value: "name",compute: function(c, f) {
                    var b = ce("a");
                    b.style.fontFamily = "Verdana, sans-serif";
                    b.href = this.template.getItemLink(c);
                    ae(b, ct(c.name));
                    ae(f, b);
                    if (c.tag != null) {
                        var e = ce("div");
                        e.className = "small";
                        ae(e, ct("<" + c.tag + ">"));
                        ae(f, e)
                    }
                },getVisibleText: function(a) {
                    var b = a.name;
                    if (a.tag) {
                        b += " <" + a.tag + ">"
                    }
                    return b
                }}, {id: "level",name: LANG.level,type: "range",width: "10%",getMinValue: function(a) {
                    return a.minlevel
                },getMaxValue: function(a) {
                    return a.maxlevel
                },compute: function(a, c) {
                    if (a.classification) {
                        var b = ce("div");
                        b.className = "small";
                        ae(b, ct(g_npc_classifications[a.classification]));
                        ae(c, b)
                    }
                    if (a.classification == 3) {
                        return "??"
                    }
                    if (a.minlevel > 0 && a.maxlevel > 0) {
                        if (a.minlevel != a.maxlevel) {
                            return a.minlevel + LANG.hyphen + a.maxlevel
                        } else {
                            return a.minlevel
                        }
                    }
                    return -1
                },getVisibleText: function(a) {
                    var b = "";
                    if (a.classification) {
                        b += " " + g_npc_classifications[a.classification]
                    }
                    if (a.minlevel > 0 && a.maxlevel > 0) {
                        b += " ";
                        if (a.minlevel != a.maxlevel) {
                            b += a.minlevel + LANG.hyphen + a.maxlevel
                        } else {
                            b += a.minlevel
                        }
                    }
                    return b
                },sortFunc: function(d, c, e) {
                    if (e > 0) {
                        return strcmp(d.minlevel, c.minlevel) || strcmp(d.maxlevel, c.maxlevel) || strcmp(d.classification, c.classification)
                    } else {
                        return strcmp(d.maxlevel, c.maxlevel) || strcmp(d.minlevel, c.minlevel) || strcmp(d.classification, c.classification)
                    }
                }}, {id: "location",name: LANG.location,type: "text",compute: function(a, b) {
                    return Listview.funcBox.location(a, b)
                },getVisibleText: function(a) {
                    return Listview.funcBox.arrayText(a.location, g_zones)
                },sortFunc: function(d, c, e) {
                    return Listview.funcBox.assocArrCmp(d.location, c.location, g_zones)
                }}, {id: "react",name: LANG.react,type: "text",width: "10%",value: "react",filtrable: 0,compute: function(b, g) {
                    if (b.react == null) {
                        return -1
                    }
                    var d = [LANG.lvnpc_alliance, LANG.lvnpc_horde];
                    var f = 0;
                    for (var a = 0; a < 2; ++a) {
                        if (b.react[a] != null) {
                            if (f++ > 0) {
                                ae(g, ct(" "))
                            }
                            var e = ce("span");
                            e.className = (b.react[a] < 0 ? "q10" : (b.react[a] > 0 ? "q2" : "q"));
                            ae(e, ct(d[a]));
                            ae(g, e)
                        }
                    }
                }}, {id: "skin",name: LANG.skin,type: "text",value: "skin",compute: function(c, d) {
                    if (c.skin) {
                        var b = ce("a");
                        b.className = "q1";
                        b.href = "?npcs&filter=cr=35;crs=0;crv=" + c.skin;
                        ae(b, ct(c.skin));
                        ae(d, b)
                    }
                },hidden: 1}, {id: "petfamily",name: LANG.petfamily,type: "text",width: "12%",compute: function(c, d) {
                    d.className = "q1";
                    var b = ce("a");
                    b.href = "?pet=" + c.family;
                    ae(b, ct(g_pet_families[c.family]));
                    ae(d, b)
                },getVisibleText: function(a) {
                    return g_pet_families[a.family]
                },sortFunc: function(d, c, e) {
                    return strcmp(g_pet_families[d.family], g_pet_families[c.family])
                },hidden: 1}, {id: "type",name: LANG.type,type: "text",width: "12%",compute: function(c, d) {
                    d.className = "small q1";
                    var b = ce("a");
                    b.href = "?npcs=" + c.type;
                    ae(b, ct(g_npc_types[c.type]));
                    ae(d, b)
                },getVisibleText: function(a) {
                    return g_npc_types[a.type]
                },sortFunc: function(d, c, e) {
                    return strcmp(g_npc_types[d.type], g_npc_types[c.type])
                }}],getItemLink: function(a) {
            return "?npc=" + a.id
        }},object: {sort: [1],nItemsPerPage: 100,searchable: 1,filtrable: 1,columns: [{id: "name",name: LANG.name,type: "text",align: "left",value: "name",compute: function(c, d) {
                    var b = ce("a");
                    b.style.fontFamily = "Verdana, sans-serif";
                    b.href = this.template.getItemLink(c);
                    ae(b, ct(c.name));
                    ae(d, b)
                }}, {id: "location",name: LANG.location,type: "text",compute: function(a, b) {
                    return Listview.funcBox.location(a, b)
                },getVisibleText: function(a) {
                    return Listview.funcBox.arrayText(a.location, g_zones)
                },sortFunc: function(d, c, e) {
                    return Listview.funcBox.assocArrCmp(d.location, c.location, g_zones)
                }}, {id: "skill",name: LANG.skill,width: "10%",value: "skill",hidden: true}, {id: "type",name: LANG.type,type: "text",width: "12%",compute: function(c, d) {
                    d.className = "small q1";
                    var b = ce("a");
                    b.href = "?objects=" + c.type;
                    ae(b, ct(g_object_types[c.type]));
                    ae(d, b)
                },getVisibleText: function(a) {
                    return g_object_types[a.type]
                },sortFunc: function(d, c, e) {
                    return strcmp(g_object_types[d.type], g_object_types[c.type])
                }}],getItemLink: function(a) {
            return "?object=" + a.id
        }},quest: {sort: [1, 2],nItemsPerPage: 100,searchable: 1,filtrable: 1,columns: [{id: "name",name: LANG.name,type: "text",align: "left",value: "name",compute: function(c, d) {
                    var b = ce("a");
                    b.style.fontFamily = "Verdana, sans-serif";
                    b.href = this.template.getItemLink(c);
                    ae(b, ct(c.name));
                    ae(d, b)
                }}, {id: "level",name: LANG.level,width: "7%",value: "level",compute: function(a, c) {
                    if (a.type || a.daily) {
                        var b = ce("div");
                        b.className = "small";
                        nw(b);
                        if (a.type && a.daily) {
                            ae(b, ct(sprintf(LANG.lvquest_daily, g_quest_types[a.type])))
                        } else {
                            if (a.daily) {
                                ae(b, ct(LANG.daily))
                            } else {
                                if (a.type) {
                                    ae(b, ct(g_quest_types[a.type]))
                                }
                            }
                        }
                        ae(c, b)
                    }
                    return a.level
                },getVisibleText: function(a) {
                    var b = "";
                    if (a.type) {
                        b += " " + g_quest_types[a.type]
                    }
                    if (a.daily) {
                        b += " " + LANG.daily
                    }
                    if (a.level) {
                        b += " " + a.level
                    }
                    return b
                },sortFunc: function(d, c, e) {
                    return strcmp(d.level, c.level) || strcmp(d.type, c.type)
                }}, {id: "reqlevel",name: LANG.req,tooltip: LANG.tooltip_reqlevel,width: "7%",value: "reqlevel"}, {id: "side",name: LANG.side,type: "text",width: "10%",compute: function(a, c) {
                    if (a.side) {
                        var b = ce("span");
                        if (a.side == 1) {
                            b.className = "alliance-icon"
                        } else {
                            if (a.side == 2) {
                                b.className = "horde-icon"
                            }
                        }
                        ae(b, ct(g_sides[a.side]));
                        ae(c, b)
                    } else {
                        return -1
                    }
                },getVisibleText: function(a) {
                    if (a.side) {
                        return g_sides[a.side]
                    }
                },sortFunc: function(d, c, e) {
                    return strcmp(g_sides[d.side], g_sides[c.side])
                }}, 
				{id: "rewards",name: LANG.rewards,filtrable: 0,width: "25%",compute: function(b, g) {
                    var a = (b.itemchoices != null || b.itemrewards != null);
                    if (a) {
                        g.style.padding = "0";
                        var f, e;
                        if (b.itemchoices && b.itemchoices.length > 1) {
                            f = LANG.lvquest_pickone;
                            if (b.itemrewards && b.itemrewards.length > 0) {
                                e = LANG.lvquest_alsoget
                            }
                        }
                        Listview.funcBox.createCenteredIcons(b.itemchoices, g, f);
                        Listview.funcBox.createCenteredIcons(b.itemrewards, g, e);
                    }},

				getVisibleText: function(a) {
                    var b = "";
                    if (a.itemchoices && a.itemchoices.length) {
                        b += " " + LANG.lvquest_pickone;
                        if (a.itemrewards && a.itemrewards.length) {
                            b += " " + LANG.lvquest_alsoget
                        }
                    }
                    if (a.xp > 0) {
                        b += " " + sprintf(LANG.lvquest_xp, a.xp)
                    }
                    return b
                },sortFunc: function(d, c, e) {
                    var g = (d.itemchoices != null ? d.itemchoices.length : 0) + (d.itemrewards != null ? d.itemrewards.length : 0);
                    var f = (c.itemchoices != null ? c.itemchoices.length : 0) + (c.itemrewards != null ? c.itemrewards.length : 0);
                }}, 
				{id: "expirience",name: LANG.expirience,tooltip: LANG.tooltip_expirience,width: "7%",value: "xp"},
				{id: "money",name: LANG.money,tooltip: LANG.tooltip_moeny,width: "10%",compute: function(b, g) {
				if (b.money > 0) {
                        var c = ce("div");
                        Listview.funcBox.appendMoney(c, b.money)
						ae(c, ct(sprintf(b.money > 0 ? "  " : "")))
						ae(g, c)
				}}},
				{id: "reputation",name: LANG.reputation,width: "14%",value: "id",hidden: true}, {id: "category",name: LANG.category,type: "text",width: "16%",compute: function(c, d) {
                    if (c.category != 0) {
                        d.className = "small q1";
                        var b = ce("a");
                        b.href = "?quests=" + c.category2 + "." + c.category;
                        ae(b, ct(Listview.funcBox.getQuestCategory(c.category)));
                        ae(d, b)
                    }
                },getVisibleText: function(a) {
                    return Listview.funcBox.getQuestCategory(a.category)
                },sortFunc: function(d, c, f) {
                    var e = Listview.funcBox.getQuestCategory;
                    return strcmp(e(d.category), e(c.category))
                }}],getItemLink: function(a) {
            return "?quest=" + a.id
        }},spell: {sort: [1, 2],searchable: 1,filtrable: 1,columns: [{id: "name",name: LANG.name,type: "text",align: "left",span: 2,value: "name",compute: function(g, e, k) {
                    var f = ce("td"), o;
                    f.style.width = "44px";
                    f.style.padding = "0";
                    f.style.borderRight = "none";
                    if (g.creates != null) {
                        o = g_items.createIcon(g.creates[0], 1, Listview.funcBox.createTextRange(g.creates[1], g.creates[2]))
                    } else {
                        o = g_spells.createIcon(g.id, 1)
                    }
                    o.style.cssFloat = o.style.styleFloat = "left";
                    ae(f, o);
                    ae(k, f);
                    e.style.borderLeft = "none";
                    var b = ce("div");
                    var n = ce("a");
                    var l = g.name.charAt(0);
                    if (l != "@") {
                        n.className = "q" + (7 - parseInt(l))
                    }
                    n.style.fontFamily = "Verdana, sans-serif";
                    n.href = this.template.getItemLink(g);
                    ae(n, ct(g.name.substring(1)));
                    ae(b, n);
                    if (g.rank) {
                        var j = ce("div");
                        j.className = "small2";
                        ae(j, ct(g.rank));
                        ae(b, j)
                    }
                    if (g.races != null) {
                        b.style.position = "relative";
                        var j = ce("div");
                        j.className = "small";
                        j.style.fontStyle = "italic";
                        j.style.position = "absolute";
                        j.style.right = j.style.bottom = "3px";
                        var m = g.races.toString();
                        if (m == "1,3,4,7,11") {
                            ae(j, ct(g_sides[1]))
                        } else {
                            if (m == "2,5,6,8,10") {
                                ae(j, ct(g_sides[2]))
                            } else {
                                for (var f = 0, h = g.races.length; f < h; ++f) {
                                    if (f > 0) {
                                        ae(j, ct(LANG.comma))
                                    }
                                    ae(j, ct(g_chr_races[g.races[f]]))
                                }
                            }
                        }
                        ae(b, j)
                    }
                    ae(e, b)
                },getVisibleText: function(a) {
                    var b = a.name;
                    if (a.rank) {
                        b += " " + a.rank
                    }
                    if (a.races) {
                        b += " " + Listview.funcBox.arrayText(a.races, g_chr_races)
                    }
                    return b
                }}, {id: "level",name: LANG.level,width: "10%",value: "level",compute: function(a, b) {
                    if (a.level > 0) {
                        return a.level
                    }
                },hidden: true}, {id: "school",name: LANG.school,type: "text",width: "10%",hidden: true,compute: function(a, b) {
                    return g_spell_resistances[a.school]
                },sortFunc: function(d, c, e) {
                    return strcmp(g_spell_resistances[d.school], g_spell_resistances[c.school])
                }}, {id: "reagents",name: LANG.reagents,align: "left",width: "9%",getValue: function(a) {
                    return (a.reagents ? a.reagents.length : 0)
                },compute: function(g, c) {
                    var a = (g.reagents != null);
                    if (a) {
                        c.style.padding = "0";
                        var k = ce("div");
                        var j = g.reagents;
                        k.style.width = (44 * j.length) + "px";
                        for (var e = 0, h = j.length; e < h; ++e) {
                            var b = j[e][0];
                            var f = j[e][1];
                            var l = g_items.createIcon(b, 1, f);
                            l.style.cssFloat = l.style.styleFloat = "left";
                            ae(k, l)
                        }
                        ae(c, k)
                    }
                },sortFunc: function(d, c) {
                    var f = (d.reagents != null ? d.reagents.length : 0);
                    var e = (c.reagents != null ? c.reagents.length : 0);
                    if (f > 0 && f == e) {
                        return strcmp(d.reagents.toString(), c.reagents.toString())
                    } else {
                        return strcmp(f, e)
                    }
                }}, {id: "tp",name: LANG.tp,tooltip: LANG.tooltip_trainingpoints,width: "7%",hidden: true,value: "tp",compute: function(a, b) {
                    if (a.tp > 0) {
                        return a.tp
                    }
                }}, {id: "source",name: LANG.source,type: "text",width: "12%",hidden: true,compute: function(b, e) {
                    if (b.source != null) {
                        var d = "";
                        for (var c = 0, a = b.source.length; c < a; ++c) {
                            if (c > 0) {
                                d += LANG.comma
                            }
                            d += g_sources[b.source[c]]
                        }
                        return d
                    }
                },sortFunc: function(d, c, e) {
                    return Listview.funcBox.assocArrCmp(d.source, c.source, g_sources)
                }}, {id: "skill",name: LANG.skill,type: "text",width: "16%",getValue: function(a) {
                    return a.learnedat
                },compute: function(f, d, j, n) {
                    if (f.skill != null) {
                        var b = ce("div");
                        b.className = "small";
                        for (var e = 0, g = f.skill.length; e < g; ++e) {
                            if (e > 0) {
                                ae(b, ct(LANG.comma))
                            }
                            if (f.skill[e] == -1) {
                                ae(b, ct(LANG.ellipsis))
                            } else {
                                if (in_array([7, -2, -3, -5, -6, -7, 11, 9], f.cat) != -1) {
                                    var l = ce("a");
                                    l.className = "q1";
                                    if (in_array([-5, -6, -7], f.cat) != -1) {
                                        l.href = "?spells=" + f.cat
                                    } else {
                                        l.href = "?spells=" + f.cat + "." + (f.chrclass ? f.chrclass + "." : "") + f.skill[e]
                                    }
                                    ae(l, ct(g_spell_skills[f.skill[e]]));
                                    ae(b, l)
                                } else {
                                    ae(b, ct(g_spell_skills[f.skill[e]]))
                                }
                            }
                        }
                        if (f.learnedat > 0) {
                            ae(b, ct(" ("));
                            var c = ce("span");
                            if (f.learnedat == 9999) {
                                c.className = "q0";
                                ae(c, ct("??"))
                            } else {
                                if (f.learnedat > 0) {
                                    ae(c, ct(f.learnedat));
                                    c.style.fontWeight = "bold"
                                }
                            }
                            ae(b, c);
                            ae(b, ct(")"))
                        }
                        ae(d, b);
                        if (f.colors != null) {
                            this.template.columns[n].type = null;
                            var h = f.colors, m = 0;
                            for (var e = 0; e < h.length; ++e) {
                                if (h[e] > 0) {
                                    ++m;
                                    break
                                }
                            }
                            if (m > 0) {
                                m = 0;
                                b = ce("div");
                                b.className = "small";
                                b.style.fontWeight = "bold";
                                for (var e = 0; e < h.length; ++e) {
                                    if (h[e] > 0) {
                                        if (m++ > 0) {
                                            ae(b, ct(" "))
                                        }
                                        var k = ce("span");
                                        k.className = "r" + (e + 1);
                                        ae(k, ct(h[e]));
                                        ae(b, k)
                                    }
                                }
                                ae(d, b)
                            }
                        }
                    }
                },getVisibleText: function(a) {
                    var b = Listview.funcBox.arrayText(a.skill, g_spell_skills);
                    if (a.learnedat > 0) {
                        b += " " + (a.learnedat == 9999 ? "??" : a.learnedat)
                    }
                    return b
                },sortFunc: function(d, c) {
                    var f = strcmp(d.learnedat, c.learnedat);
                    if (f != 0) {
                        return f
                    }
                    if (d.colors != null && c.colors != null) {
                        for (var e = 0; e < 4; ++e) {
                            f = strcmp(d.colors[e], c.colors[e]);
                            if (f != 0) {
                                return f
                            }
                        }
                    }
                    return Listview.funcBox.assocArrCmp(d.skill, c.skill, g_spell_skills)
                }}],getItemLink: function(a) {
            return "?spell=" + a.id
        }},zone: {sort: [1],nItemsPerPage: -1,searchable: 1,filtrable: 1,columns: [{id: "name",name: LANG.name,type: "text",align: "left",value: "name",compute: function(c, e) {
                    var b = ce("a");
                    b.style.fontFamily = "Verdana, sans-serif";
                    b.href = this.template.getItemLink(c);
                    ae(b, ct(c.name));
                    if (c.expansion) {
                        var d = ce("span");
                        d.className = (c.expansion == 1 ? "bc-icon" : "wotlk-icon");
                        ae(d, b);
                        ae(e, d)
                    } else {
                        ae(e, b)
                    }
                },getVisibleText: function(a) {
                    var b = a.name;
                    if (a.expansion == 1) {
                        b += " bc"
                    } else {
                        if (a.expansion == 2) {
                            b += "wotlk wrath"
                        }
                    }
                    return b
                }}, {id: "level",name: LANG.level,type: "range",width: "10%",getMinValue: function(a) {
                    return a.minlevel
                },getMaxValue: function(a) {
                    return a.maxlevel
                },compute: function(a, b) {
                    if (a.minlevel > 0 && a.maxlevel > 0) {
                        if (a.minlevel != a.maxlevel) {
                            return a.minlevel + LANG.hyphen + a.maxlevel
                        } else {
                            return a.minlevel
                        }
                    }
                },sortFunc: function(d, c, e) {
                    if (e > 0) {
                        return strcmp(d.minlevel, c.minlevel) || strcmp(d.maxlevel, c.maxlevel)
                    } else {
                        return strcmp(d.maxlevel, c.maxlevel) || strcmp(d.minlevel, c.minlevel)
                    }
                }}, {id: "territory",name: LANG.territory,type: "text",width: "13%",compute: function(a, c) {
                    var b = ce("span");
                    switch (a.territory) {
                        case 0:
                            b.className = "alliance-icon";
                            break;
                        case 1:
                            b.className = "horde-icon";
                            break;
                        case 4:
                            b.className = "ffapvp-icon";
                            break
                    }
                    ae(b, ct(g_zone_territories[a.territory]));
                    ae(c, b)
                },getVisibleText: function(a) {
                    return g_zone_territories[a.territory]
                },sortFunc: function(d, c, e) {
                    return strcmp(g_zone_territories[d.territory], g_zone_territories[c.territory])
                }}, {id: "instancetype",name: LANG.instancetype,type: "text",compute: function(a, d) {
                    if (a.instance > 0) {
                        var b = ce("span");
                        if ((a.instance >= 1 && a.instance <= 5) || a.instance == 7) {
                            b.className = "instance-icon" + a.instance
                        }
                        if (a.nplayers == -2) {
                            a.nplayers = "10/25"
                        }
                        var c = g_zone_instancetypes[a.instance];
                        if (a.nplayers && ((a.instance != 2 && a.instance != 5) || a.nplayers > 5)) {
                            c += " (";
                            if (a.instance == 4) {
                                c += sprintf(LANG.lvzone_xvx, a.nplayers, a.nplayers)
                            } else {
                                c += sprintf(LANG.lvzone_xman, a.nplayers)
                            }
                            c += ")"
                        }
                        ae(b, ct(c));
                        ae(d, b)
                    }
                },getVisibleText: function(a) {
                    if (a.instance > 0) {
                        var b = g_zone_instancetypes[a.instance];
                        if (a.nplayers && ((a.instance != 2 && a.instance != 5) || a.nplayers > 5)) {
                            if (a.instance == 4) {
                                b += " " + sprintf(LANG.lvzone_xvx, a.nplayers, a.nplayers)
                            } else {
                                b += " " + sprintf(LANG.lvzone_xman, a.nplayers)
                            }
                        }
                        return b
                    }
                },sortFunc: function(d, c, e) {
                    return strcmp(g_zone_instancetypes[d.instance], g_zone_instancetypes[c.instance]) || strcmp(d.instance, c.instance) || strcmp(d.nplayers, c.nplayers)
                }}, {id: "category",name: LANG.category,type: "text",width: "15%",compute: function(c, d) {
                    d.className = "small q1";
                    var b = ce("a");
                    b.href = "?zones=" + c.category;
                    ae(b, ct(g_zone_categories[c.category]));
                    ae(d, b)
                },getVisibleText: function(a) {
                    return g_zone_categories[a.category]
                },sortFunc: function(d, c, e) {
                    return strcmp(g_zone_categories[d.category], g_zone_categories[c.category])
                }}],getItemLink: function(a) {
            return "?maps=" + a.id
        }},holiday: {sort: [2],nItemsPerPage: -1,searchable: 1,filtrable: 1,columns: [{id: "name",name: LANG.name,type: "text",align: "left",value: "name",compute: function(c, d) {
                    var b = ce("a");
                    b.style.fontFamily = "Verdana, sans-serif";
                    b.href = this.template.getItemLink(c);
                    ae(b, ct(c.name));
                    ae(d, b)
                },getVisibleText: function(a) {
                    return a.name
                }}, {id: "date",name: LANG.date,type: "text",width: "16%",allText: true,compute: function(b, e) {
                    if (b.startDate && b.endDate) {
                        var c = ce("span");
                        if (b.today)
                            c.style.color = "#00bb00";
                        var d = b.startDate, a = b.endDate;
                        if (d != a) {
                            ae(c, ct(d + LANG.hyphen + a))
                        } else {
                            ae(c, ct(d))
                        }
                        ae(e, c)
                    }
                },getVisibleText: function(b) {
                    if (b.startDate && b.endDate) {
                        var d = b.startDate, a = b.endDate;
                        if (d != a) {
                            return d + LANG.hyphen + a
                        } else {
                            return d
                        }
                    }
                    return ""
                },sortFunc: function(e, c, g) {
                    if (e.startDate && c.startDate) {
                        return (e.startDate < c.startDate) ? -1 : (e.startDate > c.startDate) ? 1 : 0;
                    } else {
                        return e.startDate ? -1 : c.startDate ? 1 : 0;
                    }
                }}, {id: "category",name: LANG.category,type: "text",width: "16%",compute: function(d, e) {
                    e.className = "small q1";
                    var b = ce("a"), c = "?events=" + d.category;
                    b.href = c;
                    ae(b, ct(g_holiday_categories[d.category]));
                    ae(e, b)
                },getVisibleText: function(a) {
                    return g_holiday_categories[a.category]
                },sortFunc: function(d, c, e) {
                    return strcmp(g_holiday_categories[d.category], g_holiday_categories[c.category])
                },hidden: true}],getItemLink: function(a) {
            return "?event=" + a.id
        }},comment: {sort: [1],mode: 2,nItemsPerPage: 40,poundable: 2,columns: [{value: "number"}, {value: "id"}, {value: "rating"}],compute: function(t, H) {
            var L, s = new Date(t.date), F = (g_serverTime - s) / 1000, d = (g_user.roles & 26) != 0, I = t.rating < 0 || t.purged || t.deleted, C = d || t.user.toLowerCase() == g_user.name.toLowerCase(), v = C && t.deleted == 0, c = C && t.replyTo != t.id, J = ((t.roles & 190) == 0), D = t.purged == 0 && t.deleted == 0 && g_user.id && t.user.toLowerCase() != g_user.name.toLowerCase() && in_array(t.raters, g_user.id, function(M) {
                return M[0]
            }) == -1, i = t.rating >= 0 && (g_user.id == 0 || D);
            t.ratable = D;
            H.className = "comment";
            if (t.indent) {
                H.className += " comment-indent"
            }
            var w = ce("div");
            var m = ce("div");
            var k = ce("div");
            t.divHeader = w;
            t.divBody = m;
            t.divLinks = k;
            w.className = (I ? "comment-header-bt" : "comment-header");
            var g = ce("div");
            g.className = "comment-rating";
            if (I) {
                var p = ce("a");
                p.href = "javascript:;";
                p.onclick = Listview.funcBox.coToggleVis.bind(p, t);
                ae(p, ct(LANG.lvcomment_show));
                ae(g, p);
                ae(g, ct(" " + String.fromCharCode(160) + " "))
            }
            var n = ce("b");
            ae(n, ct(LANG.lvcomment_rating));
            var q = ce("span");
            ae(q, ct((t.rating > 0 ? "+" : "") + t.rating));
            ae(n, q);
            ae(g, n);
            ae(g, ct(" "));
            var B = ce("span");
            var j = ce("a"), K = ce("a");
            if (D) {
                j.href = K.href = "javascript:;";
                j.onclick = Listview.funcBox.coRate.bind(j, t, 1);
                K.onclick = Listview.funcBox.coRate.bind(K, t, -1);
                if (d) {
                    var A = ce("a");
                    A.href = "javascript:;";
                    A.onclick = Listview.funcBox.coRate.bind(A, t, 0);
                    A.onmouseover = Listview.funcBox.coCustomRatingOver;
                    A.onmousemove = Tooltip.cursorUpdate;
                    A.onmouseout = Tooltip.hide;
                    ae(A, ct("[~]"));
                    ae(B, A);
                    ae(B, ct(" "))
                }
            } else {
                j.href = K.href = "?account=signin"
            }
            ae(j, ct("[+]"));
            j.onmouseover = Listview.funcBox.coPlusRatingOver;
            K.onmouseover = Listview.funcBox.coMinusRatingOver;
            j.onmousemove = K.onmousemove = Tooltip.cursorUpdate;
            j.onmouseout = K.onmouseout = Tooltip.hide;
            ae(K, ct("[-]"));
            ae(B, K);
            ae(B, ct(" "));
            ae(B, j);
            ae(g, B);
            if (!i) {
                B.style.display = "none"
            }
            ae(w, g);
            ae(w, ct(LANG.lvcomment_by));
            var G = ce("a");
            G.href = "?user=" + t.user;
            ae(G, ct(t.user));
            ae(w, G);
            ae(w, ct(" "));
            var a = ce("a");
            a.className = "q0";
            a.id = "comments:id=" + t.id;
            a.href = "#" + a.id;
            Listview.funcBox.coFormatDate(a, F, s);
            a.style.cursor = "pointer";
            ae(w, a);
            ae(w, ct(LANG.lvcomment_patch1 + g_getPatchVersion(s) + LANG.lvcomment_patch2));
            ae(H, w);
            m.className = "comment-body" + Listview.funcBox.coGetColor(t);
            if (t.indent) {
                m.className += " comment-body-indent"
            }
            m.innerHTML = Markup.toHtml(t.body, {mode: Markup.MODE_COMMENT,roles: t.roles});
            ae(H, m);
            if ((t.roles & 26) == 0 || g_user.roles & 26) {
                var E = ce("div");
                t.divLastEdit = E;
                E.className = "comment-lastedit";
                ae(E, ct(LANG.lvcomment_lastedit));
                var o = ce("a");
                ae(o, ct(" "));
                ae(E, o);
                ae(E, ct(" "));
                var z = ce("span");
                ae(E, z);
                ae(E, ct(" "));
                Listview.funcBox.coUpdateLastEdit(t);
                if (I) {
                    E.style.display = "none"
                }
                ae(H, E)
            }
            k.className = "comment-links";
            if (C) {
                var b = ce("span");
                var y = ce("a");
                ae(y, ct(LANG.lvcomment_edit));
                y.onclick = Listview.funcBox.coEdit.bind(this, t, 0);
                ns(y);
                y.href = "javascript:;";
                ae(b, y);
                ae(b, ct("|"));
                ae(k, b)
            }
            if (v) {
                var l = ce("span");
                var r = ce("a");
                ae(r, ct(LANG.lvcomment_delete));
                r.onclick = Listview.funcBox.coDelete.bind(this, t);
                ns(r);
                r.href = "javascript:;";
                ae(l, r);
                ae(l, ct("|"));
                ae(k, l)
            }
            if (c) {
                var x = ce("span");
                var e = ce("a");
                ae(e, ct(LANG.lvcomment_detach));
                e.onclick = Listview.funcBox.coDetach.bind(this, t);
                ns(e);
                e.href = "javascript:;";
                ae(x, e);
                ae(x, ct("|"));
                ae(k, x)
            }
            if (J) {
                var u = ce("span");
                var f = ce("a");
                ae(f, ct(LANG.lvcomment_report));
                if (g_user.id > 0) {
                    f.onclick = Listview.funcBox.coReportClick.bind(f, t, 0);
                    f.href = "javascript:;"
                } else {
                    f.href = "?account=signin"
                }
                ae(u, f);
                ae(u, ct("|"));
                ae(k, u)
            }
            var h = ce("a");
            ae(h, ct(LANG.lvcomment_reply));
            if (g_user.id > 0) {
                h.onclick = Listview.funcBox.coReply.bind(this, t);
                h.href = "javascript:;"
            } else {
                h.href = "?account=signin"
            }
            ae(k, h);
            if (I) {
                m.style.display = "none";
                k.style.display = "none"
            }
            ae(H, k)
        },createNote: function(g) {
            var f = ce("small");
            var b = ce("a");
            if (g_user.id > 0) {
                b.href = "javascript:;";
                b.onclick = co_addYourComment
            } else {
                b.href = "?account=signin"
            }
            ae(b, ct(LANG.lvcomment_add));
            ae(f, b);
            var e = ce("span");
            e.style.padding = "0 5px";
            e.style.color = "white";
            ae(e, ct("|"));
            ae(f, e);
            ae(f, ct(LANG.lvcomment_sort));
            var c = ce("a");
            c.href = "javascript:;";
            ae(c, ct(LANG.lvcomment_sortdate));
            c.onclick = Listview.funcBox.coSortDate.bind(this, c);
            ae(f, c);
            ae(f, ct(LANG.comma));
            var d = ce("a");
            d.href = "javascript:;";
            ae(d, ct(LANG.lvcomment_sortrating));
            d.onclick = Listview.funcBox.coSortHighestRatedFirst.bind(this, d);
            ae(f, d);
            c.onclick();
            ae(g, f)
        },onNoData: function(c) {
            if (typeof g_pageInfo == "object" && g_pageInfo.type > 0) {
                var a = "<b>" + LANG.lvnodata_co1 + '</b><div class="pad2"></div>';
                if (g_user.id > 0) {
                    var b = LANG.lvnodata_co2;
                    b = b.replace("<a>", '<a href="javascript:;" onclick="co_addYourComment()" onmousedown="return false">');
                    a += b
                } else {
                    var b = LANG.lvnodata_co3;
                    b = b.replace("<a>", '<a href="?account=signin">');
                    b = b.replace("<a>", '<a href="?account=signup">');
                    a += b
                }
                c.style.padding = "1.5em 0";
                c.innerHTML = a
            }
        },onBeforeCreate: function() {
            if (location.hash && location.hash.match(/:id=([0-9]+)/) != null) {
                var a = in_array(this.data, parseInt(RegExp.$1), function(b) {
                    return b.id
                });
                this.rowOffset = this.getRowOffset(a);
                return this.data[a]
            }
        },onAfterCreate: function(a) {
            if (a != null) {
                var b = a.__div;
                this.tabs.__st = b;
                b.firstChild.style.border = "1px solid #505050"
            }
        }},commentpreview: {sort: [3],nItemsPerPage: 75,columns: [{id: "subject",name: LANG.subject,align: "left",value: "subject",compute: function(f, e) {
                    var b = ce("a");
                    b.style.fontFamily = "Verdana, sans-serif";
                    b.href = this.template.getItemLink(f);
                    ae(b, ct(f.subject));
                    ae(e, b);
                    var c = ce("div");
                    c.className = "small";
                    ae(c, ct(LANG.types[f.type][0]));
                    ae(e, c)
                }}, {id: "preview",name: LANG.preview,align: "left",width: "50%",value: "preview",compute: function(j, i) {
                    var g = ce("div");
                    g.className = "crop";
                    if (j.rating >= 10) {
                        g.className += " comment-green"
                    }
                    ae(g, ct(Markup.removeTags(j.preview, {mode: (j.rating != null ? Markup.MODE_COMMENT : Markup.MODE_ARTICLE)})));
                    ae(i, g);
                    var e = j.rating != null;
                    var f = j.user != null;
                    if (e || f) {
                        g = ce("div");
                        g.className = "small3";
                        if (f) {
                            ae(g, ct(LANG.lvcomment_by));
                            var b = ce("a");
                            b.href = "?user=" + j.user;
                            ae(b, ct(j.user));
                            ae(g, b);
                            if (e) {
                                ae(g, ct(LANG.hyphen))
                            }
                        }
                        if (e) {
                            ae(g, ct(LANG.lvcomment_rating + (j.rating > 0 ? "+" : "") + j.rating));
                            var c = ce("span"), h = "";
                            c.className = "q10";
                            if (j.deleted) {
                                h = LANG.lvcomment_deleted
                            } else {
                                if (j.purged) {
                                    h = LANG.lvcomment_purged
                                }
                            }
                            ae(c, ct(h));
                            ae(g, c)
                        }
                        ae(i, g)
                    }
                }}, {id: "posted",name: LANG.posted,width: "16%",value: "elapsed",compute: function(e, d) {
                    var a = new Date(e.date), c = (g_serverTime - a) / 1000;
                    var b = ce("span");
                    Listview.funcBox.coFormatDate(b, c, a, 0, 1);
                    ae(d, b)
                }}],getItemLink: function(a) {
            return "?" + g_types[a.type] + "=" + a.typeId + (a.id != null ? "#comments:id=" + a.id : "")
        }},screenshot: {sort: [],mode: 3,nItemsPerPage: 40,nItemsPerRow: 4,poundable: 2,columns: [],compute: function(k, e, l) {
            var u, o = new Date(k.date), f = (g_serverTime - o) / 1000;
            e.className = "screenshot-cell";
            e.vAlign = "bottom";
            var q = ce("a");
            q.href = "#screenshots:id=" + k.id;
            q.onclick = rf2;
            var v = ce("img"), t = Math.min(150 / k.width, 150 / k.height);
            v.src = "images/screenshots/thumb/" + k.body.replace("gif","jpg").replace("png","jpg");
            ae(q, v);
            ae(e, q);
            var p = ce("div");
            p.className = "screenshot-cell-user";
            var m = (k.user != null && k.user.length);
            if (m) {
                q = ce("a");
                q.href = "?user=" + k.user;
                ae(q, ct(k.user));
                ae(p, ct(LANG.lvscreenshot_from));
                ae(p, q);
                ae(p, ct(" "))
            }
            var j = ce("span");
            if (m) {
                Listview.funcBox.coFormatDate(j, f, o)
            } else {
                Listview.funcBox.coFormatDate(j, f, o, 0, 1)
            }
            ae(p, j);
            ae(e, p);
            p = ce("div");
            p.style.position = "relative";
            p.style.height = "1em";
            if (g_getLocale(true) != 0 && k.caption) {
                k.caption = ""
            }
            var h = (k.caption != null && k.caption.length);
            var g = (k.subject != null && k.subject.length);
            if (h || g) {
                var r = ce("div");
                r.className = "screenshot-caption";
                if (g) {
                    var c = ce("small");
                    ae(c, ct(LANG.types[k.type][0] + LANG.colon));
                    var b = ce("a");
                    ae(b, ct(k.subject));
                    b.href = "?" + g_types[k.type] + "=" + k.typeId;
                    ae(c, b);
                    ae(r, c);
                    if (h && k.caption.length) {
                        ae(c, ct(" (...)"))
                    }
                    ae(c, ce("br"))
                }
                if (h) {
                    aE(e, "mouseover", Listview.funcBox.ssCellOver.bind(r));
                    aE(e, "mouseout", Listview.funcBox.ssCellOut.bind(r));
                    var n = ce("span");
                    n.innerHTML = k.caption;
                    ae(r, n)
                }
                ae(p, r)
            }
            aE(e, "click", Listview.funcBox.ssCellClick.bind(this, l));
            ae(e, p)
        },createNote: function(d) {
            if (typeof g_pageInfo == "object" && g_pageInfo.type > 0) {
                var c = ce("small");
                var b = ce("a");
                if (g_user.id > 0) {
                    b.href = "javascript:;";
                    b.onclick = ss_submitAScreenshot
                } else {
                    b.href = "?account=signin"
                }
                ae(b, ct(LANG.lvscreenshot_submit));
                ae(c, b);
                ae(d, c)
            }
        },onNoData: function(c) {
            if (typeof g_pageInfo == "object" && g_pageInfo.type > 0) {
                var a = "<b>" + LANG.lvnodata_ss1 + '</b><div class="pad2"></div>';
                if (g_user.id > 0) {
                    var b = LANG.lvnodata_ss2;
                    b = b.replace("<a>", '<a href="javascript:;" onclick="ss_submitAScreenshot()" onmousedown="return false">');
                    a += b
                } else {
                    var b = LANG.lvnodata_ss3;
                    b = b.replace("<a>", '<a href="?account=signin">');
                    b = b.replace("<a>", '<a href="?account=signup">');
                    a += b
                }
                c.style.padding = "1.5em 0";
                c.innerHTML = a
            } else {
                return -1
            }
        },onBeforeCreate: function() {
            if (location.hash && location.hash.match(/:id=([0-9]+)/) != null) {
                var a = in_array(this.data, parseInt(RegExp.$1), function(b) {
                    return b.id
                });
                this.rowOffset = this.getRowOffset(a);
                return a
            }
        },onAfterCreate: function(a) {
            if (a != null) {
                setTimeout((function() {
                    ScreenshotViewer.show({screenshots: this.data,pos: a})
                }).bind(this), 1)
            }
        }},pet: {sort: [1],nItemsPerPage: -1,searchable: 1,filtrable: 1,columns: [{id: "name",name: LANG.name,type: "text",align: "left",value: "name",span: 2,compute: function(b, k, g) {
                    var e = ce("td");
                    e.style.width = "1px";
                    e.style.padding = "0";
                    e.style.borderRight = "none";
                    ae(e, Icon.create(b.icon, 0));
                    ae(g, e);
                    k.style.borderLeft = "none";
                    var j = ce("div");
                    var c = ce("a");
                    c.style.fontFamily = "Verdana, sans-serif";
                    c.href = this.template.getItemLink(b);
                    ae(c, ct(b.name));
                    if (b.expansion) {
                        var f = ce("span");
                        f.className = (b.expansion == 1 ? "bc-icon" : "wotlk-icon");
                        ae(f, c);
                        ae(j, f)
                    } else {
                        ae(j, c)
                    }
                    if (b.exotic) {
                        j.style.position = "relative";
                        var h = ce("div");
                        h.className = "small";
                        h.style.fontStyle = "italic";
                        h.style.position = "absolute";
                        h.style.right = "3px";
                        h.style.bottom = "0px";
                        ae(h, ct(LANG.lvpet_exotic));
                        ae(j, h)
                    }
                    ae(k, j)
                },getVisibleText: function(a) {
                    var b = a.name;
                    if (a.expansion == 1) {
                        b += " bc"
                    } else {
                        if (a.expansion == 2) {
                            b += "wotlk wrath"
                        }
                    }
                    if (a.exotic) {
                        b += " " + LANG.lvpet_exotic
                    }
                    return b
                }}, {id: "level",name: LANG.level,type: "range",getMinValue: function(a) {
                    return a.minlevel
                },getMaxValue: function(a) {
                    return a.maxlevel
                },compute: function(a, b) {
                    if (a.minlevel > 0 && a.maxlevel > 0) {
                        if (a.minlevel != a.maxlevel) {
                            return a.minlevel + LANG.hyphen + a.maxlevel
                        } else {
                            return a.minlevel
                        }
                    } else {
                        return -1
                    }
                },sortFunc: function(d, c, e) {
                    if (e > 0) {
                        return strcmp(d.minlevel, c.minlevel) || strcmp(d.maxlevel, c.maxlevel)
                    } else {
                        return strcmp(d.maxlevel, c.maxlevel) || strcmp(d.minlevel, c.minlevel)
                    }
                }}, {id: "damage",name: LANG.damage,value: "damage",compute: function(a, b) {
                    ae(b, this.template.getStatPct(a.damage))
                }}, {id: "armor",name: LANG.armor,value: "armor",compute: function(a, b) {
                    ae(b, this.template.getStatPct(a.armor))
                }}, {id: "health",name: LANG.health,value: "health",compute: function(a, b) {
                    ae(b, this.template.getStatPct(a.health))
                }}, {id: "abilities",name: LANG.abilities,type: "text",getValue: function(b) {
                    if (!b.spells) {
                        return ""
                    }
                    if (b.spells.length > 0) {
                        var d = "";
                        for (var c = 0, a = b.spells.length; c < a; ++c) {
                            if (b.spells[c]) {
                                d += g_spells[b.spells[c]]["name_" + g_locale.name]
                            }
                        }
                        return d
                    }
                },compute: function(a, b) {
                    if (!a.spells) {
                        return ""
                    }
                    if (a.spells.length > 0) {
                        b.style.padding = "0";
                        Listview.funcBox.createCenteredIcons(a.spells, b, "", 1)
                    }
                },sortFunc: function(d, c) {
                    if (!d.spells || !c.spells) {
                        return 0
                    }
                    return strcmp(d.spellCount, c.spellCount) || strcmp(d.spells, c.spells)
                },hidden: true}, {id: "diet",name: LANG.diet,type: "text",compute: function(a, e) {
                    if (e) {
                        e.className = "small"
                    }
                    var b = 0, c = "";
                    for (var d in g_pet_foods) {
                        if (a.diet & d) {
                            if (b++ > 0) {
                                c += LANG.comma
                            }
                            c += g_pet_foods[d]
                        }
                    }
                    return c
                },sortFunc: function(d, c) {
                    return strcmp(c.foodCount, d.foodCount) || Listview.funcBox.assocArrCmp(d.diet, c.diet, g_pet_foods)
                }}, {id: "type",name: LANG.type,type: "text",compute: function(b, d) {
                    if (b.type != null) {
                        d.className = "small q1";
                        var c = ce("a");
                        c.href = "?pets=" + b.type;
                        ae(c, ct(g_pet_types[b.type]));
                        ae(d, c)
                    }
                },getVisibleText: function(a) {
                    if (a.type != null) {
                        return g_pet_types[a.type]
                    }
                },sortFunc: function(d, c, e) {
                    return strcmp(g_pet_types[d.type], g_pet_types[c.type])
                }}],getItemLink: function(a) {
            return "?pet=" + a.id
        },getStatPct: function(b) {
            var a = ce("span");
            if (!isNaN(b) && b > 0) {
                a.className = "q2";
                ae(a, ct("+" + b + "%"))
            } else {
                if (!isNaN(b) && b < 0) {
                    a.className = "q10";
                    ae(a, ct(b + "%"))
                }
            }
            return a
        }},achievement: {sort: [1, 2],nItemsPerPage: 100,searchable: 1,filtrable: 1,columns: [{id: "name",name: LANG.name,type: "text",align: "left",value: "name",span: 2,compute: function(c, j, g) {
                    var b = null;
                    if (c.who && c.completed) {
                        b = "who=" + c.who + "&when=" + c.completed.getTime()
                    }
                    var f = ce("td");
                    f.style.width = "1px";
                    f.style.padding = "0";
                    f.style.borderRight = "none";
                    ae(f, g_achievements.createIcon(c.id, 1));
                    Icon.getLink(f.firstChild).rel = b;
                    ae(g, f);
                    j.style.borderLeft = "none";
                    var e = ce("a");
                    e.style.fontFamily = "Verdana, sans-serif";
                    e.href = this.template.getItemLink(c);
                    e.rel = b;
                    ae(e, ct(c.name));
                    ae(j, e);
                    if (c.description != null) {
                        var h = ce("div");
                        h.className = "small";
                        ae(h, ct(c.description));
                        ae(j, h)
                    }
                },getVisibleText: function(a) {
                    var b = a.name;
                    if (a.description) {
                        b += " " + a.description
                    }
                    return b
                }}, {id: "location",name: LANG.location,type: "text",width: "15%",compute: function(b, d) {
                    if (b.zone) {
                        var c = ce("a");
                        c.className = "q1";
                        c.href = "?maps=" + b.zone;
                        ae(c, ct(g_zones[b.zone]));
                        ae(d, c)
                    }
                },getVisibleText: function(a) {
                    return Listview.funcBox.arrayText(a.zone, g_zones)
                },sortFunc: function(d, c, e) {
                    return Listview.funcBox.assocArrCmp(d.zone, c.zone, g_zones)
                }}, {id: "side",name: LANG.side,type: "text",width: "10%",compute: function(a, c) {
                    if (a.side) {
                        var b = ce("span");
                        if (a.side == 1) {
                            b.className = "alliance-icon"
                        } else {
                            if (a.side == 2) {
                                b.className = "horde-icon"
                            }
                        }
                        ae(b, ct(g_sides[a.side]));
                        ae(c, b)
                    } else {
                        return -1
                    }
                },getVisibleText: function(a) {
                    if (a.side) {
                        return g_sides[a.side]
                    }
                },sortFunc: function(d, c, e) {
                    return strcmp(g_sides[d.side], g_sides[c.side])
                }}, {id: "points",name: LANG.points,type: "number",width: "10%",value: "points",compute: function(a, b) {
                    if (a.points) {
                        Listview.funcBox.appendMoney(b, 0, null, 0, 0, 0, a.points)
                    }
                }}, {id: "category",name: LANG.category,type: "text",width: "15%",compute: function(b, d) {
                    d.className = "small q1";
                    var c = ce("a");
                    c.href = "?achievements=" + b.category;
                    ae(c, ct(g_achievement_categories[b.category]));
                    ae(d, c)
                },getVisibleText: function(a) {
                    return g_achievement_categories[a.category]
                },sortFunc: function(d, c, e) {
                    return strcmp(g_achievement_categories[d.category], g_achievement_categories[c.category])
                },hidden: true}],getItemLink: function(a) {
            return "?achievement=" + a.id
        }},profile: {sort: [],nItemsPerPage: 50,searchable: 1,filtrable: 1,columns: [{id: "name",name: LANG.name,value: "name",type: "text",align: "left",span: 2,compute: function(f, c, h) {
                    if (f.level) {
                        var e = ce("td");
                        e.style.width = "1px";
                        e.style.padding = "0";
                        e.style.borderRight = "none";
                        ae(e, Icon.create(f.icon ? f.icon : "chr_" + g_file_races[f.race] + "_" + g_file_genders[f.gender] + "_" + g_file_classes[f.classs] + "0" + (f.level > 59 ? (Math.floor((f.level - 60) / 10) + 2) : 1), 1));
                        ae(h, e);
                        c.style.borderLeft = "none"
                    } else {
                        c.colSpan = 2
                    }
                    var b = ce("div");
                    b.style.position = "relative";
                    var k = ce("a");
                    k.style.fontFamily = "Verdana, sans-serif";
                    k.href = this.template.getItemLink(f);
                    ae(k, ct(f.name));
                    ae(b, k);
                    var g = ce("div");
                    g.className = "small";
                    if (f.guild) {
                        var k = ce("a");
                        k.className = "q1";
                        k.href = "?profiles=" + f.region + "." + f.realm + "&filter=cr=9;crs=0;crv=" + str_replace(urlencode(f.guild), "%20", "+") + "&roster=1";
                        ae(k, ct(f.guild));
                        ae(g, ct("<"));
                        ae(g, k);
                        ae(g, ct(">"))
                    } else {
                        if (f.description) {
                            ae(g, ct(f.description))
                        }
                    }
                    var l = ce("span"), j = "";
                    l.className = "q10";
                    if (f.deleted) {
                        j = LANG.lvcomment_deleted
                    }
                    ae(l, ct(j));
                    ae(g, l);
                    ae(b, g);
                    var g = ce("div");
                    g.className = "small";
                    g.style.fontStyle = "italic";
                    g.style.position = "absolute";
                    g.style.right = "3px";
                    g.style.bottom = "0px";
                    if (!f.published && !f.region && !f.realm) {
                        ae(g, ct(LANG.privateprofile))
                    }
                    ae(b, g);
                    ae(c, b)
                },getVisibleText: function(a) {
                    var b = a.name;
                    if (a.guild) {
                        b += " " + a.guild
                    }
                    return b
                }}, {id: "faction",name: LANG.faction,type: "text",compute: function(a, f) {
                    if (!a.size && !a.members && !a.level) {
                        return
                    }
                    var e = ce("div"), c = ce("div"), b;
                    b = Icon.create("faction_" + g_file_factions[a.faction + 1], 0);
                    b.onmouseover = function(d) {
                        Tooltip.showAtCursor(d, g_sides[a.faction + 1], 0, 0, "q")
                    };
                    b.onmousemove = Tooltip.cursorUpdate;
                    b.onmouseout = Tooltip.hide;
                    b.style.cssFloat = b.style.syleFloat = "left";
                    e.style.margin = "0 auto";
                    e.style.textAlign = "left";
                    e.style.width = "26px";
                    c.className = "clear";
                    ae(e, b);
                    ae(f, e);
                    ae(f, c)
                },getVisibleText: function(a) {
                    return g_sides[a.faction + 1]
                },sortFunc: function(d, c, e) {
                    return strcmp(this.getVisibleText(d), this.getVisibleText(c))
                }}, {id: "members",name: LANG.members,value: "members",hidden: 1}, {id: "size",name: "Size",value: "size",hidden: 1}, {id: "rank",name: "Rank",value: "rank",hidden: 1}, {id: "race",name: LANG.race,type: "text",compute: function(a, f) {
                    if (a.race) {
                        var e = ce("div"), c = ce("div"), b;
                        b = Icon.create("race_" + g_file_races[a.race] + "_" + g_file_genders[a.gender], 0);
                        b.onmouseover = function(d) {
                            Tooltip.showAtCursor(d, g_chr_races[a.race], 0, 0, "q")
                        };
                        b.onmousemove = Tooltip.cursorUpdate;
                        b.onmouseout = Tooltip.hide;
                        b.style.cssFloat = b.style.syleFloat = "left";
                        e.style.margin = "0 auto";
                        e.style.textAlign = "left";
                        e.style.width = "26px";
                        c.className = "clear";
                        ae(e, b);
                        ae(f, e);
                        ae(f, c)
                    }
                },getVisibleText: function(a) {
                    return g_file_genders[a.gender] + " " + g_chr_races[a.race]
                },sortFunc: function(d, c, e) {
                    return strcmp(g_chr_races[d.race], g_chr_races[c.race])
                },hidden: 1}, {id: "classs",name: LANG.classs,type: "text",compute: function(a, f) {
                    if (a.classs) {
                        var e = ce("div"), c = ce("div"), b;
                        b = Icon.create("class_" + g_file_classes[a.classs], 0);
                        b.onmouseover = function(d) {
                            Tooltip.showAtCursor(d, g_chr_classes[a.classs], 0, 0, "q")
                        };
                        b.onmousemove = Tooltip.cursorUpdate;
                        b.onmouseout = Tooltip.hide;
                        b.style.cssFloat = b.style.syleFloat = "left";
                        e.style.margin = "0 auto";
                        e.style.textAlign = "left";
                        e.style.width = "26px";
                        c.className = "clear";
                        ae(e, b);
                        ae(f, e);
                        ae(f, c)
                    } else {
                        return -1
                    }
                },getVisibleText: function(a) {
                    if (a.classs) {
                        return g_chr_classes[a.classs]
                    }
                },sortFunc: function(d, c, e) {
                    return strcmp(this.getVisibleText(d), this.getVisibleText(c))
                },hidden: 1}, {id: "level",name: LANG.level,value: "level",hidden: 1}, {id: "talents",name: LANG.talents,type: "text",compute: function(e, j) {
                    if (!e.level) {
                        return
                    }
                    var i = [e.talenttree1, e.talenttree2, e.talenttree3], f = pr_getSpecFromTalents(e.classs, i), c, g, b = ce("a");
                    var h = ce("div");
                    h.style.width = "82px";
                    h.style.height = "23px";
                    h.style.margin = "0 auto";
                    h.style.lineHeight = "23px";
                    h.style.backgroundImage = "url(" + f.icon + ")";
                    h.style.backgroundRepeat = "no-repeat";
                    h.style.backgroundPosition = "left";
                    var b = ce("a");
                    b.className = "small q1";
                    b.style.padding = "7px 0 7px 28px";
                    b.style.fontWeight = "bold";
                    b.rel = "np";
                    b.href = this.template.getItemLink(e) + "#talents";
                    b.onmouseover = function(a) {
                        Tooltip.showAtCursor(a, f.name, 0, 0, "q")
                    };
                    b.onmousemove = Tooltip.cursorUpdate;
                    b.onmouseout = Tooltip.hide;
                    ae(b, ct(e.talenttree1 + " / " + e.talenttree2 + " / " + e.talenttree3));
                    ae(h, b);
                    ae(j, h)
                },getVisibleText: function(a) {
                    if (a.talenttree1 || a.talenttree2 || a.talenttree3) {
                        if (a.talentspec > 0) {
                            return g_chr_specs[a.classs][a.talentspec - 1]
                        } else {
                            return g_chr_specs[0]
                        }
                    } else {
                        return g_chr_specs["-1"]
                    }
                },sortFunc: function(d, c, e) {
                    return strcmp(this.getVisibleText(d), this.getVisibleText(c))
                },hidden: 1}, {id: "gearscore",name: LANG.gearscore,value: "gearscore",compute: function(a, c) {
                    var b = (a.level ? a.level : (a.members ? 80 : 0));
                    if (isNaN(a.gearscore) || !b) {
                        return
                    }
                    c.className = "q" + pr_getGearScoreQuality(b, a.gearscore, (in_array([2, 6, 7, 11], a.classs) != -1));
                    return (a.gearscore ? number_format(a.gearscore) : 0)
                },hidden: 1}, {id: "achievementpoints",name: LANG.points,value: "achievementpoints",compute: function(a, b) {
                    if (a.achievementpoints) {
                        Listview.funcBox.appendMoney(b, 0, null, 0, 0, 0, a.achievementpoints)
                    }
                },hidden: 1}, {id: "wins",name: LANG.wins,value: "wins",hidden: 1}, {id: "losses",name: LANG.losses,compute: function(a, b) {
                    return a.games - a.wins
                },hidden: 1}, {id: "guildrank",name: LANG.guildrank,value: "guildrank",compute: function(c, d) {
                    if (c.guildrank > 0) {
                        return sprintf(LANG.rankno, c.guildrank)
                    } else {
                        if (c.guildrank == 0) {
                            var a = ce("b");
                            ae(a, ct(LANG.guildleader));
                            ae(d, a)
                        }
                    }
                },sortFunc: function(d, c, e) {
                    return strcmp((d.guildrank >= 0 ? d.guildrank : 11), (c.guildrank >= 0 ? c.guildrank : 11))
                },hidden: 1}, {id: "rating",name: LANG.rating,value: "rating",compute: function(a, b) {
                    if (a.roster) {
                        return a.arenateam[a.roster].rating
                    }
                    return a.rating
                },sortFunc: function(d, c, e) {
                    if (d.roster && c.roster) {
                        return strcmp(d.arenateam[d.roster].rating, c.arenateam[c.roster].rating)
                    }
                    return strcmp(d.rating, c.rating)
                },hidden: 1}, {id: "location",name: LANG.location,type: "text",compute: function(c, e) {
                    var b;
                    if (c.region) {
                        if (c.realm) {
                            b = ce("a");
                            b.className = "q1";
                            b.href = "?profiles=" + c.region + "." + c.realm;
                            ae(b, ct(c.realmname));
                            ae(e, b);
                            ae(e, ce("br"))
                        }
                        var d = ce("small");
                        b = ce("a");
                        b.className = "q1";
                        b.href = "?profiles=" + c.region;
                        ae(b, ct(c.region.toUpperCase()));
                        ae(d, b);
                        if (c.battlegroup) {
                            ae(d, ct(LANG.hyphen));
                            b = ce("a");
                            b.className = "q1";
                            b.href = "?profiles=" + c.region + "." + c.battlegroup;
                            ae(b, ct(c.battlegroupname));
                            ae(d, b)
                        }
                        ae(e, d)
                    }
                },getVisibleText: function(a) {
                    var b = "";
                    if (a.region) {
                        b += " " + a.region
                    }
                    if (a.battlegroup) {
                        b += " " + a.battlegroup
                    }
                    if (a.realm) {
                        b += " " + a.realm
                    }
                    return trim(b)
                },sortFunc: function(d, c, e) {
                    if (d.region != c.region) {
                        return strcmp(d.region, c.region)
                    }
                    if (d.battlegroup != c.battlegroup) {
                        return strcmp(d.battlegroup, c.battlegroup)
                    }
                    return strcmp(d.realm, c.realm)
                }}, {id: "guild",name: LANG.guild,value: "guild",type: "text",compute: function(c, d) {
                    if (!c.region || !c.battlegroup || !c.realm || !c.guild) {
                        return
                    }
                    var b = ce("a");
                    b.className = "q1";
                    b.href = "?profiles=" + c.region + "." + c.realm + "&filter=cr=9;crs=0;crv=" + str_replace(urlencode(c.guild), "%20", "+") + "&roster=1";
                    ae(b, ct(c.guild));
                    ae(d, b)
                }}],getItemLink: function(a) {
            if (a.size) {
                return "?profiles=" + a.region + "." + a.realm + "&filter=cr=" + (a.size == 2 ? 12 : (a.size == 3 ? 15 : 18)) + ";crs=0;crv=" + str_replace(urlencode(a.name), "%20", "+") + "&roster=" + (a.size == 5 ? 4 : a.size)
            } else {
                if (a.members) {
                    return "?profiles=" + a.region + "." + a.realm + "&filter=cr=9;crs=0;crv=" + str_replace(urlencode(a.name), "%20", "+") + "&roster=1"
                } else {
                    if (a.region && a.realm) {
                        return "?profile=" + a.region + "." + a.realm + "." + g_cleanCharacterName(a.name)
                    } else {
                        return "?profile=" + a.id
                    }
                }
            }
        }},model: {sort: [],mode: 3,nItemsPerPage: 40,nItemsPerRow: 4,poundable: 2,columns: [],compute: function(c, k, e) {
            k.className = "screenshot-cell";
            k.vAlign = "bottom";
            var j = ce("div");
            j.className = "pet-model";
            var b = ce("a");
            b.className = "pet-zoom";
            b.href = "javascript:;";
            b.onclick = this.template.modelShow.bind(this.template, c.npcId, c.displayId);
            ae(j, b);
            var g = ce("div");
            g.id = "pm" + c.displayId;
            ae(j, g);
            ae(k, j);
            j = ce("div");
            j.className = "screenshot-cell-user";
            b = ce("a");
            b.href = this.template.getItemLink(c);
            ae(b, ct(c.skin));
            ae(j, b);
            ae(j, ct(" (" + c.count + ")"));
            ae(k, j);
            j = ce("div");
            j.style.position = "relative";
            j.style.height = "1em";
            var h = ce("div");
            h.className = "screenshot-caption";
            var f = ce("small");
            ae(f, ct(LANG.level + ": "));
            ae(f, ct(c.minLevel + (c.minLevel == c.maxLevel ? "" : LANG.hyphen + (c.maxLevel == 9999 ? "??" : c.maxLevel))));
            ae(f, ce("br"));
            ae(h, f);
            ae(j, h);
            ae(k, j);
            setTimeout(this.template.appendFlash.bind(g, c), 1)
        },getItemLink: function(a) {
            return "?npcs=1&filter=" + (a.family ? "fa=" + a.family + ";" : "") + "minle=1;cr=35;crs=0;crv=" + a.skin
        },modelShow: function(b, a) {
            ModelViewer.show({type: 1,typeId: b,displayId: a,noPound: 1})
        },appendFlash: function(a) {
            var c = {model: a.displayId,modelType: 8,contentPath: "http://static.wowhead.com/modelviewer/",blur: (OS.mac ? "0" : "1")};
            var b = {quality: "high",allowscriptaccess: "always",menu: false,wmode: "opaque",bgcolor: "#101010"};
            swfobject.embedSWF("http://static.wowhead.com/modelviewer/ModelView.swf", this.id, "100%", "100%", "10.0.0", "http://static.wowhead.com/modelviewer/expressInstall.swf", c, b)
        }}};
Menu.fixUrls(mn_items, "?items=");
Menu.fixUrls(mn_itemSets, "?itemsets&filter=cl=");
Menu.fixUrls(mn_npcs, "?npcs=");
Menu.fixUrls(mn_objects, "?objects=");
Menu.fixUrls(mn_quests, "?quests=");
Menu.fixUrls(mn_spells, "?spells=");
Menu.fixUrls(mn_zones, "?zones=");
Menu.fixUrls(mn_talentCalc, "?talent=");
var g_locale = {
    id: 0,
    name: "enus"
};
var g_localTime = new Date();
var g_user = {
    id: 0,
    name: "",
    roles: 0
};
var g_items = [];
var g_quests = [];
var g_spells = [];
var g_users = [];
var g_types = {
    1: "npc",
    2: "object",
    3: "item",
    4: "itemset",
    5: "quest",
    6: "spell",
    7: "zone",
    8: "faction"
};
var g_locales = {
    0: "enus",
    2: "frfr",
    3: "dede",
    6: "eses",
    25: "wotlk"
};
var g_customColors = {
    Miyari: "pink"
};
g_items.getIcon = function (A) {
    if (g_items[A] != null) {
        return g_items[A].icon
    } else {
        return "temp"
    }
};
g_items.createIcon = function (D, B, A, C) {
    return Icon.create(g_items.getIcon(D), B, null, "?item=" + D, A, C)
};
g_spells.getIcon = function (A) {
    if (g_spells[A] != null) {
        return g_spells[A].icon
    } else {
        return "temp"
    }
};
g_spells.createIcon = function (D, B, A, C) {
    return Icon.create(g_spells.getIcon(D), B, null, "?spell=" + D, A, C)
};
var $WowheadPower = new

    function () {
        var V, a, L, // language
        T, F, J, H, R = 0,
            i = 0,
            K = 1,
            E = 2,
            M = 3,
            N = 4,
            G = 3,
            O = 5,
            g = 6,
            j = 15,
            W = 15,
            S = {
                3: [g_items, "item"],
                5: [g_quests, "quest"],
                6: [g_spells, "spell"]
            };

        function Z() {
            aE(document, "mouseover", U)
        }

        function A(k) {
            var l = g_getCursorPos(k);
            J = l.x;
            H = l.y
        }

        function e(u, q) {
            if (u.nodeName != "A") {
                return -2323
            }
            if (!u.href.length) {
                return
            }
            var o, n, l, k;
            n = 2;
            l = 3;
            //		if (u.href.indexOf("http://") == 0) {
            //			o = 1;
            //			k = u.href.match(/http:\/\/(www|dev|fr|es|de|wotlk)?\.?wowhead\.com\/\?(item|quest|spell)=([0-9]+)/)
            //		} else {
            k = u.href.match(/()\?(item|quest|spell)=([0-9]+)/)
            //		}
            if (k == null && u.rel) {
                o = 0;
                n = 1;
                l = 2;
                k = u.rel.match(/(item|quest|spell).?([0-9]+)/)
            }
            if (k) {
                //			var s,
                //			p = "www";
                //			if (o && k[o]) {
                //				p = k[o]
                //			} else {
                //				var r = location.hostname.match(/(www|dev|fr|es|de|wotlk)\.?wowhead\.com/);
                //				if (r != null) {
                //					p = r[1]
                //				}
                //			}
                //			s = g_getLocaleFromDomain(p);
                //			T = p;
                s = 0;
                F = u;
                if (u.href.indexOf("#") != -1 && document.location.href.indexOf(k[n] + "=" + k[l]) != -1) {
                    return
                }
                R = (u.parentNode.className == "tile" ? 1 : 0);
                if (!u.onmouseout) {
                    if (R == 0) {
                        u.onmousemove = Q
                    }
                    u.onmouseout = P
                }
                A(q);
                Y(g_getIdFromTypeName(k[n]), k[l], s)
            }
        }

        function U(m) {
            m = $E(m);
            var l = m._target;
            var k = 0;
            while (l != null && k < 3 && e(l, m) == -2323) {
                l = l.parentNode;
                ++k
            }
        }

        function Q(k) {
            k = $E(k);
            A(k);
            Tooltip.move(J, H, 0, 0, j, W)
        }

        function P() {
            V = null;
            F = null;
            Tooltip.hide()
        }

        function X(k) {
            return "tooltip"
        }

        function h(m, n, l) {
            var k = S[m][0];
            if (k[n] == null) {
                k[n] = {}
            }
            if (k[n].status == null) {
                k[n].status = {}
            }
            if (k[n].status[l] == null) {
                k[n].status[l] = i
            }
        }

        function Y(m, n, l) {
            // m - type ('item', etc)
            // n - id
            // l - language
            V = m;
            a = n;
            L = l;
            h(m, n, l);
            var k = S[m][0];
            if (k[n].status[l] == N || k[n].status[l] == M) {
                C(k[n][X(l)], k[n].icon)
            } else {
                if (k[n].status[l] == K) {
                    C(LANG.tooltip_loading)
                } else {
                    D(m, n, l)
                }
            }
        }

        function D(n, o, l, m) {
            var k = S[n][0];
            if (k[o].status[l] != i && k[o].status[l] != E) {
                return
            }
            k[o].status[l] = K;
            if (!m) {
                k[o].timer = setTimeout(function () {
                    B.apply(this, [n, o, l])
                }, 333)
            }
            g_ajaxIshRequest("ajax.php?" + S[n][1] + "=" + o)
        }

        function C(k, l) {
            if (F._fixTooltip) {
                k = F._fixTooltip(k, V, a, F)
            }
            //		if (!k) {
            //			k = LANG["tooltip_" + g_types[V] + "notfound"];
            //			l = "Temp"
            //		}
            if (R == 1) {
                Tooltip.setIcon(null);
                Tooltip.show(F, k, 0, 0)
            } else {
                Tooltip.setIcon(l);
                Tooltip.showAtXY(k, J, H, j, W)
            }
        }

        function B(m, n, l) {
            if (V == m && a == n && L == l) {
                C(LANG.tooltip_loading);
                var k = S[m][0];
                k[n].timer = setTimeout(function () {
                    I.apply(this, [m, n, l])
                }, 3850)
            }
        }

        function I(m, n, l) {
            var k = S[m][0];
            k[n].status[l] = E;
            if (V == m && a == n && L == l) {
                C(LANG.tooltip_noresponse)
            }
        }
        this.register = function (n, o, l, m) {
            var k = S[n][0];
            clearTimeout(k[o].timer);
            cO(k[o], m);
            if (k[o][X(l)]) {
                k[o].status[l] = N
            } else {
                k[o].status[l] = M
            }
            if (V == n && o == a && L == l) {
                C(k[o][X(l)], k[o].icon)
            }
        };
        this.registerItem = function (m, k, l) {
            this.register(G, m, k, l)
        };
        this.registerQuest = function (m, k, l) {
            this.register(O, m, k, l)
        };
        this.registerSpell = function (m, k, l) {
            this.register(g, m, k, l)
        };
        this.request = function (l, m, k) {
            h(l, m, k);
            D(l, m, k, 1)
        };
        this.requestItem = function (k) {
            this.request(G, g_locale.id, k)
        };
        this.requestSpell = function (k) {
            this.request(g, g_locale.id, k)
        };
        this.getStatus = function (m, n, l) {
            var k = S[m][0];
            if (k[n] != null) {
                return k[n].status[l]
            } else {
                return i
            }
        };
        this.getItemStatus = function (l, k) {
            this.getStatus(G, l, k)
        };
        this.requestSpell = function (l, k) {
            this.getStatus(g, l, k)
        };
        Z()
    };

LiveSearch = new

function () {
    var currentTextbox, lastSearch = {},
        lastDiv, timer, prepared, container, cancelNext, hasData;

    function setText(textbox, txt) {
        textbox.value = txt;
        textbox.selectionStart = textbox.selectionEnd = txt.length
    }

    function colorDiv(div, fromOver) {
        if (lastDiv) {
            lastDiv.className = lastDiv.className.replace("live-search-selected", "")
        }
        lastDiv = div;
        lastDiv.className += " live-search-selected";
        if (!fromOver) {
            show();
            setTimeout(setText.bind(0, currentTextbox, g_getTextContent(div.firstChild.firstChild.childNodes[1])), 1);
            cancelNext = 1
        }
    }

    function aOver() {
        colorDiv(this.parentNode.parentNode, 1)
    }

    function isVisible() {
        if (!container) {
            return false
        }
        return container.style.display != "none"
    }

    function adjust(fromResize) {
        if (fromResize == 1 && !isVisible()) {
            return
        }
        if (currentTextbox == null) {
            return
        }
        var c = ac(currentTextbox);
        container.style.left = (c[0] - 2) + "px";
        container.style.top = (c[1] + currentTextbox.offsetHeight + 1) + "px";
        container.style.width = currentTextbox.offsetWidth + "px"
    }

    function prepare() {
        if (prepared) {
            return
        }
        prepared = 1;
        container = ce("div");
        container.className = "live-search";
        container.style.display = "none";
        ae(ge("layers"), container);
        aE(window, "resize", adjust.bind(0, 1));
        aE(document, "click", hide)
    }

    function show() {
        if (container && !isVisible()) {
            adjust();
            container.style.display = ""
        }
    }

    function hide() {
        if (container) {
            container.style.display = "none"
        }
    }

    function boldify(match) {
        return "<b>" + match + "</b>"
    }

    function display(textbox, search, suggz, dataz) {
        prepare();
        show();
        lastA = null;
        hasData = 1;
        while (container.firstChild) {
            de(container.firstChild)
        }
        if (!Browser.ie6) {
            ae(container, ce("em"));
            ae(container, ce("var"));
            ae(container, ce("strong"))
        }
        search = search.replace(/[^a-z0-9'\-]/, " ");
        search = trim(search.replace(/\s+/g, " "));
        var parts = search.split(" "),
            strRegex = "";
        for (var j = 0, len = parts.length; j < len; ++j) {
            if (j > 0) {
                strRegex += "|"
            }
            strRegex += parts[j]
        }
        var regex = new RegExp("(" + strRegex + ")", "gi");
        for (var i = 0, len = suggz.length; i < len; ++i) {
            var pos = suggz[i].lastIndexOf("(");
            if (pos != -1) {
                suggz[i] = suggz[i].substr(0, pos - 1)
            }
            var type = dataz[i][0],
                typeId = dataz[i][1],
                param1 = dataz[i][2],
                param2 = dataz[i][3],
                a = ce("a"),
                sp = ce("i"),
                sp2 = ce("span"),
                div = ce("div"),
                div2 = ce("div");
            a.onmouseover = aOver;
            a.href = "?" + g_types[type] + "=" + typeId;
            if (type == 3 && param2) {
                a.className += " q" + param2
            }
            if ((type == 3 || type == 6) && param1) {
                div.className += " live-search-icon";
                div.style.backgroundImage = "url(images/icons/small/" + param1.toLowerCase() + ".png)"
            } else {
                if (type == 5 && param1 >= 1 && param1 <= 2) {
                    div.className += " live-search-icon-quest-" + (param1 == 1 ? "alliance" : "horde")
                }
            }
            ae(sp, ct(LANG.types[type][0]));
            ae(a, sp);
            var buffer = suggz[i];
            buffer = buffer.replace(regex, boldify);
            sp2.innerHTML = buffer;
            ae(a, sp2);
            if (type == 6 && param2) {
                ae(a, ct(" (" + param2 + ")"))
            }
            ae(div2, a);
            ae(div, div2);
            ae(container, div)
        }
    }

    function receive(xhr, opt) {
        var text = xhr.responseText;
        if (text.charAt(0) != "[" || text.charAt(text.length - 1) != "]") {
            return
        }
        var a = eval(text);
        var search = a[0];
        if (search == opt.search) {
            if (a.length == 8) {
                display(opt.textbox, search, a[1], a[7])
            } else {
                hide()
            }
        }
    }

    function fetch(textbox, search) {
        new Ajax("opensearch.php?search=" + urlencode(search), {
            onSuccess: receive,
            textbox: textbox,
            search: search
        })
    }

    function preFetch(textbox, search) {
        if (cancelNext) {
            cancelNext = 0;
            return
        }
        hasData = 0;
        if (timer > 0) {
            clearTimeout(timer);
            timer = 0
        }
        timer = setTimeout(fetch.bind(0, textbox, search), 200)
    }

    function cycle(dir) {
        if (!isVisible()) {
            if (hasData) {
                show()
            }
            return
        }
        var firstNode = (container.childNodes[0].nodeName == "EM" ? container.childNodes[3] : container.firstChild);
        var bakDiv = dir ? firstNode : container.lastChild;
        if (lastDiv == null) {
            colorDiv(bakDiv)
        } else {
            var div = dir ? lastDiv.nextSibling : lastDiv.previousSibling;
            if (div) {
                if (div.nodeName == "STRONG") {
                    div = container.lastChild
                }
                colorDiv(div)
            } else {
                colorDiv(bakDiv)
            }
        }
    }

    function onKeyUp(e) {
        e = $E(e);
        var textbox = e._target;
        if (Browser.gecko && e.ctrlKey) {
            switch (e.keyCode) {
            case 48:
            case 96:
            case 107:
            case 109:
                adjust(textbox);
                break
            }
        }
        var search = trim(textbox.value.replace(/\s+/g, " "));
        if (search == lastSearch[textbox.id]) {
            return
        }
        lastSearch[textbox.id] = search;
        if (search.length) {
            preFetch(textbox, search)
        } else {
            hide()
        }
    }

    function onKeyDown(e) {
        e = $E(e);
        var textbox = e._target;
        switch (e.keyCode) {
        case 27:
            hide();
            break;
        case 38:
            cycle(0);
            break;
        case 40:
            cycle(1);
            break
        }
    }

    function onFocus(e) {
        e = $E(e);
        var textbox = e._target;
        if (textbox != document) {
            currentTextbox = textbox
        }
    }
    this.attach = function (textbox) {
        textbox.setAttribute("autocomplete", "off");
        aE(textbox, "focus", onFocus);
        aE(textbox, "keyup", onKeyUp);
        aE(textbox, Browser.opera ? "keypress" : "keydown", onKeyDown)
    }
};

Lightbox = new

function () {
    var F, N, Q, J = {},
        C = {},
        P, D, E;

    function O() {
        aE(F, "click", G);
        aE(N, "mousewheel", B);
        aE(document, Browser.opera ? "keypress" : "keydown", H);
        aE(window, "resize", A);
        if (Browser.ie6) {
            aE(window, "scroll", M)
        }
    }

    function K() {
        dE(F, "click", G);
        dE(N, "mousewheel", B);
        dE(document, Browser.opera ? "keypress" : "keydown", H);
        dE(window, "resize", A);
        if (Browser.ie6) {
            dE(window, "scroll", M)
        }
    }

    function I() {
        if (P) {
            return
        }
        P = 1;
        var R = ge("layers");
        F = ce("div");
        F.className = "lightbox-overlay";
        N = ce("div");
        N.className = "lightbox-outer";
        Q = ce("div");
        Q.className = "lightbox-inner";
        F.style.display = N.style.display = "none";
        ae(R, F);
        ae(N, Q);
        ae(R, N)
    }

    function B(R) {
        R = $E(R);
        R.returnValue = false
    }

    function H(R) {
        R = $E(R);
        switch (R.keyCode) {
        case 27:
            G();
            break
        }
    }

    function A(R) {
        if (R != 1234) {
            if (C.onResize) {
                C.onResize()
            }
        }
        F.style.height = document.body.offsetHeight + "px";
        if (Browser.ie6) {
            M()
        }
    }

    function M() {
        var S = g_getScroll().y,
            R = g_getWindowSize().h;
        N.style.top = (S + R / 2) + "px"
    }

    function G() {
        K();
        if (C.onHide) {
            C.onHide()
        }
        E = 0;
        F.style.display = N.style.display = "none";
        array_apply(gE(document, "iframe"), function (R) {
            R.style.display = ""
        })
    }

    function L() {
        F.style.display = N.style.display = J[D].style.display = ""
    }
    this.setSize = function (R, S) {
        Q.style.visibility = "hidden";
        Q.style.width = R + "px";
        Q.style.height = S + "px";
        Q.style.left = -parseInt(R / 2) + "px";
        Q.style.top = -parseInt(S / 2) + "px";
        Q.style.visibility = "visible"
    };
    this.show = function (V, S, R) {
        E = 1;
        C = S || {};
        array_apply(gE(document, "iframe"), function (W) {
            W.style.display = "none"
        });
        I();
        O();
        if (D != V && J[D] != null) {
            J[D].style.display = "none"
        }
        D = V;
        var U = 0,
            T;
        if (J[V] == null) {
            U = 1;
            T = ce("div");
            ae(Q, T);
            J[V] = T
        } else {
            T = J[V]
        }
        if (C.onShow) {
            C.onShow(T, U, R)
        }
        A(1234);
        L()
    };
    this.reveal = function () {
        L()
    };
    this.hide = function () {
        G()
    };
    this.isVisible = function () {
        return E
    }
};
