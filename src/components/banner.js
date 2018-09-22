import React from 'react';
import Link from 'gatsby-link';

import banner from '../images/banner.jpg';

class Banner extends React.Component {
  render() {

    return (
      <div className="breatcome_area" style={{
        background: 'transparent url("' + banner + '")'
      }}>
        <div className="container-fluid">
          <div className="col-md-12">
            <div className="breatcome_title">
              <div className="breatcome_title_inner">
                <div className="breatcome_content">
                  <ul>
                    <li><Link to="/">home<i className="fa fa-angle-right"></i></Link>{this.props.path}</li>
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
