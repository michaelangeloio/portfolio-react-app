import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { Container } from "react-grid-system";
import { useHistory } from "react-router-dom";

//AWS
import  { Analytics } from 'aws-amplify';


// Auxillary Packages
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Typography from '@material-ui/core/Typography';
import Typewriter from 'typewriter-effect';



// Components
import Headline from "../common/headline";


//Redux 

import { useDispatch, useSelector } from "react-redux";
import {playedGame } from '../../actions/playedGame';




const DefaultLocation = { lat: 40.752336836965696, lng: -73.98232417652586};
const DefaultZoom = 10;


function Landing() {
    const dispatch = useDispatch();

    useEffect(() => {
        // checking if localStorage has a "hasVisited" key
        if (localStorage.getItem("hasVisited")){
            // setting the state of welcomeMessage to "Welcome back!" if it does
        } else {
            // creating the "hasVisited" key value pair in localStorage if it doesnt exist
          localStorage.setItem("hasVisited", "true")
          localStorage.setItem("pageDirect", "/about")
        }
        // we are only running this useEffect on the first render of app because we passed an
        // empty array
      },[])
    

    const history = useHistory();

    const routeChange = () =>{ 
      let path = `/portfolio`; 
      history.push(path);
    }
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const toggleLightbox = (index) => {
        setSelectedIndex(index);
        setLightboxIsOpen(!lightboxIsOpen);
    };

    const [dp, setDp] = useState(false);


    const [proceedButton1, setProceedButton] = useState(false);
    const [firstPrompt, closeFirstPrompt] = useState(true);
    const [firstQuestion, setFirstQuestion] = useState(false);
  

 
 

 

    return (
        
        <section className="section section-portfolio section-portfolio-1">
            <div className="display-spacing">
                <Container className="container">
                    <Headline label="" title="Welcome" divider_1={true} position="center" />
                    <div className="div-center text-center">  
                
                {firstPrompt &&
                    <Popup
                        trigger={ <button><h2 > Enter </h2></button>}
                        modal
                        nested
                    >
                        
                    {close => (
                        <div className="modal">
                            <button className="close" onClick={close}>
                            &times;
                            </button>
                            <div className="header"> Hold up a sec!</div>
                            <div className="content div-center text-center">
                            {' '}

                            <Typewriter
                                options={{
                                    strings: ["Lets play a quick game to show you what I like to do!", "It'll be cool. Promise.", "Don't fret! Your responses will remain completely anonymous."],
                                    autoStart: true,
                                    loop: false,
                                    pauseFor: 2700,
                                    delay: 25,
                                    deleteSpeed: 10,
                                   
                                }}
                                onInit={(typewriter) => {
                                    typewriter.callFunction(() => {
                                        console.log('All strings were deleted');
                                        setProceedButton(!proceedButton1);

                                    })
                                    .start()
                                    
                                }}
                                />
                        </div>
                        {proceedButton1 &&
                            <div className="actions">
                          <Link to= "/landing/question1">
                            <button className="button button-md button-primary"
                                onClick={() => {
                                    console.log('Played game');
                                    dispatch(playedGame())
                                    Analytics.record({
                                        name: 'played', 
                                        // Attribute values must be strings
                                    });
                                    close();
                                    }}
                            > 
                            Let's Play 
                            
                            </button>
                            </Link>
                            

                            <div className="content div-center text-center">
                            <button 
                                onClick={() => {
                                console.log('modal closed, game not played');
                                close();
                                Analytics.record({
                                    name: 'skipped', 
                                    // Attribute values must be strings
                                });
                                routeChange();
                                
                             
                                }} >
                                    <Typography style = {{color: "white", marginTop: 20, fontSize: 10}}>
                            
                                Skip (lame)
                                </Typography>
                              </button> 
                               </div>
                            </div> 
                        }
                    </div>
                    )}
                </Popup>
                }
                </div> 
                
    
                </Container>
          
            </div>
        </section>
     
    );
}

export default Landing;
