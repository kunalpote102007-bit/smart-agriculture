const apiKey = "2b92154b9d8a38c16a2735526c404633"; // येथे नंतर तुमची API Key टाकायची
const city = "Nashik";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {

    document.getElementById("temp").innerHTML =
      data.main.temp + " °C";

    document.getElementById("humidity").innerHTML =
      data.main.humidity + " %";

    document.getElementById("weather").innerHTML =
      data.weather[0].description;

    document.getElementById("wind").innerHTML =
      data.wind.speed + " km/h";

  })
  .catch(error => {
    console.log("Error:", error);
  });