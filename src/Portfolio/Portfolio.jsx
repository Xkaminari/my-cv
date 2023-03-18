import React, { Component } from 'react'
import Header from '../Home/LeftSide/Header/Header'
import ThunderBackground from '../Home/ThunderBackground/ThunderBackground'
import './Portfolio.css'

export default class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            iframeLink: "https://xkaminari.github.io/Shivka-project/",
        }
    }
    
    changeIframeUrl(url) {
        this.setState({
            iframeLink: "url",
        })
    }
    
    render() {
        return (
            <div className='portfolio'>
                <ThunderBackground/>
                <Header/>
                <div className="portfolio-main">
                    <div className="choose-a-project">
                        <ul className='list-projects'>
                            <li onClick={() => this.setState({iframeLink:"https://xkaminari.github.io/smokey-web-site/"})}>Smokey Burgers</li>
                            <li onClick={() => this.setState({iframeLink:"https://xkaminari.github.io/Shivka-project/"})}>Shivka</li>
                            <li onClick={() => this.setState({iframeLink:"https://xkaminari.github.io/Formulaire/"})}>Exemple Form</li>
                            <li onClick={() => this.setState({iframeLink:"https://xkaminari.github.io/Concours-FS-28---Med-Yassine-Chaboun/"})}>Concours(maquette)</li>
                            <li>Empty</li>
                            <li>Empty</li>
                            <li>Empty</li>
                            <li>Empty</li>
                            <li>Empty</li>
                            <li>Empty</li>
                            <li>Empty</li>
                        </ul>
                    </div>
                    <div className='web-site-preview'>
                        <div className='top-bar'>
                            <div className='portfolio-red-btn portfolio-btn'></div>
                            <div className='portfolio-green-btn portfolio-btn'></div>
                            <div className='portfolio-yellow-btn portfolio-btn'></div>
                        </div>
                        <iframe className='preview' src={this.state.iframeLink}></iframe>
                        <div className="bottom-bar"></div>
                    </div>
                    <div className="Kanjis" id='kanji'>
                        <p>雷</p>
                        <p>遁</p>
                    </div>
                </div>
            </div>
        )
    }
}
