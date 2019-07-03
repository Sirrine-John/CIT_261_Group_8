import { getJSON, getLocation } from './utilities.js';
const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-06-29&endtime=2019-06-30';

async function formatURL(){
    //return await getLocation();
    await getLocation()
    .then(data => {
        console.log(data.coords.latitude+","+data.coords.longitude);
        let newURL = baseUrl
            +'&latitude='
            +data.coords.latitude
            +'&longitude='
            +data.coords.longitude
            +'&maxradiuskm=500';
            console.log(newURL);
    });
}

//formatURL();