import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import pdf from '../images/pdf-icon.png'

import FileIcon from '../components/fileicon'

class BylawsPage extends React.Component {

  displayFiles() {
    let elements = [];
    const bylaws = get(this, 'props.data.bylaws.edges');

    for (var i = 0; i < bylaws.length; i++) {
      let node = bylaws[i].node;
      let key = node.id;
      let bylaw = node.frontmatter;

      let element = <div className="row bylaws" key={key}>
        <div className="col-sm-1 col-xs-4">
          <FileIcon media={bylaw.file.internal.mediaType} />
        </div>
        <div className="col-sm-8 col-xs-8">
          <strong>{bylaw.title}</strong><br />
          <span>{bylaw.file.relativePath}</span>
        </div>
        <div className="col-sm-3 col-xs-12" style={{
          textAlign: 'right',
          paddingTop: '2px'
        }}>
          <a href={bylaw.file.publicURL} download><div className="btn download-btn"><i className="fa fa-download"></i> Download</div></a>
        </div>
      </div>

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
  	   filter: { fileAbsolutePath: { regex: "/(files)/.*\\.md$/" } }
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
