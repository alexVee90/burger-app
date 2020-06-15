import React from 'react';

import './BurgerContainer.style.scss';

import Burger from '../Burger/Burger.component';
import Controls from '../Controls/Controls.component';
import Modal from '../Modal/Modal.component';

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
    alert('order Placed')
  }


  return (
    <>
      <Modal 
        show={ordering} 
        toggleClose={handleOrder} 
        ingredients={ingredients} 
        continueOrder={continueOrder}
      />
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

export default BurgerContainer;