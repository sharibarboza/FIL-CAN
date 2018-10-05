import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";

import counterBg from '../images/campmeeting.jpg';

import Divider from './divider';

var dateFormat = require('dateformat');

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
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

  getLastDate() {
    var date = new Date(this.props.date);
    date.setDate(date.getDate() + 3);
    return dateFormat(date, "dddd, mmmm dS, yyyy");
  }

  getDateString() {
    return dateFormat(this.props.date, "dddd, mmmm dS, yyyy");
  }

  render() {
    const countDown = this.state;

    return (
      <div className="count_down_area">
        <Img
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
          }}
          sizes={this.props.bgImage.sizes}
        />
        <div className="overlay"></div>
    		<div className="container" style={{
          padding: '100px 0 100px'
        }}>
    			<div className="row">
    				<div className="col-md-12">
    					<div className="section-title1 t_center">
    						<h2>The Annual Filipino-Canadian Camp Meeting</h2>

  							<Divider white={true} />
  							<p className="text-alignm1">Join us at Foothills Camp on {this.getDateString()} - {this.getLastDate()}  </p>
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
                          <span>Min</span>
                        </span>
                      </span>

                      <span className="colon">:</span>

                      <span className="countdown-col">
                        <span className="countdown-col-element">
                          <strong>{this.addLeadingZeros(countDown.sec)}</strong>
                          <span>Sec</span>
                        </span>
                      </span>
                    </div>

    							</div>
    						</div>
    					</div>
    				</div>
    				<div className="col-md-12">
    					<div className="counter_bnt">
    						<Link to="/campmeeting/">Learn More</Link>
    					</div>
    				</div>
    			</div>
    		</div>
      </div>
    )
  }
}

export default Counter
