import React from 'react';
import Link from 'gatsby-link';

var dateFormat = require('dateformat');
import FileIcon from './fileicon'

class FileDownload extends React.Component {
  constructor(props) {
    super(props);

    this.key = props.node.id;
    this.file = props.node.frontmatter;
    this.has_file = this.file.file != null;

    if (props.minutes) {
      this.title = dateFormat(this.file.title, 'mmmm d, yyyy');
    } else {
      this.title = this.file.title;
    }
  }

  render() {
    if (!this.has_file) {
      return '';
    }

    return (
      <div className="row files" key={this.key}>
        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
          <a style={{ fontWeight: '600' }} href={this.file.file.publicURL} target="_blank">{this.title}</a><br />
          <span className="file-text">{this.file.file.relativePath}</span>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" style={{
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
