import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Img from "gatsby-image";

var dateFormat = require('dateformat');

import Divider from '../components/divider';

import '../layouts/animate.css'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    // Get date for the next camp meeting
    this.dateStr = props.data.date.edges[0].node.frontmatter.date + 'T00:00:00';
    this.dateObj = new Date(this.dateStr);
    this.year = this.dateObj.getFullYear();

    this.theme = props.data.theme.edges[0].node.frontmatter;
    this.speakers = props.data.speakers.edges;
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

  displaySpeakers() {
    let elements = [];
    for (let i = 0; i < this.speakers.length; i++) {
      let node = this.speakers[i].node;
      let key = node.id;
      let speaker = node.frontmatter;
      console.log(speaker);
      /*
      let element = <div className="col-md-4 col-sm-6 col-xs-12">
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
                }} sizes={this.photos['President']} alt="" />
              </div>
            </div>
            <div className="em-team-content-waraper" id="president-wrapper">
              <div className="em-team-content-title-inner">
                <div className="em-content-title"><h2>{'President' in this.officers ? this.officers['President'].name : ' '}</h2></div>
              </div>
              <div className="em-team-content-subtitle-inner">
                <div className="em-content-subtitle">PRESIDENT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      */
    }

    return elements;
  }

  render() {
    // Get sharp images
    const headerImage1 = get(this, 'props.data.headerImage1');
    const campImage1 = get(this, 'props.data.campImage1');

    return (
      <div>

        <div className="main-slider-area" style={{
          height: '700px'
        }}>
          <Img alt="" sizes={headerImage1.sizes} className="carousel-image" />
          <div className="overlay"></div>
        </div>

        <div className="container-fluid">
          <div id="htmlcaption1_28" className="nivo-html-caption em-slider-content-nivo">
            <div className="em_slider_inner container  text-center">
              <div className="wow fadeInUpBig" data-wow-duration="1.2s" data-wow-delay="0s">
                <h2 className="em-slider-title">{this.year} Annual Filipino-Canadian </h2>
              </div>
              <div className="wow fadeInUpBig" data-wow-duration="1.5s" data-wow-delay="0s">
                <h1 className="em-slider-sub-title">Camp Meeting </h1>
              </div>
              <div className="wow fadeInUpBig" data-wow-duration="2s" data-wow-delay="0s">
                <p  className="em-slider-descript"> Join us for a weekend of spiritual services, camp activities, concerts, game nights, sports events, and more!</p>
              </div>
              <div className="em-slider-button wow  bounceInUp  em-button-button-area" data-wow-duration="3s" data-wow-delay="0s">
                <a className="em-active-button" href="#">contact us</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ margin: 0 }}>
        <div className="col-sm-6 col-xs-12" style={{
          backgroundColor: 'black'
        }}>
          <div className="camp-info">
            <div className="row">
              <div className="col-md-9">
                <div className="section_title_lefts" style={{
                  color: 'white'
                }}>
                  <h2><u>WHEN IS IT</u></h2>
                  <h1 style={{
                    textTransform: 'uppercase'
                  }}>{this.getDate()}</h1>
                  See schedule of events <i className="fa fa-long-arrow-right"></i>
                </div>
              </div>
              <div className="col-md-3" style={{
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
          <div className="col-sm-6 col-xs-12" style={{
            backgroundColor: '#D6B340'
          }}>
            <div className="camp-info">
              <div className="row">
                <div className="col-md-9">
                  <div className="section_title_lefts" style={{
                    color: 'white'
                  }}>
                    <h2><u>WHERE IS IT</u></h2>
                    <h1>FOOTHILLS CAMP</h1>
                    Get map directions <i className="fa fa-long-arrow-right"></i>
                  </div>
                </div>
                <div className="col-md-3" style={{
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
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ margin: 0 }}>
          <div className="col-sm-6 col-xs-12" style={{
            backgroundColor: '#e5e5e5'
          }}>
            <div style={{
              padding: '12% 50px 50px 35%',
            }}>
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
            <Img sizes={campImage1.sizes} />
          </div>
        </div>

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
            <div className="row">
              {this.displaySpeakers()}
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
    headerImage1: imageSharp(id: { regex: "/carousel4/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    campImage1: imageSharp(id: { regex: "/canada/" }) {
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
