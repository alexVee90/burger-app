import * as types from '../actions/actions.types';

const initialState = {

}

export default (state = initialState, { type, payload } ) => {
  switch (type) {
    case types.BLA: 
    console.log('hit');
      return {
        ...state
      };
    default:
      return {
        ...state
      }
  }
}