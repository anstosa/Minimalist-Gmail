// ==UserScript==
// @name             Minimalist Gmail
// @author           Ansel Santosa
// @namespace        http://chrome.google.com/webstore
// @description      Features that require constant checking
// ==/UserScript==

chrome.extension.sendRequest({elements: "o"}, function(response) {
	if (response.o.offline) {
		var interval = 1000;
		window.setTimeout(check, interval);
		function check() {
			console.log("MINIMALIST GMAIL: constant.js checking...");
			if (response.o.offline) {
				console.log("MINIMALIST GMAIL: checking offline...");
				try {
					var images = document.querySelectorAll("div.nH.pp.T0:nth-child(4) img, div.nH.pp.ps.TZ:nth-child(4) img");
						for (var i = 0; i < images.length; i++) {
							if (((images[i].getAttribute("alt") == "Offline") || (images[i].getAttribute("alt").length <= 0)) && (images[i].parentNode.parentNode.parentNode.parentNode.getAttribute("role") == "listbox"))
								images[i].parentNode.parentNode.parentNode.setAttribute("style", "display: none !important;");
						}
				} catch (e) { console.error(e)}
			}
			if (interval < 10000) interval += 2000;
			window.setTimeout(check, interval);
		}
	}
});