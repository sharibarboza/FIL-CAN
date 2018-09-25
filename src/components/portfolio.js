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


    let numImages = 0;
    if (props.images) {
      numImages = props.images.length;
    }

    this.images = [];
    for (var i = 0; i < 8; i++) {
      let src = {
        'src': defaultImage
      };
      if (i < numImages) {
        let block = props.images[i].node.frontmatter.block[0];
        src['src'] = block.photo;
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

    for (let i = 0; i < 8; i++) {

      let element = <div className="col-md-4 col-sm-6 col-lg-3 col-xs-12 grid-item c d" key={i}>
        <div className="single_portfolio">
          <div className="single_portfolio_inner">
            <div className="single_portfolio_thumb">
              <img src={defaultImage} />
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
                <h3><a href="single-blog.html">Demo Media Title 1</a></h3>
                <p><span>campaign , event</span></p>
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
