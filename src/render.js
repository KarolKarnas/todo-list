import { projects } from './projects';

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

		//content col3

		const todoDate = document.createElement('input');
		todoDate.setAttribute('type', 'date');
		col3.appendChild(todoDate);

		const todoIconsContainer = document.createElement('div');
		todoIconsContainer.classList.add('todo-icons-container');
		col3.appendChild(todoIconsContainer);

		const todoIconEdit = document.createElement('i');
		todoIconEdit.textContent = 'edit';
		todoIconEdit.classList.add('material-symbols-outlined', 'todo-icon-edit');
		todoIconsContainer.appendChild(todoIconEdit);

		const todoIconDelete = document.createElement('i');
		todoIconDelete.textContent = 'delete';
		todoIconDelete.classList.add(
			'material-symbols-outlined',
			'todo-icon-delete'
		);
		todoIconsContainer.appendChild(todoIconDelete);
	});
}

// render all todos

function createALlTodo() {
	projects.forEach((element, index) => {
		createTodo(index);
	});
}

// clear main

function clearTodoList() {
	// ulTodoList.innerHTML = '';
	while (ulTodoList.firstChild) {
		ulTodoList.removeChild(ulTodoList.firstChild);
	}
}

// class toggle on nav

function selectAllLi() {
	allLi = ulNav.querySelectorAll('li')
}

function removeLiActive() {
	allLi.forEach(element => {
		element.classList.remove('li-active');
	});
}

function addToggleClassOnLi() {
allLi.forEach((element) => {
	element.addEventListener('click', (e) => {
		removeLiActive()
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
		liAllProjects.insertAdjacentElement('afterend', projectItemMenu);
		// toggle class active
		selectAllLi()
		addToggleClassOnLi()

		// render content with according index number
		projectItemMenu.addEventListener('click', () => {
			// console.log(index, proj.name);
			title.textContent = proj.name;
			clearTodoList();
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
	clearTodoList();
	createALlTodo();
});

// add remove active on li items

// allLi.forEach(element => {
// 	element.addEventListener('click', () => {
// 		element.classList.add('li-active');
// 	})

// selectAllLi()

// MODAL

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const modal = document.querySelector(button.dataset.modalTarget);
		openModal(modal);
	});
});

overlay.addEventListener('click', () => {
	const modals = document.querySelectorAll('.modal.active');
	modals.forEach((modal) => {
		closeModal(modal);
	});
});

closeModalButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const modal = button.closest('.modal');
		closeModal(modal);
	});
});

function openModal(modal) {
	if (modal == null) return;
	modal.classList.add('active');
	overlay.classList.add('active');
}

function closeModal(modal) {
	if (modal == null) return;
	modal.classList.remove('active');
	overlay.classList.remove('active');
}

export { createTodo, createProjectsList, createALlTodo };
