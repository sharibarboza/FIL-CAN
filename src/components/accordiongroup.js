import React from 'react';
import Link from 'gatsby-link';
import { Collapse, Button, CardBody } from 'reactstrap';

class AccordionGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: null };
  }

  onClickItem(item) {
    if (this.state.selected == item) {
      item = null;
    }

    this.setState({
      selected: item
    });
  }

  isOpen(item) {
    return this.state.selected != null && this.state.selected == item;
  }

  getClasses(item) {
    if (this.isOpen(item)) {
      return "panel-heading1 active";
    } else {
      return "panel-heading1";
    }
  }

  displayElements() {
    let elements = [];
    for (let i = 0; i < this.props.elements.length; i++) {
      let faq = this.props.elements[i];
      let element = <div className="card" key={faq.id} style={{
        marginBottom: '20px'
      }}>
          <div className={this.getClasses(i)}>
          <a className="card-link" onClick={this.onClickItem.bind(this, i)}>
            <i className="fa fa-info"></i> {faq.frontmatter.title}
          </a>
        </div>
        <Collapse isOpen={this.isOpen(i)}>
          <CardBody>
            {faq.frontmatter.answer}
          </CardBody>
        </Collapse>
      </div>
      elements.push(element);
    }

    return elements;
  }

  render() {

    return (
      <div>
        {this.displayElements()}
      </div>
    )
  }
}

export default AccordionGroup
