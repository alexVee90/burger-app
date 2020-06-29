import * as types from './actions.types';
import axiosFirebase from '../../util/axios.firebase';
import firebase from '../../util/firebase.config';

export const setLoading = () => ({ type: types.SET_LOADING })

export const clearError = () => ({ type: types.CLEAR_ERROR })

export const getOrdersFailure = (error) => ({
  type: types.GET_ORDERS_FAILURE,
  payload: error
})

export const getOrdersSuccess = (mappedData) => ({
  type: types.GET_ORDERS_SUCCESS,
  payload: mappedData
})

export const tryGetOrders = () => {
  return dispatch => {
    dispatch(setLoading());
    axiosFirebase.get('/orders.json')
    .then(res => {
      const mappedData = Object.keys(res.data).map(id => ({ id: id, ingredients: res.data[id].ingredients  }) );
      dispatch(getOrdersSuccess(mappedData))
     })
    .catch(error => {
      dispatch(getOrdersFailure(error));
      setTimeout( () => dispatch(clearError()), 5000);
    })
  }
}


export const clearIngredients = () => ({ type: types.CLEAR_INGREDIENTS });

export const saveIngredientsFailure = (error) => {
  return {
    type: types.SAVE_ORDER_FAILURE,
    payload: error
  }
}

export const addIngredient = (ingredient) => {
  return {
    type: types.ADD_INGREDIENT,
    payload: ingredient
  }
}

export const removeIngredient = (ingredient) => {
  return {
    type: types.REMOVE_INGREDIENT,
    payload: ingredient
  }
}

export const trySavingOrder = order => {
  return dispatch => {
    axiosFirebase.post('/orders.json', order)
      .then(res => {
        dispatch(clearIngredients())
      })
      .catch(error => {
        dispatch(saveIngredientsFailure(error))
        setTimeout( () => dispatch(clearError()), 5000);
      })
  }
}

export const getUser = () => {
  const data = firebase.auth().currentUser;
  return {
    type: types.GET_USER,
    payload: data
  }
}

export const logout = () => {
  firebase.auth().signOut();
  return {
    type: types.LOGOUT
  }
}