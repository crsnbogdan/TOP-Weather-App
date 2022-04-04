 async function getWeatherData(queryLocation) {
     let rawTodayWeatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${queryLocation}&appid=29112d9d44d0009fdd0e9aa6b008cdee`, { type: 'cors' });
     let rawTodayDataObj = await rawTodayWeatherData.json();
     let processedTodayDataObj = {
         locationName: rawTodayDataObj.name,
         currentWeatherDescription: rawTodayDataObj.weather[0].description,
         maxTemp: rawTodayDataObj.main.temp_max,
         temp: rawTodayDataObj.main.temp,
         minTemp: rawTodayDataObj.main.temp_min,
         feelsLikeTemp: rawTodayDataObj.main.feels_like,
     }

     let processedSevenDayForecastObj = await getForecastWeatherData(Number(rawTodayDataObj.coord.lat), Number(rawTodayDataObj.coord.lon))
     return { processedTodayDataObj, processedSevenDayForecastObj };
 }
 async function getForecastWeatherData(currentCityLat, currentCityLon) {
     let rawForecastWeatherData = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${currentCityLat}&lon=${currentCityLon}&exclude=hourly,minutely&appid=29112d9d44d0009fdd0e9aa6b008cdee`, { type: 'cors' });
     let rawForecastDataObj = await rawForecastWeatherData.json();
     rawForecastDataObj.daily.shift();
     let rawSevenDayForecastArr = rawForecastDataObj.daily;
     let processedSevenDayForecastArr = [];
     rawSevenDayForecastArr.forEach(day => {
         let currentDay = {
             mintem: day.temp.min,
             maxtemp: day.temp.max,
             weather: day.weather[0].description,
         }
         processedSevenDayForecastArr.push(currentDay);
     });
     return { processedSevenDayForecastArr };
 }

 export { getWeatherData };