import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Divider from '../components/divider';
import Executives from '../components/executives';
import ExecutiveList from '../components/executivelist';

class LeadershipPage extends React.Component {

  render() {

    // Get the officers data
    const officers = get(this, 'props.data.officers.edges');
    const executives = get(this, 'props.data.executives.edges');

    let boardVPs = [];
    let advisors = [];
    let leaders = [];
    let youth = [];

    for (var i = 0; i < executives.length; i++) {
      let node = executives[i].node;
      let type = node.frontmatter.type;
      if (type == 'Board VP') {
        boardVPs.push(node);
      } else if (type == 'Adviser') {
        advisors.push(node);
      } else if (type == 'Chair') {
        leaders.push(node);
      } else if (type == 'Youth') {
        youth.push(node);
      }
    }

    return (
      <div>
        <Executives officers={officers} index={false} />
        <Divider />

        <div className="container">
          <div className="row officer-lists">
            <div className="col-md-4 col-sm-6 col-xs-12 blog-left-side">
              {boardVPs.length != -1 ? <ExecutiveList header='Vice Presidents' type='Board VP' list={boardVPs} /> : null}
              {advisors.length != -1 ? <ExecutiveList header='Board Advisers' type='Adviser' list={advisors} /> : null}
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 blog-left-side">
              {leaders.length != -1 ? <ExecutiveList header='Committee Chairs' type='Chair' list={leaders} /> : null}
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 blog-left-side">
              {youth.length != -1 ? <ExecutiveList header='Youth Committee' type='Youth' list={youth} /> : null}
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
