import firebase from 'firebase/app';

import Auth from './components/Auth/Auth';
import Birfday from './components/Birfday/Birfday';

import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  Auth.authStringBuilder();
  Birfday.birfdayStringBuilder();
};

init();
