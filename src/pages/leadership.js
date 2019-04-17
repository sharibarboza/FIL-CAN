import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Divider from '../components/divider';
import Executives from '../components/executives';
import ExecutiveList from '../components/executivelist';

class LeadershipPage extends React.Component {
  constructor(props) {
    super(props);

    // Get the officers data
    try {
      this.officers = props.data.officers.edges;
    } catch(e) {
      this.officers = [];
    }

    try {
      this.executives = props.data.executives.edges;
    } catch(e) {
      this.executives = [];
    }

    this.boardVPs = [];
    this.advisors = [];
    this.leaders = [];
    this.youth = [];

    if (this.executives) {
      for (let i = 0; i < this.executives.length; i++) {
        let node = this.executives[i].node;
        let type = node.frontmatter.type;
        if (type == 'Board VP') {
          this.boardVPs.push(node);
        } else if (type == 'Adviser') {
          this.advisors.push(node);
        } else if (type == 'Chair') {
          this.leaders.push(node);
        } else if (type == 'Youth') {
          this.youth.push(node);
        }
      }
    }
  }

  render() {

    return (
      <div>
        <Helmet title="Filcan | Leadership"/>

        <div style={{
          paddingBottom: '50px'
        }}>
        <Executives
            title='Executive Officers'
            officers={this.officers}
            index={false}
        />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title t_center">

                <h2>Other Leadership</h2>
                <Divider />
              </div>
            </div>
          </div>
          <div className="row officer-lists">
            <div className="col-md-4 col-sm-6 col-xs-12 blog-left-side">
              {this.boardVPs.length != -1 ? <ExecutiveList header='Vice Presidents' type='Board VP' list={this.boardVPs} /> : null}
              {this.advisors.length != -1 ? <ExecutiveList header='Board Advisers' type='Adviser' list={this.advisors} /> : null}
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 blog-left-side">
              {this.leaders.length != -1 ? <ExecutiveList header='Committee Chairs' type='Chair' list={this.leaders} /> : null}
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 blog-left-side">
              {this.youth.length != -1 ? <ExecutiveList header='Youth Committee' type='Youth' list={this.youth} /> : null}
            </div>
          </div>
        </div>

      </div>
    )
  }

}

export default LeadershipPage

export const query = graphql`
  query LeadershipPageQuery {
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
    executives: allMarkdownRemark(
      filter: {
        frontmatter: {
          type: { ne:"Officer" }
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
          }
        }
      }
    }
  }
`
