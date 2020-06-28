import React from 'react';

import './NavList.style.scss';

import { NavLink } from 'react-router-dom';

const NavList = props => {

  const { direction, toggleClose, logout } = props;

  return (
    <nav className="NavList" >
      <ul className={direction} > 
        <li>
          <NavLink onClick={toggleClose} exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink onClick={toggleClose} to="/orders">Orders</NavLink>
        </li>
        <li>
          <NavLink onClick={toggleClose} to="/auth">Authenticate</NavLink>
        </li>
        <li>
          <NavLink onClick={logout} to="/">Logout</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavList;