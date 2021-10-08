import React, {  useState } from "react";
import { Container } from "react-grid-system";
import { useHistory } from "react-router-dom";
import {Link } from "react-router-dom";


// Auxillary Packages
import 'reactjs-popup/dist/index.css';
import MapPicker from 'react-google-map-picker'
import { Wave } from 'react-animated-text';
import Typography from "@material-ui/core/Typography";

// Redux
import { addGMapsResponse, removeGMapsResponse, fetchDecodeData } from '../../actions/question1Answer';
import { useDispatch, useSelector } from "react-redux";



// Components
import Headline from "../common/headline";



const DefaultLocation = { lat: 40.752336836965696, lng: -73.98232417652586};
const DefaultZoom = 10;








function Question1() {

    
  const answerState1 = useSelector( state => state.gMapsData.loaded)

    console.log(answerState1)
    console.log("test")

    const dispatch = useDispatch();
    

   
    

    const history = useHistory();

    
    const routeChange =  () =>{ 
      
      let path = `/landing/question2`; 
   

      dispatch(addGMapsResponse(location));
      dispatch(fetchDecodeData(location));
      history.push(path);
      console.log('clicked')
      
    }
    const handleQuestionRefresh = () => {
      dispatch(removeGMapsResponse())
    }
       

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
<div>
 {answerState1 &&
  <section className="section section-portfolio section-portfolio-1">
 <div className="display-spacing">
                <Container className="container">
                    <Headline label="" title="Quick Game - First Question" divider_1={true} position="center" />
                    <div className="div-center text-center">  
              <Typography variant = "h4" style = {{marginBottom: 20}}>You've already answered!</Typography>



              <Container>
              <Link to = "/landing/question2">
                    <button
                      className="button button-lg button-primary"
                      data-amplify-analytics-on='click'
                      data-amplify-analytics-name='see_more_button'
                      data-amplify-analytics-attrs='attr1:attr1_value,attr2:attr2_value' >
                      <span className="wave"></span>
                    
                      Next Question
              

                    </button>
                    </Link>
                    <button className="button button-lg button-light" onClick = {handleQuestionRefresh} >
                
                        <span className="text text-primary">Answer Again</span>
                
                    </button>
              
                </Container>

                </div> 
                </Container>
                </div>
                </section>
 }


{!answerState1 && 
        
        <section className="section section-portfolio section-portfolio-1">
            <div className="display-spacing">
                <Container className="container">
                    <Headline label="" title="Quick Game - First Question" divider_1={true} position="center" />
                    <div className="div-center text-center">  
               
                </div> 
                
             
              
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
                            apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}/>
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

                    
    
        


                </Container>
          
            </div>
        </section>
}
</div>
    );
}

export default Question1;
