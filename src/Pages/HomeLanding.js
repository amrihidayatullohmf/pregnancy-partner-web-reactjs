import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroBanner from './../Component/HeroBanner';
import TitleBar from './../Component/TitleBar';
import PanelBoxes from './../Component/PanelBoxes';
import Feature1 from './../Assets/Static/feature1.png';
import Feature2 from './../Assets/Static/feature2.png';
import Feature3 from './../Assets/Static/feature3.png';
import DisplayFull from './../Assets/Static/display-tools.png';
import './../App.css';
import './../Assets/Css/Style.css';

export default class HomeLanding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [
                {
                    imagePanel: Feature1,
                    titleText: 'Connect To Families',
                    descText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nunc ac massa malesuada rhoncus ut vel eros. Phasellus vel congue velit.'
                },
                {
                    imagePanel: Feature2,
                    titleText: 'Tools For Monitor',
                    descText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nunc ac massa malesuada rhoncus ut vel eros. Phasellus vel congue velit.'
                },
                {
                    imagePanel: Feature3,
                    titleText: 'Share Your Pregnancy',
                    descText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nunc ac massa malesuada rhoncus ut vel eros. Phasellus vel congue velit.'
                }
            ]
        }
    }

    render() {
        return (
            <Router>
                <HeroBanner />
                <div className="Segment White">
                    <TitleBar 
                        heading="Features"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nunc ac massa malesuada rhoncus ut vel eros"
                        color="Green" 
                        />
                    <PanelBoxes Contents={this.state.contents} />
                </div>
                <div className="Segment Gray">
                    <TitleBar 
                        heading="More Tools from Us"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nunc ac massa malesuada rhoncus ut vel eros"
                        color="Black" 
                        />
                    <div className="DisplayImageFull">
                        <img src={DisplayFull} />
                    </div>
                </div>
                <div className="Segment Green">
                    <TitleBar 
                        heading="Download The App Now"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nunc ac massa malesuada rhoncus ut vel eros. Phasellus vel congue velit. Curabitur nec aliquam sem. Nam vestibulum accumsan vestibulum."
                        color="White" 
                        />
                    <div className="ButtonAreaCenter">
                        <a href="" target="_blank">
                            <button className="GooglePlay"></button>
                        </a>
                    </div>
                </div>
            </Router>
        )
    }
}