import React from 'react';
import { connect } from 'react-redux';

import './Toolbar.style.scss';

import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu.component';
import NavList from '../../components/NavList/NavList.component';
import SideDrawer from '../../components/SideDrawer/SideDrawer.component';

import * as creators from '../../store/actions/actions.creators';

const Toolbar = (props) => {

  const [opened, setOpened] = React.useState(false);

  const toggleOpened = () => setOpened(!opened);

  return(
    <>
      <header className='Toolbar'>
        <HamburgerMenu handleClick={toggleOpened} />
        <NavList user={props.user} />
      </header>
      <SideDrawer user={props.user} opened={opened} toggleOpened={toggleOpened} />
    </>
  )
}

const mapStateToProps = state => ({
  user: state.authReducer.user
})

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(creators.getUser()),

})

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);