import { projects } from './projects';
import {
	createProjectsList,
	createALlTodo,
    clearTodoList,
	radioButtonsProject,
	selectProjectDiv,
	inputNewProject,
	inputSelectProject,
	radioNewProject,
	radioExistingProject,
	closeModal,
} from './render';

const createProject = (name, todo) => {
	return { name, todo };
};

const createTodo = (
	title,
	description,
	projectName,
	dueDate,
	priority,
	checked
) => {
	return { title, description, projectName, dueDate, priority, checked };
};

let testTodo = createTodo('brush', 'exactly', 'Maintenance');
console.log(testTodo);
// pushTodo(2, testTodo);

// submit button

let submitButton = document.querySelector('#submit-btn');

submitButton.addEventListener('click', (e) => {
	if (radioNewProject.checked) {
        let projectName = inputNewProject.value
		// let newProject = createProject(projectName, todo);
        // console.log(newProject);
		// projects.push(newProject);
		// console.log(inputNewProject.value);
	} else if (radioExistingProject.checked) {
		projects.forEach((element, index) => {
			if (element.name === inputSelectProject.value) {
				projects[index].todo.push(testTodo);
			}
		});
	}
	console.table(projects);
    clearTodoList();
	createALlTodo();
	createProjectsList();
	closeModal(modal);
	e.preventDefault();
});

// console.log(radioButtonsProjectOptions);
// console.log(inputSelectProject);

export {};
