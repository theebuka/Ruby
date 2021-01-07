import React, {Component} from 'react';
import RoundImage from './../components/round-img.js';
import IntroText from './../components/home-text.js';
import Footer from './../components/footer.js';

class Home extends Component {
    render() {
        return(
            <section className="Home">
                <div className="main">
                    <RoundImage />
                    <IntroText />
                </div>
                <Footer />
            </section>
        )
    }
}

export default Home;