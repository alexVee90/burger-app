import * as types from '../actions/actions.types';

const initialState = {
  user: null
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.GET_USER:
      return { 
        ...state,
        user: payload
      }
    case types.LOGOUT:
      return {
        ...state,
        user: null
      }
    default:
      return {
        ...state
      }
  }
}