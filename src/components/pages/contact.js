import React from "react";
import {Container, Hidden, Row, Col} from "react-grid-system";
import {Link} from "react-router-dom";

const ButtonMailto = ({mailto, label}) => {
  return (
    <Link
      to='#'
      onClick={(e) => {
      window.location = mailto;
      e.preventDefault();
    }}>
      {label}
    </Link>
  );
};

function Contact() {
  return (
    <section className="section section-contact section-contact-1">
      <div className="display-spacing">
        <Container>
          <Row>
            <Hidden xs sm md>
              <Col lg={5}>
                <div className="contact-image">
                  <div
                    className="image overlay-image"
                    style={{
                    backgroundImage: `url(https://michaelangrivera-media.s3.us-east-2.amazonaws.com/portrait.png)`
                  }}></div>
                </div>
              </Col>
            </Hidden>
            <Col lg={7}>
              <div className="contact-content">
                <header className="el-heading">
                  <h2 className="el-icon">
                    <span className="el-icon-title">CONTACT ME</span>
                  </h2>
                  <h3>
                    <span>Get in touch with me today.</span>
                  </h3>
                  <div className="divider divider-1"></div>
                  <p>Feel free to email, call, or text me at any time!</p>
                  <h5>mar@michaelangrivera.com</h5>
                  <h5>404-709-0532</h5>

                </header>

                <Container>
                  <div className="el-heading">

                    {/* <span className="el-icon-title" style={{ color: 'black' }}>['Hello there']</span> */}

                    <button
                      className="button button-lg button-primary"
                      data-amplify-analytics-on='click'
                      data-amplify-analytics-name='see_more_button'
                      data-amplify-analytics-attrs='attr1:attr1_value,attr2:attr2_value'>
                      <span className="wave"></span>
                      <ButtonMailto mailto="mailto:mar@michaelangrivera.com" label={< span className = "text" > Email Me </span>}/>

                    </button>
                    <button className="button button-lg button-light">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://michaelangrivera.com">
                        <span className="text text-primary">Follow Me</span>
                      </a>
                    </button>
                  </div>
                </Container>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Contact;
