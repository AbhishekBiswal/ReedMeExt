/*
	ReedMe Chrome Extension.
	By Abhishek Biswal.
*/
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('ReedMe-fied! - @Abhishek_Biswal');
  newUrl = "http://reedme.in/"+tab.url;
  chrome.tabs.executeScript({
    code: 'window.location.href="'+newUrl+'"'
  });
});