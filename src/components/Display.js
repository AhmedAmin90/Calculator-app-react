import React from 'react';

const Display = ({ result }) => (
  <div>
    <h1>{result}</h1>
  </div>
);

Display.defaultProps = {
  result: '0',
};

export default Display;
