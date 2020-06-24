import { combineReducers } from 'redux';

import ingredientsReducer from './ingredients.reducer';
import ordersReducer from './orders.reducer';

export default combineReducers({
  ingredientsReducer: ingredientsReducer,
  ordersReducer: ordersReducer
});