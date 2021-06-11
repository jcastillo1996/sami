import React from 'react';
import './css/Styles.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Inspection from './pages/Inspection';
import Actuation from './pages/Actuation';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/inspection">
          <Inspection />
        </Route>
        <Route exact path="/actuation">
          <Actuation />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
