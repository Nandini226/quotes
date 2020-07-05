import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import * as firebase from 'firebase';

const  firebaseConfig = {
  apiKey: "AIzaSyCZGmwVWWzgH-ST9bzQQC1sWaMqOzZOZbc",
  authDomain: "quotes-80daa.firebaseapp.com",
  databaseURL: "https://quotes-80daa.firebaseio.com",
  projectId: "quotes-80daa",
  storageBucket: "quotes-80daa.appspot.com",
  messagingSenderId: "580506222775",
  appId: "1:580506222775:web:0d79312a957585d4c8cd32"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
