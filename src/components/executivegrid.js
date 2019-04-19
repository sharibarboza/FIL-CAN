import React from 'react';
import Link from 'gatsby-link';

import 'font-awesome/css/font-awesome.css';

import Executive from '../components/executive';

class ExecutiveGrid extends React.Component {
  constructor(props) {
    super(props);
    this.executives = props.executives;
    this.columns = props.columns;
  }

  displayExecutives() {
    let elements = [];
    const columnClass = this.setColumnClass();

    if (this.executives) {
      for (let i = 0; i < this.executives.length; i++) {
        let node = this.executives[i].node;
        let officer = node.frontmatter;

        let element = <div key={node.id} className={columnClass}><Executive executive={officer} columns={this.columns} /></div>;
        elements.push(element);
      }
    }

    return elements;
  }

  setColumnClass() {
    const cols = {
      3 : 'col-md-4 col-sm-6 col-xs-12',
      4 : 'col-md-3 col-sm-6 col-xs-12'
    }

    let columnClass;
    if (this.columns in cols) {
      columnClass = cols[this.columns];
    } else {
      columnClass = cols[4];
    }

    return columnClass;
  }

  render() {

    return (
      <div className="row">
        {this.displayExecutives()}
      </div>
    )
  }
}

export default ExecutiveGrid
