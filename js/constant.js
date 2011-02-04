// ==UserScript==
// @name             Minimalist for Gmail
// @author           Ansel Santosa
// @namespace        http://chrome.google.com/webstore
// @description      Features that require constant checking
// ==/UserScript==

chrome.extension.sendRequest({elements: "o"}, function(response) {
	if (response.o.offline) {
		var contacts = null;

		function getContacts() {
			var tables = document.getElementsByTagName('table');
			for (var i = 0; i < tables.length; i++) {
				if (tables[i].getAttribute('class') == 'cf vH' && tables[i].getAttribute('role') == 'listbox' && tables[i].getElementsByTagName('tr').length > 0) {
						return tables[i];
				}
			}
			return null;
		}

		function check() {
			if (response.o.offline) {
				console.log("MINIMALIST GMAIL: Chat modified. Checking offline...");
				try {
					var buddies = contacts.getElementsByTagName("tr");
					if (buddies.length > 0) {
						contacts.removeEventListener("DOMSubtreeModified", check, false);
						for (var i = 0; i < buddies.length; i++) {
							var images = buddies[i].getElementsByTagName('img');
							if (images.length < 1) continue;
							if(images[0].alt == "Offline" || (response.o.sms && images[0].alt == "") || (response.o.idle && images[0].alt == "Idle"))
								buddies[i].style.display = 'none';
							else
								buddies[i].style.display = '';
						}
						contacts.addEventListener("DOMSubtreeModified", check, false);
					}
				} catch (e) { console.error(e)}
			}
		}

		function load() {
			if (getContacts() == contacts) return;
			if (contacts != null)
				contacts.removeEventListener("DOMSubtreeModified", check, false);
			if ((contacts = getContacts()) != null) {
				contacts.addEventListener("DOMSubtreeModified", check, false);
				check();
			}
		}

		window.addEventListener("DOMSubtreeModified", load, false);
	}
});