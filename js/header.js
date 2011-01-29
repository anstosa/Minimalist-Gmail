// ==UserScript==
// @name             Minimalist Gmail
// @author           Ansel Santosa
// @namespace        http://chrome.google.com/webstore
// @description      Handles header edits
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
								if (response.o.highCLR != null && response.o.highCLR != "")
									img[x].parentNode.parentNode.nextSibling.setAttribute("style", "background-color: " + response.o.highCLR + " !important");
								else img[x].parentNode.parentNode.nextSibling.setAttribute("style", "background-color: #0099ff !important;");
							} else {
								selected = img[x].parentNode.parentNode.previousSibling;
								if (response.o.highCLR != null && response.o.highCLR != "")
									img[x].parentNode.parentNode.previousSibling.setAttribute("style", "background-color: " + response.o.highCLR + " !important");
								else img[x].parentNode.parentNode.previousSibling.setAttribute("style", "background-color: #0099ff !important;");
							}
						}
					} catch (err) {}
				}
			}
		} 
		return true;
	}
	document.addEventListener("keypress", keypress, false);
});