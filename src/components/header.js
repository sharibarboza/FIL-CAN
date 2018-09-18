import React from 'react';
import Link from 'gatsby-link';

import filcanLogo from '../images/logo.gif';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false
    }

    this.scrollListener = this.scrollListener.bind(this);
  }

  scrollListener() {
    if (window.scrollY > 100) {
      this.setState({
        scrollingLock: true
      });
    } else if (window.scrollY < 100) {
      this.setState({
        scrollingLock: false
      });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollListener);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  render() {
    const title = this.props.siteTitle;

    return (
    <div className="astute-main-menu one_page hidden-xs hidden-sm" style={{
      position: 'fixed',
      zIndex: '9999',
      width: '100%'
    }}>
  		<div className={this.state.scrollingLock ? 'nav_black' : 'astute_nav_area'}>
  			<div className="container">
  				<div className="row logo-left">

  					<div className="col-md-4 col-sm-3 col-xs-4">
  						<div className="logo">
  							<a className="main_sticky_main_l">
                  <img src={filcanLogo} alt={title} />
                  <span className="brand">FilCan</span>
  							</a>
  						</div>
  	  			</div>

  					<div className="col-md-8 col-sm-9 col-xs-8">
  						<nav className="astute_menu main-search-menu">
  							<ul className="sub-menu">
  								<li><a href="index.html">Home</a>
  									<ul className="sub-menu">
  										<li><a href="index-2.html">Home 2</a></li>
  										<li><a href="index-3.html">Home 3</a></li>
  										<li><a href="index-onepage.html">Home OnePage</a></li>
  									</ul>
  								</li>
  								<li><a href="about.html">About</a></li>
  								<li><a href="project.html">Events</a></li>
  								<li><a href="service.html">Meetings</a></li>
  								<li><a href="contact.html">Contact</a></li>
  							</ul>
  							<div className="donate-btn-header">
  								<a className="dtbtn" href="#">Donate Now</a>
  							</div>
  						</nav>
  					</div>

  				</div>
  			</div>
  		</div>
  	</div>
    )
  }
}

export default Header
