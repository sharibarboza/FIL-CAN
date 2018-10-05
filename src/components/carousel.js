import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";
import Carousel from 'nuka-carousel';

import '../layouts/animate.css'

class Slider extends React.Component {

  componentDidMount() {
    const WOW = require('wowjs/dist/wow.js');
    if (typeof window !== `undefined`) {
      new WOW.WOW({
          live: false
      }).init();
    }
  }

  getImages() {
    let elements = [];
    const images = this.props.images;
    for (let i = 0; i < images.length; i++) {
      let element = <Img key={i} alt="" sizes={images[i].sizes} className="carousel-image" />
      elements.push(element);
    }
    return elements;
  }

  displayText() {
    return <div id="htmlcaption1" className="nivo-html-caption em-slider-content-nivo">
      <div className="em_slider_inner container text-left" style={{
        marginTop: '-20px'
      }}>
        <div className="wow slideInRight" data-wow-duration="2s" data-wow-delay="0s">
          <h1 className="em-slider-sub-title">Uniting Filipino-Canadians </h1>
        </div>
        <div className="wow slideInRight" data-wow-duration="3s" data-wow-delay="0s">
          <p  className="em-slider-descript">Welcome to the Filipino-Canadian Seventh-Day Adventist Assocation of Alberta</p>
        </div>
        <div className="em-slider-button wow  bounceInUp  em-button-button-area" data-wow-duration="3s" data-wow-delay="0s">
          <Link to="/campmeeting/">Annual camp meeting</Link>
        </div>
      </div>
    </div>
  }

  render() {

    return (
      <div>
        <div className="main-slider-area">
          <Carousel
            renderCenterLeftControls={({ previousSlide }) => (
              <div className="carousel-control" onClick={previousSlide}><i className="fa fa-chevron-left"></i></div>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <div className="carousel-control" onClick={nextSlide}><i className="fa fa-chevron-right"></i></div>
            )}
            autoplay={true}
            autoplayInterval={8000}
            wrapAround={true}
          >
            {this.getImages()}
          </Carousel>
          <div className="overlay"></div>

          <div className="container-fluid">
            {this.displayText()}
          </div>
        </div>

      </div>
    )
  }
}

export default Slider
