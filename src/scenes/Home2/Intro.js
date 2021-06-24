import React from "react";
import Particles from "react-particles-js";
import { Container } from "react-grid-system";

function Intro() {
    return (
        <section className="section section-hero section-hero-2 overlay-image" style={{ backgroundImage: `url(/assets/images/hero/2-1.jpg)` }}>
            <span class="el-circle-side right"></span>
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
                            value: 3,
                            random: true,
                        },
                        move: {
                            direction: "top",
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
                                mode: "bubble",
                            },
                            onclick: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                        modes: {
                            bubble: {
                                distance: 250,
                                duration: 2,
                                size: 3,
                            },
                            repulse: {
                                distance: 400,
                                duration: 4,
                            },
                        },
                    },
                }}
            />
            <div className="display-center">
                <Container>
                    <div className="el-heading">
                        <p className="el-icon">
                            <span className="el-icon-title">Welcome on our Beauty Clinic</span>
                        </p>
                        <h1>
                            We make hair
                            <br />
                            beautiful & unique
                        </h1>
                        <button className="button button-lg button-primary">
                            <span className="wave"></span>
                            <span className="text">Book a visit</span>
                        </button>
                        <button className="button button-lg button-dark">
                            <span className="text">Read More</span>
                        </button>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Intro;
