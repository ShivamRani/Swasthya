import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


class MapContainer extends Component {
    render() {
        const style = {
            width: "770px",
            height: "450px",
            };
            const markerPosition1 = {
                lat: 31.396133,
                lng: 75.537002,
              };
          const markerPosition2 = {
            lat:31.394246,
            lng:75.537565,
          };
          const markerPosition3 = {
            lat:31.367239,
            lng:75.548961,
          };
          const markerPosition4 = {
            lat:31.368478,
            lng:75.563275,
          };
      return (
        <Map
        google={this.props.google}
        zoom={18}
        style={style}
        initialCenter={markerPosition1}
      >
        <Marker position={markerPosition1} />
        <Marker position={markerPosition2} />
        <Marker position={markerPosition3} />
        <Marker position={markerPosition4} />
      </Map>
      );
    }
  }

  export default GoogleApiWrapper({
  apiKey: "AIzaSyDM3RzuBsLK0mc7XV-7lG34zzkgrRHY088",
})(MapContainer)