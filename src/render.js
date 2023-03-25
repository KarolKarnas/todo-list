import { projects } from './projects';
import { submitButton, editButton } from './logic';

//current edit todo coordinates in global scope
let currentEditTodoIndex;
let currentEditProjectIndex;

//GLOBAL
// SELECT VARIABLES
const main = document.querySelector('#main');

const ulNav = document.querySelector('#ul-nav');
const liAllProjects = document.querySelector('#all-projects');

let allLi = ulNav.querySelectorAll('li');

// CREATE MAIN CONTENT

const title = document.createElement('h1');
title.classList.add('project-title-header');
title.textContent = 'All Todo';
main.appendChild(title);

const todoContainer = document.createElement('div');
todoContainer.classList.add('todo-container');
main.appendChild(todoContainer);

const ulTodoList = document.createElement('ul');
ulTodoList.classList.add('todo-list');
todoContainer.appendChild(ulTodoList);

//CREATE TODO
function createTodo(projectIndex) {
	// let projectIndex = 0;

	projects[projectIndex].todo.forEach((todo) => {
		//li element for every todo
		const todoSingle = document.createElement('li');
		todoSingle.classList.add('todo-single');
		ulTodoList.appendChild(todoSingle);

		//design columns in single list
		const col1 = document.createElement('div');
		col1.classList.add('col-1');
		todoSingle.appendChild(col1);

		const col2 = document.createElement('div');
		col2.classList.add('col-2');
		todoSingle.appendChild(col2);

		const col3 = document.createElement('div');
		col3.classList.add('col-3');
		todoSingle.appendChild(col3);

		//content col1

		const todoCheck = document.createElement('input');
		todoCheck.setAttribute('type', 'checkbox');
		todoCheck.classList.add('checkbox');
		todoCheck.checked = todo.checklist;
		if (todo.checklist === true) {
			todoSingle.classList.add('todo-done');
		}
		todoCheck.addEventListener('click', () => {
			todoSingle.classList.toggle('todo-done');
		});
		col1.appendChild(todoCheck);

		//content col2

		const todoTitle = document.createElement('div');
		todoTitle.classList.add('todo-title');
		todoTitle.textContent = todo.title;
		col2.appendChild(todoTitle);

		const todoProjectName = document.createElement('div');
		todoProjectName.classList.add('todo-project-name');
		todoProjectName.textContent = projects[projectIndex].name;
		col2.appendChild(todoProjectName);

		const todoDescription = document.createElement('div');
		todoDescription.classList.add('todo-description');
		todoDescription.textContent = todo.description;
		col2.appendChild(todoDescription);

		const todoPriority = document.createElement('div');
		todoPriority.classList.add('todo-priority');
		switch (todo.priority) {
			case 'Priority 1':
				todoPriority.classList.add('todo-priority-1');
				break;
			case 'Priority 2':
				todoPriority.classList.add('todo-priority-2');
				break;
			case 'Priority 3':
				todoPriority.classList.add('todo-priority-3');
				break;
			case 'Priority 4':
				todoPriority.classList.add('todo-priority-4');
				break;
		}
		todoPriority.textContent = todo.priority;
		col2.appendChild(todoPriority);

		//content col3

		const todoDate = document.createElement('input');
		todoDate.setAttribute('type', 'date');
		todoDate.value = todo.dueDate;
		todoDate.setAttribute('disabled', true);
		col3.appendChild(todoDate);

		const todoIconsContainer = document.createElement('div');
		todoIconsContainer.classList.add('todo-icons-container');
		col3.appendChild(todoIconsContainer);
		//EDIT ICON
		const todoIconEdit = document.createElement('i');
		todoIconEdit.textContent = 'edit';
		todoIconEdit.classList.add('material-symbols-outlined', 'todo-icon-edit');
		//################
		todoIconEdit.addEventListener('click', () => {
			// const modal2 = document.getElementById('modal');
			editButton.style.display = 'inherit';
			openModal(modal);
			populateInputValues(projectIndex, todo);
			currentEditProjectIndex = projectIndex;
			currentEditTodoIndex = projects[projectIndex].todo.indexOf(todo);
			

		});
		todoIconsContainer.appendChild(todoIconEdit);
		//DELETE ICON
		const todoIconDelete = document.createElement('i');
		todoIconDelete.textContent = 'delete';
		todoIconDelete.classList.add(
			'material-symbols-outlined',
			'todo-icon-delete'
		);
		todoIconDelete.addEventListener('click', () => {
			currentEditProjectIndex = projectIndex;
			currentEditTodoIndex = projects[projectIndex].todo.indexOf(todo);
			deleteCurrentTodo(currentEditProjectIndex, currentEditTodoIndex);
			clearMainTodoList();
			createMainAllTodo();
			// console.log(currentDeleteTodoIndex);
			// console.log(projects);
		});
		todoIconsContainer.appendChild(todoIconDelete);
	});
}

// render all todos

function createMainAllTodo() {
	projects.forEach((element, index) => {
		createTodo(index);
	});
}

// clear main

function clearMainTodoList() {
	// ulTodoList.innerHTML = '';
	while (ulTodoList.firstChild) {
		ulTodoList.removeChild(ulTodoList.firstChild);
	}
}

// class toggle on nav

function selectAllLi() {
	allLi = ulNav.querySelectorAll('li');
}

function removeLiActive() {
	allLi.forEach((element) => {
		element.classList.remove('li-active');
	});
}

function addToggleClassOnLi() {
	allLi.forEach((element) => {
		element.addEventListener('click', (e) => {
			removeLiActive();
			// element.classList.remove('li-active');
			e.target.classList.add('li-active');
			// console.log(e.target);
		});
	});
}

// create navigation projects li with listeners

function createProjectsList() {
	projects.forEach((proj, index) => {
		const projectItemMenu = document.createElement('li');
		projectItemMenu.textContent = proj.name;
		projectItemMenu.classList.add('new-project');
		liAllProjects.insertAdjacentElement('afterend', projectItemMenu);
		// toggle class active
		selectAllLi();
		addToggleClassOnLi();

		// render content with according index number
		projectItemMenu.addEventListener('click', () => {
			// console.log(index, proj.name);
			title.textContent = proj.name;
			clearMainTodoList();
			createTodo(index);
			// renderMain()
			// title - proj.name
			// todo - foreach of index
		});
	});
}

// Event listener for ALL Todo li - render all todos

const allTodoLi = document.querySelector('#li-all-todo');
allTodoLi.addEventListener('click', () => {
	clearMainTodoList();
	createMainAllTodo();
});

// clear Project list navigation

function clearProjectsList() {
	const allNewProject = document.querySelectorAll('.new-project');
	// console.log(allNewProject);
	allNewProject.forEach((proj) => {
		proj.remove();
	});
}

// add remove active on li items

// allLi.forEach(element => {
// 	element.addEventListener('click', () => {
// 		element.classList.add('li-active');
// 	})

// selectAllLi()

// MODAL

// const openModalButtons = document.querySelectorAll('[data-modal-target]');
// const closeModalButtons = document.querySelectorAll('[data-close-button]');
// const overlay = document.getElementById('overlay');

// openModalButtons.forEach((button) => {
// 	button.addEventListener('click', () => {
// 		const modal = document.querySelector(button.dataset.modalTarget);
// 		submitButton.style.display = 'inherit';
// 		openModal(modal);
// 	});
// });

// overlay.addEventListener('click', () => {
// 	const modals = document.querySelectorAll('.modal.active');
// 	modals.forEach((modal) => {
// 		closeModal(modal);
// 	});
// });

// closeModalButtons.forEach((button) => {
// 	button.addEventListener('click', () => {
// 		const modal = button.closest('.modal');
// 		closeModal(modal);
// 	});
// });

// function openModal(modal) {
// 	if (modal == null) return;
// 	modal.classList.add('active');
// 	overlay.classList.add('active');
// }

// function closeModal(modal) {
// 	if (modal == null) return;
// 	submitButton.style.display = 'none';
// 	editButton.style.display = 'none';
// 	clearInputs();
// 	modal.classList.remove('active');
// 	overlay.classList.remove('active');
// }

// project name radio buttons

// function getValue() {
// 	const val = document.getElementById('project-name').value;
// 	console.log(val);
// }

const radioButtonsProject = document.querySelectorAll('[name="projectOption"]');

//containers for input
const projectNameDiv = document.getElementById('projectNameDiv');
const selectProjectDiv = document.getElementById('selectProjectDiv');

//input radio button
const radioNewProject = document.getElementById('projectNameOption');

const radioExistingProject = document.getElementById('selectProjectOption');

// input new project or select existing one
const inputNewProject = document.getElementById('project-name');
const inputSelectProject = document.getElementById('selectProject');

//hide element depend on which radio button

radioButtonsProject.forEach((radio) => {
	radio.addEventListener('change', function () {
		if (this.value === 'project-name') {
			projectNameDiv.style.display = 'block';
			selectProjectDiv.style.display = 'none';
		} else if (this.value === 'selectProject') {
			projectNameDiv.style.display = 'none';
			selectProjectDiv.style.display = 'block';
		}
	});
});

// create options from existing projects

const createExistingProjectsModal = function () {
	projects.forEach((proj) => {
		let newOption = document.createElement('option');
		newOption.textContent = proj.name;
		newOption.setAttribute('value', `${proj.name}`);
		inputSelectProject.appendChild(newOption);
	});
};

// clear options with projects in modal

const clearExistingProjectsModal = function () {
	while (inputSelectProject.firstChild) {
		inputSelectProject.removeChild(inputSelectProject.firstChild);
	}
};

// variables for read modal

const inputTitle = document.getElementById('todo-title');
const inputDescription = document.getElementById('description');
const inputDueDate = document.getElementById('dueDate');
const inputPriority = document.getElementById('priority');

// clear modal inputs

const clearInputs = function () {
	inputNewProject.value = '';
	inputTitle.value = '';
	inputDescription.value = '';
	inputDueDate.value = '';
	inputPriority.value = 'Priority 1';
};

function populateInputValues(projIndex, todo) {
	inputNewProject.value = projects[projIndex].name;
	inputSelectProject.value = projects[projIndex].name;
	inputTitle.value = todo.title;
	inputDescription.value = todo.description;
	inputDueDate.value = todo.dueDate;
	inputPriority.value = todo.priority;
}

// function deleteCurrentTodo(projIndex, todo) {
// 	let currentDeleteTodoIndex = projects[projIndex].todo.indexOf(todo);
// 	projects[projIndex].todo.splice(currentDeleteTodoIndex, 1);
// }
function deleteCurrentTodo(projIndex, todoIndex) {
	projects[projIndex].todo.splice(todoIndex, 1);
}

export {
	createTodo,
	createProjectsList,
	clearProjectsList,
	createMainAllTodo,
	clearMainTodoList,
	createExistingProjectsModal,
	clearExistingProjectsModal,

	deleteCurrentTodo,
	clearInputs,
	// closeModal,
	radioButtonsProject,
	selectProjectDiv,
	inputNewProject,
	inputSelectProject,
	radioNewProject,
	radioExistingProject,
	inputTitle,
	inputDescription,
	inputDueDate,
	inputPriority,

	currentEditTodoIndex,
	currentEditProjectIndex

};
