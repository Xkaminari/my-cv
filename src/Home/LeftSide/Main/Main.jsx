import React from "react";
import HomeContent from "./HomeContent/HomeComtent";
import Presentation from "./Presentation/Presentation";

class Main extends React.Component {
    render() {
        return <main>
            <Presentation/>
            <HomeContent/>
        </main>
    }
}

export default Main;