import React from 'react';

import './Controls.style.scss';

const items = ['salad', 'meat', 'cheese'];

const Controls = props => { 

  const { removeIngredient, addIngredient } = props;

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
    </div>
  )
}

export default Controls;