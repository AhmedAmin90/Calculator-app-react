import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../App.css';
import PropTypes from 'prop-types'; 


const App = () => (
  <div className="App">
    <h1>Calculator Application</h1>
    <Display />
    <ButtonPanel />
  </div>
);

export default App;

Display.propTypes = {
  result: PropTypes.string
}
