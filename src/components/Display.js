import React , {Component} from 'react';

class Display extends Component {

    render(){
        return (
            <div>
                <h1>{this.props.result}</h1>
            </div>
        )
    }
}

Display.defaultProps = {
    result: '0'
  };

export default Display;