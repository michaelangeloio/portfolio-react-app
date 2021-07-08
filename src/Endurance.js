import React from "react";
import Slider from "react-slick";
import { Container } from "react-grid-system";
import { Link, useRouteMatch } from "react-router-dom";
// Components
import Headline from "./components/common/headline";

const posts = [
    {
        title: "Leadville Heavy Half Marathon",
        image: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/endurance/leadville_half.jpg",
        date: "June 19th, 2021",
        link: "/leadville_half",
        icon: "ti-flag",
    },
    {
        title: "The Best Sale Marketer Of The Next Year",
        image: "/assets/images/blog/3-2.jpg",
        date: "May 18th, 2019",
        link: "/single-post",
        icon: "ti-mobile",
    },
    {
        title: "What gets in the way of greate Stategy",
        image: "/assets/images/blog/3-3.jpg",
        date: "May 21h, 2019",
        link: "/single-post",
        icon: "ti-paint-bucket",
    },
    {
        title: "How to create great logo for your Business",
        image: "/assets/images/blog/3-4.jpg",
        date: "May 21th, 2019",
        link: "/single-post",
        icon: "ti-light-bulb",
    },
];

function Blog() {
    let sliderSettings = {
        dots: true,
        speed: 500,
        arrows: false,
        infinite: false,
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: 30,
        draggable: false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const { path } = useRouteMatch();

    return (
        <section className="section section-blog section-blog-1">
            <div className="display-spacing">
                <Container className="container">
                    <Headline label="Endurance" title="Go Long. Do More." divider_1={true} position="center" />
                    <Slider className="el-slider el-slider-plr--15" {...sliderSettings}>
                        {posts.map((item, index) => (
                            <div key={index} className="post-item">
                                <Link to={`${path}${item.link}`.replace(/([^:])(\/\/+)/g, "$1/")}>
                                    <div className="post-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                                </Link>
                                <div className="post-content">
                                    <div className="el-icon">
                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                    </div>
                                    <div className="post-data">
                                        <h4 className="post-title">
                                            <Link to={`${path}${item.link}`.replace(/([^:])(\/\/+)/g, "$1/")}>{item.title}</Link>
                                        </h4>
                                        <div className="post-date">
                                            <i className="ti-time"></i>
                                            {item.date}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </div>
        </section>
    );
}

export default Blog;
