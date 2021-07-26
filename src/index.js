
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
// Stylesheet
import "./index.scss";

import React, { useEffect, Suspense, useState} from "react";
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
import Landing from "./landing";


//landing
import Question2 from  "./components/landing/question2";


//Posts

import LeadvilleHalf from "./components/Posts_Endurance/leadville_half";


// Common Components
import Helmet from "./components/common/helmet";
import PageSwitch from "./components/common/pageswitch";
import RedirectAs404 from "./components/common/redirectas404";
import Error404 from "./components/common/error404";


//AWS

import Amplify from 'aws-amplify';
import Analytics from '@aws-amplify/analytics';
import Auth from '@aws-amplify/auth';

import awsconfig from './aws-exports';
import { Logger } from 'aws-amplify';


//Auxillary Packages
import CookieConsent from "react-cookie-consent";




const routes = [
    {
        path: "intro",
        component: <Intro />,
    },
    {
        path: "landing",
        component: <Landing />,
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

//Landing Pages
    {
        path: "landing/question2",
        component: <Question2 />
    },

//Edurance Posts

    {
        path: "endurance/leadville_half",
        component: <LeadvilleHalf />
    }


];



function Root() {


    
    let { path } = useRouteMatch();
    
    

    useEffect(() => {



        // Analytics.record('Home Page Visit');
        Amplify.configure({
            aws_cognito_region: "us-east-1", // (required) - Region where Amazon Cognito project was created   
            // aws_user_pools_id:  "us-east-1_6AfQ6", // (optional) -  Amazon Cognito User Pool ID   
            // aws_user_pools_web_client_id: "5t3le8878kgc72", // (optional) - Amazon Cognito App Client ID (App client secret needs to be disabled)
            aws_cognito_identity_pool_id: "us-east-1:b733755d-5d66-43d2-9c27-5d6ee2e47e56", // (optional) - Amazon Cognito Identity Pool ID   
            aws_mandatory_sign_in: "false", // (optional) - Users are not allowed to get the aws credentials unless they are signed in   
                aws_mobile_analytics_app_region: "us-east-1", // (required) Amazon Pinpoint Project region
                aws_mobile_analytics_app_id: "490cb977451f4fc5828adab97f0d18f4" // (required) Amazon Pinpoint Project ID
         
        })
        Amplify.configure({
            Auth: {
              // (required) only for Federated Authentication - Amazon Cognito Identity Pool ID
              identityPoolId: 'us-east-1:b733755d-5d66-43d2-9c27-5d6ee2e47e56',
          
              // (required)- Amazon Cognito Region
              region: 'us-east-1',
              // (optional) - Enforce user authentication prior to accessing AWS resources or not
              mandatorySignIn: false ,
              secure: true
            }
             })
        window.LOG_LEVEL = 'DEBUG';
        
            Analytics.autoTrack('event', {
                // REQUIRED, turn on/off the auto tracking
                enable: true,
                // OPTIONAL, events you want to track, by default is 'click'
                events: ['click'],
                // OPTIONAL, the prefix of the selectors, by default is 'data-amplify-analytics-'
                // in order to avoid collision with the user agent, according to https://www.w3schools.com/tags/att_global_data.asp
                // always put 'data' as the first prefix
                selectorPrefix: 'data-amplify-analytics-',
                // OPTIONAL, the service provider, by default is the Amazon Pinpoint
                provider: 'AWSPinpoint',
                // OPTIONAL, the default attributes of the event, you can either pass an object or a function 
                // which allows you to define dynamic attributes
                attributes: {
                    attr: 'attr'
                }
                // when using function
                // attributes: () => {
                //    const attr = somewhere();
                //    return {
                //        myAttr: attr
                //    }
                // }
            });    
        

        // Auth.configure({ mandatorySignIn: false});
        Analytics.record({ name: 'Front Page' });

        document.documentElement.className = "home-3 skin-3";
        return () => {
            document.documentElement.className = "";
        };
        
    });

    return (
        <div>
            <Helmet title="Michael Angelo Rivera" />
            
            <Header />
            <CookieConsent> This website uses cookies to enhance the user experience.</CookieConsent>
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



