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
  		<div className={this.state.scrollingLock || this.props.location != '/' ? 'nav_black' : 'astute_nav_area'}>
  			<div className="container">
  				<div className="row logo-left">

  					<div className="col-md-4 col-sm-3 col-xs-4">
  						<div className="logo">
  							<Link to="/" className="main_sticky_main_l" style={{
                  color: '#fff'
                }}>
                  <img src={filcanLogo} alt={title} />
                  <span className="brand">FilCan</span>
  							</Link>
  						</div>
  	  			</div>

  					<div className="col-md-8 col-sm-9 col-xs-8">
  						<nav className="astute_menu main-search-menu">
  							<ul className="sub-menu">
  								<li><Link to="/">Home</Link></li>
  								<li><Link to="/about/">About</Link>
                    <ul className="sub-menu">
                      <li><Link to="/about/">History</Link></li>
                      <li><Link to="/churches">Churches</Link></li>
                      <li><Link to="/leadership/">Leadership</Link></li>
                      <li><Link to="/bylaws/">Bylaws</Link></li>
                      <li><Link to="/reports/">Annual Reports</Link></li>
                    </ul>
                  </li>
  								<li><Link to="/campmeeting/">Events</Link>
                    <ul className="sub-menu">
                      <li><Link to="/campmeeting/">Camp Meeting</Link></li>
                    </ul>
                  </li>
  								<li><Link to="/meetings/">Meetings</Link></li>
  								<li><Link to="/contact/">Contact</Link></li>
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
