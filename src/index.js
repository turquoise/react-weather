import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';

import Weather from './components/weather';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
    <BrowserRouter>
      <div>
          <Route path="/" component={Weather} />
    </div>
    </BrowserRouter>
  </div>
  </Provider>
  , document.querySelector('.container'));
