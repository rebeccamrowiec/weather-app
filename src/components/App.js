import React from 'react';
import SearchBar from './SearchBar';
import Weather from './Weather';
import './Weather.scss';

class App extends React.Component {

  state = {
    city: '',
    temperature: ''
    // humidity: '',
    // description: '',
    // error: ''
  }

  onSearchSubmit = async (term) => {
    const city = term;

    // Api call
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=fbfa3fa9afec475a14c7cbe7fd5d785b`);

    // Transform to json
    const response = await api_call.json();
    
    // Format new object for return
    console.log(response);

    let lemons = response.list;
    let days = [];
    let day = [];
    for (let i = 0; i < lemons.length; i++) {
      console.log(lemons[i]);
      const temperature = lemons[i].main.temp;
     
      const apple = () => { 
        const time = lemons[i].dt * 1000;
        var d = new Date(time);
        // console.log(d);
        return d;
      };
     

      day.push({
        time: apple(),
        temperature,
      });

      if (day.length === 8) {
        days.push(day);
        day = [];
      }
    }

    console.log(days);

    this.setState({
      temperatures: days,
      // temperature: [lemons]main.temp,
      city: response.city.name
      // humidity: response.main.humidity,
      // description: response.weather[0].description,
      // error: ""
    })
  }

  render() {
    return (
      <div className="app">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="weather">
          {!this.state.temperatures ? null : this.state.temperatures.map((day, index) => {
            return(
              <Weather
                key={"weather_card_"+index}
                day={day}
                city={this.state.city}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
  






// render() {
//   return (
//     <div>
//       <SearchBar onSubmit={this.onSearchSubmit} />
//       <Weather 
//         temperature={this.state.temperature}
//         city={this.state.city}
//         // humidity={this.state.humidity}
//         // description={this.state.description}
//         // error={this.state.error}
//       />
//     </div>
//   );
// }