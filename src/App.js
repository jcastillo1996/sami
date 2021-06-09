import React from 'react';
import './sass/Styles.css';
import './css/Styles.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Error from './pages/404';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/404">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
