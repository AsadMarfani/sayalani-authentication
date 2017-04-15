import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import SignIn from './components/SignIn';
import Logout from './components/Logout';

class App extends Component {
  render() {
    return (
      <div className="container">
          <Login></Login>
          <hr/>
          <SignIn></SignIn>
          <hr/>
          <Logout></Logout>
      </div>
    );
  }
}

export default App;
