import 'bulma/css/bulma.css';
import './index.css';

import { applyMiddleware, createStore } from 'redux';

import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const myStore = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
