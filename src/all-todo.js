import { projects } from './projects';

function createAllTodo() {
	// Create h1
	const title = document.createElement('h1');
	title.textContent = 'All Todo';
	main.appendChild(title);

	const todoContainer = document.createElement('div');
	todoContainer.classList.add('todo-container');
	main.appendChild(todoContainer);

	const ulTodoList = document.createElement('ul');
	ulTodoList.classList.add('todo-list');
	todoContainer.appendChild(ulTodoList);

	// console.log(projects);
	projects.forEach((proj) => {
		// console.log(proj.name);
		proj.todo.forEach((todo) => {
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

			const todoProjectName = document.createElement('span');
			todoProjectName.classList.add('todo-project-name');
			todoProjectName.textContent = proj.name;
			todoTitle.appendChild(todoProjectName);

			const todoDescription = document.createElement('div');
			todoDescription.classList.add('todo-description');
			todoDescription.textContent = todo.description;
			col2.appendChild(todoDescription);

			//content col3

			const todoDate = document.createElement('input');
			todoDate.setAttribute('type', 'date');
			col3.appendChild(todoDate);
		});
	});
}

export default createAllTodo;
