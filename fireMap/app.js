console.log("hello friend");

require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "dojo/domReady!"
], function(Map, MapView, FeatureLayer){

  var map = new Map({
    basemap: "hybrid"
  });
  var view = new MapView({
    container: "viewDiv",  // Reference to the scene div created in step 5
    map: map,  // Reference to the map object created before the scene
    zoom: 5,  // Sets zoom level based on level of detail (LOD)
    center: [-97.44, 36.16]  // Sets center point of view using longitude,latitude
  });
  var fire = new FeatureLayer({
    url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/2015_06_26_active_fires_USA_contiguous_and_Hawaii_24h/FeatureServer/0"
  });
  map.add(fire);
});


