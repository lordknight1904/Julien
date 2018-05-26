// import {
//   Dashboard,
//   Person,
//   Star,
// } from '@material-ui/icons';

import IntroductionPage from './Introduction/Introduction';
import HomePage from './Home/Home';
import LocationPage from './Location/Location';

const paths = [
  {
    path: '/',
    title: '',
    exact: true,
    component: HomePage,
  },
  {
    path: '/introduction',
    title: 'INTRODUCTION',
    component: IntroductionPage,
  },
  {
    title: 'LOCATION',
    path: '/location',
    component: LocationPage,
  },
  {
    title: 'FACILITIES',
    path: '/facilities',
    component: IntroductionPage,
  },
  {
    title: 'FLOOR AND PLANS',
    path: '/floorandplans',
    component: IntroductionPage,
  },
  {
    title: 'DEVELOPER',
    path: '/developer',
    component: IntroductionPage,
  },
  {
    title: 'RESALE AND LEASING',
    path: '/resaleandleasing',
    component: IntroductionPage,
  },
  {
    title: 'CONTACT US',
    path: '/contact',
    component: IntroductionPage,
  },
  // { redirect: true, path: '/', path: '/admin', navbarName: 'Redirect' }
];

export default paths;
