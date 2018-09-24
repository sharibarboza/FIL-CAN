import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";

class Carousel extends React.Component {
  render() {
    return (
      <div className="main-slider-area">
        <Img alt="" sizes={this.props.headerImage.sizes} title="#htmlcaption1"/>
        <div className="container-fluid">

          <div id="htmlcaption1" className="nivo-html-caption em-slider-content-nivo">
            <div className="em_slider_inner container text-left">
              <div className="wow slideInRight" data-wow-duration="2s" data-wow-delay="0s">
                <h1 className="em-slider-sub-title">Embracing Cultures </h1>
              </div>
              <div className="wow slideInRight" data-wow-duration="3s" data-wow-delay="0s">
                <p  className="em-slider-descript">Uniting Filipino-Canadian Seventh-Day Adventists Around Alberta</p>
              </div>
              <div className="em-slider-button wow  bounceInUp  em-button-button-area" data-wow-duration="3s" data-wow-delay="0s">
                <a className="em-active-button" href="#">contact us</a>
                <a className="withput-active" href="#">vote now</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Carousel
