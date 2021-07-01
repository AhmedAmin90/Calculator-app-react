import React from 'react';

const Button = ({ name, clickHandler }) => {
  const handleClick = () => {
    clickHandler(name);
    // alert(name)
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

export default Button;
