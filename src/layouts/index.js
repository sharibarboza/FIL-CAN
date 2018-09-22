import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Header from '../components/header'
import Footer from '../components/footer'

import './index.css'
import 'bootstrap/dist/css/bootstrap.css'


class Layout extends React.Component {

  render() {
    const { location, children, data } = this.props;
    const title = data.site.siteMetadata.title;

    return (
      <div>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header siteTitle={title} location={location.pathname} />

        <div
          style={{
            margin: '0 auto',
            paddingTop: location.pathname == '/' ? '0' : '100px',
          }}
        >
        {children()}
        </div>
        <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
