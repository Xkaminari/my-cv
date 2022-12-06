import React, { Component } from 'react'
import Header from '../Home/LeftSide/Header/Header'
import ContactForm from './ContactForm'
import './ContactMe.css'

export default class ContactMe extends Component {
    render() {
        return (
            <div className='Contact-me-content'>
                <Header/>
                <div className='Contact-me-contente'>
                    <ContactForm/>
                    <div className='links-section'>
                        <h2 className='contactMe-tiltle'>Some sources that might interest you</h2>
                        <ul className='links-list'>
                            <li><i class="fa-brands fa-github"></i><a href="https://github.com/Xkaminari">Xkaminari</a></li>
                            <li><i class="fa-brands fa-instagram"></i><a href="https://www.instagram.com/med_yassine_chahboun/">med_yassine_chahboun</a></li>
                            <li><i class="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/med-yassine-chaboun-300603239/">med-yassine-chahboun</a></li>                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
