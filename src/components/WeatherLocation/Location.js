import React from 'react';
import PropTypes from 'prop-types';

const Location = ({city}) => (
    //const {city} = props; //Propiedad Object Destructuring. Reemplaza const city = props.city;

    //return (
        <div>
            <h1>
                {city}
            </h1>
        </div>//);
);

Location.PropTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;