import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Scrollchor from 'react-scrollchor';
import Img from 'gatsby-image'

var dateFormat = require('dateformat');
import '../layouts/animate.css'

import Divider from '../components/divider';
import MapPanel from '../components/mappanel';

class MeetingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.meetings = this.getFutureMeetings(props);
    this.numMeetings = this.meetings.length;
    this.panels = [];
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    this.data = {};
    this.headerImage = props.data.headerImage;
  }

  componentDidMount() {
    const WOW = require('wowjs/dist/wow.js');
    if (typeof window !== `undefined`) {
      new WOW.WOW().init();
    }

    if (this.numMeetings > 0) {
      this.interval = setInterval(() => {
        const date = this.calculateCountdown(this.meetings[0].frontmatter.datetime);
        date ? this.setState(date) : this.stop();
      }, 1000);
    }
  }

  componentWillMount() {
    this.stop();
  }

  getFutureMeetings(props) {
    const meetings = props.data.meetings.edges;
    let futureMeetings = [];

    if (meetings != undefined) {
      for (let i = 0; i < meetings.length; i++) {
        let node = meetings[i].node;
        if (this.futureDate(node.frontmatter.datetime)) {
          futureMeetings.push(node);
        }
      }
    }

    return futureMeetings;
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // Clear countdown when the date has been reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    }

    // Calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }

    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  futureDate(date) {
    return new Date(date) >= new Date();
  }

  getDate(date) {
    return dateFormat(date, "dddd, mmmm dS, yyyy - h:MM TT");
  }

  initializeMeetingPanels() {
    let panels = [];

    if (this.numMeetings > 0) {
      for (let i = 0; i < this.numMeetings; i++) {
        let node = this.meetings[i];
        let meeting = node.frontmatter;
        let address = meeting.address;
        let datetime = this.getDate(meeting.datetime);
        let body = <div><span>{address}</span><br /><span>Description: {meeting.description}</span></div>

        let element = <div id={i} key={node.id}><MapPanel
          heading={datetime}
          address={address}
          body={body}
        /></div>;
        panels.push(element);
      }
    } else {
      let element = <div className="alert alert-secondary">There are currently no upcoming meetings.</div>;
      panels.push(element);
    }

    return panels;
  }

  displayCounter(countDown) {
    return <div><div className="row">
      <div className="col-md-12">
        <div className="counterdowns" id="meeting-timer">
          <div className="counter">
            <div className="timer">

              <div className="countdown">
                <span className="countdown-col">
                  <span className="countdown-col-element">
                      <strong className="countdown-number">{this.addLeadingZeros(countDown.days)}</strong>
                      <span>{countDown.days === 1 ? 'Day' : 'Days'}</span>
                  </span>
                </span>

                <span className="colon">:</span>

                <span className="countdown-col">
                  <span className="countdown-col-element">
                    <strong>{this.addLeadingZeros(countDown.hours)}</strong>
                    <span>Hours</span>
                  </span>
                </span>

                <span className="colon">:</span>

                <span className="countdown-col">
                  <span className="countdown-col-element">
                    <strong>{countDown.min != undefined ? this.addLeadingZeros(countDown.min) : '00'}</strong>
                    <span>Min</span>
                  </span>
                </span>

                <span className="colon">:</span>

                <span className="countdown-col">
                  <span className="countdown-col-element">
                    <strong>{countDown.sec != undefined ? this.addLeadingZeros(countDown.sec) : '00'}</strong>
                    <span>Sec</span>
                  </span>
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="em-slider-button wow  bounceInUp  em-button-button-area" data-wow-duration="3s" data-wow-delay="0s">
      <Scrollchor to="#0" animate={{offset: -150, duration: 300}}>see details</Scrollchor>
    </div>
    </div>
  }

  getHeading() {
    if (this.numMeetings > 0) {
      return "The next meeting is in";
    } else {
      return "Organizational meetings";
    }
  }

  render() {
    const countDown = this.state;

    return (
      <div>
        <div className="main-slider-area" style={{
          height: '60vh'
        }}>
          <Img alt="" sizes={this.headerImage.sizes} className="carousel-image" />
          <div className="overlay"></div>
        </div>

        <div className="container-fluid">
          <div id="htmlcaption1_28" className="nivo-html-caption em-slider-content-nivo">
            <div className="em_slider_inner container text-center" style={{
              marginTop: '-50px'
            }}>
              <div className="wow fadeInUpBig" data-wow-duration="1.2s" data-wow-delay="0s">
                <h2 className="em-slider-title">{this.getHeading()}</h2>
              </div>
              {this.numMeetings > 0 ? this.displayCounter(countDown) : null}
            </div>
          </div>
        </div>
        <div className="container" style={{
          padding: '100px 0 100px'
        }}>
          <br />
          {this.initializeMeetingPanels()}
        </div>
      </div>
    )
  }

}

export default MeetingsPage

export const query = graphql`
  query MeetingsQuery {
    headerImage: imageSharp(id: { regex: "/meetings/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    meetings: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(meetings)/.*\\.md$/" }
      }
    	sort: {
        fields: [frontmatter___name], order: DESC
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            datetime
            address
            description
          }
        }
      }
    }
  }
`
