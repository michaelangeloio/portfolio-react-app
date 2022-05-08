import React from "react";
import { FaCheck } from "react-icons/fa";
import { Container } from "react-grid-system";
// Components
import GoBack from "../../common/goback";

function Post() {
    return (
        <section className="section section-single-post section-single-post-1">
        <div className="display-spacing">
            <Container>
                <div className="max-w-768 div-center">
                    <div className="post">
                        <div className="post-head">
                            <div className="post-info">
                                <GoBack />
                                <h1>State Farm Business Intelligence Web App Portal</h1>
                                <p>
                                     <span className="author">Developing</span> with the <span className="category">Cloud Modernization Team</span> since <span className="date">June 2021</span>.
                                </p>
                            </div>
                        </div>
                        <div className="post-body">
                            <div className="post-image">
                                <img src="https://media.michaelangrivera.com/michaelangrivera/State-Farm-Logo.png" alt="Single Post" />
                            </div>
                            <div className="post-content">
                                <p>Serving as an internal technical lead and developer for the Modernization “Portal” Effort:</p>
                                <p>
                                    <b>Key Features:</b>
                                </p>
                                <ul className="el-list-check">
                                    <li>
                                        <FaCheck className="icon" />
                                        Enables over 3000 Business Leaders to access their data easily
                                    </li>
                                    <li>
                                        <FaCheck className="icon" />
                                        Modern Design
                                    </li>
                                    <li>
                                        <FaCheck className="icon" />
                                        Serverless AWS + React-based application (“Portal”) that embeds AWS QuickSight Dashboards 
                                    </li>
                                </ul>
                                <p> Some More Info: </p>
                                <p>Collaborated with developers on developing the company’s first-ever SSO and Identity Management Architecture solution for AWS QuickSight. </p>
                                <p> Uses a combination of MS Graph, Boto3 + Lambda, and QuickSight services to provide Role Level Security to Business.</p>
                                <p> Developing reusable architecture and standards, which will guide other teams across the company. </p>
                            </div>
                            <div className="post-tags">
                                <span>Tags:</span>
                                <ul>
                                    <li>
                                        <a href="/#">StateFarm</a>
                                    </li>
                                    <li>
                                        <a href="/#">BusinessIntelligence</a>
                                    </li>
                                    <li>
                                        <a href="/#">React</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </section>
    );
}

export default Post;
