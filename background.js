var callback = function(details){
    alert("youtube detected KASJHASIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
}
var filter = {urls: ["https://www.youtube.com/*"]};
var opt_extraInfoSpec = [];


chrome.webRequest.onBeforeRequest.addListener(
    callback, filter, opt_extraInfoSpec
);