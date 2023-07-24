(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "AIzaSyBW6UV4AjvEdOxJJJy-ywVB4tlxab0AUjI",
    v: "weekly",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
  });

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
        position: {lat: 55.29369, lng: -1.5840619},
        title: "Duridge Bay & Country Park",
        website: "https://www.northumberland.gov.uk/Local/Country-parks-visitor-centres-coastal-sitesPubl/Druridge-Bay-Country-Park-visitor-centre.aspx", 
        blurb: `Infringed with rugged dunes, Druridge Bay has unspoilt coastline stretching as far as the eye can see. The area is a haven for birdwatchers, walkers and anyone wanting to breathe in the natural beauty of the Northumberland coast in a peaceful setting.`, 
        image: "https://images.visitnorthumberland.com/Druridge-Links/vn-large-Aerial-shot-of-Druridge-Bay.jpg",
    },
    { 
        position: {lat: 55.34591765170579, lng: -1.6119417119583808},
        title: "Warkworth Castle",
        website: "https://www.english-heritage.org.uk/visit/places/warkworth-castle-and-hermitage/?utm_source=Google%20Business&utm_campaign=Local%20Listings&utm_medium=Google%20Business%20Profiles&utm_content=warkworth%20castle", 
        blurb: `Striking new sculptures have been installed in the castle grounds to create a series of interactive trails which reveal the lives of people who lived in or near the castle in the early 15th century. Choose your character, from Henry Percy of Atholl to Eleanor Neville: Countess of Northumberland to John del Warderobe: long-serving servant of the rulers of Warkworth, to lead you round the castle.`, 
        image: "https://www.visitnorthumberland.com/VisitNorthumberland/media/VisitNorthumberland/Home/Explore/Destinations/Market%20Towns/Warkworth/warkworth-2023.jpg?ext=.jpg",
    },
    { 
        position: {lat: 55.41569608405353, lng: -1.7059520734667566},
        title: "Alnwick Castle & Alnwick Garden",
        website: "https://www.alnwickcastle.com/", 
        blurb: `The iconic Alnwick Castle is a Northumberland filming location for Harry Potter, Downton Abbey and more. Find out about its exciting history and visit.`, 
        image: "https://thirdeyetraveller.com/wp-content/uploads/NORTHUMBERLAND-14-of-18.jpg",
    }
  ]

var locations = []

function addBlurToMap() {
  document.getElementById("map").classList.remove("no-blur")
  document.getElementById("map").classList.add("blur")
}


function removeBlurFromMap() {
  document.getElementById("map").classList.remove("blur")
  document.getElementById("map").classList.add("no-blur")
}


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


function reset() {
  addBlurToMap();
  openIntro()
  document.getElementById("show-as-list-toggle").innerText = "";
  document.getElementById("sidebar-right").innerHTML = ""
  locations = []; 
  initMap();
}


function lovelyPlacesNorthumberlandFunc() {
  closeIntro();
  document.getElementById("show-as-list-toggle").innerText = "Show as a List";
  document.getElementById("sidebar-right").innerHTML = ""
  locations = lovelyPlacesNorthumberland; 
  initMap();
}

function closeIntro(){
  removeBlurFromMap()
  document.getElementById("halt-info-startup").classList.add("hide-intro-fader")
  setTimeout(function(){
    document.getElementById("halt-info-startup").classList.add("hide-intro-complete")
  }, 500)
}

function openIntro(){
  document.getElementById("halt-info-startup").classList.remove("hide-intro-fader")
  document.getElementById("halt-info-startup").classList.remove("hide-intro-complete")
}


document.addEventListener('DOMContentLoaded', () => {
document.getElementById("home").addEventListener("click", reset);
document.getElementById("get-started").addEventListener("click", lovelyPlacesNorthumberlandFunc);
document.getElementById("show-as-list-toggle").addEventListener("click", toggleSidebarRight);
document.getElementById("nice-places").addEventListener("click", lovelyPlacesNorthumberlandFunc);
});


//Google Maps

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

module.exports = [lovelyPlacesNorthumberlandFunc, reset]