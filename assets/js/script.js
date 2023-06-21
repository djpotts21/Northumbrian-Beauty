const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });

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

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 1,
    center: { lat: 55.2010113, lng: -1.9452985 },
  });
  const infoWindow = new google.maps.InfoWindow({
    content: `Content Here `,
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  const markers = locations.map((position, i) => {
    const label = labels[i % labels.length];
    const marker = new google.maps.Marker({
      position,
      label,
    });

    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
      infoWindow.setContent(label);
      infoWindow.open(map, marker);
    });
    return marker;
  });

  // Add a marker clusterer to manage the markers.
  new MarkerClusterer({ markers, map });
}

window.initMap = initMap;

module.exports = {initMap, clearLocations, lovelyPlacesNorthumberlandFunc}