// ==UserScript==
// @name             Minimalist for Gmail
// @author           Ansel Santosa
// @namespace        http://chrome.google.com/webstore
// @description      Stylesheet construction and injection
// ==/UserScript==

chrome.extension.sendRequest({elements: 'o'}, function(response) {
	var css = "";
	
	// css += "@import url(http://fonts.googleapis.com/css?family=Raleway:100)";
	// css += "::-webkit-scrollbar { width: 6px !important; background-color: #000; }\n";
	// css += "::-webkit-scrollbar-track-piece { background-color: rgba(0,0,0,.75); -webkit-border-radius: 2px; }\n";
	// css += "div.nH.qp[role = 'navigation'] { margin-bottom: 0px !important; }\n";
	// css += ".aC * { z-index: 999; }\n";
	// css += ".VP5otc-pzeoBf { position: fixed; top: 0; z-index: 99;}\n"; //[min = 'float']
	
	// GENERAL
		if (response.o.BTN) {
			css += ".J-Zh-I { color: " + response.o.BTNcolor + "; border: 1px solid " + response.o.BTNborder + "; background: -webkit-gradient(linear,0% 40%,0% 70%,from(" + response.o.BTNbottom + "),to(" + response.o.BTNtop + ")); }\n";
			css += ".J-Zh-I-JW { padding-left: 8px !important; }\n";
			css += ".J-Pm-I.J-Zh-I-JW { padding-left: 6px !important; }\n";
		}
		if (response.o.loader) {
			css += "#loading { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAK8CAMAAAD/Ke59AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAE5QTFRFHx8fMzMzMjIyNjY2MTExMDAwLi4uLy8vLS0tNTU1NDQ0Hh4eKysrHR0dLCwsKioqKCgoKSkpICAgJSUlJiYmJycnJCQkISEhIyMjIiIiHhf88QAAAR9JREFUeNrs1NtuwyAMBmCS5tSWcgiHwPu/6LwsEm2BhATSadJuflnflYWN0eVCKSJkHJFSVYUeD87Rv51s9Y9dr87qMw3jFOO+8W1jLGi3235rmrDdX0xKsPsZVlWFrH0ySmdrC1hdpxpEAev7b1O+qbA1TaZxOk2e8ah1IesWa31rd5sQYAjFTfmmPOt7Z8NQyBhzJmWydd26EfI5G4aQQSyG8YYpdchIyMhe0xqu6DgKkWUYZ5qUUYPLsBjEm1H6+wY/ajbOU0z7phcTopgx5gy2c8UgnE3TixlTwpRaN5j0umlhrWf6kEmZYMZsGrzkToNIMCEyzZioQVfZpkOmS5i1YNYeNKiiZkyCzV2FzIbMJttcnWDWtz8SXwIMAM8UwWqEpG2GAAAAAElFTkSuQmCC) repeat-x #222 !important; color: #fff;}\n";
			css += "#loading #stb { background-color: rgba(0,0,0,0); color: #fff; }\n";
			css += "#loading a { color: #fff; }\n";
			css += "#loading a:hover { color: #fff; text-decoration: none; }\n";
			css += "#loading .msg { font-family: 'Raleway', Helvetica, 'Trebuchet MS', sans-serif; font-size: 25px; font-weight: normal; color: #fff; text-shadow: 0 0 1px rgba(255,255,255,.5); }\n";
			css += "#loading .lpb { margin: 5px 0; padding: 2px; width: 500px; height: 25px; border: 1px solid #fff; }\n";
			css += "#loading #lpt { background: -webkit-gradient(linear, left top, right top, from(rgba(255,255,255,0)), to(rgba(255,255,255,1))) !important; }\n";
		}
		if (response.o.corners) {
			css += "div[id = ':rm'] { margin-top: 4px !important; }\n";
			css += "input[type = 'text'], textarea, div.Ar.Au { -webkit-border-radius: 5px; }\n";
		}
		if (response.o.trans) {
			css += "* { -webkit-transition-property: background-color, background-image, background-position, background-size, border-color, border-radius, border-width, box-shadow, color, font-size, font-weight, height, margin, opacity, width, visibility ; -webkit-transition-duration: .15s; -webkit-transition-timing-function: ease-out; }\n";
			css += "#gbz *, #gbg * { -webkit-transition-property: opacity; }\n";
			if (response.o.nav || response.o.navW)
				css += "* { -webkit-transition-property: height, background-color, border-color, color, opacity; }\n";
		}
		if (response.o.scroll)
			css += "html.cQ { overflow-y: auto !important; }\n";
	// GOOGLE BAR
		if (response.o.gbar)
			css += "#gbar, #gbz { display: none !important; }\n";
		if (response.o.gbarH) {
			css += "#gbx1, #gbx2, #gbz, #gbg { top: 10px !important; }\n";
			css += "#gbx3, #gbx4 { top: 12px !important; }\n";
			css += "#gbs { top: 42px !important; }";
			css += "#gbarToggle { background-color: rgba(0,0,0,0); height: 10px !important; cursor: pointer !important;}\n";
			css += "#gbarToggle:hover { background-color: rgba(0,0,0,.15); }\n";
		}
		if (response.o.gbarO) {
			css += "div[role='navigation'] div.nH, div[role='navigation'] #guser, div[role='navigation'] #gbg, div[role='navigation'] #gbar, div[role='navigation'] #gbz { opacity: 0; -webkit-transition-delay: .25s; }\n";
			css += "div.aC:hover div[role='navigation'] div.nH, div.aC:hover div[role='navigation'] #guser, div.aC:hover div[role='navigation'] #gbg, div.aC:hover div[role='navigation'] #gbar, div.aC:hover div[role='navigation'] #gbz { opacity: 1; }\n";
			css += ".cP > div:nth-child(2) > div:nth-child(2) > div > div:first-child:hover div[role='navigation'] div.nH, .cP > div:nth-child(2) > div:nth-child(2) > div > div:first-child:hover div[role='navigation'] #guser, .cP > div:nth-child(2) > div:nth-child(2) > div > div:first-child:hover div[role='navigation'] #gbg, .cP > div:nth-child(2) > div:nth-child(2) > div > div:first-child:hover div[role='navigation'] #gbar, .cP > div:nth-child(2) > div:nth-child(2) > div > div:first-child:hover div[role='navigation'] #gbz { opacity: 1; }\n"
		}
		if (response.o.gbarB)
			css += "div.nH.qp[role = 'navigation'], #gbx3, #gbx4 { background-image: none !important; background-color: rgba(255,255,255,0) !important; border: 0 !important; }\n";
	// HEADER
		if (response.o.header || response.o.gbarH) {
			css += "[min ~= 'hideH'], [min ~= 'hideH'] *, [min ~= 'hideG'], [min ~= 'hideG'] * { opacity: 0; margin: 0 !important; padding: 0 !important; height: 0 !important; overflow: hidden; }\n";
			css += "#headerToggle + .nH:not([min ~= 'hideH']) { height: 65px !important; }\n";
		}
		if (response.o.header && !response.o.gbarH) {
			css += "#headerToggle { background-color: rgba(0,0,0,0); height: 10px !important; cursor: pointer !important;}\n";
			css += "#headerToggle:hover { background-color: rgba(0,0,0,.15); }\n";
		}
		if (response.o.logo)
			css += "[id = ':rk'] { background-image: url(" + response.o.logoSRC + ") !important; }\n";
		if (response.o.logoH)
			css += "[style][id = ':rk'] { display: none !important; }\n";
		if (response.o.s_all)
			css += "table[role='search'] { display: none !important; }\n";
		if (response.o.s_mail)
			css += "table[role='search'] div[role='button']:nth-child(2), .table[role='search'] div[role='button']:nth-child(3) { display: none !important; }\n";
		if (response.o.s_web)
			css += "table[role='search'] div[role='button']:last-child { display: none !important; }\n";
		if (response.o.s_links)
			css += "table[role='search'] td:last-child { display: none !important; }\n";
		if (response.o.apps_manage)
			css += ".no nobr { display: none !important; }\n";
	// MAIN
		if (response.o.borders || response.o.simplify)
			css += "tr.yO td, tr.zE td { border: 0 !important; }\n";
		if (response.o.grabbers)
			css += "td.oZ-x3 { background: transparent !important; }\n";
		if (response.o.simplify) {
			css += "tr.zA > td:first-child > input, tr.zA > td:last-child > span, tr.zA > td:nth-child(5) { opacity: 0; }\n";
			css += "tr.zA[min ~= 'select'] > td:first-child input, tr.zA:hover > td:first-child input, tr.zA.x7 > td:first-child input { opacity: 1; }\n";
			css += "tr.zA[min ~= 'select'] > td:last-child > span, tr.x7 td:last-child > span, tr.zA:hover td:last-child > span { opacity: 1; }\n";
			css += "tr.zA[min ~= 'select'] > td:nth-child(5), tr.x7 > td:nth-child(5), tr.zA:hover > td:nth-child(5) { opacity: 1; }\n";
			css += "tr.zA[min ~= 'select'] > td img.xi, tr.zA[min ~= 'select'] > td > img.EqK8f, tr.zA:hover > td > img.EqK8f, tr.zA:hover > td > img.xi { visibility: visible !important; }\n";
			css += "tr.zA div.ar, tr.zA > td:nth-child(3) { opacity: .5; }\n";
			css += "tr.zA[min ~= 'select'] div.ar, tr.zA:hover div.ar, tr.zA.x7 div.ar, tr.zA:hover > td:nth-child(3), tr.zA[min ~= 'select'] > td:nth-child(3), tr.zA.x7 > td:nth-child(3) { opacity: 1; }\n";
		}
		if (response.o.starHigh) {
			css += "tr.yO[min ~= 'star'], tr.zE[min ~= 'star'] { background-color: " + response.o.starCLR + "; }\n";
			if (response.o.high)
				css += "tr.zE[min ~= 'star']:hover, tr.zE[min ~= 'star'][min ~= 'select'], tr.yO[min ~= 'star']:hover, tr.yO[min ~= 'star'][min ~= 'select'] { background-color: " + average(response.o.starCLR, response.o.highCLR) + " !important; }\n";
			if (response.o.uHigh)
				css += "tr.zE[min ~= 'star'] { background-color: " + average(response.o.starCLR, response.o.uCLR) + " !important; }\n";
		}
		if (response.o.uHigh) {
			css += "tr.zE { background-color: " + response.o.uCLR + " !important; }\n";
			if (response.o.high)
				css += "tr.zE:hover, tr.zE[min ~= 'select'] { background-color: " + average(response.o.uCLR, response.o.highCLR) + " !important; }\n";
		}
		if (response.o.high) {
			css += "table.F.cf.dqpCVe tr.MT:hover, tr.zA:hover, tr.zA[min ~= 'select']:not([min ~= 'star']) { background-color: " + response.o.highCLR + "; }\n";
			//css += "tr.zE:hover, tr.zE[min ~= 'select']:not([min ~= 'star']) { background-color: " + response.o.highCLRu + "; }\n";
		}
		if (response.o.zero)
			css += ".VP5otc-pzeoBf + div + div + div + div > div > div:nth-child(2) { display: none !important; }\n";
		if (response.o.stars || response.o.simplify)
			css += "img.EqK8f, img.xi { visibility: hidden !important; }\n";
		if (response.o.attach) {
			css += "table img[title $= 'ods'], table img[title $= 'xls'], table img[title $= 'XLS'], table img[title $= 'xlsx'], table img[title $= 'XLSX'] { width: 0px !important; height: 0px !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image: url(https://mail.google.com/mail/u/0/images/xls.gif) !important; }";
			css += "table img[title $= 'mp3'], table img[title $= 'MP3'], table img[title $= 'wma'], table img[title $= 'WMA'], table img[title $= 'aac'], table img[title $= 'AAC'], table img[title $= 'wav'], table img[title $= 'WAV'], table img[title $= 'flac'], table img[title $= 'FLAC'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image: url(https://mail.google.com/mail/u/0/images/sound.gif) !important; }";
			css += "table img[title $= 'odf'], table img[title $= 'odt'], table img[title $= 'doc'], table img[title $= 'DOC'], table img[title $= 'docx'], table img[title $= 'DOCX'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important;  background-image: url(https://mail.google.com/mail/u/0/images/doc.gif) !important; }";
			css += "table img[title $= 'html'], table img[title $= 'HTML'], table img[title $= 'js'], table img[title $= 'xml'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important;  background-image: url(https://mail.google.com/mail/u/0/images/html2.gif) !important; }";
			css += "table img[title $= 'zip'], table img[title $= 'ZIP'], table img[title $= 'rar'], table img[title $= 'RAR'], table img[title $= 'tgz'], table img[title $= 'TGZ'], table img[title $= 'tar'], table img[title $= 'TAR'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important;background-image: url(https://mail.google.com/mail/u/0/images/zip.gif) !important; }";
			css += "table img[title $= 'pdf'], table img[title $= 'PDF'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image: url(https://mail.google.com/mail/u/0/images/pdf.gif) !important; }";
			css += "table img[title $= 'odg'], td.yf img[title $= 'tif'], td.yf img[title $= 'tiff'], td.yf img[title $= 'jpeg'], td.yf img[title $= 'JPEG'], td.yf img[title $= 'TIF'], td.yf img[title $= 'TIFF'], td.yf img[title $= 'bmp'], td.yf img[title $= 'jpg'], td.yf img[title $= 'gif'], td.yf img[title $= 'png'], td.yf img[title $= 'BMP'], td.yf img[title $= 'JPG'], td.yf img[title $= 'GIF'], td.yf img[title $= 'PNG'], td.gH img[title $= 'tif'], td.gH img[title $= 'tiff'], td.gH img[title $= 'jpeg'], td.gH img[title $= 'JPEG'], td.gH img[title $= 'TIF'], td.gH img[title $= 'TIFF'], td.gH img[title $= 'bmp'], td.gH img[title $= 'jpg'], td.gH img[title $= 'gif'], td.gH img[title $= 'png'], td.gH img[title $= 'BMP'], td.gH img[title $= 'JPG'], td.gH img[title $= 'GIF'], td.gH img[title $= 'PNG'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAThQTFRF7vX/x938wNj78/n/AIM57PX/5vD6z8/PpN3/5/H9np2cwsXHqKmqysjIruL/3vL/9Pn/Aog1ipquvry99vr/AHo1qqOl4uLi1tXUpZ6gnKq71ez31evm8fr63+2mEZM7AIQ2ra+vtq2wwL6/vd+wteLr6PP5qd/+y8rKBIs78ff7o7DEvOLDnNjp/P3/2Oh+Paw+ubGzPaaAotz40dDQvLS32evQ2djYquD3V7SI3NzcHpdUM6NG4vH52+/iNaZCNKJr//Zrtbi5H5dDpKSke8qeyMfGkNLYAIA/AHw5J5xEPqpHWLhT9Pn8QahxsqqtAIRAkpGRveb9otzy7Pf/KZxZI5o5AHQ1r931eMRm7/n/2Ozar6epvOHuu9X81OX8zuH82+n+4e39097sxM7bUWuL////AAAA4YIzxgAAAGh0Uk5T/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAf7P1LAAAAyklEQVR42mJIT09PgQFtIIcBJJAGAckMUmgCIgxCqAJpQBEGcXMrCXZeXjdh7rRkIEhlEPfVUrOVlomN4NYTYGZlS2WQkI0K4bdzlONzYgbyk1IZ2M2i+YNU9XU4FAWA/ESggEqkq7oxB0cwDwNnUmJ8KoOJj4G3O5+uXygPiJ+QyqBhbxNmaeEgqOAC4jOmMih7OctbG7EEeHCB+EypDMKagiwsop6i4Vwgflwqg6mhkn+MmJgkVyCIDxQAOR1sPpgPFUhFAgABBgBoTkHNkTEKJQAAAABJRU5ErkJggg%3D%3D) !important; }";
			css += "table img[title $= 'odp'], table img[title $= 'ppt'], table img[title $= 'pps'], table img[title $= 'PPT'], table img[title $= 'PPS'], table img[title $= 'pptx'], table img[title $= 'ppsx'], table img[title $= 'PPTX'], table img[title $= 'pot'], table img[title $= 'PPSX'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important;background-position: top left !important;background-image: url(https://mail.google.com/mail/u/0/images/ppt.gif) !important;}";
			css += "table img[title $= 'mov'], table img[title $= 'MOV'], table img[title $= 'm4v'], table img[title $= 'mp4'], table img[title $= 'M4V'], table img[title $= 'MP4'], table img[title $= 'avi'], table img[title $= 'AVI'], table img[title $= 'wmv'], table img[title $= 'WMV'], table img[title $= 'amv'], table img[title $= 'AMV'], table img[title $= 'mpeg'], table img[title $= 'MPEG'], table img[title $= 'mkv'], table img[title $= 'MKV'], table img[title $= 'flv'], table img[title $= 'FLV'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important;background-position: top left !important;background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAKVQTFRFx9387vX/wNj77PX/b6j/8/n/5vD65/H9VZj/RI7//5WVO4n/9Pn/ipqu/56e9vr//0ND/21t/319o7DESZH/nKq7QIz//0hIDA0N/0xM/1FRFBQV/1VV/1RU/09PPYr//2Vl/1xc/4CADAwN/1hY/zs7/P3//0VFExMU/1JSNYX/R5D/u9X81OX8zuH82+n+4e39097sxM7bUWuLFxgY////AAAAaiuerwAAADd0Uk5T////////////////////////////////////////////////////////////////////////ABBZnYsAAACNSURBVHjaXI7ZEoIwDABTBW0B8b7v+xYwtP//aSYoTnT7tDuZNOCce5Z0SYCDfZOp/l9oqsZvsFQg/2IzAsHm5TtEfrWGYsInTxE8Ty+3cbxZTyLyhII2g1MQrBYzVU+TO4I2veu00z7Pd+wPBHMJw9GwtT+O2UEuZa/Ib9lvcoKdAp9e7C/8E1DwEmAADRcodUJir08AAAAASUVORK5CYII%3D) !important;}";
			css += "table img[title $= 'txt'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image: url(https://mail.google.com/mail/u/0/images/txt.gif) !important;}";
		}
		if (response.o.attachNew) {
			css += "table img[title $= 'ods'], table img[title $= 'xls'], table img[title $= 'XLS'], table img[title $= 'xlsx'], table img[title $= 'XLSX'] { width: 0px !important; height: 0px !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAwFBMVEX///9twmOXt5vV08ZivFXX1cc4n2BKnW3QzsE1k2AdlkxTsFceoEVjvV5rvVhCrkyMzWx5wVxauFbU7dLc2suo1nxemneSsJcmiFLS0MM3qErN5dU5p2BXs2jl4tKByGcqp0UAiDyv1YHg3s9Oq1KHyGzRz8JknnoAfT85l1ZMsk+cup8ZjUjk6+XMyr0BljrX1cljplhHs1Msp1Flrnr8/PsNgUcOkUVKnlYxhFXq9ukQnj2FxV/z8+9qp4Fzu4ZQkmYmAAAAAXRSTlMAQObYZgAAALxJREFUeF5lzEVuBFEQA9D6CM2Mw8wTZrj/reJWlFXeoiRbKtN/H2mUHeJZ8H69zuc7ojSNZHbo/oodRUOOuxnyb3ELL7Dfn5pXoMWiLNfj5bIoNBeby4VKmI4noI+Fai2FYZjd3X+DZ76AfN9fdcEDnMy2qipKkmQdjiYY0by11tIUshFy4erNUATgPWvt3FPjgFbQeZzzutnWQExKGTslWutqfAgixphvbpQQ5iiEInrL87zvP6E/4zz+ANk3GWWQfcMTAAAAAElFTkSuQmCC) !important; }";
			css += "table img[title $= 'mp3'], table img[title $= 'MP3'], table img[title $= 'wma'], table img[title $= 'WMA'], table img[title $= 'aac'], table img[title $= 'AAC'], table img[title $= 'wav'], table img[title $= 'WAV'], table img[title $= 'flac'], table img[title $= 'FLAC'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEX////JGBLBBwfFDwvPJRzVNCbNIhrDCgfKGhPIFRDXOCndSDTPKB7TMCP22NfHEg3bRDLMHRXjVD3BBAPaQC7hTzrfSzfSLSH88vHOJBq/AQHRKh7YOyvNKSP75+XNIBeaWx34AAAAAXRSTlMAQObYZgAAAHVJREFUeF5NywcKA0EIBVB1ai/bW5L73zIJLOt8EPTxhTvDEO6N4YKtg3mufu0byzKps3UQwqSiFSNDBRXRHA9UDzkiMcgEkBHxD+/fbFICx6sEpTGk9ZQfW/h71806QQ+80BVhRgaShsbDUWbRu9YEXYiI7y+jRgSXm47dBAAAAABJRU5ErkJggg==) !important; }";
			css += "table img[title $= 'odf'], table img[title $= 'odt'], table img[title $= 'txt'], table img[title $= 'doc'], table img[title $= 'DOC'], table img[title $= 'docx'], table img[title $= 'DOCX'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important;  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAwFBMVEX///9Jvv9qyP8Rq/4BjNAxtv8hsP+R1f97zf8stP8Fld4HmeMJneoEkNcWrf8Ne7QnW3wEktoKoO4ImuZaw/8/uv8esP8Glt8NpvgcmdhRmsUAicwCjtOJ0v8MpfYohrl0y/8LofCC0P8MpPRSwf8Bis4OqPsem9oRh8Qlsv9cos0Qgr06dJh5x/UweaNCu/+c2P8cmNYfnt45uf8ar/82t/8mTmcnVXK/5f8dZI0zoNkWe7K14f9Xwv9evvUXmtyLnD/iAAAAAXRSTlMAQObYZgAAAKlJREFUeF41ylOWBEEARNFE2bbRtsf731WnJv5enAsAUDUUQTi8gJhaa+jnKCun/6feF79TrN/U0zcX2u65g9e10w3iQYW3ieUEd0g80QRjee0sEBIPPF5pN8Fqu3U/ibjLukK6t0zDnl0ilMTBtMPUr8qSCIwX2ch7ZkfWjH1gmayZCL4ebWgarJkIP7yD4du0uUjtNrcribQQf5fLcpmf+agAkiRRLMAbyPoVvHcsEKMAAAAASUVORK5CYII%3D) !important; }";
			css += "table img[title $= 'html'], table img[title $= 'HTML'], table img[title $= 'js'], table img[title $= 'xml'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important;  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYBQTFRFOEtOrlhX2gAARa5RZpdqh9GR7u3tx7FPKKYw/+kwuI2K3st1R2mErrGpbqdy/u1z8cwT89M8d5d829za+QEAIaUq/+pP/tsm8fHx/dYNGFV7raN21lZTq6KEeLb09NddTmN6NLQ7/9kNsayabNdzi6aNyjIx/9sbFpYeJpwu08rK6wAA78whzdHNzs/O9tAQ/f39/9sQzbq60CUl/+IRNZdF7x4gioBu5clKjsHzm7uWdJpbkLyht0Qswk1N20RFNZQ9nJF55+fn3woKwMfA6cUaIDRI694zRcVMX9Jl4xAP4hERK386y71ye6CDLrE2IYDCTYO8fpuBdWthYVVZlGJRvWlsa5R31cFRjkQ98ywri2koRZ3sv8LDgL75yFJSO3CBGXayAIUJDIsUpp10ibmNOJjgqp5n40hNvYZ0Nm9KzSoqpbVVnBwqvTMz4sAlu7A7J580L1t0h417Ob1CL5XqMJPnN5juR2+lOZ3v1tbV3NfX9RoZadZvdNl9////1FKScAAAAIB0Uk5T/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wA4BUtnAAAA/ElEQVR42mKoBwE2LSMjLQkwkwGIJbjis42N1ey4JCACekL2zkxe3kxMznnVIAFhVpuMGhlGRpkobW01tnoGAz4VVi5GhcAKhTAzEZHMegaXkhIVK4U0ubhKntDIXFthBlVFRc/UojI5y5gEX/eCaGUGvkJ/D1aGxNLyAAZuEyUdaQYWTVF/FSEGKSk3czFJfVdpBlVNDQ7FOr+QYFl+JUmBfGUGPYdkDVHTYm5+MSDflb2KoT6oMMnHUZ5T3FBJ31VQ1oCh3omlMEueU91QUl9HMN0J5HRhIWZrHRN1cUGLFGGI59h4w1lyItiledmgvgUK6cXqCUO8DxBgAGnMP5299Ij8AAAAAElFTkSuQmCC) !important; }";
			css += "table img[title $= 'zip'], table img[title $= 'ZIP'], table img[title $= 'rar'], table img[title $= 'RAR'], table img[title $= 'tgz'], table img[title $= 'TGZ'], table img[title $= 'tar'], table img[title $= 'TAR'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important;background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEX////gTTnaQS+/AADrcVfqZkzXdmjOJBray7zYVkTVk4TjWkS/DQqnHRXvfGHWNynbppbXtqjLHBXp1Mfr5tjPMya0SDzXSDnTLSHh3s/pkHvFKSPyd1a6eG9nal6GiHWkF23gAAAAAXRSTlMAQObYZgAAAIhJREFUeF6NykcKQkEQhOEOk/PLwXT/W9oOgogbv139FPznIe7iE6B7h3IVqpwlxoibBFn6nFpwk9ntCKC01m3yiDSsEkZQSpX51DpGjxvVCjnndVhzlwQgopoN1eX1T4mBiPzc6r4E5y6JGaoIh7F2bE02wy5sOAZj3I17oM77bbGCAfgL/HgCqrEIzdJPFbQAAAAASUVORK5CYII=) !important; }";
			css += "table img[title $= 'pdf'], table img[title $= 'PDF'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image: url(https://mail.google.com/mail/u/0/images/pdf.gif) !important; }";
			css += "table img[title $= 'odg'], td.yf img[title $= 'tif'], td.yf img[title $= 'tiff'], td.yf img[title $= 'jpeg'], td.yf img[title $= 'JPEG'], td.yf img[title $= 'TIF'], td.yf img[title $= 'TIFF'], td.yf img[title $= 'bmp'], td.yf img[title $= 'jpg'], td.yf img[title $= 'gif'], td.yf img[title $= 'png'], td.yf img[title $= 'BMP'], td.yf img[title $= 'JPG'], td.yf img[title $= 'GIF'], td.yf img[title $= 'PNG'], td.gH img[title $= 'tif'], td.gH img[title $= 'tiff'], td.gH img[title $= 'jpeg'], td.gH img[title $= 'JPEG'], td.gH img[title $= 'TIF'], td.gH img[title $= 'TIFF'], td.gH img[title $= 'bmp'], td.gH img[title $= 'jpg'], td.gH img[title $= 'gif'], td.gH img[title $= 'png'], td.gH img[title $= 'BMP'], td.gH img[title $= 'JPG'], td.gH img[title $= 'GIF'], td.gH img[title $= 'PNG'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAwFBMVEX///8AiDwcokLy8eUBmTlCvP9Jvv96zf9zy/9syf+32ufz8+pDr0wAkjppvO2E0f9exP+L0v46rEpVwv9at+2f2f9Ov/+ExO3w7eInpkQyqkjH5vWAz/84uP8qqpF6we254faS1f+b2P88uf9RwP80t//u7N9kxv9Vv/vr6dve5uG43/ERnz5oxfh3yfYNl2CX1//i389Zw//e28wSoV7o5ddYvsQDiEm82N8cmkNOtnfl4tIJnDwVoWtKt5Y9tc6aIrEXAAAAAXRSTlMAQObYZgAAAKdJREFUeF5NzdWuAzEMBFAnWWZmLDNzL/z/XzWudtX6zUczGoBd69qFrKhTx48kESD8wGEkiUMIB23TLItvyHWWLDRN7SHUdTaZn5+3TQc5YwnC/rh+w8CN47q2LCsIZgi46tqy0s+WgH+/GonDEvDvAtgYw4Pf3wUDvIFgeFmWUlo5/n+1JeSKkKZ09XP6NU2TEPIGykEQ8EcwDA+N350fAcAGBrrGC6HBFvKj4FQ8AAAAAElFTkSuQmCC) !important; }";
			css += "table img[title $= 'odp'], table img[title $= 'ppt'], table img[title $= 'pps'], table img[title $= 'PPT'], table img[title $= 'PPS'], table img[title $= 'pptx'], table img[title $= 'ppsx'], table img[title $= 'PPTX'], table img[title $= 'pot'], table img[title $= 'PPSX'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important;background-position: top left !important;background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEX////aWwf+gwD8ZQHEVQP/mxz0YwL/zY3eXAb/r0f/oiv+27H/05rsYQP/fAD/dQD/qDn/wXH/tVX/u2P/cAD0cALubgT+iQDoXwSxSgb/x3/pbQTbWwf/awDQaQLjXQXM1JhSAAAAAXRSTlMAQObYZgAAAIlJREFUeF5lykUCQjEMhOFJvU/dhfvfkqTQDWT3/Rn8X1lW/ujHIXaF/bWVUlV+XR/VNO2kzWsDvHg/JZjdbAHHsSr1iG9nag59r5Ric9Cufl0YR2Yyhy0QhiE7DQgxtsyPeUDoukmYzANCUdzCbIK1WjOzCbCOxQzJFwDXzvO8LGc6CZD/d0DlG4N+DR+Rmb4UAAAAAElFTkSuQmCC) !important;}";
			css += "table img[title $= 'mov'], table img[title $= 'MOV'], table img[title $= 'm4v'], table img[title $= 'mp4'], table img[title $= 'M4V'], table img[title $= 'MP4'], table img[title $= 'avi'], table img[title $= 'AVI'], table img[title $= 'wmv'], table img[title $= 'WMV'], table img[title $= 'amv'], table img[title $= 'AMV'], table img[title $= 'mpeg'], table img[title $= 'MPEG'], table img[title $= 'mkv'], table img[title $= 'MKV'], table img[title $= 'flv'], table img[title $= 'FLV'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important;background-position: top left !important;background-image: url(data:image/gif;base64,R0lGODlhEAAQAMQfAMS35mtMwlItt5N70lw5vEUdsVUwuGNCvnJTxFsnpFg0ukwmtVUgoa2b3aCL2IZszWdGwGA+vU8otntfyXdax0sktEgfsm9QxKiV27Gg3lk1ukghs2k4qUQbsbOi3////yH5BAEAAB8ALAAAAAAQABAAAAWk4AdkwwCcDkSdAPI5ntcMDxYPR9DE1wR7mMfE5hkQIDtPIsFpLplOBvRCmUwolEsAciAoDJJKIXBBmLXciFcg2XQggXg8TdAYBAtL5wDpcw9qdmwbBQURh4CHdXdhehsaBJGRGl9sFXoWEgYKnF93lnoFC58CpWwSCxuhCwIaC6+oCxUbhB0WrAoaFrS0FoUdBRuauQofvG4dybTDxR/Oz9DRHyEAOw==) !important;}";
		}
		if (response.o.attachC) {
			css += "table img[title $= 'ods'], table img[title $= 'xls'], table img[title $= 'XLS'], table img[title $= 'xlsx'], table img[title $= 'XLSX'] { width: 0px !important; height: 0px !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image: url(" + response.o.ci_1 + ") !important; }";
			css += "table img[title $= 'mp3'], table img[title $= 'MP3'], table img[title $= 'wma'], table img[title $= 'WMA'], table img[title $= 'aac'], table img[title $= 'AAC'], table img[title $= 'wav'], table img[title $= 'WAV'], table img[title $= 'flac'], table img[title $= 'FLAC'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image: url(" + response.o.ci_2 + ") !important; }";
			css += "table img[title $= 'odf'], table img[title $= 'odt'], table img[title $= 'txt'], table img[title $= 'doc'], table img[title $= 'DOC'], table img[title $= 'docx'], table img[title $= 'DOCX'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important;  background-image: url(" + response.o.ci_3 + ") !important; }";
			css += "table img[title $= 'html'], table img[title $= 'HTML'], table img[title $= 'js'], table img[title $= 'xml'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important;  background-image: url(" + response.o.ci_4 + ") !important; }";
			css += "table img[title $= 'zip'], table img[title $= 'ZIP'], table img[title $= 'rar'], table img[title $= 'RAR'], table img[title $= 'tgz'], table img[title $= 'TGZ'], table img[title $= 'tar'], table img[title $= 'TAR'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important;background-image: url(" + response.o.ci_5 + ") !important; }";
			css += "table img[title $= 'pdf'], table img[title $= 'PDF'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image: url(" + response.o.ci_6 + ") !important; }";
			css += "table img[title $= 'odg'], td.yf img[title $= 'tif'], td.yf img[title $= 'tiff'], td.yf img[title $= 'jpeg'], td.yf img[title $= 'JPEG'], td.yf img[title $= 'TIF'], td.yf img[title $= 'TIFF'], td.yf img[title $= 'bmp'], td.yf img[title $= 'jpg'], td.yf img[title $= 'gif'], td.yf img[title $= 'png'], td.yf img[title $= 'BMP'], td.yf img[title $= 'JPG'], td.yf img[title $= 'GIF'], td.yf img[title $= 'PNG'], td.gH img[title $= 'tif'], td.gH img[title $= 'tiff'], td.gH img[title $= 'jpeg'], td.gH img[title $= 'JPEG'], td.gH img[title $= 'TIF'], td.gH img[title $= 'TIFF'], td.gH img[title $= 'bmp'], td.gH img[title $= 'jpg'], td.gH img[title $= 'gif'], td.gH img[title $= 'png'], td.gH img[title $= 'BMP'], td.gH img[title $= 'JPG'], td.gH img[title $= 'GIF'], td.gH img[title $= 'PNG'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image:url(" + response.o.ci_7 + ") !important; }";
			css += "table img[title $= 'odp'], table img[title $= 'ppt'], table img[title $= 'pps'], table img[title $= 'PPT'], table img[title $= 'PPS'], table img[title $= 'pptx'], table img[title $= 'ppsx'], table img[title $= 'PPTX'], table img[title $= 'pot'], table img[title $= 'PPSX'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important;background-position: top left !important;background-image: url(" + response.o.ci_8 + ") !important;}";
			css += "table img[title $= 'mov'], table img[title $= 'MOV'], table img[title $= 'm4v'], table img[title $= 'mp4'], table img[title $= 'M4V'], table img[title $= 'MP4'], table img[title $= 'avi'], table img[title $= 'AVI'], table img[title $= 'wmv'], table img[title $= 'WMV'], table img[title $= 'amv'], table img[title $= 'AMV'], table img[title $= 'mpeg'], table img[title $= 'MPEG'], table img[title $= 'mkv'], table img[title $= 'MKV'], table img[title $= 'flv'], table img[title $= 'FLV'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important;background-position: top left !important;background-image: url(" + response.o.ci_9 + ") !important;}";
		}
		if (response.o.t_fix) {
			try {
				css += ".VP5otc-pzeoBf.D.E[min ~= 'fix'], .iI.D.E[min ~= 'fix'] { position: fixed; top: 0; z-index: 9999; -webkit-box-shadow: 0 0 15px rgba(0,0,0,.65); width: " + (document.getElementsByClassName('cQ')[0].scrollWidth - response.o.navW - 11) + "px; }\n";
			} catch (e) {}
		}
		if (response.o.t_top)
			css += "div.VP5otc-pzeoBf.D.E { display: none !important; }\n";
		if (response.o.bottom)
			css += "div.VP5otc-U4m8q.D.E, div.iE.D.E { display: none !important; }\n";
		if (response.o.t_check_l) {
			css += "h1.ha span, h1.ha table { float: left; }\n";
			css += "div.J-J5-Ji:not([class *= Wn]) + div.J-M.AW { display: block !important; position: relative; overflow: hidden; margin: 0 0 -2px 0;}\n";
			css += "div.J-J5-Ji:not([class *= Wn]) + div.J-M.AW td { -webkit-box-shadow: 0 0 0 rgba(0,0,0,0) !important; background: transparent; padding: 0 !important; }\n";
			css += "div.J-J5-Ji:not([class *= Wn]) + div.J-M.AW td > div { display: block !important; float: left !important; padding: 3px 7px; }\n";
			css += "div.J-J5-Ji + div.J-M.AW { display: block !important; position: relative; overflow: hidden; margin: 0 0 -2px 0;}\n";
			css += "div.J-J5-Ji + div.J-M.AW > div { -webkit-box-shadow: 0 0 0 rgba(0,0,0,0) !important; background: transparent; padding: 0 !important; }\n";
			css += "div.J-J5-Ji + div.J-M.AW > div > div { display: block !important; float: left !important; padding: 3px 7px; }\n";
		}
		if (response.o.t_check || response.o.t_check_l)
			css += "[class=\"VP5otc-HT6HAf J-J5-Ji\"]:nth-child(1) { display: none !important; }\n";
		if (response.o.t_arch)
			css += "[class=\"VP5otc-HT6HAf J-J5-Ji\"]:nth-child(2) { display: none !important; }\n";
		if (response.o.t_move) {
			if (response.o.pi)
				css += "[class=\"VP5otc-HT6HAf J-J5-Ji\"]:nth-child(4) { display: none !important; }\n";
			else css += "[class=\"VP5otc-HT6HAf J-J5-Ji\"]:nth-child(3) { display: none !important; }\n";
		}
		if (response.o.t_actions) {
			if (response.o.pi)
				css += "[class=\"VP5otc-HT6HAf J-J5-Ji\"]:nth-child(5) { display: none !important; }\n";
			else css += "[class=\"VP5otc-HT6HAf J-J5-Ji\"]:nth-child(4) { display: none !important; }\n";
		}
		if (response.o.t_refresh) {
			if (response.o.pi)
				css += "[class=\"J-J5-Ji\"]:nth-child(6) { display: none !important; }\n";
			else css += "[class=\"J-J5-Ji\"]:nth-child(5) { display: none !important; }\n";
		}
		if (response.o.reply)
			css += "textarea.ir { display: none !important; }";
		if (response.o.zads)
			css += ".TC[colspan = '3'] { display: none !important; }\n";
		if (response.o.ads) {
			css += "h1.ha { margin-right: 200px !important }\n";
			css += "table.iY > tr > td:first-child + td + td > div { width: 0 !important; position: relative !important; }\n";
			css += "table.iY > tr > td:first-child + td + td > div > div { position: absolute !important; right: 15px !important; top: 10px !important}\n";
			css += "table.iY > tr > td:first-child + td + td > div > div u { display: none !important; }\n";
			css += "table.iY > tr > td:first-child + td + td > div > div > div:nth-child(3) > div:first-child > div:last-child { display: none !important; }\n";
			css += "table.iY > tr > td:first-child + td + td > div > div > div:nth-child(3) > div:first-child > div:first-child { display: none !important; }\n";
			/*css += "table.iY > tr > td:first-child + td + td > div > div > div:nth-child(3) > div:first-child { font-size: .75em !important; position: absolute; right: 150px !important; top: -30px !important; width: 200px !important; height: 0 !important; display: block !important; }\n";
			css += "table.iY > tr > td:first-child + td + td > div > div > div:nth-child(3) > div:first-child * { border: 0 !important; }\n";
			css += "table.iY > tr > td:first-child + td + td > div > div > div:nth-child(3) > div:first-child img { display: none !important; }\n";*/
			// css += "table.iY div.hj { width: auto !important; }\n";
			css += "table.iY div.hj div.hk { display: inline !important; padding-right: 5px !important;}"
			css += ".u8 { display: none !important; }\n";
			css += ".u5 { width: 0px !important; }\n";
			// css += "table[class=\"T1HY1 nH iY\"] { width: 100% !important;}\n"
			css += "div[class=\"ip iq\"] { margin-right: 13px !important;}\n"
			css += "textarea.ir { width: 100% !important; }";
		}
		if (response.o.bads)
			css += "div.nH.MC, div.z0DeRc { display: none !important; }\n";
	// NAVIGATION
		if (response.o.nav) {
			css += "#navToggle { background-color: rgba(0,0,0,0); width: 10px !important; height: 300px !important; float: left !important; cursor: pointer !important; }\n";
			css += "#navToggle:hover { background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,.2)), to(rgba(0,0,0,0))); }\n";
		}
		if (response.o.navF) {
			if (response.o.nav)
				css += ".cP > div:nth-child(2) > div:nth-child(2)> div > div:nth-child(2) > div:first-child > div:nth-child(3) { z-index: 9998 !important; }\n";
			css += ".cP > div:nth-child(2) > div:nth-child(2)> div > div:nth-child(2) > div:first-child > div:nth-child(2) { z-index: 9998 !important; }\n";
			if (response.o.nav)
				css += ".cP > div:nth-child(2) > div:nth-child(2)> div > div:nth-child(2) > div:first-child > div:nth-child(2)[min ~= 'fix'] { position: fixed; top: 0; left: 10px; }\n";
			css += ".cP > div:nth-child(2) > div:nth-child(2)> div > div:nth-child(2) > div:first-child > div:first-child[min ~= 'fix'] { position: fixed; top: 0; }\n";
			if (response.o.navWC) {
				if (response.o.nav) {
					css += ".cP > div:nth-child(2) > div:nth-child(2)> div > div:nth-child(2) > div:first-child > div:nth-child(3)[min ~= 'fix']:not([min ~= 'hideN']) { margin-left: " + (parseInt(response.o.navW) + 10) + "px; }\n";
					css += ".cP > div:nth-child(2) > div:nth-child(2)> div > div:nth-child(2) > div:first-child > div:nth-child(3)[min ~= 'fix'][min ~= 'hideN'] { margin-left: 10px; }\n";
				} else css += ".cP > div:nth-child(2) > div:nth-child(2)> div > div:nth-child(2) > div:first-child > div:nth-child(2)[min ~= 'fix']:not([min ~= 'hideN']) { margin-left: " + (parseInt(response.o.navW) + 10) + "px; }\n";
			} else {
				if (response.o.nav) {
					css += ".cP > div:nth-child(2) > div:nth-child(2)> div > div:nth-child(2) > div:first-child > div:nth-child(3)[min ~= 'fix']:not([min ~= 'hideN']) { margin-left: 182px; }\n";
					css += ".cP > div:nth-child(2) > div:nth-child(2)> div > div:nth-child(2) > div:first-child > div:nth-child(3)[min ~= 'fix'][min ~= 'hideN'] { margin-left: 10px; }\n";
				} else css += ".cP > div:nth-child(2) > div:nth-child(2)> div > div:nth-child(2) > div:first-child > div:nth-child(2)[min ~= 'fix']:not([min ~= 'hideN']) { margin-left: 172px; }\n";
			}
		}
		if (response.o.hr) {
			css += ".T4 { border-bottom: 0 !important; }\n";
			css += ".T0, .TZ { border-top: 0 !important; }\n";
		}
		if (response.o.top)
			css += "div.CX.pp, div.T4.pp { display: none !important; }\n";
		if (response.o.mail)
			css += "div.CX.pp div:nth-child(1) { display: none !important; }\n";
		if (response.o.contacts)
			css += "div.CX.pp div:nth-child(2) { display: none !important; }\n";
		if (response.o.tasks)
			css += "div.T4.pp div { display: none !important; }\n";
		if (response.o.middle) {
			css += "div.T4.pp + div.pp[style] { display: none !important; }\n";
			css += "div.CX.pp + div.T4.pp { border-bottom: none !important; }\n";
		}
		if (response.o.compose)
			css += "div.z0 { display: none !important; }\n";
		/* if (response.o.inboxH)
			css += "div[role = 'navigation'] div.TO:first-child { display: none; }\n"; */
		if (response.o.spam) {
			css += "div.TO a[href$='#spam'] { visibility: hidden; }\n";
			css += "div.TO a[href$='#spam']:before { content: 'Spam'; visibility: visible; font-weight: 400; }\n";
		}
		if (response.o.drafts) {
			css += "div.TO a[href$='#drafts'] { visibility: hidden; }\n";
			css += "div.TO a[href$='#drafts']:before { content: 'Drafts'; visibility: visible; font-weight: 400; }\n";
		}
		if (response.o.buzz) {
			css += "div.TO a[href$='#buzz'] { visibility: hidden; }\n";
			css += "div.TO a[href$='#buzz']:before { content: 'Buzz'; visibility: visible; }\n";
		}
		if (response.o.icons)
			css += "img.Xo, img.pW, img.pH-CD, img.pV, div.u5 { display: none !important; }\n";
		if (response.o.moreC) {
			css += "div[role = 'navigation'] + div > span > span.CJ { visibility: hidden; }\n";
			css += "div[role = 'navigation'] + div > span > span.CJ:before { content: 'More'; visibility: visible; font-weight: 400; }\n";
		}
		if (response.o.more)
			css += "div.n6 { display: none !important; }\n";
		if (response.o.invites)
			css += "div.pY { display: none !important; } \n";
	// CHAT
		if (response.o.chat)
			css += "div.pp.T0:nth-child(4), div.pp.ps.TZ:nth-child(4) { display: none !important; } \n";
		if (response.o.c_search)
			css += "input[class = 'dI dG'] { display: none !important; } \n";
		if (response.o.c_set) {
			css += "div.pp.T0 div.pt div.uk > div:nth-child(3) { display: none !important; }\n";
			css += "div.pp.T0 div.pt div.uk { margin-bottom: 10px !important; }\n";
		}
		if (response.o.c_aim) {
			css += "div.ux + hr + div.ux[type = 'ai'] { display: none !important; }\n";
			css += "hr + div.ux[type = 'ai'] + hr { display: none !important; }\n";
		}
		if (response.o.c_invisible){
			css += "div.ul[role = 'alert'] { display: none; }\n";
		}
		if (response.o.status)
			css += "table.vH tr.vm { display: none !important; }\n";
	// FOOTER
		if (response.o.f_tips)
			css += "div.nH.l2.ov div:nth-child(3) { display: none !important; }\n";
		if (response.o.f_options)
			css += "div.nH.l2.ov div:nth-child(6) { display: none !important; }\n";
		if (response.o.f_legal)
			css += "div.nH.l2.ov div:nth-child(7) { display: none !important; }\n";
		if (response.o.f_s_classic)
			css += "div.md span.mj { display: none !important; }\n";
		if (response.o.f_s_label)
			css += "div.nH.l2.ov div:nth-child(4) td:nth-child(1) { display: none !important; }\n";
		if (response.o.f_s_graphic)
			css += "div.nH.l2.ov div:nth-child(4) td:nth-child(2) { display: none !important; }\n";
		if (response.o.f_s_verbose)
			css += "div.nH.l2.ov div:nth-child(4) td:nth-child(3) .mh { display: none !important; }\n";
		if (response.o.f_s_menu)
			css += "div.nH.l2.ov div:nth-child(4) td:nth-child(3) .mm { display: none !important; }\n";
		if (response.o.f_activity_move) {
			if (response.o.gbar) 
				css += "div.nH.l2.ov div:nth-child(5) { z-index: 99999 !important; position: absolute; top: -6px; left: 5px; opacity: .35; }\n";
			else css += "div.nH.l2.ov div:nth-child(5) { z-index: 99999 !important; position: absolute; top: -6px; left: 30%; right: 30%; opacity: .35; }\n";
			css += "div.nH.l2.ov div:nth-child(5):hover { opacity: 1; }\n";
		}
		if (response.o.f_activity_hide)
			css += "div.nH.l2.ov div:nth-child(5) { display: none !important; }\n";
	// CUSTOM
		if (response.o.customCSS)
			css += response.o.customCSSval;

	//---- INJECT CSS ----//
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node);
	}
	//---- END INJECT CSS ----//
	
	//---- HELPER METHODS ----//
	function HexToR(h) { return parseInt((cutHex(h)).substring(0,2),16) }
	function HexToG(h) { return parseInt((cutHex(h)).substring(2,4),16) }
	function HexToB(h) { return parseInt((cutHex(h)).substring(4,6),16) }
	function cutHex(h) { return (h.charAt(0) == "#") ? h.substring(1,7) : h }
	function average(one, two) {
		var r = (HexToR(one) + HexToR(two)) / 2;
		var g = (HexToG(one) + HexToG(two)) / 2;
		var b = (HexToB(one) + HexToB(two)) / 2;
		return "rgb(" + Math.round(r) + "," + Math.round(g) + "," + Math.round(b) + ")";
	}
	//---- HELPER METHODS ----//
});