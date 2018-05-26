// ##############################
// // // HeaderLinks styles
// #############################

import { gutters } from '../theme';


const headerStyle = theme => ({
  licenseImage: {
    backgroundImage: 'url(../images/license.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    backgroundOrigin: 'border-box',
    paddingTop: '30%',
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
  overview: {
    marginTop: '25px',
    paddingLeft: gutters,
    paddingRight: gutters,
  },
  paperRoot: {
    marginTop: '10px',
    marginBottom: '10px',
    padding: '10px',
  },
});

export default headerStyle;
