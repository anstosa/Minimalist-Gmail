// ==UserScript==
// @name           Gmail Favicon Alerts 3
// @description    Alerts you to the status of your Gmail Inbox through distinct Favicons.
// @version        3.10
// @date           2010-06-12
// @author         Peter Wooley
// @namespace      http://peterwooley.com
// @include        https://mail.google.com/mail*
// @include        http://mail.google.com/mail*
// @include        https://mail.google.com/mail*
// @include        http://mail.google.com/a*
// @include        https://mail.google.com/a*
// ==/UserScript==

chrome.extension.sendRequest({elements: "o"}, function(response) {
	if (response.o.favicon) {

		if(!GM_getValue) {
			function GM_getValue(name, fallback) {
				return fallback;
			}
		}

		// Register GM Commands and Methods
		if(GM_registerMenuCommand) {
			GM_registerMenuCommand( "Gmail Favicon Alerts > Chat Alerts On", function() { setChat(true) } );
			GM_registerMenuCommand( "Gmail Favicon Alerts > Chat Alerts Off", function() { setChat(false) } );
			GM_registerMenuCommand( "Gmail Favicon Alerts > Unread Count On", function() { setUnreadCountDisplay(true) } );
			GM_registerMenuCommand( "Gmail Favicon Alerts > Unread Count Off", function() { setUnreadCountDisplay(false) } );
			function setChat(val) { GM_setValue('chatEnabled', val) };
			function setUnreadCountDisplay(val) { GM_setValue('unreadCountDisplay', val) };
		}

		var gfia_instance;
		var gfia_chat = GM_getValue('chatEnabled', true);

		if(window.frameElement && window.frameElement.id == "canvas_frame") {
			new GmailFavIconAlerts();
		}

		function GmailFavIconAlerts() {
			var self = this;
			this.construct = function() {				
				this.chat = this.getChat();
				this.chatting = false;
				this.head = window.frameElement.parentNode.parentNode.getElementsByTagName('head')[0];
				this.title = this.head.getElementsByTagName('title')[0];
				this.inboxText = 'Inbox';
				this.chatText = [
									{value:'\u2026', chars: 1},
									{value:'...', chars: 3}
								];
				this.timer;
				this.icons = {
					chat: 'data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAAAABMLAAATCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAABYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFxMRnxZSkS5AAAAFgAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAemtkuz4yLLs4KyeMAAAAFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFltLRf+3p6D/ZVZR/ywhHrsAAAAfAAAAFgAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAHzQpJbt9bWf/6dnS/+nZ0v9xYVz/Nysn/zQpJbsxJiOMAAAAHwAAAA8AAAAAAAAAAAAAAAAAAAAWPzMujEc5NP+Cc2z/6dnS/+nZ0v/p2dL/6dnS/+bWz/+mlY//eWhj/0c5NP8/My6MAAAAFgAAAAAAAAAHVEZAu5GBev/ZycL/6dnS/+nZ0v/p2dL/6dnS/+nZ0v/p2dL/5dXO/9XEvf/Csar/hnZw/1RFQLsAAAAPSj46VYZ3cf/r3Nb/69zW/+vc1v/r3Nb/69zW/+vc1v/r3Nb/69zW/+vc1v/fz8n/0L+5/9C/uf+RgHr/WkxHjG1dV//BtK7/7+Pd/+/k3//w5eD/8Obh//Hm4v/x5uL/8ebi//Dm4f/w5eD/6d3Y/9HBu//Rwbr/xrav/2xcVv9zZF//9Ozo//bw7f/48/H/+vb0//v49v/8+fj//Pr5//z5+P/7+Pb/+vb0//fy8P/Txb//0sS+/9LDvf9yY13/e25o/9zX1f/9/Pz//v39//7+/v///v7///////////////////7+//7+/v/28/L/1cnE/9XIw//Ty8f/eWpl/4N3cleupqP/////////////////////////////////////////////////7Ofl/9bKxf/18fD/qJ6b/4BzblcAAAAAjIF8sru1sv//////////////////////////////////////+Pb2//f19P/18vH/tq2q/4l9eLIAAAAAAAAAAAAAAACUiYWylImF/8C6uP/08/P//////////////////v79/+7s6v+6sq//kIWA/5CFgLIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACcko98nJKP/5ySj/+cko//m5GN/5mPi/+YjYn/mI2JfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAPv/AAD4/wAA+H8AAPAPAADAAwAAgAEAAIAAAAAAAAAAAAAAAAAAAACAAQAAgAEAAMADAAD4HwAA//8AAA==',
					read:	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEX////dSjfk4dLze1nu7N/g3crbz7voYkjkWEHXOCnx7+Pr6dvq59nub1Hn5NTNIxrEDgq/AADZsJre2sfYkX3aaFfYemfhnIf19Or0g2Pu0cHspI/se1y0DAnUVUnte2D7WLBQAAAAAXRSTlMAQObYZgAAAI5JREFUeF6NjzUSw1AUxB5+JjMF7n/L2JNJkc7qpK0WbrB9ydlahxWAedvXdQ2SCplXbWCZ+ZAgMdHia30Cuwfn9x7TPl3egLNZsnXLgd7PpjXImYbeOkSPPckZrCUiM6OfTBRpHThHpagZRx1EQtcBIhUdUikS9RdUU4znLOUK3iuldHkIEs8A3R83vn4A4ikIxKX+QDwAAAAASUVORK5CYII=',
					unread:	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEX////dSjfk4dLze1nu7N/g3crbz7voYkjkWEHXOCnx7+Pr6dvq59nub1Hn5NTNIxrEDgq/AADZsJre2sfYkX3aaFfYemfhnIf19Or0g2Pu0cHspI/se1y0DAnUVUnte2D7WLBQAAAAAXRSTlMAQObYZgAAAI5JREFUeF6NjzUSw1AUxB5+JjMF7n/L2JNJkc7qpK0WbrB9ydlahxWAedvXdQ2SCplXbWCZ+ZAgMdHia30Cuwfn9x7TPl3egLNZsnXLgd7PpjXImYbeOkSPPckZrCUiM6OfTBRpHThHpagZRx1EQtcBIhUdUikS9RdUU4znLOUK3iuldHkIEs8A3R83vn4A4ikIxKX+QDwAAAAASUVORK5CYII=',
				};
				this.pixelMaps = {
					icons: {
						'unread':
							[
								['','','','','','','','','','','','','','','',''],
								['','','','','','','','','','','','','','','',''],
								['','#f48363','#f48363','#f48363','#f48363','#f48363','#f48363','#f48363','#ee6f51','#ee6f51','#e86248','#e86248','#e45841','#dd4a37','#cd231a',''],
								['#f37b59','#f37b59','#f48363','#eed1c1','#f5f4ea','#f5f4ea','#f5f4ea','#f1efe3',	'#eeecdf','#eae7d9','#e7e4d4','#e4e1d2','#dbcfbb','#d45549','#cd231a','#c40e0a'],
								['#e86248','#f37b59','#f37b59','#f37b59','#eca48f','#f1efe3','#eeecdf','#ebe9db',	'#eae7d9','#e4e1d2','#e19c87','#d73829','#cd231a','#cd231a','#b40c09'],
								
								['#f37b59','#e45841','#ec7b5c','#f37b59','#ee6f51','#ed7b60','#eed1c1','#ebe9db',	'#eae7d9','#eed1c1','#da6857','#d73829','#cd231a','#cd231a','#b40c09','#c40e0a'],
								['#f37b59','#ee6f51','#dbcfbb','#e19c87','#ee6f51','#e86248','#e45841','#e19c87',	'#eca48f','#dd4a37','#d73829','#d73829','#d87a67','#dbcfbb','#c40e0a','#c40e0a'],
								['#ee6f51','#ee6f51','#e4e1d2','#dedac7','#d9b09a','#e86248','#e45841','#dd4a37',	'#dd4a37','#d73829','#dd4a37','#d9b09a','#e4e1d2','#eeecdf','#c40e0a','#c40e0a'],
								['#e86248','#e86248','#e4e1d2','#e4e1d2','#e4e1d2','#dbcfbb','#d87a67','#dd4a37',	'#d73829','#da6857','#dbcfbb','#ebe9db','#eeecdf','#eeecdf','#c40e0a','#bf0000'],
								['#e45841','#e45841','#e4e1d2','#e7e4d4','#e7e4d4','#e0ddca','#dbcfbb','#d8917d',	'#d8917d','#e0ddca','#dedac7','#eeecdf','#eeecdf','#f1efe3','#bf0000','#bf0000'],
								['#dd4a37','#dd4a37','#e4e1d2','#e7e4d4','#e0ddca','#dedac7','#eae7d9','#e7e4d4',	'#e7e4d4','#eeecdf','#ebe9db','#e0ddca','#eeecdf','#f1efe3','#bf0000','#bf0000'],
								['#dd4a37','#dd4a37','#e4e1d2','#e0ddca','#e0ddca','#eae7d9','#ebe9db','#ebe9db',	'#eeecdf','#eeecdf','#f1efe3','#eeecdf','#e7e4d4','#f1efe3','#bf0000','#bf0000'],
								['#d73829','#d73829','#e0ddca','#e4e1d2','#eae7d9','#eae7d9','#ebe9db','#eeecdf',	'#eeecdf','#f1efe3','#f1efe3','#f1efe3','#eeecdf','#ebe9db','#bf0000','#bf0000'],
								['','#bf0000','#bf0000','#bf0000','#bf0000','#bf0000','#bf0000','#bf0000','#bf0000','#bf0000','#bf0000','#bf0000','#bf0000','#bf0000','#bf0000',''],
								['','','','','','','','','','','','','','','',''],
								['','','','','','','','','','','','','','','','']
							]
						},
					numbers: [
						[
							[0,1,1,0],
							[1,0,0,1],
							[1,0,0,1],
							[1,0,0,1],
							[0,1,1,0]
						],
						[
							[0,1,0],
							[1,1,0],
							[0,1,0],
							[0,1,0],
							[1,1,1]
						],
						[
							[1,1,1,0],
							[0,0,0,1],
							[0,1,1,0],
							[1,0,0,0],
							[1,1,1,1]
						],
						[
							[1,1,1,0],
							[0,0,0,1],
							[0,1,1,0],
							[0,0,0,1],
							[1,1,1,0]
						],
						[
							[0,0,1,0],
							[0,1,1,0],
							[1,0,1,0],
							[1,1,1,1],
							[0,0,1,0]
						],
						[
							[1,1,1,1],
							[1,0,0,0],
							[1,1,1,0],
							[0,0,0,1],
							[1,1,1,0]
						],
						[
							[0,1,1,0],
							[1,0,0,0],
							[1,1,1,0],
							[1,0,0,1],
							[0,1,1,0]
						],
						[
							[1,1,1,1],
							[0,0,0,1],
							[0,0,1,0],
							[0,1,0,0],
							[0,1,0,0]
						],
						[
							[0,1,1,0],
							[1,0,0,1],
							[0,1,1,0],
							[1,0,0,1],
							[0,1,1,0]
						],
						[
							[0,1,1,0],
							[1,0,0,1],
							[0,1,1,1],
							[0,0,0,1],
							[0,1,1,0]
						],
					]
				};
				
				this.timer = setInterval(this.poll, 500);
				this.poll();
				
				return true;
			}
			
			this.drawUnreadCount = function(unread) {
				if(!self.textedCanvas) {
					self.textedCanvas = [];
				}
				
				if(!self.textedCanvas[unread]) {
					var iconCanvas = self.getUnreadCanvas();
					var textedCanvas = document.createElement('canvas');
					textedCanvas.height = textedCanvas.width = iconCanvas.width;
					var ctx = textedCanvas.getContext('2d');
					ctx.drawImage(iconCanvas, 0, 0);
					
					ctx.fillStyle = "#eeeeee";
					ctx.strokeStyle = "#888888";
					ctx.strokeWidth = 1;
					
					var count = unread.length;
					var bgHeight = self.pixelMaps.numbers[0].length;
					var bgWidth = 0;
					var padding = count > 2 ? 0 : 1;
					
					for(var index = 0; index < count; index++) {
						bgWidth += self.pixelMaps.numbers[unread[index]][0].length;
						if(index < count-1) {
							bgWidth += padding;
						}
					}
					bgWidth = bgWidth > textedCanvas.width-4 ? textedCanvas.width-4 : bgWidth;
					
					ctx.fillRect(textedCanvas.width-bgWidth-4,2,bgWidth+4,bgHeight+4);
					
					
					var digit;
					var digitsWidth = bgWidth;
					for(var index = 0; index < count; index++) {
						digit = unread[index];
						if (self.pixelMaps.numbers[digit]) {
							var map = self.pixelMaps.numbers[digit];
							var height = map.length;
							var width = map[0].length;
							
							
							ctx.fillStyle = "#000000";
							
							for (var y = 0; y < height; y++) {
								for (var x = 0; x < width; x++) {
									if(map[y][x]) {
										ctx.fillRect(14- digitsWidth + x, y+4, 1, 1);
									}
								}
							}
							
							digitsWidth -= width + padding;
						}
					}	
					
					ctx.strokeRect(textedCanvas.width-bgWidth-3.5,2.5,bgWidth+3,bgHeight+3);
					
					self.textedCanvas[unread] = textedCanvas;
				}
				
				return self.textedCanvas[unread];
			}
			this.getUnreadCanvas = function() {
				if(!self.unreadCanvas) {
					self.unreadCanvas = document.createElement('canvas');
					self.unreadCanvas.height = self.unreadCanvas.width = 16;
					
					var ctx = self.unreadCanvas.getContext('2d');
					
					for (var y = 0; y < self.unreadCanvas.width; y++) {
						for (var x = 0; x < self.unreadCanvas.height; x++) {
							if (self.pixelMaps.icons.unread[y][x]) {
								ctx.fillStyle = self.pixelMaps.icons.unread[y][x];
								ctx.fillRect(x, y, 1, 1);
							}
						}
					}
				}
				
				return self.unreadCanvas;
			}
			this.getChat = function() { return false || GM_getValue('chatEnabled', true); }
			this.getDebugging = function() { return false || GM_getValue('debuggingEnabled', false); }
			this.getSearchElement = function() {
				var element;
				var nav = document.body.getElementsByClassName('n0');
				
				if(nav) {
					var potential = nav[0];
					
					if(potential.className.indexOf('n0') !== -1) {
						element = potential;
					}
				}
				
				return element ? element: null;
			}
			this.newChat = function() {
				var title = self.title.innerHTML;
				for(var index in self.chatText) {
					var location = title.indexOf(self.chatText[index].value);
					if(self.chatText[index].chars + location == title.length) {
						return true;
					}
				}
				return false;
			}
			this.newMail = function() { return self.searchElement.textContent.match(/\((\d*)\)/); }
			this.getUnreadCountDisplay = function() { return GM_getValue('unreadCountDisplay', true); }
			this.getUnreadCount = function() {
				if(this.newMail()) {
					matches = self.searchElement.textContent.match(/\((\d*)\)/);
					return matches ? matches[1] : false;
				}
			}
			this.getUnreadCountIcon = function() {
				var unread = self.getUnreadCount();		
				if(this.getUnreadCountDisplay()) {
					return self.drawUnreadCount(unread).toDataURL('image/png');
				} else {
					return self.icons.unread;
				}
			}
			
			this.poll = function() {
				self.searchElement = self.getSearchElement();
				
				if(self.getChat() && self.newChat()) {
					return self.setIcon(self.icons.chat);
				}
					
				if(self.newMail())
					self.setIcon(self.getUnreadCountIcon());
				else
					self.setIcon(self.icons.read);
			}
			
			this.setIcon = function(icon) {
				var links = self.head.getElementsByTagName("link");
				for (var i = 0; i < links.length; i++)
					if ((links[i].rel == "shortcut icon" || links[i].rel=="icon") &&
					   links[i].href != icon)
						self.head.removeChild(links[i]);
					else if(links[i].href == icon)
						return;

				var newIcon = document.createElement("link");
				newIcon.type = "image/png";
				newIcon.rel = "shortcut icon";
				newIcon.href = icon;
				
				self.head.appendChild(newIcon);
				
				var shim = document.createElement('iframe');
				shim.width = shim.height = 0;
				document.body.appendChild(shim);
				shim.src = "icon";
				document.body.removeChild(shim);
			}
			
			this.toString = function() { return '[object GmailFavIconAlerts]'; }
			
			return this.construct();
		}
	}
});