import React from "react";
import { Link } from "react-router-dom";
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
        return <div className="CtaAndTeaser" onMouseEnter={this.enterTeaser.bind(this)} onMouseLeave={this.leaveTeaser.bind(this)}>
                    <div className="Teaser">
                        <div className="img-teaser-container">
                        <img className="img-teaser" src={TeaserImg} alt="Med Yassine chahboun profile pick" />
                        </div>
                        <div className="Teaser-details">
                            <div className="Teaser-text">
                                <p>Need a skilled developper? I'm your man.
                                    Know more about your future developper
                                    by clicking on the explore button below.</p>
                            </div>
                        </div>
                    </div>
                    <Link to="/AboutMe"><button className="Btn-type1 teaser-btn">Explore</button></Link>
                </div>
    }
}

export default CtaAndTeaser;