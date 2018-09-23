import React from 'react';
import Link from 'gatsby-link';

import divider from '../images/divider.png';

class Divider extends React.Component {
  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title t_center">
              <div className="em-image">
                <img src={divider} alt="divider" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Divider
