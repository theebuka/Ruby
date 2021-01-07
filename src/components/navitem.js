import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NavItem extends Component {
    render() {
        return(
            <li className="nav-item">
                <Link to={this.props.path}>{this.props.label}</Link>
            </li>
        )
    }
}

export default NavItem;