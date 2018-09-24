import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Geocode from "react-geocode";
import Scrollchor from 'react-scrollchor';
import Img from 'gatsby-image'

import Divider from '../components/divider';

class ChurchesPage extends React.Component {
  constructor(props) {
    super(props);
    this.churches = props.data.churches.edges;
    this.panels = [];
    this.state = { locations: [] };
    this.data = {};
    this.mapKey = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA7KWXIvtfn2bgrIVL3FGXBpnPR8YQMXAk&v=3.exp&libraries=geometry,drawing,places";
  }

  componentDidMount() {
    Geocode.setApiKey("AIzaSyA7KWXIvtfn2bgrIVL3FGXBpnPR8YQMXAk");
    this.getGeocodes();
  }

  getGeocodes() {
    const self = this;
    for (var i = 0; i < this.churches.length; i++) {
      let node = this.churches[i].node;
      let church = node.frontmatter;
      let address = church.address;

      Geocode.fromAddress(address).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          let res = {
            'lat': lat,
            'lng': lng
          }
          let newLocations = self.state.locations.slice();
          newLocations.push(res);

          let geoKey = res.lat + res.lng;
          self.data[geoKey] = node;

          self.setState({
            locations: newLocations
          });
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  truncateTitle(title) {
    if (title.length < 45) {
      return title;
    } else {
      return title.substring(0, 40) + ' ... '
    }
  }

  initializeChurchPanels() {
    let panels = [];
    this.state.locations.forEach(mapping => {
      let location = mapping;
      let geoKey = location.lat + location.lng;

      let data = this.data[geoKey];
      let church = data.frontmatter;
      let key = data.id;

      let MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
          defaultZoom={11}
          defaultCenter={{ lat: location.lat, lng: location.lng }}
        >
          {props.isMarkerShown && <Marker position={{ lat: location.lat, lng: location.lng }} />}
        </GoogleMap>
      ))

      let element = <div className="blog-left-side church-panel" key={key} id={church.title}>
        <div className="widget widget_categories" style={{
          width: '100%'
        }}>
          <h2 className="widget-title">{church.title}</h2>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li className="cat-item" style={{
                  lineHeight: '30px'
                }}>
                  <span>{church.address}</span><br />
                  <span>{church.pastor}</span><br /><br />
                  <span><i className="fa fa-phone"></i> {church.phone}</span><br />
                  <span><i className="fa fa-globe"></i> <a href={church.website} target="_blank">{church.website}</a></span>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <MyMapComponent
                isMarkerShown
                googleMapURL={this.mapKey}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `200px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
          </div>
        </div>
      </div>

      panels.push(element);
    });

    return panels;
  }

  initializeChurchPhotos() {
    let elements = [];
    for (var i = 0; i < this.churches.length; i++) {
      let node = this.churches[i].node;
      let church = node.frontmatter;
      let key = node.id;
      let anchor = '#' + church.title;

      let element = <div className="col-md-4 col-xs-12 col-sm-6" key={key}>
        <div className="single_event_adn kc-elm kc-css-73682">
          <div className="astute-single-event_adn ">

            <div className="em-content-image astute-event-thumb_adn">
              <Img className="church-image" alt="" sizes={church.photo.childImageSharp.sizes} />
              <div className="readmore_icon_adn">
                <Scrollchor to={anchor} animate={{offset: -150, duration: 300}}><i className="fa fa-info"></i></Scrollchor>
              </div>
              <a href={church.website} target="_blank">
              <div className="event_date">
								<span className="fa fa-link"></span>
              </div>
              </a>
            </div>
            <div className="em-event-content-area_adn ">

              <div className="event-page-title_adn ">
                <h2><Scrollchor to={anchor} animate={{offset: -150, duration: 300}}>{this.truncateTitle(church.title)}</Scrollchor></h2>
                <div className="astute-event-meta-left_adn">
                  <span><i className="fa fa-map-marker"></i>{church.city}</span>
                </div>
                <div className="astute-event-meta-right_adn">
                  <span><Scrollchor to={anchor} animate={{offset: -150, duration: 300}}>See more info <i className="fa fa-info-circle"></i></Scrollchor></span>
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
        <div className="event_area">
      		<div className="container">
      			<div className="row">
              {this.initializeChurchPhotos()}
      			</div>
      		</div>
      	</div>

        <Divider />

        <div className="container" style={{
          padding: '30px 0 100px'
        }}>
          {this.initializeChurchPanels()}
        </div>
      </div>
    )
  }

}

export default ChurchesPage

export const query = graphql`
  query ChurchQuery {
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
