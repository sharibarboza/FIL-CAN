import React from 'react'
import Link from 'gatsby-link'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Geocode from "react-geocode"

class MapPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: []
    };
    this.mapKey = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA7KWXIvtfn2bgrIVL3FGXBpnPR8YQMXAk&v=3.exp&libraries=geometry,drawing,places";
    Geocode.setApiKey("AIzaSyA7KWXIvtfn2bgrIVL3FGXBpnPR8YQMXAk");
    this.getGeocode();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  getGeocode() {
    const self = this;

    if (this.props.address == undefined) {
      return;
    }

    Geocode.fromAddress(this.props.address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        let res = {
          'lat': lat,
          'lng': lng
        }

        self.setState({
          location: res
        });
      },
      error => {
        console.error(error);
      }
    );
  }

  render() {

    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: this.state.location.lat, lng: this.state.location.lng }}
      >
        {props.isMarkerShown && <Marker position={{ lat: this.state.location.lat, lng:this.state.location.lng }} />}
      </GoogleMap>
    ));

    return (
      <div className="blog-left-side church-panel">
        <div className="widget widget_categories" style={{
          width: '100%'
        }}>
          <h2 className="widget-title"><i className="fa fa-calendar"></i> {this.props.heading}</h2>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li className="cat-item" style={{
                  lineHeight: '30px'
                }}>
                  {this.props.body}
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
    )
  }
}

export default MapPanel
