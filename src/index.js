import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import {RecipeProvider} from './context';
import Firebase from 'firebase';
import config from './config';

Firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <RecipeProvider>
      <Router>
        <App />
      </Router>
    </RecipeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
