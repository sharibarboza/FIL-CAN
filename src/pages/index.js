import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from "gatsby-image"
import { HashLink as AnchorLink } from 'react-router-hash-link';

var dateFormat = require('dateformat')

import Slider from '../components/carousel'
import Features from '../components/features'
import Counter from '../components/counter'
import Executive from '../components/executive'
import ExecutiveGrid from '../components/executivegrid'
import Portfolio from '../components/portfolio'
import Mission from '../components/mission'
import Divider from '../components/divider'
import Poster from '../components/poster'
import Youtube from '../components/youtube'
import Schedules from '../components/schedules'

class IndexPage extends React.Component {

  render() {
    // Get sharp images
    const headerImage1 = get(this, 'props.data.headerImage1');
    const headerImage2 = get(this, 'props.data.headerImage2');
    const headerImage3 = get(this, 'props.data.headerImage3');
    const headerImages = [headerImage1, headerImage2, headerImage3];
    const counterImage = get(this, 'props.data.counterImage');
    const defaultImage = get(this, 'props.data.defaultImage');
    const posterImage = get(this, 'props.data.posterImage');
    const fireImage = get(this, 'props.data.fireImage');
    const youtubeBg = get(this, 'props.data.youtubeImage');
    const schedules = get(this, 'props.data.schedules.edges');

    const featureImage1 = get(this, 'props.data.featureImage1');
    const featureImage2 = get(this, 'props.data.featureImage2');
    const featureImage3 = get(this, 'props.data.featureImage3');
    const featureImages = [featureImage1, featureImage2, featureImage3];

    // Get date for the next camp meeting
    const campDate = get(this, 'props.data.date.edges');

    // Get grid images
    const grid = get(this, 'props.data.gridImages.edges');

    // Get the officers data
    const officers = get(this, 'props.data.officers.edges');

    return (
      <div>
        <Helmet title="Filipino-Canadian Seventh-Day Adventist Association of Alberta - Home" />

        <Slider images={headerImages} />
        <Features images={featureImages} />

        <div style={{
          position: 'relative'
        }}>
          <Img
            className="breatcome_area"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
            }}
            sizes={youtubeBg.sizes}
          />
          <div className="youtube-overlay"></div>
          <div className="container-fluid">
            <div className="col-md-12">
              <div className="breatcome_title">
                <div className="breatcome_title_inner">
                  <div className="breatcome_content">
                    <Youtube />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {schedules ?
        <Schedules images={schedules} />
        : null }

        <Counter date={campDate} bgImage={counterImage} />

        <div className="team_area" id="team">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title t_center">
    						  <h2>Executive Officers</h2>
                  <Divider />
    					  </div>
              </div>
            </div>

            <ExecutiveGrid columns={3} executives={officers} />

          </div>
        </div>
        <div className="container" style={{
          marginBottom: '100px',
        }}>
    			<div className="row">
    				<div className="col-md-12">
    					<div className="section-title t_center">
                <div className="donate-btn-header">
                  <Link to="/board/" className="red-on-white" href="#">View Executive Board</Link>
                </div>
    					</div>
    				</div>
    			</div>
        </div>

        <div style={{
          backgroundColor: '#f5f5f5'
        }}>
          <Mission />
        </div>

        <Portfolio images={grid} default={defaultImage} />

      </div>
    )
  }

}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    date: allMarkdownRemark(
      limit: 1
    	filter: { fileAbsolutePath: { regex: "/(dates)/.*\\.md$/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            date
          }
        }
      }
    }
    officers: allMarkdownRemark(
      filter: { frontmatter: { type: { eq:"Officer" } } }
      sort: {
        fields: [frontmatter___position], order: ASC
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            position
            name
            type
            photo {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
    schedules: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(schedules)/.*\\.md$/" }
      }
      sort: {
        fields: [frontmatter___position], order: ASC
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            photo {
              childImageSharp {
                sizes(maxWidth: 2000) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
    youtubeImage: imageSharp(id: { regex: "/youtube-bg2/" }) {
      sizes(maxWidth: 5000) {
        ...GatsbyImageSharpSizes
      }
    }
    headerImage1: imageSharp(id: { regex: "/foothills/" }) {
      sizes(maxWidth: 2000) {
        ...GatsbyImageSharpSizes
      }
    }
    headerImage2: imageSharp(id: { regex: "/alberta/" }) {
      sizes(maxWidth: 2000) {
        ...GatsbyImageSharpSizes
      }
    }
    headerImage3: imageSharp(id: { regex: "/filipinoflag/" }) {
      sizes(maxWidth: 2000) {
        ...GatsbyImageSharpSizes
      }
    }
    counterImage: imageSharp(id: { regex: "/campnight/" }) {
      sizes(maxWidth: 2000) {
        ...GatsbyImageSharpSizes
      }
    }
    featureImage1: imageSharp(id: { regex: "/feature1/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    featureImage2: imageSharp(id: { regex: "/feature2/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    featureImage3: imageSharp(id: { regex: "/feature3/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    defaultImage: imageSharp(id: { regex: "/default-image/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    posterImage: imageSharp(id: { regex: "/poster/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    fireImage: imageSharp(id: { regex: "/campfire/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    speakers: allMarkdownRemark(
    	filter: {
        fileAbsolutePath: { regex: "/(speakers)/.*\\.md$/" }
      }
      sort: {
        fields: [frontmatter___type], order: ASC
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            type
            email
            photo {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
    theme: allMarkdownRemark(
      limit: 1
    	filter: { fileAbsolutePath: { regex: "/(theme)/.*\\.md$/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            filipino
            versetext
            verse
          }
        }
      }
    }
    gridImages: allMarkdownRemark(
      limit: 12
  	  filter: { fileAbsolutePath: { regex: "/(grid)/.*\\.md$/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            event
            caption
            photo {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
