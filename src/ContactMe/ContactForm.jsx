import React, { Component } from 'react'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

let Name = document.querySelectorAll('input[type="text"]');
let userEmail = document.querySelector('input[type="email"]');

export default class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            mail:'',
            message:'',
        }
        document.title = "ContactMe"
    }
    
    // ----------------------------------------forme imputs Values----------------------------------------
    
    errorMsg(theInput, theMsg, pId) {
        let p = document.querySelector(pId);
        p.style.color = "var(--LightRed)";
        p.innerText = theMsg;
        theInput.style.backgroundColor = "var(--LightRed)";
        setTimeout(() => {
            p.innerText = "";
        }, 10000)
    }
    
    goodAnswer(theInput, pId) {
        let p = document.querySelector(pId);
        p.style.color = "#FFFFFF";
        p.innerText = "";
        theInput.style.backgroundColor = "var(--LightWhite)";
    }
    
    checkNameValidity(nameInput) {
        if (this.state.name.length < 2) {
            this.errorMsg(nameInput, "Too short !", ".errorName");
        }
        else if (this.state.name.match(/\d/)) {
            this.errorMsg(nameInput, "A name can not contain digits !", ".errorName");
        }
        else if (this.state.name.match(/\w/)) {
            console.log("gijer");
            this.errorMsg(nameInput, "A name can not contain special characters !", ".errorName");
        }
        else {
            this.goodAnswer(nameInput, ".errorName");
        }
    }
    
    checkEmailValidity(emailInput) {
        console.log(this.state.mail);
        if (this.state.mail.endsWith("@gmail.com")) {
            this.goodAnswer(emailInput, ".errorMail");
        }
        else {
            this.errorMsg(emailInput, "Entre a valid email adresse !", ".errorMail");
        }
    }
    // --------------------------------------------------------------------------------------------------
    
    handleChage(e) {
        let nameInput = e.target.id
        this.setState({
            [nameInput] : e.target.value
        })
        if (e.target.type === "text") {
            this.checkNameValidity(e.target);
        }
        else {
            this.checkEmailValidity(e.target);
        }
    }
    
    submit(e){
        e.preventDefault();
        let params = {
            site_name : "Med yassine's web site",
            from_name : this.state.name,
            from_email : this.state.subject,
            from_subject : this.state.message
        }
        
        // emailjs.send("service_ldpwky3", "template_j3udeiv", params, "QiZ-9ohyZp-q256fC")
        
        this.setState({
            name:'',
            mail:'',
            message:'',
        })
        
        toast("Votre msg a bien été envoyer !", {
            duration: 4000,
            position: 'top-center',
            icon: '✅',
        })
    }
    changeMessage(e){
        this.setState({
        message:e.target.value
        })
    }
    render() {
        return (
        <>
        <Toaster/>
        <div className='Contact-me-form'>
            <h2>Contact Me</h2>
            <form onSubmit={this.submit.bind(this)} >
                <div>
                    <label>Name</label>
                    <input value={this.state.name} onChange={this.handleChage.bind(this)} type="text" id="name"></input>
                    <p className='errorName'></p>
                </div>
                <div>
                    <label>Email </label>
                    <input value={this.state.mail} onChange={this.handleChage.bind(this)} type="email" id="mail"></input>
                    <p className='errorMail'></p>
                </div>
                <div>
                    <label htmlFor="floatingTextarea">Comments</label>
                    <textarea className="form-control" placeholder="Leave a comment here" id="message" value={this.state.message} onChange={this.handleChage.bind(this)}></textarea>
                </div>
                <button id='form-btn'>Send</button>
            </form>
        </div>
        </>
        )
    }
}
