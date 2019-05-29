import HikeModel from './HikeModel.js';
import HikesView from './HikesView.js';

// Hike controller
export default class HikesController {
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId); 
    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView(parentId);
    this.scrollStart;
    this.scrollStop;
    this.showHikeList();
  }
  
  showHikeList() {
    //  this will get called each time we need to display our full hike list. It should grab the list of hikes from the Model, and then send them to the view.
    this.hikesView.renderHikeList(this.hikeModel.getAllHikes(),"hikeList");
    this.addHikeListener();
  }
  returnHikeList() {
    //  this will get called each time we need to display our full hike list. It should grab the list of hikes from the Model, and then send them to the view.
    return this.hikeModel.getAllHikes();
  }
  addScrollHandler(handle){
    this.scrollStart = handle.target.scrollTop;
  }
  addHikeHandler(handle){
    let tempCont = new HikesController;
    this.scrollStop = handle.target.scrollTop;
    if (this.scrollStart === this.scrollStop){
      tempCont.showOneHike(handle.target.parentElement.id);
    }
  }
  resetHandle(){
    let tempCont = new HikesController;
  }

  showOneHike(hikeName) {
    // use this when you need to show just one hike...with full details
    this.hikesView.renderOneHikeFull(this.hikeModel.getHikeByName(hikeName),"hikeList");
    let but_handel = document.getElementById("resetPage");
    but_handel.addEventListener("touchend",this.resetHandle);
  }
  addHikeListener() {
    // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
    let hikes = this.returnHikeList();
    hikes.forEach(element => {
      document.getElementById(element.name).addEventListener("touchend",this.addHikeHandler);
    }); 
    hikes.forEach(element => {
      document.getElementById(element.name).addEventListener("touchstart",this.addScrollHandler);
    });
  };
};