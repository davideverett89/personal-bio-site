import '../styles/main.scss';
import 'bootstrap';
import projectCards from './components/projectCards/projectCards';

// const hoverEvents = () => {
//   $('.tech').hide();
//   $('#technologiesPage').hover(() => {
//     $('.tech').toggle('slow');
//     $('#tech-header').toggleClass('underline');
//   });
// };

const init = () => {
  projectCards.createProjectCards();
  // hoverEvents();
};

init();
