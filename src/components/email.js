import React from 'react';
import Link from 'gatsby-link';

class Email extends React.Component {
  constructor(props) {
    super(props);
    this.addr = props.addr;
  }

  displayEmail() {
    try {
      if (this.addr) {
        var href="mailto:" + this.addr;
        return <a href={href}><i className="fa fa-envelope"></i></a>
      }
    } catch(e) {
    }

    return;
  }

  render() {

    return (
      <div>{this.displayEmail()}</div>
    )
  }
}

export default Email
