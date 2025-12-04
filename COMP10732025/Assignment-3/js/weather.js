// this selects all the text input where the user types the city name
const cityInput = document.querySelector('#city');
// this selects all the buttons that when clicked this will trigger the weather api request
const getWeatherBtn = document.querySelector('#getWeather');
// this selects all the output fields that will display the weather information
const tempOutput = document.querySelector('#temp');
const descOutput = document.querySelector('#desc');
const feelsOutput = document.querySelector('#feels');
const humidityOutput = document.querySelector('#humidity');
// this is the apikey from the weather app
const apiKey = "9ba5b4e89060c750bff3447985693325";
//this is the function for the update weather app
function updateWeatherInfo(data) {
// this displays the current temperature in Celsius
    tempOutput.textContent = data.main.temp + " °C";
// this shows a short description of the weather 
    descOutput.textContent = data.weather[0].description;
// this shows what the temperature feels like
    feelsOutput.textContent = data.main.feels_like + " °C";
// this displays the humidity percentage.
    humidityOutput.textContent = data.main.humidity + "%";
}
//it begins the process of getting weather data When the button is clicked
getWeatherBtn.addEventListener('click', async () => {
// this reads the city name the user entered and removes extra spaces
    const city = cityInput.value.trim();
    // if the user hasnot typed anything it will show a message.
    if (city === "") {
        tempOutput.textContent = "Firstly enter a city";
        return;
    }
    // this builds the request url using the city name and api key.
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
}