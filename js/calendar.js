// ==UserScript==
// @name             Ansel's Google Calendar tweaks
// @author           Ansel Santosa
// @date             11/03/2010
// @namespace        Google Calendar
// @include          http://google.com/calendar/*
// @include          https://google.com/calendar/*
// @include          http://*.google.com/calendar/*
// @include          https://*.google.com/calendar/*
// ==/UserScript==

chrome.extension.sendRequest({elements: 'e'}, function(response) {
  if(response.e) {
	  try
	  {
		// Create array of hide targets
		var hide = new Array();
		hide[0] = "#gbar";        		// Google universal nav bar
		hide[1] = "#srreg span";  		// Search sublink
		hide[2] = "#dp_0";        		// Sidebar - Calendar
		hide[3] = "#topRightNavigation";// Top toolbar - Right section
		hide[4] = "#sidebar";      		// Sidebar - Header
		// Fencepost for hide
		var css = hide[0];
		// Assemble targets for hide
		for (i = 1; i < hide.length; i++)
		{
		  css += ", " + hide[i];
		}
		// Add attributes for hide
		css += " {display: none !important;}";
		// Header shrink
		css += "td.logoparent.logoparent-nondasher {height: 0px !important;}";
		css += "#tc_top {padding-left: 180px;}";
		// Sidebar
		css += "#mainnav {margin-left: 180px;}";
		css += ".nb_0 {border-top: 0;}";
		css += "div.nb_0.nb_0_last {border-top: 2px solid #BCF !important;}";
		// Shade weekends
		css += ".tg-weekend {background-color: #f1f1f1;}";
		// Insert Stylesheet
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