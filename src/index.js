
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
// Stylesheet
import "./index.scss";

import React, { useEffect } from "react";
import {Redirect, useRouteMatch } from "react-router-dom";
import { Fragment } from 'react';

// Sections
import Blog from "./blog";
import About from "./about";
import Intro from "./intro";
import Header from "./header";
import Resume from "./resume";
import Endurance from "./endurance";
import Percussion from "./percussion";
import Contact from "./contact";
import Portfolio from "./portfolio";
import Testimonial from "./testimonial";
import BlogSinglePost from "./blogsinglepost";


//Posts

import Leadville_Half from "./components/Posts_Endurance/leadville_half";


// Components
import Helmet from "./components/common/helmet";
import PageSwitch from "./components/common/pageswitch";
import RedirectAs404 from "./components/common/redirectas404";
import Error404 from "./components/common/error404";


// import Amplify from '@aws-amplify/core';
// import Analytics from '@aws-amplify/analytics';
// import Auth from '@aws-amplify/auth';
// import awsconfig from './aws-exports';

// Analytics.record({ name: 'albumVisit' });

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
        // Analytics.record('Home Page Visit');

        // Amplify.configure(awsconfig);
        // Auth.configure({ mandatorySignIn: false});
        // Analytics.record({ name: 'bootup' });

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



