import * as el from "./elements.js";


//               Fetching Data

export async function curio() {
  try {
    const res = await fetch("https://api.maas2.apollorion.com/");
    if (!res.ok) {
      throw new Error(`Theres been a problem: ${res.status}`);
    }
    const data = await res.json();
    // Reset error msg
    el.errorBox.classList.add("hide__errorMsg");
    return data
  } catch (err) {
     el.conditionals.errorLocation = true
     throw console.error(
      `Sorry there has been a problem recieving the data. Please try again later. ${err.message}`
      );
    }
  }

  export async function fetchWeek (sol) {
    try {
      //
      const weekNum = [1, 2, 3, 4, 5, 6, 7];
      const weeks = [];
      await Promise.all(
        weekNum.map(async (w) => {
          const res = await fetch(`https://api.maas2.apollorion.com/${sol - w}`);
          if (!res.ok) {
            throw new Error(`Theres been a problem: ${res.status}`);
          }
          const data = await res.json();
          weeks.push(data);
        })
        );
        // Sort & Distribute
        weeks.sort((a, b) => b.terrestrial_date.localeCompare(a.terrestrial_date));
        // Reset error msg
        el.errorBox.classList.add("hide__errorMsg");
        return weeks
      } catch (err) {
        el.conditionals.errorLocation = false
        throw console.error(
          `error recieving the previous week data. Try again later. ${err.message} `
        );
      }
    };