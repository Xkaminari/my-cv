import React from "react";
import MainImg from '../img/Med-Yassine-Smiling.webp';

class RightSide extends React.Component {
    render() {
        return <div className="RightSide">
        <img className="Main-img" src={MainImg} alt="test" />
        </div>
    }
}

export default RightSide;