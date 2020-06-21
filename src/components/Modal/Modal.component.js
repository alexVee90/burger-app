import React from 'react';

import './Modal.style.scss';
import ModalBackground from '../ModalBackground/ModalBackground.component';



const Modal = (props) => {
  
  const { show, toggleClose } = props;



  return (
    <>
      <div className="Modal" style={{display: show ? 'flex' : 'none'}}>
        {props.children}
      </div>
      <ModalBackground 
        show={show} 
        toggleClose={toggleClose} 
      />
    </>
  )
}

export default Modal;