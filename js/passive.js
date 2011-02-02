// ==UserScript==
// @name             Minimalist for Gmail
// @author           Ansel Santosa
// @namespace        http://chrome.google.com/webstore
// @description      Features that respond to keypress
// ==/UserScript==

chrome.extension.sendRequest({elements: 'o'}, function(response) {
	var previous = null;
	var selected = null;
	var g = false;
	
	function keypress(event) {
		if (response.o.high) {
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
			/* if (g && (String.fromCharCode(event.which) == "i" || String.fromCharCode(event.which) == "s" || String.fromCharCode(event.which) == "t" || String.fromCharCode(event.which) == "d" || String.fromCharCode(event.which) == "a" || String.fromCharCode(event.which) == "c" || String.fromCharCode(event.which) == "b")) {
				previous = null;
				selected = null;
			} */
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
			if (response.o.header && (event.which == "47") && !event.ctrlKey && !event.metaKey) {
				if (response.o.gbarH) {
					document.getElementById('gbarToggle').nextSibling.firstChild.setAttribute('style', '');
					document.getElementById('gbarToggle').nextSibling.nextSibling.nextSibling.firstChild.setAttribute('style', '');
				} else document.getElementById('headerToggle').nextSibling.setAttribute('style', '');
			}
			// [ \ ]
			if ((response.o.header || response.o.gbarH) && (event.which == "92" || (String.fromCharCode(event.which) == "l" && g)) && !event.ctrlKey && !event.metaKey) {
				if (response.o.gbarH) {
					if (document.getElementById('gbarToggle').nextSibling.firstChild.getAttribute('style') != 'display: none !important;') {
						document.getElementById('gbarToggle').nextSibling.firstChild.setAttribute('style', 'display: none !important;');
						//document.getElementById('gbarToggle').nextSibling.nextSibling.nextSibling.firstChild.setAttribute('style', 'display: none !important;');
					} else {
						document.getElementById('gbarToggle').nextSibling.firstChild.setAttribute('style', '');
						//document.getElementById('gbarToggle').nextSibling.nextSibling.nextSibling.firstChild.setAttribute('style', '');
					}
				} else {
					if (document.getElementById('headerToggle').nextSibling.getAttribute('style') != 'display: none !important;')
						document.getElementById('headerToggle').nextSibling.setAttribute('style', 'display: none !important;');
					else document.getElementById('headerToggle').nextSibling.setAttribute('style', '');
				}
			}
			// [ ` ] tilde key
			if (response.o.nav && event.which == "96" && !event.ctrlKey && !event.metaKey) {
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
	
	//---- HELPER METHODS ----//
	function minimalist(element, remove, minClass) {
		var classes = new Array();
		try { classes = element.getAttribute("min").split(" "); } catch(e) {}
		if (remove)
			classes = removeItems(classes, minClass);
		else classes.push(minClass);
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
	//---- END HELPER METHODS ----//
	
	document.addEventListener("keypress", keypress, false);
});