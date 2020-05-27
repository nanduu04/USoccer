// import React, {Component} from 'react';
// import './App.css';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


// const style = {
//   width: '100%',
//   height: '100%'
// }
// class Maps extends Component {
//   render (){
//     return (
//       <div className="App">
//         <header className="App-header">
         
//           </header>
//           <Map google={this.props.google} 
//           style={style}
//           initialCenter={{
//             lat:  43.6426,
//             lng: -79.3871
//           }} zoom={16}>
            
//           <Marker onClick={this.onMarkerClick}
//                   name={'Current location'} />
   
//           <InfoWindow onClose={this.onInfoWindowClose}>
//               {/* <div>
//                 <h1>{this.state.selectedPlace.name}</h1>
//               </div> */}
//           </InfoWindow>
//         </Map>
        
       
//       </div>
//     );

//   }
 
// }


// // Add your own API Key
// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyBhoIICyXP7RGihA84YoU29VAiG5ZvQssY")
// })(Maps)
