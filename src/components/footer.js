import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return(
            <footer>
                <span>© {new Date().getFullYear()}</span>
                <span>Your Name</span>
            </footer>
        )
    }
}

export default Footer;