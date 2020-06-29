import { combineReducers } from 'redux';

import ingredientsReducer from './ingredients.reducer';
import ordersReducer from './orders.reducer';
import authReducer from './auth.reducer';

export default combineReducers({
  ingredientsReducer,
  ordersReducer,
  authReducer,
});