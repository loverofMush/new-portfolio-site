import React from 'react';
import Header from './components/Header';
import './App.css';
import Section from './components/Section';
import dummyText from "./DummyText";

function App() {
    return (
        <>
            <Header />
            <div className="main">
                <section className="main-header">
                    <div className="main-inner">
                        <div className="main-divider">
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
                </section>
                <Section
                    title="Projects"
                    subtitle={dummyText}
                    dark={true}
                    id="projects"
                />
                <Section
                    title="About"
                    subtitle={dummyText}
                    dark={false}
                    id="about"
                />
            </div>
        </>
    );
}

export default App;
