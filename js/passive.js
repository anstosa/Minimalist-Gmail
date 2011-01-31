// ==UserScript==
// @name             Minimalist Gmail
// @author           Ansel Santosa
// @namespace        http://chrome.google.com/webstore
// @description      Features that respond to keypress
// ==/UserScript==

chrome.extension.sendRequest({elements: 'o'}, function(response) {
	var previous = null;
	var selected = null;
	function keypress(event) {
		if (response.o.high) {
			element = event.target;
			elementName = element.nodeName.toLowerCase();
			if (elementName == "input" || elementName == "textarea") return true;
			console.log("MINIMALIST GMAIL: keystroke intercepted by passive.js");
			if (String.fromCharCode(event.which)=="g") {
				previous = null;
				selected = null;
			}
			// [ j ] [ k ]
			if ((String.fromCharCode(event.which)=="j" || String.fromCharCode(event.which)=="k") && !event.ctrlKey && !event.metaKey) {
				var images = document.querySelectorAll("tr.yO > td:first-child > img");
				for (var i = 0; i < images.length; i++) {
					if (images[i].getAttribute("style") == "visibility: visible; ") {
						if (String.fromCharCode(event.which)=="j") {
							selected = images[i].parentNode.parentNode.nextSibling;
							if (selected == null) return true;
							else if (previous != null) previous.setAttribute("style","");
							if (response.o.highCLR != null && response.o.highCLR != "") {
								if (selected.getAttribute("class").indexOf("zE") != -1)
									selected.setAttribute("style", "background-color: " + response.o.highCLRu + " !important;");
								else selected.setAttribute("style", "background-color: " + response.o.highCLR + " !important;");
							} else selected.setAttribute("style", "background-color: #0099ff !important;");
						} else {
							selected = images[i].parentNode.parentNode.previousSibling;
							if (selected == null) return true;
							else if (previous != null) previous.setAttribute("style","");
							if (response.o.highCLR != null && response.o.highCLR != "") {
								if (selected.getAttribute("class").indexOf("zE") != -1)
									selected.setAttribute("style", "background-color: " + response.o.highCLRu + " !important;");
								else selected.setAttribute("style", "background-color: " + response.o.highCLR + " !important;");
							} else selected.setAttribute("style", "background-color: #0099ff !important;");
						}
						previous = selected;
					}
				}
			}
			// [ / ]
			if ((event.which == "47") && !event.ctrlKey && !event.metaKey && response.o.header) {
				if (response.o.gbarH) {
					document.getElementById('gbarToggle').nextSibling.firstChild.setAttribute('style', '');
					document.getElementById('gbarToggle').nextSibling.nextSibling.nextSibling.firstChild.setAttribute('style', '');
				} else document.getElementById('headerToggle').nextSibling.setAttribute('style', '');
			}
			// [ \ ]
			if ((event.which == "92" || String.fromCharCode(event.which)=="l") && !event.ctrlKey && !event.metaKey && (response.o.header || response.o.gbarH)) {
				if (response.o.gbarH) {
					if (document.getElementById('gbarToggle').nextSibling.firstChild.getAttribute('style') != 'display: none !important;') {
						document.getElementById('gbarToggle').nextSibling.firstChild.setAttribute('style', 'display: none !important;');
						document.getElementById('gbarToggle').nextSibling.nextSibling.nextSibling.firstChild.setAttribute('style', 'display: none !important;');
					} else {
						document.getElementById('gbarToggle').nextSibling.firstChild.setAttribute('style', '');
						document.getElementById('gbarToggle').nextSibling.nextSibling.nextSibling.firstChild.setAttribute('style', '');
					}
				} else {
					if (document.getElementById('headerToggle').nextSibling.getAttribute('style') != 'display: none !important;')
						document.getElementById('headerToggle').nextSibling.setAttribute('style', 'display: none !important;');
					else document.getElementById('headerToggle').nextSibling.setAttribute('style', '');
				}
			}
			if (event.which == "96" && !event.ctrlKey && !event.metaKey && response.o.nav) {
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
		} 
		return true;
	}
	document.addEventListener("keypress", keypress, false);
});