class Storage {
	static getTodos() {
		let todos;
		if (localStorage.getItem('todos') === null) {
			todos = [
				{
					id: '7a0db27062748',
					title: 'Destroy AI',
					description:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere perferendis accusantium.',
					dueDate: '2023-02-03',
					priority: 'Priority 1',
					checklist: false,
				},
				{
					id: 'ca079bdcb9ba2',
					title: 'Rebuild Houses',
					description:
						'Atque nisi doloremque tempore dicta porro, dolorum consectetur veniam perspiciatis error?',
					dueDate: '2023-02-03',
					priority: 'Priority 2',
					checklist: true,
				},
			];
		} else {
			todos = JSON.parse(localStorage.getItem('todos'));
		}
		return todos;
	}

	static getProjects() {
		let projects;
		if (localStorage.getItem('projects') === null) {
			projects = [
				{
					id: 'bef36e0e1b027',
					title: 'FIX the World',
					todos: ['7a0db27062748', 'ca079bdcb9ba2'],
				},
			];
		} else {
			projects = JSON.parse(localStorage.getItem('projects'));
		}
		return projects;
	}
}

export default Storage;
