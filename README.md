
# The Beauty of Northumberland

Our web application aims to provide an immersive experience for tourists and visitors to Northumberland by combining various features. Utilizing Google Map markers, the application showcases the breathtaking beauty spots scattered throughout the Northumberland region. Users can explore these spots by accessing detailed information. Additionally, Places to Stay via Airbnb allows users to conveniently find and book hotels and accommodations in the surrounding area. 

### Purpose

Northumberland is a vast county, there are lots of attractions that we as local residents know about, however unless you stumble across an open Tourist Information Center or navigate the Tourism Website which gives you an overview per town. 

The overall purpose is to create an interactive map where users can zoom in, click and see information about each attraction, providing the function to zoom in and out of the surrounding areas so the user is able to find the attractione easily. By providing images to the user within the marker data and on the corrosponding list data the user is able to visually compare the image of the venue to that in real life.

The use concept and target market is for users primarily tourists to have this as a webpage on their mobile device so they can look at data in an easy and simple format, interact with the map live and see the attraction data in a simple format. However on the desktop the same information is extended in to list views. 

## Scope of work
### Project Goals
    1. A responsive website is available on all devices.
    2. The website should be easy to read for all users.
    3. The website should be one page that uses Javascript to update the page with information relevant to the buttons clicked.
    4. The website should compliment the colors of the Northumberland Flag (Pantone and HEX colors are detailed below).

### Deliverables
#### Default View (Home)
This view should consist of a map taking out 80% of the page, a Logo / Nav Bar at the top, and a footer at the bottom. The home view will also consist of an introductory / helper description which appears as an overlay to the map.
#### Content View (Map Sub Sections)
This view should consist of a map taking out 80% of the page, a Logo / Nav Bar at the top, and a footer at the bottom. The view should also include a right sidebar which is expandable and collapsable and displays the contents of the map in list form.

### Wireframes
#### Desktop
- [Home/Default View (no introduction)](/assets/images/wireframe/1-Homepage.png)
- [Home/Default View (with introduction overlay)](/assets/images/wireframe/3-Homepage-with-intro.png)
- [Map View (with sidebar)](/assets/images/wireframe/2-Map-with-sidebar.png)
#### Mobile
- [Home/Default View (no introduction)](/assets/images/wireframe/Mobile%20%201-Homepage.png)
- [Home/Default View (with introduction overlay)](/assets/images/wireframe/Mobile%20%203-Homepage-with-intro.png)
- [Map View](/assets/images/wireframe/Mobile%20%202-Map-with-sidebar.png)
#### Tablet
- [Home/Default View (no introduction)](/assets/images/wireframe/Tablet%20-%201-Homepage.png)
- [Home/Default View (with introduction overlay)](/assets/images/wireframe/Tablet%20-%203-Homepage-with-intro.png)
- [Map View (with sidebar)](/assets/images/wireframe/Tablet%20-%202-Map-with-sidebar.png)

### Finished Project Views
#### Desktop
- [Home](/assets/images/final-project/Home.png)
- [Nice Places (No Sidebar)](/assets/images/final-project/Nice%20Places%20(No%20Sidebar).png)
- [Hidden Gems (No Sidebar)](/assets/images/final-project/Hidden%20Gems%20(No%20Sidebar).png)
- [Places to stay (No Sidebar)](/assets/images/final-project/Places%20to%20Stay%20%20(No%20Sidebar).png)
- [Places to eat (No Sidebar)](/assets/images/final-project/Places%20to%20eat%20(No%20Sidebar).png)
- [Nice Places (With Sidebar)](/assets/images/final-project/Nice%20Places%20(Sidebar%20Open).png)
- [Hidden Gems (With Sidebar)](/assets/images/final-project/Hidden%20Gems%20(Sidebar%20Open).png)
- [Places to stay (With Sidebar)](/assets/images/final-project/Places%20to%20Stay%20%20(Sidebar%20Open).png)
- [Places to eat (With Sidebar)](/assets/images/final-project/Places%20to%20Eat%20%20(Sidebar%20Open).png)
#### Mobile
- [Home](/assets/images/final-project/Mobile%20-%20Home.png)
- [Nice Places](/assets/images/final-project/Mobile%20-%20Nice%20Places.png)
- [Hidden Gems](/assets/images/final-project/Mobile%20-%20Hidden%20Gems.png)
- [Places to stay](/assets/images/final-project/Mobile%20-%20Places%20to%20Stay.png)
- [Places to eat](/assets/images/final-project/Mobile%20-%20Places%20To%20Eat.png)
#### Tablet
- [Home](/assets/images/final-project/Tablet%20-%20Home.png)
- [Nice Places (No Sidebar)](/assets/images/final-project/Tablet%20-%20Nice%20Places%20(no%20Sidebar).png)
- [Hidden Gems (No Sidebar)](/assets/images/final-project/Tablet%20-%20Hidden%20Gems%20(no%20Sidebar).png)
- [Places to stay (No Sidebar)](/assets/images/final-project/Tablet%20-%20Places%20to%20Stay%20(no%20Sidebar).png)
- [Places to eat (No Sidebar)](/assets/images/final-project/Tablet%20-%20Places%20to%20eat%20(no%20Sidebar).png)
- [Nice Places (With Sidebar)](/assets/images/final-project/Tablet%20-%20Nice%20Places%20(sidebar).png)
- [Hidden Gems (With Sidebar)](/assets/images/final-project/Tablet%20-%20Hidden%20Gems%20(sidebar).png)
- [Places to stay (With Sidebar)](/assets/images/final-project/Tablet%20-%20Places%20to%20Stay%20(Sidebar).png)
- [Places to eat (With Sidebar)](/assets/images/final-project/Tablet%20-%20Places%20to%20eat%20(Sidebar).png)

### Finished Project URL
Available on GitPages at the following URL [https://djpotts21.github.io/Northumbrian-Beauty/](https://djpotts21.github.io/Northumbrian-Beauty/)

## Testing
### Javascript Built-in Testing
This app uses built-in testing by Jest. The test suite is located in the assets/js/_tests_ folder named script.test.js

This test script checks each array of data in the main script has data and is correctly formated to prevent future addtions to the array being incorrectly formated and as such returnin incorrect or inaccurate data to the user.

To run the test and deploy the site to the server environment, uncomment line 341 of the assets/js/script.js file which starts "module.exports..." then run "npm test" in your terminal window. 

Our results -  The npm test was run and the screenshots saved are located here > [/assets/images/test-results/npmtestresults.png](/assets/images/test-results/npmtestresults.png)


### Javascript External Testing
The javascript was tested using the validator service at beautifytools.com [https://beautifytools.com/javascript-validator.php](https://beautifytools.com/javascript-validator.php), the results show the errors which are from the Google provided code and I suspect it is being caused due to the imported scripts not being loaded. > Added to known bugs. The results in screenshot format are located here

### HTML External Testing
The html was tested using the validator service at w3.org [https://validator.w3.org/nu/#textarea](https://validator.w3.org/nu/#textarea) the results in screenshot format are located here > [/assets/images/test-results/htmlresults.png](/assets/images/test-results/htmlresults.png)

### CSS External Testing
The css was tested using the validator service at w3.org [https://jigsaw.w3.org/css-validator/#validate_by_input](https://jigsaw.w3.org/css-validator/#validate_by_input) the results in screenshot format are located here > [/assets/images/test-results/cssresults.png](/assets/images/test-results/cssresults.png)

## Authors

- [@djpotts21](https://www.github.com/djpotts21)


## Acknowledgements

 - Northumberland Flag Colour Pantone is from the Flag Institue [Link to page](https://www.flaginstitute.org/wp/flags/northumberland-flag/)
 - Pantone colors converted to HEX by [Color Beautify](https://codebeautify.org/pantone-to-hex-converter?utm_content=cmp-true)

### Location Information
#### Blurb / Description
All location blurbs/descriptions are snippets of text taken from each website linked to the location.

#### Images 
 - Northumberland Flag (Navbar Logo) is provided by British County Flags at the following URL[https://britishcountyflags.com/2013/07/11/northumberland-flag/](https://britishcountyflags.com/2013/07/11/northumberland-flag/)
 - Photo of Newbiggin Maritime Centre (Nice places, Location 1) is provided by Newbiggin Heritage Partnership at the following URL [https://d2f0ora2gkri0g.cloudfront.net/bkpam2155390_img_0200.jpg]( https://d2f0ora2gkri0g.cloudfront.net/bkpam2155390_img_0200.jpg)
 A photo of Woodhorn Museum (Nice places, Location 2) is provided by Art UK at the following URL [https://d3d00swyhr67nd.cloudfront.net/w800h800/DSC_2701-1024x683.jpg](https://d3d00swyhr67nd.cloudfront.net/w800h800/DSC_2701-1024x683.jpg)
  - Photo of Duridge Bay & Country Park (Nice places, Location 3) is provided by Visit Northumberland at the following URL [https://www.visitnorthumberland.com/VisitNorthumberland/media/VisitNorthumberland/Home/Explore/Destinations/Market%20Towns/Warkworth/warkworth-2023.jpg?ext=.jpg
](https://www.visitnorthumberland.com/VisitNorthumberland/media/VisitNorthumberland/Home/Explore/Destinations/Market%20Towns/Warkworth/warkworth-2023.jpg?ext=.jpg
)
 - Photo of Warkworth Castle (Nice places, Location 4) is provided by Visit Northumberland at the following URL [https://www.visitnorthumberland.com/VisitNorthumberland/media/VisitNorthumberland/Home/Explore/Destinations/Market%20Towns/Warkworth/warkworth-2023.jpg?ext=.jpg](https://www.visitnorthumberland.com/VisitNorthumberland/media/VisitNorthumberland/Home/Explore/Destinations/Market%20Towns/Warkworth/warkworth-2023.jpg?ext=.jpg)
- Photo of Alnwick Castle (Nice places, Location 5) is provided by Third Eye Traveller at the following URL [https://thirdeyetraveller.com/wp-content/uploads/NORTHUMBERLAND-14-of-18.jpg](https://thirdeyetraveller.com/wp-content/uploads/NORTHUMBERLAND-14-of-18.jpg)

- Photo of Northumberlandia, the Lady of the North (Hidden Gems, Location 1) is provided by Northumberlandia.com at the following URL [https://www.northumberlandia.com/wp-content/themes/northumberlandia/slider/nlandia_P9_front.jpg](https://www.northumberlandia.com/wp-content/themes/northumberlandia/slider/nlandia_P9_front.jpg)
A photo of Angel Of Northumberland (Hidden Gems, Location 2) is provided by fabulousnorth.com at the following URL [https://cdn.fabulousnorth.com/fabulous-north/place/20220410-114400-366aace5cf1.jpg?width=1320](https://cdn.fabulousnorth.com/fabulous-north/place/20220410-114400-366aace5cf1.jpg?width=1320)
 - Photo of Emily Wilding Davison Statue And Grave (Hidden Gems, Location 3) is provided by fabulousnorth.com at the following URL [https://cdn.fabulousnorth.com/fabulous-north/place/emily-wilding-davison-statue-and-grave.jpg?width=500&aspect_ratio=269:200&quality=85](https://cdn.fabulousnorth.com/fabulous-north/place/emily-wilding-davison-statue-and-grave.jpg?width=500&aspect_ratio=269:200&quality=85)
 - Photo of Percy Tenantry Column (Hidden Gems, Location 4) is provided by fabulousnorth.com at the following URL [https://cdn.fabulousnorth.com/fabulous-north/place/percy-tenantry-column-5c7fec30daa.jpg?width=500&aspect_ratio=269:200&quality=85](https://cdn.fabulousnorth.com/fabulous-north/place/percy-tenantry-column-5c7fec30daa.jpg?width=500&aspect_ratio=269:200&quality=85)
 A photo of Grace Darling Monument (Hidden Gems, Location 5) is provided by fabulousnorth.com at the following URL [https://cdn.fabulousnorth.com/fabulous-north/place/grace-darling-grave.jpg?width=500&aspect_ratio=269:200&quality=85] (https://cdn.fabulousnorth.com/fabulous-north/place/grace-darling-grave.jpg?width=500&aspect_ratio=269:200&quality=85)

 - Photo of Beautiful Town Centre Cottage, Hot Tub - Morpeth (Places to stay, Location 1) is provided by Airbnb.com at the following URL [https://a0.muscache.com/im/pictures/e1a488b2-0893-453f-aaff-eb007f6809c5.jpg?im_w=720](https://a0.muscache.com/im/pictures/e1a488b2-0893-453f-aaff-eb007f6809c5.jpg?im_w=720)
 - Photo of Off-grid woodland hide-away - Westhills Pod (Places to stay, Location 2) is provided by Airbnb.com at the following URL [https://a0.muscache.com/im/pictures/9ff5d626-06da-475a-87bc-e3efcf07d304.jpg?im_w=720](https://a0.muscache.com/im/pictures/9ff5d626-06da-475a-87bc-e3efcf07d304.jpg?im_w=720)
 - Photo of Beach Cottage (Places to stay, Location 3) is provided by Airbnb.com at the following URL [https://a0.muscache.com/im/pictures/7c3535bb-a942-40bf-8af8-f6d93494d0b6.jpg?im_w=720](https://a0.muscache.com/im/pictures/7c3535bb-a942-40bf-8af8-f6d93494d0b6.jpg?im_w=720)
 - Photo of The Byre. Cozy, eco-friendly barn camping. (Places to stay, Location 4) is provided by Airbnb.com at the following URL [https://a0.muscache.com/im/pictures/9989ecc9-a75c-45b7-96a7-0f64be10f8ef.jpg?im_w=1200](https://a0.muscache.com/im/pictures/9989ecc9-a75c-45b7-96a7-0f64be10f8ef.jpg?im_w=1200)
  - Photo of Deluxe Detached Cabin at Newton Hall (Places to stay, Location 5) is provided by Airbnb.com at the following URL [https://a0.muscache.com/im/pictures/miso/Hosting-767114813888508457/original/85752517-6c88-4f28-b572-c676236f39f0.jpeg?im_w=1200](https://a0.muscache.com/im/pictures/miso/Hosting-767114813888508457/original/85752517-6c88-4f28-b572-c676236f39f0.jpeg?im_w=1200)

 A photo of The Fish Shack (Places to eat, Location 1) is provided by Boathouse Food Group at the following URL [https://www.boathousefoodgroup.co.uk/wp-content/uploads/2017/10/fish-shack-01-1400x860.jpg](https://www.boathousefoodgroup.co.uk/wp-content/uploads/2017/10/fish-shack-01-1400x860.jpg)
 - Photo of Lollo Rosso Italia (Places to eat, Location 2) is provided by Lollo Rosso Italia at the following URL [https://lollorossoitalia.com/wp-content/uploads/lollorossostairs.jpg](https://lollorossoitalia.com/wp-content/uploads/lollorossostairs.jpg)
 - Photo of Little Mexico (Places to eat, Location 3) is provided by Loke.app https://littlemexico.loke.app/ at the following URL [https://assets-tidy.s3-ap-southeast-2.amazonaws.com/org/01F5ANHYE69KDY7D7SXSASPN4J/theme/Web-Banner_01FBGSEPJ8S1RAKACQXC3VHMFB.png](https://assets-tidy.s3-ap-southeast-2.amazonaws.com/org/01F5ANHYE69KDY7D7SXSASPN4J/theme/Web-Banner_01FBGSEPJ8S1RAKACQXC3VHMFB.png)
 A photo of The Pheasant Inn (Places to eat, Location 4) is provided by The Pheasant Inn at the following URL [https://www.thepheasantinn.com/assets/cache/images/header/pheasant_inn_northumberland_exterior_2-490x-96a.jpg](https://www.thepheasantinn.com/assets/cache/images/header/pheasant_inn_northumberland_exterior_2-490x-96a.jpg)
 - Photo of Ad Gefrin (Places to eat, Location 5) is provided by Ad Gefrin at the following URL [https://adgefrin.co.uk/image/crop/1679921745_3e46d06328ee3c4ac6b3.jpg/1800/1000](https://adgefrin.co.uk/image/crop/1679921745_3e46d06328ee3c4ac6b3.jpg/1800/1000)



## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Northumberland Flag (Red) | #DA291C | Pantone®: Red 485
| Northumberland Flag (Yellow)  | #FFD100 | Pantone®: Yellow 109
