import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Divider from '../components/divider';
import ExecutiveGrid from '../components/executivegrid';

class CommitteesPage extends React.Component {
  constructor(props) {
    super(props);

    // Get the officers data
    let chairs;
    try {
      chairs = props.data.chairs.edges;
    } catch(e) {
      chairs = [];
    }

    let filcanaya = [];
    let youth;
    try {
      youth = props.data.youth.edges;
    } catch(e) {
      youth = [];
    }
    console.log(youth);
    for (let i = 0; i < youth.length; i++) {
      let position = youth[i].node.frontmatter.position.toLowerCase();
      let node = youth[i];

      if (position.indexOf('president') >= 0) {
        filcanaya.splice(0, 0, node);
      } else if (position.toLowerCase().indexOf('secretary') >= 0) {
        filcanaya.splice(1, 0, node);
      } else if (position.toLowerCase().indexOf('treasurer') >= 0) {
        filcanaya.splice(2, 0, node);
      } else {
        filcanaya.push(node);
      }
    }

    this.chairpersons = chairs;
    this.youthcom = filcanaya;
  }

  render() {

    return (
      <div>
        <Helmet title="FilCan | Committees"/>

        <div className="container page-content" style={{ padding: '100px 0' }}>
          <div className="row">
            <div className="col-md-12">
              <div className="section-title t_center">
                <h2>Chairpersons</h2>
                <Divider />
              </div>
            </div>
          </div>
          <ExecutiveGrid executives={this.chairpersons} columns={4} />

          <div className="row">
            <div className="col-md-12">
              <div className="section-title t_center">
                <h2>FilCanAYA</h2>
                <Divider />
              </div>
            </div>
          </div>
          <ExecutiveGrid executives={this.youthcom} columns={4} />

        </div>
      </div>
    )
  }

}

export default CommitteesPage

export const query = graphql`
  query CommitteesPageQuery {
    chairs: allMarkdownRemark(
      filter: {
        frontmatter: {
          type: { eq:"Chair" }
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
                sizes(maxWidth: 300 ) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
    youth: allMarkdownRemark(
      filter: {
        frontmatter: {
          type: { eq:"Youth" }
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
                sizes(maxWidth: 300 ) {
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
