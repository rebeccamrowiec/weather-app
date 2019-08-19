import React from 'react';

class SearchBar extends React.Component {
  state = { term: 'LONDON' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    this.setState({term: '' });
  };
  
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label>Type in your location for the current forecast</label>
            <input 
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })} 
            />
          </div>
        </form>

        <button type="submit"></button>
      </div>
    );
  }
}

export default SearchBar;