import React from 'react';

import './BurgerContainer.style.scss';

import Burger from '../../components/Burger/Burger.component';
import Controls from '../../components/Controls/Controls.component';
import Modal from '../../components/Modal/Modal.component';
import OrderSummary from '../../components/OrderSummary/OrderSummary.component';

import withError from '../../HOC/withError'

import axiosFirebase from '../../util/axios.firebase';


const BurgerContainer = props => { 
  
  const [ingredients, setIngredients] = React.useState([]);
  const [ordering, setOrdering] = React.useState(false);

  const removeIngredient = ingredient => {
    let newArr = [ ...ingredients ];
    
    const ingIndex = ingredients.findIndex(ing => ing === ingredient);
    
    ingIndex >= 0 && newArr.splice(ingIndex, 1)

    setIngredients(newArr);
  }

  const addIngredient = ingredient => {
    const newArr = [ ...ingredients, ingredient ];
    setIngredients(newArr);
  }

  const handleOrder = () => {
    setOrdering(!ordering);
  }

  const continueOrder = () => {
    handleOrder();
    const order = {
      ingredients: [...ingredients]
    }

    axiosFirebase.post('/orders.json', order)
      .then(res => setIngredients([]));
  }

  return (
    <>
      <Modal show={ordering} toggleClose={handleOrder}  >
        <OrderSummary         
          ingredients={ingredients} 
          toggleClose={handleOrder} 
          continueOrder={continueOrder}
        />
      </Modal>
      <Burger ingredients={ingredients} />
      <Controls 
        removeIngredient={removeIngredient} 
        addIngredient={addIngredient} 
        handleOrder={handleOrder}
        disableOrderBtn={ingredients.length ? false : true}
      />
    </>
  )
}

export default withError(BurgerContainer, axiosFirebase);