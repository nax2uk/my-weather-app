import React, { Component } from 'react';
import Search from './Search'
import DisplayWeather from './DisplayWeather'
import DisplayMoreInfo from './DisplayMoreInfo'

class Main extends Component {
  state = { weatherData: {} }

  getWeatherData = (city, country) => {
    console.log(city);
    const strURL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&&appid=b477c63b92ad8c4fbce87cf5e2eaef6d`
    fetch(strURL)
      .then(buffer => {
        console.dir(buffer);
        return buffer.json();
      })
      .then(response => {
        console.dir(response);
        console.log(response.name)
        console.log(response.sys.country)
        console.log(response.main.temp)
        this.setState({ weatherData: response })
      })
  }

  render() {
    return (
      <main>
        <Search getWeatherData={this.getWeatherData} />
        <DisplayWeather weatherData={this.state.weatherData} />
        <DisplayMoreInfo weatherData={this.state.weatherData} />
      </main>);
  }
}

export default Main;