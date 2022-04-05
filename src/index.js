/*
structure
    top area:
         - bar with app name
         - search bar for location
    main area:
        toggle for celsius or fahrenheit temperature
            weather info for location - displayed horizontally
                top middle row
                    location name   - done
                    temperature - example https://enplace-weather.herokuapp.com/ - done
                    -  highest and lowest temperature above - done
                    - temperature larger in the middle  - done
                    - feels like below - done
                bottom middle row
                    forecast for the next 7 days - https://openweathermap.org/forecast16 - done
                        - get the average for each day and display weather - done
                        - display the weather forecast in 7 individual panels - done
                        - display highest and lowest temp for each one - done
                        
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
