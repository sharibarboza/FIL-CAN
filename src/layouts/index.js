import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Carousel from '../components/carousel'
import Features from '../components/features'
import Counter from '../components/counter'
import Footer from '../components/footer'

import './index.css'
import 'bootstrap/dist/css/bootstrap.css'


const Layout = ({ children, data }) => {

  const currentDate = new Date();
  const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Carousel />
      <Features />
      <Counter date={`${year}-12-24T00:00:00`} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
      <Footer />
    </div>
  )
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
