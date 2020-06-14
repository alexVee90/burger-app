import React from 'react';

import './BurgerContainer.style.scss';

import Burger from '../Burger/Burger.component';
import Controls from '../Controls/Controls.component';

const BurgerContainer = props => { 
  
  const [ingredients, setIngredients] = React.useState([]);

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


  return (
    <>
      <Burger ingredients={ingredients} />
      <Controls removeIngredient={removeIngredient} addIngredient={addIngredient} />
    </>
  )
}

export default BurgerContainer;