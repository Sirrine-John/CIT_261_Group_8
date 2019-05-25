  // Hike View handler
  export default class HikesView {
    constructor(listElementId) {
        // will need this
        this.imgBasePath = "./";
        
    }
  renderHikeList(hikeList, listElement) {
    // loop through our list of hikes building out the appropriate HTML for each and append it to the listElement
    let pageList = document.getElementById(listElement);
       let table = document.createElement("table")
       let tbody = document.createElement("tbody");
    hikeList.forEach(element => {

      let tr = document.createElement("tr");
      let tdPic = document.createElement("td");
      let tdData = document.createElement("td");
      let pic_imgSrc = document.createElement("img")
       let list = document.createElement("ul");
       list.setAttribute("class","ulHeader");
       let li_distance = document.createElement("li");
       let li_difficulty = document.createElement("li");
       let li_description = document.createElement("li");
       let li_directions = document.createElement("li");

      pic_imgSrc.setAttribute("src",this.imgBasePath+element.imgSrc);
      pic_imgSrc.setAttribute("alt",element.imgAlt);
      pic_imgSrc.setAttribute("style","width: 150px;");

        let name = document.createTextNode(element.name);
        let distance = document.createTextNode(element.distance);
        let difficulty = document.createTextNode(element.difficulty);
        let description = document.createTextNode(element.description);
        let directions = document.createTextNode(element.directions);

       li_distance.appendChild(distance);
       li_difficulty.appendChild(difficulty);
       li_description.appendChild(description);
       li_directions.appendChild(directions);

       tdPic.appendChild(pic_imgSrc);
       list.appendChild(name);
       list.appendChild(li_distance);
       list.appendChild(li_difficulty);
       list.appendChild(li_description);
       list.appendChild(li_directions);
       tdData.appendChild(list);

       tr.appendChild(tdPic);
       tr.appendChild(tdData);
       tbody.appendChild(tr);
       table.appendChild(tbody);

       pageList.appendChild(table);
    });
  }
  renderOneHikeLight(hike) {
    // this method will be used to create the list of hikes with less detail: name, image, distance, difficulty 
    let list = document.createElement("ul");
       list.setAttribute("class","ulHeader");
       //let li_name = document.createElement("li");
       let li_imgSrc = document.createElement("li");
       let li_imgAlt = document.createElement("li");
       let li_distance = document.createElement("li");
       let li_difficulty = document.createElement("li");
       let li_description = document.createElement("li");
       let li_directions = document.createElement("li");

        let name = document.createTextNode(hike.name);
        let imgSrc = document.createTextNode(hike.imgSrc);
        let imgAlt = document.createTextNode(hike.imgAlt);
        let distance = document.createTextNode(hike.distance);
        let difficulty = document.createTextNode(hike.difficulty);
        let description = document.createTextNode(hike.description);
        let directions = document.createTextNode(hike.directions);

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

    let page = document.getElementById("hikeList");
    page.innerHTML="<ul class:ulHeader></ul>";
    page.appendChild(list);
  }
  renderOneHikeFull(hike, parentElement) {
    // this method will be used to one hike with full detail...you will need this for the stretch goal! 
  }
}
            