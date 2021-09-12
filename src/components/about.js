const React = require("react");
const { useState } = require("react");


function About() {
    const [location, setLocation] = useState("");
    const [temperature, setTemperature] = useState("");
    const [humidity, setHumidity] = useState("");
    const [wind, setWind] = useState("");
    const [description, setDescription] = useState("");

  function getWeatherData() {
    let apiKey = "7dfe309afec3ee637c6130947b96f76b";
    let baseURL = `https://api.openweathermap.org/data/2.5/weather`;
    let queryString = `?q=${location}&appid=${apiKey}&units=metric`;
    let url = baseURL + queryString;

    fetch(url, {
      method: "GET",
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
          setLocation(data.name);
          setTemperature(data.main.temp);
          setHumidity(data.main.humidity);
          setWind(data.wind.speed);
          setDescription(data.weather[0].description);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  function handleChange(event) {
    setLocation(event.target.value);
  }

    return(
        <div>
            <h1 style={{color:'white'}}>Weather Apps For Travelers</h1>
            <div>
            <form>
                <input class="Location" type="text" placeholder="Location" 
                value={location} onChange={handleChange}>
                </input>
            </form>
                <button class="search" onClick={getWeatherData}>Search</button>
            </div>
            <div class="p">
                <p class="temp">Temperature: {temperature} <span>℃</span></p>
                <p class="humidity">Humidity: {humidity} <span>%</span></p>
                <p class="winds">Wind Speed: {wind} <span>km/h</span></p>
                <p class="description">Description: {description}</p>
            </div>
            <video loop autoPlay muted id="bg-video"
            style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1"
            }}>
            <source src={require('../mp4/video-1.mp4')} type="video/mp4" />
            </video>
        </div>
    );
}

module.exports = About;