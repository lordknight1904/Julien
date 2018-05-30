// ##############################
// // // HeaderLinks styles
// #############################

import { gutters } from '../theme';


const style = theme => ({
  infoImage: {
    backgroundImage: 'url(../images/facility.png)',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundOrigin: 'border-box',
    height: `calc(100vh - ${(gutters + 10) * 2}px)`,
    marginBottom: '20px',
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
  floor: {
    marginTop: '25px',
    paddingLeft: gutters,
    paddingRight: gutters,
  },
  button: {
    marginBottom: gutters,
  },
});

export default style;
