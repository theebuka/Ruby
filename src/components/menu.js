import React, {Component} from 'react';
import NavItem from './navitem.js';

class Menu extends Component {
    render() {
        let closeMenu = () => {document.querySelector('.menu').style.display = 'none'; console.log("it worked!")};
        return(
            <div className="menu">
                <ul>
                    <NavItem path="/" label="Home" onClick={closeMenu} />
                    <NavItem path="/About" label="About" />
                    <NavItem path="/Projects" label="Projects" />
                    <NavItem path="/Contact" label="Contact" />
                    <NavItem path="/Blog" label="Blog" />
                    <button onClick={closeMenu}>Test</button>
                </ul>
            </div>
        )
    }
}

export default Menu;