import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";

import banner from '../images/banner.jpg';

class Banner extends React.Component {
  render() {

    return (
      <div className="count_down_area" style={{
        height: '200px'
      }}>
        <Img
          className="breatcome_area"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
          }}
          sizes={this.props.bgImage.sizes}
        />
        <div className="overlay"></div>
        <div className="container-fluid banner-text">
          <div className="col-md-12">
            <div className="breatcome_title">
              <div className="breatcome_title_inner">
                <div className="breatcome_content">
                  <ul>
                    <li>{this.props.path}</li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner
