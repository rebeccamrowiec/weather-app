import React from 'react';

class Weather extends React.Component {
  render () { 
    const { day } = this.props;

    return (
      <div className="weather-card">
        {day.map((slot, index) => {
          const {temperature, time} = slot;
          const celcius = temperature - 273.15;

          

          return(
            <div className="weather-reading" key={"weather_reading_"+index}>
              <b>{time.toLocaleTimeString()}</b>
              <p>{Math.round(celcius)}</p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Weather;        


/* {props.city && <p>Location: {props.city}</p>}
{props.temperature && <p>Temperature: {props.temperature}</p>}
{props.humidity && <p>Humidity: {props.humidity}</p>}
{props.description && <p>Conditions:  {props.description}</p>}
{props.error && <p>{props.error}</p>} */

// style={{display: "flex", justifyContent: "space-between"}}

// 5 days, every 3 hours, 8 items a day (40 items in array)
