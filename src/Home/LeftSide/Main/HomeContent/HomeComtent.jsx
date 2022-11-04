import React from "react";
import CtaAndTeaser from "./CtaAndTeaser/CtaAndTeaser";
import Kanjis from "./Kanjis/Kanjis";

class HomeContent extends React.Component {
    render() {
        return <div className="HomeContent">
        <Kanjis/>
        <CtaAndTeaser/>
        </div>
    }
}

export default HomeContent;