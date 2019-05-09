import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Divider from '../components/divider';
import ExecutiveGrid from '../components/executivegrid';

class BoardPage extends React.Component {
  constructor(props) {
    super(props);

    // Get the officers data
    let officers;
    try {
      officers = props.data.officers.edges;
    } catch(e) {
      officers = [];
    }

    let vps;
    try {
      vps = props.data.vps.edges;
    } catch(e) {
      vps = [];
    }

    let advisers;
    try {
      advisers = props.data.advisers.edges;
    } catch(e) {
      advisers = [];
    }

    this.board = officers.concat(vps, advisers);
  }

  render() {

    return (
      <div>
        <Helmet title="FilCan | Board"/>

        <div className="container page-content" style={{ padding: '100px 0' }}>
          <ExecutiveGrid executives={this.board} columns={4} />
        </div>
      </div>
    )
  }

}

export default BoardPage

export const query = graphql`
  query BoardPageQuery {
    officers: allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq:"Officer" } }
      }
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
                sizes(maxWidth: 500 ) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
    vps: allMarkdownRemark(
      filter: {
        frontmatter: {
          type: { eq:"Board VP" }
          name: { ne:null }
        }
      }
      sort: {
        fields: [frontmatter___position], order: ASC
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            position
            type
            photo {
              childImageSharp {
                sizes(maxWidth: 500 ) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
    advisers: allMarkdownRemark(
      filter: {
        frontmatter: {
          type: { eq:"Adviser" }
          name: { ne:null }
        }
      }
      sort: {
        fields: [frontmatter___name], order: ASC
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            position
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
  }
`
