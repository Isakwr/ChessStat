let filter = {urls: ["https://www.youtube.com"]};


chrome.webRequest.onSendHeaders.addListener(function(details){
    console.log(`${details.documentId}`);
    return;
},{urls: ["*://www.youtube.com/*"]},[]);