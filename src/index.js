import "./style.css";
import logoImg from "./logo.png"
import { getWeatherData } from "./weatherData.js";
import { renderWeatherData } from "./renderWeatherData.js";
(async function() {

    let logoElem = document.querySelector("img.logo");
    logoElem.src = logoImg;
    let searchBtn = document.querySelector("button");
    let locationSearchForm = document.querySelector("form");
    let locationSearchInput = document.querySelector("input[type=text]");
    locationSearchForm.addEventListener("submit", (e) => e.preventDefault());
    searchBtn.addEventListener("click", () => {
        renderWeatherData(getWeatherData, locationSearchInput.value);

    });
    let currentTempFormat = 'c';
    let sliderBtn = document.querySelector('.slider-btn');
    sliderBtn.addEventListener('change', updateTemperature);
    renderWeatherData(getWeatherData, 'Bucharest')
    updateTemperature();

    function updateTemperature() {
        let cTempHeaderText = document.querySelector('.header-ctemp');
        let fTempHeaderText = document.querySelector('.header-ftemp');
        let TempTextsArr = [...document.querySelectorAll('.temp-text')];


        if (sliderBtn.checked === true) {
            cTempHeaderText.style.color = '#BFC6C9';
            fTempHeaderText.style.color = '#F5B700';
            TempTextsArr.forEach(tempText => tempText.style.color = '#F5B700');
            if (currentTempFormat === 'f') return;
            if (currentTempFormat === 'c') {
                TempTextsArr.forEach(tempText => {
                    let tempTextNum = Number(tempText.textContent);
                    tempTextNum = (tempTextNum * 9 / 5) + 32;
                    tempText.textContent = tempTextNum.toFixed(1);
                    currentTempFormat = 'f';
                })
            }
        } else if (sliderBtn.checked === false) {
            cTempHeaderText.style.color = '#04E762';
            fTempHeaderText.style.color = '#BFC6C9';
            TempTextsArr.forEach(tempText => tempText.style.color = '#04E762');
            if (currentTempFormat === 'c') return;
            if (currentTempFormat === 'f') {
                TempTextsArr.forEach(tempText => {
                    let tempTextNum = Number(tempText.textContent);
                    tempTextNum = (tempTextNum - 32) * 5 / 9;
                    tempText.textContent = tempTextNum.toFixed(1);
                    currentTempFormat = 'c';
                })
            }
        }
    }
})()