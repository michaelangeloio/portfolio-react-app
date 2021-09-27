import React from "react";
import {Link} from "react-router-dom";
import { Container, Hidden, Row, Col } from "react-grid-system";


var codeString = '#titanic {float: none;}';

function About() {
    return (
        <section className="section section-about section-about-1">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Hidden xs sm md>
                            <Col lg={5}>
                                <div className="about-image">
                                    <div className="image overlay-image" style={{ backgroundImage: 'url(https://michaelangrivera-media.s3.us-east-2.amazonaws.com/portrait.png)' }}></div>
                                </div>
                            </Col>
                        </Hidden>
                        <Col lg={7}>
                            <div className="about-content">
                                <header className="el-heading">
                                    <h2 className="el-icon">
                                        <span className="el-icon-title">Hello</span>
                                    </h2>
                                    <h3>
                                        <span>I am Michael Angelo Rivera.</span>
                                    </h3>
                                    <div className="divider divider-1"></div>
                                    <p>Yes! Like the Teenage Mutant Ninja Turtle. Or the Painter. Your pick.</p>
                                    <p>Changing the status quo is my forte. I like to innovate and push myself to the limit. Be it in the workplace, while running, or making music... I try finding that next level.</p> 
                                      <p>  Like all things, this requires balance. I've learned that life is a marathon, not a sprint. 
                                    </p>
                                    <p> Finding balance isn't easy. I've realized enjoying the small things in life helps, though. My small things: coffee and pizza. Maybe I am the Ninja Turtle? </p>
                                </header>
                                <div className="divider divider-1-2"></div>
                                <h2 className="el-icon">
                                <span className="el-icon-title" style={{ fontSize: 'small' }} >Some of my interests:</span></h2>
                                <Row className="pt-30">
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-stats-up"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Data & Analytics</h5>
                                                <p>Numbers are cool, but numbers turned into stories are cooler.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-server"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Backend Engineering</h5>
                                                <p>I like connecting those numbers together. Join me anyone?</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-layout"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Front End & App Development</h5>
                                                <p>{codeString}</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-cloud"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Cloud Development</h5>
                                                <p>This is website is running on AWS Amplify right now. #Flex</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-flag-alt-2"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Edurance Sports</h5>
                                                <p>I like running, biking, and swimming all in one go. Am I crazy? Probably. </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-music-alt"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Drumming & Music</h5>
                                                <p>I hope you don't mind my occassional table tapping!</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <div className="divider divider-1"></div>
                                </Row>
                            </div>
                            <p style={{marginTop : 20}}></p>

                            <Link to="/resume" >
                            <button className="button button-md button-primary">See My Work History</button>
                            </Link>
                            <a target="_blank" href="https://michaelangrivera.com" rel="noopener noreferrer">
                            <button className="button button-md button-primary">Check Out My Hobbies</button>
                            </a>  

                        </Col>
       
                    </Row>

                </Container>


            
               
            </div>
        </section>
    );
}

export default About;
