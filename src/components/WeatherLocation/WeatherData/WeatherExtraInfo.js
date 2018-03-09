import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div>
        <span>{`${humidity}% | `}</span>
        <span>{`${wind} wind`}</span>
    </div>
);

WeatherExtraInfo.PropTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;