import React from 'react';
import './css/Styles.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SignIn from './pages/SignIn';
import Inspection from './pages/Inspection';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route path="/Inspection">
          <Inspection />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
