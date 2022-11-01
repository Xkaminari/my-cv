import React from "react";
import TeaserImg from "../Med-Yassine's-Profil-pick.webp"


class CtaAndTeaser extends React.Component {
    enterTeaser(){
        let teaserText = document.getElementsByClassName('Teaser-text')[0];
        teaserText.classList.add('Teaser-text-hover-form');
        let btn1 = document.getElementsByClassName('module-border-wrap')[0];
        btn1.classList.add('Btn-type1-hover-animation');
    }

    leaveTeaser(){
        let teaserText = document.getElementsByClassName('Teaser-text')[0];
        teaserText.classList.remove('Teaser-text-hover-form');
        let btn1 = document.getElementsByClassName('module-border-wrap')[0];
        btn1.classList.remove('Btn-type1-hover-animation');
    }

    render() {
        return <div className="CtaAndTeaser">
            <div className="Teaser">
                <div className="img-teaser-container" onMouseEnter={this.enterTeaser.bind(this)} onMouseLeave={this.leaveTeaser.bind(this)}>
                <img className="img-teaser" src={TeaserImg} alt="Med Yassine chahboun profile pick" />
                </div>
                <div className="Teaser-details">
                    <div className="Teaser-text">
                        <p>Need a skilled developper? I'm your man.</p>
                        <p>In the section below you will learn more </p>
                        <p>about your future developper.</p>
                    </div>
                    <div className="module-border-wrap">
                        <button className="Btn-type1">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default CtaAndTeaser;