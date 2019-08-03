import React, { Component } from 'react';

import './App.css';
import Project from "./projects-data";

class App extends Component {
  state = {
    project: Project
  }

  render() {
    return (
     <div>
       <h1>hello world</h1>
     </div>
    );
  }
}

export default App;
