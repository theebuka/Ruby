import React, {Component} from 'react';
import BodyText from './../components/paragraph.js';
import Button from './../components/button.js';

class About extends Component {
    render() {
        return (
            <section className="About">
                <BodyText text="Hey, this is Your again." />
                <BodyText text="I'm a product designer with expertise in User Interface design, User Experience research and a college degree in Human Computer Interaction." />
                <BodyText text="I'm able to create highly usable and visually appealing interfaces for mobile, web and desktop, conduct robust experience research and deliver handcrafted graphic material on schedule." />
                <BodyText text="I've worked with notable brands such as Nike and Microsoft, and also charity work for a few NGOs." />
                <BodyText text="I'm currently available for freelance or full-time hire, remote or on-location." />
                <Button label="Download Resume" />
            </section>
        );
    }
}

export default About;