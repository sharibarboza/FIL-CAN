import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";
import Lightbox from 'react-images';

import defaultImage from '../images/default-image.png'

import Divider from './divider';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			lightboxIsOpen: false,
			currentImage: 0,
		};

    let maxImages = 12;
    let numImages = 0;
    if (props.images) {
      numImages = props.images.length;
    }

    this.images = [];
    for (let i = 0; i < maxImages; i++) {
      let src = {
        'src': defaultImage
      };
      if (i < numImages) {
        let image = props.images[i].node.frontmatter;
        let photo = image.photo.childImageSharp.sizes;
        src['src'] = photo.src;
        src['srcSet'] = photo.srcSet;
        src['caption'] = image.caption;
      }
      this.images.push(src);
    }

		this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox(index, e) {
		e.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
	}
	closeLightbox() {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}
	gotoPrevious() {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext() {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}

  displayPhotos() {
    let elements = [];
    const numImages = this.props.images.length;
    const defaultPhoto = this.props.default.sizes;

    for (let i = 0; i < maxImages; i++) {
      let photo = defaultPhoto;
      let eventTitle = '';
      let caption = '';

      if (i < numImages) {
        let node = this.props.images[i].node.frontmatter;
        photo = node.photo.childImageSharp.sizes;
        eventTitle = node.event;
        caption = node.caption;
      }

      let element = <div className="col-md-4 col-sm-6 col-lg-3 col-xs-12 grid-item c d" key={i}>
        <div className="single_portfolio">
          <div className="single_portfolio_inner">
            <div className="single_portfolio_thumb">
              <Img className="img" sizes={photo} style={{
                height: '280px'
              }} />
            </div>
            <div className="single_portfolio_icon">
              <a
                onClick={(e) => this.openLightbox(i, e)}
                className="portfolio-icon venobox vbox-item" >
                <i className="fa fa-arrows"></i>
              </a>
            </div>
            <div className="portfolio_content">
              <div className="portfolio_content_inner">
                <h3>{eventTitle}</h3>
                <p><span>{caption}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      elements.push(element);
    }

    return elements;
  }

  render() {

    return (
      <div>
    		<div className="container_fluid">
          <div className="row li" style={{
            margin: '0'
          }}>
            {this.displayPhotos()}
          </div>
        </div>
        <Lightbox
					currentImage={this.state.currentImage}
          images={this.images}
          isOpen={this.state.lightboxIsOpen}
          onClose={this.closeLightbox}
          onClickNext={this.gotoNext}
					onClickPrev={this.gotoPrevious}
          backdropClosesModal={true}
        />
      </div>
    )
  }
}

export default Portfolio
