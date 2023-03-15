class Storage {

	static getProjects() {
		let projects;
		if (localStorage.getItem('projects') === null) {
			projects = [];

		} else {
			projects = JSON.parse(localStorage.getItem('projects'));
		}
		return projects;
	}

	static saveProject(project) {
		const projects = Storage.getProjects();
		projects.push(project);
		localStorage.setItem('projects', JSON.stringify(projects));
	}

	static saveTodo(projectIndex, todo) {
		const projects = Storage.getProjects();
		projects[projectIndex].todo.push(todo);
		localStorage.setItem('projects', JSON.stringify(projects));
	}

	static getAllTodos() {
		let projects;
		let todos;
		if (localStorage.getItem('projects') === null) {
			projects = [];
		} else {
			projects = JSON.parse(localStorage.getItem('projects'));
			todos = projects.forEach(proj => {
				proj.todo;
			});
		}
		return todos;
	}

}

export default Storage;


// function createMainAllTodo() {
// 	projects.forEach((element, index) => {
// 		createTodo(index);
// 	});
// }

// function createTodo(projectIndex) {
// 	// let projectIndex = 0;

// 	projects[projectIndex].todo.forEach((todo) => {
// 	}
// projects = [
// 	{
// 		id: 'bef36e0e1b027',
// 		name: 'FIX the World',
// 		todo: [				{
// 			id: '7a0db27062748',
// 			title: 'Destroy AI',
// 			description:
// 				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere perferendis accusantium.',
// 			dueDate: '2023-02-03',
// 			priority: 'Priority 1',
// 			checklist: false,
// 		},
// 		{
// 			id: 'ca079bdcb9ba2',
// 			title: 'Rebuild Houses',
// 			description:
// 				'Atque nisi doloremque tempore dicta porro, dolorum consectetur veniam perspiciatis error?',
// 			dueDate: '2023-02-03',
// 			priority: 'Priority 2',
// 			checklist: true,
// 		},],
// 	},
// ];
