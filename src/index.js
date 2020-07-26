import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Example1, Example2, Example3, Example4} from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Example1 />
    <Example2 />
    <Example3 />
    <Example4 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
