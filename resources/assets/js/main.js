"use strict";

// Outdated Browser Popup
outdatedBrowser()

// Smooth Scrolling with the navbar
var $root = $('html, body');
$('.navbar li a').click(function() {
	var href = this.hash;
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
		$("#bs-example-navbar-collapse-1").collapse('hide')
    });
    return false;
});

// Countdown to the Wedding Day
var theBigDay = new Date('September 2, 2016 17:00:00');
var cdTemplate = _.template(document.getElementById('countdown-template').innerHTML);
var cd = document.getElementById('countdown');

countdown(theBigDay, function(ts) {
    cd.innerHTML = cdTemplate(ts);
});

$('a.lightbox').nivoLightbox();

// Leaflet Map, disable all interaction
var map = new L.map('map', {
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

document.getElementById('map').style.cursor='default';

var layer = new L.StamenTileLayer("toner", {
	detectRetina: true
});

map.addLayer(layer);

var heartIcon = L.icon({
    iconUrl: 'img/heart.png',
    //shadowUrl: "img/heart-shadow.png",
    iconSize: [50, 50],
    //shadowSize: [41, 41],
    iconAnchor: [19, 41],
    shadowAnchor: [12, 41],
    popupAnchor: [0, -35]
});

L.marker([39.8636752, -74.9888584], {icon: heartIcon}).addTo(map)
.bindPopup("<strong>Woodcrest Country Club</strong><br>300 E Evesham Rd<br>Cherry Hill, NJ 08003");