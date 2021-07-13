import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ result }) => (
  <div className="Display">
    <h1>{result}</h1>
  </div>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
