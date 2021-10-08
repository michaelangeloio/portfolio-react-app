import {Route} from "react-router-dom";

// Stylesheet
import "./index.scss";

import React, {useEffect} from "react";
import {Redirect, useRouteMatch} from "react-router-dom";

// Sections

import About from "./components/pages/about";
import Intro from "./components/pages/intro";
import Header from "./components/pages/header";
import Resume from "./components/pages/resume";
import Contact from "./components/pages/contact";
import Portfolio from "./components/pages/portfolio";
import Landing from "./components/pages/landing";
import Stats from "./components/pages/stats";
// import Blog from "./deprecated_components/blog"; import Endurance from
// "./endurance"; import Percussion from "./percussion"; import Testimonial from
// "./testimonial"; import BlogSinglePost from "./blogsinglepost"; landing
import Question1 from "./components/landing/question1";
import Question2 from "./components/landing/question2";

// Posts import LeadvilleHalf from
// "./deprecated_components/Posts_Endurance/leadville_half"; Common Components
import Helmet from "./components/common/helmet";
import PageSwitch from "./components/common/pageswitch";
import RedirectAs404 from "./components/common/redirectas404";

//AWS

import Amplify from 'aws-amplify';
import Analytics from '@aws-amplify/analytics';
// import Auth from '@aws-amplify/auth'; import awsconfig from './aws-exports';
// import { Logger } from 'aws-amplify'; Auxillary Packages
import CookieConsent from "react-cookie-consent";
import GetData from './components/api/GetS3Data';

//REDUX
import { useDispatch } from "react-redux";

//REDUX ACTIONS
import {loadS3Data} from "./actions/getS3Data";


//TESTING
import  {addGMapsResponse} from './actions/question1Answer';

const routes = [

  //pages
  {
    path: "intro",
    component: <Intro/>
  }, {
    path: "landing",
    component: <Landing/>
  }, {
    path: "about",
    component: <About/>
  }, {
    path: "resume",
    component: <Resume/>
  }, {
    path: "portfolio",
    component: <Portfolio/>
  },
  // {     path: "endurance",     component: <Endurance /> }, {     path:
  // "percussion",     component: <Percussion />, }, {     path: "blog",
  // component: <Blog />, }, {     path: "blog/single-post",     component:
  // <BlogSinglePost />, }, {     path: "testimonial",     component: <Testimonial
  // />, },
  {
    path: "contact",
    component: <Contact/>
  },
  {
    path: "site_stats",
    component: <Stats/>
  },

  //Landing Pages
  {
    path: "landing/question1",
    component: <Question1/>
  }, {
    path: "landing/question2",
    component: <Question2/>
  },


  //TESTING 
 
];

function App() {

  let {path} = useRouteMatch();

  const dispatch = useDispatch();

  // FOR FUTURE USE
  // const [s3Data,
  //   setS3Data] = React.useState({hits: []});
  // const [s3DataLoaded,
  //   setS3DataLoaded] = React.useState(false);
  // const handleS3Data = (data) => {
  //   console.log('loading data')
  //   setS3Data(data);
  //   setS3DataLoaded(true);
  // }

  useEffect(() => {
    function loadContent() {
     dispatch(loadS3Data())
    }
    loadContent();
  }, [dispatch]);

  useEffect(() => {

    // Analytics.record('Home Page Visit');
    Amplify.configure({
      aws_cognito_region: "us-east-1", // (required) - Region where Amazon Cognito project was created
      // aws_user_pools_id:  "us-east-1_6AfQ6", // (optional) -  Amazon Cognito User
      // Pool ID aws_user_pools_web_client_id: "5t3le8878kgc72", // (optional) - Amazon
      // Cognito App Client ID (App client secret needs to be disabled)
      aws_cognito_identity_pool_id: "us-east-1:b733755d-5d66-43d2-9c27-5d6ee2e47e56", // (optional) - Amazon Cognito Identity Pool ID
      aws_mandatory_sign_in: "false", // (optional) - Users are not allowed to get the aws credentials unless they are signed in
      aws_mobile_analytics_app_region: "us-east-1", // (required) Amazon Pinpoint Project region
      aws_mobile_analytics_app_id: "490cb977451f4fc5828adab97f0d18f4" // (required) Amazon Pinpoint Project ID

    })
    Amplify.configure({
      Auth: {
        // (required) only for Federated Authentication - Amazon Cognito Identity Pool
        // ID
        identityPoolId: 'us-east-1:b733755d-5d66-43d2-9c27-5d6ee2e47e56',

        // (required)- Amazon Cognito Region
        region: 'us-east-1',
        // (optional) - Enforce user authentication prior to accessing AWS resources or
        // not
        mandatorySignIn: false,
        secure: true
      }
    })
    // window.LOG_LEVEL =  'DEBUG';

        // Analytics.autoTrack('event', {
            //     // REQUIRED, turn on/off the auto tracking
            //     enable: false,
            //     // OPTIONAL, events you want to track, by default is 'click'
            //     events: ['click'],
            //     // OPTIONAL, the prefix of the selectors, by default is 'data-amplify-analytics-'
            //     // in order to avoid collision with the user agent, according to https://www.w3schools.com/tags/att_global_data.asp
            //     // always put 'data' as the first prefix
            //     selectorPrefix: 'data-amplify-analytics-',
            //     // OPTIONAL, the service provider, by default is the Amazon Pinpoint
            //     provider: 'AWSPinpoint',
            //     // OPTIONAL, the default attributes of the event, you can either pass an object or a function 
            //     // which allows you to define dynamic attributes
            //     attributes: {
            //         attr: 'attr'
            //     }
            //     // when using function
            //     // attributes: () => {
            //     //    const attr = somewhere();
            //     //    return {
            //     //        myAttr: attr
            //     //    }
            //     // }
            // });    
        

        // Auth.configure({ mandatorySignIn: false});
        // Analytics.record({ name: 'Front Page' });

    document.documentElement.className = "home-3 skin-3";
    return () => {
      document.documentElement.className = "";
    };

  });

  return (
    <div>
      <Helmet title="Michael Angelo Rivera"/>

      <Header/>

      <CookieConsent
        onAccept={() => {
        alert("Accepted!");
        Analytics.record({name: 'Cookie Accept'});
      }}>
        This website uses cookies to enhance the user experience.</CookieConsent>
      <PageSwitch>

        <Route path={path} exact>
          <Redirect
            to={{
            pathname: `${path}intro`.replace(/([^:])(\/\/+)/g, "$1/")
          }}/>
        </Route>
        {routes.map((item, index) => (
          <Route key={index} path={`${path}${item.path}`} exact>
            {item.component}
          </Route>
        ))}
        <Route component={RedirectAs404}/>

      </PageSwitch>

    </div>
  );
}

export default App;