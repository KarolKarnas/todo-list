import { projects } from './projects';
import {
	createMainAllTodo,
    clearMainTodoList,

	createProjectsList,
	clearProjectsList,

	createExistingProjectsModal,
	clearExistingProjectsModal,

	clearInputs,
	radioButtonsProject,
	selectProjectDiv,
	radioNewProject,
	radioExistingProject,
	closeModal,
	
	inputNewProject,
	inputSelectProject,

	inputTitle,
	inputDescription,
	inputDueDate,
	inputPriority,
} from './render';




//create project factory

const createProject = (name) => {
	return { name, todo: [] };
};

// const testProject = createProject('test Project');
// console.log(testProject);

// create todo factory

const createTodo = (
	title,
	description,
	dueDate,
	priority,
	
) => {
	return { title, description, dueDate, priority, checklist: false };
};

// let testTodo = createTodo('brush', 'exactly', 'Maintenance');
// console.log(testTodo);
// pushTodo(2, testTodo);


// submit button
const submitButton = document.querySelector('#submit-btn');

submitButton.addEventListener('click', (e) => {
	let newTodo = createTodo(inputTitle.value,
		inputDescription.value,
		inputDueDate.value,
		inputPriority.value)
	
	if (radioNewProject.checked) {
		// let projectName = inputNewProject.value
		let newProject = createProject(inputNewProject.value);
		newProject.todo.push(newTodo);
		projects.push(newProject);



	} else if (radioExistingProject.checked) {
		projects.forEach((element, index) => {
			if (element.name === inputSelectProject.value) {
				projects[index].todo.push(newTodo);
			}
		});
	}
	console.table(projects);
    clearMainTodoList();
	createMainAllTodo();

	clearProjectsList();
	createProjectsList();

	clearExistingProjectsModal();
	createExistingProjectsModal();

	clearInputs();

	closeModal(modal);
	e.preventDefault();
});

// edit button
const editButton = document.querySelector('#edit-btn');


// console.log(radioButtonsProjectOptions);
// console.log(inputSelectProject);

export { submitButton, editButton };
