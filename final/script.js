'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // variable mymap, add coordinates (long/lat) and zoom amount
    var mymap = L.map('mapid').setView([38.538597, -121.75321], 14);

    // map box streets tile layer
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic21nYW56ZXIiLCJhIjoiY2l6ZWk1ZjZxMjU3MDMzcXBvemZsdmJnbyJ9.6m8Vaso24T-LH_i6Oi-y2w', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'your.mapbox.project.id',
        accessToken: 'your.mapbox.public.access.token'
    }).addTo(mymap);

    //marker
    var marker = L.marker([38.538597, -121.75321]).addTo(mymap);

    // use openOn instead of addTo because it handles automatic closing of a previously opened popup when opening a new one which is good for usability
    var popup = L.popup()
        .setLatLng([38.538597, -121.75321])
        .setContent("You are at the Silo.</br>Click on a profile to check it out!")
        .openOn(mymap);

    // tag pop up on click
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(mymap);
    }

    mymap.on('click', onMapClick);

    var profile1 = L.icon({
        iconUrl: 'images/profile1.png',

        iconSize: [100, 60], // icon size
        iconAnchor: [20, 17], // point of the icon which will correspond to marker's location
        popupAnchor: [9, -20] // point from which the popup should open relative to the iconAnchor
    });

    var profile2 = L.icon({
        iconUrl: 'images/profile2.png',

        iconSize: [60, 60],
        iconAnchor: [20, 17],
        popupAnchor: [9, -20]
    });

    var profile3 = L.icon({
        iconUrl: 'images/profile3.png',

        iconSize: [100, 50],
        iconAnchor: [20, 17],
        popupAnchor: [9, -20]
    });

    var profile4 = L.icon({
        iconUrl: 'images/profile4.png',

        iconSize: [60, 60],
        iconAnchor: [20, 17],
        popupAnchor: [9, -20]
    });

    var profile5 = L.icon({
        iconUrl: 'images/profile5.png',

        iconSize: [60, 60],
        iconAnchor: [20, 17],
        popupAnchor: [9, -20]
    });

    var profile6 = L.icon({
        iconUrl: 'images/profile6.png',

        iconSize: [60, 60],
        iconAnchor: [20, 17],
        popupAnchor: [9, -20]
    });

    var profile7 = L.icon({
        iconUrl: 'images/profile7.png',

        iconSize: [60, 60],
        iconAnchor: [20, 17],
        popupAnchor: [9, -20]
    });


    L.marker([38.5344, -121.7490], {
        icon: profile1
    }).addTo(mymap).bindPopup("ASUCD Pantry <br> Location: Freeborn Hall <br> Times: TH: 10:00 - 17:00 <br> F: 10:00 - 13:00");


    L.marker([38.542945, -121.749921], {
        icon: profile2
    }).addTo(mymap).bindPopup("Fruits & Veggies Up! <br> Location: Memorial Union <br> Times: T & W: 11:00 - 12:30");


    L.marker([38.534583, -121.754092], {
        icon: profile3
    }).addTo(mymap).bindPopup("UC CalFresh <br> Location: 1103 Meyer Hall");


    L.marker([38.555406, -121.748265], {
        icon: profile4
    }).addTo(mymap).bindPopup("St. James Catholic Church <br> 1275 B ST");


    L.marker([38.554867, -121.741555], {
        icon: profile5
    }).addTo(mymap).bindPopup("Davis Community Meals <br> Location: 1111 H ST <br> Times: Everyday 6:00 - 18:00");


    L.marker([38.552962, -121.726572], {
        icon: profile6
    }).addTo(mymap).bindPopup("Pole Line Road Baptist Church <br> Location: 770 Pole Line Rd <br> Times: TH: 9:00 - 11:00 <br> W: 10:30 - Supplies last");


    L.marker([38.549833, -121.734955], {
        icon: profile7
    }).addTo(mymap).bindPopup("Yolo County Food Bank <br> Location: Davis Korean Church (603 L ST)<br> Times: F: 13:00 - 14:00");



});


var modal1 = document.getElementById('modal1');

// Get the button that opens the modal
var btn1 = document.getElementById("btn1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

var modal2 = document.getElementById('modal2');

// Get the button that opens the modal
var btn2 = document.getElementById("btn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

// Get the modal
var modal3 = document.getElementById('modal3');

// Get the button that opens the modal
var btn3 = document.getElementById("btn3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on the button, open the modal
btn3.onclick = function() {
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}
