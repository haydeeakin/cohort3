import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent.js';
import EvenComp from './components/EvenComponent.js';
import OddComp from './components/OddComponent.js';

class App extends Component {
  constructor() {
    super();
    this.counter = 21;
    this.state = {
      myState: "TBD",
      evenOddDisplay:""
    }
  }
  
  onPushMe = () => {
    console.log("You pushed me");
    this.counter++;
    console.log(this.counter);
    this.setState(
     { myState: "now:" + this.counter },
    )
    this.numChecker();
  }

  numChecker = () => {
    if (this.counter % 2 === 0) {
      this.setState({ evenOddDisplay: <EvenComp appCounter={this.counter} /> })
    } else this.setState({ evenOddDisplay: <OddComp appCounter={this.counter} /> })
  }


  whatToSay = "What Ever";
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>I am in control of this application and my name is Haydee {this.state.myState}</h1>
          <button onClick={this.onPushMe}>
            Push Me
          </button>
          {/* Passing parameters */}
          <MyComponent whatToSay={this.whatToSay} appOnPushMe={this.onPushMe}/>
          {this.state.evenOddDisplay}
          <p>
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

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* <h1>I am in control of this application and my name is Haydee</h1> */}
//         {/* <button onClick={this.onPushMe}>
//             Push Me
//         </button> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
