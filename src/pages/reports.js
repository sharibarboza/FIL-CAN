import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import pdf from '../images/pdf-icon.png'

import FileDownload from '../components/filedownload'

class ReportsPage extends React.Component {

  displayFiles() {
    let elements = [];
    const reports = get(this, 'props.data.reports.edges');

    if (reports) {
      for (let i = 0; i < reports.length; i++) {
        let node = reports[i].node;
        let element = <FileDownload node={node} key={i} />
        elements.push(element);
      }
    } else {
      let element = <span key={0}>There are currently no files to display.</span>
      elements.push(element);
    }

    return elements;
  }

  render() {
    return (
      <div>
        <Helmet title="Filcan | Reports"/>

        <div className="about_area3">
          <div className="container">
            <div className="blog-left-side">
              <div className="widget widget_categories" style={{
                width: '100%'
              }}>
                <h2 className="widget-title"><i className="fa fa-table"></i>&nbsp; Annual Reports</h2>
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

export default ReportsPage

export const query = graphql`
  query ReportsQuery {
    reports: allMarkdownRemark(
  	   filter: { fileAbsolutePath: { regex: "/(reports)/.*\\.md$/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
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
