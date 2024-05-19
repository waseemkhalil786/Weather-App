"Use strict";
const API =" Your API KEY "

let dayEl = document.querySelector(".default-day")
let dateEl = document.querySelector(".default-date")
let btnEl = document.querySelector(".btn-search")
let inputEl = document.querySelector("input-field")

let iconsContainer =document.querySelector(".icons")
let dayInfoEl =document.querySelector(".day-info")
let listContentEl =document.querySelector(".list-content ul")

const days =[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

//disply day

let day = new Date();
let dayname = day[day.getDay()];
dayEl.textContent = dayname;

//disply date

let Month = day.toLocaleDateString("default",{month: "long"});
let date = day.getDate;
let year = day.getFullYear;
console.log();
dateEl.textContent = date + "" + Month + "" + year;

//add events
btnEl.addEventListener("click", (e) =>{
    e.preventDefault();

    //check empty value
    if(inputEl.value !==""){
        let Search = inputEl.value;
        inputEl.valu ="";
        findlocation(Search);
    }else{
        console.log("Please enter City or Country Name!")
    } 
});
async function findlocation(name) {
    iconsContainer.innerHTML = "";
    dayInfoEl.innerHTML = "";
    listContentEl.innerHTML = "";
    try {
    const API_URL = `pxcFBvAVeXeJHttcPWkyq8uBU7ZCHD2n`;
    const data = await fetch(API_URL);
    const result = await data.json;
    
    if(result.cod !== "404"){
        //display img content 
        const ImageContent = displayImageContent(result);

        //display right side content
        const rightside = rightsideContent(result)

        //forecast function
        displayForeCast(result.coord.lat, result.coord.lon);

        setTimeout(() => {
            iconsContainer.insertAdjacentHTML("after begin", ImageContent);
            iconsContainer.classList.add("fadeIn");
            dayInfoEl.insertAdjacentHTML("afterbegin", rightside);
        },1500);
    }else{
        const message = `<h2 class ="Weather-temp">${result.cod}</h2>
        <h3 class = "cloudtxt">${result.message}</h3>`;
        iconsContainer.insertAdjacentHTML("afterbegin", message);
    }
  }catch (error) {}
}
//display img content and tem

function displayImageContent(data) {
    return  `<img src = "https://openweathermap.org/img/wn/${
    data.weather[0].icons
  }@4x.png" alt = ""/>
    <h2 class = "weather-temp">${Math.round(data.main.temp - 275.15)}°C</h2>
    <h3 class = "cloudtxt">${data.weather[0].description}</h3>`   
}

//display the right side content 

function rightSideContent(result) {
    return `<div =class "content">
             <p =class "title">NAME</p>
             <span =class "value">${result.name}</span>
            </div>
            <div =class "content">
             <p =class "title">Temp</p>
             <span =class "value">${Math.round(result.main.temp - 275.15)}°C</span>
            </div>
            <div =class "content">
             <p =class "title">HUMIDITY</p>
             <span =class "value">${result.main.humidity}%</span>
            </div>
            <div =class "content">
             <p =class "title">WIND SPEED</p>
             <span =class "value">${result.wind.speed} Km/h </span>
            </div> `
}
async function displayForeCast() {//113
    
}