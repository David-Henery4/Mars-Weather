// Elements
export const headerEl = document.getElementById("head");
export const startMenu = document.querySelector(".starter__menu");
export const currentDay = document.querySelector(".current__day");
export const prevWeek = document.querySelector(".prev__week");
export const overlay = document.querySelector(".overlay");
export const currentWrap = document.querySelectorAll(".curr__details--wrap");
export const previousWrap = document.querySelectorAll(".week__details--wrap");
export const errorBox = document.querySelector(".error__container");
//*****************************//

// Current Day Data Elements
export const currDatesEl = document.getElementById("curr-date");
export const maxAirEl = document.getElementById("max-air");
export const minAirEl = document.getElementById("min-air");
export const maxSurEl = document.getElementById("max-sur");
export const minSurEl = document.getElementById("min-sur");
export const seasonEl = document.getElementById("seas");
export const sunriseEl = document.getElementById("sunrise");
export const sunsetEl = document.getElementById("sunset");
export const weathEl = document.getElementById("weath");
//*******************************//

// Buttons
// (Start menu buttons)
export const starterBtns = document.querySelector(".starter__btns");
export const backToStart = document.querySelectorAll(".start__btn");
//
// (Active page buttons)
export const previousBtn = document.querySelector(".prev__btn");
export const currentBtn = document.querySelector(".curr__btn");
export const fahBtn = document.querySelectorAll(".fah__btn");

export let conditionals = {
    cel: true,
    errorLocation: true,
}