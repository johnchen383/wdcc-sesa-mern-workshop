window.location.replace("http://localhost:5500/")

// var host = "http://www.google.com";
// chrome.webRequest.onBeforeRequest.addListener(
//     function(details) {
//          return {redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]};
//     },
//     {
//         urls: [
//             "*://facebook.com/*",
//             "*://www.facebook.com/*",
//             "*://apple.com/*",
//             "*://www.apple.com/*",
//             "*://iptorrents.com/*",
//             "*://www.iptorrents.com/*"
//         ],
//         types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
//     },
//     ["blocking"]
// );