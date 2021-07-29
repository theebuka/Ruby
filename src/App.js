import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/home.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import Menu from './components/menu.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(fab,fas);

function App() {
  return (
    // <>
      <Router>
        <Navbar />
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    // </>
  );
}

export default App;
