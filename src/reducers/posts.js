import _ from 'lodash';
import { GET_POSTS, GET_POST } from '../actions';


export default function(state = {}, action) {
  switch (action.type) {
    case GET_POST:
      console.log('GET_POST ', action.payload);
      // const post = action.payload.data; // es5
      // const newState = { ...state }; // es5
      // newState[post.id] = post; // es5
      // return newState; // es5
      return { ...state, [action.payload.code]: action.payload };  // es6
    case GET_POSTS:
      console.log('GET_POSTS ', action.payload);
      return _.mapKeys(action.payload, 'code');
    default:
      return state;
  }
}
