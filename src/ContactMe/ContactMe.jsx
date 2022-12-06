import React, { Component } from 'react'
import Header from '../Home/LeftSide/Header/Header'
import ContactForm from './ContactForm'
import './ContactMe.css'
import MoreLinks from './MoreLinks'

export default class ContactMe extends Component {
    render() {
        return (
            <div className='Contact-me-content'>
            <Header/>
            <div className='Contact-me-contente'>
                <ContactForm/>
                <MoreLinks/>
            </div>
            </div>
        )
    }
}
