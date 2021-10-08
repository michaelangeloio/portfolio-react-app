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


function Stats() {
  // const [lightboxIsOpen,
  //   setLightboxIsOpen] = useState(false);
  // const [selectedIndex,
  //   setSelectedIndex] = useState(0);

  // const toggleLightbox = (index) => {
  //   setSelectedIndex(index);
  //   setLightboxIsOpen(!lightboxIsOpen);
  // };

  // const [dp,
  //   setDp] = useState(false);

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
          <CountupGraph1/>

          <Graph1/>
          <Graph2/>
          <Graph3/>

        </Container>

      </div>
    </section>

  );
}

export default Stats;
