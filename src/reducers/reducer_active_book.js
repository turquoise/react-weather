import _ from 'lodash';
import { SELECT_BOOK } from '../actions';

// reducers are only called when an action occurs.
export default function(state = null, action) {
  switch (action.type) {
    case SELECT_BOOK:
      console.log('SELECT_BOOK ', action.payload);
      return action.payload;
    default:
      return state;
  }
}
