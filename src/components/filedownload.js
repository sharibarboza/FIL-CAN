import React from 'react';
import Link from 'gatsby-link';

import FileIcon from './fileicon'

class FileDownload extends React.Component {

  render() {
    const key = this.props.node.id;
    const bylaw = this.props.node.frontmatter;

    return (
      <div className="row bylaws" key={key}>
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
    )
  }
}

export default FileDownload