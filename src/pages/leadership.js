import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Banner from '../components/banner';
import Executives from '../components/executives';
import ExecutiveList from '../components/executivelist';

import divider from '../images/divider.png';

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
      } else if (type == 'Advisor') {
        advisors.push(node);
      } else if (type == 'Committee Leader') {
        leaders.push(node);
      } else if (type == 'FILCANAYA') {
        youth.push(node);
      }
    }

    return (
      <div>
        <Banner path="Leadership" />
        <Executives officers={officers} index={false} />

        <div className="row">
          <div className="col-md-12">
            <div className="section-title t_center">
              <div className="em-image">
                <img src={divider} alt="divider" />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row officer-lists">
            <div className="col-md-4 col-sm-6 col-xs-12 blog-left-side">
              {boardVPs.length != -1 ? <ExecutiveList header='Vice Presidents' type='Board VP' list={boardVPs} /> : null}
              {advisors.length != -1 ? <ExecutiveList header='Board Advisors' type='Advisor' list={advisors} /> : null}
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 blog-left-side">
              {leaders.length != -1 ? <ExecutiveList header='Committee Chairs' type='Committee Leader' list={leaders} /> : null}
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 blog-left-side">
              {youth.length != -1 ? <ExecutiveList header='Youth Committee' type='FILCANAYA' list={youth} /> : null}
            </div>
          </div>
        </div>

      </div>
    )
  }

}

export default LeadershipPage

export const query = graphql`
  query LeadershipQuery {
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
    executives: allMarkdownRemark(
      filter: {
        frontmatter: {
          type: { ne:"Officer" }
          name: { ne:null }
        }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            church
            title
            type
          }
        }
      }
    }
  }
`
