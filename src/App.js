import React from 'react';
// import './sass/Styles.css';
import './css/Styles.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import HomeCase from './pages/HomeCase';
import SignUp from './pages/SignUp';
import Error from './pages/404';
import Inspection from './pages/Inspection';
import Actuation from './pages/Actuation';


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

        <Route path="/homecase">
          <HomeCase />
        </Route>

        <Route path="/404">
          <Error />

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
