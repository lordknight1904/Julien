// ##############################
// // // HeaderLinks styles
// #############################

import { gutters, disclaimerColor, headerBackgroundColor } from '../theme';


const footerStyle = theme => ({
  gutters: {
    paddingLeft: gutters,
    paddingRight: gutters,
  },
  copyRight: {
    color: disclaimerColor,
  },
  disclaimer: {
    color: disclaimerColor,
  },
  footer: {
    backgroundColor: headerBackgroundColor,
  },
  light: {
    backgroundColor: 'grey',
  },
  footerDisclaimer: {
    marginTop: '15px',
    marginBottom: '15px',
  },
  footerCopyright: {
    marginTop: '5px',
    marginBottom: '5px',
    textAlign: 'center',
  },
});

export default footerStyle;
