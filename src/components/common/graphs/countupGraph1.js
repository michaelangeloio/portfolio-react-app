import React from "react";

import {Grid as MuiGrid} from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import { useSelector } from "react-redux";



function CountupGraph1() {

  const responseCount = parseInt(useSelector( state => state.s3Data.data.countquery[0].session ))
  return (


   <div>

  
      <MuiGrid container direction="column" alignItems="center" style = {{marginTop: -60}}>
        <MuiGrid  item>
          <Typography variant="h6" style = {{color: "#00e676"}}>
            I Love Apps. I Love Data.</Typography>
        </MuiGrid>
        <MuiGrid  item>
          <Typography >
            This website is a perfect example of that!</Typography>
        </MuiGrid>
        <MuiGrid  item  style = {{marginTop: 20, marginBottom: 20}}>
          <Typography style = {{fontSize: 12}}>
            I've programmed some charts for you. Let's see them...</Typography>
        </MuiGrid>
        <MuiGrid  item>
          <Typography variant = "h2" >
          <CountUp end={responseCount} duration={6}/>
          </Typography>
        </MuiGrid>
        <MuiGrid  item>
          <Typography variant = "h6" style = {{color: "#00e676"}} >
          Visits to This Website
          </Typography>
        </MuiGrid>
        <MuiGrid  item>
          <Typography  style = {{color: "white", fontSize: 10}} >
          that's a lot!
          </Typography>
        </MuiGrid>
     
      </MuiGrid>
       

    </div>
  );
}

export default CountupGraph1;