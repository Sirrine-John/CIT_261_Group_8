  // Hike View handler
  export default class HikesView {
    constructor(listElementId) {
        // will need this
        this.imgBasePath = '//byui-cit.github.io/cit261/examples/';
        
    }
  renderHikeList(hikeList, listElement) {
    // loop through our list of hikes building out the appropriate HTML for each and append it to the listElement
    let pageList = document.getElementById(listElement);
    hikeList.forEach(element => {
       let list = document.createElement("ul");
       list.setAttribute("class","ulHeader");
       //let li_name = document.createElement("li");
       let li_imgSrc = document.createElement("li");
       let li_imgAlt = document.createElement("li");
       let li_distance = document.createElement("li");
       let li_difficulty = document.createElement("li");
       let li_description = document.createElement("li");
       let li_directions = document.createElement("li");

        let name = document.createTextNode(element.name);
        let imgSrc = document.createTextNode(element.imgSrc);
        let imgAlt = document.createTextNode(element.imgAlt);
        let distance = document.createTextNode(element.distance);
        let difficulty = document.createTextNode(element.difficulty);
        let description = document.createTextNode(element.description);
        let directions = document.createTextNode(element.directions);

       //li_name.appendChild(name);
       li_imgSrc.appendChild(imgSrc);
       li_imgAlt.appendChild(imgAlt);
       li_distance.appendChild(distance);
       li_difficulty.appendChild(difficulty);
       li_description.appendChild(description);
       li_directions.appendChild(directions);

       list.appendChild(name);
       list.appendChild(li_imgSrc);
       list.appendChild(li_imgAlt);
       list.appendChild(li_distance);
       list.appendChild(li_difficulty);
       list.appendChild(li_description);
       list.appendChild(li_directions);

       pageList.appendChild(list);
    });
  }
  renderOneHikeLight(hike) {
    // this method will be used to create the list of hikes with less detail: name, image, distance, difficulty 
  }
  renderOneHikeFull(hike, parentElement) {
    // this method will be used to one hike with full detail...you will need this for the stretch goal! 
  }
}
            