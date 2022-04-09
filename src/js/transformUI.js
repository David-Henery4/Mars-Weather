import * as el from "./elements.js";

// CURRENT TRANSFORM WRAP
// Swap Current
export const addTransformWrap = function () {
  el.currentWrap.forEach((el) => el.classList.add("active__wrap"));
  el.previousWrap.forEach((el) => el.classList.remove("active__wrap"));
};
// Swap Previous
export const removeTransformWrap = function () {
  el.currentWrap.forEach((el) => el.classList.remove("active__wrap"));
  el.previousWrap.forEach((el) => el.classList.add("active__wrap"));
};
// Reset both
export const removeAllTransformWrap = function () {
  el.currentWrap.forEach((el) => el.classList.remove("active__wrap"));
  el.previousWrap.forEach((el) => el.classList.remove("active__wrap"));
};
