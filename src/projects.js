const projects = [
	{
		name: 'FIX the World',
		todo: [
			{
				title: 'Destroy AI',
				description:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere perferendis accusantium.',
				dueDate: '2023-02-03',
				priority: 'Priority 1',
				checklist: false,
			},
			{
				title: 'Rebuild Houses',
				description:
					'Atque nisi doloremque tempore dicta porro, dolorum consectetur veniam perspiciatis error?',
				dueDate: '2023-02-03',
				priority: 'Priority 2',
				checklist: true,
			},
		],
	},
	{
		name: 'Everyday Maintenance',
		todo: [
			{
				title: 'Brush Teeth',
				description: 'Dolorum amet soluta explicabo ratione! Ducimus, nam!',
				dueDate: '2023-02-03',
				priority: 'Priority 3',
				checklist: false,
			},
			{
				title: 'Meditation',
				description:
					'Nisi doloribus tempore dolorum nam soluta explicabo ratione! Ducimus, amet!',
				dueDate: '2023-02-03',
				priority: 'Priority 4',
				checklist: false,
			},
		],
	},
];

// LOGIC.JS

// const createTodo = (title, description, projectName, dueDate, priority, checked) => {
// 	return { title, description, projectName, dueDate, priority, checked};
// };

// let testTodo = createTodo('brush', 'exactly', 'Maintenance');
// console.log(testTodo);
// // pushTodo(2, testTodo);

// console.log('hello');

// const todoTitleInput = document.querySelector('#todo-title');
// const todoDescriptionInput = document.querySelector('#description');
// const todoProjectNameInput = document.querySelector('#project-name');

// function addTodoToProjectsArray(event) {
// 	let newTodo = createTodo2(
// 		todoTitleInput.value,
// 		todoDescriptionInput.value,
// 		todoProjectNameInput.value
// 	);

// 	event.preventDefault();
// }

//submit button

// let submitButton = document.querySelector('#submit-btn');
// console.log(submitButton);

// submitButton.addEventListener('click', addTodoToProjectsArray);

export { projects };
