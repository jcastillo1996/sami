import React from 'react';
// import './sass/Styles.css';
import './css/Styles.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import HomeCases from './pages/HomeCases';
import Inspection from './pages/Inspection';
import Actuation from './pages/Actuation';
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
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/homecases">
          <HomeCases />
        </Route>
        <Route exact path="/inspection">
          <Inspection />
        </Route>
        <Route exact path="/actuation">
          <Actuation />
        </Route>
        <Route path="/404">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
