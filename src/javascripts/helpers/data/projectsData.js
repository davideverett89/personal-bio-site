import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const projectsObj = response.data;
      const projects = [];
      Object.keys(projectsObj).forEach((projectId) => {
        projectsObj[projectId].id = projectId;
        projects.push(projectsObj[projectId]);
      });
      resolve(projects);
    })
    .catch((err) => reject(err));
});

export default { getProjects };
