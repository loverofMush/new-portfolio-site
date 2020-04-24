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
            scrollNav.style.position = 'sticky';
            scrollNav.style.background = 'rgb(29, 53, 59)';
            scrollNav.style.borderBottom = '2px solid #132b2f';
        } else {
            scrollNav.style.position = 'relative';
            scrollNav.style.background = 'transparent';
            scrollNav.style.borderBottom = 'none';
        }
    }

    const toggleMenu = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
        e.preventDefault();
        console.log('hey');
        // setHidden(!hidden);
        // setShow(!show);

        // const side = document.getElementById('root');
        // if (show === true) {
        //     side?.classList.add('show-sidebar');
        // } else {
        //     side?.classList.remove('show-sidebar');
        // }
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
                    <Link
                        // activeClass="active"
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Hire Tim
                    </Link>
                </li>
                {/* <li id="nav-item-1" className="nav-item active">
                    <a title="About Ian Lunn – Web Designer &amp; Front-end Developer" href="#about">About</a>
                </li>
                <li id="nav-item-2" className="nav-item">
                    <a title="Portfolio of Web Design &amp; Front-end Development Projects" href="/">
                        Portfolio
                    </a>
                </li>
                <li id="nav-item-3" className="contact">
                    <a title="Hire Tim" href="#contact-me">Hire Tim</a>
                </li> */}
            </ul>				
        </nav>
    );
}