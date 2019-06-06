import React from 'react';

class SearchBar extends React.Component {
  // state = { term: '' };

  // onFormSubmit = (event) => {
  //   event.preventDefault();

  //   // this.props.onSubmit(this.state.term);
  //   console.log(this);
  // };

  // componentDidMount() {
  //   this.getWeather('london')
  // }

  // Get weather data from api
  // Returns back array of day forecasts
  // [day1, day2, day3]
  
  render() {
    return (
      <div>
        <form onSubmit={this.props.loadWeather}>
          <div>
            <label>Type in your location for the current forecast</label>
            <input 
              type="text"
              // value={this.state.term} 
              // onChange={e => this.setState({ term: e.target.value })} 
            />
          </div>
        </form>

        <button type="submit"></button>
      </div>
    );
  }
}

export default SearchBar;