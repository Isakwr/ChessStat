let filter = {urls: ["https://www.youtube.com"]};


chrome.webRequest.onBeforeRequest.addListener(function(details){
    console.log("ALERT!!!!!!!!!!!!!!!!!!!!!!!!!HERE!!!!!!ALERT!!!!!");
    console.log("ALERT!!!!!!!!!!!!!!!!!!!!!!!!!HERE!!!!!!ALERT!!!!!");
    console.log("ALERT!!!!!!!!!!!!!!!!!!!!!!!!!HERE!!!!!!ALERT!!!!!");
    console.log("ALERT!!!!!!!!!!!!!!!!!!!!!!!!!HERE!!!!!!ALERT!!!!!");
    console.log("ALERT!!!!!!!!!!!!!!!!!!!!!!!!!HERE!!!!!!ALERT!!!!!");
    console.log("ALERT!!!!!!!!!!!!!!!!!!!!!!!!!HERE!!!!!!ALERT!!!!!");
    return;
},{urls: ["<all_urls>"]},["blocking"]);