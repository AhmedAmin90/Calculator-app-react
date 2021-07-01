import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (name) => {
    const data = calculate(this.state, name);
    this.setState({ ...data });
  }

  render() {
    const { total, next } = this.state;
    const result = next ? next && next.toString() : total && total.toString();
    return (
      <div className="App">
        <h1>Calculator Application</h1>
        <Display result={result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;

Display.propTypes = {
  result: PropTypes.string,
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
