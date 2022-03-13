import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";

import Divider from './divider';

var dateFormat = require('dateformat');

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    }

    this.validDate = false;
    this.date = null;
    this.year = null;
    this.verifyDate(this.props.date);
  }

  componentDidMount() {
    if (this.validDate) {
      this.interval = setInterval(() => {
        const date = this.calculateCountdown(this.date);
        date ? this.setState(date) : this.stop();
      }, 1000);
    }
  }

  componentWillMount() {
    this.stop();
  }

  componentWillUnmount() {
    this.stop();
  }

  stop() {
    clearInterval(this.interval);
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

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  getDate() {
    let startDate = dateFormat(this.date, "mmmm d");
    let endDate = this.date.getDate() + 3;
    return startDate + '-' + endDate + ', ' + this.year;
  }

  getYear() {
    let num = this.year - 2002;
    const lastNum = num.toString().split('').pop();

    if (lastNum == 0 || lastNum >= 4) {
      num += 'th';
    } else if (lastNum == 1) {
      num += 'st';
    } else if (lastNum == 2) {
      num += 'nd';
    } else {
      num += 'rd';
    }

    return num;
  }

  verifyDate(date) {
    try {
      var currentDate = new Date();
      var dateStr = date[0].node.frontmatter.date;
      var dateObj = new Date(dateStr);

      if (currentDate <= dateObj) {
        this.date = dateObj;
        this.year = dateObj.getFullYear();
        this.validDate = true;
      }
    } catch(e) {
      return false;
    }
  }

  render() {
    const countDown = this.state;

    return (
      <div>
      {this.validDate ?
        <div className="count_down_area">
          <Img
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
            }}
            sizes={this.props.bgImage.sizes}
          />
          <div className="container" style={{
            padding: "100px 0"
          }}>
            <div className="row">
              <div className="col-md-12">
                <div className="section-title1 t_center">
                  <h2>The {this.getYear()} Annual Filipino-Canadian Camp Meeting</h2>
                  <h2 style={{ fontSize: '25px', marginTop: '10px' }}>{this.getDate()}</h2>
                  <Divider white={true} />

                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="counterdowns">
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
                            <strong>{this.addLeadingZeros(countDown.min)}</strong>
                            <span>Minutes</span>
                          </span>
                        </span>

                        <span className="colon">:</span>

                        <span className="countdown-col">
                          <span className="countdown-col-element">
                            <strong>{this.addLeadingZeros(countDown.sec)}</strong>
                            <span>Seconds</span>
                          </span>
                        </span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container" style={{
              marginBottom: '100px',
            }}>
              <div className="row">
                <div className="col-md-12">
                  <div className="section-title t_center">
                    <div className="donate-btn-header">
                      <Link to="/campmeeting/" className="white-on-red" href="#">Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      : null}
      </div>
    )
  }
}

export default Counter
