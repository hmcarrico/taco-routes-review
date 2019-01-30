import React, { Component } from 'react';
import Header from './Components/Header/Header';
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
