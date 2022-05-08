import React from "react";
import { FaCheck } from "react-icons/fa";
import { Container } from "react-grid-system";
// Components
import GoBack from "../../common/goback";

function Post() {
    return (
        <section className="section section-single-post section-single-post-1">
        <div className="display-spacing">
            <Container>
                <div className="max-w-768 div-center">
                    <div className="post">
                        <div className="post-head">
                            <div className="post-info">
                                <GoBack />
                                <h1>State Farm "Template Automation"</h1>
                                <p>
                                     <span className="author">Developed</span> with the <span className="category">Adhoc Team</span> in <span className="date">late 2020</span>.
                                </p>
                            </div>
                        </div>
                        <div className="post-body">
                            <div className="post-image">
                                <img src="https://media.michaelangrivera.com/michaelangrivera/State-Farm-Logo.png" alt="Single Post" />
                            </div>
                            <div className="post-content">
                                <p>Served as the technical lead for the “Template Automation” effort:</p>
                                <p>
                                    <b>Key Features:</b>
                                </p>

                                <p>Designed, developed, and implemented production software that automates two full-time offshore contracts and yields a cost savings of at least 4000+ labor hours and $150,000 per year: </p>

                                <ul className="el-list-check">
                                    <li>
                                        <FaCheck className="icon" />
                                        Built with Python, Selenium, and SAS Programming
                                    </li>
                                    <li>
                                        <FaCheck className="icon" />
                                        Improved SLA Performance for Business from 3-day data delivery average to next-day delivery
                                    </li>
                              
                                   
                                </ul>
                                <p>Had the privelege of demoing this software in front of 500 other employees at State Farm’s Enterprise Technology “Demo Days.” </p>
                            </div>
                            <div className="post-tags">
                                <span>Tags:</span>
                                <ul>
                                    <li>
                                        <a href="/#">StateFarm</a>
                                    </li>
                                    <li>
                                        <a href="/#">BusinessIntelligence</a>
                                    </li>
                                    <li>
                                        <a href="/#">Python</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </section>
    );
}

export default Post;
