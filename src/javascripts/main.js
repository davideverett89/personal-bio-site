import '../styles/main.scss';
import 'bootstrap';
import projectCards from './components/projectCards/projectCards';

// const hoverEvents = () => {
//   $('.tech').hide();
//   $('#technologiesPage').hover(() => {
//     $('.tech').toggle('slow');
//   });
// };

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
  projectCards.createProjectCards();
  // hoverEvents();
  scrollEvents();
};

init();
