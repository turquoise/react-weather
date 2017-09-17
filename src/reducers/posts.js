import _ from 'lodash';
import { GET_POSTS } from '../actions';


export default function(state = {}, action) {
  switch (action.type) {
    case GET_POSTS:
      console.log('GET_POSTS ', action.payload);
      return _.mapKeys(action.payload, 'code');
    default:
      return state;
  }
}
