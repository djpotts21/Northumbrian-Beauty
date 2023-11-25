((g) => {
  "use strict";

  var h, a, k, p = "The Google Maps JavaScript API",
    c = "google",
    l = "importLibrary",
    q = "__ib__",
    m = document,
    b = window;
  b = b[c] || (b[c] = {});
  var d = b.maps || (b.maps = {}),
    r = new Set(),
    e = new URLSearchParams(),
    u = () => {
      return h || (h = new Promise(async (f, n) => {
        await (a = m.createElement("script"));
        e.set("libraries", [...r] + "");
        for (k in g) e.set(k.replace(/[A-Z]/g, (t) => {
          return "_" + t[0].toLowerCase();
        }), g[k]);
        e.set("callback", c + ".maps." + q);
        a.src = "https://maps." + c + "apis.com/maps/api/js?" + e;
        d[q] = f;
        a.onerror = function () {
          h = n(Error(p + " could not load."));
        };
        a.nonce = m.querySelector("script[nonce]")?.nonce || "";
        m.head.append(a);
      }));
    };
  d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n));
})({
  key: "AIzaSyBW6UV4AjvEdOxJJJy-ywVB4tlxab0AUjI",
  v: "weekly",
  // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
  // Add other bootstrap parameters as needed, using camel case.
});

// Get values from url

function getDestinationNameFromQueryString() {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    const destinationName = urlParams.get('dest-name');
    return destinationName;
  }
  
  function getLatLongFromQueryString() {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    const latLong = urlParams.get('latlong');
    return latLong;
  }

  // Set values in html
  let latLongValue = getLatLongFromQueryString();
  document.querySelector('.latlong').textContent = latLongValue;

  let destinationName = getDestinationNameFromQueryString();
  document.querySelector('.route-to').textContent = destinationName;

  // Google Maps

  



  // Call the function to render the map with directions
  async function renderMapWithDirections() {
    // Create a map object
      const { Map } = await google.maps.importLibrary("maps");
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.7749, lng: -122.4194 }, // Set the initial map center
      zoom: 12, // Set the initial zoom level
    });

    // Create a directions service object
    const directionsService = new google.maps.DirectionsService();

    // Create a directions renderer object
    const directionsRenderer = new google.maps.DirectionsRenderer({
      map: map, // Render the directions on the map
    });

    // Define the origin and destination for the directions
    const origin = "San Francisco, CA";
    const destination = "Los Angeles, CA";

    // Create a directions request object
    const request = {
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING, // Set the travel mode to driving
    };

    // Send the directions request to the directions service
    directionsService.route(request, function (result, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        // Display the directions on the map
        directionsRenderer.setDirections(result);
      } else {
        console.error("Error retrieving directions:", status);
      }
    });
  }

  // Call the function to render the map with directions

  renderMapWithDirections();
  

