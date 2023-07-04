import {lovelyPlacesNorthumberland} from "./placesdata.js"

var locations = []

  function toggleSidebarRight() {
    if (document.getElementById("show-as-list-toggle").classList.contains("show-list")){
      document.getElementById("map").style.width = '60%';
      document.getElementById("show-as-list-toggle").innerText = "Hide List";
      document.getElementById("show-as-list-toggle").classList.remove("show-list")
      document.getElementById("show-as-list-toggle").classList.add("hide-list")
    }
    else {
      document.getElementById("map").style.width = '100%';
      document.getElementById("show-as-list-toggle").innerText = "Show as a List";
      document.getElementById("show-as-list-toggle").classList.remove("hide-list")
      document.getElementById("show-as-list-toggle").classList.add("show-list")
  }
}
 

  function clearLocations() {
    document.getElementById("sidebar-right").innerHTML = ""
    locations = []; 
    initMap();
  }

  function lovelyPlacesNorthumberlandFunc() {
    document.getElementById("sidebar-right").innerHTML = ""
    locations = lovelyPlacesNorthumberland; 
    initMap();
  }

  
  document.getElementById("show-as-list-toggle").addEventListener("click", toggleSidebarRight);
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
      
      document.getElementById("sidebar-right").innerHTML += `
          <div id="list-item">
            <div id="list-content-text">
              <p><strong>${i+1}</strong><br></p>
              <p><strong>Attraction Name: </strong>${title}<br></p>
              <p><strong>Website: </strong><a href="${website}" alt="Link to ${title}'s website" target="_blank">Click here to view website</a><br></p>
              <p><strong>Description: </strong>${blurb}<br></p>
            </div>
            <div id="list-content-image">
             <img src="${image}" alt="Photo of ${title}">
            </div>
          </div>
          
      `

    });
  }
  initMap();
