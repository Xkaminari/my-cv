import React from "react";
import MainImg from './MedYassineSmiling.webp';

class RightSide extends React.Component {
    render() {
        return <div className="RightSide">
        <img className="Main-img" src={MainImg} alt="test" /> 
        <div className="RightSide-text">
        <p>A perfect smile, isn't it?</p>
        <br/>
        <p>If you can't wait to build your project 
            you can directly click on the "contact me" 
            button to book an appointment with me!</p>
        <button className="Btn-type1 RightSide-btn">Contact me</button>
        </div>
        </div>
    }
}

export default RightSide;