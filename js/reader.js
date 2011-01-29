// ==UserScript==
// @name             Ansel's Google Reader tweaks
// @author           Ansel Santosa
// @date             11/03/2010
// @namespace        Google Reader
// @include          http://google.com/reader/*
// @include          https://google.com/reader/*
// @include          http://*.google.com/reader/*
// @include          https://*.google.com/reader/*
// ==/UserScript==

chrome.extension.sendRequest({elements: 'e'}, function(response) {
  if(response.e) {
	  try
	  {
		// Create array of hide targets
		var hide = new Array();
		hide[0] = "#gbar";							// Google universal nav bar
		hide[1] = "#lhn-add-subscription-section";  // Sidebar - Add Subscription
		hide[2] = "#mark-all-as-read-split-button";	// Top Toolbar - Mark all as read
		hide[3] = "#viewer-refresh";		// Top Toolbar - Refresh
		// Fencepost for hide
		var css = hide[0];
		// Assemble targets for hide
		for (i = 1; i < hide.length; i++)
		{
		  css += ", " + hide[i];
		}
		// Add attributes for hide
		css += " {display: none !important;}";
		// Smaller header
		css += "#chrome-header {height: 21px !important; padding: 2px 10px 0px 10px;}";
		css += "#chrome-title {font-size: 13px; line-height: 13px; margin: 2px 0 0 0;}";
		css += "#chrome-view-links {font-size: 13px; line-height: 13px !important; margin: -7px 0 0 0;}";
		// Toolbar
		css += "#viewer-top-controls {padding: 1px 0px !important;}";
		// Shrink side
		css += "#nav {width: 230px !important;}";
		css += "#friends-tree {padding: 0 0 1px 0 !important;}";
		// Align main
		css += "#chrome {margin-left: 230px;}";
		css += "#logo {background: url('http://www.google.com/reader/ui/537640976-reader-logo-en.gif?hl=en') no-repeat !important;}"
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