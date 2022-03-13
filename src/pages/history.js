import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

class AboutPage extends React.Component {

  render() {
    const history = get(this, 'props.data.history.edges.0.node.frontmatter');

    return (
      <div>
        <Helmet title="Filipino-Canadian Seventh-Day Adventist Association of Alberta - History"/>

        <div className="about_area3">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="section_title_lefts">
                  <h2>History of the Association</h2>
                  <h1>HOW WE <span>STARTED</span></h1>
                </div>
                <br/>
                <div className="about_text">
                  <p>{history.content}</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className=" single_image">
                  <Img sizes={history.photo.childImageSharp.sizes} alt="history" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default AboutPage

export const query = graphql`
  query HistoryQuery {
    history: allMarkdownRemark(
       filter: { fileAbsolutePath: { regex: "/(history)/.*\\.md$/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            content
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
