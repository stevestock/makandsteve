// import 'public/index.html';
import 'outdated-browser/outdatedbrowser/outdatedbrowser.min.css';
import 'leaflet/dist/leaflet.css';
import '../sass/makandsteve.scss';

import _ from 'lodash';
import $ from 'jquery';
import outdatedBrowser from 'outdated-browser';
import L from 'leaflet-providers';
if (process.env.NODE_ENV !== 'production') {
  require('file-loader?name=[name].[ext]&outputPath=js/!leaflet/dist/leaflet-src.map');
}
import countdown from 'countdown';
import retina from 'retinajs';
import 'bootstrap-sass';

$(document).ready(function () {
  // retinajs
  window.addEventListener('load', retina);

  // Outdated Browser Popup
  outdatedBrowser();

  // Smooth Scrolling with the navbar
  // http://stackoverflow.com/a/14805098
  var $root = $('html, body');
  $('.navbar li a').click(function () {
    var href = this.hash;
    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, function () {
      window.location.hash = href;
      $('#bs-example-navbar-collapse-1').collapse('hide');
    });
    return false;
  });

  // Countdown to the Wedding Day
  var theBigDay = new Date('September 2, 2016 17:00:00');
  var cdTemplate = _.template(document.getElementById('countdown-template').innerHTML);
  var cd = document.getElementById('countdown');

  countdown(theBigDay, function (ts) {
    cd.innerHTML = cdTemplate(ts);
  });

  // $('a.lightbox').nivoLightbox();

  // Leaflet Map, disable all interaction
  var map = L.map('map', {
    center: [39.8616752, -74.9888584],
    zoom: 14,
    zoomControl: false,
    attributionControl: false,
    dragging: false,
    touchZoom: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    keyboard: false,
    tap: false
  });

  document.getElementById('map').style.cursor = 'default';

  // add Stamen Watercolor to map.
  L.tileLayer.provider('Stamen.Toner', {
    detectRetina: true
  }).addTo(map);

  var heartIcon = L.icon({
    iconUrl: 'img/heart.png',
    // shadowUrl: "img/heart-shadow.png",
    iconSize: [50, 50],
    // shadowSize: [41, 41],
    iconAnchor: [19, 41],
    shadowAnchor: [12, 41],
    popupAnchor: [0, -35]
  });

  L.marker([39.8636752, -74.9888584], {icon: heartIcon}).addTo(map)
  .bindPopup('<strong>Woodcrest Country Club</strong><br>300 E Evesham Rd<br>Cherry Hill, NJ 08003');
});
