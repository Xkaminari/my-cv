import React from "react"
import Header from "./Header/Header"
import Main from "./Main/Main";


class LeftSide extends React.Component {
    render() {
        return <div id="Home" className="LeftSide">
            <Header/>
            <Main/>
        </div>
    }
}

export default LeftSide;