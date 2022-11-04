import React from 'react'
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
    render() {
        return <nav>
                    <ul className="nav-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/AboutMe">About me</Link></li>
                        <li><Link to="/Portfolio">Portfolio</Link></li>
                        <li><Link to="/ContactMe">Contact me</Link></li>
                    </ul>
                </nav>
    }
}

export default NavBar;