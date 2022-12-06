import React from "react";
import { Link } from "react-router-dom";
import TeaserImg from "./Med-Yassine's-Profil-pick.webp"

class Main extends React.Component {
    render() {
        return <main>
            <h1 className="Presentation">I'm Med Yassine chahboun<span className="Presentation-span">Your full-stack Developper</span>
                <p className="Slogan">And a futur expert</p>
            </h1>
            <div className="HomeContent">
                <div className="Teaser">
                    <div className="img-teaser-container">
                        <img className="img-teaser" src={TeaserImg} alt="Med Yassine chahboun profile pick" />
                    </div>
                    <div className="Teaser-details">
                        <div className="Teaser-text">
                            <p>Need a skilled developper? I'm your man.
                                Get to know more about your future developper !</p>
                        </div>
                    </div>
                </div>
                <Link to="/AboutMe" className="Btn-type1 teaser-btn"><span className="teaser-btn-text">Let's go</span><div className="Baground-btn"></div></Link>
            </div>
        </main>
    }
}

export default Main;