import React from "react";

import {Grid as MuiGrid} from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
;

const data = 12044;

function CountupGraph1() {

   
  return (


   <div>

  
      <MuiGrid container direction="column" alignItems="center" style = {{marginTop: -60}}>
        <MuiGrid justifyContent="center" item>
          <Typography variant="h6" style = {{color: "#00e676"}}>
            I Love Data. I Love Apps.</Typography>
        </MuiGrid>
        <MuiGrid justifyContent="center" item>
          <Typography >
            This website is a perfect example of that!</Typography>
        </MuiGrid>
        <MuiGrid justifyContent="center" item  style = {{marginTop: 30, marginBottom: 20}}>
          <Typography style = {{fontSize: 12}}>
            I've programmed some real time statistics. Let's see them...</Typography>
        </MuiGrid>
        <MuiGrid justifyContent="center" item>
          <Typography variant = "h2" >
          <CountUp end={data} duration={6}/>
          </Typography>
        </MuiGrid>
        <MuiGrid justifyContent="center" item>
          <Typography variant = "h6" style = {{color: "#00e676"}} >
          Unique Visitors
          </Typography>
        </MuiGrid>
     
      </MuiGrid>
       

    </div>
  );
}

export default CountupGraph1;