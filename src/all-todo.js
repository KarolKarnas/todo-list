import { projects, main, title } from './projects';
import createTodo from './create-todo';

function createAllTodo() {
	// change h1 text

	title.textContent = 'All Todo';
	createTodo()

}

export default createAllTodo;
