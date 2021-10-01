import React, {useState} from "react";
import {Container, Row, Col} from "react-grid-system";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import Carousel, {Modal, ModalGateway} from "react-images";
import {Link} from "react-router-dom";

// Auxillary Packages

import 'reactjs-popup/dist/index.css';

// Components
import Headline from "../common/headline";
import CountupGraph1 from "../common/graphs/countupGraph1";
import Graph1 from "../common/graphs/graph1";
import {Typography} from "@material-ui/core";

function Stats() {
  const [lightboxIsOpen,
    setLightboxIsOpen] = useState(false);
  const [selectedIndex,
    setSelectedIndex] = useState(0);

  const toggleLightbox = (index) => {
    setSelectedIndex(index);
    setLightboxIsOpen(!lightboxIsOpen);
  };

  const [dp,
    setDp] = useState(false);

  return (

    <section className="section section-portfolio section-portfolio-1">
      <div className="display-spacing">
        <Container className="container">
          <Headline
            label="Portfolio"
            title="Game Results"
            divider_1={true}
            position="center"/>
          <div className="div-center text-center"></div>
          <CountupGraph1/>

          <Graph1/>

        </Container>

      </div>
    </section>

  );
}

export default Stats;
