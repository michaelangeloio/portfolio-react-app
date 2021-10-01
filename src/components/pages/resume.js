import React from "react";
import { Container, Row, Col } from "react-grid-system";
// Components
import ProgressBar from "../common/progressbar";
import {Link} from "react-router-dom";


const skills = [
    {
        title: "Typing Fast",
        percent: 100,
    },
    {
        title: "StackOverFlow.com",
        percent: 100,
    },
    {
        title: "Reading Old Code",
        percent: 100,
    },
    {
        title: "SQL",
        details: "T-SQL & SQL Server DBA, Db2, Postgres, MySQL",
        percent: 90,
    },
    {
        title: "Python",
        details: " > 3.x, Pandas, Logging, Requests, etc",        
        percent: 90,
    },
    {
        title: "AWS",
        details: "S3, EC2 (Ubuntu AMI), Route53, Amplify, RDS, more",     
        percent: 60,
    },
    {   title: "Docker",
        details: "Developement for SheetScience",
        percent: 70
    },
    {
        title: "JavaScript",
        details: "React JS, Mithril JS",
        percent: 70,
    },
    {
        title: "PowerBI",
        details: "Data Modeling, Dashboard Design, PowerQuery, M",
        percent: 90,
    },
    {
        title: "SAS Programming",
        details: "PROC SQL, Data Steps, Macro Development, etc",
        percent: 90,
    },
    {
        title: "QlikSense & QlikView",
        details: "Data Load Editing, QVWs, Modeling",
        percent: 70,
    },
    {
        title: "PHP",
        details: "Laravel, Artisan, Composer",
        percent: 70,
    }
];
const education = [
    {
        title: "Emory University",
        subtitle: "Economics B.A. | Atlanta, GA",
        description: 'I  studied Economics with a concentration in Econometrics & Quantitative Theory Methods. Despite the heavily quantitative classes, I was initially an English major. I still remember how Dr. Quarmby transformed my writing from "trash" to treasure... Translation- I can write emails that make sense.',
        date: "(Aug 2015 - May 2019)",
        icon: "ti-crown",
    },
    {
        title: "Oxford College of Emory University",
        subtitle: "Associate of Arts | Oxford, GA",
        description: "Oxford served as a freshman and sophomore liberal arts program transitioning to the Emory Atlanta Campus junior year. I had the privilege of taking a wide array of classes, from East Asian Religions to Contemporary U.S. Art History.",
        date: "(Aug 2015- May 2017)",
        icon: "ti-cup",
    }
];
const experience = [
    {
        title: "Full Stack Engineer/Data Analyst",
        subtitle: "State Farm | Atlanta, GA",
        description: "Like a good neighbor, I help the State Farm BI Suite deliver meaningful data to business and customers. Hopefully this will save you a buck or two- if you have State Farm insurance. ",
        date: "(2020- present)",
        icon: "ti-server",
    },
    {
        title: "App Developer",
        subtitle: "SheetScience | Atlanta, GA",
        description: "A little project I'm working on in hopes of bringing the Marching Arts community (band nerds) together. For more information, feel free to check it out at ",
        date: "(2020-present)",
        icon: "ti-desktop",
    },
    {
        title: "Analytics Developer, Security",
        subtitle: "Coke One North America | Atlanta, GA",
        description: "My team supported the Identity Management and Security data for 14 major North American Coca-Cola bottling companies. Refreshing.",
        date: "(2019)",
        icon: "ti-shield",
    },
];

function Resume() {
    return (
        <section className="section section-resume section-resume-1">
            <div className="display-spacing">
                <header className="el-heading el-heading-center">
                    <div className="el-icon">
                        <h2 className="el-icon-title">
                            <span>PROFESSIONAL TIMELINE</span>
                        </h2>
                    </div>
                    <h3>Education & Experience</h3>
                    <div className="divider divider-1-reverse divider-1-1"></div>
                    <div className="divider divider-1-reverse divider-1-2"></div>
                </header>
                <Container className="mb-spacing">
                    <Row>
                        <Col md={6}>
                            <div className="resume-row">
                                <h4 className="resume-title">Education</h4>
                                <ul>
                                    {education.map((item, index) => (
                                        <li key={index}>
                                            <div className="resume-item">
                                                <div className="resume-head">
                                                    <div className="el-icon">
                                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                                    </div>
                                                    <h5>{item.title} </h5>
                                                    <h6>{item.subtitle}   <small>{item.date}</small> </h6>
                                                   
                                                  
                                                </div>
                                                <div className="resume-body">
                                                    <p>{item.description}</p> </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="resume-row">
                                <h4 className="resume-title">Experience</h4>
                                <ul>
                                    {experience.map((item, index) => (
                                        <li key={index}>
                                            <div className="resume-item">
                                                <div className="resume-head">
                                                    <div className="el-icon">
                                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <h6>
                                                        {item.subtitle} <small>{item.date}</small>

                                                    </h6>
                                                </div>
                                                <div className="resume-body">
                                                    <p>{item.description}
                                                    {(() => {
                                                        switch (item.title) {
                                                        case "App Developer":   return <a href="https://sheetscience.app">sheetscience.app</a>;
                                                        default:      return "";
                                                        }
                                                    })()}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <h6 style={{marginTop: -50}}> Some Technologies I've worked with</h6>
                    <div className="divider divider-1"></div>
                    <Row>
                        {skills.map((item, index) => (
                            <Col key={index} sm={6} xl={4}>
                                <div className="skills-item">
                                    <ProgressBar label={item.title} subtext={item.details} percent={item.percent} />  
                                 
                        
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <p ><i>Percentages are in terms of comfortability in getting around. Can someone actually be a 100% expert in Python?</i></p>

                    <div className="div-center text-center">
                        <Link to="/portfolio" >
                        <button className="button button-md button-primary" style= {{marginTop: 30}}>See My Portfolio</button>
                        </Link>
                     </div>
                </Container>
            </div>
        </section>
    );
}

export default Resume;
