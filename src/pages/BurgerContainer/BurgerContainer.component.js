import React from 'react';
import { connect } from 'react-redux';

import './BurgerContainer.style.scss';

import Burger from '../../components/Burger/Burger.component';
import Controls from '../../components/Controls/Controls.component';
import Modal from '../../components/Modal/Modal.component';
import OrderSummary from '../../components/OrderSummary/OrderSummary.component';

import withErrorHandler from '../../HOC/withErrorHandler'
import * as creators from '../../store/actions/actions.creators';

const BurgerContainer = props => { 

  const [ordering, setOrdering] = React.useState(false);

  React.useEffect( () => {
    props.getUser();
  }, [])
  
  const handleOrder = () => setOrdering(!ordering);

  const continueOrder = () => {
    handleOrder();
    const order = { ingredients: [...props.ingredients] }
    props.postOrder(order);
  }

  return (
    <>
      <Modal show={ordering} toggleClose={handleOrder}  >
        <OrderSummary         
          ingredients={props.ingredients} 
          toggleClose={handleOrder} 
          continueOrder={continueOrder}
        />
      </Modal>
      <Burger ingredients={props.ingredients} />
      <Controls 
        removeIngredient={props.removeIngredient} 
        addIngredient={props.addIngredient} 
        handleOrder={handleOrder}
        disableOrderBtn={props.ingredients.length && props.user ? false : true}
      />
    </>
  )
}

const mapStateToProps = state => ({
  ingredients: state.ingredientsReducer.ingredients,
  error: state.ingredientsReducer.error,
  user: state.authReducer.user,
});

const mapDispatchToProps = dispatch => ({
  addIngredient: (ingredient) => dispatch(creators.addIngredient(ingredient)),
  removeIngredient: (ingredient) => dispatch(creators.removeIngredient(ingredient)),
  clearIngredients: () => dispatch(creators.clearIngredients()),
  postOrder: (order) => dispatch(creators.trySavingOrder(order)),
  clearError: () => dispatch(creators.clearError()),
  getUser: () => dispatch(creators.getUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerContainer));