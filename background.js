let filter = {urls: ["https://www.youtube.com"]};


chrome.webNavigation.onCompleted.addListener(function(details){
    console.log(`${details.documentId}`);
    console.log("hey");
    return;
},{urls: ["*://www.youtube.com/*"]});