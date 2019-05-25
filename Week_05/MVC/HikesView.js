  // Hike View handler
  export default class HikesView {
    constructor(listElementId) {
        // will need this
        this.imgBasePath = "./";
        
    }
  renderHikeList(hikeList, listElement) {
    // loop through our list of hikes building out the appropriate HTML for each and append it to the listElement
    let pageList = document.getElementById(listElement);
    pageList.innerHTML = "";
       let table = document.createElement("table")
       let tbody = document.createElement("tbody");
    hikeList.forEach(element => {

      let tr = document.createElement("tr");
      let tdPic = document.createElement("td");
      let tdData = document.createElement("td");
      let pic_imgSrc = document.createElement("img")
       let list = document.createElement("ul");
       let sublist = document.createElement("ul");
       list.setAttribute("class","ulHeader");
       let li_distance = document.createElement("li");
       let li_difficulty = document.createElement("li");
       let li_name = document.createElement("li");
       //let li_description = document.createElement("li");
       //let li_directions = document.createElement("li");

      pic_imgSrc.setAttribute("src",this.imgBasePath+element.imgSrc);
      pic_imgSrc.setAttribute("alt",element.imgAlt);
      pic_imgSrc.setAttribute("style","width: 150px;");
      tdPic.setAttribute("id",element.name);

        let name = document.createTextNode(element.name);
        let distance = document.createTextNode(element.distance);
        let difficulty = document.createTextNode(element.difficulty);
        //let description = document.createTextNode(element.description);
        //let directions = document.createTextNode(element.directions);

       li_distance.appendChild(distance);
       li_difficulty.appendChild(difficulty);
       li_name.appendChild(name);
       //li_description.appendChild(description);
       //li_directions.appendChild(directions);
       

       tdPic.appendChild(pic_imgSrc);
       sublist.appendChild(li_distance);
       sublist.appendChild(li_difficulty);
       list.appendChild(li_name);
       list.appendChild(sublist);
       //list.appendChild(li_description);
       //list.appendChild(li_directions);
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

  };
  renderOneHikeFull(element, listElement) {
    // this method will be used to one hike with full detail...you will need this for the stretch goal! 
    let section = document.getElementById(listElement);
    section.innerHTML = "";
    let pageList = document.getElementById(listElement);
    let table = document.createElement("table")
    let tbody = document.createElement("tbody");
    let tr = document.createElement("tr");
    let tr2 = document.createElement("tr");
    let tr3 = document.createElement("tr");
    let tdPic = document.createElement("td");
    let tdData = document.createElement("td");
    let pic_imgSrc = document.createElement("img")
     let list = document.createElement("ul");
     let sublist = document.createElement("ul");
     list.setAttribute("class","ulHeader");
     let li_distance = document.createElement("li");
     let li_difficulty = document.createElement("li");
     let li_name = document.createElement("li");
     let li_description = document.createElement("li");
     let li_directions = document.createElement("li");
     let back_but = document.createElement("button");
     
    pic_imgSrc.setAttribute("src",this.imgBasePath+element.imgSrc);
    pic_imgSrc.setAttribute("alt",element.imgAlt);
    pic_imgSrc.setAttribute("style","width: 100%;");
    tdPic.setAttribute("id",element.name);
    back_but.setAttribute("id","resetPage");

      let name = document.createTextNode(element.name);
      let distance = document.createTextNode(element.distance);
      let difficulty = document.createTextNode(element.difficulty);
      let description = document.createTextNode(element.description);
      let directions = document.createTextNode(element.directions);
      let buttonText = document.createTextNode("Back");

     li_distance.appendChild(distance);
     li_difficulty.appendChild(difficulty);
     li_name.appendChild(name);
     li_description.appendChild(description);
     li_directions.appendChild(directions);
     back_but.appendChild(buttonText);

     tdPic.appendChild(pic_imgSrc);
     sublist.appendChild(li_distance);
     sublist.appendChild(li_difficulty);
     sublist.appendChild(li_description);
     sublist.appendChild(li_directions);
     list.appendChild(li_name);
     list.appendChild(sublist);
     tdData.appendChild(list);

     tr.appendChild(tdPic);
     tr2.appendChild(tdData);
     tr3.appendChild(back_but);
     tbody.appendChild(tr);
     tbody.appendChild(tr2);
     tbody.appendChild(tr3);
     table.appendChild(tbody);

     pageList.appendChild(table);
  }
};
