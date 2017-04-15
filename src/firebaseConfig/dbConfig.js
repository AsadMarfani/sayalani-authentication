
import firebase from 'firebase';

  // Initialize Firebase
  try {
  var config = {
    apiKey: "AIzaSyAHfxZxBiBY-g6CSAI9DNJ_8UHr3WsD22k",
    authDomain: "customerrorpage-1a3c0.firebaseapp.com",
    databaseURL: "https://customerrorpage-1a3c0.firebaseio.com",
    projectId: "customerrorpage-1a3c0",
    storageBucket: "customerrorpage-1a3c0.appspot.com",
    messagingSenderId: "83975469911"
  };
  
  firebase.initializeApp(config); 
}

catch(e) {
  console.log(e);
}

export var firebaseRef = firebase.database().ref();

export default firebase; 