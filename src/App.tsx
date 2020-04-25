import React from 'react';
import Header from './components/Header';
import './App.css';
import Section from './components/Section';
import { Projects, About } from './Contents';
import Footer from './components/Footer';
import { Link } from "react-scroll";

function App() {
    return (
        <>
            <Header />
            <div className="main">
                <section className="main-header">
                    <div className="main-inner">
                        <div className="main-divider">
                            <div className="scroll container section text-center">
                                <div className="row">
                                    <div className="col-md-10 col-lg-7 mx-auto">
                                        <h1 className="intro">
                                            <p id="greet"><span></span></p>
                                        </h1>
                                        <div className="locale">  
                                            <p id="bio-text">A web developer based in Lagos, Nigeria.
                                                <br/>
                                                I love building functional mobile-first web applications.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Link to="projects" spy={true} smooth={true}><span></span>Scroll</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <Section
                    content={Projects}
                    dark={true}
                    id="projects"
                />
                <Section
                    content={About}
                    dark={false}
                    id="about"
                />
            </div>
            <Footer />
        </>
    );
}

export default App;
