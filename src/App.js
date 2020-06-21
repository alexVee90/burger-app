import React from 'react';

import Layout from './pages/Layout/Layout.component';
import BurgerContainer from './pages/BurgerContainer/BurgerContainer.component';
import Orders from './pages/Orders/Orders.component';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path='/' component={BurgerContainer} />
          <Route path='/orders' component={Orders} />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
