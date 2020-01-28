import React, { Component } from "react";
import { Map,Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
   
  center = {
    lat: 27.95,
    lng: 78.39
  };
  componentDidUpdate(e) {
    // console.log(e)
  }
  render() {
    return (
      <Map google={this.props.google} initialCenter={this.center} zoom={5}>
        <Marker
          position={{
            lat: this.props.place.center.latitude,
            lng: this.props.place.center.longitude
          }}
        />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAAr72wA5Am-wFBUwYlwL9JFBhCNl9QXx8"
})(MapContainer);
