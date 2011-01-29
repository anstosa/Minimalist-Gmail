// ==UserScript==
// @name             Minimalist Gmail
// @author           Ansel Santosa
// @namespace        http://chrome.google.com/webstore
// @description      Features that require constant checking
// ==/UserScript==

chrome.extension.sendRequest({elements: "o"}, function(response) {
	function check() {
		if (response.o.offline) {
			try {
				var img = document.getElementsByTagName("img");
				for (x in img) {
						if (((img[x].getAttribute("alt") == "Offline") || (img[x].getAttribute("alt").length <= 0)) && (img[x].parentNode.parentNode.parentNode.parentNode.getAttribute("role") == "listbox"))
							img[x].parentNode.parentNode.parentNode.setAttribute("style", "display: none !important;");
				}
			} catch (err) {}
		}
	}
	var navcheck = setInterval(check, 1000);
});