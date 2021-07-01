import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, clickHandler }) => {
  const handleClick = () => {
    clickHandler(name);
  };
  return (
    <div>
      <button type="button" onClick={handleClick}>
        {' '}
        {name}
      </button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: null,
};

export default Button;
