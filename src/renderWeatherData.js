async function renderWeatherData(cb, location) {
    let weatherData = await cb(location);
    console.log(weatherData)
    renderCurrentDayWeather(weatherData.processedTodayDataObj);
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
    currentWeatherTxt.textContent = currentDayObj.currentWeatherDescription;
};

function renderWeatherForecast(weatherForecastObj) {
    //console.log(weatherForecastObj)
};

export { renderWeatherData }