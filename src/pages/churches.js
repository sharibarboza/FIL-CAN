import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

import Divider from '../components/divider';
import MapPanel from '../components/mappanel';

class ChurchesPage extends React.Component {
  constructor(props) {
    super(props);

    try {
      this.churches = props.data.churches.edges;
    } catch(e) {
      this.churches = [];
    }
    this.panels = [];
  }

  truncateTitle(title) {
    if (title.length < 45) {
      return title;
    } else {
      return title.substring(0, 40) + ' ... '
    }
  }

  displayPastor(church) {
    let element;
    const pastor = church.pastor;

    if (church.pastor) {
      element = <strong>{pastor}</strong>
    } else {
      element = '';
    }
    return element;
  }

  initializeChurchPhotos() {
    let elements = [];

    if (this.churches == undefined) {
      return;
    }

    for (let i = 0; i < this.churches.length; i++) {
      let node = this.churches[i].node;
      let church = node.frontmatter;
      let key = node.id;
      let anchor = '#' + church.title;

      let element = <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12" key={key}>
        <div className="single_event_adn kc-elm kc-css-73682">
          <div className="astute-single-event_adn">

            <div className="em-content-image astute-event-thumb_adn">
              <Img
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                }}
                sizes={church.photo.childImageSharp.sizes}
              />
            </div>
            <div className="em-event-content-area_adn ">

              <div className="event-page-title_adn ">
                <h2>{this.truncateTitle(church.title)}</h2>
                <br/>
                <div className="church-info">
                  <div className="fixed-church-div">
                    <span><i className="fa fa-map-marker"></i> {church.address}</span><br/>
                    <span><i className="fa fa-phone"></i> {church.phone}</span><br />
                    <span>{this.displayPastor(church)}</span>
                  </div>

                  <br /><br />
                  <span><i className="fa fa-globe"></i> <a href={church.website} target="_blank">Visit Website</a></span>
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

  render() {
    return (
      <div>
        <Helmet title="Filipino-Canadian Seventh-Day Adventist Association of Alberta - Churches"/>

        <div className="event_area">
      		<div className="container">
      			<div className="row">
              {this.initializeChurchPhotos()}
      			</div>
      		</div>
      	</div>
      </div>
    )
  }

}

export default ChurchesPage

export const query = graphql`
  query ChurchQuery {
    youtubeImage: imageSharp(id: { regex: "/youtube-bg2/" }) {
      sizes(maxWidth: 5000) {
        ...GatsbyImageSharpSizes
      }
    }
    churches: allMarkdownRemark(
  	   filter: { fileAbsolutePath: { regex: "/(churches)/.*\\.md$/" } }
       sort: { fields: [frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            city
            address
            pastor
            phone
            website
            photo {
              childImageSharp {
                sizes(maxWidth: 1024 ) {
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
