import React from 'react';
import Link from 'gatsby-link';

import FileIcon from './fileicon'

class FileDownload extends React.Component {

  render() {
    const key = this.props.node.id;
    const bylaw = this.props.node.frontmatter;

    return (
      <div className="row bylaws" key={key}>
        <div className="col-lg-1 col-md-1 hidden-xs-down">
          <FileIcon media={bylaw.file.internal.mediaType} />
        </div>
        <div className="col-lg-6 col-md-7 col-xs-12">
          <strong>{bylaw.title}</strong><br />
          <span>{bylaw.file.relativePath}</span>
        </div>
        <div className="col-lg-5 col-md-4 col-xs-12" style={{
          textAlign: 'right',
          paddingTop: '5px'
        }}>
          <a href={bylaw.file.publicURL} target="_blank"><div className="btn download-btn"><i className="fa fa-search-plus"></i> Preview</div></a>
          &nbsp;&nbsp;
          <a href={bylaw.file.publicURL} download><div className="btn download-btn"><i className="fa fa-download"></i> Download</div></a>
        </div>
      </div>
    )
  }
}

export default FileDownload
