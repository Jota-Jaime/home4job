var defaultBounds = new google.maps.LatLngBounds(
  new google.maps.LatLng(42.2995499,3.4870883),
  new google.maps.LatLng(35.1262063,3.2304809),
  new google.maps.LatLng(34.9464193,-10.52441),
  new google.maps.LatLng(44.0233722,-14.30605));

var input = document.querySelector('#searchTextField');

var searchBox = new google.maps.places.SearchBox(input, {
  bounds: defaultBounds
});