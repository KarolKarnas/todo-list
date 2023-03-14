import Todo from './Todo';
import Storage from './Storage';

class TodoProjectsTracker {
	constructor() {
		this._todos = Storage.getTodos();
		this._projects = Storage.getProjects();
	}

	//public

	addTodo(todo) {
		this._todos.push(todo);
		this._displayTodo(todo);
	}

	addProject(project) {
		this._projects.push(project);
	}

	//private

    _displayTodo(todo) {
        const ul = document.getElementById('todo-list');
		const todoLi = document.createElement('li');
		todoLi.classList.add('todo-single')
		todoLi.setAttribute('data-id', todo.id);
		
		todoLi.innerHTML = `<div class="col-1">
		<input class="checkbox" type="checkbox" />
	</div>
	<div class="col-2">
		<div class="todo-title">${todo.title}</div>
		<div class="todo-project-name">Problem!</div>
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

	loadTodos(){
		this._todos.forEach(todo => {
			this._displayTodo(todo)
		});
	}
}

export default TodoProjectsTracker;
