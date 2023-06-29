var locations = []
var lovelyPlacesNorthumberland = [
  { lat: 55.18559938889182, lng: -1.5042083978634628 },
  { lat: 55.19021055122221, lng: -1.547346828276308 },
  { lat: 55.34591765170579, lng: -1.6119417119583808 },
]

var lovelyPlacesNorthumberlandInfo = [
  { IconID: "A", Name: "Newbiggin Maritime Centre" , Website: "http://www.nmcentre.org.uk/", Blurb: `We are the gateway to Northumberland's coastline. Discover life in a historic fishing village. Discover the Mary Joicey all weather lifeboat and the Girl Anne fishing coble. Visit the 65 seat Breakwater Café serving local food and overlooking the bay. We are an all weather attraction, open all year.`, Image: "https://d2f0ora2gkri0g.cloudfront.net/bkpam2155390_img_0200.jpg" },
  { IconID: "B", Name: "Woodhorn Museum" , Website: "https://museumsnorthumberland.org.uk/woodhorn-museum/", Blurb: `Enjoy our excellent facilities, cutting-edge arts and cultural exhibits and a fun-filled events programme. Located in what was once the largest pit village in the world, the former colliery is now home to our popular visitor attraction, welcoming thousands of people each year.`, Image: "https://d3d00swyhr67nd.cloudfront.net/w800h800/DSC_2701-1024x683.jpg" },
  { IconID: "C", Name: "Warkworth Castle" , Website: "https://www.english-heritage.org.uk/visit/places/warkworth-castle-and-hermitage/?utm_source=Google%20Business&utm_campaign=Local%20Listings&utm_medium=Google%20Business%20Profiles&utm_content=warkworth%20castle", Blurb: `Striking new sculptures have been installed in the castle grounds to create a series of interactive trails which reveal the lives of people who lived in or near the castle in the early 15th century. Choose your character, from Henry Percy of Atholl to Eleanor Neville: Countess of Northumberland to John del Warderobe: long-serving servant of the rulers of Warkworth, to lead you round the castle.`, Image: "https://www.visitnorthumberland.com/VisitNorthumberland/media/VisitNorthumberland/Home/Explore/Destinations/Market%20Towns/Warkworth/warkworth-2023.jpg?ext=.jpg" },

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
    zoom: 12,
    center: { lat: 34.84555, lng: -111.8035 },
    mapId: "4504f8b37365c3d0",
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
    {
      position: { lat: 34.8791806, lng: -111.8265049 },
      title: "Boynton Pass",
    },
    {
      position: { lat: 34.8559195, lng: -111.7988186 },
      title: "Airport Mesa",
    },
    {
      position: { lat: 34.832149, lng: -111.7695277 },
      title: "Chapel of the Holy Cross",
    },
    {
      position: { lat: 34.823736, lng: -111.8001857 },
      title: "Red Rock Crossing",
    },
    {
      position: { lat: 34.800326, lng: -111.7665047 },
      title: "Bell Rock",
    },
  ];
  // Create an info window to share between markers.
  const infoWindow = new InfoWindow();

  // Create the markers.
  tourStops.forEach(({ position, title }, i) => {
    const pin = new PinElement({
      glyph: `${i + 1}`,
    });
    const marker = new AdvancedMarkerElement({
      position,
      map,
      title: `${i + 1}. ${title}`,
      content: pin.element,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", ({ domEvent, latLng }) => {
      const { target } = domEvent;

      infoWindow.close();
      infoWindow.setContent(marker.title);
      infoWindow.open(marker.map, marker);
    });
  });
}

initMap();
