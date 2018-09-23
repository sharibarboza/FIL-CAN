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
    const churches = data.churches.edges;

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
        <Footer churches={churches} />
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
    churches: allMarkdownRemark(
  	   filter: { fileAbsolutePath: { regex: "/(churches)/.*\\.md$/" } }
       sort: { fields: [frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            website
          }
        }
      }
    }
  }
`
