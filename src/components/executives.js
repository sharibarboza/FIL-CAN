import React from 'react';
import Link from 'gatsby-link';

import 'font-awesome/css/font-awesome.css';

import divider from '../images/divider.png';
import headshot from '../images/headshot.jpg';

class Executives extends React.Component {

  render() {
    return (
      <div className="team_area" id="team">
    		<div className="container">
    			<div className="row">
    				<div className="col-md-12">
    					<div className="section-title  t_center">

    						<h2>Executive Officers</h2>

    							<div className="em-image">
    								<img src={divider} alt="divider" />
    							</div>

                  <p>Meeting our leadership team.</p>
    					</div>
    				</div>
    			</div>
    			<div className="row">

    				<div className="col-md-4 col-sm-6 col-xs-12">
              <div className="em-team ">
                <div className="team-style-2">
                  <div className="team-wrap">
                    <div className="team-front">
                      <div className="em-content-image-inner">
                        <div className="em-content-image">
                          <img className="img-circle" style={{
                            backgroundImage: 'url("' + headshot + '")'
                          }} alt="" />
                        </div>
                      </div>
                    </div>

                    <div className="team-back-wraper">
    									<div className="team-back">
    										<div className="em-content-waraper">
    											<div className="em-content-title-inner">
    												<div className="em-content-title">
    													<h2>ms Rasheda </h2>
    												</div>
    											</div>
    											<div className="em-content-subtitle-inner">
    												<div className="em-content-subtitle">Chairman</div>
    											</div>
    											<div className="em-content-desc-inner">
    												<div className="em-content-desc">Lorem ipsum dolor si nsectetur adipisicing elit, sed do eiusmod tempor incididunt</div>
    											</div>
    											<div className="em-content-socials">
    												<a href="#">
    													<i className="fa fa-facebook"></i>
    												</a>
    												<a href="#">
    													<i className="fa fa-twitter"></i>
    												</a>
    												<a href="#">
    													<i className="fa fa-google-plus"></i>
    												</a>
    												<a href="#">
    													<i className="fa fa-linkedin"></i>
    												</a>
    											</div>
    										</div>
    									</div>
    								</div>
                  </div>
                </div>
              </div>
    				</div>

    				<div className="col-md-4 col-sm-6 col-xs-12">
    					<div className="em-team1 ">
    						<div className="team-style-2">
    							<div className="team-wrap">
    								<div className="team-front">
    									<div className="em-content-image-inner">
    										<div className="em-content-image">
                          <img className="img-circle" style={{
                            backgroundImage: 'url("' + headshot + '")'
                          }} alt="" />
    										</div>
    									</div>
    								</div>
    								<div className="text">
    									<div className="team-back">
    										<div className="em-content-waraper1">
    											<div className="em-content-title-inner">
    												<div className="em-content-title">
    													<h2>ms Rasheda </h2>
    												</div>
    											</div>
    											<div className="em-content-subtitle-inner">
    												<div className="em-content-subtitle">Chairman</div>
    											</div>
    											<div className="em-content-desc-inner">
    												<div className="em-content-desc">Lorem ipsum dolor si nsectetur adipisicing elit, sed do eiusmod tempor incididunt</div>
    											</div>
    											<div className="em-content-socials">
    												<a href="#">
    													<i className="fa fa-facebook"></i>
    												</a>
    												<a href="#">
    													<i className="fa fa-twitter"></i>
    												</a>
    												<a href="#">
    													<i className="fa fa-google-plus"></i>
    												</a>
    												<a href="#">
    													<i className="fa fa-linkedin"></i>
    												</a>
    											</div>
    										</div>
    									</div>
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>

    				<div className="col-md-4 col-sm-6 col-xs-12">
    					<div className="em-team1 ">
    						<div className="team-style-2">
    							<div className="team-wrap">
    								<div className="team-front">
    									<div className="em-content-image-inner">
    										<div className="em-content-image">
                          <img className="img-circle" style={{
                            backgroundImage: 'url("' + this.props.treasurer.photo + '")'
                          }} alt="" />
    										</div>
    									</div>
    								</div>
    								<div className="text" id="wrapper-yellow">
    									<div className="team-back">
    										<div className="em-content-waraper1">
    											<div className="em-content-title-inner">
    												<div className="em-content-title">
    													<h2>{this.props.treasurer.name}</h2>
    												</div>
    											</div>
    											<div className="em-content-subtitle-inner">
    												<div className="em-content-subtitle">TREASURER</div>
    											</div>
    											<div className="em-content-desc-inner">
    												<div className="em-content-desc">{this.props.treasurer.church}</div>
    											</div>
    										</div>
    									</div>
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    )
  }
}

export default Executives
