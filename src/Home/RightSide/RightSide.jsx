import React from "react";
import MainImg from './MedYassineSmiling.webp';

class RightSide extends React.Component {
    render() {
        return <div className="RightSide">
                <img className="Main-img" src={MainImg} alt="test" />
        </div>
    }
}

export default RightSide;