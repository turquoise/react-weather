import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postsReducer from './reducer_posts';
import myposts from './posts';
import comments from './comments';

const rootReducer = combineReducers({
  posts: postsReducer,
  myposts: myposts,
  comments: comments,
  form: formReducer
});

export default rootReducer;
