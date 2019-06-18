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
      selected: null,
      mobileWindow: false
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
    let mobile = false;
    if (window.innerWidth < 1200) {
      mobile = true;
    }

    this.setState({
      mobileWindow: mobile
    })

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

  getBrand() {
    let element;

    if (this.state.scrollingLock || this.state.mobileWindow) {
      element = <span></span>;
    } else {
      element = <span className="brand">Filipino-Canadian Seventh-Day<br />Adventists Association of Alberta</span>;
    }

    return element;
  }

  getShortBrand() {
    let element;

    if (this.state.scrollingLock || this.state.mobileWindow) {
      element = <span className="short-brand">FilCan</span>;
    } else {
      element = <span></span>
    }

    return element;
  }

  render() {
    const title = this.props.siteTitle;

    return (
      <div>
        <div className="astute-main-menu one_page hidden-xs hidden-sm">
      		<div className={
            this.state.scrollingLock || !this.state.collapsed || this.state.mobileWindow ? 'nav_black' : 'nav_white'
          }>
      			<div className="container">
      				<Navbar className="row logo-left" dark>

      					<div className="col-xs-1">
      						<div className="logo">
      							<Link to="/" className="main_sticky_main_l" style={{
                      color: this.state.scrollingLock || !this.state.collapsed || this.state.mobileWindow ? 'white' : 'black'
                    }}>
                      <img src={filcanLogo} alt={title} className={
                        this.state.scrollingLock ? 'smaller-logo' : 'default-logo'
                      } />
                      {this.getShortBrand()}
      							</Link>
      						</div>
      	  			</div>

                <div className="col-xs-2" align="left">
                  {this.getBrand()}
                </div>

      					<div className="col-xs-9" align="right" style={{ paddingLeft: '60px' }}>
                  <div className="row social-nav" style={{
                    float: this.state.scrollingLock ? 'right' : 'none',
                    display: this.state.mobileWindow ? 'none' : 'inline-flex',
                    paddingTop: this.state.scrollingLock ? '12px' : '0',
                    paddingBottom: '5px'
                  }}>
                    <a href="https://www.facebook.com/groups/filcamp/" target="_blank"><i className="fa fa-facebook-square" style={{
                      color: '#3C5A99',
                      fontSize: '30px'
                    }}></i></a>
                    <a href="https://www.youtube.com/channel/UCRjkITPyt10LSzbOs5hojUw" target="_blank"><i className="fa fa-youtube-square" style={{
                      color: '#FF0000',
                      fontSize: '30px'
                    }}></i></a>
                    <div className="donate-btn-header">
                      <Link className="dtbtn" to="/contact/">Contact Us</Link>
                    </div>
                  </div>
                  <div className="row" id={ this.state.scrollingLock ? 'small-nav' : 'large-nav' } style={{
                    borderTop: this.state.scrollingLock || this.state.mobileWindow ? 'none' : '1px solid #ddd',
                    borderBottom: this.state.scrollingLock || this.state.mobileWindow ? 'none' : '1px solid #ddd'
                  }}>
        						<nav className="astute_menu main-search-menu">
        							<ul className="sub-menu">
        								<li><Link to="/">Home</Link></li>
        								<li><Link>About</Link>
                          <ul className="sub-menu">
                            <li><Link to="/history/">History</Link></li>
                            <li><Link to="/churches">Churches</Link></li>
                            <li><Link to="/bylaws/">Bylaws</Link></li>
                            <li><Link to="/reports/">Annual Reports</Link></li>
                          </ul>
                        </li>
        								<li><Link>Leadership</Link>
                          <ul className="sub-menu">
                            <li><Link to="/board/">Executive Board</Link></li>
                            <li><Link to="/committees/">Committees</Link></li>
                            <li><Link to="/meetings/">Executive Meetings</Link></li>
                            <li><AnchorLink to="/meetings/#minutes">Meeting Minutes</AnchorLink></li>
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
        						</nav>
                  </div>

                  <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
      					</div>

      				</Navbar>

              <Collapse isOpen={!this.state.collapsed}>
                <Nav navbar>
                  <ul className="navbar-list">
                    <Link to="/" onClick={this.closeNav}><span style={{ display:'block' }}><li className="nav-item" key="home">HOME</li></span></Link>
                    <li className="nav-item" key="about" onClick={this.onClickItem.bind(this, 'about')}>
                      <a>ABOUT</a>
                      <i className="fa fa-plus" style={{
                        float: 'right'
                      }}></i>
                      <Collapse isOpen={this.isOpen('about')} className="collapse-menu">
                        <Link onClick={this.closeNav} to="/history/"><span style={{ display:'block' }} className="sub-nav-item" key="history">HISTORY</span></Link>
                        <Link onClick={this.closeNav} to="/board/"><span style={{ display:'block' }} className="sub-nav-item" key="leadership">EXECUTIVE BOARD</span></Link>
                        <Link onClick={this.closeNav} to="/committees/"><span style={{ display:'block' }} className="sub-nav-item" key="committees">COMMITTEES</span></Link>
                        <Link onClick={this.closeNav} to="/churches/"><span style={{ display:'block' }} className="sub-nav-item" key="churches">CHURCHES</span></Link>
                        <Link onClick={this.closeNav} to="/bylaws/"><span style={{ display:'block' }} className="sub-nav-item" key="bylaws">BYLAWS</span></Link>
                        <Link onClick={this.closeNav} to="/meetings/"><span style={{ display:'block' }} className="sub-nav-item" key="meetings">EXECUTIVE MEETINGS</span></Link>
                        <Link onClick={this.closeNav} to="/meetings/#minutes"><span style={{ display:'block' }} className="sub-nav-item" key="meetings">MEETING MINUTES</span></Link>
                        <Link onClick={this.closeNav} to="/reports/"><span style={{ display:'block' }} className="sub-nav-item" key="reports">REPORTS</span></Link>
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
