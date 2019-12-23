import React,{Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
class MapDisplayed extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
           
        </InfoWindow>
      </Map>

    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBFk0en4C-_1f1H-HYX-39gScCqobRNCo4")
})(MapDisplayed)