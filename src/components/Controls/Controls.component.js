import React from 'react';

import './Controls.style.scss';

const items = ['salad', 'meat', 'cheese'];

const Controls = ({ removeIngredient, addIngredient, handleOrder, disableOrderBtn }) => { 

  return (
    <div className="Controls">
      <h3>Add/Remove ingredient</h3>

    {items.map(item => {
      return (<div key={item} className="Controls-item">
        <button onClick={() => removeIngredient(item)}>-</button>
        <span>{item}</span>
        <button onClick={() => addIngredient(item)}>+</button>
      </div>)
    })}

    <button disabled={disableOrderBtn} onClick={handleOrder} className="Controls-order">Order now</button>
    </div>
  )
}

export default Controls;