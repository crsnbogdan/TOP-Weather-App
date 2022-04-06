 async function getWeatherData(queryLocation) {
     let rawTodayWeatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${queryLocation}&appid=29112d9d44d0009fdd0e9aa6b008cdee`, { type: 'cors' });
     let rawTodayDataObj = await rawTodayWeatherData.json();
     let processedTodayDataObj = {
         currentMaxTemp: rawTodayDataObj.main.temp_max,
         currentMinTemp: rawTodayDataObj.main.temp_min,
         currentTemp: rawTodayDataObj.main.temp,
         feelsLikeTemp: rawTodayDataObj.main.feels_like,
         locationName: rawTodayDataObj.name,
         currentWeatherDescription: rawTodayDataObj.weather[0].description,
         iconCode: rawTodayDataObj.weather[0].icon
     }

     let processedSixDayForecastObj = await getForecastWeatherData(Number(rawTodayDataObj.coord.lat), Number(rawTodayDataObj.coord.lon))
     return { processedTodayDataObj, processedSixDayForecastObj };
 }
 async function getForecastWeatherData(currentCityLat, currentCityLon) {
     let rawForecastWeatherData = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${currentCityLat}&lon=${currentCityLon}&exclude=hourly,minutely&appid=29112d9d44d0009fdd0e9aa6b008cdee`, { type: 'cors' });
     let rawForecastDataObj = await rawForecastWeatherData.json();
     rawForecastDataObj.daily.shift();
     rawForecastDataObj.daily.shift();
     let rawSixDayForecastArr = rawForecastDataObj.daily;
     let processedSixDayForecastArr = [];
     rawSixDayForecastArr.forEach(day => {
         let forecastDay = {
             dayMaxTemp: day.temp.max,
             dayMinTemp: day.temp.min,
             dayWeatherDescription: day.weather[0].description,
             iconCode: day.weather[0].icon
         }
         processedSixDayForecastArr.push(forecastDay);
     });
     console.log(rawForecastDataObj)
     return { processedSixDayForecastArr };
 }

 export { getWeatherData };