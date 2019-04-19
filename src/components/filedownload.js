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
        <div className="col-lg-1 col-md-1 hidden-xs-down">
          <FileIcon media={this.file.file.internal.mediaType} />
        </div>
        <div className="col-lg-6 col-md-7 col-xs-12">
          <strong><a href={this.file.file.publicURL} target="_blank">{this.title}</a></strong><br />
          <span className="file-text">{this.file.file.relativePath}</span>
        </div>
        <div className="col-lg-5 col-md-4 col-xs-12" style={{
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
