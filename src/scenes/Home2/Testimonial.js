import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-grid-system";
// Components
import Headline from "../../components/common/Headline";

const testimonial1 = [
    {
        name: "Rabie Maxwell",
        type: "Clients",
        post: "My Customer",
        avatar: "/assets/images/people/1.jpg",
        content: "You've saved our business! I can't say enough about you. We were treated like royalty. We can't understand how we've been living without you.",
    },
    {
        name: "Sara Wander",
        type: "Clients",
        post: "My Customer",
        avatar: "/assets/images/people/2.jpg",
        content: "Dude, your stuff is the bomb! I love your system. It's all good. I was treated like royalty. Keep up the excellent work. I will definitely be ordering again!",
    },
    {
        name: "Emy Jacman",
        type: "Clients",
        post: "My Customer",
        avatar: "/assets/images/people/3.jpg",
        content: "You've saved our business! I can't say enough about you. We were treated like royalty. We can't understand how we've been living without you.",
    },
];

const testimonial2 = [
    {
        name: "Kourosh Neyestani",
        type: "Partners",
        post: "Web Developer",
        avatar: "/assets/images/people/4.jpg",
        content: "Dude, your stuff is the bomb! I love your system. It's all good. I was treated like royalty. Keep up the excellent work. I will definitely be ordering again!",
    },
    {
        name: "Rabie Maxwell",
        type: "Partners",
        post: "Web Designer",
        avatar: "/assets/images/people/5.jpg",
        content: "You've saved our business! I can't say enough about you. We were treated like royalty. We can't understand how we've been living without you.",
    },
    {
        name: "James Maxwell",
        type: "Partners",
        post: "SEO Manager",
        avatar: "/assets/images/people/6.jpg",
        content: "Dude, your stuff is the bomb! Thank you so much for your help. You've saved our business! Just what I was looking for. It's exactly what I've been looking for.",
    },
];

function Testimonial() {
    const sliderSettings = {
        dots: true,
        speed: 500,
        arrows: false,
        infinite: true,
    };
    return (
        <section className="section section-testimonial section-testimonial-1">
            <div className="display-spacing">
                <Container className="container">
                    <Headline label="testimonial" title="Customer’s Stories" divider_1={true} position="center" />
                    <Row className="mb--15">
                        <Col lg={6} xl={6} className="mb-15">
                            <Slider className="el-slider" {...sliderSettings}>
                                {testimonial1.map((item, index) => (
                                    <div key={index} className="testimonial-item testimonial-clients">
                                        <div className="type">
                                            <span>{item.type}</span>
                                        </div>
                                        <p>{item.content}</p>
                                        <div className="author">
                                            <img src={item.avatar} alt="Relevant textual alternative" />
                                            <h4>{item.name}</h4>
                                            <h5>{item.post}</h5>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                        <Col lg={6} xl={6} className="mb-15">
                            <Slider className="el-slider" {...sliderSettings}>
                                {testimonial2.map((item, index) => (
                                    <div key={index} className="testimonial-item testimonial-clients">
                                        <div className="type">
                                            <span>{item.type}</span>
                                        </div>
                                        <p>{item.content}</p>
                                        <div className="author">
                                            <img src={item.avatar} alt="Relevant textual alternative" />
                                            <h4>{item.name}</h4>
                                            <h5>{item.post}</h5>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                    </Row>
                    <div className="div-center text-center lets-work">
                        <button type="button" className="button button-md button-primary">
                            let's work together
                        </button>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Testimonial;
