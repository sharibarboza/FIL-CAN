import React from 'react';
import Link from 'gatsby-link';

import pdf from '../images/pdf-icon.png'
import doc from '../images/doc-icon.png'
import excel from '../images/excel-icon.png'

class FileIcon extends React.Component {
  constructor(props) {
    super(props);
    this.icon = pdf;

    if (props.media.indexOf('word') >= 0) {
      this.icon = doc;
    } else if (props.media.indexOf('excel') >= 0 || props.media.indexOf('sheet') >= 0) {
      this.icon = excel;
    }
  }

  render() {
    return (
      <div>
        <img src={this.icon} style={{
          width: '50px'
        }} />
      </div>
    )
  }
}

export default FileIcon
