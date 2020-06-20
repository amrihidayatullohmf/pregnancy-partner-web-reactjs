import React from 'react';
import './../App.css';
import './../Assets/Css/Style.css';

export default class PanelBoxes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: props.Contents 
        };
    }

    render() {
        return (            
            <div className="PanelBoxContainer">
            {
                this.state.contents.map((dinamis, key)=>
                <div className="PanelContent">
                    <div className="ImageContainer">
                        <img src={dinamis.imagePanel} alt={dinamis.titleText} />
                    </div>
                    <h2>{dinamis.titleText}</h2>
                    <p>{dinamis.descText}</p>
                </div>
                )
            }
            </div>
        )
    }
}
