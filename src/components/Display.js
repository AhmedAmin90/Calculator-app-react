import React , {Component} from 'react';

class Display extends Component {

    static defaultProps = {
        result: '0'
    }

    render(){
        return (
            <div>
                <h1>{this.props.result}</h1>
            </div>
        )
    }
}

export default Display;