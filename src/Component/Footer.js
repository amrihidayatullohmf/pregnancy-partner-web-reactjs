import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './../App.css';
import './../Assets/Css/Style.css';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentYear: new Date().getFullYear()
        }
    }

    render() {
        return(
                <footer>
                    <div className="WrapperFooter">
                        <div className="leftSegment">
                            <p>&copy; Copyright Pregnancy Partner {this.state.currentYear}</p>
                        </div>
                        <div className="rightSegment">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <button className="Social Facebook">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </button>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <button className="Social Twitter">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </button>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <button className="Social Instagram">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </button>
                            </a>
                        </div>
                    </div>
                </footer>
        )
    }
}