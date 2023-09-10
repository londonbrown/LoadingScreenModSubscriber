// ==UserScript==
// @name         Loading Screen Mod Collector
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        file:///C:/Users/londo/AppData/Local/Colossal%20Order/Cities_Skylines/Report/LoadingScreenMod/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=undefined.
// @run-at       document-end
// @grant        GM_openInTab
// ==/UserScript==

(function() {
    'use strict';
    let containers = Array.from(document.getElementsByClassName("tg mi"))
    containers.forEach(e => e.click())
    let anchors = Array.from(document.getElementsByTagName("a"))
    let workshopLinks = anchors.filter(a => a.innerHTML == "Workshop link")
    console.log(`There are ${workshopLinks.length} missing assets with workshop links`)
    let processNextLinkAfterDelay = (anchor, index) => {
        setTimeout(function() {
            console.log(`Opening mod ${index + 1} in the list`)
            let href = anchor.href + "&ref=TamperMonkey"
            GM_openInTab(href)
        }, 1000 * (index))
    }
    workshopLinks.forEach(processNextLinkAfterDelay)
})();