import _ from 'lodash';
import { FETCH_POSTS } from '../actions';


export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log('FETCH_POSTS ', action.payload.data); // [ post1, post2 ]

      // take an array and create an object using lodash
      return _.mapKeys(action.payload.data, 'id');
    
    default:
      return state;

  }
}
