let filter = {urls: ["https://www.youtube.com"]};
const registeredUrls = new Map([["thisisurl", [0,1]]]);

chrome.webRequest.onCompleted.addListener(function(details){
    registeredUrls.set(details.documentId, 1);
    return;
},{urls: ["https://www.youtube.com/*"]}),[];

chrome.webNavigation.onCompleted.addListener(function(details){
    if(registeredUrls.get(details.documentId) === 1){
        console.log(`Already requested ${details.documentId}`);
    }
    return;
},{urls: ["*://www.youtube.com/*"]});