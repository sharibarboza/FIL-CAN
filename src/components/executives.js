import React from 'react';
import Link from 'gatsby-link';

import 'font-awesome/css/font-awesome.css';

import divider from '../images/divider.png';
import defaultPhoto from '../images/default.jpg';

class Executives extends React.Component {
  constructor(props) {
    super(props);
    this.officers = {};
    this.photos = {};
    this.index = props.index;

    for (var i = 0; i < this.props.officers.length; i++) {
      const data = this.props.officers[i].node.frontmatter;

      if (data.photo != undefined) {
        this.photos[data.title] = data.photo;
      } else {
        this.photos[data.title] = defaultPhoto;
      }

      this.officers[data.title] = data;
    }
  }

  render() {

    return (
      <div className="team_area" id="team">
    		<div className="container">
    			<div className="row">
    				<div className="col-md-12">
    					<div className="section-title t_center">

    						<h2>Executive Officers</h2>

    							<div className="em-image">
    								<img src={divider} alt="divider" />
    							</div>
    					</div>
    				</div>
    			</div>
    			<div className="row" style={{
            marginTop: '40px'
          }}>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="em-team">
                <div className="em-team-one">
                  <div className="em-team-content-image-inner">
                    <div className="em-content-image">
                      <img className="img-circle" style={{
                        backgroundImage: 'url("' + this.photos['President'] + '")'
                      }} alt="" />
                    </div>
                  </div>
                  <div className="em-team-content-waraper" id="president-wrapper">
                    <div className="em-team-content-title-inner">
                      <div className="em-content-title"><h2>{'President' in this.officers ? this.officers['President'].name : ' '}</h2></div>
                    </div>
                    <div className="em-team-content-subtitle-inner">
                      <div className="em-content-subtitle">PRESIDENT</div>
                    </div>
                    <div className="em-team-content-socials-inner">
                      <div className="em-team-content-socials">
                        <span>{'President' in this.officers ? this.officers['President'].church : ' '}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

    				<div className="col-md-4 col-sm-6 col-xs-12">
              <div className="em-team">
    						<div className="em-team-one">
    							<div className="em-team-content-image-inner">
    								<div className="em-content-image">
                      <img className="img-circle" style={{
                        backgroundImage: 'url("' + this.photos['Secretary'] + '")'
                      }} alt="" />
    								</div>
    							</div>
    							<div className="em-team-content-waraper" id="secretary-wrapper">
    								<div className="em-team-content-title-inner">
    									<div className="em-content-title"><h2>{'Secretary' in this.officers ? this.officers['Secretary'].name : ' '}</h2></div>
    								</div>
    								<div className="em-team-content-subtitle-inner">
    									<div className="em-content-subtitle">SECRETARY</div>
    								</div>
    								<div className="em-team-content-socials-inner">
    									<div className="em-team-content-socials">
    										<span>{'Secretary' in this.officers ? this.officers['Secretary'].church : ' '}</span>
    									</div>
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="em-team">
    						<div className="em-team-one">
    							<div className="em-team-content-image-inner">
                    <div className="em-content-image">
                      <img className="img-circle" style={{
                        backgroundImage: 'url("' + this.photos['Treasurer'] + '")'
                      }} alt="" />
                    </div>
    							</div>
    							<div className="em-team-content-waraper" id="treasurer-wrapper">
    								<div className="em-team-content-title-inner">
    									<div className="em-content-title"><h2>{'Treasurer' in this.officers ? this.officers['Treasurer'].name : ' '}</h2></div>
    								</div>
    								<div className="em-team-content-subtitle-inner">
    									<div className="em-content-subtitle">TREASURER</div>
    								</div>
    								<div className="em-team-content-socials-inner">
                      <div className="em-team-content-socials">
                        <span>{'Treasurer' in this.officers ? this.officers['Treasurer'].church : ' '}</span>
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
