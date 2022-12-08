import React, { Component } from 'react'
import Header from '../Home/LeftSide/Header/Header'
import './Portfolio.css'
import './PortfolioMobileVS.css'

export default class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            iframeLink: "",
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
                <Header/>
                <div className="portfolio-main">
                    <div className="choose-a-project choose-a-project-descktopVS">
                        <h2 className='choose-project-title'>Select a project to see</h2>
                        <ul className='list-projects'>
                            <li onClick={() => this.setState({iframeLink:"https://xkaminari.github.io/Formulaire/"})}>Exemple Form</li>
                            <li onClick={() => this.setState({iframeLink:"https://xkaminari.github.io/Concours-FS-28---Med-Yassine-Chaboun/"})}>Concours(maquette)</li>
                            <li>Empty</li>
                            <li>Empty</li>
                            <li>Empty</li>
                            <li>Empty</li>
                            <li>Empty</li>
                            <li>Empty</li>
                        </ul>
                    </div>
                    <div className="choose-a-project choose-a-project-mobileVS">
                        <h2 className='choose-project-title'>Select a project to see</h2>
                        <ul className='list-projects'>
                            <li><a href="https://xkaminari.github.io/Formulaire/">Exemple Form</a></li>
                            <li><a href="https://xkaminari.github.io/Concours-FS-28---Med-Yassine-Chaboun/">Concours(maquette)</a></li>
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
                </div>
            </div>
        )
    }
}
