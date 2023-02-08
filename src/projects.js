//GLOBAL
// SELECT VARIABLES
const main = document.querySelector('#main');
const ulAllProjects = document.querySelector('#all-projects');

// CREATE MAIN CONTENT
const title = document.createElement('h1');
// title.textContent = 'All Todo';
main.appendChild(title);

const todoContainer = document.createElement('div');
todoContainer.classList.add('todo-container');
main.appendChild(todoContainer);

const ulTodoList = document.createElement('ul');
ulTodoList.classList.add('todo-list');
todoContainer.appendChild(ulTodoList);

// ----------------------------------------

// const projects2 = [];

// const createTodo = () => {
// 	projects2.push('todo');
// };

// createTodo();
// createTodo();

// const todoTest = createTodo();

// console.log(todoTest);
// console.log(projects2);

// console.log(projects2);

// ------------------------------------------------

const projects = [
	{
		name: 'FIX the World',
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
		name: 'Everyday Maintenance',
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

console.log(projects)

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

// const todoArr = [
// 	{
// 		name: 'FIX the World',
// 		title: 'Destroy AI',
// 		description:
// 			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere perferendis accusantium.',
// 		dueDate: 'dd/mm/yyyy',
// 		priority: 'p1',
// 	},
// 	{
// 		name: 'FIX the World',
// 		title: 'Rebuild Houses',
// 		description:
// 			'Atque nisi doloremque tempore dicta porro, dolorum consectetur veniam perspiciatis error?',
// 		dueDate: 'dd/mm/yyyy',
// 		priority: 'p1',
// 	},
// 	{
// 		name: 'Everyday Maintenance',
// 		title: 'Brush Teeth',
// 		description: 'Dolorum amet soluta explicabo ratione! Ducimus, nam!',
// 		dueDate: 'dd/mm/yyyy',
// 		priority: 'p1',
// 	},
// 	{
// 		name: 'Everyday Maintenance',
// 		title: 'Meditation',
// 		description:
// 			'Nisi doloribus tempore dolorum nam soluta explicabo ratione! Ducimus, amet!',
// 		dueDate: 'dd/mm/yyyy',
// 		priority: 'p1',
// 	},

// ]

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

export { projects, main, ulAllProjects, title, todoContainer, ulTodoList };
