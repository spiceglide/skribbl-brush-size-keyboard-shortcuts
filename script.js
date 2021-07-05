// ==UserScript==
// @name         Skribbl.io Brush Size Keyboard Shortcuts
// @match        *://skribbl.io/*
// @grant        none
// ==/UserScript==

const brushSizes = document.querySelectorAll("[data-size]");
function changeBrush(event) {
    if (["1", "2", "3", "4"].includes(event.key) && document.activeElement.id !== "inputChat") {
        brushSizes[event.key - 1].click();
    }
}
document.addEventListener("keydown", changeBrush);
