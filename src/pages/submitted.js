import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Divider from '../components/divider'

class SubmittedPage extends React.Component {

  render() {

    return (
      <div className="container" style={{
        textAlign: 'center',
        padding: '100px 0 100px'
      }}>
        <div className="row">
          <div className="col-md-12">
            <div className="section-title t_center">

              <h2>Thank you!</h2>
              <Divider />
            </div>
          </div>
        </div>
        We have received your message and will try to respond to you as soon as possible.
      </div>
    )
  }

}

export default SubmittedPage
