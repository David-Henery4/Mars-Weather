// import { weekObj } from "./main.js";
import * as el from "./elements.js";

// Formating Functions 

// Dates Formating
export const formatDate = function (d) {
  const date = new Date(d);
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const day = date.getDate();
  return `${day}/${month}/${year}`;
};

// Formating season
export const formatSeason = function (s) {
  const n = s.match(/(\d+)/);
  const monthN = +n[0];
  if (monthN >= 1 && monthN <= 3) return "Autumn";
  if (monthN >= 4 && monthN <= 6) return "Winter";
  if (monthN >= 7 && monthN <= 9) return "Spring";
  if (monthN >= 10 && monthN <= 12) return "Summer";
};

// Cel to fahrinheit
export const cToF = function (temp) {
  const fahTemp = Math.round((temp / 5) * 9 + 32);
  return fahTemp;
};

// Celsius to Fahrinheit UI Formatting


// WEEK CEL TO FAH UI

// OBJ: Stores week data
export const weekObj = {
  state: {},
};
// Week Ui conversion
export function weekFahrin() {
  el.previousWrap.forEach((w, i) => {
    return (w.innerHTML = `
    <div class="top">
      <h4>Sol ${weekObj.state[i].sol} - ${formatDate(
      weekObj.state[i].dates
    )}</h4>
    </div>
    <div class="bott">
      <p>Max-Temp: ${
        el.conditionals.cel ? weekObj.state[i].maxTemp : cToF(weekObj.state[i].maxTemp)
      } ${el.conditionals.cel ? "C" : "F"}</p>
      <div class="line"></div>
      <p>Min-Temp: ${
        el.conditionals.cel ? weekObj.state[i].minTemp : cToF(weekObj.state[i].minTemp)
      } ${el.conditionals.cel ? "C" : "F"}</p>
    </div>`);
  });
}

export const currObj = {
  state: {},
};

// Current Day fahrinherit

export function currentFahrin() {
  const { maxTemp, minTemp, maxSurTemp, minSurTemp } = currObj.state;
  //
  el.maxAirEl.innerHTML = `<p>Max Air Temp:</p>
   <p>${el.conditionals.cel ? maxTemp : cToF(maxTemp)} ${
    el.conditionals.cel ? "C" : "F"
  }</p>`;
  //
  el.minAirEl.innerHTML = `<p>Min Air Temp:</p>
   <p>${el.conditionals.cel ? minTemp : cToF(minTemp)} ${
    el.conditionals.cel ? "C" : "F"
  }</p>`;
  //
  el.maxSurEl.innerHTML = `<p>Max Surface Temp:</p>
   <p>${el.conditionals.cel ? maxSurTemp : cToF(maxSurTemp)} ${
    el.conditionals.cel ? "C" : "F"
  }</p>`;
  //
  el.minSurEl.innerHTML = `<p>Min Surface Temp:</p>
   <p>${el.conditionals.cel ? minSurTemp : cToF(minSurTemp)} ${
    el.conditionals.cel ? "C" : "F"
  }</p>`;
}