import React, { Component } from 'react';
import Navbar from './modules/navbar';
import Body from './modules/body';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Body />
      </div>
    );
  }
};

export default App;
