import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import './index.css';

import {Provider} from 'react-redux';

import * as actions from './Actions/actions';
var store = require('./Store/configStore').configure();

import firebase from './firebaseConfig/dbConfig';

firebase.auth().onAuthStateChanged((user)=>{
  if(user) {
    console.log('currently signed in user', user);
  }
  else {
    
  }
});


ReactDOM.render(
  <Provider store = {store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
);
