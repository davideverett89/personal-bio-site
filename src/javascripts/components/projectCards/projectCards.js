import utils from '../../helpers/utils';
import projectsData from '../../helpers/data/projectsData';
import './projectCards.scss';

const createProjectCards = () => {
  projectsData.getProjects()
    .then((projects) => {
      let domString = '';
      projects.forEach((project) => {
        if (project.available) {
          domString += '<div class="card-divider col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">';
          domString += `  <div id="${project.id}" class="text-center my-card pt-1 d-flex flex-column justify-content-center align-items-center">`;
          domString += `    <h5 class="mt-1"><b>${project.title}</b></h5>`;
          domString += '    <div class="card-body d-flex flex-column justify-content-between align-items-center my-content flex-grow-1">';
          domString += '      <div class="px-3">';
          domString += `        <img class="my-1 my-img img-fluid" src="${project.screenshot}" alt="${project.title}">`;
          domString += '      </div>';
          domString += `      <p class="description flex-grow-1 my-1">${project.description}</p>`;
          domString += `      <p><small>Technologies Used: ${project.technologiesUsed}</small></p>`;
          domString += '      <div class="my-2 d-flex justify-content-center align-items-center">';
          domString += `        <span class="badge badge-pill badge-light pl-3 pr-3 m-2 border-right border-left"><a href="${project.url}" target="_blank">Project Link</a></span>`;
          domString += `        <span class="badge badge-pill badge-light pl-3 pr-3 m-2 border-right border-left"><a href="${project.githubUrl}" target="_blank">GitHub Link</a></span>`;
          domString += '      </div>';
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
