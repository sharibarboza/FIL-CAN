import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";

import 'font-awesome/css/font-awesome.css';

import Divider from './divider';

import defaultPhoto from '../../static/assets/default.jpg';

class Executive extends React.Component {
  constructor(props) {
    super(props);
    this.executive = props.executive;
    this.columns = props.columns;
  }

  imageSize() {
    const sizes = {
      4 : 'em-content-image em-size-4',
      3 : 'em-content-image em-size-3'
    }

    let classSize;
    if (this.columns in sizes) {
      classSize = sizes[this.columns];
    } else {
      classSize = sizes[4];
    }

    return classSize;
  }

  getImage() {
    let element;
    try {
      element = <Img style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%"
      }} sizes={this.executive.photo.childImageSharp.sizes} alt="" />;
    } catch(e) {
      element = <img src={defaultPhoto} />
    }

    return element;
  }

  render() {

    return (
      <div className="em-team">
        <div className="em-team-one">
          <div className="em-team-content-image-inner">
            <div className={this.imageSize()}>
              {this.getImage()}
            </div>
          </div>
          <div className="em-team-content-waraper" id="president-wrapper">
            <div className="em-team-content-title-inner">
              <div className="em-content-title"><h2>{this.executive.name}</h2></div>
            </div>
            <div className="em-team-content-subtitle-inner">
              <div className="em-content-subtitle">{this.executive.position}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Executive
