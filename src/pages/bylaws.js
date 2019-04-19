import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import pdf from '../images/pdf-icon.png'
import remark from 'remark';
import remarkHtml from 'remark-html';

import FileDownload from '../components/filedownload'

class BylawsPage extends React.Component {
  constructor(props) {
    super(props);

    this.bylaws = props.data.bylaws.edges;
    this.content = this.bylaws[0].node.frontmatter.content;
    this.body = remark()
      .use(remarkHtml)
      .processSync(this.content).toString();
  }

  displayFiles() {
    let elements = [];

    if (this.bylaws) {
      for (let i = 0; i < this.bylaws.length; i++) {
        let node = this.bylaws[i].node;
        let element = <FileDownload node={node} key={i} />
        elements.push(element);
      }
    } else {
      let element = <span key={i}>There are currently no files to display.</span>
      elements.push(element);
    }

    return elements;
  }

  render() {
    return (
      <div>
        <Helmet title="Filcan | Bylaws"/>

        <div className="about_area3">
          <div className="container" id="bylaws">
            <div dangerouslySetInnerHTML={{ __html: this.body }}></div>
            <br/>

            <div className="blog-left-side">
              <div className="widget widget_categories" style={{
                width: '100%'
              }}>
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
            content
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
