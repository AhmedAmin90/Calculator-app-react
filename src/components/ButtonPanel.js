import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './ButtonPanel.css';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (name) => {
    clickHandler(name);
  };

  return (
    <div>
      <div className="Button-panel-row">
        <Button color="#E0E0E0" name="AC" clickHandler={handleClick} />
        <Button color="#E0E0E0" name="+/-" clickHandler={handleClick} />
        <Button color="#E0E0E0" name="%" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} />
      </div>
      <div className="Button-panel-row">
        <Button color="#E0E0E0" name="7" clickHandler={handleClick} />
        <Button color="#E0E0E0" name="8" clickHandler={handleClick} />
        <Button color="#E0E0E0" name="9" clickHandler={handleClick} />
        <Button name="X" clickHandler={handleClick} />
      </div>
      <div className="Button-panel-row">
        <Button color="#E0E0E0" name="4" clickHandler={handleClick} />
        <Button color="#E0E0E0" name="5" clickHandler={handleClick} />
        <Button color="#E0E0E0" name="6" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} />
      </div>
      <div className="Button-panel-row">
        <Button color="#E0E0E0" name="1" clickHandler={handleClick} />
        <Button color="#E0E0E0" name="2" clickHandler={handleClick} />
        <Button color="#E0E0E0" name="3" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} />
      </div>
      <div className="Button-panel-row">
        <Button color="#E0E0E0" wide name="0" clickHandler={handleClick} />
        <Button color="#E0E0E0" name="." clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} />

      </div>

    </div>
  );
};

export default ButtonPanel;

Button.propTypes = {
  name: PropTypes.string,
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
