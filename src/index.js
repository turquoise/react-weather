import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';


import NavbarComponent from './components/navbar';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import Photogrid from './components/photogrid';
import Single from './components/photogrid_single';
import PostsShow from './components/posts_show';
//import BookList from './components/bookapp_list';
import Reduxstagram from './components/reduxstagram';
import BookApp from './components/bookapp';
import Weather from './components/weather';

// https://reduxblog.herokuapp.com/
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
    <BrowserRouter>
      <div>
        <NavbarComponent />
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/photogrid/:id" component={Single} />
          <Route path="/photogrid" component={Photogrid} />
          <Route path="/reduxstagram" component={Reduxstagram} />
          <Route path="/weather" component={Weather} />
          <Route path="/books" component={BookApp} />
          <Route path="/" component={PostsIndex} />
        </Switch>
    </div>
    </BrowserRouter>
  </div>
  </Provider>
  , document.querySelector('.container'));
