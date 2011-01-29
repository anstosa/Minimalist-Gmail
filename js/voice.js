// ==UserScript==
// @name             Ansel's Google Voice tweaks
// @author           Ansel Santosa
// @date             11/03/2010
// @namespace        Google Voice
// @include          http://google.com/voice/*
// @include          https://google.com/voice/*
// @include          http://*.google.com/voice/*
// @include          https://*.google.com/voice/*
// ==/UserScript==

chrome.extension.sendRequest({elements: 'e'}, function(response) {
	if(response.e) {
	  try
	  {
		// Create array of hide targets
		var hide = new Array();
		hide[0] = "#gbar";						// Google universal nav bar
		hide[1] = "#gc-sidebar-invite-header";  // Sidebar - Invite
		hide[2] = ".gc-footer-inbox";			// Inbox - Footer
		hide[3] = "#gc-inbox-select";			// Top Toolbar - Select
		hide[4] = "#gc-inbox-archive";			// Top Toolbar - Archive
		hide[5] = "#gc-inbox-more-actions";		// Top Toolbar - More Actions
		hide[6] = "#gc-inbox-allunread";		// Top Toolbar - Show
		hide[7] = "#gc-help-balance";			// Sidebar - Credit - Help icon
		hide[8] = "[id=\":65\"]";	// Sidebar - Starred
		hide[9] = "[id=\":66\"]";	// Sidebar - Spam
		hide[10] = "[id=\":67\"]";	// Sidebar - Trash
		// Fencepost for hide
		var css = hide[0];
		// Assemble targets for hide
		for (i = 1; i < hide.length; i++)
		{
		  css += ", " + hide[i];
		}
		// Add attributes for hide
		css += " {display: none !important;}";
		// Move number
		css += "#gc-header-did-display {position: absolute !important; top: 4px !important; left: 10px !important;}";
		// Font
		//css += "body, .gc-message-sms-actions, .gc-simple-menu, .gc-message-list, .gc-message-sms-row, .gc-message-tbl-metadata, .gc-message-sms-show, .gc-message-sms-text, .goog-menuitem-content {font-family: \"Helvetica Neue LT\", sans-serif !important;}";
		// Go gray
		//css += ".gc-inbox-sidebar-header, .gc-inbox-view-header, .goog-splitpane-handle {background-color:#C7CACC;}";
		//css += ".gc-message-sms-text {color:#333 !important;}";
		//css += ".gc-message-sms-from, .gc-under gc-message-name-link {color:#222 !important;}";
		//css += "a, .gc-control {color:#333 !important;}";
		// Add stylesheet
		var heads = document.getElementsByTagName("head");
		if (heads.length > 0) {
		  var node = document.createElement("style");
		  node.type = "text/css";
		  var text = document.createTextNode(css);
		  node.appendChild(text);
		  heads[0].appendChild(node);
		}    
	  }
	  catch (eErr) 
	  {
		alert ("Oh noes! Error: " + eErr + "\n Tell Ansel to fix it...");
	  }
	  return;
	}
});