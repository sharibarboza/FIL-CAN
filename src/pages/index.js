import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from "gatsby-image"
import { HashLink as AnchorLink } from 'react-router-hash-link';

var dateFormat = require('dateformat')

import Slider from '../components/carousel'
import Features from '../components/features'
import Counter from '../components/counter'
import Executive from '../components/executive'
import ExecutiveGrid from '../components/executivegrid'
import Portfolio from '../components/portfolio'
import Mission from '../components/mission'
import Divider from '../components/divider'

class IndexPage extends React.Component {

  render() {
    // Get sharp images
    const headerImage1 = get(this, 'props.data.headerImage1');
    const headerImage2 = get(this, 'props.data.headerImage2');
    const headerImage3 = get(this, 'props.data.headerImage3');
    const headerImages = [headerImage1, headerImage2, headerImage3];
    const counterImage = get(this, 'props.data.counterImage');
    const defaultImage = get(this, 'props.data.defaultImage');
    const posterImage = get(this, 'props.data.posterImage');
    const fireImage = get(this, 'props.data.fireImage');

    const featureImage1 = get(this, 'props.data.featureImage1');
    const featureImage2 = get(this, 'props.data.featureImage2');
    const featureImage3 = get(this, 'props.data.featureImage3');
    const featureImages = [featureImage1, featureImage2, featureImage3];

    // Get date for the next camp meeting
    const date = get(this, 'props.data.date.edges.0.node.frontmatter.date');
    const dateStr = date;
    const dateObj = new Date(dateStr);
    const startDate = dateFormat(dateStr, "mmmm d");
    const endDate = dateObj.getDate() + 3;
    const year = dateObj.getFullYear();
    const campDate = startDate + '-' + endDate + ', ' + year;

    // Get speakers
    const speakers = get(this, 'props.data.speakers.edges');
    const adultSpeaker = speakers[0].node.frontmatter.title;
    const youthSpeaker = speakers[1].node.frontmatter.title;
    const theme = get(this, 'props.data.theme.edges.0.node.frontmatter.title');

    // Get grid images
    const grid = get(this, 'props.data.gridImages.edges');

    // Get the officers data
    const officers = get(this, 'props.data.officers.edges');

    return (
      <div>
        <Helmet title="Filipino-Canadian Seventh-Day Adventist Association of Alberta - Home" />

        <Slider images={headerImages} />
        <Features images={featureImages} />

        <Counter date={dateStr} bgImage={counterImage} />
        <div className="container area-padding">
          <div className="row poster-container">
            <div className="col-md-4 no-left-pad">
              <div className="astute-single-event_adn ">
                <a href={posterImage.sizes.src} target="_blank"><div className="em-content-image astute-event-thumb_adn poster-thumb">
                  <Img sizes={posterImage.sizes} />
                  <div className="posterView"><i className="fa fa-search"></i></div>
                </div></a>
              </div>
            </div>
            <div className="col-md-8">
              <div className="eventContainer">
                <div className="section_title_lefts" style={{
                  textTransform: 'uppercase'
                }}>
                  <h2>{theme}</h2>
                  <h1><span>Fil-Can</span> Camp Meeting {year}</h1>
                </div>
                <br />
                <strong>WHEN:</strong> {campDate}<br />
                <strong>WHERE:</strong> Foothills Camp, 3032 Township Rd 342, Red Deer County, Alberta<br />
                <br />
                <strong>ADULT SPEAKER:</strong> {adultSpeaker}<br />
                <strong>YOUTH SPEAKER:</strong> {youthSpeaker}<br />
                <br />
                Useful Information:
                <ul>
                  <li><Link to="/resources/">Camp Meeting Resources - Rules, Schedules, Theme Songs ...</Link><br /></li>
                  <li><AnchorLink to="/campmeeting/#accommodations">Accommodations</AnchorLink><br /></li>
                  <li><AnchorLink to="/campmeeting/#souvenir">Souvenir Program</AnchorLink><br /></li>
                  <li><AnchorLink to="/campmeeting/#faq">Frequently Asked Questions</AnchorLink><br /></li>
                  <li><a href="https://www.foothillscamp.ca/contact">Directions to Foothills Camp & Retreat Centre</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: '#f5f5f5'
        }}>
          <Mission />
        </div>

        <div className="team_area" id="team">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title t_center">
    						  <h2>Executive Officers</h2>
                  <Divider />
    					  </div>
              </div>
            </div>

            <ExecutiveGrid columns={3} executives={officers} />

          </div>
        </div>
        <div className="container" style={{
          marginBottom: '100px'
        }}>
    			<div className="row">
    				<div className="col-md-12">
    					<div className="section-title t_center">
                <div className="donate-btn-header">
                  <Link to="/board/" className="red-on-white" href="#">View Executive Board</Link>
                </div>
    					</div>
    				</div>
    			</div>
        </div>

        <Portfolio images={grid} default={defaultImage} />

      </div>
    )
  }

}

export default IndexPage

export const query = graphql`
  query IndexQuery {
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
    officers: allMarkdownRemark(
      filter: { frontmatter: { type: { eq:"Officer" } } }
      sort: {
        fields: [frontmatter___position], order: ASC
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            position
            name
            type
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
    headerImage1: imageSharp(id: { regex: "/foothills/" }) {
      sizes(maxWidth: 2000) {
        ...GatsbyImageSharpSizes
      }
    }
    headerImage2: imageSharp(id: { regex: "/alberta/" }) {
      sizes(maxWidth: 2000) {
        ...GatsbyImageSharpSizes
      }
    }
    headerImage3: imageSharp(id: { regex: "/filipinoflag/" }) {
      sizes(maxWidth: 2000) {
        ...GatsbyImageSharpSizes
      }
    }
    counterImage: imageSharp(id: { regex: "/campmeeting/" }) {
      sizes(maxWidth: 2000) {
        ...GatsbyImageSharpSizes
      }
    }
    featureImage1: imageSharp(id: { regex: "/feature1/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    featureImage2: imageSharp(id: { regex: "/feature2/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    featureImage3: imageSharp(id: { regex: "/feature3/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    defaultImage: imageSharp(id: { regex: "/default-image/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    posterImage: imageSharp(id: { regex: "/poster/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    fireImage: imageSharp(id: { regex: "/campfire/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
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
    gridImages: allMarkdownRemark(
      limit: 12
  	  filter: { fileAbsolutePath: { regex: "/(grid)/.*\\.md$/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            event
            caption
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
