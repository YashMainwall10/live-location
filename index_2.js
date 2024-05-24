// This example creates an interactive map which constructs a polyline based on
// user clicks. Note that the polyline only appears once its path property
// contains two LatLng coordinates.
let poly;
let map;
let pos ;

const image = "https://img.icons8.com/emoji/48/airplane-emoji.png";

let i = 0 ;
let arr = [
    {"lat": 19.0896, "lng": 72.8656}, // Starting point (Mumbai)
    {"lat": 19.1396, "lng": 72.8956},
    {"lat": 19.1896, "lng": 72.9256},
    {"lat": 19.2396, "lng": 72.9556},
    {"lat": 19.2896, "lng": 72.9856},
    {"lat": 19.3396, "lng": 73.0156},
    {"lat": 19.3896, "lng": 73.0456},
    {"lat": 19.4396, "lng": 73.0756},
    {"lat": 19.4896, "lng": 73.1056},
    {"lat": 19.5396, "lng": 73.1356},
    {"lat": 19.5896, "lng": 73.1656},
    {"lat": 19.6396, "lng": 73.1956},
    {"lat": 19.6896, "lng": 73.2256},
    {"lat": 19.7396, "lng": 73.2556},
    {"lat": 19.7896, "lng": 73.2856},
    {"lat": 19.8396, "lng": 73.3156},
    {"lat": 19.8896, "lng": 73.3456},
    {"lat": 19.9396, "lng": 73.3756},
    {"lat": 19.9896, "lng": 73.4056},
    {"lat": 20.0396, "lng": 73.4356}
]


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: {"lat": 19.0896, "lng": 72.8656}, // Center the map on Chicago, USA.
  });
  // poly = new google.maps.Polyline({
  //   strokeColor: "#000000",
  //   strokeOpacity: 1.0,
  //   strokeWeight: 3,
  //   geodesic: true,
  // });
  // poly.setMap(map);
  // Add a listener for the click event
//   map.addListener("click", addLatLng);
  addLatLng()  ;
}
let check  = true;
// Handles click events on a map, and adds a new point to the Polyline.set
setInterval(function addLatLng() {
    // const path = poly.getPath();
    // // Because path is an MVCArray, we can simply append a new coordinate
    // // and it will automatically appear.
    // path.push(arr[i]);
    // path.setMap(map) ;
    // Add a new marker at the new plotted point on the polyline.
    // setMapOnAll(null);


        navigator.geolocation.getCurrentPosition(
            (position) => {
                pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                if(check){
                    map.setCenter(pos);
                    check = false ;
                }
        })
            var marker =  new google.maps.Marker({
            position: pos,
            title: "#" ,
            map: map,
            icon: image,
            });
            map.setCenter(pos);
            i++ ;
            marker.setMap(map) ;
            let fun = setTimeout(()=>{
                marker.setMap(null) ;
            },1999) ;
            fun() ;
        }, 2000) ;


window.initMap = initMap;