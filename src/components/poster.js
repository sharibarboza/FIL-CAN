import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image"
import { HashLink as AnchorLink } from 'react-router-hash-link';

class Poster extends React.Component {
  constructor(props) {
    super(props);

    this.posterImage = this.props.poster;
    this.theme = this.props.theme;
    this.campDate = this.props.date;
    this.year = this.props.year;

    this.speakers = this.props.speakers;
    this.adultSpeaker = this.speakers[0].node.frontmatter.title;
    this.youthSpeaker = this.speakers[1].node.frontmatter.title;
  }

  render() {

    return (
      <div className="container area-padding">
        <div className="row poster-container">
          <div className="col-md-4 no-left-pad">
            <div className="astute-single-event_adn ">
              <a href={this.posterImage.sizes.src} target="_blank"><div className="em-content-image astute-event-thumb_adn poster-thumb">
                <Img sizes={this.posterImage.sizes} />
                <div className="posterView"><i className="fa fa-search"></i></div>
              </div></a>
            </div>
          </div>
          <div className="col-md-8">
            <div className="eventContainer">
              <div className="section_title_lefts" style={{
                textTransform: 'uppercase'
              }}>
                <h2>{this.theme}</h2>
                <h1><span>Fil-Can</span> Camp Meeting {this.year}</h1>
              </div>
              <br />
              <strong>WHEN:</strong> {this.campDate}<br />
              <strong>WHERE:</strong> Foothills Camp, 3032 Township Rd 342, Red Deer County, Alberta<br />
              <br />
              <strong>ADULT SPEAKER:</strong> {this.adultSpeaker}<br />
              <strong>YOUTH SPEAKER:</strong> {this.youthSpeaker}<br />
              <br />
              Useful Information:
              <ul>
                <li><Link to="/resources/">Camp Meeting Resources - Rules, Schedules, Theme Songs ...</Link><br /></li>
                <li><AnchorLink to="/campmeeting/#accommodations">Accommodations</AnchorLink><br /></li>
                <li><AnchorLink to="/campmeeting/#souvenir">Souvenir Program</AnchorLink><br /></li>
                <li><AnchorLink to="/campmeeting/#faq">Frequently Asked Questions</AnchorLink><br /></li>
                <li><a href="https://www.foothillscamp.ca/contact">Directions to Foothills Camp & Retreat Centre</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Poster
