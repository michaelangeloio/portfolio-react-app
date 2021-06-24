import React from "react";
import TextLoop from "react-text-loop";
import Particles from "react-particles-js";
import { Container } from "react-grid-system";

function Intro() {
    return (
        <section className="section section-hero section-hero-5 overlay-image" style={{ backgroundImage: `url(/assets/images/hero/5-1.jpg)` }}>
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 120,
                            density: {
                                enable: true,
                                value_area: 1500,
                            },
                        },
                        line_linked: {
                            enable: true,
                            opacity: 0.02,
                        },
                        move: {
                            direction: "right",
                            speed: 0.05,
                        },
                        size: {
                            value: 1,
                        },
                        opacity: {
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.05,
                            },
                        },
                    },
                    interactivity: {
                        events: {
                            onclick: {
                                enable: true,
                                mode: "push",
                            },
                        },
                        modes: {
                            push: {
                                particles_nb: 1,
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
                        <h1>
                            I'm a{" "}
                            <TextLoop>
                                <span>Digital Product Designer</span>
                                <span>Graphic Designer</span>
                                <span>Web Developer</span>
                            </TextLoop>
                            <br />
                            I create Websites and Applications.
                            <br />
                            Based in New York, USA.
                        </h1>
                        <div className="el-icon">
                            <p className="el-icon-title">
                                About Me <span className="icon ti-arrow-down" />
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Intro;
