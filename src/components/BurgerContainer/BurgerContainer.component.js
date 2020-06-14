import React from 'react';

import './BurgerContainer.style.scss';

import Burger from '../Burger/Burger.component';
import Controls from '../Controls/Controls.component';

const BurgerContainer = props => { 
  
  const [ingredients, setIngredients] = React.useState(["salad", "meat", "cheese"]);

  return (
    <>
      <Burger ingredients={ingredients} />
      <Controls />
    </>
  )
}

export default BurgerContainer;