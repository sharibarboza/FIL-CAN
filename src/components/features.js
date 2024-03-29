import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";

import 'font-awesome/css/font-awesome.css';

import Divider from './divider';

class Features extends React.Component {
  render() {

    return (
    <div className="feature_area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title t_center">
              <h2>Our Community</h2>
              <Divider />
            </div>
          </div>
        </div>
        <div className="row feature_blocks">
          <div className="col-lg-4 col-md-12 col-xs-12">
            <div className="em-feature">
              <Img
                className="breatcome_area"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%"
                }}
                sizes={this.props.images[0].sizes}
              />
              <div className="overlay" id="feature1_overlay"></div>
              <div className="feature_inner_box">
                <div className="feature_inner">
                  <div className="em_feature-icon">
                    <span><i className="fa fa-book"></i></span>
                  </div>
                  <div className="em-feature-title">
                    <h2>About Us</h2>
                  </div>
                </div>
                <div className="em_content_text">
                  <div className="em-feature-desc">
                    <p>The Association was founded in 2002 to establish an organized Filipino SDA congregation.</p>
                  </div>
                </div>
                <div className="f-readmore">
                  <div className="feature_button">
                    <Link to="/history/">Read More<span><i className="fa fa-long-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="em-feature">
              <Img
                className="breatcome_area"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%"
                }}
                sizes={this.props.images[1].sizes}
              />
              <div className="overlay" id="feature2_overlay"></div>
              <div className="feature_inner_box">
                <div className="feature_inner">
                  <div className="em_feature-icon">
                    <span><i className="fa fa-location-arrow"></i></span>
                  </div>
                  <div className="em-feature-title">
                    <h2>Churches</h2>
                  </div>
                </div>
                <div className="em_content_text">
                  <div className="em-feature-desc">
                    <p>See which Seventh-day Adventist churches in Alberta are part of the Association.</p>
                  </div>
                </div>
                <div className="f-readmore">
                  <div className="feature_button">
                    <Link to="/churches/">View Churches<span><i className="fa fa-long-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="em-feature">
              <Img
                className="breatcome_area"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%"
                }}
                sizes={this.props.images[2].sizes}
              />
              <div className="overlay" id="feature3_overlay"></div>
              <div className="feature_inner_box">
                <div className="feature_inner">
                  <div className="em_feature-icon">
                    <span><i className="fa fa-fire"></i></span>
                  </div>
                  <div className="em-feature-title">
                    <h2>Camp Meeting</h2>
                  </div>
                </div>
                <div className="em_content_text">
                  <div className="em-feature-desc">
                    <p>Are you planning on attending the next annual Filipino-Canadian Camp Meeting?</p>
                  </div>
                </div>
                <div className="f-readmore">
                  <div className="feature_button">
                    <Link to="/campmeeting/">Learn More <span><i className="fa fa-long-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    )
  }
}

export default Features
