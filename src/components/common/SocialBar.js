import React, { useState } from "react";
import { Link } from "react-router-dom";

const pages = [
    {
        title: "Instagram",
        image: 'https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/s320x320/200000079_843656896243503_5965489229281425096_n.jpg?tp=1&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_ohc=wtWVcLs2SJgAX_wh6uV&edm=ABfd0MgBAAAA&ccb=7-4&oh=01b8d7d5992559c8e854626eb1af4313&oe=60E99AF4&_nc_sid=7bff83',
        link: "/",
    },
    {
        title: "GitHub",
        image: "/assets/images/demo/1.jpg",
        link: "/home-1/intro",
    },
    {
        title: "Home 2",
        image: "/assets/images/demo/2.jpg",
        link: "/home-2/intro",
    },
    {
        title: "Home 3",
        image: "/assets/images/demo/3.jpg",
        link: "/home-3/intro",
    },
    {
        title: "Home 4",
        image: "/assets/images/demo/4.jpg",
        link: "/home-4/intro",
    },
    {
        title: "Home 5",
        image: "/assets/images/demo/5.jpg",
        link: "/home-5/intro",
    },
    {
        title: "Home 6",
        image: "/assets/images/demo/6.jpg",
        link: "/home-6/intro",
    },
];

function SocialBar() {
    const [display, setDisplay] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setDisplay(!display);
    };

    const handleClickColor = (e, color) => {
        e.preventDefault();
        console.log("click");
        document.documentElement.className = "";
        document.documentElement.classList.add(color.className);
    };

    return (
        <>
            <div className={`app-demo-options ${display && "active"}`}>
                <div className="app-demo-options-panel">
                    <div className="app-demo-options-close" onClick={(e) => handleClick(e)}>
                        <i className="ti-close"></i>
                    </div>
                    <span className="app-demo-options-title">Follow Me</span>
                    <div className="app-demo-options-item">
                        <span className="app-demo-options-subtitle">
                        {/* <ul className="app-demo-options-layout"> */}
                            {pages.map((item, index) => (
                                <li key={index} >
                                    <Link to={item.link}>
                                     {item.title}
                                    </Link>
                                </li>
                            ))}
                        {/* </ul> */}
                        </span>
                    </div>
                </div>
                <div className="app-demo-options-toggle" onClick={(e) => handleClick(e)}>
                    <i className="ti-user"></i>
                </div>
            </div>
        </>
    );
}

export default SocialBar;
