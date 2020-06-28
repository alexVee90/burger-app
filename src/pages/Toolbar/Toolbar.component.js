import React from 'react';

import './Toolbar.style.scss';

import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu.component';
import NavList from '../../components/NavList/NavList.component';
import SideDrawer from '../../components/SideDrawer/SideDrawer.component';

import firebase from '../../util/firebase.config';

const Toolbar = () => {

  const [opened, setOpened] = React.useState(false);

  const toggleOpened = () => {
    setOpened(!opened);
  }

  const logout = () => {
    firebase.auth().signOut();
  }

  return(
    <>
      <header className='Toolbar'>
        <HamburgerMenu handleClick={toggleOpened} />
        <NavList logout={logout} />
      </header>
      <SideDrawer opened={opened} toggleOpened={toggleOpened} />
    </>
  )
}

export default Toolbar;