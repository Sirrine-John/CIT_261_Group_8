import { getJSON } from './utilities.js';
// Quake Model
export default class Quake {
  constructor() {
    this.baseUrl =
      'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-06-29&endtime=2019-06-29';
    // store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
    this._quakes = [];
  }

  async getEarthQuakesByRadius(position, radius = 500) {
    // use the getJSON function and the position provided to build out the correct URL to get the data we need.  Store it into this._quakes, then return it
    newURL = this.baseUrl
            +'&latitude='
            +position.coords.latitude
            +'&longitude='
            +position.coords.longitude
            +'&maxradiuskm='
            +radius.toString();
    await getJSON(newURL)
    .then(function(jsonData) {
        this._quakes = jsonData;
        console.log(this._quakes);
        return this._quakes;})
    .catch(function(error) {
        alert(error);
      });
    
  }
  getQuakeById(id) {
    // filter this._quakes for the record identified by id and return it
    
    return ;
  }
}