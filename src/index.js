import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import Photogrid from './components/photogrid';
import Single from './components/Single';
import PostsShow from './components/posts_show';

// https://reduxblog.herokuapp.com/
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
    <BrowserRouter>
      <div>
        <div><Link to="/">Posts</Link></div>
        <div><Link to="/posts/new">Posts New</Link></div>
        <div><Link to="/photogrid">Photogrid</Link></div>
        <hr/>
        <Switch>
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/photogrid/:id" component={Single} />
          <Route path="/photogrid" component={Photogrid} />
          <Route path="/" component={PostsIndex} />
        </Switch>
    </div>
    </BrowserRouter>
  </div>
  </Provider>
  , document.querySelector('.container'));
