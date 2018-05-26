// ##############################
// // // HeaderLinks styles
// #############################

import { headerColor, headerBackgroundColor, gutters } from '../theme';


const headerStyle = theme => ({
  appbar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  toolbar: {
  },
  headerLink: {
    color: headerColor,
    textDecoration: 'none',
    '& span': {
      color: headerColor,
    },
  },
  gutters: {
    paddingLeft: gutters,
    paddingRight: gutters,
  },
  rootExtended: {
    backgroundColor: headerBackgroundColor,
    transition: 'background-color 0.5s ease-in-out',
  },
});

export default headerStyle;
