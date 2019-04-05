import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import Header from './Components/Header/Header'
import {HashRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header></Header>
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;



