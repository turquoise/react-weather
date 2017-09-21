import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';

import Weather from './components/weather';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Weather} />
        </Switch>
    </div>
    </BrowserRouter>
  </div>
  </Provider>
  , document.querySelector('.container'));
