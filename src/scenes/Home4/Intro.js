import React from "react";
import Slider from "react-slick";
import Particles from "react-particles-js";
import { Container } from "react-grid-system";

function Intro() {
    const sliderSettings = {
        dots: true,
        fade: true,
        arrows: false,
        autoplay: true,
    };
    return (
        <section className="section section-hero section-hero-4 display-fit-screen">
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 120,
                        },
                        size: {
                            value: 3,
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                    },
                }}
                className="el-particles"
            />
            <Slider className="el-slider" {...sliderSettings}>
                <div className="slide">
                    <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/hero/4-1.jpg)` }}></div>
                </div>
                <div className="slide">
                    <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/hero/4-2.jpg)` }}></div>
                </div>
            </Slider>
            <div className="display-center">
                <Container>
                    <div className="el-heading">
                        <p className="el-icon">
                            <span className="el-icon-title">We are MIRO.</span>
                        </p>
                        <h1>
                            Our Passion.
                            <br />
                            Our Music. Our Life.
                        </h1>
                        <button className="button button-lg button-primary">
                            <span className="text">My Portfolio</span>
                        </button>
                        <button className="button button-lg bg-base-0">
                            <span className="wave"></span>
                            <span className="text text-light">Read More</span>
                        </button>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Intro;
