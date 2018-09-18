import React from 'react';
import Link from 'gatsby-link';

import slider1 from '../images/alberta.jpg';

class Carousel extends React.Component {
  render() {

    return (
      <div className="main-slider-area">
        <div className="container-fluid">
          <div className="row">
            <div className="em-nivo-slider-wrapper kc-elm kc-css-242493">
              <div id="mainSlider" className="nivoSlider em-slider-image" style={{
                maxHeight: '100vh',
                overflow: 'hidden'
              }}>
  						  <img src={slider1} alt="" title="#htmlcaption1"/>
              </div>

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
        </div>
      </div>
    )
  }
}

export default Carousel
