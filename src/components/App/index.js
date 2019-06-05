import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import Home from '../Home';
import NotFoundPage from '../NotFoundPage';
import Header from '../Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
