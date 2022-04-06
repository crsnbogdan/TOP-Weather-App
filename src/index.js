/*
                        
ideas:
     - use a free API to get a picture of the cityas the background
        - possible good resource: https://codeburst.io/adding-city-images-to-your-react-app-14c937df2db2
*/
import "./style.css";
import { getWeatherData } from "./weatherData.js";
import { renderWeatherData } from "./renderWeatherData.js";

let searchBtn = document.querySelector("button");
let locationSearchForm = document.querySelector("form");
let locationSearchInput = document.querySelector("input[type=text]");
locationSearchForm.addEventListener("submit", (e) => e.preventDefault());
searchBtn.addEventListener("click", () => {
    renderWeatherData(getWeatherData, locationSearchInput.value);

});
// to add a catch at the end of the IIFE to catch any errors