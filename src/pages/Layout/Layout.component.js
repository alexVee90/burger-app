import React from 'react';

import './Layout.style.scss'

import Toolbar from '../../components/Toolbar/Toolbar.component'

const Layout = props => {
  return(
    <>
      <Toolbar />
      <main>
       {props.children}
      </main>
    </>
  )
}

export default Layout;