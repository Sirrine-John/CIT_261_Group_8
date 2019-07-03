//const fetch = require("node-fetch");

export function getJSON(url) {
  return fetch(url)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        //console.log(response.json());
        return response.json();
      }
    })
    .catch(function(error) {
      console.log(error);
    });
};


function myJSON(){
    let url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02';
    return myJSON(url);
};


// function showLocation(position) {
//     // var latitude = position.coords.latitude;
//     // var longitude = position.coords.longitude;
//     //console.log(position);
//     //alert("Latitude : " + latitude + " Longitude: " + longitude);
//     return position.coords;
//  }

 function errorHandler(err) {
    if(err.code == 1) {
       alert("Error: Access is denied!");
    } else if( err.code == 2) {
       alert("Error: Position is unavailable!");
    }
 }
    
 export function getLocation() {
    if(navigator.geolocation) {
       var options = {timeout:60000};
       return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
    } else {
       alert("Sorry, browser does not support geolocation!");
    }
 }