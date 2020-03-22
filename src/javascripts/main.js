import '../styles/main.scss';
import 'bootstrap';
import projectCards from './components/projectCards';

const hoverEvents = () => {
  $('.nav-bar-ul').hide();
  $('#nav-main').hover(() => {
    $('.nav-bar-ul').toggle('slow');
  });

  $('.tech').hide();
  $('#technologiesPage').hover(() => {
    $('.tech').toggle('slow');
  });

  $('.my-card').mouseenter((e) => {
    const cardId = e.target.closest('.my-card').id;
    $(`#${cardId}`).css('opacity', '1');
  });

  $('.my-card').mouseleave((e) => {
    const cardId = e.target.closest('.my-card').id;
    $(`#${cardId}`).css('opacity', '0.5');
  });
};

const init = () => {
  projectCards.createProjectCards();
  hoverEvents();
};

init();
