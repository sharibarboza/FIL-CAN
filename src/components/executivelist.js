import React from 'react';
import Link from 'gatsby-link';

class ExecutiveList extends React.Component {

  displayList() {
    let elements = [];
    const executives = this.props.list;

    for (var i = 0; i < executives.length; i++) {
      let executive = executives[i].frontmatter;
      let key = executives[i].id;
      let name = <li className="cat-item" key={key}>
                    <span className="executive-name">{executive.name}</span><br />
                    <span className="em-content-subtitle">{executive.title}</span><br />
                    <span className="executive-church">{executive.church}</span>
                </li>
      elements.push(name);
    }

    return elements;
  }

  render() {

    return (
      <div className="widget widget_categories">
        <h2 className="widget-title">{this.props.header}</h2>
        <ul>
          {this.displayList()}
        </ul>
      </div>
    )
  }
}

export default ExecutiveList
