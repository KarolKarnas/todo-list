import Todo from './Todo';
import Storage from './Storage';

class TodoProjectsTracker {
	constructor() {
		this._projects = Storage.getProjects();
	}

	//public

	addTodoToProject(index, todo, todoIndex) {
		if(todoIndex !== undefined) {
			this._projects[index].todo.splice(todoIndex, 0, todo);
			Storage.saveTodo(index, todo, todoIndex);
			console.log('hello')
		} else {
		this._projects[index].todo.push(todo);
		Storage.saveTodo(index, todo);
		//watch
		this._render(index);
		}
	}

	addProject(project) {
		this._projects.push(project);
		Storage.saveProject(project);
	}

	removeTodo(todoId) {
		let todoIndex;
		this._projects.forEach((proj, projIndex) => {
			todoIndex = proj.todo.findIndex((todo) => todo.id == todoId);
			if (todoIndex !== -1) {
				this._projects[projIndex].todo.splice(todoIndex, 1);
				Storage.removeTodo(projIndex, todoIndex);
			}
		});
	}

	//private

	_displayTodo(todo, projIndex) {
		const ul = document.getElementById('todo-list');
		const todoLi = document.createElement('li');
		let input;
		if (todo.checklist === true) {
			todoLi.classList.add('todo-done');
			input = '<input class="checkbox" type="checkbox" checked />';
		} else {
			input = '<input class="checkbox" type="checkbox" />';
		}
		todoLi.classList.add('todo-single');
		todoLi.setAttribute('data-id', todo.id);

		todoLi.innerHTML = `
		<div class="col-1">
		${input}
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
			projectItemMenu.classList.add('new-project', 'li-nav');
			projectItemMenu.setAttribute('data-id', proj.id);
			projectItemMenu.setAttribute('data-project-Index', index);
			liAllProjects.insertAdjacentElement('afterend', projectItemMenu);

			// toggle class active
			// selectAllLi();
			// addToggleClassOnLi();
			// render content with according index number
			projectItemMenu.addEventListener('click', (e) => {
				// title.textContent = proj.name;
				//WATCH
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
		// console.log(title);
		title.textContent = this._projects[projIndex].name;
	}

	// _addActive(projIndex) {
	// 	const ul = document.getElementById('ul-nav');
	// 	const allLi = ul.querySelectorAll('li');

	// 	allLi.forEach((li) => li.classList.remove('li-active'));
	// 	allLi.forEach((li) => {
	// 		// console.log(li.dataset.projectIndex);
	// 		// console.log(projIndex);
	// 		if (li.dataset.projectIndex === projIndex) {
	// 			console.log('hello');
	// 			// li.classList.add('li-active')
	// 		}
	// 	});
	// }

	// ca079bdcb9ba2

	_findProjTodoIndex(todoId) {

		let todoIndex;
		let currentProjIndex;
		let currentTodoIndex;

		this._projects.forEach((proj, projIndex) => {
			todoIndex = proj.todo.findIndex((todo) => todo.id == todoId);
			if (todoIndex !== -1) {
				currentProjIndex = projIndex;
				currentTodoIndex = todoIndex;
			}
		});
		// console.log(currentProjIndex, currentTodoIndex)
		return [currentProjIndex, currentTodoIndex]
	}

	loadTodos() {
		this._clearMainTodoList();
		document.getElementById('title').textContent = 'All Todos';
		this._projects.forEach((proj, index) =>
			proj.todo.forEach((todo) => this._displayTodo(todo, index))
		);
	}

	_render(projIndex) {
		// console.log('render', +projIndex);
		this._clearProjectsList();
		this._createProjectsList();
		// this._addActive(projIndex);

		this._clearMainTodoList();
		this._projects[projIndex].todo.forEach((todo) =>
			this._displayTodo(todo, projIndex)
		);
		// this.loadTodos()
		this._changeTitle(projIndex);

		this._clearExistingProjectsModal();
		this._createExistingProjectsModal();
	}
}

export default TodoProjectsTracker;
