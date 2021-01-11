import React, {Component} from 'react';

class BodyText extends Component {
    render() {
        return(
            <p className="body-text">
                {this.props.text}
            </p>
        )
    }
}

export default BodyText;