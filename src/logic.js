import { projects } from './projects';
import {
	selectProject,
	radioButtonsProject,
	selectProjectDiv,
	projectNameInput,
	radioNewProject,
	radioExistingProject,
} from './render';

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
	// if (projectNameInput.dataset.check === 'new') {
	// 	projects.push(projectNameInput.value);
	// } else if (selectProject.dataset.check === 'select') {
	//     console.log('select');
	// }

	if (radioNewProject.checked) {
		console.log('new project');
	} else if (radioExistingProject.checked) {
		console.log('existing project');
	}
	console.table(projects);
	e.preventDefault();
});

// console.log(radioButtonsProjectOptions);
// console.log(selectProject);

export {};
