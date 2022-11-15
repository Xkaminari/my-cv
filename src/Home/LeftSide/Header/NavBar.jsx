import React from 'react'
import { Link } from 'react-router-dom';

let isNavDisplayed = false;

class NavBar extends React.Component{
    displayNavList() {
        let navList = document.querySelector('.nav-list');
        if(isNavDisplayed === false) {
            navList.style.display = "flex";
            setTimeout(() => {
                navList.style.opacity = "1";
            }, 10)
            isNavDisplayed = true;
        }
        else {
            navList.style.opacity = "0";
            setTimeout(() => {
                navList.style.display = "none";
            }, 800)
            isNavDisplayed = false;
        }
    }

    render() {
        return <div className="nav-bar">
        <nav>
            <button className="nav-btn" onClick={this.displayNavList.bind(this)}><i class="fa-solid fa-bars"></i></button>
        </nav>
        <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/AboutMe">About me</Link></li>
            <li><Link to="/Portfolio">Portfolio</Link></li>
            <li><Link to="/ContactMe">Contact me</Link></li>
        </ul>
        </div>
}
}

export default NavBar;