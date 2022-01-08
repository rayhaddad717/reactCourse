import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCqwTdN8x34qdkV7IoR8Fox652ClqMcC6g",
  authDomain: "lightsout-a9678.firebaseapp.com",
  projectId: "lightsout-a9678",
  storageBucket: "lightsout-a9678.appspot.com",
  messagingSenderId: "602791212020",
  appId: "1:602791212020:web:2be1b9db4859592fae3fa1",
  measurementId: "G-8BGCH50L1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//end firebase
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
