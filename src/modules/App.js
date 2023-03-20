import Project from './Project';
import Todo from './Todo';
import TodoProjectsTracker from './TodoProjectTracker';

class App {
	constructor() {
		this._tracker = new TodoProjectsTracker();
		this._loadModal();
		this._tracker.loadTodos();
		this._tracker._createExistingProjectsModal();
		this._tracker._createProjectsList();
		this._tracker._findProjTodoIndex('ca079bdcb9ba2')

		//     this._tracker.addTodo(new Todo)
		// console.log(this._tracker);

		document
			.querySelector('#submit-btn')
			.addEventListener('click', this._newTodo.bind(this));
		document
			.querySelector('#edit-btn')
			.addEventListener('click', this._submitEditTodo.bind(this));

		document
			.getElementById('todo-list')
			.addEventListener('click', this._removeTodo.bind(this));

		document
			.getElementById('todo-list')
			.addEventListener('click', this._editTodo.bind(this));

		document
			.querySelector('#li-all-todo')
			.addEventListener('click', () => this._tracker.loadTodos());

		document
			.getElementById('ul-nav')
			.addEventListener('click', this._toggleActiveLi.bind(this));

		document
			.getElementById('todo-list')
			.addEventListener('click', this._setTodoDone.bind(this));
	}

	_setTodoDone(e) {
		if (e.target.classList.contains('checkbox')) {
			const li = e.target.closest('.todo-single');

			// this._tracker.removeTodo(li.dataset.id);
			// this._tracker.addTodoToProject(index, newTodo);
			li.classList.toggle('todo-done');
			const [projIndex, todoIndex] = this._tracker._findProjTodoIndex(li.dataset.id)

			const newTodo = this._tracker._projects[projIndex].todo[todoIndex]

			newTodo.checklist = !newTodo.checklist

			
			console.log(newTodo.checklist);
			console.log(projIndex, todoIndex, newTodo);

			this._tracker.removeTodo(li.dataset.id)
			this._tracker.addTodoToProject(projIndex, newTodo, todoIndex)

		}

		// console.log(li.dataset.id);
		// save change tracker and Storage
	}
//watch
	_toggleActiveLi(e) {
		if (e.target.classList.contains('li-nav')) {
			const ul = document.getElementById('ul-nav');
			ul.querySelectorAll('li').forEach((li) =>
				li.classList.remove('li-active')
			);
			e.target.classList.add('li-active');
		}
	}
	_loadModal() {
		const submitButton = document.getElementById('submit-btn');
		document.querySelectorAll('[data-modal-target]').forEach((button) => {
			button.addEventListener('click', (e) => {
				const modal = document.querySelector(button.dataset.modalTarget);
				submitButton.style.display = 'inherit';
				this._openModal(modal);
				e.stopPropagation();
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
		const submitButton = document.getElementById('submit-btn');
		const editButton = document.getElementById('edit-btn');
		if (modal == null) return;
		submitButton.style.display = 'none';
		editButton.style.display = 'none';
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
			// newProject.todo.push(newTodo);

			this._tracker.addProject(newProject);
			this._tracker.addTodoToProject(
				this._tracker._projects.length - 1,
				newTodo
			);
		} else if (radioExistingProject.checked) {
			this._tracker._projects.forEach((proj, index) => {
				if (proj.name === inputSelectProject.value) {
					this._tracker.addTodoToProject(index, newTodo);
					// console.log(index);
				}
			});
		}
		this._closeModal(modal);
	}

	_removeTodo(e) {
		if (e.target.classList.contains('todo-icon-delete')) {
			const li = e.target.closest('.todo-single');
			this._tracker.removeTodo(li.dataset.id);
			li.remove();
		}
	}

	_editTodo(e) {
		const editButton = document.getElementById('edit-btn');
		if (e.target.classList.contains('todo-icon-edit')) {
			editButton.style.display = 'inherit';
			this._openModal(modal);
			const li = e.target.closest('.todo-single');
			const todoId = li.dataset.id;

			let todoIndex;
			let todo;
			let projName;
			let currentProjIndex;
			let currentTodoIndex;

			this._tracker._projects.forEach((proj, projIndex) => {
				todoIndex = proj.todo.findIndex((todo) => todo.id == todoId);
				if (todoIndex !== -1) {
					todo = this._tracker._projects[projIndex].todo[todoIndex];
					projName = this._tracker._projects[projIndex].name;

					currentProjIndex = projIndex;
					currentTodoIndex = todoIndex;
				}
			});

			// const modal = document.getElementById('modal');
			modal.setAttribute('data-project-index', currentProjIndex);
			modal.setAttribute('data-todo-index', currentTodoIndex);
			modal.setAttribute('data-todo-id', todoId);

			const radioNewProject = document.getElementById('projectNameOption');
			const radioExistingProject = document.getElementById(
				'selectProjectOption'
			);
			const inputSelectProject = document.getElementById('selectProject');
			const inputNewProject = document.getElementById('project-name');

			const inputTitle = document.getElementById('todo-title');
			const inputDescription = document.getElementById('description');
			const inputDueDate = document.getElementById('dueDate');
			const inputPriority = document.getElementById('priority');

			inputTitle.value = todo.title;
			inputDescription.value = todo.description;
			inputDueDate.value = todo.dueDate;
			inputPriority.value = todo.priority;
			inputSelectProject.value = projName;
		}
	}

	_submitEditTodo(e) {
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

		const currentProjectIndex = modal.dataset.projectIndex;
		const cuttentTodoIndex = modal.dataset.todoIndex;
		const currentTodoId = modal.dataset.todoId;

		if (radioNewProject.checked) {
			// this._removeTodo()
			this._tracker.removeTodo(currentTodoId);
			// li.remove();

			let newProject = new Project(inputNewProject.value);
			// newProject.todo.push(newTodo);

			this._tracker.addProject(newProject);
			this._tracker.addTodoToProject(
				this._tracker._projects.length - 1,
				newTodo
			);
		} else if (radioExistingProject.checked) {
			this._tracker._projects.forEach((proj, index) => {
				if (proj.name === inputSelectProject.value) {
		
						this._tracker.removeTodo(currentTodoId);
						this._tracker.addTodoToProject(index, newTodo);
					
					// if (currentProjectIndex === index) {
					// } else {
					// 	this._tracker.removeTodo(currentTodoId);
					// 	this._tracker.addTodoToProject(index, newTodo);
					// }

				}
			});
		}


		this._closeModal(modal);
	}
}

export default App;
