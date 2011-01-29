// ==UserScript==
// @name             Minimalist Gmail
// @author           Ansel Santosa
// @namespace        http://chrome.google.com/webstore
// @description      Features that require one time initialization on complete page load.
// ==/UserScript==

chrome.extension.sendRequest({elements: "o"}, function(response) {

	var f_guser = false;
	var f_user = false;
	var f_labs = false;
	var f_settings = false;
	var f_help = false;
	var f_out = false;
	var f_gbarToggle = false;
	var f_headerToggle = false;
	var f_navToggle = false;
	var f_nav = false;
	var f_rows = false;
	var f_details = false;
	var f_actPlace = false;
	var loaded = false;
	var go = false;

	function init() {
		var el = document.body.getElementsByTagName('b');
		if (el && el.length && (el[0].innerHTML == 'Gmail' || el[0].innerHTML == 'Mail' || el[0].innerHTML == 'Google Mail')) {
			wait();
		} else window.setTimeout(init,1000);
	}
	function keypress(event) {
		element = event.target;
		elementName = element.nodeName.toLowerCase();
		if (elementName == "input" || elementName == "textarea") return true;
		else wait();
		return true;
	}
	function doit() {
		if (response.o.starHigh) {
			var img = document.getElementsByTagName("img");
			try {
				var x;
				for (x in img) {
					if (((img[x].getAttribute("class") == "W5RYx") || (img[x].getAttribute("class") == "xf") || (img[x].getAttribute("class") == "xd") || (img[x].getAttribute("class") == "xc") || (img[x].getAttribute("class") == "xh") || (img[x].getAttribute("class") == "xe") || (img[x].getAttribute("class") == "xm") || (img[x].getAttribute("class") == "xk") || (img[x].getAttribute("class") == "xl") || (img[x].getAttribute("class") == "xo") || (img[x].getAttribute("class") == "xn") || (img[x].getAttribute("class") == "xj") || (img[x].getAttribute("class") == "xd"))) {
						if (response.o.starCLR != null && response.o.starCLR != "")
							img[x].parentNode.parentNode.setAttribute("style", "background-color: " + response.o.starCLR + ";");
						else img[x].parentNode.parentNode.setAttribute("style", "background-color: #ffcc00;");
					} else if (((img[x].getAttribute("class") == "EqK8f") || (img[x].getAttribute("class") == "xi")) && !((img[x].parentNode.previousSibling.firstChild.getAttribute("style") == "visibility: visible; ") && response.o.high)) 
						img[x].parentNode.parentNode.setAttribute("style", "");
				}
			} catch (e) { /* console.error(e); */ }
		}
		if (response.o.high && !f_rows) {
			try {
				var test = document.getElementsByClassName("VP5otc-pzeoBf")[0];
				if(response.o.high) {
					if (response.o.highCLR != null && response.o.highCLR != "")
						if (test.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.firstChild.firstChild.firstChild.firstChild.childNodes[1].firstChild.getAttribute("class").indexOf("zE") != -1)
							test.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.firstChild.firstChild.firstChild.firstChild.childNodes[1].firstChild.setAttribute("style", "background-color: " + response.o.highCLRu + ";");
						else test.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.firstChild.firstChild.firstChild.firstChild.childNodes[1].firstChild.setAttribute("style", "background-color: " + response.o.highCLR + ";");
					else test.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.firstChild.firstChild.firstChild.firstChild.childNodes[1].firstChild.setAttribute("style", "background-color: #0099ff !important;");
				}
				f_rows = true;
			} catch (e) { /* console.error(e); */ }
		}
		/* if (response.o.high) {
			try {
				var test = document.getElementsByClassName("VP5otc-pzeoBf")[0];
				if(response.o.high) {
					if (response.o.highCLR != null && response.o.highCLR != "")
						if (test.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.firstChild.firstChild.firstChild.firstChild.childNodes[1].firstChild.getAttribute("class").indexOf("zE") != -1)
							test.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.firstChild.firstChild.firstChild.firstChild.childNodes[1].firstChild.setAttribute("style", "background-color: " + response.o.highCLRu + ";");
						else test.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.firstChild.firstChild.firstChild.firstChild.childNodes[1].firstChild.setAttribute("style", "background-color: " + response.o.highCLR + ";");
					else test.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.firstChild.firstChild.firstChild.firstChild.childNodes[1].firstChild.setAttribute("style", "background-color: #0099ff !important;");
				}
				f_rows = true;
			} catch (e) { console.error(e); }
		} */ 
		if (!f_navToggle) {
			var nav = document.getElementsByClassName("cP")[0].childNodes[1].childNodes[1].firstChild.childNodes[1].firstChild.firstChild;
				nav.setAttribute("style", "display: none !important;");
				nav.nextSibling.setAttribute("style", "width: " + (document.getElementsByClassName("cQ")[0].scrollWidth - 10) + "px !important;");
			var toggleN = document.createElement("div");
				toggleN.setAttribute("id", "navToggle");
			nav.parentNode.insertBefore(toggleN, nav);
			document.getElementById("navToggle").setAttribute("onClick", "javascript:if(document.getElementById('navToggle').nextSibling.getAttribute('style')=='width: " + response.o.navW + "px !important'){document.getElementById('navToggle').nextSibling.setAttribute('style', 'display: none !important;');document.getElementById('navToggle').nextSibling.nextSibling.setAttribute('style', 'width: ' + (document.getElementsByClassName(\"cQ\")[0].scrollWidth - 10) + 'px !important;');}else{document.getElementById('navToggle').nextSibling.setAttribute('style', 'width: " + response.o.navW + "px !important');document.getElementById('navToggle').nextSibling.nextSibling.setAttribute('style', 'width: ' + (document.getElementsByClassName(\"cQ\")[0].scrollWidth - 10 - " + response.o.navW + ") + 'px !important;');};");
			document.getElementById("navToggle").setAttribute("onMouseOver", "javascript:if(document.getElementById('navToggle').nextSibling.getAttribute('style')!='width: " + response.o.navW + "px !important'){document.getElementById('navToggle').nextSibling.setAttribute('style', 'width: " + response.o.navW + "px !important');document.getElementById('navToggle').nextSibling.nextSibling.setAttribute('style', 'width: ' + (document.getElementsByClassName(\"cQ\")[0].scrollWidth - 10 - " + response.o.navW + ") + 'px !important;');};");
			f_navToggle = true;
			if (!response.o.nav) {
				toggleN.setAttribute("style", "display: none;");
				var navs = document.getElementById("navToggle").nextSibling;
					navs.setAttribute("style", "width: " + response.o.navW + "px !important");
					navs.nextSibling.setAttribute('style', 'width: ' + (document.getElementsByClassName("cQ")[0].scrollWidth - response.o.navW) + 'px !important;');
			}
		}
		if (response.o.gbarH && !f_gbarToggle) {
			try {
				var login = document.getElementById("guser");
					login.parentNode.parentNode.setAttribute("style", "display: none !important;");
				var toggleG = document.createElement("div");
					toggleG.setAttribute("id", "gbarToggle");
				if (!response.o.header) {
					login.parentNode.parentNode.parentNode.insertBefore(toggleG, login.parentNode.parentNode);
					document.getElementById("gbarToggle").setAttribute("onClick", "javascript:if(document.getElementById('gbarToggle').nextSibling.getAttribute('style')==''){document.getElementById('gbarToggle').nextSibling.setAttribute('style', 'display: none !important;');}else{document.getElementById('gbarToggle').nextSibling.setAttribute('style', '');};");
				} else {
					login.parentNode.parentNode.parentNode.parentNode.insertBefore(toggleG, login.parentNode.parentNode.parentNode);
					document.getElementById("gbarToggle").setAttribute("onClick", "javascript:if(document.getElementById('gbarToggle').nextSibling.firstChild.getAttribute('style')==''){document.getElementById('gbarToggle').nextSibling.firstChild.setAttribute('style', 'display: none !important;');document.getElementById('gbarToggle').nextSibling.nextSibling.nextSibling.firstChild.setAttribute('style', 'display: none !important;');}else{document.getElementById('gbarToggle').nextSibling.firstChild.setAttribute('style', '');document.getElementById('gbarToggle').nextSibling.nextSibling.nextSibling.firstChild.setAttribute('style', '');};");
				}
				f_gbarToggle = true;
			} catch (e) { console.error(e); }
		}
		if (response.o.f_activity_move && !f_actPlace) {
			try {
				var act = document.getElementsByClassName("nH l2 ov")[0].childNodes[4];
					act = act.removeChild(act.firstChild);
					if (response.o.gbar)
						act.setAttribute("style","float: left; height: 20px !important; padding-top: 5px !important; padding-left: 5px !important;");
					else act.setAttribute("style","float: left; height: 20px !important; width: 50%; text-align: center; padding-top: 5px !important;");
				var bar = document.getElementById("gbar").parentNode;
					bar.insertBefore(act, document.getElementById("gbar").nextSibling);
				f_actPlace = true;
			} catch (e) { console.error(e); }
		}
		if (response.o.header && !f_headerToggle) {
				var logo = document.getElementById(":rm");
				logo.parentNode.parentNode.setAttribute("style", "display: none !important;");
				if (!response.o.gbarH) {
					var toggle = document.createElement("div");
					toggle.setAttribute("id", "headerToggle");
					logo.parentNode.parentNode.parentNode.insertBefore(toggle, logo.parentNode.parentNode);
					document.getElementById("headerToggle").setAttribute("onClick", "javascript:if(document.getElementById('headerToggle').nextSibling.getAttribute('style')==''){document.getElementById('headerToggle').nextSibling.setAttribute('style', 'display: none !important;');}else{document.getElementById('headerToggle').nextSibling.setAttribute('style', '');};");
				}
				f_headerToggle = true;
		}
		if (response.o.cbar && !document.getElementById('cbarOne')) {
			var one = document.getElementById("gbar").childNodes[0].childNodes[0];
				one.setAttribute("style", "font-weight: normal;");
				one.setAttribute("class", "");
				one.innerHTML = "<a target=\"" + response.o.c_t_1 + "\" id=\"cbarOne\" href=\"" + response.o.c_u_1 + "\" class=\"gb1 qq\">" + response.o.c_n_1 + "</a>";
			var two = document.getElementById("gbar").childNodes[0].childNodes[2];
				two.setAttribute("href", response.o.c_u_2);
				two.setAttribute("target", response.o.c_t_2);
				two.innerHTML = response.o.c_n_2;
			var three = document.getElementById("gbar").childNodes[0].childNodes[4];
				three.setAttribute("href", response.o.c_u_3);
				three.setAttribute("target", response.o.c_t_3);
				three.innerHTML = response.o.c_n_3;
			var four = document.getElementById("gbar").childNodes[0].childNodes[6];
				four.setAttribute("href", response.o.c_u_4);
				four.setAttribute("target", response.o.c_t_4);
				four.innerHTML = response.o.c_n_4;
			var five = document.getElementById("gbar").childNodes[0].childNodes[8];
				five.setAttribute("href", response.o.c_u_5);
				five.setAttribute("target", response.o.c_t_5);
				five.innerHTML = response.o.c_n_5;
			var six = document.getElementById("gbar").childNodes[0].childNodes[10];
				six.setAttribute("href", response.o.c_u_6);
				six.setAttribute("target", response.o.c_t_6);
				six.innerHTML = response.o.c_n_6;
			var more = document.getElementById("gbar").childNodes[0].childNodes[12];
				more.setAttribute("style","display: none !important;");
		}
		if ( !f_guser && (response.o.user || response.o.labs || response.o.settings || response.o.help || response.o.out)) {
			var guser;
			try {
				guser = document.getElementById("guser").firstChild;
				f_guser = true;
			} catch (e) { console.error(e); }
		}
		if (response.o.user && !f_user && f_guser) {
			try {
				var user = guser.childNodes[0];
					user.setAttribute("style","display: none !important;");
					user.nextSibling.setAttribute("style","display: none !important;");
				f_user = true;
			} catch (e) { console.error(e); }
		}
		if (response.o.labs && !f_labs && f_guser) {
			try {
				var labs = guser.childNodes[4];
					labs.setAttribute("style","display: none !important;");
					labs.previousSibling.previousSibling.previousSibling.setAttribute("style","display: none !important;");
				f_labs = true;
			} catch (e) { console.error(e); }
		}
		if (response.o.settings && !f_settings && f_guser) {
			try {
				var settings = guser.childNodes[6];
					settings.setAttribute("style","display: none !important;");
					settings.previousSibling.setAttribute("style","display: none !important;");
				f_settings = true;
			} catch (e) { console.error(e); }
		}
		if (response.o.help && !f_help && f_guser) {
			try {
				var help = guser.childNodes[8];
					help.setAttribute("style","display: none !important;");
					help.previousSibling.setAttribute("style","display: none !important;");
				f_help = true;
			} catch (e) { console.error(e); }
		}
		if (response.o.out && !f_out && f_guser) {
			try {
				var out = guser.childNodes[10];
					out.setAttribute("style","display: none !important;");
					out.previousSibling.setAttribute("style","display: none !important;");
				f_out = true;
			} catch (e) { console.error(e); }
		}
		/* if (response.o.details && !f_details) {
			try {
				document.getElementsByClassName("gE ib gt")[0].setAttribute("style","");
				document.getElementsByClassName("gE iv gt")[0].setAttribute("style","display: none;");
				f_details = true;
			} catch (e) { console.error(e); }
		} */
	}
	function wait() {
		var starcheck = setInterval(doit, 1000);
	}
	function reconfig() {
		if (f_navToggle) {
			if (response.o.nav) {
				document.getElementById("navToggle").nextSibling.nextSibling.setAttribute("style", "width: 600px !important;");
				var viewport = document.getElementsByClassName("cQ")[0].scrollWidth - 10;
				if (document.getElementById("navToggle").nextSibling.getAttribute("style") != "width: " + response.o.navW + "px !important") {
					document.getElementById("navToggle").nextSibling.nextSibling.setAttribute("style", "width: " + viewport + "px !important;");
				} else {
					var width = viewport - response.o.navW;
					document.getElementById("navToggle").nextSibling.nextSibling.setAttribute("style", "width: " + width + "px !important;");
				}
			} else {
				document.getElementById("navToggle").nextSibling.nextSibling.setAttribute("style", "width: 600px !important;");
				var navss = document.getElementById("navToggle").nextSibling;
					navss.setAttribute("style", "width: " + response.o.navW + "px !important");
					navss.nextSibling.setAttribute('style', 'width: ' + (document.getElementsByClassName("cQ")[0].scrollWidth - response.o.navW) + 'px !important;');
			}
		}
	}
	init();
	document.addEventListener("keypress", keypress, false);
	document.addEventListener("click", wait, false);
	window.addEventListener("resize", reconfig, false);
});