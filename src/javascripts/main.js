import '../styles/main.scss';
import 'bootstrap';
import projectCards from './components/projectCards/projectCards';

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
  projectCards.createProjectCards();
  navbarClickEvents();
};

init();
