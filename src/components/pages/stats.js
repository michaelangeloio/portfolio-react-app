//CORE
import React from "react";
import {Container} from "react-grid-system";

// Auxillary Packages

import 'reactjs-popup/dist/index.css';

// Components
import Headline from "../common/headline";
import CountupGraph1 from "../common/graphs/countupGraph1";
import Graph1 from "../common/graphs/graph1";
import Graph2 from "../common/graphs/graph2";
import Graph3 from "../common/graphs/graph3";

//MUI

import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

//Redux
import {useSelector} from 'react-redux';

function Stats() {

  const s3LoadedState = useSelector(state => state.s3Data.loaded)

  return (

    <section className="section section-portfolio section-portfolio-1">
      <div className="display-spacing">
        <Container className="container">
          <Headline
            label="My Game"
            title="LIVE RESULTS"
            divider_1={true}
            position="center"/>
          <div className="div-center text-center"></div>

          {s3LoadedState
            ? <> <CountupGraph1/> < Graph1 /> <Graph2/> < Graph3 /> </>
            : <div>
              <Grid
                container
                justifyContent="center"
                direction="column"
                alignItems="center"
                >
                <LinearProgress
                  color="secondary"
                  style={{
                  width: 310, marginBottom: 30
                }}/>
                <Headline title="LOADING DATA" position="center"/>

              </Grid>
            </div>}

        </Container>

      </div>
    </section>

  );
}

export default Stats;
