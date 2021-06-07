import React from 'react';
import './css/Styles.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
