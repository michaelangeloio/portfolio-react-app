import React from "react";
import TextLoop from "react-text-loop";
import Particles from "react-particles-js";
import { Container } from "react-grid-system";

function Intro() {
    return (
        <section className="section section-hero section-hero-1 overlay-image" style={{ backgroundImage: `url(/assets/images/hero/1-1.jpg)` }}>
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 300,
                            density: {
                                enable: true,
                            },
                        },
                        size: {
                            value: 5,
                            random: true,
                        },
                        move: {
                            direction: "bottom",
                            out_mode: "out",
                        },
                        line_linked: {
                            enable: false,
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "bubble"
                            },
                            onclick: {
                                enable: true,
                                mode: "repulse"
                            }
                        },
                        modes: {
                            bubble: {
                                distance: 250,
                                duration: 2,
                                size: 3,
                            },
                            repulse: {
                                distance: 400,
                                duration: 4
                            }
                        }
                    }
                }}
            />
            <div className="display-center">
                <Container>
                    <div className="el-heading">
                        <p className="el-icon">
                            <span className="el-icon-title">I'm Miranda Smith.</span>
                        </p>
                        <h1>
                            I'm a{" "}
                            <TextLoop>
                                <span>UI/UX Designer</span>
                                <span>Graphic Designer</span>
                                <span>Web Developer</span>
                            </TextLoop>
                            <br />
                            Based in Los Angeles
                        </h1>
                        <button className="button button-lg button-primary">
                            <span className="wave"></span>
                            <span className="text">My Portfolio</span>
                        </button>
                        <button className="button button-lg">
                            <span className="text">Read More</span>
                        </button>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Intro;
