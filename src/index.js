import { createTodo, createProjectsList,createMainAllTodo, createExistingProjectsModal }  from './render';
import { } from './logic'

import App from './modules/App';

createMainAllTodo();
createProjectsList();
createExistingProjectsModal();

const app = new App()


