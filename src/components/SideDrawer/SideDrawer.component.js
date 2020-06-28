import React from 'react';

import './SideDrawer.style.scss';

import NavList from '../NavList/NavList.component';
import ModalBackground from '../ModalBackground/ModalBackground.component'

const SideDrawer = props => {

  const { opened, toggleOpened } = props;

  return (
    <div>
      <div className={`SideDrawer ${opened && 'opened'}`}>
        <h2>Burger App</h2>
        <NavList toggleClose={toggleOpened} direction="column" />      
      </div>
      <ModalBackground show={opened} toggleClose={toggleOpened} />  
    </div>
  )
}

export default SideDrawer;