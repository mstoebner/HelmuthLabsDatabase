var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];


//INITIALIZE THE MAP
function initmap() {
	// set up the map
	// initialize the map
  var map = L.map('map').setView([37.7, -122.2], 2);

  // load a tile layer

  L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}', {
  type: 'map',
  ext: 'jpg',
  attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: '1234', 
  minZoom:2,
  maxZoom:17
  }).addTo(map);


  initMarkers(L, map);


 var hopkins = L.marker([36.62193333, -121.9053167]).addTo(map);
 hopkins.on('click', hopkins.bindPopup("<b>Location</b><br>I am a popup.").openPopup());

};


