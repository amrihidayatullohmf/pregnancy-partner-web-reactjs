import React from 'react';
import TitleBar from './../Component/TitleBar';
import './../App.css';
import './../Assets/Css/Style.css';

export default class PrivacyPolicy extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="Segment Green">&nbsp;</div>
                <div className="Segment Gray">
                    <TitleBar 
                        heading="Privacy Policy"
                        desc=""
                        color="Black" 
                        />
                    <div className="BodyText">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nunc ac massa malesuada rhoncus ut vel eros. Phasellus vel congue velit. Curabitur nec aliquam sem. Nam vestibulum accumsan vestibulum. Aenean ipsum sapien, viverra sit amet orci at, semper condimentum nisl. Donec scelerisque eros sed sem consectetur tincidunt. Curabitur lobortis egestas ullamcorper. Nulla faucibus quam id ultrices molestie.</p>
                        <p>Donec cursus augue et mauris tempor, vestibulum viverra erat pretium. Vestibulum eget felis et elit pretium faucibus. Donec pretium vehicula facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper accumsan odio imperdiet tincidunt. Morbi non semper tellus, eu bibendum lorem. In vitae malesuada est, vitae viverra diam. Nam convallis libero nunc, eget pellentesque ligula pharetra in. Ut faucibus feugiat velit, quis convallis orci imperdiet accumsan. Mauris tempor consectetur nulla eget tincidunt. Vestibulum molestie orci at nulla dictum volutpat. Quisque accumsan imperdiet posuere. Nullam sit amet laoreet magna. Fusce nec placerat metus, eu accumsan ante.</p>
                        <p>Proin tincidunt, est ut volutpat maximus, nibh nibh cursus leo, in feugiat ante felis vel dui. Nulla dictum ligula non magna dignissim, ullamcorper dictum magna consequat. Proin euismod lectus eget erat fermentum ultricies. Curabitur commodo metus sit amet tellus viverra imperdiet. Nullam lacinia pellentesque velit, vel laoreet enim ornare quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus magna lectus, dignissim eu malesuada eget, elementum ut lorem. Nam condimentum turpis sed rhoncus finibus. Proin finibus leo ante, a lobortis tortor dictum eu. Ut suscipit leo sed posuere mattis. Morbi ac dui euismod, tincidunt sem nec, fermentum sem. Morbi eu tortor ullamcorper metus laoreet condimentum a nec dui. Suspendisse potenti. Pellentesque vitae magna porta, condimentum nunc a, placerat ex. Suspendisse potenti.</p>
                    </div>
                </div>
            </div>
        )
    }
}
