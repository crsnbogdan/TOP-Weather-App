async function renderWeatherData(cb, location) {
    let weatherData = await cb(location);
    renderCurrentDayWeather(weatherData.processedTodayDataObj);
    renderWeatherForecast(weatherData.processedSixDayForecastObj.processedSixDayForecastArr)
}
let currentDayMaxTemp = document.querySelector('.currentday-maxtemp');
let currentDayMinTemp = document.querySelector('.currentday-mintemp');
let currentDayTemp = document.querySelector('.currentday-temp');
// to add temperature calculator
let currentDayFeelsLike = document.querySelector('.currentday-feels');
let currentLocation = document.querySelector('.currentday-location');
let currentWeatherImg = document.querySelector('.currentday-weatherimg');
// to add images for currentWeatherImg
let currentWeatherTxt = document.querySelector('.currentday-weathertext');


function renderCurrentDayWeather(currentDayObj) {
    currentDayMaxTemp.textContent = currentDayObj.currentMaxTemp;
    currentDayMinTemp.textContent = currentDayObj.currentMinTemp;
    currentDayTemp.textContent = currentDayObj.currentTemp;
    currentDayFeelsLike.textContent = currentDayObj.feelsLikeTemp;
    currentLocation.textContent = currentDayObj.locationName;
    currentWeatherImg.src = getWeatherImg(currentDayObj.iconCode);
    currentWeatherTxt.textContent = currentDayObj.currentWeatherDescription;
};

function renderWeatherForecast(weatherForecastArr) {
    let forecastDisplayArea = document.querySelector('.displayarea-forecast');
    forecastDisplayArea.textContent = '';
    weatherForecastArr.forEach(weatherForecastDay => {
        const forecastDayContainer = document.createElement('div');
        forecastDayContainer.classList.add('forecastday-weather');
        const forecastDayWeatherImg = document.createElement('img');
        forecastDayWeatherImg.classList.add('forecastday-weatherimg');
        forecastDayContainer.appendChild(forecastDayWeatherImg);
        const forecastDayWeatherDescription = document.createElement('p');
        forecastDayWeatherDescription.classList.add('forecastday-weatherdescription');
        forecastDayContainer.appendChild(forecastDayWeatherDescription);
        const forecastDayTempContainer = document.createElement('div');
        forecastDayTempContainer.classList.add('forecastday-temperature.flex');
        forecastDayContainer.appendChild(forecastDayTempContainer);
        const forecastDayMaxTemp = document.createElement('p');
        forecastDayMaxTemp.classList.add('forecastday-maxtemp');
        forecastDayTempContainer.appendChild(forecastDayMaxTemp);
        const forecastDayMinTemp = document.createElement('p');
        forecastDayMinTemp.classList.add('forecastday-mintemp');
        forecastDayTempContainer.appendChild(forecastDayMinTemp);
        forecastDisplayArea.appendChild(forecastDayContainer);

        forecastDayWeatherImg.src = getWeatherImg(weatherForecastDay.iconCode);
        forecastDayWeatherDescription.textContent = weatherForecastDay.dayWeatherDescription;
        forecastDayMaxTemp.textContent = weatherForecastDay.dayMaxTemp;
        forecastDayMinTemp.textContent = weatherForecastDay.dayMinTemp;

    })
};

function getWeatherImg(weatherIcon) {
    let weatherImgUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
    return weatherImgUrl;
}


export { renderWeatherData }