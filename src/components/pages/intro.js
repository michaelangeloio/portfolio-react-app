import React from "react";
import TextLoop from "react-text-loop";
import { Container } from "react-grid-system";
import { Link } from "react-router-dom";


// Analytics.autoTrack('event', {
//     // REQUIRED, turn on/off the auto tracking
//     enable: true,
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


function Intro() {



    
    function firstVisitHandler() {
        if (localStorage.getItem("hasVisited")) {
            return("/about")
        }
        else {
            return("/landing")
        }
    }


 
    return (
        <section className="section section-hero section-hero-3 overlay-image" style={{ backgroundImage: `url(https://michaelangrivera-media.s3.us-east-2.amazonaws.com/main_photo.jpg)` }}>
            <div className="display-center">
                <Container>
                    <div className="el-heading">
                        
                            {/* <span className="el-icon-title" style={{ color: 'black' }}>['Hello there']</span> */}
                      
                        <h1 style={{ color: 'black' }}>
                            Michael Angelo is a{" "}
                            <TextLoop>
                                <span>Technology Developer</span>
                                <span>Percussion Enthusiast</span>
                                <span>Endurance Athlete</span>
                            </TextLoop>
                        </h1>
                        <button className="button button-lg button-primary"
                            data-amplify-analytics-on='click'
                            data-amplify-analytics-name='see_more_button'
                            data-amplify-analytics-attrs='attr1:attr1_value,attr2:attr2_value'
                        >
                            <span className="wave"></span>
                            <Link to={firstVisitHandler}>
                            <span className="text">See More</span>
                            </Link>
                        </button>
                        <button className="button button-lg button-light">
                            <a target="_blank" rel="noopener noreferrer" href="https://michaelangrivera.com">
                            <span className="text text-primary">Follow Me</span>
                            </a>
                        </button>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Intro;
