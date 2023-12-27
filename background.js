let filter = {urls: ["https://www.youtube.com"]};


chrome.webNavigation.onCompleted.addListener(function(details){
    console.log(`GOT THIS: ${details.documentId}`);
    return;
},{urls: ["https://www.youtube.com/*"]});