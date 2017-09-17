import _ from 'lodash';
import { GET_COMMENTS } from '../actions';


export default function(state = {}, action) {
  switch (action.type) {
    case GET_COMMENTS:
      console.log('GET_COMMENTS ', action.payload);
      return action.payload;
    default:
      return state;
  }
}
