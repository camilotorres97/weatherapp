import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN, WINDY } from './../../constants/weathers';
import './styles.css';

const data1 = {
    temperature: 20,
    weatherState: SUN,
    humidity: 9,
    wind: '10 m/s',
};

const data2 = {
    temperature: 18,
    weatherState: WINDY,
    humidity: 5,
    wind: '19 m/s',
};

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
          city: 'Bogota',
          data: data1  
        };
    }
    
    handleUpdateClick = () => {
        this.setState({
            data: data2
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