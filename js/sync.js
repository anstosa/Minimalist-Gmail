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

function syncLoad(isInit) {
	chrome.bookmarks.search(syncBookmarkName, function(bookmarks) {
        if (bookmarks.length != 0) {
			// TODO: handle duplicates
            var bookmark = bookmarks[0];
            syncBookmarkId = bookmark.id;
            syncFolderId = bookmark.parentId;
            var data = getSyncDataFromUrl(bookmark.url);
			localStorage["options"] = data;
			
			if (!isInit) {
				var notification = webkitNotifications.createNotification(null, 'Settings updated!', 'Some settings were just synced from another computer. Please refresh your GMail tab.');
				notification.show();
				setTimeout(function(){notification.cancel();}, 10000);
			}
        } else if (isInit) {
			syncSave();
		}
    });
}

function syncSave() {
	var notification = webkitNotifications.createNotification(null, 'Minimalist-GMail', 'Saving...');
	notification.show();
	setTimeout(function(){notification.cancel();}, 2000);
	
	var data = localStorage["options"];
    var url = getSyncUrlFromData(data);
    if (!syncBookmarkId) {
		alert("No bookmark:"+syncBookmarkId);
		isSyncing = true;
        createBookmark(syncFolderName, null, null, function(folder) {
			createBookmark(syncBookmarkName, url, folder.id, function(bookmark) {
                syncBookmarkId = bookmark.id;
                syncFolderId = bookmark.parentId;
				isSyncing = false;
            });
        });
    }
    else {
		alert("Saving to existing:"+syncBookmarkId);
		isSyncing = true;
		chrome.bookmarks.update(syncBookmarkId, {url: url}, function(bookmark) {
			isSyncing = false;
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
