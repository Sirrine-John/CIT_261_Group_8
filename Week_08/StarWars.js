let previousUrl;
let nextUrl;
let selector = "People";
let pages = 0;
function fetchList(page){
    fetchUrl = page
    fetch(fetchUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        //console.log(JSON.stringify(myJson));
        let listSection = document.getElementById("curentList");
        let peopleList = document.createElement("table");
        let pagesDiv = document.getElementById("pages")
        let results = myJson.results;
        results.forEach(element => {
            let row = document.createElement("tr");
            let item = document.createElement("td");
            let name = document.createTextNode(element.name);
            item.appendChild(name);
            row.appendChild(item);
            peopleList.appendChild(row);
        });
        if (myJson.next == null){nextUrl = fetchUrl;}
        else{nextUrl = myJson.next;};
        if (myJson.previous == null){previousUrl = fetchUrl;}
        else{previousUrl = myJson.previous;};
        pages = Math.ceil(myJson.count/10);
        pagesDiv.innerHTML = pages.toString()+" Pages, Select one:"
        listSection.innerHTML = "";
        listSection.appendChild(peopleList);
      });
};

function Ships(){
    selector = "Ships";
    document.getElementById("people").className ="inactive";
    document.getElementById("ships").className = "active";
    fetchList("https://swapi.co/api/starships");
}
function People(){
    selector = "People";
    document.getElementById("people").className = "active";
    document.getElementById("ships").className = "inactive";
    fetchList("https://swapi.co/api/people");
}

function Previous(){
    console.log(previousUrl);
    fetchList(previousUrl);
}

function Next(){
    console.log(nextUrl);
    fetchList(nextUrl);
}

const inputEnter = document.getElementById("pageInput");
inputEnter.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        if (selector == "People"){fetchList("https://swapi.co/api/people/?page="+inputEnter.value)}
        else{fetchList("https://swapi.co/api/starships/?page="+inputEnter.value)};
    inputEnter.value = "";
    }
});