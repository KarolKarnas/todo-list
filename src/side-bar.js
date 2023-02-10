import { projects, ulAllProjects, title } from './projects';

// create navigation projects with listeners

function createProjectsList() {
	projects.forEach((proj, index) => {
		const projectItemMenu = document.createElement('li');
		projectItemMenu.textContent = proj.name;
		ulAllProjects.appendChild(projectItemMenu);
		
		projectItemMenu.addEventListener('click', () => {
			console.log(index, proj.name);
			title.textContent = proj.name;
			// clearMain()
			// renderMain()
			// title - proj.name
			// todo - foreach of index
		})
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
