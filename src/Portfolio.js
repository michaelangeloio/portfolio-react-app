import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import MapPicker from 'react-google-map-picker'


// Components
import Headline from "./components/common/headline";

const portfolio = [
    {
        name: "All Worls",
        items: [
            {
                id: 0,
                title: "Test",
                link: "/intro",
                subtitle: "Web Design",
                src: "/assets/images/portfolio/3-1.jpg",
                thumbnail: "/assets/images/portfolio/3-1.jpg",
            },
            {
                id: 1,
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Web Design",
                src: "/assets/images/portfolio/3-2.jpg",
                thumbnail: "/assets/images/portfolio/3-2.jpg",
            },
            {
                id: 2,
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Web Design",
                src: "/assets/images/portfolio/3-3.jpg",
                thumbnail: "/assets/images/portfolio/3-3.jpg",
            },
            {
                id: 3,
                title: "Crearive Design",
                subtitle: "Web Design",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/3-4.jpg",
                thumbnail: "/assets/images/portfolio/3-4.jpg",
            },
            {
                id: 4,
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/3-5.jpg",
                thumbnail: "/assets/images/portfolio/3-5.jpg",
            },
            {
                id: 5,
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/3-6.jpg",
                thumbnail: "/assets/images/portfolio/3-6.jpg",
            },
            {
                id: 6,
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/3-7.jpg",
                thumbnail: "/assets/images/portfolio/3-7.jpg",
            },
            {
                id: 7,
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/3-8.jpg",
                thumbnail: "/assets/images/portfolio/3-8.jpg",
            },
            {
                id: 8,
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/3-9.jpg",
                thumbnail: "/assets/images/portfolio/3-9.jpg",
            },
            {
                id: 9,
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/3-10.jpg",
                thumbnail: "/assets/images/portfolio/3-10.jpg",
            },
        ],
    },
    {
        name: "Web Design",
        items: [
            {
                id: 0,
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Web Design",
                src: "/assets/images/portfolio/3-1.jpg",
                thumbnail: "/assets/images/portfolio/3-1.jpg",
            },
            {
                id: 1,
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Web Design",
                src: "/assets/images/portfolio/3-2.jpg",
                thumbnail: "/assets/images/portfolio/3-2.jpg",
            },
            {
                id: 2,
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Web Design",
                src: "/assets/images/portfolio/3-3.jpg",
                thumbnail: "/assets/images/portfolio/3-3.jpg",
            },
            {
                id: 3,
                title: "Crearive Design",
                subtitle: "Web Design",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/3-4.jpg",
                thumbnail: "/assets/images/portfolio/3-4.jpg",
            },
        ],
    },
    {
        name: "Mobile Apps",
        items: [
            {
                id: 4,
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/3-5.jpg",
                thumbnail: "/assets/images/portfolio/3-5.jpg",
            },
            {
                id: 5,
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/3-6.jpg",
                thumbnail: "/assets/images/portfolio/3-6.jpg",
            },
            {
                id: 6,
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/3-7.jpg",
                thumbnail: "/assets/images/portfolio/3-7.jpg",
            },
        ],
    },
    {
        name: "Branding",
        items: [
            {
                id: 7,
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/3-8.jpg",
                thumbnail: "/assets/images/portfolio/3-8.jpg",
            },
            {
                id: 8,
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/3-9.jpg",
                thumbnail: "/assets/images/portfolio/3-9.jpg",
            },
            {
                id: 9,
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/3-10.jpg",
                thumbnail: "/assets/images/portfolio/3-10.jpg",
            },
        ],
    },
];

const images = [
    {
        src: "/assets/images/portfolio/3-1.jpg",
    },
    {
        src: "/assets/images/portfolio/3-2.jpg",
    },
    {
        src: "/assets/images/portfolio/3-3.jpg",
    },
    {
        src: "/assets/images/portfolio/3-4.jpg",
    },
    {
        src: "/assets/images/portfolio/3-5.jpg",
    },
    {
        src: "/assets/images/portfolio/3-6.jpg",
    },
    {
        src: "/assets/images/portfolio/3-7.jpg",
    },
    {
        src: "/assets/images/portfolio/3-8.jpg",
    },
    {
        src: "/assets/images/portfolio/3-9.jpg",
    },
    {
        src: "/assets/images/portfolio/3-10.jpg",
    },
];

const DefaultLocation = { lat: 40.752336836965696, lng: -73.98232417652586};
const DefaultZoom = 10;


function Portfolio() {
    return (
      <div>
        <PortfolioHidden />
      </div>
    );
  }
  

function PortfolioHidden() {
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const toggleLightbox = (index) => {
        setSelectedIndex(index);
        setLightboxIsOpen(!lightboxIsOpen);
    };

    const [dp, setDp] = useState(false);
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
                    <Headline label="Portfolio" title="Let's See My Work" divider_1={true} position="center" />
                    <div className="div-center text-center">  

                    <Popup
                        trigger={<button className="button button-md button-primary"> Open Modal </button>}
                        modal
                        nested
                    >
                         <div className="div-center text-center">  
                            <div className="modal">   <div className="modal header"> Let me ask you a few questions </div>
                        <button className="button button-md button-primary"
                            onClick={e => {
                            e.preventDefault();
                            setDp(!dp);
                            }}
                        >
                            Test
                        </button>
                             </div>
                      

                        <button onClick={handleResetLocation}>Reset Location</button>
                        <label>Latitute:</label><input type='text' value={location.lat} disabled/>
                        <label>Longitute:</label><input type='text' value={location.lng} disabled/>
                        <label>Zoom:</label><input type='text' value={zoom} disabled/>
                        
                        <MapPicker defaultLocation={defaultLocation}
                            zoom={zoom}
                            mapTypeId="roadmap"
                            style={{height:'700px'}}
                            onChangeLocation={handleChangeLocation} 
                            onChangeZoom={handleChangeZoom}
                            apiKey='AIzaSyAXj48YMuiEqGhKLY88NonO4YhFVKGcbjY'/>
                          </div>
                    </Popup>
                </div>
                {dp &&
                    <Tabs className="el-tabs el-tabs-1" selectedTabClassName="active">
                        <TabList className="el-tabs-links">
                            {portfolio.map((category, categoryIndex) => (
                                <Tab key={categoryIndex}>{category.name}</Tab>
                            ))}
                        </TabList>
                        {portfolio.map((category, categoryIndex) => (
                            <TabPanel key={categoryIndex}>
                                <Row className="row-center mb--30">
                                    {category.items.map((item, index) => (
                                        <Col key={index} xs={6} sm={6} md={6} lg={3} xl={3} onClick={() => toggleLightbox(item.id)}>
                                            <div className="portfolio-item">
                                                <div className="portfolio-card">
                                                    <div className="image overlay-image" style={{ backgroundImage: `url(${item.src})` }} />
                                                    <div className="content">
                                                        <Link to={item.link}>
                                                        <button className="button button-circle button-icon button-circle-md button-primary">
                                                            <span className="el-icon-icon ti-fullscreen"></span>
                                                        </button>
                                                        <span>{item.title}</span>
                                                        <h3>{item.subtitle}</h3>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </TabPanel>
                        ))}
                    </Tabs>     
            }
                </Container>
                <ModalGateway>
                    {lightboxIsOpen ? (
                        <Modal onClose={toggleLightbox}>
                            <Carousel currentIndex={selectedIndex} views={images} />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </section>
     
    );
}

export default Portfolio;
