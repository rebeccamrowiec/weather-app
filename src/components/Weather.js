import React from 'react';

class Weather extends React.Component {
  render () {
    const { day } = this.props;

    return (
      <div style={{margin: 20, border: "2px solid black"}}>
        {day.map((slot, index) => {
          const {temperature, time} = slot;
          const celcius = temperature - 273.15;
          return(
            <div style={{display: "flex", justifyContent: "space-between"}} key={"weather_reading_"+index}>
              <b>{time}</b>
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

// 5 days, every 3 hours, 8 items a day (40 items in array)
