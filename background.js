chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.captureVisibleTab(null, function (img) {
        var a = document.createElement("img");
        a.innerHTML = '<img src="' + img + '">';
        var link = document.createElement('a');
        link.innerHTML = 'download image';
        link.addEventListener('click', function (ev) {
            link.href = img;
            link.download = "Screenshot.jpeg";
        }, false);
        document.body.appendChild(link);
        //link.click()
        //chrome.downloads.showDefaultFolder();
        chrome.downloads.download({
            url: img,
            filename: "folder/Screenshot",
            saveAs: false
        });
    });
});
