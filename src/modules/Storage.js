class Storage {
	static getProjects() {
		let projects;
		if (localStorage.getItem('projects') === null) {
			projects = [
				{
					id: 'bef36e0e1b027',
					name: 'FIX the World2',
					todo: [
						{
							id: 'ca079bdcb9ba2',
							title: 'Rebuild Houses',
							description: 'Atque',
							dueDate: '2023-02-03',
							priority: 'Priority 2',
							checklist: true,
						},
						{
							id: 'ca069bdcb9ba2',
							title: 'Born children',
							description: 'Gitque',
							dueDate: '2023-02-03',
							priority: 'Priority 2',
							checklist: false,
						},
						{
							id: 'ca059bdcb9ba2',
							title: 'Melt metal scraps',
							description: 'Botu',
							dueDate: '2023-02-03',
							priority: 'Priority 2',
							checklist: false,
						},
					],
				},
				{
					id: 'bod36e0e1b027',
					name: 'Body maintance',
					todo: [
						{
							id: 'cfgg9bdcb9ba2',
							title: 'Brush Teeth',
							description: 'Atque',
							dueDate: '2023-02-03',
							priority: 'Priority 2',
							checklist: true,
						},
					],
				},
			];
			localStorage.setItem('projects', JSON.stringify(projects));
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

	static saveTodo(projectIndex, todo, todoIndex) {
		if(todoIndex !== undefined)  {
			const projects = Storage.getProjects();
			projects[projectIndex].todo.splice(todoIndex, 0, todo);
			localStorage.setItem('projects', JSON.stringify(projects));
		} else {
		const projects = Storage.getProjects();
		projects[projectIndex].todo.push(todo);
		localStorage.setItem('projects', JSON.stringify(projects));
		}
	}

	static removeTodo(projIndex, todoIndex) {
		const projects = Storage.getProjects();
		projects[projIndex].todo.splice(todoIndex, 1);
		localStorage.setItem('projects', JSON.stringify(projects));
	}
}

export default Storage;
