import React from 'react';

const Order = props => {

  const { order } = props;

  return(
    <div>
      <h3 className='Order'>Order ID: {order.id}</h3>
      <ul>  
      {order.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li> )}
      </ul>
    </div>
  )
}
export default Order;