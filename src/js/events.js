// All variable Elements
import * as el from "./elements.js";
// Functions needed for Events
import {removeAllTransformWrap} from "./transformUI"
import { addTransformWrap } from "./transformUI";
import { removeTransformWrap } from "./transformUI";
import {weekFahrin} from "./format.js";
import { currentFahrin } from "./format.js";
// list module Events List
export {
  backToStartEvent,
  starterBtns,
  currBtnEvent,
  previousBtnEvent,
  celToFahUI,
  backToStartFromBody,
};
////////////////////////////////////////

//             CALLBACK FUNCTIONS FOR EVENTS

// Back to start Btn Event
const backToStartEvent = function (e) {
  el.startMenu.classList.remove("remove__start");
  el.overlay.classList.remove("active__overlay");
  el.currentDay.classList.remove("active__current");
  el.prevWeek.classList.remove("active__current");
  removeAllTransformWrap();
  // console.log(e);
};

const backToStartFromBody = function(e){
  if (e.target.id){
    el.startMenu.classList.remove("remove__start");
    el.overlay.classList.remove("active__overlay");
    el.currentDay.classList.remove("active__current");
    el.prevWeek.classList.remove("active__current");
    removeAllTransformWrap();
  }
}


// Starter Buttons Events
const starterBtns = function (e) {
  const clicked = e.target.classList.contains("starter__btns");
  if (clicked) return;
  //
  el.startMenu.classList.add("remove__start");
  el.overlay.classList.add("active__overlay");
  //
  if (e.target.dataset.btn === "1") {
    el.currentDay.classList.add("active__current");
    addTransformWrap()
  }
  //
  if (e.target.dataset.btn === "2") {
    el.prevWeek.classList.add("active__current");
    removeTransformWrap()
    weekFahrin();
  }
}


// Active Page Buttons
const currBtnEvent = function (e) {
  el.prevWeek.classList.remove("active__current");
  el.currentDay.classList.add("active__current");
  addTransformWrap();
}
const previousBtnEvent = function (e) {
  el.prevWeek.classList.add("active__current");
  el.currentDay.classList.remove("active__current");
  removeTransformWrap();
  weekFahrin();
}

// CEL TO FAHRINHEIT CALLBACK/UI SWITCH
const celToFahUI = function (e) {
    if (el.conditionals.cel) {
      el.conditionals.cel = false;
      weekFahrin();
      currentFahrin();
    } else {
      el.conditionals.cel = true;
      weekFahrin();
      currentFahrin();
    }
  }