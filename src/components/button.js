import React, {Component} from 'react';

class Button extends Component {
    render() {
        return (
        <button type={this.props.type} className="button">{this.props.label}</button>
        )
    }
}

export default Button;