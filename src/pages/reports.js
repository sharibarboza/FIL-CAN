import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import pdf from '../images/pdf-icon.png'

class ReportsPage extends React.Component {

  displayFiles() {
    let elements = [];
    return elements;
  }

  render() {
    return (
      <div>
        <div className="about_area3">
          <div className="container">
            <div className="blog-left-side">
              <div className="widget widget_categories" style={{
                width: '100%'
              }}>
                <h2 className="widget-title">Annual Reports</h2>
                <ul>
                  {this.displayFiles()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default ReportsPage
