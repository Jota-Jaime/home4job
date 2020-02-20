function init() {
  var map = new google.maps.Map(document.getElementById("map-canvas"), {
    center: {
      lat: 40.4378698,
      lng: -3.8196207
    },
    zoom: 5
  });

  var searchBox = new google.maps.places.SearchBox(document.getElementById("pac-input"));
  // map.controls[google.maps.ControlPosition.TOP_CENTER].push(
  //   document.getElementById("pac-input")
  // );
  google.maps.event.addListener(searchBox, "places_changed", function() {
    searchBox.set("map", null);

    var places = searchBox.getPlaces();

    var bounds = new google.maps.LatLngBounds();
    var i, place;
    for (i = 0; (place = places[i]); i++) {
      (function(place) {
        var marker = new google.maps.Marker({
          position: place.geometry.location
        });

        let payload = {
          
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        debugger;

        axios.post("/rutadelform", payload);

        marker.bindTo("map", searchBox, "map");
        google.maps.event.addListener(marker, "map_changed", function() {
          if (!this.getMap()) {
            this.unbindAll();
          }
        });
        bounds.extend(place.geometry.location);
      })(place);
    }
    map.fitBounds(bounds);
    searchBox.set("map", map);
    map.setZoom(Math.min(map.getZoom(), 16));
  });
}
google.maps.event.addDomListener(window, "load", init);