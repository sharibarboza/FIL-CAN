import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import pdf from '../images/pdf-icon.png'

import FileDownload from '../components/filedownload'

class ResourcesPage extends React.Component {
  constructor(props) {
    super(props);

    try {
      this.resources = props.data.resources.edges;
    } catch(e) {
      this.resources = [];
    }
    this.files = {};

    if (this.resources) {
      for (let i = 0; i < this.resources.length; i++) {
        let node = this.resources[i].node;
        let type = node.frontmatter.type;

        if (!(type in this.files)) {
          this.files[type] = [];
        }
        this.files[type].push(node);
      }
    }
  }

  displayFiles(category) {
    let elements = [];
    const files = this.files[category];

    if (files) {
      for (let i = (files.length - 1); i >= 0; i--) {
        let node = files[i];
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
        <Helmet title="Filipino-Canadian Seventh-Day Adventist Association of Alberta - Resources"/>

        <div className="about_area3">
          <div className="container">

            <div>
              Here are files you may want to download when attending campmeeting such as rules, guidelines, schedules, etc.
            </div>
            <br/>

            <div className="blog-left-side">

              <div className="widget widget_categories" style={{
                width: '100%'
              }}>
                <h2 className="widget-title"><i className="fa fa-archive"></i>&nbsp; General & Miscellaneous</h2>
                <ul>
                  {this.displayFiles('General')}
                </ul>
              </div>

              <div className="widget widget_categories" style={{
                width: '100%'
              }}>
                <h2 className="widget-title"><i className="fa fa-soccer-ball-o"></i>&nbsp; Sports Tournaments & Parlor Games</h2>
                <ul>
                  {this.displayFiles('Sports Tournaments/Parlor Games')}
                </ul>
              </div>

              <div className="widget widget_categories" style={{
                width: '100%'
              }}>
                <h2 className="widget-title"><i className="fa fa-book"></i>&nbsp; Worship Services</h2>
                <ul>
                  {this.displayFiles('Worship Services')}
                </ul>
              </div>

              <div className="widget widget_categories" style={{
                width: '100%'
              }}>
                <h2 className="widget-title"><i className="fa fa-music"></i>&nbsp; Social & Cultural Activities</h2>
                <ul>
                  {this.displayFiles('Social & Cultural Activities')}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default ResourcesPage

export const query = graphql`
  query ResourcesQuery {
    resources: allMarkdownRemark(
  	   filter: { fileAbsolutePath: { regex: "/(resources)/.*\\.md$/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            type
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
