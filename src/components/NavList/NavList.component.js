import React from 'react';

import './NavList.style.scss';

import { NavLink } from 'react-router-dom';

const NavList = props => {

  const { direction } = props;

  return (
    <nav className="NavList" >
      <ul className={direction} > 
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/orders">Orders</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavList;