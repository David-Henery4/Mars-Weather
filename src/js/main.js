const { Value } = require("sass");
import * as model from "./model.js";
import * as el from "./elements.js";
import * as format from "./format.js";
// import {errorLocation} from "./model.js";

import {
  backToStartEvent as backToStartE,
  starterBtns as startBtnsEvent,
  currBtnEvent,
  previousBtnEvent,
  celToFahUI,
  backToStartFromBody,
} from "./events";

// Hot Module
if (module.hot) {
  module.hot.accept();
}

// Start Menu Buttons
// (could change to eventListener Loop because only two btns)
el.starterBtns.addEventListener("click", startBtnsEvent);

// BACK TO START BUTTONS
el.backToStart.forEach((btn) => btn.addEventListener("click", backToStartE));
// BACK TO START (BODY CLICK)
el.headerEl.addEventListener("click", backToStartFromBody);

// Active Page buttons
el.previousBtn.addEventListener("click", previousBtnEvent);
el.currentBtn.addEventListener("click", currBtnEvent);
el.fahBtn.forEach((btn) => btn.addEventListener("click", celToFahUI));
////////////////////////////////////////////

// THE DATA
async function gettingDataObj() {
  try {
    const data = await model.curio();
    const weekdata = await model.fetchWeek(data.sol);
    dataDistribution(data);
    displayWeeks(weekdata);
  } catch (err) {
    console.error("Error recieving data in main");
    displayErrorMsg();
  }
}
gettingDataObj();

// Distributing Data
function dataDistribution(data) {
  diplaySolDate(data);
  displayAirTemp(data);
  displaySurTemp(data);
  displaySetRise(data);
  displayWeathSeason(data);
}

// DISPLAYING UIs

// // Weeks UIs (Weeks to own object for formating)
function displayWeeks(weeks) {
  // weeks into own object
  format.weekObj.state = weeks.map((w) => {
    return {
      dates: w.terrestrial_date,
      sol: w.sol,
      maxTemp: w.max_temp,
      minTemp: w.min_temp,
    };
  });
}
//////////////////////////////////////

// Display Current Day UIs
function diplaySolDate(data) {
  const { sol: sol, terrestrial_date: date } = data;
  //
  el.currDatesEl.innerHTML = `<h4>Sol ${sol}</h4>
    <h4>${format.formatDate(date)}</h4>`;
}

function displayAirTemp(data) {
  const { max_temp: maxAirTemp, min_temp: minAirTemp } = data;
  //
  format.currObj.state.maxTemp = data.max_temp;
  format.currObj.state.minTemp = data.min_temp;
  //
  el.maxAirEl.innerHTML = `<p>Max Air Temp:</p>
   <p>${maxAirTemp}C</p>`;
  //
  el.minAirEl.innerHTML = `<p>Min Air Temp:</p>
   <p>${minAirTemp}C</p>`;
}

function displaySurTemp(data) {
  const { max_gts_temp: maxSufaceTemp, min_gts_temp: minSurfaceTemp } = data;
  //
  format.currObj.state.maxSurTemp = data.max_gts_temp;
  format.currObj.state.minSurTemp = data.min_gts_temp;
  //
  el.maxSurEl.innerHTML = `<p>Max Surface Temp:</p>
   <p>${maxSufaceTemp}C</p>`;
  //
  el.minSurEl.innerHTML = `<p>Min Surface Temp:</p>
   <p>${minSurfaceTemp}C</p>`;
}

function displaySetRise(data) {
  const { sunset: sunset, sunrise: sunrise } = data;
  //
  el.sunriseEl.innerHTML = `<p>Sunrise:</p>
   <p>${sunrise}</p>`;
  //
  el.sunsetEl.innerHTML = `<p>Sunset:</p>
   <p>${sunset}</p>`;
}

function displayWeathSeason(data) {
  const { atmo_opacity: weath, season: season } = data;
  //
  el.weathEl.innerHTML = `<p>Weather:</p>
   <p>${weath}</p>`;
  //
  el.seasonEl.innerHTML = `<p>Season:</p>
   <p>${format.formatSeason(season)}</p>`;
}

// ERROR MSG UI DISPLAY

// Main error Msg
export function displayErrorMsg() {
  el.errorBox.innerHTML = `<h4>Sorry</h4>
        <p>We are having problems recieving ${
          el.conditionals.errorLocation ? "current" : "the previous week"
        } weather data at the moment. Please try again later.</p>`;
  el.errorBox.classList.remove("hide__errorMsg");
}
///////////////////////////////
