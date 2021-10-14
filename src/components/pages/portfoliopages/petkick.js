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
                <div class="post-info">
                  <GoBack/>
                  <h1>If you run with your dog a lot, you'll love this app...</h1>
                  <p>
                    <span className="author">Coming soon</span>
                    to
                    <span className="category">iOS</span>
                    in
                    <span className="date">2022</span>.
                  </p>
                </div>
              </div>
              <div className="post-body">

                <img
                  src="https://michaelangrivera-media.s3.us-east-2.amazonaws.com/petkicktile.png"
                  alt="Single Post"/>

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
