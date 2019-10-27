import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './firebaseConfig'

ReactDOM.render(
  <FirebaseContext.Provider value={Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
