$(function () {
  var position = new google.maps.LatLng(45.82117, 9.358737);

  var mapOptions = {
    center: position,
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    draggable: true,
    scrollwheel: false
  };

  var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

  var markerOptions = {
    animation: google.maps.Animation.DROP,
    flat: false,
    map: map,
    position: position,
    visible: true,
    title: 'Trizero'
  };

  var marker = new google.maps.Marker(markerOptions);
});