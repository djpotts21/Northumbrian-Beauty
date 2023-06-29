var locations = []
var lovelyPlacesNorthumberland = [
  { 
    position: {lat: 55.18559938889182, lng: -1.5042083978634628},
    title: "Newbiggin Maritime Centre",
    website: "http://www.nmcentre.org.uk/",
    blurb: `We are the gateway to Northumberland's coastline. Discover life in a historic fishing village. Discover the Mary Joicey all weather lifeboat and the Girl Anne fishing coble. Visit the 65 seat Breakwater Café serving local food and overlooking the bay. We are an all weather attraction, open all year.`, 
    image: "https://d2f0ora2gkri0g.cloudfront.net/bkpam2155390_img_0200.jpg",
  },
  { 
    position: {lat: 55.19021055122221, lng: -1.547346828276308},
    title: "Woodhorn Museum",
    website: "https://museumsnorthumberland.org.uk/woodhorn-museum/", 
    blurb: `Enjoy our excellent facilities, cutting-edge arts and cultural exhibits and a fun-filled events programme. Located in what was once the largest pit village in the world, the former colliery is now home to our popular visitor attraction, welcoming thousands of people each year.`, 
    image: "https://d3d00swyhr67nd.cloudfront.net/w800h800/DSC_2701-1024x683.jpg",
  },
  { 
      position: {lat: 55.34591765170579, lng: -1.6119417119583808},
      title: "Warkworth Castle",
      website: "https://www.english-heritage.org.uk/visit/places/warkworth-castle-and-hermitage/?utm_source=Google%20Business&utm_campaign=Local%20Listings&utm_medium=Google%20Business%20Profiles&utm_content=warkworth%20castle", 
      blurb: `Striking new sculptures have been installed in the castle grounds to create a series of interactive trails which reveal the lives of people who lived in or near the castle in the early 15th century. Choose your character, from Henry Percy of Atholl to Eleanor Neville: Countess of Northumberland to John del Warderobe: long-serving servant of the rulers of Warkworth, to lead you round the castle.`, 
      image: "https://www.visitnorthumberland.com/VisitNorthumberland/media/VisitNorthumberland/Home/Explore/Destinations/Market%20Towns/Warkworth/warkworth-2023.jpg?ext=.jpg",
  }
]

function clearLocations() {
  locations = []; 
  initMap();
  console.log(locations) 
}

function lovelyPlacesNorthumberlandFunc() {
  locations = lovelyPlacesNorthumberland; 
  initMap();
  console.log(locations) 
}

document.getElementById("nice-places").addEventListener("click", lovelyPlacesNorthumberlandFunc);
document.getElementById("clear").addEventListener("click", clearLocations);

let map;

async function initMap() {
  // Request needed libraries.
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker"
  );
  const map = new Map(document.getElementById("map"), {
    zoom: 9,
    center: { lat: 55.4091004, lng: -1.6299012 },
    mapId: "4504f8b37365c3d0",
  });


  // Create an info window to share between markers.
  const infoWindow = new InfoWindow();

  // Create the markers.
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
     // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", ({ domEvent, latLng }) => {
      const { target } = domEvent;

      infoWindow.close();
      infoWindow.setContent(
        `
        <div id="info-window-left">
        <p><strong>Attraction Name: </strong>${title}<br></p>
        <p><strong>Website: </strong><a href="${website}" alt="Link to ${title}'s website" target="_blank">Click here to view website</a><br></p>
        <p><strong>Description: </strong>${blurb}<br></p>
        </div>
        <div id="info-window-right">
        <img src="${image}" alt="Photo of ${title}">
        </div>
        `
        
        );
      infoWindow.open(marker.map, marker);
    });
  });
}

initMap();
