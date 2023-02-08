import { projects, ulAllProjects } from './projects';

// create navigation projects

function createProjectsList() {
	projects.forEach((proj) => {
		const projectItemMenu = document.createElement('li');
		projectItemMenu.textContent = proj.name;
		// console.log(projectItemMenu);
		ulAllProjects.appendChild(projectItemMenu);
	});
}

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
modals.forEach (modal => {
    closeModal(modal)
})
})

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


export default createProjectsList;
