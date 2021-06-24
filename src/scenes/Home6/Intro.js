import React from "react";
import Particles from "react-particles-js";
import { Container } from "react-grid-system";

function Intro() {
    return (
        <section className="section section-hero section-hero-6 overlay-image" style={{ backgroundImage: `url(/assets/images/hero/6-1.jpg)` }}>
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 170,
                            density: {
                                enable: true,
                                value_area: 300,
                            },
                        },
                        color: {
                            value: "#fff",
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 0,
                                color: "#000000",
                            },
                            polygon: {
                                nb_sides: 5,
                            },
                            image: {
                                src: "img/github.svg",
                                width: 100,
                                height: 100,
                            },
                        },
                        opacity: {
                            value: 0.6,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.5,
                                sync: false,
                            },
                        },
                        size: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false,
                            },
                        },
                        line_linked: {
                            enable: false,
                            distance: 500,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 2,
                        },
                        move: {
                            enable: true,
                            speed: 6,
                            direction: "left",
                            random: false,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200,
                            },
                        },
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "bubble",
                            },
                            onclick: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 0.5,
                                },
                            },
                            bubble: {
                                distance: 400,
                                size: 4,
                                duration: 0.3,
                                opacity: 1,
                                speed: 3,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                            push: {
                                particles_nb: 4,
                            },
                            remove: {
                                particles_nb: 2,
                            },
                        },
                    },
                    retina_detect: true,
                }}
                className="el-particles"
            />
            <div className="display-center">
                <Container>
                    <div className="el-heading">
                        <p className="el-icon">
                            <span className="el-icon-title">Miro Clinic</span>
                        </p>
                        <h1>
                            Welcome to the
                            <br />
                            Miro Medical Clinic
                        </h1>
                        <button className="button button-lg button-primary">
                            <span className="text text-dark">Book a visit</span>
                        </button>
                        <button className="button button-lg button-dark">
                            <span className="wave"></span>
                            <span className="text">Read More</span>
                        </button>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Intro;
