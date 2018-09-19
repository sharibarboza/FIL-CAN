import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Carousel from '../components/carousel'
import Features from '../components/features'
import Counter from '../components/counter'

class IndexPage extends React.Component {

  render() {
    const date = get(this, 'props.data.allMarkdownRemark.edges.0.node.frontmatter.date');
    const dateStr = date + 'T00:00:00';

    return (
      <div>
      <Carousel />
      <Features />
      <Counter date={dateStr} />
      </div>
    )
  }

}

export default IndexPage

export const query = graphql`
  query DateQuery {
    allMarkdownRemark(limit: 1) {
      edges {
        node {
          id
          frontmatter {
            date
          }
        }
      }
    }
  }
`
