// js

// document object represents the web page
// if you want want to access any element in an HTML page, you always start with accessing the document object.

// The addEventListener() method attaches event handler to the specified element.
// element.addEventListener(event, function, useCapture)

// The DOMContentLoaded event fires when the initial HTML document has
// been completely laoded and parsed, without waiting for
// styesheet, images and subframes to finish laoding.
document.addEventListener("DOMContentLoaded", init);

async function init() {
    let response = await fetch("./data/flag-name.json");
    let countries = await response.json();
