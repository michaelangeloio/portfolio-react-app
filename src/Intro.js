import React from "react";
import TextLoop from "react-text-loop";
import { Container } from "react-grid-system";
import { Link } from "react-router-dom";

function Intro() {
    return (
        <section className="section section-hero section-hero-3 overlay-image" style={{ backgroundImage: `url(https://michaelangrivera-media.s3.us-east-2.amazonaws.com/main_photo.jpg)` }}>
            <div className="display-center">
                <Container>
                    <div className="el-heading">
                        
                            {/* <span className="el-icon-title" style={{ color: 'black' }}>['Hello there']</span> */}
                      
                        <h1 style={{ color: 'black' }}>
                            Michael Angelo is a{" "}
                            <TextLoop>
                                <span>Technology Developer</span>
                                <span>Percussion Enthusiast</span>
                                <span>Endurance Athlete</span>
                            </TextLoop>
                        </h1>
                        <button className="button button-lg button-primary">
                            <span className="wave"></span>
                            <Link to="/about">
                            <span className="text">See More</span>
                            </Link>
                        </button>
                        <button className="button button-lg button-light">
                            <span className="text text-primary">Follow Me</span>
                        </button>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Intro;
