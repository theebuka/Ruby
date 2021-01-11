import React, {Component} from 'react';
// import Menu from './components/menu.js';
import Logo from './../components/logo.js';
// import {slide as Menu} from 'react-burger-menu';
import {Cross as Hamburger} from 'hamburger-react';

class Navbar extends Component {
    // this.setState({ open, setOpen })
    render() {
        return(
            <nav className="navigation">
                <Hamburger size={24} direction="left" duration="0.75" color="#ffffff" onToggle={toggled => {
                    if (toggled) {
                        // open a menu
                        document.querySelector('.menu').style.display = 'flex';
                    } else {
                        // close a menu
                        document.querySelector('.menu').style.display = 'none';

                    }
                    }} />
                <Logo />
            </nav>
        )
    }
}

export default Navbar;