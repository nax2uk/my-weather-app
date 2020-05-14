import React, { Component } from 'react';
import DisplayTemperatureChart from './DisplayTemperatureChart';
import DisplayWindChart from './DisplayWindChart';
import DisplayHumidityChart from './DisplayHumidityChart';
import axios from 'axios'

class DisplayMoreInfo extends Component {
  state = { forecastedWeatherData: {}, isLoading: true, showTemperature: false, showWind: false, showHumid: false };

  componentDidMount() {
    const { country, city } = this.props;
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=b477c63b92ad8c4fbce87cf5e2eaef6d`)
      .then(response => {
        this.setState({ forecastedWeatherData: response.data, isLoading: false })
      })
  }

  handleTemperature = () => {
    this.setState((currState) => {
      return { showTemperature: !currState.showTemperature, showWind: false, showHumid: false }
    })

  }

  handleWind = () => {
    this.setState((currState => {
      return { showWind: !currState.showWind, showTemperature: false, showHumid: false }
    }))
  }

  handleHumid = () => {
    this.setState((currState => {
      return { showHumid: !currState.showHumid, showTemperature: false, showWind: false }
    }))

  }
  render() {
    //const { hasClickedSearch } = this.props;
    if (this.state.isLoading) return <p>Is Loading ...</p>
    else
      return (
        <div className='main-display-more-info'>
          <button onClick={this.handleTemperature}>Temperature Forecast</button>
          <button onClick={this.handleWind}>Wind Forecast</button>
          <button onClick={this.handleHumid}>Humidity Forecast</button>
          {this.state.showTemperature && <DisplayTemperatureChart forecastedWeatherData={this.state.forecastedWeatherData} />}
          {this.state.showWind && <DisplayWindChart forecastedWeatherData={this.state.forecastedWeatherData} />}
          {this.state.showHumid && <DisplayHumidityChart forecastedWeatherData={this.state.forecastedWeatherData} />}
        </div>
      );
  }
}


export default DisplayMoreInfo;