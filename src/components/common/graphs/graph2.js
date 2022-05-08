import React from "react";
import { useSelector } from "react-redux";

import { LineChart, Line, XAxis, Tooltip, Legend, BarChart, Bar } from 'recharts';
import {Grid as MuiGrid} from '@material-ui/core/';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {
    ComposableMap,
    Geographies,
    Geography,
    Sphere,
    Marker,
    ZoomableGroup
  } from "react-simple-maps";
  
  const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

function Graph2() {
     // FOR FUTURE USE
  const locAddress = useSelector(state => state.gMapsDecodeData.data);
  const locAddressState = useSelector(state => state.gMapsDecodeData.loaded);
  const responsePlayedGame = useSelector(state => state.s3Data.data.playedgamequery);
  const responseVisits = useSelector(state => state.s3Data.data.visitsquery);
  const responseDevice = useSelector(state => state.s3Data.data.devicequery);
  const responseMarkers = useSelector(state => state.s3Data.data.locationqueryETL);
  return (
    <div>
      <MuiGrid container direction="column" alignItems="center" style = {{marginTop: 30}}>
      <div className="divider divider-1"></div>
      <MuiGrid  item style = {{marginTop: 5, marginBottom: 10}}>
          <Typography style = {{fontSize: 15}}>
            I wonder who actually plays the game <span role="img" aria-label="sheep">🤔</span></Typography>
        </MuiGrid>
        <MuiGrid  item style = {{marginBottom: 10}}>
          <Typography variant="h5">
            Visits and Game Plays Over Time</Typography>
        </MuiGrid>
        <MuiGrid  item>    
        <LineChart
          width={370}
          height={400}
          data={responseVisits}
        >
          <XAxis dataKey="name" />
          <Tooltip labelStyle = {{color: "black"}}/>
          <Legend />
          <Line type="monotone" dataKey="Visits" stroke="#8884d8" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="Plays" stroke="#82ca9d" /> */}
        </LineChart>
        </MuiGrid>
        <MuiGrid  item>
            <LineChart
              width={370}
              height={400}
              data={responsePlayedGame}
            >
              <XAxis dataKey="name" />
              <Tooltip labelStyle = {{color: "black"}}/>
              <Legend />
              {/* <Line type="monotone" dataKey="Visits" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
              <Line type="monotone" dataKey="Plays" stroke="#82ca9d" activeDot={{ r: 8 }} />
            </LineChart>
            </MuiGrid>
        <MuiGrid  item style= {{marginTop: 20, marginBottom: 10}}>
          <Typography >
            Interesting! Let's check the devices people are using to view this website...</Typography>
        </MuiGrid>
        <MuiGrid item>
        <BarChart
          width={370}
          height={300}
          data={responseDevice}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          animationBegin = {6700}
        >
          <XAxis  dataKey="name"   />
          <Tooltip labelStyle = {{color: "black"}}/>
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
        </MuiGrid>   
        <MuiGrid  item style= {{marginTop: 20, marginBottom: 10}}>
          {locAddressState ? <Typography align= "center"> So you're from {locAddress}? Nice. Other users are from:  </Typography> :   <Typography align="center">
              Looks like you have not played the game! To get the most out of this experience,
              please 
              <Link href="/landing" color="inherit">
                <Button variant="contained"  style = {{margin: 4}}>play</Button>
              </Link>!</Typography>} 
        </MuiGrid>

        <ComposableMap projectionConfig={{ scale: 200 }}>
        <ZoomableGroup zoom={2} center = {[-57.54777305850094, 31.4038787603066]}>
      <Sphere stroke="#9e9e9e" strokeWidth={2} />
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} fill = {"rgb(0, 230, 118)"} />)
        }
      </Geographies>
      {responseMarkers.map(({ name, coordinates, markerOffset }) => (
        <Marker  coordinates={coordinates}>
          <circle r={3} fill="#db6969"  strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >   
          </text>
        </Marker>
      ))}
      </ZoomableGroup>
    </ComposableMap>
      </MuiGrid>
    </div>
  );
}

export default Graph2;