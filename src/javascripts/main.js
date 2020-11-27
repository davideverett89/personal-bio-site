import '../styles/main.scss';
import 'bootstrap';
import projectCards from './components/projectCards/projectCards';

// const hoverEvents = () => {
//   $('.tech').hide();
//   $('#technologiesPage').hover(() => {
//     $('.tech').toggle('slow');
//   });
// };

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

const scrollEvents = () => {
  const checkScroll = () => {
    const startY = $('#nav-main').height() * 2;

    if ($(window).scrollTop() > startY) {
      $('#nav-main').addClass('scrolled');
    } else {
      $('#nav-main').removeClass('scrolled');
    }
  };

  if ($('#nav-main').length > 0) {
    $(window).on('scroll load resize', () => {
      checkScroll();
    });
  }
};

const init = () => {
  $('#bioSection').hide();
  projectCards.createProjectCards();
  // hoverEvents();
  scrollEvents();
  navbarClickEvents();
};

init();
