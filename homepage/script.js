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

  let response = await fetch("./data/streetview-countries.json");
  let streetviewCounntries = await response.json();

  console.log(streetviewCounntries);

  let html = "";
  for (let country in countries) {
    let flagCode = flagNames[country];
    if (!flagCode || !streetviewCounntries.includes(country)) continue;

    html += `
            <div class="map">
                <div class="map-background" style="background-image: url(data/thumbnails/flags/${flagCode.toLowerCase()}.svg)"></div>
                <div class="map-text>
                    <div class="map-title">${country}</div>
                    <div class="map-actions">
                        <a class="map-play" href="./play#${encodeURI(
                          country
                        )}>Play</a>
                        <a class="map-score" href="./highscore#${encodeURI(
                          country
                        )}>Scores</a>
                    </div>
                </div>
            </div>
        `;
  }
  document.querySelector(".country-maps").innerHTML = html;
}

function playMyArea(e) {
  navigator.geolocation.getCurrentPosition((position) => {
    let radius = document.querySelector(".radius-input").value;
    location.href = `./play/#area#${position.coords.latitude}#${radius}`;
  });
}



