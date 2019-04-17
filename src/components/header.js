import React from 'react';
import Link from 'gatsby-link';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { HashLink as AnchorLink } from 'react-router-hash-link';

import filcanLogo from '../images/logo.gif';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false,
      collapsed: true,
      selected: null
    }

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.scrollListener = this.scrollListener.bind(this);
    this.closeNav = this.closeNav.bind(this);
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

  onClickItem(item) {
    if (this.state.selected == item) {
      item = null;
    }

    this.setState({
      selected: item
    });
  }

  isOpen(item) {
    return this.state.selected != null && this.state.selected == item;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollListener);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  closeNav() {
    this.setState({
      collapsed: true
    });
  }

  render() {
    const title = this.props.siteTitle;

    return (
      <div>
        <div className="astute-main-menu one_page hidden-xs hidden-sm">
      		<div className='nav_black'>
      			<div className="container">
      				<Navbar className="row logo-left" dark>

      					<div className="col-xs-6">
      						<div className="logo">
      							<Link to="/" className="main_sticky_main_l" style={{
                      color: '#fff'
                    }}>
                      <img src={filcanLogo} alt={title} className={
                        this.state.scrollingLock ? 'smaller-logo' : 'default-logo'
                      } />
                      <span className="brand">FilCan</span>
      							</Link>
      						</div>
      	  			</div>

      					<div className="col-xs-6">
      						<nav className="astute_menu main-search-menu">
      							<ul className="sub-menu">
      								<li><Link to="/">Home</Link></li>
      								<li><Link to="/about/">About</Link>
                        <ul className="sub-menu">
                          <li><Link to="/about/">About Us</Link></li>
                          <li><Link to="/churches">Churches</Link></li>
                          <li><Link to="/leadership/">Leadership</Link></li>
                          <li><Link to="/bylaws/">Bylaws</Link></li>
                          <li><Link to="/reports/">Annual Reports</Link></li>
                          <li><Link to="/meetings/">Meetings</Link></li>
                        </ul>
                      </li>
      								<li><Link to="/campmeeting/">Campmeeting</Link>
                        <ul className="sub-menu">
                          <li><Link to="/campmeeting/">General Info</Link></li>
                          <li><AnchorLink to="/campmeeting/#accommodations">Accommodations</AnchorLink></li>
                          <li><AnchorLink to="/campmeeting/#souvenir">Souvenir Program</AnchorLink></li>
                          <li><AnchorLink to="/campmeeting/#faq">FAQ</AnchorLink></li>
                          <li><Link to="/resources/">Resources</Link></li>
                        </ul>
                      </li>
      							</ul>
      							<div className="donate-btn-header">
      								<Link className="dtbtn" to="/contact/" style={{ marginLeft: '50px' }}>Contact Us</Link>
      							</div>
      						</nav>

                  <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
      					</div>

      				</Navbar>

              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <ul className="navbar-list">
                    <Link to="/" onClick={this.closeNav}><span style={{ display:'block' }}><li className="nav-item" key="home">HOME</li></span></Link>
                    <li className="nav-item" key="about" onClick={this.onClickItem.bind(this, 'about')}>
                      <a>ABOUT</a>
                      <i className="fa fa-plus" style={{
                        float: 'right'
                      }}></i>
                      <Collapse isOpen={this.isOpen('about')} className="collapse-menu">
                        <Link onClick={this.closeNav} to="/about/"><span style={{ display:'block' }} className="sub-nav-item" key="history">ABOUT US</span></Link>
                        <Link onClick={this.closeNav} to="/churches/"><span style={{ display:'block' }} className="sub-nav-item" key="churches">CHURCHES</span></Link>
                        <Link onClick={this.closeNav} to="/leadership/"><span style={{ display:'block' }} className="sub-nav-item" key="leadership">LEADERSHIP</span></Link>
                        <Link onClick={this.closeNav} to="/bylaws/"><span style={{ display:'block' }} className="sub-nav-item" key="bylaws">BYLAWS</span></Link>
                        <Link onClick={this.closeNav} to="/reports/"><span style={{ display:'block' }} className="sub-nav-item" key="reports">REPORTS</span></Link>
                        <Link onClick={this.closeNav} to="/meetings/"><span style={{ display:'block' }} className="sub-nav-item" key="meetings">MEETINGS</span></Link>
                      </Collapse>
                    </li>

                    <li className="nav-item" key="camp" onClick={this.onClickItem.bind(this, 'camp')}>
                      <a>CAMPMEETING</a>
                      <i className="fa fa-plus" style={{
                        float: 'right'
                      }}></i>
                      <Collapse isOpen={this.isOpen('camp')} className="collapse-menu">
                        <Link onClick={this.closeNav} to="/campmeeting/"><span style={{ display:'block' }} className="sub-nav-item" key="info">GENERAL INFO</span></Link>
                        <AnchorLink onClick={this.closeNav} to="/campmeeting/#accommodations"><span style={{ display:'block' }} className="sub-nav-item" key="accommodations">ACCOMMODATIONS</span></AnchorLink>
                        <AnchorLink onClick={this.closeNav} to="/campmeeting/#souvenir"><span style={{ display:'block' }} className="sub-nav-item" key="souvenir">SOUVENIR PROGRAM</span></AnchorLink>
                        <Link onClick={this.closeNav} to="/resources/"><span style={{ display:'block' }} className="sub-nav-item" key="resources">RESOURCES</span></Link>
                        <AnchorLink onClick={this.closeNav} to="/campmeeting/#faq"><span style={{ display:'block' }} className="sub-nav-item" key="faq">FAQ</span></AnchorLink>
                      </Collapse>
                    </li>
                    <Link onClick={this.closeNav} to="/contact/"><span style={{ display:'block' }} className="nav-item" key="contact">CONTACT</span></Link>
                  </ul>
                </Nav>
              </Collapse>

      			</div>
      		</div>
      	</div>
      </div>
    )
  }
}

export default Header
