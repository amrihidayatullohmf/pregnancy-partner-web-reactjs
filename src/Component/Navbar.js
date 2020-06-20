import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './../App.css';
import './../Assets/Css/Style.css';
import LogoWhite from './../Assets/Static/logo-white.png';
import LogoGreen from './../Assets/Static/logo-green.png';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.setState({fontFamilyName: 'VarelaRound-Regular'});
    }

    

    render() {
        return (
                <header className="MainNavbar on">
                    <div className="NavbarWrapper">
                        <Link to={"/"}>
                            <div className="BrandArea">
                                <img src={LogoWhite} className="default" />
                                <img src={LogoGreen} className="green" />
                            </div>
                        </Link>
                        <div className="MenuArea">
                            <ul>
                                <li className="desktop">
                                    <Link to={"/about-us"}>About Us</Link>
                                </li>
                                <li className="desktop">
                                    <Link to={"/privacy-policy"}>Privacy Policy</Link>
                                </li>
                                <li className="no-padding">
                                    <a href="" target="_blank" className="button">
                                        <button className="Pink">
                                            Download
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
        )
    }
}