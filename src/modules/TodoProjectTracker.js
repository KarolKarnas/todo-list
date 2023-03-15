import Todo from './Todo';
import Storage from './Storage';

class TodoProjectsTracker {
	constructor() {
		this._todos = Storage.getProjects();
		this._projects = Storage.getProjects();

		this._checkEmpty()
	}

	//public

	addTodoToProject(index, todo) {
		this._projects[index].todo.push(todo);
		Storage.saveTodo(index, todo);
	}

	// addTodo(todo) {
	// 	// this._todos.push(todo);
	// 	// this._displayTodo(todo);
	// 	console.log(todo);
	// }

	addProject(project) {
		this._projects.push(project);
		Storage.saveProject(project);
	}

	//private

    _displayTodo(todo, projIndex) {
        const ul = document.getElementById('todo-list');
		const todoLi = document.createElement('li');
		todoLi.classList.add('todo-single')
		todoLi.setAttribute('data-id', todo.id);
		
		todoLi.innerHTML = `<div class="col-1">
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
	</div>`
	
console.log(todoLi);
	ul.appendChild(todoLi);
    }

	_displayProjectMenu() {
		this._projects.forEach((proj, index) => {
			const liAllProjects = document.querySelector('#all-projects');
			const projectItemMenu = document.createElement('li');
			projectItemMenu.textContent = proj.name;
			projectItemMenu.classList.add('new-project');
			projectItemMenu.setAttribute('data-id', proj.id);
			liAllProjects.insertAdjacentElement('afterend', projectItemMenu);
			// toggle class active
			// selectAllLi();
			// addToggleClassOnLi();
	
			// render content with according index number
			projectItemMenu.addEventListener('click', () => {
				title.textContent = proj.name;
				// clearMainTodoList();
				// createTodo(index);
			});
		});
	}

	_updateModalExistingProjects() {
		const inputSelectProject = document.getElementById('selectProject');
		this._projects.forEach((proj) => {
			let newOption = document.createElement('option');
			newOption.textContent = proj.name;
			newOption.setAttribute('value', `${proj.name}`);
			newOption.setAttribute('data-id', `${proj.id}`)
			inputSelectProject.appendChild(newOption);
		});
	}

	_checkEmpty() {
	
		if (this._todos.length === 0)	{  Storage.saveProject({id: 'bef36e0e1b027', name: 'FIX the World2', todo: []})
		Storage.saveTodo(0, {
			id: 'ca079bdcb9ba2',
			title: 'Rebuild Houses',
			description:
				'Atque',
			dueDate: '2023-02-03',
			priority: 'Priority 2',
			checklist: true,
		})
	}
}

loadTodos() {
	this._updateModalExistingProjects()
			this._projects.forEach((proj, index) => proj.todo.forEach(todo => this._displayTodo(todo, index)))
	}


// 	loadTodos(projIndex) {
// this._updateModalExistingProjects()
// 		this._projects[projIndex].todo.forEach(todo => {
// 			this._displayTodo(todo, projIndex)
// 		});
// 	}

	_render(projIndex) {

	}
}

export default TodoProjectsTracker;
