import React from 'react';
import coding from './images/coding.png';

let img01 = require( './images/inventreed.png');
let img02 = require( './images/lukrativ.png');
let img03 = require( './images/rc-pos.png');
let photo = require( './images/tim-with-beard.jpg');

const ulStyles = {
    paddingLeft: 0,
    listStyle: 'none',
}

export const Projects = 
    <>
        <div className="container section">
            <div className="tooltip"><img id="attr-img" src={coding} alt="" />
                <span className="tooltiptext">
                    Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                </span>
            </div>
            <h2 className="pre text-center">Projects</h2>
            <div className="row align-items-center h-100 text-center text-lg-left">
                <div className="col-lg-6 p-lg-0">
                    <picture>
                        <div className="img-container">
                            <div className="img-content">
                                <div className="img-wrapper">
                                    <div className="img-content-overlay"></div>
                                    <img className="img-content-image" src={img03} alt="rc-pos-demo"/>
                                    <div className="img-content-details fadeIn-bottom">
                                        <p>
                                            <a href="https://rc-pos-demo.herokuapp.com" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="img-content-text"
                                            >
                                                View Project
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </picture>
                </div>
                <div className="col-lg-5 mx-auto py-3">
                    <h3 className="h3">RC-POS</h3>
                    <p className="showcase__description mb-4 color-gray">RC-POS is a simple point-of-sale system for small businesses
                    </p>
                </div>
            </div>
            
            <hr/>
        </div>
        <div className="container section">
            <div className="row align-items-center h-100 text-center text-lg-left">
                <div className="col-lg-6 p-lg-0">
                    <picture>
                        <div className="img-container">
                            <div className="img-content">
                                <div className="img-wrapper">
                                    <div className="img-content-overlay"></div>
                                    <img className="img-content-image" src={img01} alt="inventory-management-app"/>
                                    <div className="img-content-details fadeIn-bottom">
                                        <p>
                                            <a href="https://inventreed-demo.herokuapp.com" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="img-content-text"
                                            >
                                                View Project
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </picture>
                </div>
                <div className="col-lg-5 mx-auto py-3">
                    <h3 className="h3">inventreed</h3>
                    <p className="showcase__description mb-4 color-gray">Inventreed is an inventory and sales management application <br /> designed for gas and petrol outlet stations.
                    </p>
                    <p className="color-gray">
                        To test application <br/>
                        <small>email: hills.lauretta@xo.com</small>
                        <br />
                        <small>password: password</small>
                    </p>
                </div>
            </div>
            <hr/>
        </div>
        <div className="container section">
            <div className="row align-items-center h-100 text-center text-lg-left">
                <div className="col-lg-6 p-lg-0">
                    <picture>
                        <div className="img-container">
                            <div className="img-content">
                                <div className="img-wrapper">
                                    <div className="img-content-overlay"></div>
                                    <img className="img-content-image" src={img02} alt="job-site"/>
                                    <div className="img-content-details fadeIn-bottom">
                                        <p>
                                            <a href="https://lukrativ.herokuapp.com" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="img-content-text"
                                            >
                                                View Project
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </picture>
                </div>
                <div className="col-lg-5 mx-auto py-3">
                    <h3 className="h3">lukrativ.io</h3>
                    <p className="showcase__description mb-4 color-gray">Lukrativ.io is a job board where job seekers can search <br/> for verified jobs around their location or elsewhere
                    </p>
                </div>
            </div>
            <hr/>
            <div className="reach justify-content-center">
                <h4>Got a project you'd like to discuss?</h4>
                <a href="mailto:akinyelut@gmail.com" className="button">
                    <span className="hire-me">Connect</span>
                </a>
            </div>
        </div>
    </>

export const About = 
    <>
        <div className="container section">
            <h2 className="pre text-center">Meet Me</h2>
            <div className="row">
                <div className="col-sm-6 col-lg-3">
                    <h5>Personal</h5>
                    <div className="card shadow-sm">
                        <div className="card-header bg-transparent text-center">
                            <img className="profile_img" src={photo} alt="" />
                            <h3>Timothy Akinyelu</h3>
                        </div>
                        <div className="card-body">
                            <p className="mb-0"><strong className="pr-1">Location:</strong>Lagos, Nigeria</p>
                            <p className="mb-0"><strong className="pr-1">Nationality:</strong>Nigerian</p>
                            <p className="mb-0"><strong className="pr-1">Languages:</strong>English (Native), French (Basic)</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <h5>Everyday Tools</h5>
                    <div id="checklist">
                        <input id="01" type="checkbox" name="r" value="1" disabled />
                        <label htmlFor="01">HTML5 / CSS3</label>
                        <input id="02" type="checkbox" name="r" value="2" disabled />
                        <label htmlFor="02">Vue / Vuex</label>
                        <input id="03" type="checkbox" name="r" value="3" disabled />
                        <label htmlFor="03">React / Redux</label>
                        <input id="04" type="checkbox" name="r" value="3" disabled />
                        <label htmlFor="04">Laravel</label>
                        <input id="05" type="checkbox" name="r" value="3" disabled />
                        <label htmlFor="05">GraphQL</label>
                        <input id="06" type="checkbox" name="r" value="3" disabled />
                        <label htmlFor="06">PostgreSQL</label>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <h5>Limited-use Tools</h5>
                    <div id="checklist">
                        <input id="01a" type="checkbox" name="r" value="1" disabled />
                        <label htmlFor="01a">Angular</label>
                        <input id="02a" type="checkbox" name="r" value="2" disabled />
                        <label htmlFor="02a">Django</label>
                        <input id="03a" type="checkbox" name="r" value="3" disabled />
                        <label htmlFor="03a">CodeIgniter</label>
                        <input id="04a" type="checkbox" name="r" value="3" disabled />
                        <label htmlFor="04a">MySQL</label>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <h5>Connect</h5>
                    <div id="checklist">
                        <ul style={ulStyles}>
                            <li id="fonts-1">
                                <a href="https://www.linkedin.com/in/timothy-akinyelu/">
                                    <i className="mdi mdi-linkedin"><span>@timothyakinyelu</span></i>
                                </a>
                            </li>
                            <li id="fonts-2">
                                <a href="https://twitter.com/loverofMush">
                                    <i className="mdi mdi-twitter"><span>@loverofMush</span></i>
                                </a>
                            </li>
                            <li id="fonts-3">
                                <a href="https://github.com/timothyakinyelu">
                                    <i className="mdi mdi-github"><span>@timothyakinyelu</span></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>