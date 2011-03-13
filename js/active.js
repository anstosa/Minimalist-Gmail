// ==UserScript==
// @name             Minimalist for Gmail
// @author           Ansel Santosa
// @namespace        http://chrome.google.com/webstore
// @description      Features that require one time initialization on complete page load.
// ==/UserScript==

chrome.extension.sendRequest({elements: "o"}, function(response) {

	//---- VARIABLES ----//
	// f_* whether one-time task is done
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
	var f_actPlace = false;
	var keyinit = false;
	var hiddenG = false;
	var hiddenH = false;
	var hiddenN = false;
	var oldGbar = false;
	var guser;
	var counter = 0;
	var cP = null;
	var scrollinit = false;
	var appsinit = false;
	var running = false;
	var allow = true;
	var curtop = 0;
	var passed = false;
	var Npassed = false;
	var previous = null;
	var selected = null;
	var g = false;
	//---- END VARIABLES ----//

	//---- CHECK PAGE LOAD ----//
	function getLoad() {
		return document.getElementsByClassName('cP');
	}
	function init() {
		if (getLoad()[0] == cP) return;
		if (cP != null)
			cP.removeEventListener("DOMSubtreeModified", run, false);
		if ((cP = getLoad()[0]) != null) {
			console.log("MINIMALIST GMAIL: Gmail loaded! Work the magic...");
			cP.addEventListener("DOMSubtreeModified", run, false);
		}
	}
	//---- END CHECK PAGE LOAD ----//

	//---- MAIN LOOP ----//
	function run() {
		// only run loop if it hasn't run this second and isn't running already
		if (running || !allow) return true;
		else {
			running = true;
			allow = false;
			window.setTimeout(function() {
				allow = true;
			}, 1000);
		}
		passed = false;
		// go loop go!
		if (!scrollinit) {
			try {
				scroll();
				scrollinit == true;
			} catch(e) {}
		}
		if (document.querySelectorAll("[title *= 'Mail by Google']").length != null && document.querySelectorAll("[title *= 'Mail by Google']").length > 0 && !appsinit) {
			oldGbar = true;
			appsinit = true;
		}
		console.log("MINIMALIST GMAIL: **MAIN LOOP**");
		if (response.o.starHigh) {
			console.log("MINIMALIST GMAIL: checking for starred items");
			var images = document.querySelectorAll("tr.zA > td:nth-child(2) > img");
			try {
				if (images.length > 0) {
					for (var i = 0; i < images.length; i++) {
							if (((images[i].getAttribute("class") == "W5RYx") || (images[i].getAttribute("class") == "xf") || (images[i].getAttribute("class") == "xd") || (images[i].getAttribute("class") == "xc") || (images[i].getAttribute("class") == "xh") || (images[i].getAttribute("class") == "xe") || (images[i].getAttribute("class") == "xm") || (images[i].getAttribute("class") == "xk") || (images[i].getAttribute("class") == "xl") || (images[i].getAttribute("class") == "xo") || (images[i].getAttribute("class") == "xn") || (images[i].getAttribute("class") == "xj") || (images[i].getAttribute("class") == "xd")))
								minimalist(images[i].parentNode.parentNode, false, "star");
							else minimalist(images[i].parentNode.parentNode, true, "star");
					}
				}
			} catch (e) { console.error(e); }
		}
		if ((response.o.nav || response.o.navWC) && !f_navToggle) {
			console.log("MINIMALIST GMAIL: Adding the nav hook...");
			console.warn("MINIMALIST GMAIL: If Gmail runs slow, disable Hide Nav and Custom Nav Width");
			console.warn("MINIMALIST GMAIL: If messages appear below sidebar, disable hide inactive scrollbar");
			try {
				if (oldGbar) {
					var nav = document.getElementsByClassName("cP")[0].childNodes[1].childNodes[1].firstChild.childNodes[1].firstChild.firstChild.nextSibling;
						nav.previousSibling.setAttribute("style","");
				} else var nav = document.getElementsByClassName("cP")[0].childNodes[1].childNodes[1].firstChild.childNodes[1].firstChild.firstChild;
				nav.setAttribute("style", "display: none !important;");
				nav.nextSibling.setAttribute("style", "width: " + (document.getElementsByClassName("cQ")[0].scrollWidth - 10) + "px !important;");
				var toggleN = document.createElement("div");
					toggleN.setAttribute("id", "navToggle");
					toggleN.setAttribute("onClick", "javascript:if(document.getElementById('navToggle').nextSibling.getAttribute('style')=='width: " + response.o.navW + "px !important'){document.getElementById('navToggle').nextSibling.setAttribute('style', 'display: none !important;');document.getElementById('navToggle').nextSibling.nextSibling.setAttribute('style', 'width: ' + (document.getElementsByClassName(\"cQ\")[0].scrollWidth - 10) + 'px !important;');}else{document.getElementById('navToggle').nextSibling.setAttribute('style', 'width: " + response.o.navW + "px !important');document.getElementById('navToggle').nextSibling.nextSibling.setAttribute('style', 'width: ' + (document.getElementsByClassName(\"cQ\")[0].scrollWidth - 10 - " + response.o.navW + ") + 'px !important;');};");
				if (response.o.navO)
					toggleN.setAttribute("onMouseOver", "javascript:if(document.getElementById('navToggle').nextSibling.getAttribute('style')!='width: " + response.o.navW + "px !important'){document.getElementById('navToggle').nextSibling.setAttribute('style', 'width: " + response.o.navW + "px !important');document.getElementById('navToggle').nextSibling.nextSibling.setAttribute('style', 'width: ' + (document.getElementsByClassName(\"cQ\")[0].scrollWidth - 10 - " + response.o.navW + ") + 'px !important;');};");
				nav.parentNode.insertBefore(toggleN, nav);
				if (!response.o.nav) {
					toggleN.setAttribute("style", "display: none;");
					var navs = document.getElementById("navToggle").nextSibling;
						navs.setAttribute("style", "width: " + response.o.navW + "px !important");
						navs.nextSibling.setAttribute('style', 'width: ' + (document.getElementsByClassName("cQ")[0].scrollWidth - response.o.navW) + 'px !important;');
				}
				f_navToggle = true;
				toggleNav();
			} catch (e) { console.error(e); }
		}
		if (response.o.gbarH && !f_gbarToggle) {
			console.log("MINIMALIST GMAIL: hiding Google Bar & adding the header hook...");
			try {
				var login = null;
				if (document.getElementById("gbw"))
					login = document.getElementById("gbw");
				else login = document.getElementById("gbar").firstChild;
				minimalist(login.parentNode.parentNode, false, "hideG");
				var toggleG = document.createElement("div");
					toggleG.setAttribute("id", "gbarToggle");
				login.parentNode.parentNode.parentNode.insertBefore(toggleG, login.parentNode.parentNode);
				f_gbarToggle = true;
			} catch (e) { console.error(e); }
		}
		if (response.o.header && !f_headerToggle) {
			console.log("MINIMALIST GMAIL: hiding header and adding toggle...");
			var logo = document.querySelectorAll("[id = ':rk']")[0].parentNode;
			try {
				minimalist(logo.parentNode.parentNode, false, "hideH");
				if (!response.o.gbarH) {
					var toggle = document.createElement("div");
					toggle.setAttribute("id", "headerToggle");
					logo.parentNode.parentNode.parentNode.insertBefore(toggle, logo.parentNode.parentNode);
				}
				f_headerToggle = true;
			} catch (e) { console.error(e); }
		}
		if (!keyinit) {
			try {
				if (response.o.gbarH) {
					hiddenG = true;
					document.getElementById('gbarToggle').addEventListener("click", toggleHeader, false);
				}
				if (response.o.header) {
					hiddenH = true;
					if (!response.o.gbarH)
						document.getElementById('headerToggle').addEventListener("click", toggleHeader, false);
				}
				if (response.o.nav) {
					hiddenN = true;
					document.getElementById('navToggle').addEventListener("click", toggleNav, false);
					document.getElementById('navToggle').addEventListener("mouseover", toggleNavO, false);
				}
				keyinit = true;
			} catch (e) {}
		}
		if (response.o.cbar && !document.getElementById('cbarOne')) {
			console.log("MINIMALIST GMAIL: customizing Google links...");
			if (document.getElementById("gbar")) {
				try {
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
					if (response.o.cbarM) {
						var moreD = document.querySelectorAll("#gbar div.gbm")[0];
						var current = document.createElement("div");
							current.setAttribute('class','gb2');
						var hr = document.createElement("div");
							hr.setAttribute('class','gbd');
							current.appendChild(hr);
							moreD.insertBefore(current, moreD.firstChild);
						current = document.createElement("a");
							current.setAttribute('target','_blank');
							current.setAttribute('class','gb2');
							current.setAttribute('href','http://www.google.com');
							current.appendChild(document.createTextNode("Web"));
							moreD.insertBefore(current, moreD.firstChild);
						current = document.createElement("a");
							current.setAttribute('target','_blank');
							current.setAttribute('class','gb2');
							current.setAttribute('href','http://picasaweb.google.com');
							current.appendChild(document.createTextNode("Photos"));
							moreD.insertBefore(current, moreD.firstChild);
						current = document.createElement("a");
							current.setAttribute('target','_blank');
							current.setAttribute('class','gb2');
							current.setAttribute('href','http://www.google.com/reader');
							current.appendChild(document.createTextNode("Reader"));
							moreD.insertBefore(current, moreD.firstChild);
						current = document.createElement("a");
							current.setAttribute('target','_blank');
							current.setAttribute('class','gb2');
							current.setAttribute('href','http://docs.google.com');
							current.appendChild(document.createTextNode("Documents"));
							moreD.insertBefore(current, moreD.firstChild);
						current = document.createElement("a");
							current.setAttribute('target','_blank');
							current.setAttribute('class','gb2');
							current.setAttribute('href','http://www.google.com/calendar');
							current.appendChild(document.createTextNode("Calendar"));
							moreD.insertBefore(current, moreD.firstChild);
					} else {
						var more = document.getElementById("gbar").childNodes[0].childNodes[12];
							more.setAttribute("style","display: none !important;");
					}
				} catch (e) { console.error(e); }
			} else {
				try {
					var one = document.getElementById("gbz").childNodes[1].childNodes[0].childNodes[0];
						one.setAttribute("href", response.o.c_u_1);
						one.setAttribute("target", response.o.c_t_1);
						one.setAttribute("id", "cbarOne");
						one.childNodes[1].innerHTML = response.o.c_n_1;
					var two = document.getElementById("gbz").childNodes[1].childNodes[1].childNodes[0];
						two.setAttribute("href", response.o.c_u_2);
						two.setAttribute("target", response.o.c_t_2);
						two.childNodes[1].innerHTML = response.o.c_n_2;
					var three = document.getElementById("gbz").childNodes[1].childNodes[2].childNodes[0];
						three.setAttribute("href", response.o.c_u_3);
						three.setAttribute("target", response.o.c_t_3);
						three.childNodes[1].innerHTML = response.o.c_n_3;
					var four = document.getElementById("gbz").childNodes[1].childNodes[3].childNodes[0];
						four.setAttribute("href", response.o.c_u_4);
						four.setAttribute("target", response.o.c_t_4);
						four.childNodes[1].innerHTML = response.o.c_n_4;
					var five = document.getElementById("gbz").childNodes[1].childNodes[4].childNodes[0];
						five.setAttribute("href", response.o.c_u_5);
						five.setAttribute("target", response.o.c_t_5);
						five.childNodes[1].innerHTML = response.o.c_n_5;
					var six = document.getElementById("gbz").childNodes[1].childNodes[5].childNodes[0];
						six.setAttribute("href", response.o.c_u_6);
						six.setAttribute("target", response.o.c_t_6);
						six.childNodes[1].innerHTML = response.o.c_n_6;
					if (response.o.cbarM) {
						var moreD = document.querySelectorAll("#gbz div.gbm ol")[0];
						var li = document.createElement("li");
							li.setAttribute("class", "gbmtc");
						var current = document.createElement("div");
							current.setAttribute('class','gbmt gbmh');
						var hr = document.createElement("div");
							hr.setAttribute('class','gbd');
							li.appendChild(hr);
							moreD.insertBefore(li, moreD.firstChild);
						current = document.createElement("a");
							current.setAttribute('target','_blank');
							current.setAttribute('class','gbmt');
							current.setAttribute('href','http://www.google.com');
							current.appendChild(document.createTextNode("Web"));
							li = document.createElement("li");
							li.setAttribute("class", "gbmtc");
							li.appendChild(current);
							moreD.insertBefore(li, moreD.firstChild);
						current = document.createElement("a");
							current.setAttribute('target','_blank');
							current.setAttribute('class','gbmt');
							current.setAttribute('href','http://picasaweb.google.com');
							current.appendChild(document.createTextNode("Photos"));
							li = document.createElement("li");
							li.setAttribute("class", "gbmtc");
							li.appendChild(current);
							moreD.insertBefore(current, moreD.firstChild);
						current = document.createElement("a");
							current.setAttribute('target','_blank');
							current.setAttribute('class','gbmt');
							current.setAttribute('href','http://www.google.com/reader');
							current.appendChild(document.createTextNode("Reader"));
							li = document.createElement("li");
							li.setAttribute("class", "gbmtc");
							li.appendChild(current);
							moreD.insertBefore(current, moreD.firstChild);
						current = document.createElement("a");
							current.setAttribute('target','_blank');
							current.setAttribute('class','gbmt');
							current.setAttribute('href','http://docs.google.com');
							current.appendChild(document.createTextNode("Documents"));
							li = document.createElement("li");
							li.setAttribute("class", "gbmtc");
							li.appendChild(current);
							moreD.insertBefore(current, moreD.firstChild);
						current = document.createElement("a");
							current.setAttribute('target','_blank');
							current.setAttribute('class','gbmt');
							current.setAttribute('href','http://www.google.com/calendar');
							current.appendChild(document.createTextNode("Calendar"));
							li = document.createElement("li");
							li.setAttribute("class", "gbmtc");
							li.appendChild(current);
							moreD.insertBefore(current, moreD.firstChild);
					} else {
						var more = document.getElementById("gbz").childNodes[1].childNodes[6];
							more.setAttribute("style","display: none !important;");
					}
				} catch (e) { console.error(e); }
			}
		}
		if ( !f_guser && (response.o.user || response.o.labs || response.o.settings || response.o.help || response.o.out)) {
			console.log("MINIMALIST GMAIL: targetting Google User bar...");
			try {
				if (document.getElementById("guser")) {
					guser = document.getElementById("guser").firstChild;
					f_guser = true;
				}
			} catch (e) { console.error(e); }
		}
		if (response.o.user && !f_user && f_guser) {
			console.log("MINIMALIST GMAIL: hiding signed in...");
			try {
				var user = guser.childNodes[0];
					user.setAttribute("style","display: none !important;");
					user.parentNode.removeChild(user.nextSibling);
				f_user = true;
			} catch (e) { console.error(e); }
		}
		if (response.o.labs && !f_labs && f_guser) {
			console.log("MINIMALIST GMAIL: hiding labs icon...");
			try {
				var labs = guser.childNodes[4];
					labs.setAttribute("style","display: none !important;");
					labs.parentNode.removeChild(labs.nextSibling);
				f_labs = true;
			} catch (e) { console.error(e); }
		}
		if (response.o.settings && !f_settings && f_guser) {
			console.log("MINIMALIST GMAIL: hiding settings...");
			try {
				var settings = guser.childNodes[6];
					settings.setAttribute("style","display: none !important;");
					settings.parentNode.removeChild(settings.nextSibling);
				f_settings = true;
			} catch (e) { console.error(e); }
		}
		if (response.o.help && !f_help && f_guser) {
			console.log("MINIMALIST GMAIL: hiding help...");
			try {
				var help = guser.childNodes[8];
					help.setAttribute("style","display: none !important;");
					help.parentNode.removeChild(help.nextSibling);
				f_help = true;
			} catch (e) { console.error(e); }
		}
		if (response.o.out && !f_out && f_guser) {
			console.log("MINIMALIST GMAIL: hiding sign out...");
			try {
				var out = guser.childNodes[10];
					out.setAttribute("style","display: none !important;");
					out.parentNode.removeChild(out.previousSibling);
				f_out = true;
			} catch (e) { console.error(e); }
		}
		if ((response.o.nav || response.o.navWC) && counter < 10) {
			console.log("MINIMALIST GMAIL: Fixing load errors for nav width calculations...");
			reconfig();
		}
		if (counter < 50) counter++;
		running  = false;
	}
	//---- END MAIN LOOP ----//

	//---- HELPER METHODS ----//
	function scroll(event) {
		var head = document.getElementById(":rk").parentNode.parentNode.parentNode.parentNode;
		var curtop = head.offsetHeight;
		if (response.o.t_fix) {
			var msg = null;
			var lst = null;
			if (msg = document.getElementsByClassName(" iI D E")[0]) {
				if (window.pageYOffset > curtop) {
					if (!passed) {
						passed = true;
						msg.parentNode.setAttribute("style", "padding-top: 36px !important");
						minimalist(msg, false, "fix");
					}
				} else {
					if (passed) {
						passed = false;
						msg.parentNode.setAttribute("style", "");
						minimalist(msg, true, "fix");
					}
				}
			}
			if (lst = document.getElementsByClassName("VP5otc-pzeoBf D E")[0]) {
				if (window.pageYOffset > curtop) {
					if (!passed) {
						passed = true;
						lst.parentNode.setAttribute("style", "padding-top: 36px !important;");
						minimalist(lst, false, "fix");
					}
				} else {
					if (passed) {
						passed = false;
						lst.parentNode.setAttribute("style", "");
						minimalist(lst, true, "fix");
					}
				}
			}
		}
		if (response.o.navF) {
			var nav = null;
			if (nav = head.nextSibling.firstChild.firstChild.nextSibling) {
				if (window.pageYOffset > curtop) {
					if (!Npassed) {
						Npassed = true;
						if (response.o.nav) {
							minimalist(nav.previousSibling, false, "fix");
							minimalist(nav, false, "fix");
							minimalist(nav.nextSibling, false, "fix");
						} else {
							minimalist(nav.previousSibling, false, "fix");
							minimalist(nav, false, "fix");	
						}
					}
				} else {
					if (Npassed) {
						Npassed = false;
						if (response.o.nav) {
							minimalist(nav.previousSibling, true, "fix");
							minimalist(nav, true, "fix");
							minimalist(nav.nextSibling, true, "fix");
						} else {
							minimalist(nav.previousSibling, true, "fix");
							minimalist(nav, true, "fix");	
						}
					}
				}
			}
		}
	}

	function toggleHeader(){
		if (response.o.gbarH && !response.o.header) {
			if (hiddenG) {
				minimalist(document.getElementById('gbarToggle').nextSibling, true, "hideG");
				hiddenG = false;
			} else {
				minimalist(document.getElementById('gbarToggle').nextSibling, false, "hideG");
				hiddenG = true;
			}
		} else if (response.o.gbarH && response.o.header) {
			if (hiddenH) {
				minimalist(document.getElementById('gbarToggle').nextSibling, true, "hideG");
				if (oldGbar)
					minimalist(document.getElementById('gbarToggle').nextSibling.nextSibling.firstChild.firstChild.nextSibling.firstChild.nextSibling, true, "hideH");
				else minimalist(document.getElementById('gbarToggle').nextSibling.nextSibling.nextSibling, true, "hideH");
				hiddenH = false;
			} else {
				minimalist(document.getElementById('gbarToggle').nextSibling, false, "hideG");
				if (oldGbar)
					minimalist(document.getElementById('gbarToggle').nextSibling.nextSibling.firstChild.firstChild.nextSibling.firstChild.nextSibling, false, "hideH");
				else minimalist(document.getElementById('gbarToggle').nextSibling.nextSibling.nextSibling, false, "hideH");
				hiddenH = true;
			}
		} else {
			if (hiddenH){
				minimalist(document.getElementById('headerToggle').nextSibling, true, "hideH");
				hiddenH = false;
			} else {
				minimalist(document.getElementById('headerToggle').nextSibling, false, "hideH");
				hiddenH = true;
			}
		}
	}

	function toggleNavO() {	if (hiddenN) toggleNav(); }
	function toggleNav() {
		if (response.o.nav) {
			if (hiddenN) {
				minimalist(document.getElementById('navToggle').nextSibling.nextSibling, true, "hideN");
				hiddenN = false;
			} else {
				minimalist(document.getElementById('navToggle').nextSibling.nextSibling, false, "hideN");
				hiddenN = true;
			}
		}
	}

	function minimalist(element, remove, minClass) {
		var classes = new Array();
		try { classes = element.getAttribute("min").split(" "); } catch(e) {}
		classes = removeItems(classes, minClass);
		if (!remove) classes.push(minClass);
		element.setAttribute("min", classes.join(" "));
	}
	
	function removeItems(array, item) {
		var i = 0;
		while (i < array.length) {
			if (array[i] == item)
				array.splice(i, 1);
			else i++;
		}
		return array;
	}

	function reconfig() {
		console.log("MINIMALIST GMAIL: resize detected. reconfigure?");
		if ((response.o.nav || response.o.navWC) && f_navToggle) {
			console.log("MINIMALIST GMAIL: yep. reconfiguring...");
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
	
	function keyup(event) {
		element = event.target;
		elementName = element.nodeName.toLowerCase();
		if (elementName == "input" || elementName == "textarea") return true;
		else {
			console.log("MINIMALIST GMAIL: keystroke detected by active.js. Run checks");
			run();
		}
		return true;
	}

	function keypress(event) {
		element = event.target;
		elementName = element.nodeName.toLowerCase();
		if (elementName == "input" || elementName == "textarea") return true;
		console.log("MINIMALIST GMAIL: keystroke intercepted by passive.js");
		if (String.fromCharCode(event.which) == "g") {
			g = true;
			window.setTimeout(function(){
				g = false;
			}, 1000);
		}
		// [ j ] [ k ]
		if ((String.fromCharCode(event.which) == "j" || String.fromCharCode(event.which) == "k") && !event.ctrlKey && !event.metaKey) {
			var images = document.querySelectorAll("tr.zA > td:first-child > img");
			for (var i = 0; i < images.length; i++) {
				if (images[i].getAttribute("style") == "visibility: visible; ") {
					if (String.fromCharCode(event.which) == "j")
						selected = images[i].parentNode.parentNode.nextSibling;
					else selected = images[i].parentNode.parentNode.previousSibling;
					if (selected == null) return true;
					if (previous != null) minimalist(previous, true, "select");
					minimalist(selected, false, "select");
					previous = selected;
				}
			}
		}
		// [ / ]
		if (response.o.header && (event.which == "47" || (String.fromCharCode(event.which) == "l" && g)) && !event.ctrlKey && !event.metaKey && hiddenH) {
			toggleHeader();
		}
		// [ \ ]
		if ((response.o.header || response.o.gbarH) && event.which == "92" && !event.ctrlKey && !event.metaKey) {
			toggleHeader();
		}
		// [ ` ] tilde key
		if (response.o.nav && event.which == "96" && !event.ctrlKey && !event.metaKey) {
			toggleNav();
			if (response.o.nav) {
				if (document.getElementById('navToggle').nextSibling.getAttribute('style') != 'width: ' + response.o.navW + 'px !important') {
					document.getElementById('navToggle').nextSibling.setAttribute('style', 'width: ' + response.o.navW + 'px !important');
					document.getElementById('navToggle').nextSibling.nextSibling.setAttribute('style', 'width: ' + (document.getElementsByClassName("cQ")[0].scrollWidth - 10 - response.o.navW) + 'px !important;');
				} else {
					document.getElementById('navToggle').nextSibling.setAttribute('style', 'display: none !important;');
					document.getElementById('navToggle').nextSibling.nextSibling.setAttribute('style', 'width: ' + (document.getElementsByClassName("cQ")[0].scrollWidth - 10) + 'px !important;');
				}
			}
		}
		return true;
	}
	//---- END HELPER METHODS ----//

	// LISTENERS
	window.addEventListener("scroll", scroll, false);
	if (response.o.starHigh)
		window.addEventListener("keyup", keyup, false);
	document.addEventListener("keypress", keypress, false);
	window.addEventListener("click", run, false);
	window.addEventListener("resize", reconfig, false);
	window.addEventListener("DOMSubtreeModified", init, false);
});