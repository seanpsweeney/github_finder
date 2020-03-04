import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import UserId from './components/users/UserId';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Navbar title="Github Finder" icon="fab fa-github" />
        <UserId />
      </div>
    );
  }
}

export default App;
