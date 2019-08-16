import React from 'react';
import SearchBar from './SearchBar';
import Weather from './Weather';

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

    this.setState({
      temperature: response.list[0].main.temp,
      city: response.city.name
      // humidity: response.main.humidity,
      // description: response.weather[0].description,
      // error: ""
    })
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          // humidity={this.state.humidity}
          // description={this.state.description}
          // error={this.state.error}
        />
      </div>
    );
  }
}

export default App;



  // state = {lat: null, errorMessage: ''};

  // state = {
  //   temperature: undefined,
  //   city: undefined,
  //   humidity: undefined,
  //   description: undefined,
  //   error: undefined
  // }

  // componentDidMount() {
  //   window.navigator.geolocation.getCurrentPosition(
  //     (position) => this.setState({ lat: position.coords.latitude }),
  //     (err) => this.setState({ errorMessage: err.message })  
  //   );
  // }

  // onSearchSubmit = async (e) => {
  //   const city = e.target.elements.city.value;

  //   e.preventDefault();

  //   // Api call
  //   const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=fbfa3fa9afec475a14c7cbe7fd5d785b`);

  //   // Transform to json
  //   const response = await api_call.json();
    
  //   // Format new object for return

  //   console.log(response);

  //   this.setState({
  //     temperature: response.main.temp,
  //     city: response.name,
  //     humidity: response.main.humidity,
  //     description: response.weather[0].description,
  //     error: ""
  //   })
  // }




















// const App = () => {
//   return (
//     <div>Hi</div>
//   );
// };
