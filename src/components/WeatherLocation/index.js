import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';

const location = "Bogota,co";
const api_key = "e7fc755d2590a7ce3647260867c3b7a3";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
          city: 'Bogotá',
          data: null  
        };
        console.log("constructor");
    }
    
    handleUpdateClick = () => {
       fetch(api_weather).then( data => {
           console.log(data);
           return data.json();
       }).then( weather_data => {
           const data = transformWeather(weather_data);
           this.setState({ data });
       });
    }

    componentWillMount() {
        this.handleUpdateClick();
    }

    render = () => {
        console.log("render");

        const { city, data } = this.state;

        return(
        <div className="weatherLocationCont">
            <Location city={city} />
            {data ? <WeatherData data={data} /> : 'Cargando...'}
        </div>
        );
    };
}

export default WeatherLocation;