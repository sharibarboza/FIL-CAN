import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Img from "gatsby-image"
import Scrollchor from 'react-scrollchor';
import Helmet from 'react-helmet'

var dateFormat = require('dateformat')

import Divider from '../components/divider'
import Contact from '../components/contact'
import AccordionGroup from '../components/accordiongroup'
import Email from '../components/email'

import '../layouts/animate.css'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.headerImage = props.data.headerImage;
    this.campImage1 = props.data.campImage1;
    this.campImage2 = props.data.campImage2;
    this.campImage3 = props.data.campImage3;
    this.contactImage = props.data.contactImage;
    this.souvenirImage = props.data.souvenirImage;
    this.fullPage = props.data.fullPage;
    this.halfPage = props.data.halfPage;
    this.quarterPage = props.data.quarterPage;

    // Get date for the next camp meeting
    try {
      this.dateStr = props.data.date.edges[0].node.frontmatter.date;
      this.dateObj = new Date(this.dateStr);
      this.year = this.dateObj.getFullYear();
    } catch(e) {
      this.dateStr = null;
    }

    this.theme = props.data.theme.edges[0].node.frontmatter;
    this.speakers = props.data.speakers.edges;
    this.faq = props.data.faq.edges;
    this.contact = props.data.contact.edges[0].node.frontmatter;

    this.state = {
      accordion: null
    }
  }

  componentDidMount() {
    const WOW = require('wowjs/dist/wow.js');
    if (typeof window !== `undefined`) {
      new WOW.WOW({
          live: false
      }).init();
    }
  }

  getDate() {
    if (this.dateStr) {
      let startDate = dateFormat(this.dateStr, "mmmm d");
      let endDate = this.dateObj.getDate() + 3;
      return startDate + '-' + endDate + ', ' + this.year;
    } else {
      return '';
    }
  }

  getThemeText() {
    const words = this.theme.title.split(' ');
    const numWords = words.length;
    const start = words.slice(0, numWords-1).join(" ");

    return start;
  }

  getLastWord() {
    const words = this.theme.title.split(' ');
    const numWords = words.length;
    const end = words[numWords-1];

    return end;
  }

  getRow(numSpeakers) {
    let row = 'col-xs-12 col-sm-6 ';
    if (numSpeakers == 2) {
      row += 'col-md-6';
    } else if (numSpeakers == 3) {
      row += 'col-md-4';
    }
    return row;
  }

  getMargin(numSpeakers) {
    if (numSpeakers == 2) {
      return '0 23%';
    } else {
      return '0 7%';
    }
  }

  displaySpeakers() {
    let elements = [];
    const numSpeakers = this.speakers.length;
    const margin = this.getMargin(numSpeakers);

    for (let i = 0; i < numSpeakers; i++) {
      let node = this.speakers[i].node;
      let key = node.id;
      let speaker = node.frontmatter;

      let element = <div className={this.getRow(numSpeakers)} key={key}>
        <div className="em-team">
          <div className="em-team-one">
            <div className="em-team-content-image-inner">
              <div className="em-content-image speakers-image">
                <Img style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%"
                }} sizes={speaker.photo.childImageSharp.sizes} alt="" />
                <div className="em-team-content-socials-inner" style={{ visibility: 'hidden' }}>
                	<div className="em-team-content-socials">
                    <Email addr={speaker.email} />
                  </div>
                </div>
              </div>
            </div>
            <div className={this.getClass(speaker.email)} id="president-wrapper" style={{
              margin: margin
            }}>
              <div className="em-team-content-title-inner">
                <div className="em-content-title"><h2>{speaker.title}</h2></div>

              </div>
              <div className="em-team-content-subtitle-inner">
                <div className="em-content-subtitle">{speaker.type}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      elements.push(element);

    }
    return elements;
  }

  getClass(email) {
    var stdClass = "em-team-content-waraper";

    if (email) {
      stdClass += " email-content";
    }

    return stdClass;
  }

  displayFAQ() {
    let faqs = [];
    for (let i = 0; i < this.faq.length; i++) {
      let node = this.faq[i].node;
      let key = node.id;
      faqs.push(node);
    }
    return <AccordionGroup elements={faqs} />
  }

  render() {

    return (
      <div>
        <Helmet title="Filipino-Canadian Seventh-Day Adventist Association of Alberta - Camp Meeting"/>

        <div className="main-slider-area camp-meeting-area">
          <Img alt="" sizes={this.headerImage.sizes} className="carousel-image" />
          <div className="overlay"></div>

          <div className="container-fluid">
            <div id="htmlcaption1_28" className="nivo-html-caption em-slider-content-nivo">
              <div className="em_slider_inner container text-center">
                <div className="wow fadeInUpBig" data-wow-duration="1.2s" data-wow-delay="0s">
                  <h2 className="em-slider-title">Filipino-Canadian Camp Meeting </h2>
                </div>
                <div className="wow fadeInUpBig" data-wow-duration="1.5s" data-wow-delay="0s">
                  <h1 className="em-slider-sub-title">{this.getDate()} </h1>
                </div>
                <div className="wow fadeInUpBig" data-wow-duration="2s" data-wow-delay="0s" style={{
                  paddingTop: '20px'
                }}>
                  <p  className="em-slider-descript"> Come join us for a weekend of spiritual services, camp activities, concerts, game nights, sports events, and more!</p>
                </div>
                <div className="em-slider-button camp-carousel wow  bounceInUp  em-button-button-area" data-wow-duration="3s" data-wow-delay="0s">
                  <Link to="/resources/">resources</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ margin: 0 }}>
          <div className="col-lg-6 col-md-12 col-xs-12" style={{
            backgroundColor: '#f5f5f5'
          }}>
            <div className="theme-container">
              <div className="section_title_lefts">
                <h2>OUR THEME</h2>
                <h1 className="uppercase">{this.getThemeText()} <span>{this.getLastWord()}</span></h1>
              </div>
              <i className="uppercase">{this.theme.filipino}</i>
              <br/><br/>
              <blockquote>
                {this.theme.versetext}
                <br />
                <span style={{
                  float: 'right',
                  paddingTop: '25px'
                }}>{this.theme.verse}</span>
              </blockquote>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12" style={{ padding: 0 }}>
            <Img sizes={this.campImage1.sizes} style={{ height: '100%' }} />
          </div>
        </div>

        {this.speakers.length > 0 ?
        <div className="team_area" id="speakers">
      		<div className="container">
      			<div className="row">
      				<div className="col-md-12">
      					<div className="section-title t_center">

      						<h2>Speakers</h2>
                  <Divider />
      					</div>
      				</div>
      			</div>
            <div className="row" style={{
              paddingTop: '30px'
            }}>
              {this.displaySpeakers()}
            </div>
          </div>
        </div>
        : null}

        <div className="row" style={{ margin: 0 }}>
        <div className="col-lg-6 col-md-12 col-xs-12" style={{ padding: 0 }}>
          <div>
            <Img sizes={this.campImage3.sizes} style={{ height: '100%' }} />
          </div>
        </div>
          <div className="col-lg-6 col-md-12 col-xs-12" style={{
            backgroundColor: '#f5f5f5'
          }}>
            <div className="theme-container-right">
              <div className="section_title_lefts">
                <h2>CAMP SITE</h2>
                <h1 style={{
                  textTransform: 'uppercase'
                }}><span>FOOTHILLS</span> CAMP & RETREAT CENTRE</h1>
              </div>
              <br/>
              <strong>Address:</strong><br/>
              3032 Township Rd 342, Red Deer County, AB<br/>
              T0M 0K0
              <div style={{ marginTop: `20px` }}>
                For directions to this location or to learn about its facilities, please visit the <a href="https://www.foothillscamp.ca/contact" target="_blank">Foothills Camp website</a>.
              </div>
              <br /><br />
              <strong>General Rules and Security Policy</strong>
              <br />
              1. Parents must know where your children are all the time.<br />
              2. No parking on the grass in all areas in front of the auditorium.<br />
              3. No open fire unless supervised by Foothills staff.<br />
              4. Pets are allowed only in the lower ground portion of Foothills Camp.<br />
              5. Quiet time is 11:00 p.m. (except Saturday night during social night).
            </div>
          </div>
        </div>

        <div id="accommodations" class="anchor-pad"></div>
        <div className="container area-padding">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title t_center">

                <h2>Accommodations</h2>
                <Divider />
              </div>
            </div>
          </div>
          <div className="accommodations-container">
            <p>Attending camp meeting is free but you must pay for accomodations. Foothills Camp offers reservations for lodge rooms (maximum 4 people), cabins (maximum 10 people), tent lots, and RV lots. Once
            you have made a reservation, you can keep that reservation for the next camp meeting by renewing your payment before the <strong>April 30th</strong> deadline.</p>
            <p><strong>All reservations come with an additional $30 registration fee. You can become exempt from this fee by purchasing a greeting in our Souvenir Program instead.</strong> See the next section to learn more.
            </p>
            <br />
            <p>Please <Link to="/contact/">contact us</Link> for availability and pricing to reserve your accommodations at the next Camp Meeting.</p>
          </div>
        </div>

        <div id="souvenir" class="anchor-pad"></div>
        <div style={{
          backgroundColor: '#f5f5f5'
        }}>
          <div className="container souvenir-container area-padding">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title t_center">

                  <h2>Souvenir Program</h2>
                  <Divider />
                </div>
              </div>
            </div>
            <div style={{
              padding: '20px 0'
            }}>
              <div className="row">
                <div className="col-md-10">
                  <p>The Souvenir Program is a booklet that will be handed out in the next camp meeting to guests containing information on speakers, the camp meeting schedule, family greetings from the members, and more.</p>
                  <p>Become a sponsor for the next camp meeting by purchasing a family greeting! A <strong>family greeting</strong> is a page or partial page with a picture of your family and/or your business advertisement. You can show your support for this event by purchasing a family greeting and in return your family/advertisement will be showcased in our souvenir booklet.</p>
                  <br />
                  Go to the camp meeting <Link to="/resources/">resource files</Link> to view and download previous Souvenir Programs.
                </div>
                <div className="col-md-2">
                  <Img sizes={this.souvenirImage.sizes} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-xs-12 col-sm-6">
                <div className="single_event_adn kc-elm kc-css-73682 souvenir-box">
                  <div className="astute-single-event_adn ">

                    <div className="em-content-image astute-event-thumb_adn souvenir-thumb">
                      <Img sizes={this.fullPage.sizes} />
                    </div>
                    <div className="em-event-content-area_adn ">

                      <div className="event-page-title_adn souvenir-title">
                        <h2 style={{
                          float: 'left'
                        }}>Full Page</h2>
                        <h2 style={{
                          float: 'right',
                          color: '#0E2C87'
                        }}>$200 <i className="fa fa-tag"></i></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 col-sm-6">
                <div className="single_event_adn kc-elm kc-css-73682 souvenir-box">
                  <div className="astute-single-event_adn ">

                    <div className="em-content-image astute-event-thumb_adn souvenir-thumb">
                      <Img sizes={this.halfPage.sizes} />
                    </div>
                    <div className="em-event-content-area_adn ">

                      <div className="event-page-title_adn souvenir-title">
                        <h2 style={{
                          float: 'left'
                        }}>Half Page</h2>
                        <h2 style={{
                          float: 'right',
                          color: '#0E2C87'
                        }}>$100 <i className="fa fa-tag"></i></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 col-sm-6">
                <div className="single_event_adn kc-elm kc-css-73682 souvenir-box">
                  <div className="astute-single-event_adn ">

                    <div className="em-content-image astute-event-thumb_adn souvenir-thumb">
                      <Img sizes={this.quarterPage.sizes} />
                    </div>
                    <div className="em-event-content-area_adn ">

                      <div className="event-page-title_adn souvenir-title">
                        <h2 style={{
                          float: 'left'
                        }}>Quarter Page</h2>
                        <h2 style={{
                          float: 'right',
                          color: '#0E2C87'
                        }}>$60 <i className="fa fa-tag"></i></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <p>By purchasing one of the above souvenir family greetings, you can <strong>waive your $30 registration accommodation fee.</strong> However, you do not need to have accommodations or even attend the event in order to purchase a family greeting.</p>
                <br />
                <p>Please <Link to="/contact/">contact us</Link> if you are interested in having your family picture in the next Souvenir Program.</p>
              </div>
            </div>

          </div>
        </div>

        <div id="faq" class="anchor-pad"></div>
        <div className="container area-padding">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title t_center">

                <h2>FAQ</h2>
                <Divider />
              </div>
            </div>
          </div>
          <div className="faq-container">
            <div id="accordion">
              {this.displayFAQ()}
            </div>
          </div>
        </div>

      </div>
    )
  }

}

export default IndexPage

export const query = graphql`
  query CampMeetingQuery {
    date: allMarkdownRemark(
      limit: 1
    	filter: { fileAbsolutePath: { regex: "/(dates)/.*\\.md$/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            date
          }
        }
      }
    }
    faq: allMarkdownRemark(
    	filter: { fileAbsolutePath: { regex: "/(faq)/.*\\.md$/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            answer
          }
        }
      }
    }
    contact: allMarkdownRemark(
      limit: 1
    	filter: { fileAbsolutePath: { regex: "/(contact)/.*\\.md$/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            phone
          }
        }
      }
    }
    headerImage: imageSharp(id: { regex: "/carousel4/" }) {
      sizes(maxWidth: 4000 ) {
        ...GatsbyImageSharpSizes
      }
    }
    campImage1: imageSharp(id: { regex: "/canada/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    campImage2: imageSharp(id: { regex: "/foothills/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    campImage3: imageSharp(id: { regex: "/aerial/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    souvenirImage: imageSharp(id: { regex: "/souvenir/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    fullPage: imageSharp(id: { regex: "/fullpage/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    halfPage: imageSharp(id: { regex: "/halfpage/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    quarterPage: imageSharp(id: { regex: "/quarterpage/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    theme: allMarkdownRemark(
      limit: 1
    	filter: { fileAbsolutePath: { regex: "/(theme)/.*\\.md$/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            filipino
            versetext
            verse
          }
        }
      }
    }
    speakers: allMarkdownRemark(
    	filter: {
        fileAbsolutePath: { regex: "/(speakers)/.*\\.md$/" }
      }
      sort: {
        fields: [frontmatter___type], order: ASC
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            type
            email
            photo {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
