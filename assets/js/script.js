import {lovelyPlacesNorthumberland} from "./placesdata.js"

var locations = []

  function showIntroGuide() {
    var introDiv = document.getElementById("intro-guide");
    introDiv.classList.add("show");
    introDiv.classList.remove("hide");
    var mapDiv = document.getElementById("map");
    mapDiv.classList.add("intro-visable");
  }
  function hideIntroGuide() {
    var introDiv = document.getElementById("intro-guide");
    introDiv.classList.remove("show");
    introDiv.classList.add("hide");
    var mapDiv = document.getElementById("map");
    mapDiv.classList.remove("intro-visable");
  }

  function clearLocations() {
    locations = []; 
    initMap();
  }

  function lovelyPlacesNorthumberlandFunc() {
    hideIntroGuide()
    locations = lovelyPlacesNorthumberland; 
    initMap();
  }

  document.getElementById("home").addEventListener("click", showIntroGuide);
  document.getElementById("nice-places").addEventListener("click", lovelyPlacesNorthumberlandFunc);
  document.getElementById("clear").addEventListener("click", clearLocations);


  let map;
  async function initMap() {
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
    const map = new Map(document.getElementById("map"), {
      zoom: 9,
      center: { lat: 55.4091004, lng: -1.6299012 },
      mapId: "4504f8b37365c3d0",
    });

    const infoWindow = new InfoWindow();

    locations.forEach(({ position, title, website, blurb, image }, i) => {
      const pin = new PinElement({
        glyph: `${i + 1}`,
      });
      const marker = new AdvancedMarkerElement({
        position,
        map,
        title: `${title}`,
        content: pin.element,
      });

      marker.addListener("click", ({ domEvent, latLng }) => {
        
        const { target } = domEvent;

        infoWindow.close();
        infoWindow.setContent(`
          <div id="info-window-left">
          <p><strong>Attraction Name: </strong>${title}<br></p>
          <p><strong>Website: </strong><a href="${website}" alt="Link to ${title}'s website" target="_blank">Click here to view website</a><br></p>
          <p><strong>Description: </strong>${blurb}<br></p>
          </div>
          <div id="info-window-right">
          <img src="${image}" alt="Photo of ${title}">
          </div>`
          );
        infoWindow.open(marker.map, marker);
      });
    });
  }
  initMap();
