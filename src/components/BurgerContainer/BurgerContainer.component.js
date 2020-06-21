import React, { useEffect } from 'react';

import './BurgerContainer.style.scss';

import Burger from '../Burger/Burger.component';
import Controls from '../Controls/Controls.component';
import Modal from '../Modal/Modal.component';

import axiosFirebase from '../../util/axios.firebase';

import componentDidUpdateEffect from '../../util/componentDidUpdateEffect';
import OrderSummary from '../OrderSummary/OrderSummary.component';

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
    const order = {key: 1, name: 'alex'}
    axiosFirebase.post('/orders.json', order).then(res => { console.log(res.data)})
  }

  componentDidUpdateEffect(() => {
    console.log('componentDidUpdateEffect ran');
  })

  useEffect(() => {
    console.log('useEffect ran')
  })

  return (
    <>
      <Modal show={ordering} >
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

export default BurgerContainer;