import React, { useState } from 'react';
import logo from '../images/1.png'
import { Link } from "react-scroll";
import '../styles/navbar.css';
import { useWindowScroll } from '../useWindowScroll';
import { useWindowResize } from '../useWindowResize';


export const Navbar: React.FC = (): JSX.Element => {
    const { scrollY } = useWindowScroll();
    const { width } = useWindowResize();
    const [show, setShow] = useState<boolean>(true);

    const scrollNav = document.querySelector('.navbar') as HTMLElement;

    if(scrollNav) {
        if(scrollY > 40) {
            scrollNav.style.background = '#7a19f1';
            scrollNav.style.borderBottom = '#0000001c 2px solid';
        } else {
            scrollNav.style.background = 'transparent';
            scrollNav.style.borderBottom = 'none';
        }
    }

    const toggleMenu = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
        e.preventDefault();
        
        setShow(!show);

        const side = document.getElementById('navbar-nav_menu');
        if(side) {
            if (show === true) {
                side.style.display = 'inline-flex';
            } else {
                side.style.display = 'none';
            }
        }
    };

    return (
        <nav id="nav" role="navigation" className="navbar">
            <img 
                src={logo} 
                id="logo-1" 
                className="App-logo" 
                alt="logo" 
            />
            {width < 721 && (
                <div className="hamburger-menu">
                    {show ? (
                        <i className="mdi mdi-sort-variant" onClick={toggleMenu}></i>
                    ) : (
                        <i className="mdi mdi-close" onClick={toggleMenu}></i>
                    )}
                </div>
            )}
            <ul id="navbar-nav_menu" className="">
                <li className="nav-item">
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Projects
                    </Link>
                </li>
                <li className="contact-me">
                    <a
                        href={"mailto:akinyelut@gmail.com"}
                    >
                        <i className="fa fa-paper-plane"></i>
                        Email Tim
                    </a>
                </li>
            </ul>				
        </nav>
    );
}