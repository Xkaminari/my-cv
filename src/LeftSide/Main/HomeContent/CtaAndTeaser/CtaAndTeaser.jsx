import React from "react";
import TeaserImg from "../Med-Yassine's-Profil-pick.webp"

class CtaAndTeaser extends React.Component {
    render() {
        return <div className="CtaAndTeaser">
        <div className="Cta">
            <button className="Btn-type1">Book an appointement</button>
            <div className="Check-work">
                <p className="Check-work-text">Check out my work</p>
                <div className="Arrow">
                    <div className="arrow-head"></div>
                </div>
            </div>
        </div>
        <div className="Teaser">
            <div className="img-teaser-container">
            <img className="img-teaser" src={TeaserImg} alt="Med Yassine chahboun profile pick" />
            </div>
            <div className="Teaser-details">
                <div className="Teaser-text">
                    <p>Need a work to be done? Iam your man.</p>
                    <p>In the section below you will learn more </p>
                    <p>about your future developper.</p>
                </div>
                <div className="module-border-wrap">
                    <button className="Btn-type2">Explore</button>
                </div>
            </div>
        </div>
        </div>
    }
}

export default CtaAndTeaser;