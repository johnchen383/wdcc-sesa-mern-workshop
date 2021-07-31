document.body.innerHTML += '<dialog>Are you sure you want to do work? Your cat is hungry...<br>\
You should go to Oodle to feed it!<br><button class="b1">You\'re right</button><button class = "b2">I agree</button></dialog>';
var dialog = document.querySelector("dialog")
dialog.querySelector(".b1").addEventListener("click", function() {
    window.location.replace("http://localhost:5500/")
})
dialog.querySelector(".b2").addEventListener("click", function() {
    window.location.replace("http://localhost:5500/")
})
dialog.showModal()



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