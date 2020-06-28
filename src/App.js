import React from 'react';

import BurgerContainer from './pages/BurgerContainer/BurgerContainer.component';
import Orders from './pages/Orders/Orders.component';
import Authentication from './pages/Authentication/Authenthication.component';

import Toolbar from './pages/Toolbar/Toolbar.component';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
        <Toolbar />
        <Switch>
          <Route exact path='/' component={BurgerContainer} />
          <Route path='/orders' component={Orders} />
          <Route path='/auth' component={Authentication} />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
    </div>
  );
}

export default App;
