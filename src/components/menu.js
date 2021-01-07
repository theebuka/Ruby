import React, {Component} from 'react';
import NavItem from './navitem.js';

class Menu extends Component {
    render() {
        return(
            <ol className="menu">
                <NavItem path="/" label="Home" />
                <NavItem path="/About" label="About" />
                <NavItem path="/Projects" label="Projects" />
                <NavItem path="/Contact" label="Contact" />
            </ol>
        )
    }
}

export default Menu;