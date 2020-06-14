import React from 'react';

import './Layout.style.scss'

const Layout = props => {
  return(
    <>
      <header className="red" >Navbar</header>
      <main>
       {props.children}
      </main>
    </>
  )
}

export default Layout;