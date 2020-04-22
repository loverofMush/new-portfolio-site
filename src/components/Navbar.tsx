import React from 'react';
import '../styles/navbar.css';

export const Navbar: React.FC = ():JSX.Element => {
    return (
        <nav id="nav" role="navigation" className="navbar">
            <ul id="navbar-nav_menu" className="">
                <li id="nav-item-1" className="nav-item active">
                    <a title="About Ian Lunn – Web Designer &amp; Front-end Developer" href="about">About</a>
                </li>
                <li id="nav-item-2" className="nav-item">
                    <a title="Portfolio of Web Design &amp; Front-end Development Projects" href="#portfolio">
                        Portfolio
                    </a>
                </li>
                <li id="nav-item-3" className="contact">
                    <a title="Hire Tim" href="#contact-me">Hire Tim</a>
                </li>
            </ul>				
        </nav>
    );
}