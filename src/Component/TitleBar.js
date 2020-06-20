import React from 'react';
import './../App.css';
import './../Assets/Css/Style.css';

export default class TitleBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headingText: props.heading,
            descText: props.desc,
            colorTitle: props.color
        };
    }

    render() {
        return (
            <div className="TitleBar">
                <h1 className={this.state.colorTitle}>{this.state.headingText}</h1>
                {this.state.descText !== '' ? (<p className={this.state.colorTitle}>{this.state.descText}</p>) : ('')}
            </div>
        )
    }
}