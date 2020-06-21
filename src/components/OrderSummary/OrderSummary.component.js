import React from 'react';

const OrderSummary = (props) => {
  const { ingredients, continueOrder, toggleClose } = props;
  return (
    <>
      <h3>Order details:</h3>
      <ul>
        {ingredients.map((ing) => (
          <li>{ing}</li>
        ))}
      </ul>
      <div className='action-area'>
        <button onClick={continueOrder}>Continue</button>
        <button onClick={toggleClose}>CANCEL</button>
      </div>
    </>
  );
};

export default OrderSummary;
