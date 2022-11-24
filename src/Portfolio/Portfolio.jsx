import React, { Component } from 'react'
import Header from '../Home/LeftSide/Header/Header'
import ThunderBackground from '../Home/ThunderBackground/ThunderBackground'
import './Portfolio.css'

export default class Portfolio extends Component {
    render() {
        return (
            <div className='portfolio'>
                <ThunderBackground/>
                <Header/>
                <div className="portfolio-main">
                    <div className="choose-a-project">
                        <h2>Choose a project to see</h2>
                        <ul className='list-projects'>
                            <li>project</li>
                            <li>project</li>
                            <li>project</li>
                            <li>project</li>
                            <li>project</li>
                            <li>project</li>
                        </ul>
                    </div>
                    <div className='web-site-preview'>
                        <div className='top-bar'>
                            <div className='portfolio-red-btn portfolio-btn'></div>
                            <div className='portfolio-green-btn portfolio-btn'></div>
                            <div className='portfolio-yellow-btn portfolio-btn'></div>
                        </div>
                        <iframe className='preview' src="https://xkaminari.github.io/Shivka-project/"></iframe>
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
