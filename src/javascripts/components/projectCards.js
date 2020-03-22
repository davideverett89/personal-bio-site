import utils from '../helpers/utils';
import projectsData from '../helpers/data/projectsData';

const createProjectCards = () => {
  const projects = projectsData.getProjects();
  let domString = '';
  projects.forEach((project) => {
    if (project.available) {
      domString += '<div class="card-divider col-4">';
      domString += `  <div id="${project.id}" class="my-card p-1 d-flex flex-column justify-content-between align-items-center">`;
      domString += `    <img class="my-img" src="${project.screenshot}" alt="${project.title}">`;
      domString += '    <div class="d-flex flex-column justify-content-between my-content flex-grow-1">';
      domString += `      <h5 class="mt-1"><b>${project.title}</b></h5>`;
      domString += `      <p class="description">${project.description}</p>`;
      domString += '      <hr>';
      domString += `      <p><small>Technologies Used: ${project.technologiesUsed}</small></p>`;
      domString += '      <div class="m-1 d-flex justify-content-center align-items-center">';
      domString += `        <p class="pl-3 pr-3 m-2 border-right border-left"><a href="${project.url}">Project Link</a></p>`;
      domString += `        <p class="pl-3 pr-3 m-2 border-right border-left"><a href="${project.githubUrl}">GitHub Link</a></p>`;
      domString += '      </div>';
      domString += '    </div>';
      domString += '  </div>';
      domString += '</div>';
    }
  });
  utils.printToDOM('projectsPage', domString);
};

export default { createProjectCards };
