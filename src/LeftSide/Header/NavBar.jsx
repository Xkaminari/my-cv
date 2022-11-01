import React from 'react'

class NavBar extends React.Component{
    render() {
        return <nav>
                    <ul className="nav-list">
                        <li><a href="#Home">Home</a></li>
                        <li>About me</li>
                        <li>Portfolio</li>
                        <li>Contact me</li>
                    </ul>
                </nav>
    }
}

export default NavBar;