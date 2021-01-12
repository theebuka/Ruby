import React, {Component} from 'react';
import Social from './social.js';
import Inquiry from './../components/inquiry.js';

class Footer extends Component {
    render() {
        return(
            <footer>
                <Inquiry />
                <div>
                    <Social />
                    <div>
                        <span>©{new Date().getFullYear()}</span>
                        <span>Your Name</span>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;