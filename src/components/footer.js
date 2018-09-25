import React from 'react';
import Link from 'gatsby-link';

import 'font-awesome/css/font-awesome.css';

import sdaLogo from '../images/sda-logo.png';

class Footer extends React.Component {

  displayChurches() {
    let elements = [];
    const churches = this.props.churches;

    for (var i = 0; i < churches.length; i++) {
      let node = churches[i].node;
      let key = node.id;
      let church = node.frontmatter;

      let element = <li key={key}><a href={church.website} target="_blank">{church.title}</a></li>
      elements.push(element);
    }

    return elements;
  }

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
               <div className=" col-md-2 col-sm-6">
                 <div className="widget widget_nav_menu">
                   <h2 className="widget-title">Quick Links</h2>
                     <div className="menu-quick-link-container">
                       <ul id="menu-quick-link" className="menu">
                         <li><a href="#">Home</a></li>
                         <li><Link to="/about/">History</Link></li>
                         <li><a href="#">Churches</a></li>
                         <li><Link to="/leadership/">Leadership</Link></li>
                         <li><Link to="/bylaws/">Bylaws</Link></li>
                         <li><a href="#">Financials</a></li>
                         <li><a href="#">Events</a></li>
                         <li><a href="#">Meetings</a></li>
                      </ul>
                   </div>
                 </div>
               </div>
               <div className=" col-md-4 col-sm-6">
                 <div className="widget">
                   <h2 className="widget-title">Churches</h2>
                   <div className="menu-quick-link-container">
                     <ul id="menu-quick-link" className="menu">
                      {this.displayChurches()}
                    </ul>
                 </div>
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
              <div className="footer-menu">
    						 <ul className="text-right">
    							<li><a href="#">Contact</a></li>
    							<li data-netlify-identity-button></li>
    						</ul>
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
