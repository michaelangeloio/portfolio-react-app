import React, { useState } from "react";
import { Link } from "react-router-dom";

const pages = [
    {
        title: "All Demos",
        image: "/assets/images/demo/demos.jpg",
        link: "/",
    },
    {
        title: "Home 1",
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

function DemoOptions() {
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
                    <span className="app-demo-options-title">Demo Options</span>
                    <div className="app-demo-options-item">
                        <span className="app-demo-options-subtitle">- Layout</span>
                        <ul className="app-demo-options-layout">
                            {pages.map((item, index) => (
                                <li key={index} className="text-center">
                                    <Link to={item.link}>
                                        <img src={item.image} alt={item.title} />
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="app-demo-options-toggle" onClick={(e) => handleClick(e)}>
                    <i className="ti-settings"></i>
                </div>
            </div>
        </>
    );
}

export default DemoOptions;
