import React from 'react';

import './Toolbar.style.scss';

import HamburgerMenu from '../HamburgerMenu/HamburgerMenu.component';
import NavList from '../NavList/NavList.component';
import SideDrawer from '../SideDrawer/SideDrawer.component';

const Toolbar = () => {

  const [opened, setOpened] = React.useState(false);

  const toggleOpened = () => {
    setOpened(!opened);
  }

  return(
    <>
      <header className='Toolbar'>
        <HamburgerMenu handleClick={toggleOpened} />
        <NavList />
      </header>
      <SideDrawer opened={opened} toggleOpened={toggleOpened} />
    </>
  )
}

export default Toolbar;