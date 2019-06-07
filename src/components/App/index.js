import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import Home from '../Home';
import NotFoundPage from '../NotFoundPage';

import SideDrawer from '../SideDrawer';
import Toolbar from '../Toolbar';

function App() {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
        <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
