import React from 'react';

import './Modal.style.scss';
import ModalBackground from '../ModalBackground/ModalBackground.component';


const Modal = (props) => {
  const { show, toggleClose, ingredients } = props;

  const handleContinue = () => { 
    toggleClose();
    alert('order Placed')
  }

  return (
    <>
      <div className="Modal" style={{display: show ? 'flex' : 'none'}}>
        <h3>Order details:</h3>
        <ul>
          {ingredients.map(ing => <li>{ing}</li>)}
        </ul>
        <div className="action-area">
          <button onClick={handleContinue}>Continue</button>
          <button onClick={toggleClose}>CANCEL</button>
        </div>
      </div>
      <ModalBackground 
        show={show} 
        toggleClose={toggleClose} 
      />
    </>
  )
}

export default Modal;