import React from 'react';
import PropTypes from 'prop-types';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../App.css';

const App = () => (
  <div className="App">
    <h1>Calculator Application</h1>
    <Display />
    <ButtonPanel />
  </div>
);

export default App;

Display.propTypes = {
  result: PropTypes.string,
};
