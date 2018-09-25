import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";
import Carousel from 'nuka-carousel';

var createReactClass = require('create-react-class');

class Slider extends React.Component {

  getImages() {
    let elements = [];
    const images = this.props.images;
    for (let i = 0; i < images.length; i++) {
      let element = <Img alt="" sizes={images[i].sizes} className="carousel-image" />
      elements.push(element);
    }
    return elements;
  }

  displayText() {
    return <div id="htmlcaption1" className="nivo-html-caption em-slider-content-nivo">
      <div className="em_slider_inner container text-left">
        <div className="wow slideInRight" data-wow-duration="2s" data-wow-delay="0s">
          <h1 className="em-slider-sub-title">Uniting Filipino Canadians </h1>
        </div>
        <div className="wow slideInRight" data-wow-duration="3s" data-wow-delay="0s">
          <p  className="em-slider-descript">Welcome to the Filipino-Canadian Seventh-Day Adventist Assocation of Alberta</p>
        </div>
        <div className="em-slider-button wow  bounceInUp  em-button-button-area" data-wow-duration="3s" data-wow-delay="0s">
          <a className="withput-active" href="#">Contact Us</a>
        </div>
      </div>
    </div>
  }

  render() {

    return (
      <div>
        <div className="main-slider-area" style={{
          paddingTop: '100px'
        }}>
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
        </div>

        <div className="container-fluid">
          {this.displayText()}
        </div>
      </div>
    )
  }
}

export default Slider
