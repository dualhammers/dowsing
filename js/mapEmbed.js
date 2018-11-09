

var map;

function initMap(){
	// set up the map
	map = new L.Map('map');

	// create the tile layer with correct attribution
	var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='View code on <a href="https/github.com/dualhammers/dowsing">GitHub</a> | Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {maxNativeZoom: 20, attribution: osmAttrib});		

	// start the map in Portland, Oregon, USA
	map.setView(new L.LatLng(45.5234515,-122.6762071),9);
	map.addLayer(osm);

	//Load GeoJSON files and add to map
	var mjrAirUs = new L.GeoJSON.AJAX("geojson/majorAirportsUS.geojson", 
	{pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, {
				radius: 8,
				fillColor: "#ff7800",
				color: "#000",
				weight: 1,
				opacity: 1,
				fillOpacity: 0.8
			})}
		}).addTo(map);
}