import React, { Component } from 'react'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

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
    handleChage(e) {
        let nameInput = e.target.id
        this.setState({
            [nameInput] : e.target.value
        })
    }
    submit(e){
        e.preventDefault();
        let params = {
            site_name : "Med yassine's web site",
            from_name : this.state.name,
            from_email : this.state.subject,
            from_subject : this.state.message
        }
        
        emailjs.send("service_ldpwky3", "template_j3udeiv", params, "QiZ-9ohyZp-q256fC")
        
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
                <label>Name</label>
                <input value={this.state.name} onChange={this.handleChage.bind(this)} type="text"  className="form-control" id="name" aria-describedby="name"></input>
                <label>Email </label>
                <input value={this.state.mail} onChange={this.handleChage.bind(this)} type="email" className="form-control" id="mail" aria-describedby="emailHelp"></input>
                <textarea className="form-control" placeholder="Leave a comment here" id="message" value={this.state.message} onChange={this.handleChage.bind(this)}></textarea>
                <label htmlFor="floatingTextarea">Comments</label>
                <button>Send</button>
            </form>
        </div>
        </>
        )
    }
}
