import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image"

import 'font-awesome/css/font-awesome.css';

import Divider from './divider';

class Schedules extends React.Component {
  constructor(props) {
    super(props);
    this.images = props.images;
    this.schedules = [];
    this.sortSchedules();
  }

  sortSchedules() {
    for (let i = 0; i < this.images.length; i++) {
      let schedule = this.images[i].node.frontmatter;
      this.schedules.splice(schedule.position - 1, 0, schedule);
    }
  }

  displaySchedules() {
    let elements = [];

    for (let i = 0; i < this.images.length; i++) {
      let schedule = this.schedules[i];

      let element = <div className="col-md-6">
        <div className="single_event_adn kc-elm kc-css-73682 souvenir-box">
          <div className="astute-single-event_adn ">

            <div className="">
              <a href={schedule.photo.childImageSharp.sizes.src} target="_blank"><Img sizes={schedule.photo.childImageSharp.sizes} /></a>
            </div>
            <div className="em-event-content-area_adn ">

            <div className="event-page-title_adn souvenir-title">
              <h2>{schedule.title}</h2>
            </div>
            </div>
          </div>
        </div>
      </div>
      elements.push(element);
    }

    return elements;
  }

  render() {

    return (
      <div className="service_area" id="service">
    		<div className="container">
    			<div className="row">
    				<div className="col-md-12">
    					<div className="section-title  t_center">
    						<h2>Schedules: Videos & Livesteams</h2>
    							<Divider />
    					</div>
    				</div>
    			</div>
    			<div className="row">
            {this.displaySchedules()}
    			</div>
    		</div>
    	</div>
    )
  }
}

export default Schedules
