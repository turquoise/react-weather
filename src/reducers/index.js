import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postsReducer from './reducer_posts';
import myposts from './posts';
import comments from './comments';
import booksReducer from './reducer_books';
import reduxPosts from './reducer_reduxstagram';
import activeBook from './reducer_active_book';

const rootReducer = combineReducers({
  posts: postsReducer,
  myposts: myposts,
  comments: comments,
  form: formReducer,
  books: booksReducer,
  reduxPosts: reduxPosts,
  activeBook: activeBook

});

export default rootReducer;
