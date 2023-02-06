import { projects } from './projects';

function createAllTodo() {
	// console.log(projects);
	projects.forEach((proj) => {
		console.log(proj.name);
		// console.log(proj.todo);
		proj.todo.forEach((todo) => {
			console.log(todo.title);
		});
	});
}

export default createAllTodo;
