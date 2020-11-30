import utils from '../../helpers/utils';
import projectsData from '../../helpers/data/projectsData';
import './projectCards.scss';

const createProjectCards = () => {
  projectsData.getProjects()
    .then((projects) => {
      let domString = '';
      projects.forEach((project) => {
        if (project.available) {
          domString += '<div class="card-divider col-12 col-sm-12 col-md-6 col-lg-12 col-xl-6">';
          domString += '  <div class="card">';
          domString += `    <img class="card-img-top" src="${project.screenshot}" alt="${project.title}">`;
          domString += '    <div class="card-body">';
          domString += `      <h5 class="card-title">${project.title}</h5>`;
          domString += `      <p class="card-text">${project.description}</p>`;
          domString += '    </div>';
          domString += '    <div class="card-footer d-flex justify-content-center align-items-center">';
          domString += `        <span class="badge badge-pill badge-light pl-3 pr-3 m-2 border-right border-left"><a href="${project.url}" target="_blank">Project Link</a></span>`;
          domString += `        <span class="badge badge-pill badge-light pl-3 pr-3 m-2 border-right border-left"><a href="${project.githubUrl}" target="_blank">GitHub Link</a></span>`;
          domString += '    </div>';
          domString += '  </div>';
          domString += '</div>';
        }
      });
      utils.printToDOM('projectsPage', domString);
    })
    .catch((err) => console.error('There is a problem with get projects', err));
};

export default { createProjectCards };
