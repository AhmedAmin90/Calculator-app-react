import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'

const Button = ({ name, clickHandler , color , wide }) => {
  const handleClick = () => {
    clickHandler(name);
  };
  const width = wide ? "width-double" : "";
  return (
   
    <div className={`Button ${width}`}  style={{backgroundColor: color}} >
      <button className="Button-btn" type="button" onClick={handleClick} >
        {' '}
        {name}
      </button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: null,
  color: 'orange',
  wide: false
};

export default Button;
