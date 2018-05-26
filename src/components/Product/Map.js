import React from 'react';
import { Paper } from '@material-ui/core';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './Product.css';

const Map = withScriptjs(withGoogleMap((props) => (
  <Paper className="productDetailPaper" elevation={2}>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      {props.isMarkerShown && <Marker position={props.pos} />}
    </GoogleMap>
  </Paper>
)));

export default Map;
