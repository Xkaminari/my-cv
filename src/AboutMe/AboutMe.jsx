import React, { Component } from "react";
import Header from "../Home/LeftSide/Header/Header";
import MedYassinePick from "../Home/LeftSide/Main/Med-Yassine's-Profil-pick.webp";
import "./AboutMe.css";
import "./AboutMeMobileVS.css";
import { Link } from "react-router-dom";

export default class AboutMe extends Component {
    render() {
    return (
            <>
                <div className="About-me">
                    <div className="Abm-RightSide">
                        <img
                        className="About-me-main-img"
                        src={MedYassinePick}
                        alt="Med Yassine's profile pickture"
                        />
                    </div>
                    <div className="Abm-LeftSide">
                        <Header />
                        <div className="Abm-container">
                            <div className="my-history">
                                <p>
                                    My name is Mohamed Yassine Chahboun, I'm 18 and I'm already a full stack web developper.
                                    I develop web applications with different technologies for particulars and startups, and
                                    I love working on ambitious projects so let's make your dream project come true.
                                </p>
                            </div>
                            <Link to="/Portfolio" className="Btn-type1" id="Abm-btn"><span className="Abm-btn-text">Projects</span><div className="Baground-btn"></div></Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
