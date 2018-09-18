import React from 'react';
import Link from 'gatsby-link';

import 'font-awesome/css/font-awesome.css';

import sdaLogo from '../images/sda-logo.png';

class Footer extends React.Component {
  render() {

    return (

      <div>
        <div className="footer-middle">
          <div className="container">
    			   <div className="row">
  				     <div className=" col-md-4 col-sm-6">
                  <div className="widget">
                    <h2 className="widget-title">About Us</h2>
                    <div className="footer-col">
                     <img className="sda-logo" src={sdaLogo} alt="SDA logo" />
                     <p>The Filipino-Canada Adventist Association of Alberta is a nonprofit organization that brings together various churches within the Filipino Seventh-day Adventist community. The Association was founded in 2002 and is part of the Alberta Conference of the Seventh-day Adventist Church.</p>
                    </div>
                  </div>
               </div>
               <div className=" col-md-3 col-sm-6">
                 <div className="widget widget_nav_menu">
                   <h2 className="widget-title">Quick Links</h2>
                     <div className="menu-quick-link-container">
                       <ul id="menu-quick-link" className="menu">
                         <li><a href="#">Home</a></li>
                         <li><a href="#">History</a></li>
                         <li><a href="#">Leadership</a></li>
                         <li><a href="#">Churches</a></li>
                         <li><a href="#">Events</a></li>
                         <li><a href="#">Meetings</a></li>
                      </ul>
                   </div>
                 </div>
               </div>
               <div className=" col-md-3 col-sm-6">
                 <div className="widget">
                   <h2 className="widget-title">Churches</h2>
                 </div>
               </div>
               <div className="col-md-2 col-sm-6 text-right">
                 <div className="widget">
                   <h2 className="widget-title">Connect</h2>
                   <i className="fa fa-2x fa-facebook-square"></i>
                 </div>
               </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
          <div className="row">
    				<div className="col-md-10 col-sm-6">
    					<div className="copy-right-text">
    							<p><i className="fa fa-copyright"></i> Copyright Filipino-Canadian Seventh-day Adventist Association of Alberta 2018. All Rights Reserved.	</p>
    					</div>
    				</div>
    				<div className="col-md-2 col-sm-6">
    					<div className="footer-menu text-right">
    						 Contact
    					</div>
    				</div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Footer
