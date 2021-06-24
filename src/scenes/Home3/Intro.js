import React from "react";
import TextLoop from "react-text-loop";
import { Container } from "react-grid-system";

function Intro() {
    return (
        <section className="section section-hero section-hero-3 overlay-image" style={{ backgroundImage: `url(/assets/images/hero/3-1.jpg)` }}>
            <div className="display-center">
                <Container>
                    <div className="el-heading">
                        <p className="el-icon">
                            <span className="el-icon-title">Hello.</span>
                        </p>
                        <h1>
                            John Woo is a{" "}
                            <TextLoop>
                                <span>Documentary Filmmaker</span>
                                <span>Traveller Blogger</span>
                                <span>Documentary Photographer</span>
                            </TextLoop>
                        </h1>
                        <button className="button button-lg button-primary">
                            <span className="wave"></span>
                            <span className="text">My Portfolio</span>
                        </button>
                        <button className="button button-lg button-light">
                            <span className="text text-primary">Read More</span>
                        </button>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Intro;
