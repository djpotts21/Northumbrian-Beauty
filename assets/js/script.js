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
      blurb: `We are the gateway to Northumberland's coastline. Discover life in a historic fishing village. Discover the Mary Joicey all weather lifeboat and the Girl Anne fishing coble.`, 
      image: "https://d2f0ora2gkri0g.cloudfront.net/bkpam2155390_img_0200.jpg",
    },
    { 
      position: {lat: 55.19021055122221, lng: -1.547346828276308},
      title: "Woodhorn Museum",
      website: "https://museumsnorthumberland.org.uk/woodhorn-museum/", 
      blurb: `Enjoy our excellent facilities, cutting-edge arts and cultural exhibits and a fun-filled events programme.`, 
      image: "https://d3d00swyhr67nd.cloudfront.net/w800h800/DSC_2701-1024x683.jpg",
    },
    { 
        position: {lat: 55.29369, lng: -1.5840619},
        title: "Duridge Bay & Country Park",
        website: "https://www.northumberland.gov.uk/Local/Country-parks-visitor-centres-coastal-sitesPubl/Druridge-Bay-Country-Park-visitor-centre.aspx", 
        blurb: `Infringed with rugged dunes, Druridge Bay has unspoilt coastline stretching as far as the eye can see.`, 
        image: "https://images.visitnorthumberland.com/Druridge-Links/vn-large-Aerial-shot-of-Druridge-Bay.jpg",
    },
    { 
        position: {lat: 55.34591765170579, lng: -1.6119417119583808},
        title: "Warkworth Castle",
        website: "https://www.english-heritage.org.uk/visit/places/warkworth-castle-and-hermitage/?utm_source=Google%20Business&utm_campaign=Local%20Listings&utm_medium=Google%20Business%20Profiles&utm_content=warkworth%20castle", 
        blurb: `Striking new sculptures have been installed in the castle grounds to create a series of interactive trails which reveal the lives of people who lived in or near the castle in the early 15th century.`, 
        image: "https://www.visitnorthumberland.com/VisitNorthumberland/media/VisitNorthumberland/Home/Explore/Destinations/Market%20Towns/Warkworth/warkworth-2023.jpg?ext=.jpg",
    },
    { 
        position: {lat: 55.41569608405353, lng: -1.7059520734667566},
        title: "Alnwick Castle & Alnwick Garden",
        website: "https://www.alnwickcastle.com/", 
        blurb: `The iconic Alnwick Castle is a Northumberland filming location for Harry Potter, Downton Abbey and more. Find out about its exciting history and visit.`, 
        image: "https://thirdeyetraveller.com/wp-content/uploads/NORTHUMBERLAND-14-of-18.jpg",
    }
  ];

  var hiddenGemsNorthumberland = [
    { 
      position: {lat: 55.0859802, lng: -1.6303549},
      title: "Northumberlandia, the Lady of the North",
      website: "https://www.northumberlandia.com/",
      blurb: `
      Northumberlandia, the Lady of the North. The country park, woodland trail and landscape sculpture is open from dawn ’til dusk each day. The café and toilets are open daily Monday – Sunday, from 10:00 – 16:00. Hot food stops at 15:00. We hope you enjoy your visit!`, 
      image: "https://www.northumberlandia.com/wp-content/themes/northumberlandia/slider/nlandia_P9_front.jpg",
    },
    { 
      position: {lat: 54.921747, lng: -2.124179},
      title: "Angel Of Northumberland",
      website: "https://fabulousnorth.com/angel-of-northumberland/", 
      blurb: `A mini version of the Angel Of The North standing in a field near Hexham.`, 
      image: "https://cdn.fabulousnorth.com/fabulous-north/place/20220410-114400-366aace5cf1.jpg?width=1320",
    },
    { 
        position: {lat: 55.160009476022815, lng: -1.6943338320159862}, 
        title: "Emily Wilding Davison Statue And Grave",
        website: "https://fabulousnorth.com/emily-wilding-davison-statue-and-grave/", 
        blurb: `Emily Davison was a militant suffragette who died after throwing herself in front of the king's horse at the Epsom Derby.`, 
        image: "https://cdn.fabulousnorth.com/fabulous-north/place/emily-wilding-davison-statue-and-grave.jpg?width=500&aspect_ratio=269:200&quality=85",
    },
    { 
        position: {lat: 55.410886, lng: -1.69914},
        title: "Percy Tenantry Column",
        website: "https://fabulousnorth.com/percy-tenantry-column/", 
        blurb: `A Doric style column with a Percy Lion on the top dedicated to the 2nd Earl of Northumberland.`, 
        image: "https://cdn.fabulousnorth.com/fabulous-north/place/percy-tenantry-column-5c7fec30daa.jpg?width=500&aspect_ratio=269:200&quality=85",
    },
    { 
        position: {lat: 55.607953, lng: -1.719191},
        title: "Grace Darling Monument",
        website: "https://fabulousnorth.com/grace-darling-monument/", 
        blurb: `The monument for the Northumberland heroine Grace Darling who helped in the the rescue of survivors from the shipwrecked Forfarshire in 1838.`, 
        image: "https://cdn.fabulousnorth.com/fabulous-north/place/grace-darling-grave.jpg?width=500&aspect_ratio=269:200&quality=85",
    }
  ];

  var stayInNorthumberland = [
    { 
      position: {lat: 55.17006933813593, lng: -1.6919234998891883},
      title: "Beautiful Town Centre Cottage, Hot Tub - Morpeth",
      website: "https://www.airbnb.co.uk/rooms/592281834572836855?adults=1&children=0&enable_m3_private_room=true&infants=0&location=Northumberland&pets=0&check_in=2023-09-11&check_out=2023-09-16&source_impression_id=p3_1691010996_y5UnC3%2BXsFf1%2BocV&previous_page_section_name=1001&federated_search_id=c4a8b1c7-045c-41b1-b900-5d7c9fb232b7",
      blurb: `Copper cottage is located in the town center of Morpeth Northumberland, Recently been fully refurbished to a very high standard.`, 
      image: "https://a0.muscache.com/im/pictures/e1a488b2-0893-453f-aaff-eb007f6809c5.jpg?im_w=720",
    },
    { 
      position: {lat: 55.31185729535512, lng: -1.9422650929127392},
      title: "Off-grid woodland hide-away - Westhills Pod",
      website: "https://www.airbnb.co.uk/rooms/50594334?adults=1&children=0&enable_m3_private_room=true&infants=0&location=Northumberland&pets=0&check_in=2023-08-18&check_out=2023-08-25&source_impression_id=p3_1691011239_tZHVBY7lsVW9pIs2&previous_page_section_name=1001&federated_search_id=5492ec2a-29c4-4838-84de-92c03c5bc7b6", 
      blurb: `300 yards walk across the fields and over 2 stiles, from the car parking area, totally off-grid camping pod, with solar panel for lighting and phone charging, a composting loo and gas shower.`, 
      image: "https://a0.muscache.com/im/pictures/9ff5d626-06da-475a-87bc-e3efcf07d304.jpg?im_w=720",
    },
    { 
        position: {lat: 55.42200072421149, lng: -1.580626691765224},
        title: "Beach Cottage",
        website: "https://www.airbnb.co.uk/rooms/25320195?adults=1&children=0&enable_m3_private_room=true&infants=0&location=Northumberland&pets=0&check_in=2023-10-14&check_out=2023-10-21&source_impression_id=p3_1691011209_rAbP2vts9TwAZIdq&previous_page_section_name=1001&federated_search_id=5492ec2a-29c4-4838-84de-92c03c5bc7b6", 
        blurb: `Beachside, fisherman’s cottage with uninterrupted and endless sea views. Located in the old smugglers village of Boulmer. Perfect for active family holidays and just a stone throw from the popular ‘Fishing Boat Inn`, 
        image: "https://a0.muscache.com/im/pictures/7c3535bb-a942-40bf-8af8-f6d93494d0b6.jpg?im_w=720",
    },
    { 
        position: {lat: 55.546013990904726, lng: -1.9383375723397736},
        title: "The Byre. Cosy, eco friendly barn camping.",
        website: "https://www.airbnb.co.uk/rooms/41727832?adults=1&children=0&enable_m3_private_room=true&infants=0&location=Northumberland&pets=0&check_in=2023-10-21&check_out=2023-10-26&source_impression_id=p3_1691011215_hlw7IBPbVqQxW2Ca&previous_page_section_name=1001&federated_search_id=5492ec2a-29c4-4838-84de-92c03c5bc7b6", 
        blurb: `The Byre is a delightful upcycled 19th century listed cow byre on an old farm. The room looks out on to the  farm courtyard. There is a large garden for visitors use, and dark skies above us.`, 
        image: "https://a0.muscache.com/im/pictures/9989ecc9-a75c-45b7-96a7-0f64be10f8ef.jpg?im_w=1200",
    },
    { 
        position: {lat: 55.51884841764941, lng: -1.6309355566245507},
        title: "Deluxe Detached Cabin at Newton Hall",
        website: "https://www.airbnb.co.uk/rooms/767114813888508457?adults=1&children=0&enable_m3_private_room=true&infants=0&location=Northumberland&pets=0&check_in=2023-08-20&check_out=2023-08-26&source_impression_id=p3_1691010990_v8mcubarlPTEbUYA&previous_page_section_name=1001&federated_search_id=ddd59f77-7eb1-4cf7-b9d7-d6fad220e1d9", 
        blurb: `Set in the secluded Northumberland Coast, a short stroll from the sandy beaches are Newton Halls Garden Rooms. Boasting a private terrace with an open fire chimenea & Hot Tub where you can relax under the clear night sky's.`, 
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-767114813888508457/original/85752517-6c88-4f28-b572-c676236f39f0.jpeg?im_w=1200",
    }
  ];

  var eatInNorthumberland = [
    { 
      position: {lat: 55.3368837433866,  lng: -1.5769272794560412}, 
      title: "The Fish Shack",
      website: "https://www.boathousefoodgroup.co.uk/fish-shack/",
      blurb: `From fish and chips, locally smoked seafood and freshly steamed mussels to an array of delicious seasonal specials, Fish Shack welcomes all.`, 
      image: "https://www.boathousefoodgroup.co.uk/wp-content/uploads/2017/10/fish-shack-01-1400x860.jpg",
    },
    { 
      position: {lat: 55.16718752746841, lng: -1.6878178905991135},
      title: "Lollo Rosso Italia",
      website: "http://www.lollorossoitalia.com/", 
      blurb: `Welcome to the most popular restaurant in Morpeth. Expect delicious, freshly-prepared, authentic Italian food, and a vibrant atmosphere. `, 
      image: "https://lollorossoitalia.com/wp-content/uploads/lollorossostairs.jpg",
    },
    { 
        position: {lat: 54.97210816930676, lng: -2.1019023406211876},
        title: "Little Mexico",
        website: "https://littlemexico.loke.app/1056/menu", 
        blurb: `Little Mexico is a gastro shop which incorporates a healthy juice bar giving you the true Mexican ex.`, 
        image: "https://assets-tidy.s3-ap-southeast-2.amazonaws.com/org/01F5ANHYE69KDY7D7SXSASPN4J/theme/Web-Banner_01FBGSEPJ8S1RAKACQXC3VHMFB.png",
    },
    { 
        position: {lat: 55.173105075603374, lng: -2.4376195629613857},
        title: "The Pheasant Inn",
        website: "http://www.thepheasantinn.com/", 
        blurb: `From the moment you step inside The Pheasant Inn you’ll be treated to the warmest of welcomes. Found in the heart of the Northumberland countryside near Kielder Water, we are a family run Country Inn with Bed and Breakfast, offering comfortable `, 
        image: "https://www.thepheasantinn.com/assets/cache/images/header/pheasant_inn_northumberland_exterior_2-490x-96a.jpg",
    },
    { 
        position: {lat: 55.54535561989752, lng: -2.0110548760314595},
        title: "Ad Gefrin",
        website: "https://adgefrin.co.uk/our-experience/our-bar-bistro#", 
        blurb: `Celebrating the very best produce is at the heart of all we do. Our Bistro showcases local ingredients from our doorstep as well as sourcing the best the wider Northumbria and the borderlands has to offer. `, 
        image: "https://adgefrin.co.uk/image/crop/1679921745_3e46d06328ee3c4ac6b3.jpg/1800/1000",
    }
  ];
var locations = [];

function addBlurToMap() {
  document.getElementById("map").classList.remove("no-blur");
  document.getElementById("map").classList.add("blur");
}

function removeBlurFromMap() {
  document.getElementById("map").classList.remove("blur");
  document.getElementById("map").classList.add("no-blur");
}


function toggleSidebarRight() {
  if (document.getElementById("show-as-list-toggle").classList.contains("show-list")){
    document.getElementById("map").style.width = '60%';
    document.getElementById("show-as-list-toggle").innerText = "Hide List";
    document.getElementById("show-as-list-toggle").classList.remove("show-list");
    document.getElementById("show-as-list-toggle").classList.add("hide-list");
  }
  else {
    document.getElementById("map").style.width = '100%';
    document.getElementById("show-as-list-toggle").innerText = "Show as a List";
    document.getElementById("show-as-list-toggle").classList.remove("hide-list");
    document.getElementById("show-as-list-toggle").classList.add("show-list");
  }
}


function reset() {
  addBlurToMap();
  openIntro();
  document.getElementById("show-as-list-toggle").innerText = "";
  document.getElementById("sidebar-right").innerHTML = "";
  locations = []; 
  initMap();
}


function lovelyPlacesNorthumberlandFunc() {
  closeIntro();
  document.getElementById("show-as-list-toggle").innerText = "Show as a List";
  document.getElementById("sidebar-right").innerHTML = "";
  locations = lovelyPlacesNorthumberland; 
  initMap();
}

function hiddenGemsNorthumberlandFunc() {
  closeIntro();
  document.getElementById("show-as-list-toggle").innerText = "Show as a List";
  document.getElementById("sidebar-right").innerHTML = "";
  locations = hiddenGemsNorthumberland; 
  initMap();
}

function stayInNorthumberlandFunc() {
  closeIntro();
  document.getElementById("show-as-list-toggle").innerText = "Show as a List";
  document.getElementById("sidebar-right").innerHTML = "";
  locations = stayInNorthumberland; 
  initMap();
}

function eatInNorthumberlandFunc() {
  closeIntro();
  document.getElementById("show-as-list-toggle").innerText = "Show as a List";
  document.getElementById("sidebar-right").innerHTML = "";
  locations = eatInNorthumberland; 
  initMap();
}

function closeIntro(){
  removeBlurFromMap();
  document.getElementById("halt-info-startup").setAttribute("aria-disabled", "true");
  document.getElementById("halt-info-startup").classList.add("hide-intro-fader");
  setTimeout(function(){
    document.getElementById("halt-info-startup").classList.add("hide-intro-complete");
  }, 500);
}

function openIntro(){
  document.getElementById("halt-info-startup").classList.remove("hide-intro-fader");
  document.getElementById("halt-info-startup").classList.remove("hide-intro-complete");
  document.getElementById("halt-info-startup").setAttribute("aria-disabled", "false");
}


document.addEventListener('DOMContentLoaded', () => {
document.getElementById("nav-logo").addEventListener("click", reset);
document.getElementById("home").addEventListener("click", reset);
document.getElementById("get-started").addEventListener("click", lovelyPlacesNorthumberlandFunc);
document.getElementById("show-as-list-toggle").addEventListener("click", toggleSidebarRight);
document.getElementById("nice-places").addEventListener("click", lovelyPlacesNorthumberlandFunc);
document.getElementById("hidden-gems").addEventListener("click", hiddenGemsNorthumberlandFunc);
document.getElementById("places-to-stay").addEventListener("click", stayInNorthumberlandFunc);
document.getElementById("places-to-eat").addEventListener("click", eatInNorthumberlandFunc);
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
        
    `;
  });

}

initMap();  

module.exports = [lovelyPlacesNorthumberlandFunc, reset];