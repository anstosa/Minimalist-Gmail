// ==UserScript==
// @name             Minimalist Gmail
// @author           Ansel Santosa
// @namespace        http://chrome.google.com/webstore
// @description      Features that require no initialization
// ==/UserScript==

chrome.extension.sendRequest({elements: 'o'}, function(response) {
	var selected = null;
	function keypress(event) {
		if (response.o.high) {
			element = event.target;
			elementName = element.nodeName.toLowerCase();
			if (elementName == "input" || elementName == "textarea") return true;
			if ((String.fromCharCode(event.which)=="j" || String.fromCharCode(event.which)=="k") && !event.ctrlKey && !event.metaKey) {
				if (selected != null) selected.setAttribute("style","");
				var img = document.getElementsByTagName("img");
				for (x in img) {
					try {
						if ((img[x].getAttribute("style") == "visibility: visible; ")) {
							if (String.fromCharCode(event.which)=="j") {
								selected = img[x].parentNode.parentNode.nextSibling;
								if (response.o.highCLR != null && response.o.highCLR != "") {
									if (img[x].parentNode.parentNode.nextSibling.getAttribute("class").indexOf("zE") != -1)
										img[x].parentNode.parentNode.nextSibling.setAttribute("style", "background-color: " + response.o.highCLRu + " !important");
									else img[x].parentNode.parentNode.nextSibling.setAttribute("style", "background-color: " + response.o.highCLR + " !important");
								} else img[x].parentNode.parentNode.nextSibling.setAttribute("style", "background-color: #0099ff !important;");
							} else {
								selected = img[x].parentNode.parentNode.previousSibling;
								if (response.o.highCLR != null && response.o.highCLR != "") {
									if (img[x].parentNode.parentNode.previousSibling.getAttribute("class").indexOf("zE") != -1)
										img[x].parentNode.parentNode.previousSibling.setAttribute("style", "background-color: " + response.o.highCLRu + " !important");
									else img[x].parentNode.parentNode.previousSibling.setAttribute("style", "background-color: " + response.o.highCLR + " !important");
								} else img[x].parentNode.parentNode.previousSibling.setAttribute("style", "background-color: #0099ff !important;");
							}
						}
					} catch (err) {}
				}
			}
			if ((event.which == "47") && !event.ctrlKey && !event.metaKey && response.o.header) {
				if (response.o.gbarH) {
					document.getElementById('gbarToggle').nextSibling.firstChild.setAttribute('style', '');
					document.getElementById('gbarToggle').nextSibling.nextSibling.nextSibling.firstChild.setAttribute('style', '');
				} else document.getElementById('headerToggle').nextSibling.setAttribute('style', '');
			}
			if ((event.which == "92") && !event.ctrlKey && !event.metaKey && response.o.header) {
				if (response.o.gbarH) {
					document.getElementById('gbarToggle').nextSibling.firstChild.setAttribute('style', 'display: none !important;');
					document.getElementById('gbarToggle').nextSibling.nextSibling.nextSibling.firstChild.setAttribute('style', 'display: none !important;');
				} else document.getElementById('headerToggle').nextSibling.setAttribute('style', 'display: none !important;');
			}
		} 
		return true;
	}
	document.addEventListener("keypress", keypress, false);
});