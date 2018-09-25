import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Carousel from '../components/carousel'
import Features from '../components/features'
import Counter from '../components/counter'
import Executives from '../components/executives'
import Portfolio from '../components/portfolio'

class IndexPage extends React.Component {

  render() {
    // Get sharp images
    const headerImage = get(this, 'props.data.headerImage');
    const counterImage = get(this, 'props.data.counterImage');
    const defaultImage = get(this, 'props.data.defaultImage');

    // Get date for the next camp meeting
    const date = get(this, 'props.data.date.edges.0.node.frontmatter.date');
    const dateStr = date + 'T00:00:00';

    // Get grid images
    const grid = get(this, 'props.data.gridImages.edges');

    // Get the officers data
    const officers = get(this, 'props.data.officers.edges');

    return (
      <div>
        <Carousel headerImage={headerImage} />
        <Features />
        <Counter date={dateStr} bgImage={counterImage} />
        <Portfolio images={grid} default={defaultImage} />
        <Executives officers={officers} index={true} />
        <div className="container" style={{
          marginBottom: '100px'
        }}>
    			<div className="row">
    				<div className="col-md-12">
    					<div className="section-title t_center">
                <div className="donate-btn-header">
                  <Link to="/leadership/" className="red-on-white" href="#">See All Leadership</Link>
                </div>
    					</div>
    				</div>
    			</div>
        </div>
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
    headerImage: imageSharp(id: { regex: "/alberta/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    counterImage: imageSharp(id: { regex: "/campmeeting/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    defaultImage: imageSharp(id: { regex: "/default-image/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    gridImages: allMarkdownRemark(
      limit: 8
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
