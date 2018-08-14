import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

import MainPage from './main-page/MainPage';


var config = {
  apiKey: "AIzaSyB5dUqtrT5Uz1rmx98SfrBnDUcyUkYgc70",
  authDomain: "personal-website-121d7.firebaseapp.com",
  databaseURL: "https://personal-website-121d7.firebaseio.com",
  projectId: "personal-website-121d7",
  storageBucket: "personal-website-121d7.appspot.com",
  messagingSenderId: "439629536709"
};
firebase.initializeApp(config);

ReactDOM.render(<MainPage />, document.getElementById('root'));
registerServiceWorker();  
 