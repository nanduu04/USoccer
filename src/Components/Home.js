import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class Home extends Component {
  render() {
    return (
        <div> 
             <Map  google={this.props.google}
                    style={style}
                    initialCenter={{
                    lat: 43.6532,
                    lng: -79.3832
          }}
          zoom={9}>          
                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
                <InfoWindow onClose={this.onInfoWindowClose}>
                </InfoWindow>
            </Map>
        </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBFMzc-YC0G6ynIAHw5NQj_9nvnWz70hWM')
})(Home)

const style = {
    width: '100%',
    height: '100%'
  }