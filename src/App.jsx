import React, { Component } from 'react';
import './App.css';
import SearchBox from './SearchBox';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Pokemons List Table</h1>
       <SearchBox />
      </div>
    );
  }
}

export default App;
