import React from 'react';
import Link from 'gatsby-link';

import dividerImage from '../images/divider.png';
import dividerWhite from '../images/divider-white.png';

class Divider extends React.Component {
  constructor(props) {
    super(props);
    try {
      if (props.white) {
        this.image = dividerWhite;
      } else {
        this.image = dividerImage;
      }
    } catch(e) {
      this.image = dividerImage;
    }
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title t_center">
              <div className="em-image">
                <img src={this.image} alt="divider" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Divider
