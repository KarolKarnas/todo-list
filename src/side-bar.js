import { projects, ulAllProjects } from './projects';

function createProjectsList() {

projects.forEach((proj) => {
    const projectItemMenu = document.createElement('li');
    projectItemMenu.textContent = proj.name;
    // console.log(projectItemMenu);
    ulAllProjects.appendChild(projectItemMenu);
})

}

export default createProjectsList;
