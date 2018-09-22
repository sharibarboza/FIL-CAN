import React from 'react';
import Link from 'gatsby-link';

class ExecutiveList extends React.Component {

  displayList() {
    let elements = [];
    const executives = this.props.list;
    let higher_ranks = [];

    for (var i = 0; i < executives.length; i++) {
      let executive = executives[i].frontmatter;

      let key = executives[i].id;
      let name = <li className="cat-item" key={key}>
                    <span className="executive-name">{executive.name}</span><br />
                    <span className="em-content-subtitle">{executive.position}</span>
                </li>

      let position = executive.position.toLowerCase();
      if (position.indexOf('president') >= 0) {
        higher_ranks.splice(0, 0, name);
      } else if (position.indexOf('secretary') >= 0) {
        higher_ranks.splice(1, 0, name);
      } else if (position.indexOf('treasurer') >= 0) {
        higher_ranks.splice(2, 0, name);
      } else if (position.indexOf('vp') < 0) {
        higher_ranks.push(name);
      } else {
        elements.push(name);
      }
    }

    elements = higher_ranks.concat(elements);

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
