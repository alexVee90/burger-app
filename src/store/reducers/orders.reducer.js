import * as types from '../actions/actions.types';

const initialState = {
  orders: [],
  loading: false,
  error: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_LOADING: 
      return {
        ...state,
        loading: true,
        error: false
      }
    case types.CLEAR_ERROR: 
      return {
        ...state,
        error: false
      }
    case types.GET_ORDERS_SUCCESS: 
      return {
        ...state,
        loading: false,
        orders: payload,
        error: false
      }
    case types.GET_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.message
      }
    default:
      return {
        ...state
      }
  }
}