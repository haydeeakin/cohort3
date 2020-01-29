import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyIcon from './components/MyIcon';

import goku from './images/goku.svg';
import yoshi from './images/yoshi.svg';
import mario from './images/mario.svg';
import multimoon from './images/multimoon.svg';
import sailormoon from './images/sailormoon.svg';
import unicorn from './images/unicorn.svg';
import yellow_moon  from './images/yellow_moon.svg';
// import { Square } from './components/TicTacToe';


class App extends Component {
  constructor() {
    super();
    this.icons = [
      {
        src: goku,
        name: "Goku"
      },
      {
        src: yoshi,
        name: "Yoshi"
      },
      {
        src: mario,
        name: "Mario"
      },
      {
        src: multimoon,
        name: "Multimoon"
      },
      {
        src: sailormoon,
        name: "Sailormoon"
      },
      {
        src: unicorn,
        name: "Unicorn"
      },
      {
        src: yellow_moon,
        name: "Yellow Moon"
      },
      
    ]
  }

  render() {
    return (
      <div className="App">
        <div className="Icon-header">
          {this.icons.map(icon => (
            <MyIcon
              src={icon.src}
              alt={icon.name}
              key={icon.name}
              />
          ))}
        </div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {/* <TicTacToe {square= }/> */}
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>



      </div>
    );
  }
}

export default App;

