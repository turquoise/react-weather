import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from './weather_search_bar';
import WeatherList from './weather_list';

class Weather extends Component {
  render() {
    return (
      <div>
        <h4 className="weather">Weather</h4>
        <SearchBar />
        <WeatherList />
      </div>
    )
  }
}


export default Weather;
