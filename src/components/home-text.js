import React, {Component} from 'react';
import LocomotiveScroll from 'locomotive-scroll';

class IntroText extends Component {
    componentDidMount() {
        const scroll = new LocomotiveScroll({
          el: document.querySelector(".intro-text"),
          smooth: true
        });
      }
    render() {
        return(
            <div data-scroll-section className="intro-text">
                <p data-scroll data-scroll-speed={6}>
                    Hi.
                </p>
                <p data-scroll data-scroll-speed={1}>
                    I'm Your Name, a Product designer based in California, USA.
                </p>
            </div>
        )
    }
}

export default IntroText;