import React from 'react';
import TitleBar from './../Component/TitleBar';
import ApiConfig from './../ApiConfig.json';
import './../App.css';
import './../Assets/Css/Style.css';
import LoadingAnimation from './../Assets/Static/loading.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

export default class AboutUs extends React.Component {
    constructor(props) {
        super(props);

        const { uidtoken, hashtoken } = props.match.params;

        this.state = {
            uidToken: uidtoken,
            hashToken: hashtoken, 
            title: 'Validating',
            message: '',
            hasValidating: false,
            isValidated: false
        }
    }

    componentDidMount() {
        let payload = {
            uid: this.state.uidToken,
            hash: this.state.hashToken
        };

        var formBody = [];
        for (var property in payload) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(payload[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
    
        fetch(ApiConfig.apiHost+'user/confirm',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'app-id': ApiConfig.apiKey,
                'app-secret': ApiConfig.apiSecret,
                'app-devid': ApiConfig.apiDevId
            },
            body: formBody
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            if(data.code == 200) {
                this.setState({
                    ...this.state,
                    hasValidating: true,
                    isValidated: true,
                    message: data.message
                });
            } else {
                this.setState({
                    ...this.state,
                    hasValidating: true,
                    isValidated: false,
                    message: data.message
                });
            }
        });

    }


    render() {
        if(!this.state.hasValidating) {
            return(
                <div>
                    <div className="Segment Green">&nbsp;</div>
                    <div className="Segment Gray">
                        <div className="LoadingArea">
                            <img src={LoadingAnimation} />
                            <br />
                            <span>Validating</span>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="Segment Green">&nbsp;</div>
                    <div className="Segment Gray">
                        {
                            !this.state.isValidated 
                            ? (
                                <div>
                                    <div className="CircleNotif Red">
                                        <FontAwesomeIcon icon={faTimes} />
                                    </div>
                                    <TitleBar 
                                        heading="Fail to Activate Account"
                                        desc={this.state.message}
                                        color="Red" 
                                        />
                                </div>
                            ) : (
                                <div>
                                    <div className="CircleNotif Green">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <TitleBar 
                                        heading="Your Account is Activated"
                                        desc={this.state.message}
                                        color="Green" 
                                        />
                                </div>
                            )
                        }
                    </div>
                </div>
            )
        }
    }
}
