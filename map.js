var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];


//INITIALIZE THE MAP
function initmap() {
	// set up the map
	// initialize the map
  var map = L.map('map').setView([42.35, 71.08], 2);

  // load a tile layer
  L.tileLayer('http://{s}.{base}.maps.cit.api.here.com/maptile/2.1/{type}/{mapID}/normal.day.grey/{z}/{x}/{y}/{size}/{format}?app_id={app_id}&app_code={app_code}&lg={language}', 
  {
    type: 'map',
    ext: 'jpg',
    attribution: 'Map &copy; 1987-2014 <a href="http://developer.here.com">HERE</a>',
    subdomains: '1234',
    mapID: 'newest',
    app_id: 'Y8m9dK2brESDPGJPdrvs',
    app_code: 'dq2MYIvjAotR8tHvY8Q_Dg',
    base: 'base',
    maxZoom: 17,
    minZoom: 2,
    type: 'maptile',
    language: 'eng',
    format: 'png8',
    size: '256'
  }).addTo(map);

  // initMarkers();


 var hopkins = L.marker([36.62193333, -121.9053167]).addTo(map);
 hopkins.on('click', hopkins.bindPopup("<b>Location</b><br>I am a popup.").openPopup());

};


