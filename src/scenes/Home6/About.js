import React from "react";
import { Container, Hidden, Row, Col } from "react-grid-system";

function About() {
    return (
        <section className="section section-about section-about-1">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Hidden xs sm md>
                            <Col lg={5}>
                                <div className="about-image">
                                    <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/about/6-1.jpg)` }}></div>
                                </div>
                            </Col>
                        </Hidden>
                        <Col lg={7}>
                            <div className="about-content">
                                <header className="el-heading">
                                    <h2 className="el-icon">
                                        <span className="el-icon-title">ABOUT ME</span>
                                    </h2>
                                    <h3>
                                        <span>Hello, I am John Woo.</span>
                                    </h3>
                                    <div className="divider divider-1"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </header>
                                <Row className="pt-30">
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-ruler-pencil"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Web design</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-image"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Graphic Design</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-brush-alt"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Development</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-ruler-pencil"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Mobile Apps</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-ruler-pencil"></span>
                                            </div>
                                            <div className="content">
                                                <h5>UI/UX Designer</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-mobile"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Marketing Online</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default About;
