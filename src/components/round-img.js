import React, {Component} from 'react';
import ProfilePhoto from './../images/profile-photo.jpg';

class RoundImage extends Component {
    render() {
        return (
            <div className="round-image">
                <img src={ProfilePhoto} alt="profile of website owner"></img>
            </div>
        )
    }
};

export default RoundImage;