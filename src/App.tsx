/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './interface/Nav';
import Main from './interface/pages/Main';
import About from './interface/pages/About';
import Details from './interface/pages/Details';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="header">
          <Nav />
        </header>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies/:id">
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
