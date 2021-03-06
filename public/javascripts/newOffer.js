let payload;

function init() {
  var map = new google.maps.Map(document.getElementById("map-canvas"), {
    center: {
      lat: 40.4378698,
      lng: -3.8196207
    },
    zoom: 5
  });

  var searchBox = new google.maps.places.SearchBox(document.getElementById("pac-input"));

  google.maps.event.addListener(searchBox, "places_changed", function () {
    searchBox.set("map", null);

    var places = searchBox.getPlaces();

    var bounds = new google.maps.LatLngBounds();
    var i, place;
    for (i = 0;
      (place = places[i]); i++) {
      (function (place) {
        var marker = new google.maps.Marker({
          position: place.geometry.location,
          animation: google.maps.Animation.DROP
        });

        payload = {
          imgPath: document.querySelector(".photoed"),
          city: document.querySelector('.citySelector').value,
          job: document.querySelector('.jobSelector').value,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };

        // payload.append("image", imgPath.files[0])

        // console.log(payload)

        marker.bindTo("map", searchBox, "map");
        google.maps.event.addListener(marker, "map_changed", function () {
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

document.querySelector('.submit').addEventListener('click', function () {
  console.log(payload)
  debugger
  axios.post("/offer/newoffer", payload);
})

