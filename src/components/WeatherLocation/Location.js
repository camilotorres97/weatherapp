import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({city}) => (
    //const {city} = props; //Propiedad Object Destructuring. Reemplaza const city = props.city;

    //return (
        <div className="locationCont">
            <h1>
                {city}
            </h1>
        </div>//);
);

Location.PropTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;