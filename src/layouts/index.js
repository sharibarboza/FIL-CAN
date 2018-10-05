import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import {TinyButton as ScrollUpButton} from "react-scroll-up-button"

import Header from '../components/header'
import Footer from '../components/footer'
import Banner from '../components/banner'

import './index.css'
import 'bootstrap/dist/css/bootstrap.css'


class Layout extends React.Component {

  render() {
    const { location, children, data } = this.props;
    const title = data.site.siteMetadata.title;
    const churches = data.churches.edges;
    const bannerImage = data.bannerImage;
    const bannerTitle = (location.pathname).replace(/\//g, '');
    const noBanner = ['/', '/campmeeting/', '/meetings/'];

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
          className="banner-container"
          style={{
            margin: '0 auto',
            paddingTop: location.pathname == '/' ? 0 : '100px'
          }}
        >

        {noBanner.indexOf(location.pathname) < 0 ? <Banner bgImage={bannerImage} path={bannerTitle} /> : null}
        {children()}
        </div>
        <ScrollUpButton style={{
          background: '#B51D29 none repeat scroll 0 0',
          fill: 'white',
          padding: '5px 10px',
          width: '40px',
          height: '40px'
        }} />
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
    bannerImage: imageSharp(id: { regex: "/banner/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
