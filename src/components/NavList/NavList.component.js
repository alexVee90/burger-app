import React from 'react';

import './NavList.style.scss';

const NavList = props => {

  const { direction } = props;

  return (
    <nav className="NavList" >
      <ul className={direction} > 
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default NavList;