import React from 'react';
// import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './Product.css';

const Map = withScriptjs(withGoogleMap((props) => (
  <Paper className="productDetailPaper" elevation={2}>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
  </Paper>
)));

export default Map;
