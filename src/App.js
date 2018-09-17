import React, { Component } from 'react';
import './App.css';

class App extends Component {
  x = "Hello";
  y = "{\"World\"}";
    render() {
    return (
      <div className="App">
          {this.x + this.y}
      </div>
    );
  }
}

export default App;
