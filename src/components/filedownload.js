import React from 'react';
import Link from 'gatsby-link';

var dateFormat = require('dateformat');
import FileIcon from './fileicon'

class FileDownload extends React.Component {
  constructor(props) {
    super(props);

    this.key = props.node.id;
    this.file = props.node.frontmatter;

    if (props.minutes) {
      this.title = dateFormat(this.file.title, 'mmmm d, yyyy');
    } else {
      this.title = this.file.title;
    }
  }

  render() {

    return (
      <div className="row files" key={this.key}>
        <div className="col-md-10 col-xs-12">
          <strong><a href={this.file.file.publicURL} target="_blank">{this.title}</a></strong><br />
          <span className="file-text">{this.file.file.relativePath}</span>
        </div>
        <div className="col-md-2 col-xs-12" style={{
          textAlign: 'right',
          paddingTop: '5px'
        }}>
          <a href={this.file.file.publicURL} download><div className="btn download-btn"><i className="fa fa-download"></i> Download</div></a>
        </div>
      </div>
    )
  }
}

export default FileDownload
