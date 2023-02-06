let projects = [
	{
		projName: 'FIX the World',
		todo: [
			{
				title: 'Destroy AI',
				description:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere perferendis accusantium.',
				dueDate: 'dd/mm/yyyy',
				priority: 'p1',
			},
			{
				title: 'Rebuild Houses',
				description:
					'Atque nisi doloremque tempore dicta porro, dolorum consectetur veniam perspiciatis error?',
				dueDate: 'dd/mm/yyyy',
				priority: 'p1',
			},
		],
	},
	{
		projName: 'Everyday Maintenance',
		todo: [
			{
				title: 'Brush Teeth',
				description: 'Dolorum amet soluta explicabo ratione! Ducimus, nam!',
				dueDate: 'dd/mm/yyyy',
				priority: 'p1',
			},
			{
				title: 'Meditation',
				description:
					'Nisi doloribus tempore dolorum nam soluta explicabo ratione! Ducimus, amet!',
				dueDate: 'dd/mm/yyyy',
				priority: 'p1',
			},
		],
	},
];




class Project {
	constructor() {
		this.projName = projName;
		this.todo = todo;
	}
}

class Todo {
	constructor() {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = this.priority;
	}
}



// let todoArr = [
// 	{
// 		project: 'Project 1',
// 		title: 'Title 1',
// 		description: 'Description 1',
// 		dueDate: 'dd/mm/yyyy',
// 		priority: 'p1',
// 		checklist: 'false',
// 	},
// ];

// let Project1 = {
// 	name: 'Project1',
// 	todos: [
// 		{
// 			project: 'Project 1',
// 			title: 'Title 1',
// 			description: 'Description 1',
// 			dueDate: 'dd/mm/yyyy',
// 			priority: 'p1',
// 			checklist: 'false',
// 		},
// 		{
// 			project: 'Project 2',
// 			title: 'Title 2',
// 			description: 'Description 2',
// 			dueDate: 'dd/mm/yyyy',
// 			priority: 'p1',
// 			checklist: 'false',
// 		},
// 	],
// };

export { projects };
