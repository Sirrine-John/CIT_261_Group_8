  // Hike View handler
  export default class HikesView {
    constructor(listElementId) {
        // will need this
        this.imgBasePath = "./";
        
    }
  renderHikeList(hikeList, listElement) {
    // loop through our list of hikes building out the appropriate HTML for each and append it to the listElement
    let pageTable = document.getElementById(listElement);
    let subTitle = document.getElementById("subtitle");
    subTitle.innerHTML="Touch image to see hike details";
    pageTable.innerHTML = "";
    let tbody = document.createElement("tbody");
    hikeList.forEach(element => {

      let tr = document.createElement("tr");
      let tdPic = document.createElement("td");
      let tdData = document.createElement("td");
      let pic_imgSrc = document.createElement("img")
      let list = document.createElement("ul");
      let sublist = document.createElement("ul");
      let li_distance = document.createElement("li");
      let li_difficulty = document.createElement("li");
      let li_name = document.createElement("li");

      pic_imgSrc.setAttribute("src",this.imgBasePath+element.imgSrc);
      pic_imgSrc.setAttribute("alt",element.imgAlt);
      tdPic.setAttribute("id",element.name);
      li_name.setAttribute("class","ulHeader");

      let name = document.createTextNode(element.name);
      let distance = document.createTextNode(element.distance);
      let difficulty = document.createTextNode(element.difficulty);

      li_distance.appendChild(distance);
      li_difficulty.appendChild(difficulty);
      li_name.appendChild(name);       

      tdPic.appendChild(pic_imgSrc);
      sublist.appendChild(li_distance);
      sublist.appendChild(li_difficulty);
      list.appendChild(li_name);
      list.appendChild(sublist);
      tdData.appendChild(list);

      tr.appendChild(tdPic);
      tr.appendChild(tdData);
      tbody.appendChild(tr);

      pageTable.appendChild(tbody);
    });
  }
  renderOneHikeLight(hike) {
    // this method will be used to create the list of hikes with less detail: name, image, distance, difficulty 

  };
  renderOneHikeFull(element, listElement) {
    // this method will be used to one hike with full detail...you will need this for the stretch goal! 
    let section = document.getElementById(listElement);
    let subTitle = document.getElementById("subtitle");
    subTitle.innerHTML=" ";
    section.innerHTML = "";
    let pageTable = document.getElementById(listElement);
    let tbody = document.createElement("tbody");
    let tr = document.createElement("tr");
    let tr2 = document.createElement("tr");
    let tr3 = document.createElement("tr");
    let tdPic = document.createElement("td");
    let tdData = document.createElement("td");
    let pic_imgSrc = document.createElement("img")
     let list = document.createElement("ul");
     let sublist = document.createElement("ul");
     let li_distance = document.createElement("li");
     let li_difficulty = document.createElement("li");
     let li_name = document.createElement("li");
     let li_description = document.createElement("li");
     let li_directions = document.createElement("li");
     let back_but = document.createElement("button");
     
    pic_imgSrc.setAttribute("src",this.imgBasePath+element.imgSrc);
    pic_imgSrc.setAttribute("alt",element.imgAlt);
    tdPic.setAttribute("id",element.name);
    back_but.setAttribute("id","resetPage");
    li_name.setAttribute("class","ulHeader");

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

     pageTable.appendChild(tbody);
  }
};
