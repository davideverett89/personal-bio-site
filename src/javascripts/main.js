import '../styles/main.scss';
import 'bootstrap';
import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import projectCards from './components/projectCards/projectCards';

import bucketData from './helpers/data/bucketData';


const navbarClickEvents = () => {
  $('body').on('click', '#navToBio', () => {
    $('#techSection').addClass('hide');
    $('#projectSection').addClass('hide');
    $('#bioSection').removeClass('hide');
  });

  $('body').on('click', '#navToTechnologies', () => {
    $('#bioSection').addClass('hide');
    $('#projectSection').addClass('hide');
    $('#techSection').removeClass('hide');
  });

  $('body').on('click', '#navToProjects', () => {
    $('#bioSection').addClass('hide');
    $('#techSection').addClass('hide');
    $('#projectSection').removeClass('hide');
  });
};

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  navbarClickEvents();
  $('body').on('click', '#downloadResume', bucketData.downloadResume);
  projectCards.createProjectCards();
};

init();
