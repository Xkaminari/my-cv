import React, { Component } from 'react'
import Header from '../Home/LeftSide/Header/Header'
import ContactForm from './ContactForm'
import './ContactMe.css'

export default class ContactMe extends Component {
    render() {
        return (
            <div className='Contact-me-content'>
            <Header/>
            <ContactForm/>
            </div>
        )
    }
}
