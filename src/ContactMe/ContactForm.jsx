import React, { Component } from 'react'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

let NameValidity = false;
let EmailValidity = false;

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
        theInput.style.backgroundColor = "rgba(12,11,11,0.75)";
    }
    
    checkNameValidity(nameInput) {
        if (this.state.name.length < 2) {
            this.errorMsg(nameInput, "Too short !", ".errorName");
            NameValidity = false;
        }
        else if (this.state.name.match(/\d/)) {
            this.errorMsg(nameInput, "A name can not contain digits !", ".errorName");
            NameValidity = false;
        }
        else {
            this.goodAnswer(nameInput, ".errorName");
            NameValidity =  true;
        }
    }
    
    checkEmailValidity(emailInput) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.mail)) {
            this.goodAnswer(emailInput, ".errorMail");
            EmailValidity = true;
        } 
        else {
            this.errorMsg(emailInput, "Entre a valid email adresse !", ".errorMail");
            EmailValidity = false;
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
        if (NameValidity && EmailValidity) {
            e.preventDefault();
            let params = {
                from_name: this.state.name,
                his_mail: this.state.mail,
                message: this.state.message,
            }
            
            emailjs.send("service_ldpwky3", "template_j3udeiv", params, "QiZ-9ohyZp-q256fC")
            
            toast("Votre msg a bien été envoyer !", {
                duration: 4000,
                position: 'top-center',
                icon: '✅',
            })
        }
    }
    
    render() {
        return (
        <>
        <Toaster/>
        <div className='Contact-me-form'>
            <form onSubmit={this.submit.bind(this)} >
                <h2 className='contactMe-tiltle'>Contact Me</h2>
                <div>
                    <label>Name</label>
                    <input autoComplete='off' value={this.state.name} onChange={this.handleChage.bind(this)} type="text" id="name"></input>
                    <p className='errorName'></p>
                </div>
                <div>
                    <label>Email </label>
                    <input autoComplete='off' value={this.state.mail} onChange={this.handleChage.bind(this)} type="email" id="mail"></input>
                    <p className='errorMail'></p>
                </div>
                <div>
                    <label htmlFor="floatingTextarea">Message</label>
                    <textarea className="form-control" placeholder="Leave a comment here" id="message" value={this.state.message} onChange={this.handleChage.bind(this)}></textarea>
                </div>
                <button id='form-btn'>Send</button>
            </form>
        </div>
        </>
        )
    }
}
