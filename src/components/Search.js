import React, { Component } from 'react';

// DisplayWeather -> weatherData: [], getWeather
//  |
//  props: getWeather 
//  |
// Search, onSubmit: getWeather()


class Search extends Component {

  state = {
    city: '', country: ''
  }



  handleSearch = (event) => {
    const { getWeatherData } = this.props
    event.preventDefault();
    // need to validate input

    getWeatherData(this.state.city, this.state.country);

  }

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log({ name, value })
    this.setState({ [name]: value });
  }

  render() {
    const { city, country } = this.state;
    console.log({ city, country });
    return (
      <div className="main-top">
        <form onSubmit={this.handleSearch}>
          <input type="text" placeholder="city" name="city" value={city} onChange={this.handleChange} /><br />
          <input type="text" placeholder="country" name="country" value={country} onChange={this.handleChange} /><br />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;