import React, {Component} from 'react';
import Social from './social.js';

class Footer extends Component {
    render() {
        return(
            <footer>
                <Social />
                <div>
                    <span>© {new Date().getFullYear()}</span>
                    <span>Your Name</span>
                </div>
            </footer>
        )
    }
}

export default Footer;