let filter = {urls: ["https://www.youtube.com"]};


chrome.webRequest.onSendHeaders.addListener(function(details){
    console.log("ALERT!!!!!!!!!!!!!!!!!!!!!!!!!HERE!!!!!!ALERT!!!!!");
    return;
},{urls: ["*://www.youtube.com/*"]},[]);