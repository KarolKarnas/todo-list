import Project from './Project';
import Todo from './Todo';
import TodoProjectsTracker from './TodoProjectTracker';

class App {
	constructor() {
		this._tracker = new TodoProjectsTracker();
		this._loadModal();
		this._tracker.loadTodos();
		this._tracker._displayProjectMenu();
		//     this._tracker.addTodo(new Todo)
		console.log(this._tracker);

		document
			.querySelector('#submit-btn')
			.addEventListener('click', this._newTodo.bind(this));
	}
	_loadModal() {
		document.querySelectorAll('[data-modal-target]').forEach((button) => {
			button.addEventListener('click', () => {
				const modal = document.querySelector(button.dataset.modalTarget);
				// submitButton.style.display = 'inherit';
				this._openModal(modal);
			});
		});
		document.querySelectorAll('[data-close-button]').forEach((button) => {
			button.addEventListener('click', () => {
				const modal = button.closest('.modal');
				this._closeModal(modal);
			});
		});

		document.getElementById('overlay').addEventListener('click', () => {
			const modals = document.querySelectorAll('.modal.active');
			modals.forEach((modal) => {
				this._closeModal(modal);
			});
		});

		const radioButtonsProject = document.querySelectorAll(
			'[name="projectOption"]'
		);
		const projectNameDiv = document.getElementById('projectNameDiv');
		const selectProjectDiv = document.getElementById('selectProjectDiv');

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
	}

	_openModal(modal) {
		if (modal == null) return;
		modal.classList.add('active');
		overlay.classList.add('active');
	}

	_closeModal(modal) {
		if (modal == null) return;
		// submitButton.style.display = 'none';
		// editButton.style.display = 'none';
		this._clearInputs();
		modal.classList.remove('active');
		overlay.classList.remove('active');
	}

	_clearInputs() {
		const inputNewProject = document.getElementById('project-name');
		const inputTitle = document.getElementById('todo-title');
		const inputDescription = document.getElementById('description');
		const inputDueDate = document.getElementById('dueDate');
		const inputPriority = document.getElementById('priority');
		inputNewProject.value = '';
		inputTitle.value = '';
		inputDescription.value = '';
		inputDueDate.value = '';
		inputPriority.value = 'Priority 1';
	}

	_newTodo(e) {
		e.preventDefault();

		const radioNewProject = document.getElementById('projectNameOption');
		const radioExistingProject = document.getElementById('selectProjectOption');
		const inputSelectProject = document.getElementById('selectProject');

		const inputNewProject = document.getElementById('project-name');
		const inputTitle = document.getElementById('todo-title');
		const inputDescription = document.getElementById('description');
		const inputDueDate = document.getElementById('dueDate');
		const inputPriority = document.getElementById('priority');

		const newTodo = new Todo(
			inputTitle.value,
			inputDescription.value,
			inputDueDate.value,
			inputPriority.value
		);

		if (radioNewProject.checked) {
			let newProject = new Project(inputNewProject.value);
			newProject.todo.push(newTodo);

			this._tracker.addProject(newProject);
		} else if (radioExistingProject.checked) {
			this._tracker._projects.forEach((proj, index) => {
				if (proj.name === inputSelectProject.value) {
					this._tracker.addTodoToProject(index, newTodo);
				}

				console.log(this._tracker._projects);
			});
		}
	}
}

export default App;
