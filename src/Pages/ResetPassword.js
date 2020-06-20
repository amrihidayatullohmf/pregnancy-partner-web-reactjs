import React from 'react';
import TitleBar from './../Component/TitleBar';
import ApiConfig from './../ApiConfig.json';
//import SweetAlert from 'sweetalert2-react';
import LoadingAnimation from './../Assets/Static/loading.gif';
import Swal from 'sweetalert2';
import './../App.css';
import './../Assets/Css/Style.css';

export default class AboutUs extends React.Component {
    constructor(props) {
        super(props);

        const { uidtoken, email, hashtoken } = props.match.params;

        this.state = {
            notifShow: false,
            isValidating: false,
            isSuccess: true,
            formData: {
                uid: uidtoken,
                hash: hashtoken,
                email: email,
                new_password: '',
                new_password_confirm: ''
            }
        }
    }

    onInputChange = (event) => {
        this.setState({
            ...this.state,
            formData: {
                ...this.state.formData,
                [event.target.name]: event.target.value
            }
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        let valid = true;
        
        this.setState({
            ...this.state,
            isValidating: true
        });

        console.log(this.state.formData);

        if(this.state.formData.new_password === '' || this.state.formData.new_password_confirm === '') {
            Swal.fire('Ops','Please complete this form correctly !','error');
            valid = false;
        }

        if(this.state.formData.new_password != this.state.formData.new_password_confirm) {
            Swal.fire('Ops','Please retype password correctly !','error');
            valid = false;
        }

        if(valid) {        
            var formBody = [];
            for (var property in this.state.formData) {
                var encodedKey = encodeURIComponent(property);
                var encodedValue = encodeURIComponent(this.state.formData[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
        
            fetch(ApiConfig.apiHost+'user/resetpassword',{
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

                this.setState({
                    ...this.state,
                    isValidating: false
                });

                if(data.code == 200) {
                    Swal.fire('Yeay',data.message,'success');
                } else {
                    Swal.fire('Ops',data.message,'error');
                }
            });
    
        } else {
            this.setState({
                ...this.state,
                isValidating: false
            });
        }
    }

    render() {
        return (
            <div>
                <div className="Segment Green">&nbsp;</div>
                <div className="Segment Gray">
                    <TitleBar 
                        heading="Create Your New Password"
                        desc="Please enter your new password on form bellow"
                        color="Green" 
                        />
                    <form onSubmit={this.onFormSubmit}>
                        <div className="FormArea">
                            <div className="Field">
                                <input type="password" placeholder="Password" name="new_password" onChange={this.onInputChange} />
                            </div>
                            <div className="Field">
                                <input type="password" placeholder="Retype Password" name="new_password_confirm" onChange={this.onInputChange} />
                            </div>
                            <div className="ButtonArea">
                                {
                                    this.state.isValidating 
                                    ? (
                                        <img src={LoadingAnimation} with="30" height="30" />
                                    ) : (
                                        <button className="Pink Full" type="Submit">Reset Password</button>
                                    )
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
        
    }
}

/*
            <SweetAlert
                    show={this.state.notifShow}
                    title="Demo"
                    text="SweetAlert in React"
                    onConfirm={() => this.setState({ notifShow: false })}
                />
*/