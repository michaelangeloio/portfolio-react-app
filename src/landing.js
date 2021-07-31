import React, { useEffect, useState } from "react";
import { Container } from "react-grid-system";
import { useHistory } from "react-router-dom";


// Auxillary Packages
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import MapPicker from 'react-google-map-picker'
import Typewriter from 'typewriter-effect';
import { Wave } from 'react-animated-text';
import Redirect from "react";



// Components
import Headline from "./components/common/headline";



const DefaultLocation = { lat: 40.752336836965696, lng: -73.98232417652586};
const DefaultZoom = 10;


function Landing() {
    return (
      <div>
        <LandingHidden />
      </div>
    );
  }
  

function LandingHidden() {

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
      let path = `/landing/question2`; 
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
  

    // const current = quiz.questions[index];

    const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

    const [location, setLocation] = useState(defaultLocation);
    const [zoom, setZoom] = useState(DefaultZoom);
  
    function handleChangeLocation (lat, lng){
      setLocation({lat:lat, lng:lng});
    }
    
    function handleChangeZoom (newZoom){
      setZoom(newZoom);
    }
  
    function handleResetLocation(){
      setDefaultLocation({ ...DefaultLocation});
      setZoom(DefaultZoom);
    }

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
                                    strings: ["Lets play a quick game!", "It'll be cool. Promise.", "Don't fret! Your responses will remain completely anonymous."],
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
                          
                            <button className="button button-md button-primary"
                                onClick={() => {
                                    console.log('Played game');
                                    close();
                                    closeFirstPrompt(!firstPrompt)
                                    setFirstQuestion(!firstQuestion)
                                    }}
                            > 
                            Let's Play 
                            </button>

                            <div className="content div-center text-center">
                            <button><span style={{ marginTop: 30, textDecorationLine: 'underline'}}
                                onClick={() => {
                                console.log('modal closed, game not played');
                                close();
                                closeFirstPrompt(!firstPrompt)
                                setDp(!dp)
                                }}
                            >  
                                Skip (lame)
                               </span></button> 
                               </div>
                            </div> 
                        }
                    </div>
                    )}
                </Popup>
                }
                </div> 
                
             
                {firstQuestion &&
                            <div className="div-center text-center" style={{marginTop: 30, marginBottom: 30}}>  
                            <h3> 
                            <Wave   
                                    text = "Where are you From?"
                                    effect="verticalFadeIn"
                                    effectDirection="down"
                                    effectDuration = {.5}
                                    iterations = {1}
                                  
                                    />
                              
                              </h3>

                        <MapPicker defaultLocation={defaultLocation} 
                            zoom={zoom}
                            mapTypeId="roadmap"
                            style={{"height" : "400px"}} 
                            onChangeLocation={handleChangeLocation} 
                            onChangeZoom={handleChangeZoom}
                            apiKey='AIzaSyAXj48YMuiEqGhKLY88NonO4YhFVKGcbjY'/>
                        <form className="form form-1 pt-15">

                                <div className="form-item">
                                    <input type="text" id="form-item-name" value={location.lat} disabled/>
                                    <label htmlFor="form-item-name">Latitude:</label>
                                </div>
                                <div className="form-item">
                                    <input type="text" id="form-item-name" value={location.lng} disabled/>
                                    <label htmlFor="form-item-name">Longitute:</label>
                                </div>                    

                        </form>
                     
                        <div>
                        <button  
                            onClick = {routeChange} 
                            className = 'button button-md button-primary'
                           
                            data-amplify-analytics-on='click'
                            data-amplify-analytics-name='loc'
                            data-amplify-analytics-attrs={ 'lat:' + location.lat + ", lng:" + location.lng}>
                              
                            <h4>Next</h4>
                        </button>
                                <div  className = 'div-center text-center'>
                                <button onClick={handleResetLocation} >
                                <br/>
                                <p>Reset Location</p>
                                </button>
                                </div>
                                </div> 
                        </div>

                    
                }
        


                {dp &&
                    <h2>SUCCESS</h2>    
            }
                </Container>
          
            </div>
        </section>
     
    );
}

export default Landing;
