import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Carousel from '../components/carousel'
import Features from '../components/features'
import Counter from '../components/counter'
import Executives from '../components/executives'

class IndexPage extends React.Component {

  render() {

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
      <Executives officers={officers} />
      </div>
    )
  }

}

export default IndexPage

export const query = graphql`
  query DateQuery {
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
      filter: { frontmatter: { officer: { eq:true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            name
            church
            photo
          }
        }
      }
    }
  }
`
