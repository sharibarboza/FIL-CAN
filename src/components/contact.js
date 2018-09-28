import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";

import Divider from './divider';

class Contact extends React.Component {
  render() {

    return (
      <div className="contact_area" id="contact">
    		<div className="container">
    			<div className="row">
    				<div className="col-md-12">
    					<div className="section-title1  t_center">
    						<h2>Our Contact</h2>
  							<Divider white={true} />
  							<p className=" text-alignm1">Please send us a message if you have inquiries about attending Camp Meeting or in general any questions regarding the Filipino-Canadian Adventist Association of Alberta.</p>
    					</div>
    				</div>
    			</div>
    			<div className="row" style={{
            paddingTop: '50px'
          }}>
    				<div className="col-md-6 col-xs-12">
    					<div className="single_plases">
    						<div className="single_plases_inner">
    							<div className="plases_icon">
    								<i className="fa fa-phone"></i>
    							</div>
    							<div className="plases_text">
    								<p>{this.props.phone}</p>
    							</div>
    						</div>
    					</div>
    				</div>
    				<div className="col-md-6 col-xs-12">
    					<div className="single_plases">
    						<div className="single_plases_inner">
    							<div className="plases_icon">
    								<i className="fa fa-envelope-o"></i>
    							</div>
    							<div className="plases_text">
    								<p>{this.props.email}</p>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    			<div className="row">
    				<div className="col-md-12">
    					<div className="em_contact_form">
    					<form action="#">
    						<div className="contact_form_inner">
    							<div className="form_field">
    								<div className="form_field_inner">
    									<input type="text" name="name" placeholder="Name" />
    								</div>
    								<div className="form_field_inner">
    									<input type="email" name="email" placeholder="Email" />
    								</div>

    								<div className="form_field_comment">
    									<div className="field_comment_inner">
    										<textarea name="message" placeholder="Message" cols="30" rows="10"></textarea>
    									</div>
    								</div>
    							</div>
    						</div>
    						<div className="contact_bnt">
    							<button name="submit">submit</button>
    						</div>
    					</form>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    )
  }
}

export default Contact
