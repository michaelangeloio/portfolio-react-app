import React from "react";
import {Container, Row, Col} from "react-grid-system";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import {Link} from "react-router-dom";

// Auxillary Packages

import 'reactjs-popup/dist/index.css';

// Components
import Headline from "../common/headline";

const portfolio = [
  {
    name: "All Works",
    items: [
      {
        id: 0,
        title: "Personal Project",
        link: "https://github.com/michaelangrivera/portfolio-react-app",
        subtitle: "This Website",
        src: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/test.png",
        thumbnail: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/test.png",
        externalURL: true
      }, {
        id: 1,
        title: "Professional Project",
        link: "portfolio/statefarmwebportal",
        subtitle: "Business Intillgence Web Portal",
        src: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/statefarmtile1.png",
        thumbnail: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/statefarmtile1.png",
        externalURL: false
      }, {
        id: 2,
        title: "Professional Project",
        link: "portfolio/statefarmtemplateauto",
        subtitle: "Template Automation",
        src: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/statefarmtile2.png",
        thumbnail: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/statefarmtile2.png",
        externalURL: false
      }, {
        id: 3,
        title: "Personal Project",
        subtitle: "SheetScience App",
        link: "portfolio/sheetscience",
        src: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/sheetsciencetile.png",
        thumbnail: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/sheetsciencetile.png",
        externalURL: false
      }, {
        id: 4,
        title: "Personal Project",
        subtitle: "AWS Athena Scheduler",
        link: "https://github.com/michaelangrivera/awsAthenaScheduler",
        src: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/athenascheduler.png",
        thumbnail: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/athenascheduler.png",
        externalURL: true
      }, {
        id: 5,
        title: "Personal Project",
        subtitle: "PetKick App",
        link: "portfolio/petkick",
        src: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/petkicktile.png",
        thumbnail: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/petkicktile.png",
        externalURL: false
      }, {
        id: 6,
        title: "Personal Project",
        subtitle: "React Linktree Clone",
        link: "https://github.com/michaelangrivera/react-linktree-clone",
        src: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/linktree-clone.png",
        thumbnail: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/linktree-clone.png",
        externalURL: true
      }
    ]
  }, {
    name: "Web Apps",
    items: [
      {
        id: 0,
        title: "Personal Project",
        link: "https://github.com/michaelangrivera/portfolio-react-app",
        subtitle: "This Website",
        src: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/test.png",
        thumbnail: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/test.png",
        externalURL: true
      }, {
        id: 1,
        title: "Professional Project",
        link: "portfolio/statefarmwebportal",
        subtitle: "Business Intillgence Web Portal",
        src: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/statefarmtile1.png",
        thumbnail: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/statefarmtile1.png",
        externalURL: false
      }, {
        id: 3,
        title: "Personal Project",
        subtitle: "SheetScience App",
        link: "portfolio/sheetscience",
        src: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/sheetsciencetile.png",
        thumbnail: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/sheetsciencetile.png",
        externalURL: false
      }, {
        id: 6,
        title: "Personal Project",
        subtitle: "React Linktree Clone",
        link: "https://github.com/michaelangrivera/react-linktree-clone",
        src: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/linktree-clone.png",
        thumbnail: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/linktree-clone.png",
        externalURL: true
      }

    ]
  }, {
    name: "Mobile Apps",
    items: [

      {
        id: 5,
        title: "Personal Project",
        subtitle: "PetKick App",
        link: "portfolio/petkick",
        src: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/petkicktile.png",
        thumbnail: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/petkicktile.png",
        externalURL: false
      }
    ]
  }, {
    name: "Other Dev Work",
    items: [
      {
        id: 2,
        title: "Professional Project",
        link: "portfolio/statefarmtemplateauto",
        subtitle: "Template Automation",
        src: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/statefarmtile2.png",
        thumbnail: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/statefarmtile2.png",
        externalURL: false
      }, {
        id: 4,
        title: "Personal Project",
        subtitle: "AWS Athena Scheduler",
        link: "https://github.com/michaelangrivera/awsAthenaScheduler",
        src: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/athenascheduler.png",
        thumbnail: "https://michaelangrivera-media.s3.us-east-2.amazonaws.com/athenascheduler.png",
        externalURL: true
      }
    ]
  }
];

function Portfolio() {
  return (
    <div>
      <PortfolioHidden/>
    </div>
  );
}

function PortfolioHidden() {



  return (

    <section className="section section-portfolio section-portfolio-1">
      <div className="display-spacing">
        <Container className="container">
          <Headline
            label="Portfolio"
            title="Some of My Work"
            divider_1={true}
            position="center"/>
          <div className="div-center text-center"></div>

          <Tabs className="el-tabs el-tabs-1" selectedTabClassName="active">
            <TabList className="el-tabs-links">
              {portfolio.map((category, categoryIndex) => (
                <Tab key={categoryIndex}>{category.name}</Tab>
              ))}
            </TabList>
            {portfolio.map((category, categoryIndex) => (
              <TabPanel key={categoryIndex}>
                <Row className="row-center mb--30">
                  {category
                    .items
                    .map((item, index) => (
                      <Col
                        key={index}
                        xs={6}
                        sm={6}
                        md={6}
                        lg={3}
                        xl={3}
                        >
                        <div className="portfolio-item">
                          <div className="portfolio-card">
                            <div
                              className="image overlay-image"
                              style={{
                              backgroundImage: `url(${item.src})`
                            }}/>

                            <div className="content">

                              {item.externalURL
                                ? <a target="_blank" href={item.link} rel="noopener noreferrer">

                                    <button
                                      className="button button-circle button-icon button-circle-md button-primary">
                                      <span className="el-icon-icon ti-fullscreen"></span>
                                    </button>
                                    <span>{item.title}</span>
                                    <h3>{item.subtitle}</h3>
                                  </a>
                                : <Link to={item.link}>
                                  <button
                                    className="button button-circle button-icon button-circle-md button-primary">
                                    <span className="el-icon-icon ti-fullscreen"></span>
                                  </button>
                                  <span>{item.title}</span>
                                  <h3>{item.subtitle}</h3>
                                </Link>}
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                </Row>
              </TabPanel>
            ))}
          </Tabs>

        </Container>

      </div>
    </section>

  );
}

export default Portfolio;
