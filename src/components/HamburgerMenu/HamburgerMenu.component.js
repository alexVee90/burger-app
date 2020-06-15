import React from 'react';

import './HamburgerMenu.style.scss';

const HamburgerMenu = props => {

  const { handleClick } = props;

  return(
  <div className="HamburgerMenu" onClick={handleClick}>
    <div></div>
    <div></div>
    <div></div>
  </div>
)
}

export default HamburgerMenu;