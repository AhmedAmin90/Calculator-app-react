import React, { useState} from 'react';
import PropTypes from 'prop-types';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';
import '../App.css';


const App = ()=> {
  const [value, setValue] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleClick = (name) => {
    const data = { ...value };
    const result = calculate(data, name);
    setValue({ ...result });
  };

  const { total, next } = value;
  const result = next ? next && next.toString() : total && total.toString();
    return (
      <div className="App">
        <h1>Calculator Application</h1>
        <Display result={result} />
        <ButtonPanel clickHandler={handleClick} />
      </div>)
}
export default App;

Display.propTypes = {
  result: PropTypes.string,
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};