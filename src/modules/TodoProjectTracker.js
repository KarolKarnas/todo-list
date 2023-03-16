import Todo from './Todo';
import Storage from './Storage';

class TodoProjectsTracker {
	constructor() {
		this._todos = Storage.getProjects();
		this._projects = Storage.getProjects();

		this._checkEmpty();
	}

	//public

	addTodoToProject(index, todo) {
		this._projects[index].todo.push(todo);
		Storage.saveTodo(index, todo);
		this._render(index);
	}

	addProject(project) {
		this._projects.push(project);
		Storage.saveProject(project);
	}

	//private

	_displayTodo(todo, projIndex) {
		const ul = document.getElementById('todo-list');
		const todoLi = document.createElement('li');
		todoLi.classList.add('todo-single');
		todoLi.setAttribute('data-id', todo.id);

		todoLi.innerHTML = `
		<div class="col-1">
		<input class="checkbox" type="checkbox" />
	</div>
	<div class="col-2">
		<div class="todo-title">${todo.title}</div>
		<div class="todo-project-name">${this._projects[projIndex].name}</div>
		<div class="todo-description">
		${todo.description}
		</div>
		<div class="todo-priority todo-priority-1">${todo.priority}</div>
	</div>
	<div class="col-3">
		<input type="date" disabled="true" value="${todo.dueDate}" />
		<div class="todo-icons-container">
			<i class="material-symbols-outlined todo-icon-edit">edit</i>
			<i class="material-symbols-outlined todo-icon-delete">delete</i>
		</div>
	</div>`;

		// console.log(todoLi);
		ul.appendChild(todoLi);
	}

	_createExistingProjectsModal() {
		const inputSelectProject = document.getElementById('selectProject');
		this._projects.forEach((proj) => {
			let newOption = document.createElement('option');
			newOption.textContent = proj.name;
			newOption.setAttribute('value', `${proj.name}`);
			newOption.setAttribute('data-id', `${proj.id}`);
			inputSelectProject.appendChild(newOption);
		});
	}

	_clearExistingProjectsModal() {
		const inputSelectProject = document.getElementById('selectProject');
		while (inputSelectProject.firstChild) {
			inputSelectProject.removeChild(inputSelectProject.firstChild);
		}
	}

	_checkEmpty() {
		if (this._todos.length === 0) {
			Storage.saveProject({
				id: 'bef36e0e1b027',
				name: 'FIX the World2',
				todo: [],
			});
			Storage.saveTodo(0, {
				id: 'ca079bdcb9ba2',
				title: 'Rebuild Houses',
				description: 'Atque',
				dueDate: '2023-02-03',
				priority: 'Priority 2',
				checklist: true,
			});
		}
	}

	// 	loadTodos(projIndex) {
	// this._createExistingProjectsModal()
	// 		this._projects[projIndex].todo.forEach(todo => {
	// 			this._displayTodo(todo, projIndex)
	// 		});
	// 	}

	_clearMainTodoList() {
		const ulTodoList = document.getElementById('todo-list');
		while (ulTodoList.firstChild) {
			ulTodoList.removeChild(ulTodoList.firstChild);
		}
	}

	_createProjectsList() {
		this._projects.forEach((proj, index) => {
			const liAllProjects = document.querySelector('#all-projects');
			const projectItemMenu = document.createElement('li');
			projectItemMenu.textContent = proj.name;
			projectItemMenu.classList.add('new-project');
			projectItemMenu.setAttribute('data-id', proj.id);
			projectItemMenu.setAttribute('data-project-Index', index);
			liAllProjects.insertAdjacentElement('afterend', projectItemMenu);

			// toggle class active
			// selectAllLi();
			// addToggleClassOnLi();
			// render content with according index number
			projectItemMenu.addEventListener('click', (e) => {
				// title.textContent = proj.name;
				this._render(e.target.dataset.projectIndex);
				// clearMainTodoList();
				// createTodo(index);
			});
		});
	}

	_clearProjectsList() {
		const allNewProject = document.querySelectorAll('.new-project');
		allNewProject.forEach((proj) => {
			proj.remove();
		});
	}

	_changeTitle(projIndex) {
		const title = document.getElementById('title');
		console.log(title);
		title.textContent = this._projects[projIndex].name;
	}

	loadTodos() {
		this._clearMainTodoList();
		document.getElementById('title').textContent = 'All Todos';
		this._projects.forEach((proj, index) =>
			proj.todo.forEach((todo) => this._displayTodo(todo, index))
		);
	}

	_render(projIndex) {
		console.log('render', +projIndex);
		this._clearProjectsList();
		this._createProjectsList();

		this._clearMainTodoList();
		this._projects[projIndex].todo.forEach((todo) =>
			this._displayTodo(todo, projIndex)
		);
		this._changeTitle(projIndex);

		this._clearExistingProjectsModal();
		this._createExistingProjectsModal();
	}
}

export default TodoProjectsTracker;
