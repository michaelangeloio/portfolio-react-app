import React from "react";
import {Container} from "react-grid-system";
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
                  <GoBack/>
                  <h1>A Community for the Marching Arts</h1>
                  <p>
                    <span className="author">Coming soon</span> to <span className="category">all Platforms</span> in <span className="date">2022</span>.
                  </p>
                </div>
              </div>
              <div className="post-body">

                <img
                  src="https://media.michaelangrivera.com/michaelangrivera/sheetsciencetile.png"
                  alt="Loading"/>

                <div className="post-content">
                  <p>More info coming soon...</p>

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
