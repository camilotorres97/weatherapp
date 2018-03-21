import React, { Component } from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN } from './../../constants/weathers';
import './styles.css';

const data1 = {
    temperature: 55,
    weatherState: SUN,
    humidity: 9,
    wind: '10 m/s',
};

const location = "Bogota,co";
const api_key = "e7fc755d2590a7ce3647260867c3b7a3";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
          city: 'Bogota',
          data: data1  
        };
    }

    getTemp = kelvin => {
        return convert(kelvin).from('K').to('C').toFixed(2);
    }

    getWeatherState = weather => {
        return SUN;
    }

    getData = (weather_data) => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(this.weather);
        const temperature = this.getTemp(temp);

        const data = {
            humidity,
            temperature,
            weatherState,
            wind: `${speed}/ms`,
        }

        return data;
    }
    
    handleUpdateClick = () => {
       fetch(api_weather).then( data => {
           console.log(data);
           return data.json();
       }).then( weather_data => {
           debugger;
           const data = this.getData(weather_data);
           this.setState({ data });
       });
    }

    render = () => {
        const { city, data } = this.state;

        return(
        <div className="weatherLocationCont">
            <Location city={city} />
            <WeatherData data={data} />
            <button onClick={this.handleUpdateClick} >Actualizar</button>
        </div>
        );
    };
}

export default WeatherLocation;