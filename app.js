// "use strict";
// const API = "Your API KEY";

// let dayEl = document.querySelector(".default-day");
// let dateEl = document.querySelector(".default-date");
// let btnEl = document.querySelector(".btn-search");
// let inputEl = document.querySelector(".input-field");

// let iconsContainer = document.querySelector(".icons");
// let dayInfoEl = document.querySelector(".day-info");
// let listContentEl = document.querySelector(".list-content ul");

// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// //display day
// let day = new Date();
// let dayname = days[day.getDay()];
// dayEl.textContent = dayname;

// //display date
// let Month = day.toLocaleDateString("default", { month: "long" });
// let date = day.getDate();
// let year = day.getFullYear();
// dateEl.textContent = date + " " + Month + " " + year;

// //add events
// btnEl.addEventListener("click", (e) => {
//   e.preventDefault();

//   //check empty value
//   if (inputEl.value !== "") {
//     let Search = inputEl.value;
//     inputEl.value = "";
//     findlocation(Search);
//   } else {
//     console.log("Please enter City or Country Name!");
//   }
// });

// async function findlocation(name) {
//   iconsContainer.innerHTML = "";
//   dayInfoEl.innerHTML = "";
//   listContentEl.innerHTML = "";
//   try {
//     const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;
//     const data = await fetch(API_URL);
//     const result = await data.json();
//     console.log(result);

//     if (result.cod !== "404") {
//       //display img content
//       const ImageContent = displayImageContent(result);

//       //display right side content
//       const rightside = rightSideContent(result);

//       //forecast function
//       displayForecast(result.coord.lat, result.coord.lon);

//       setTimeout(() => {
//         iconsContainer.insertAdjacentHTML("afterbegin", ImageContent);
//         iconsContainer.classList.add("fadeIn");
//         dayInfoEl.insertAdjacentHTML("afterbegin", rightside);
//       }, 1500);
//     } else {
//       const message = `<h2 class="Weather-temp">${result.cod}</h2>
//         <h3 class="cloudtxt">${result.message}</h3>`;
//       iconsContainer.insertAdjacentHTML("afterbegin", message);
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// //display img content and temp
// function displayImageContent(data) {
//   return `<img src="https://openweathermap.org/img/wn/${
//     data.weather[0].icon
//   }@4x.png" alt="" />
//     <h2 class="weather-temp">${Math.round(data.main.temp - 275.15)}°C</h2>
//     <h3 class="cloudtxt">${data.weather[0].description}</h3>`;
// }

// //display the right side content
// function rightSideContent(result) {
//   return `<div class="content">
//              <p class="title">NAME</p>
//              <span class="value">${result.name}</span>
//             </div>
//             <div class="content">
//              <p class="title">Temp</p>
//              <span class="value">${Math.round(
//                result.main.temp - 275.15
//              )}°C</span>
//             </div>
//             <div class="content">
//              <p class="title">HUMIDITY</p>
//              <span class="value">${result.main.humidity}%</span>
//             </div>
//             <div class="content">
//              <p class="title">WIND SPEED</p>
//              <span class="value">${result.wind.speed} Km/h </span>
//             </div> `;
// }

// async function displayForecast(lat, long) {
//   let ForecastAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${API}`;
//   let data = await fetch(ForecastAPI);
//   const result = await data.json();
//   //filter forecast
//   const uniqueForecastDays = [];
//   const daysForecast = result.list.filter((forecast) => {
//     const forecastDate = new Date(forecast.dt_txt).getDate();
//     if (!uniqueForecastDays.includes(forecastDate)) {
//       return uniqueForecastDays.push(forecastDate);
//     }
//   });
//   console.log(daysForecast);

//   daysForecast.forEach((content, indx) => {
//     if (indx <= 3) {
//       listContentEl.insertAdjacentHTML("afterbegin", forecast(content));
//     }
//   });
// }

// //forecast html element data
// function forecast(frContent) {
//   const day = new Date(frContent.dt_txt);
//   const dayName = days[day.getDay()];
//   const splitDay = dayName.split("", 3);
//   const joinDay = splitDay.join("");

//   return `<li>
//     <img src="https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}">
//     <span>${joinDay}</span>
//     <span class="day_temp">${Math.round(frContent.main.temp - 275.15)}°C </span>
//     </li>`;
// }
