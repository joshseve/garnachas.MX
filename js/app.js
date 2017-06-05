function initMap() {
  var lindavista = {lat: 19.5107303, lng: -99.139637};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: lindavista
  });
  var marker = new google.maps.Marker({
    position: lindavista,
    map: map
  });
}
