// import {
//   Dashboard,
//   Person,
//   Star,
// } from '@material-ui/icons';

import IntroductionPage from './Introduction/Introduction';
import HomePage from './Home/Home';
import LocationPage from './Location/Location';
import FacilityPage from './Facility/Facility';
import FloorPage from './Floor/Floor';
import DeveloperPage from './Developer/Developer';
import ContactPage from './Contact/Contact';

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
    component: FacilityPage,
  },
  {
    title: 'FLOOR AND PLANS',
    path: '/floorandplans',
    component: FloorPage,
  },
  {
    title: 'DEVELOPER',
    path: '/developer',
    component: DeveloperPage,
  },
  {
    title: 'CONTACT US',
    path: '/contact',
    component: ContactPage,
  },
  // { redirect: true, path: '/', path: '/admin', navbarName: 'Redirect' }
];

export default paths;
