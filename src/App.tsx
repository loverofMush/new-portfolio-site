import React from 'react';
import logo from './images/1.png';
import './App.css';
import { Navbar } from './components/Navbar';

function App() {
    return (
        <header id="headerWrapper" className="headerWrapper" role="banner">
            <img src={logo} id="logo-1" className="App-logo" alt="logo" />
            <Navbar />
            <div className="header-inner">
                <div className="header-divider">
                    <div className="container section text-center">
                        <div className="row">
                            <div className="col-md-10 col-lg-7 mx-auto">
                                <h1 className="intro">
                                    <p id="greet"><span></span></p>
                                </h1>
                                <div className="locale">  
                                    <p id="bio-text">A web developer based in Lagos, Nigeria.
                                        I love creating beautiful and functional mobile-first web applications.
                                    </p>
                                </div>
                                <a href="#pricing" className="btn btn-secondary--gradient">Get started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default App;
