import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Img from "gatsby-image"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Scrollchor from 'react-scrollchor';

var dateFormat = require('dateformat')

import Divider from '../components/divider'
import Contact from '../components/contact'
import AccordionGroup from '../components/accordiongroup'

import '../layouts/animate.css'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.headerImage = props.data.headerImage;
    this.campImage1 = props.data.campImage1;
    this.contactImage = props.data.contactImage;
    this.souvenirImage = props.data.souvenirImage;
    this.fullPage = props.data.fullPage;
    this.halfPage = props.data.halfPage;
    this.quarterPage = props.data.quarterPage;

    // Get date for the next camp meeting
    this.dateStr = props.data.date.edges[0].node.frontmatter.date + 'T00:00:00';
    this.dateObj = new Date(this.dateStr);
    this.year = this.dateObj.getFullYear();

    this.theme = props.data.theme.edges[0].node.frontmatter;
    this.speakers = props.data.speakers.edges;
    this.faq = props.data.faq.edges;
    this.contact = props.data.contact.edges[0].node.frontmatter;

    this.lat = 51.913339;
    this.lng = -114.2923226;
    this.mapKey = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA7KWXIvtfn2bgrIVL3FGXBpnPR8YQMXAk&v=3.exp&libraries=geometry,drawing,places";

    this.state = {
      accordion: null
    }
  }

  componentDidMount() {
    const WOW = require('wowjs/dist/wow.js');
    if (typeof window !== `undefined`) {
      new WOW.WOW().init();
    }
  }

  getDate() {
    let startDate = dateFormat(this.dateStr, "mmmm d");
    let endDate = this.dateObj.getDate() + 3;
    return startDate + '-' + endDate + ', ' + this.year;
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
              <div className="em-content-image">
                <Img style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%"
                }} sizes={speaker.photo.childImageSharp.sizes} alt="" />
              </div>
            </div>
            <div className="em-team-content-waraper" id="president-wrapper" style={{
              margin: margin
            }}>
              <div className="em-team-content-title-inner">
                <div className="em-content-title"><h2>{speaker.title}</h2></div>

              </div>
              <div className="em-team-content-subtitle-inner">
                <div className="em-content-subtitle">{speaker.type}</div>
              </div>
							<div className="em-team-content-socials-inner">
              	<div className="em-team-content-socials">
                  <span>{speaker.city}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      elements.push(element);

    }
    return elements;
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

    let MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={7}
        defaultCenter={{ lat: this.lat, lng: this.lng }}
      >
        {props.isMarkerShown && <Marker position={{ lat: this.lat, lng: this.lng }} />}
      </GoogleMap>
    ))

    return (
      <div>

        <div className="main-slider-area" style={{
          height: '90vh'
        }}>
          <Img alt="" sizes={this.headerImage.sizes} className="carousel-image" />
          <div className="overlay"></div>

          <div className="container-fluid">
            <div id="htmlcaption1_28" className="nivo-html-caption em-slider-content-nivo">
              <div className="em_slider_inner container text-center" style={{
                marginTop: '60px'
              }}>
                <div className="wow fadeInUpBig" data-wow-duration="1.2s" data-wow-delay="0s">
                  <h2 className="em-slider-title">{this.year} Annual Filipino-Canadian </h2>
                </div>
                <div className="wow fadeInUpBig" data-wow-duration="1.5s" data-wow-delay="0s">
                  <h1 className="em-slider-sub-title">Camp Meeting </h1>
                </div>
                <div className="wow fadeInUpBig" data-wow-duration="2s" data-wow-delay="0s" style={{
                  paddingTop: '20px'
                }}>
                  <p  className="em-slider-descript"> Come join us for a weekend of spiritual services, camp activities, concerts, game nights, sports events, and more!</p>
                </div>
                <div className="em-slider-button wow  bounceInUp  em-button-button-area" data-wow-duration="3s" data-wow-delay="0s">
                  <Scrollchor to="#contact" animate={{offset: -100, duration: 300}}>contact us</Scrollchor>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ margin: 0 }}>
        <div className="col-md-6 col-sm-12" style={{
          backgroundColor: 'black'
        }}>
          <div className="camp-info camp-info-left">
            <div className="row">
              <div className="col-md-8 col-sm-12">
                <div className="section_title_lefts" style={{
                  color: 'white'
                }}>
                  <h2><u>WHEN</u></h2>
                  <h1 style={{
                    fontSize: '30px',
                    textTransform: 'uppercase'
                  }}>{this.getDate()}</h1>
                  Thursday - Sunday
                </div>
              </div>
              <div className="col-md-4 col-sm-12" style={{
                textAlign: 'center',
              }}>
                <div>
                  <span><i className="fa fa-calendar" style={{
                    color: '#0E2C87',
                    fontSize: '60px',
                    verticalAlign: 'middle',
                    lineHeight: '120px',
                    background: 'white',
                    borderRadius: '50%',
                    height: '120px',
                    width: '120px'
                  }}></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="col-md-6 col-sm-12" style={{
              backgroundImage: 'linear-gradient(to top right, #ead500, #e6c900, #e2bd00, #ddb100, #d8a600)'
          }}>
            <div className="camp-info camp-info-right">
              <div className="row">
                <div className="col-md-4 col-sm-12" style={{
                  textAlign: 'center',
                }}>
                  <div>
                    <span><i className="fa fa-map-marker" style={{
                      color: '#0E2C87',
                      fontSize: '60px',
                      verticalAlign: 'middle',
                      lineHeight: '120px',
                      background: 'white',
                      borderRadius: '50%',
                      height: '120px',
                      width: '120px'
                    }}></i></span>
                  </div>
                </div>
                <div className="col-md-8 col-sm-12">
                  <div className="section_title_lefts" style={{
                    color: 'white',
                    textAlign: 'right'
                  }}>
                    <h2><u>WHERE</u></h2>
                    <h1 style={{
                      fontSize: '30px',
                    }}>FOOTHILLS CAMP</h1>
                    3032 Township Rd 342, Bowden, AB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {this.speakers.length > 0 ?
        <div className="team_area" id="team">
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
          <div className="col-sm-6 col-xs-12" style={{
            backgroundColor: '#f5f5f5'
          }}>
            <div className="theme-container">
              <div className="section_title_lefts">
                <h2>OUR THEME</h2>
                <h1 style={{
                  textTransform: 'uppercase'
                }}>{this.getThemeText()} <span>{this.getLastWord()}</span></h1>
              </div>
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
          <div className="col-sm-6 col-xs-12" style={{ padding: 0 }}>
            <Img sizes={this.campImage1.sizes} />
          </div>
        </div>

        <div className="container" style={{
          padding: '100px 0 100px'
        }}>
          <div className="row">
            <div className="col-md-12">
              <div className="section-title t_center">

                <h2>Accommodations</h2>
                <Divider />
              </div>
            </div>
          </div>
          <div style={{
            padding: '50px 15px 0'
          }}>
            <p>Attending camp meeting is free but you must pay for accomodations. Foothills Camp offers reservations for lodge rooms (maximum 4 people), cabins (maximum 10 people), tent lots, and RV lots. Once
            you have made a reservation, you can keep that reservation for the next camp meeting by renewing your payment before the <strong>April 30th</strong> deadline.</p>
            <br />
            <p><strong>All reservations come with an additional $30 registration fee. You can become exempt from this fee by purchasing a greeting in our Souvenir Program instead.</strong> See the next section to learn more.
            </p>
            <br />
            Please <Scrollchor to="#contact" animate={{offset: -100, duration: 300}}>contact us</Scrollchor> for availability and pricing to reserve your accommodations at the next Camp Meeting.
          </div>
        </div>

        <div style={{
          backgroundColor: '#f5f5f5'
        }}>
          <div className="container" style={{
            padding: '100px 15px 100px'
          }}>
            <div className="row">
              <div className="col-md-12">
                <div className="section-title t_center">

                  <h2>Souvenir Program</h2>
                  <Divider />
                </div>
              </div>
            </div>
            <div style={{
              padding: '50px 0'
            }}>
              <div className="row">
                <div className="col-md-10">
                  <p>The Souvenir Program is a booklet that will be handed out in the next camp meeting to guests containing information on speakers, the camp meeting schedule, family greetings from the members, and more. </p>
                  <br />
                  <p>Become a sponsor for the next camp meeting by purchasing a family greeting! A <strong>family greeting</strong> is a page or partial page with a picture of your family and/or your business advertisement. You can show your support for this event by purchasing a family greeting and in return your family/advertisement will be showcased in our souvenir booklet.</p>
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

            <br />
            <p>By purchasing one of the above souvenir family greetings, you can <strong>waive your $30 registration accommodation fee.</strong> However, you do not need to have accommodations or even attend the event in order to purchase a family greeting.</p>
            <br />
            Please <Scrollchor to="#contact" animate={{offset: -100, duration: 300}}>contact us</Scrollchor> if you are interested in having your family picture in the next Souvenir Program.

          </div>
        </div>

        <div className="container" style={{
          padding: '100px 0 100px'
        }}>
          <div className="row">
            <div className="col-md-12">
              <div className="section-title t_center">

                <h2>FAQ</h2>
                <Divider />
              </div>
            </div>
          </div>
          <div style={{ padding: '50px 0' }}>

          <div id="accordion">
            {this.displayFAQ()}
          </div>

          </div>
        </div>

        <Contact id="contact" phone={this.contact.phone} email={this.contact.title} />

        <div>
          <MyMapComponent
            isMarkerShown
            googleMapURL={this.mapKey}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `500px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
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
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    campImage1: imageSharp(id: { regex: "/canada/" }) {
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
            versetext
            verse
          }
        }
      }
    }
    speakers: allMarkdownRemark(
    	filter: { fileAbsolutePath: { regex: "/(speakers)/.*\\.md$/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            type
            city
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
