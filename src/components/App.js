import React from 'react';
import {
  Switch,
  Route,
  NavLink,
  BrowserRouter as Router
} from 'react-router-dom';
import Calculator from './Calculator';
import About from './About';
import Quote from './Quote';
import '../App.css';

const App = () => (
  <Router >
  <div className="App">
    <nav>

      <NavLink to="/"> Home </NavLink>
      <NavLink to="/calculator"> Calculator </NavLink>
      <NavLink to="/quote"> Quote </NavLink>

    </nav>

    <Switch>
      <Route exact path="/" render={() => <About />} />
      <Route exact path="/calculator" render={() => <Calculator />} />
      <Route exact path="/quote" render={() => <Quote />} />
    </Switch>

    

  </div>
  </Router>
);
export default App;
