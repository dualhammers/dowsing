//Parts of code in this file copied from: https://switch2osm.org/using-tiles/getting-started-with-leaflet/

var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];


//Load GeoJSON files
var mjrAirUs = new L.GeoJSON.AJAX("geojson/majorAirportsUS.geojson");

function initmap() {
	// set up the map
	map = new L.Map('mapid');

	// create the tile layer with correct attribution
	var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='View code on <a href="https/github.com/dualhammers/dowsing">GitHub</a> | Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});		

	// start the map in Portland, Oregon, USA
	map.setView(new L.LatLng(45.5234515,-122.6762071),9);
	map.addLayer(osm);
}

