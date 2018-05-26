// ##############################
// // // HeaderLinks styles
// #############################

import { gutters } from '../theme';


const style = theme => ({
  map: {
    marginTop: '25px',
    paddingLeft: gutters,
    paddingRight: gutters,
  },
  placeImage: {
    backgroundImage: 'url(../images/place.png)',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    backgroundOrigin: 'border-box',
    paddingTop: '100%',
  },
  banner: {
    backgroundImage: 'url(../images/background.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundOrigin: 'border-box',
    height: '100vh',
  },
  gutters: {
    paddingLeft: gutters,
    paddingRight: gutters,
  },
  paperRoot: {
    marginTop: '10px',
    marginBottom: '10px',
    padding: '10px',
  },
  mapDiv: {
    width: '100%',
    height: '400px',
  },
  place: {
    marginTop: '25px',
    paddingLeft: gutters,
    paddingRight: gutters,
  },
});

export default style;
