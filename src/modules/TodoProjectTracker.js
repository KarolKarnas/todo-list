import Storage from './Storage';
import { format, isWithinInterval, parseISO, addDays } from 'date-fns';

class TodoProjectsTracker {
	constructor() {
		this._projects = Storage.getProjects();
	}

	//public

	addTodoToProject(index, todo, todoIndex) {
		if (todoIndex !== undefined) {
			this._projects[index].todo.splice(todoIndex, 0, todo);
			Storage.saveTodo(index, todo, todoIndex);
		} else {
			this._projects[index].todo.push(todo);
			Storage.saveTodo(index, todo);
			//watch
		}
		this._render(index);
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

	_createProjectsList(projIndex) {
		this._projects.forEach((proj, index) => {
			const liAllProjects = document.querySelector('#all-projects');
			const projectItemMenu = document.createElement('li');
			projectItemMenu.textContent = proj.name;
			projectItemMenu.classList.add('new-project', 'li-nav');
			projectItemMenu.setAttribute('data-id', proj.id);
			projectItemMenu.setAttribute('data-project-Index', index);
			liAllProjects.insertAdjacentElement('afterend', projectItemMenu);
		});
		//watch
		const ul = document.getElementById('ul-nav');
		const allLi = ul.querySelectorAll('li');

		allLi.forEach((li) =>
			li.addEventListener('click', (e) => {
				allLi.forEach((li) => li.classList.remove('li-active'));
				e.target.classList.add('li-active');
			})
		);
	}

	_clearProjectsList() {
		const allNewProject = document.querySelectorAll('.new-project');
		allNewProject.forEach((proj) => {
			proj.remove();
		});
	}

	_changeTitle(projIndex) {
		const title = document.getElementById('title');
		title.textContent = this._projects[projIndex].name;
	}

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
		return [currentProjIndex, currentTodoIndex];
	}

	loadTodos() {
		this._clearMainTodoList();
		document.getElementById('title').textContent = 'All Todos';
		this._projects.forEach((proj, index) =>
			proj.todo.forEach((todo) => this._displayTodo(todo, index))
		);
	}
	//watch
	_addActive(projIndex) {
		const ul = document.getElementById('ul-nav');
		const newProjects = ul.querySelectorAll('.new-project');
		const allProjects = ul.querySelectorAll('li');
		allProjects.forEach((li) => li.classList.remove('li-active'));
		newProjects.forEach((proj) => {
			if (proj.dataset.projectIndex == projIndex) {
				proj.classList.add('li-active');
			}
		});
	}

	_render(projIndex) {
		this._clearProjectsList();
		this._createProjectsList(projIndex);

		this._clearMainTodoList();
		this._projects[projIndex].todo.forEach((todo) =>
			this._displayTodo(todo, projIndex)
		);
		this._changeTitle(projIndex);
		this._addActive(projIndex);

		this._clearExistingProjectsModal();
		this._createExistingProjectsModal();
	}

	_renderDate(type) {
		this._clearMainTodoList();
		const dateToday = new Date();
		const today = format(dateToday, 'yyyy-MM-dd');
		if (type === 'today') {
			this._projects.forEach((proj, projIndex) => {
				proj.todo.forEach((todo) => {
					if (todo.dueDate === today) {
						this._displayTodo(todo, projIndex);
					}
				});
			});
		} else if (type === 'week') {
			const endWeek = parseISO(
				format(addDays(parseISO(today), 7), 'yyyy-MM-dd')
			);
			this._projects.forEach((proj, projIndex) => {
				proj.todo.forEach((todo) => {
					if (isWithinInterval(parseISO(todo.dueDate), {start: dateToday, end: endWeek})) {
						this._displayTodo(todo, projIndex);
					}
				});
			});
		}
	}
}

export default TodoProjectsTracker;
