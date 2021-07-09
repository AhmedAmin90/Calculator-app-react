import ButtonPanel from './ButtonPanel';
import Display from './Display';
import React, { useState} from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import './Calculator.css'


const Calculator = ()=> {
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
    return(
        <div className="Calculator">
        <h1>Let's Do Some Math !</h1>
        <Display result={result} />
        <ButtonPanel clickHandler={handleClick} />
        </div>

    )
}

Display.propTypes = {
    result: PropTypes.string,
  };
  
  ButtonPanel.propTypes = {
    clickHandler: PropTypes.func.isRequired,
  };

export default Calculator