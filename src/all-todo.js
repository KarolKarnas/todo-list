import { projects } from './projects';
import createTodo from './create-todo';

function createAllTodo() {
	// Create h1
	const title = document.createElement('h1');
	title.textContent = 'All Todo';
	main.appendChild(title);

	createTodo()
	
}

export default createAllTodo;
