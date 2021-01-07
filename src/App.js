import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/home.js';
import Navbar from './components/navbar.js';
import './App.css';

function App() {
  return (
    // <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    // </>
  );
}

export default App;
