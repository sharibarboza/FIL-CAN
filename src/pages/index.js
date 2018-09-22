import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Carousel from '../components/carousel'
import Features from '../components/features'
import Counter from '../components/counter'
import Executives from '../components/executives'

import netlifyIdentity from 'netlify-identity-widget'

class IndexPage extends React.Component {

  render() {
    netlifyIdentity.init();

    // Get date for the next camp meeting
    const date = get(this, 'props.data.date.edges.0.node.frontmatter.date');
    const dateStr = date + 'T00:00:00';

    // Get the officers data
    const officers = get(this, 'props.data.officers.edges');

    return (
      <div>
        <Carousel />
        <Features />
        <Counter date={dateStr} />
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
    date: allMarkdownRemark(limit: 1) {
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
            title
            name
            church
            photo
            type
          }
        }
      }
    }
  }
`
