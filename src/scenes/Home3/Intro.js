import React from "react";
import TextLoop from "react-text-loop";
import { Container } from "react-grid-system";

function Intro() {
    return (
        <section className="section section-hero section-hero-3 overlay-image" style={{ backgroundImage: `url(https://michaelangrivera-media.s3.us-east-2.amazonaws.com/main_photo.jpg)` }}>
            <div className="display-center">
                <Container>
                    <div className="el-heading">
                        
                            <span className="el-icon-title" style={{ color: 'black' }}>print('hello')   Hello.</span>
                      
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
