import React from 'react'
import Link from 'gatsby-link'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { compose, withProps } from 'recompose'
import Geocode from "react-geocode"

import loader from '../images/loading.gif';

class MapPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lng: 0,
      component: <div className="map-loader"><img src={loader} /></div>,
      loaded: false
    };
    this.mapKey = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA7KWXIvtfn2bgrIVL3FGXBpnPR8YQMXAk&v=3.exp&sensor=false&libraries=geometry,drawing,places";
  }

  componentDidMount() {
    Geocode.setApiKey("AIzaSyA7KWXIvtfn2bgrIVL3FGXBpnPR8YQMXAk");

    this.interval = setInterval(() => {
      if (this.state.loaded) {
        this.stop();
      } else {
        this.getGeocode();
      }
    }, 1000);
  }

  componentWillMount() {
    this.stop();
  }

  componentWillUnmount() {
    this.stop();
  }

  stop() {
    clearInterval(this.interval);
  }

  getGeocode() {
    const self = this;

    if (this.props.address == undefined) {
      return;
    }

    Geocode.fromAddress(this.props.address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        const MyMapComponent = withScriptjs(withGoogleMap((props) =>
          <GoogleMap
            defaultZoom={13}
            defaultCenter={{ lat: this.state.lat, lng: this.state.lng }}
          >
            {props.isMarkerShown && <Marker position={{ lat: this.state.lat, lng: this.state.lng }} />}
          </GoogleMap>
        ));

        const component = <MyMapComponent
          isMarkerShown
          googleMapURL={this.mapKey}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `200px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />;

        self.setState({
          lat: lat,
          lng: lng,
          component: component,
          loaded: true
        });
      },
      error => {
        console.log(error);
        console.error(error);
      }
    );
  }

  render() {
    return (
      <div className="blog-left-side church-panel">
        <div className="widget widget_categories" style={{
          width: '100%'
        }}>
          <h2 className="widget-title"><i className="fa fa-bookmark"></i>&nbsp; {this.props.heading}</h2>
          <div className="row">
            <div className="col-md-6" style={{ marginBottom: '15px' }}>
              {this.props.body}
            </div>
            <div className="col-md-6">
              {this.state.component}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MapPanel
