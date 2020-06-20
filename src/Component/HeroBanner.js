import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './../App.css';
import './../Assets/Css/Style.css';
import MainDisplay from './../Assets/Static/phone-display.png';

export default class HeroBanner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div className="HeroBannerArea">
                    <div className="WrapperArea">
                        <div className="TextArea">
                            <div className="Title">
                                The Perfect app for your<br />
                                <span className="Bigger">Pregnancy Partner</span>
                            </div>
                            <p className="Body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nunc ac massa malesuada rhoncus ut vel eros. Phasellus vel congue velit.
                            </p>
                            <a href="#learn-more">
                                <button className="White">Learn More</button>
                            </a>
                        </div>
                        <div className="DisplayArea">
                            <img src={MainDisplay} />
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}