import React from 'react';

function DisplayWeather(props) {
  const { weatherData } = props;


  if (Object.keys(weatherData).length > 0) {
    const { name, wind, sys, main, weather, coord } = weatherData;

    const today = new Date();
    const sunrise = new Date(sys.sunrise * 1000)
    const sunset = new Date(sys.sunset * 1000)

    return (
      <div className="main-display">
        <h2>{`Weather in ${name}, ${sys.country}`}</h2>
        <h3>{`${main.temp} ° C`}</h3>
        <p>{`${weather[0].description}`}</p>
        <p>{`${today.toLocaleTimeString()} ${today.toDateString()}`}</p>
        <table>
          <tbody>
            <tr><td>Wind</td><td>{`${wind.speed}m/s`}</td></tr>
            <tr><td>Cloudiness</td><td>{`${weather[0].description}`}</td></tr>
            <tr><td>Pressure</td><td>{`${main.pressure} hpa`}</td></tr>
            <tr><td>Humidity</td><td>{`${main.humidity} %`}</td></tr>
            <tr><td>Sunrise</td><td>{`${sunrise.toLocaleTimeString()}`}</td></tr>
            <tr><td>Sunset</td><td>{`${sunset.toLocaleTimeString()}`}</td></tr>
            <tr><td>Geo Coords</td><td>{`[${coord.lat}, ${coord.lon}]`}</td></tr>
          </tbody>
        </table>
      </div>);
  }
  else { return <p></p> }

}
export default DisplayWeather;