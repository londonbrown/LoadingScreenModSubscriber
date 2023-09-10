// ==UserScript==
// @name         Steam Tampermonkey Subscriber
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://steamcommunity.com/sharedfiles/filedetails/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamcommunity.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let queryParams = new URLSearchParams(window.location.search)
    if (queryParams.get("ref") == "TamperMonkey") {
        let itemOptionAdd = document.getElementById("SubscribeItemOptionAdd")
        let shouldSubscribe = itemOptionAdd.classList.contains("selected")
        if (shouldSubscribe) {
            console.log("Not subscribed. Subscribing.")
            let subscribeButton = document.getElementById("SubscribeItemBtn")
            subscribeButton.click()
            setTimeout(() => {
                window.close()
            }, 1000)
        } else {
            window.close()
        }
    }
})();
