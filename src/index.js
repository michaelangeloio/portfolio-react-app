
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
// Stylesheet
import "./index.scss";

import React, { useEffect } from "react";
import {Redirect, useRouteMatch } from "react-router-dom";
import { Fragment } from 'react';

// Sections
import Blog from "./Blog";
import About from "./About";
import Intro from "./Intro";
import Header from "./Header";
import Resume from "./Resume";
import Endurance from "./Endurance";
import Percussion from "./Percussion";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Testimonial from "./Testimonial";
import BlogSinglePost from "./BlogSinglePost";


//Posts

import Leadville_Half from "./components/Posts_Endurance/Leadville_Half";


// Components
import Helmet from "./components/common/Helmet";
import PageSwitch from "./components/common/PageSwitch";
import RedirectAs404 from "./components/common/RedirectAs404";
import Error404 from "./components/common/Error404";


import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { Analytics } from 'aws-amplify';

Amplify.configure(awsconfig);

Analytics.record({ name: 'albumVisit' });

const routes = [
    {
        path: "intro",
        component: <Intro />,
    },
    {
        path: "about",
        component: <About />,
    },
    {
        path: "resume",
        component: <Resume />,
    },
    {
        path: "endurance",
        component: <Endurance />
    },
    {
        path: "percussion",
        component: <Percussion />,
    },
    {
        path: "portfolio",
        component: <Portfolio />,
    },
    {
        path: "blog",
        component: <Blog />,
    },
    {
        path: "blog/single-post",
        component: <BlogSinglePost />,
    },
    {
        path: "testimonial",
        component: <Testimonial />,
    },
    {
        path: "contact",
        component: <Contact />,
    },

//Edurance Posts

    {
        path: "endurance/leadville_half",
        component: <Leadville_Half />
    }


];

function Root() {
    let { path } = useRouteMatch();

    useEffect(() => {
        document.documentElement.className = "home-3 skin-3";
        return () => {
            document.documentElement.className = "";
        };
    });

    return (
        <div>
            <Helmet title="Michael Angelo Rivera" />
            
            <Header />
            <PageSwitch>
         
                <Route path={path} exact>
                    <Redirect
                        to={{
                            pathname: `${path}intro`.replace(/([^:])(\/\/+)/g, "$1/"),
                        }}
                    />
                </Route>
                {routes.map((item, index) => (
                    <Route key={index} path={`${path}${item.path}`} exact>
                        {item.component}
                    </Route>
                ))}
                <Route component={RedirectAs404} />

            </PageSwitch>
        
        </div>
    );
}

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route render={({ location }) => (location.state && location.state.is404 ? <Error404 /> : <Root />)} />
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);
serviceWorker.unregister();



