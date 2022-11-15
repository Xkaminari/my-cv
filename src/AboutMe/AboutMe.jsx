import React, { Component } from "react";
import Header from "../Home/LeftSide/Header/Header";
import ThunderBackground from "../Home/ThunderBackground/ThunderBackground";
import MedYassinePick from "../Home/LeftSide/Main/HomeContent/Med-Yassine's-Profil-pick.webp";
import "./AboutMe.css";
import { Link } from "react-router-dom";

export default class AboutMe extends Component {
    render() {
    return (
            <>
                <ThunderBackground />
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
                        <div className="my-history">
                            <p>
                                Bonjour moi c Med Yassine chahboun j’ai 18 ans et mon objectif
                                est de devenir expert web developer en seulement 3 ans. Après
                                l'obtention de mon bac j’ai intégré un bootcamp de 5 mois à la
                                3w Academy afin de faire de ma passion mon travail et de mes
                                rêves une réalité.
                            </p>
                            <p>
                                Ce que j’ai appris pour l'instant durant ce
                                boot camp c’est la maîtrise de HTML5, CSS3 et JavaScript (react)
                                en terme de langage mais j’ai aussi appris à utiliser des
                                plateforme et logiciel comme git/github et lunacy pour le
                                désigne. On a vu aussi des concepts plus poussés relier au
                                front-end comme UI et UX. Ce qui me définis personnellement
                                c’est ma réflexion a tendance pragmatique et cartésienne ce qui
                                me permet d’avoir un grand recule sur mon travaille, je suis
                                aussi un leader né j’ai eu l'occasion de le découvrir au cours
                                des tournois de jeux vidéo que j’ai disputé en ligne dans
                                laquelle j'étais le leader de mon équipe, je me caractérise
                                aussi par ma nature très curieuse ce qui explique mon intérêt
                                pour des sujet divers et varié comme la philo, le code, le
                                développement personnel, la composition musical et le sport plus
                                précisément le StreetWorkout.
                            </p>
                            <p className="Abm-last-p">
                                Pour avoir toute les carte en main
                                afin d’atteindre mon objectif ce qui me manque actuellement
                                c’est la maîtrise back-end du web que je compte aquerire d’ici
                                la fin de mon bootcamp en maîtrisant php et son framework
                                laravel, MySQL mais aussi des outil tel que firebase et ce n’est
                                qu'à ce moments là ou je débuterais mon ascension vers le statut
                                d'expert web developer donc si tu es intéressé n'hésite pas à
                                jeter un oeuil sur mon portfolio en première ligne de
                                description et qui sait peut 'être que tu vas être séduit et
                                donc rejoindre mon aventure.
                            </p>
                        </div>
                        <Link to="/Portfolio"><button className="Btn-type1" id="Abm-btn">Voir mon travaille</button></Link>
                    </div>
                </div>
            </>
        );
    }
}
