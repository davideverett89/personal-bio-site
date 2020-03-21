import utils from '../helpers/utils';
import projectsData from '../helpers/data/projectsData';

const createProjectCards = () => {
  const projects = projectsData.getProjects();
  let domString = '';
  projects.forEach((project) => {
    if (project.available) {
      domString += '<div class="card-divider col-4">';
      domString += '<div class="my-card d-flex flex-column justify-content-between align-items-center">';
      domString += `<img class="my-img" src="${project.screenshot}" alt="${project.title}">`;
      domString += '<div class="my-content">';
      domString += `<h5><b>${project.title}</b></h5>`;
      domString += `<p class="flex-grow-1">${project.description}</p>`;
      domString += `<p>Technologies Used: ${project.technologiesUsed}</p>`;
      domString += '<div class="d-flex justify-content-center align-items-center">';
      domString += `<p><a href="${project.url}">Project Link</a></p>`;
      domString += `<p><a href="${project.githubUrl}">GitHub Link</a></p>`;
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
    }
  });
  utils.printToDOM('projectsPage', domString);
};

export default { createProjectCards };
