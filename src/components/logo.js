import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <Link to="/">Your<br/>Name</Link>
            </div>
        )
    }
};

export default Logo;