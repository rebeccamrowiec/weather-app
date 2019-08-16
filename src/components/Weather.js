import React from 'react';

class Weather extends React.Component {
  render () {
    const { city, temperature, humidity, description, error } = this.props;

    return (
      <div>
        <p>{city}</p>
        <p>{temperature}</p>
      </div>
    );
  }
};

export default Weather;        


{/* {props.city && <p>Location: {props.city}</p>}
{props.temperature && <p>Temperature: {props.temperature}</p>}
{props.humidity && <p>Humidity: {props.humidity}</p>}
{props.description && <p>Conditions:  {props.description}</p>}
{props.error && <p>{props.error}</p>} */}