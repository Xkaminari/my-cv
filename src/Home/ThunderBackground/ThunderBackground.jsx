import React from "react";
import Thunder from "./thunder.png"

class ThunderBackground extends React.Component {
    render() {
        return <>
            <img className="thunder thunder1" src={Thunder} alt="thunder png" />
            <img className="thunder thunder2" src={Thunder} alt="thunder png" />
        </>
    }
}

export default ThunderBackground;