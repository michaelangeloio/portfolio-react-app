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
          <Typography style = {{fontSize: 14}}>
            I hosted a data collection game on this site for around a year. Let's see some stats...</Typography>
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
          from 2021 to 2022...that's a lot!
          </Typography>
        </MuiGrid>
      </MuiGrid>
    </div>
  );
}

export default CountupGraph1;