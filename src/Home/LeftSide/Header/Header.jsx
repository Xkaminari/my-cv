import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';

class Header extends React.Component {
    render() {
        return <header>
        <Logo/>
        <NavBar/>
        </header>
    }
}

export default Header; 