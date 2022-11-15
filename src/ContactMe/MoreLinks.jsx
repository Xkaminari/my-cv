import React, { Component } from 'react'

export default class MoreLinks extends Component {
    render() {
        return (
            <div className='links-section'>
                <h2>Some sources that might interest you</h2>
                <ul className='links-list'>
                    <li><i class="fa-brands fa-github"></i><a href="https://github.com/Xkaminari">Xkaminari</a></li>
                    <li><i class="fa-brands fa-instagram"></i><a href="https://www.instagram.com/med_yassine_chahboun/">med_yassine_chahboun</a></li>
                    <li><i class="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/med-yassine-chaboun-300603239/">med-yassine-chaboun</a></li>
                    <li><i class="fa-brands fa-twitter"></i><a href="https://twitter.com/FLkami_">Tweeter</a></li>
                    <li><i class="fa-brands fa-youtube"></i><a href="https://www.youtube.com/channel/UC9U23xWoAyYMpiL-kBee1eg">FLkami</a></li>
                </ul>
            </div>
        )
    }
}
