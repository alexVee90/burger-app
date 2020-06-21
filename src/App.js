import React, { useEffect } from 'react';

import Layout from './pages/Layout/Layout.component';
import BurgerContainer from './components/BurgerContainer/BurgerContainer.component';
;

function App() {

  return (
    <div>
     <Layout>
       <BurgerContainer />
     </Layout>
    </div>
  );
}

export default App;
