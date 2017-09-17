import { combineReducers } from 'redux';
import postsReducer from './reducer_posts';
import myposts from './posts';
import comments from './comments';


const rootReducer = combineReducers({
  posts: postsReducer,
  myposts: myposts,
  comments: comments



});

export default rootReducer;
