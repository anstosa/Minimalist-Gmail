//---- BOOKMARKS ----//
function createBookmark(title, url, parentId, callback) {
    if (!parentId)
    {
		// Create the bookmark in the "Other bookmarks" folder, which should always be the
		// root folder's second child.
		chrome.bookmarks.getTree(function(bookmarks) {
			var folder = bookmarks[0].children[1];
			var bookmark = {
				parentId: folder.id,
				title: title,
				url: url
			};
			chrome.bookmarks.create(bookmark, callback);
		});
    }
    else {
		var bookmark = {
			parentId: parentId,
			title: title,
			url: url
		};
		chrome.bookmarks.create(bookmark, callback);
	}
}
//---- END BOOKMARKS ----//


//---- SYNC ----//
var syncBookmarkName = "minimalist-gmail_data";
var syncFolderName = "Minimalist Sync";
var syncBookmarkId = false;
var syncFolderId = false;
var syncUrl = "http://minimalist-gmail/?data=";
var isSyncing = false;

function syncLoad(saveIfNotFound, showNotification) {
	chrome.bookmarks.search(syncBookmarkName, function(bookmarks) {
        if (bookmarks.length != 0) {
			// TODO: handle duplicates
            var bookmark = bookmarks[0];
            syncBookmarkId = bookmark.id;
            syncFolderId = bookmark.parentId;
            var data = getSyncDataFromUrl(bookmark.url);
			localStorage["options"] = data;
			console.log("Sync: Loaded settings from bookmark.");
			
			if (showNotification) {
				var notification = webkitNotifications.createNotification('../img/icons/icon48.png', 'Settings updated!', 'Some of your Minimalist-Gmail settings were just synced from another computer. Refresh your GMail tab to see them!');
				notification.show();
				setTimeout(function(){notification.cancel();}, 10000);
			}
        } else if (saveIfNotFound) {
			console.log("Sync: Can't find bookmark to load settings from. Will create it instead.");
			syncSave();
		}
    });
}

function syncSave() {
	var data = localStorage["options"];
    var url = getSyncUrlFromData(data);
    if (!syncBookmarkId) {
		isSyncing = true;
        createBookmark(syncFolderName, null, null, function(folder) {
			createBookmark(syncBookmarkName, url, folder.id, function(bookmark) {
                syncBookmarkId = bookmark.id;
                syncFolderId = bookmark.parentId;
				isSyncing = false;
				console.log("Sync: created bookmark.");
            });
        });
    }
    else {
		isSyncing = true;
		chrome.bookmarks.update(syncBookmarkId, {url: url}, function(bookmark) {
			isSyncing = false;
			console.log("Sync: updated bookmark.");
		});
    }
}

function getSyncDataFromUrl(url) {
    if (!url || url == "")
        return null;
	return unescape(url.replace(syncUrl, ""));
}

function getSyncUrlFromData(data) {
    return syncUrl + escape(data);
}
//---- END SYNC ----//
