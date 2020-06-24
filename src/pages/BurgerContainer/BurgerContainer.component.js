import React from 'react';

import './BurgerContainer.style.scss';

import Burger from '../../components/Burger/Burger.component';
import Controls from '../../components/Controls/Controls.component';
import Modal from '../../components/Modal/Modal.component';
import OrderSummary from '../../components/OrderSummary/OrderSummary.component';

import { connect } from 'react-redux';

import withErrorHandler from '../../HOC/withErrorHandler'
import * as creators from '../../store/actions/actions.creators';


const BurgerContainer = props => { 
  
  const [ordering, setOrdering] = React.useState(false);

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
        disableOrderBtn={props.ingredients.length ? false : true}
      />
    </>
  )
}

const mapStateToProps = state => ({
  ingredients: state.ingredientsReducer.ingredients,
  error: state.ingredientsReducer.error
});

const mapDispatchToProps = dispatch => ({
  addIngredient: (ingredient) => dispatch(creators.addIngredient(ingredient)),
  removeIngredient: (ingredient) => dispatch(creators.removeIngredient(ingredient)),
  clearIngredients: () => dispatch(creators.clearIngredients()),
  postOrder: (order) => dispatch(creators.trySavingOrder(order)),
  clearError: () => dispatch(creators.clearError())
})

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerContainer));