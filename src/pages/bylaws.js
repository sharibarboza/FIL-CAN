import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import pdf from '../images/pdf-icon.png'

import FileDownload from '../components/filedownload'

class BylawsPage extends React.Component {

  displayFiles() {
    let elements = [];
    const bylaws = get(this, 'props.data.bylaws.edges');

    if (bylaws) {
      for (var i = 0; i < bylaws.length; i++) {
        let node = bylaws[i].node;
        let element = <FileDownload node={node} />
        elements.push(element);
      }
    } else {
      let element = <span>There are currently no files to display.</span>
      elements.push(element);
    }

    return elements;
  }

  render() {
    return (
      <div>
        <div className="about_area3">
          <div className="container">
            <div className="blog-left-side">
              <div className="widget widget_categories" style={{
                width: '100%'
              }}>
                <h2 className="widget-title">Our Bylaws</h2>
                <ul>
                  {this.displayFiles()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default BylawsPage

export const query = graphql`
  query BylawsQuery {
    bylaws: allMarkdownRemark(
  	   filter: { fileAbsolutePath: { regex: "/(bylaws)/.*\\.md$/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            file {
              relativePath
              publicURL
              internal {
                mediaType
              }
            }
          }
        }
      }
    }
  }
`
