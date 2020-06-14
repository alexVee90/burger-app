import React from 'react';

import './ModalBackground.style.scss';

const ModalBackground = props => {
  const { toggleClose, show } = props;
  return(
    <div onClick={toggleClose} className="ModalBackground" style={{ display: show ? 'block' : 'none'}}>
      {props.children}
    </div>
  )
}

export default ModalBackground;