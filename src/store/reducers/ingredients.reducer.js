import * as types from '../actions/actions.types';

const initialState = {
  ingredients: [],
  error: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_INGREDIENT: 
    return {
      ...state,
      ingredients: [...state.ingredients, payload]
    }
  case types.REMOVE_INGREDIENT: 
    const newArr = [...state.ingredients];    
    const ingIndex = newArr.findIndex(ing => ing === payload);
    ingIndex >= 0 && newArr.splice(ingIndex, 1);
    return {
      ...state,
      ingredients: newArr
    }
  case types.CLEAR_INGREDIENTS: 
    return {
      ...state,
      ingredients: []
    }
  case types.SAVE_ORDER_FAILURE:
    return {
      ...state,
      error: payload.message
    }
  default:
    return {
      ...state
    }
  }
}