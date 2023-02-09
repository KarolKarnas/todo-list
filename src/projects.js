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
				checklist: false,
			},
			{
				title: 'Rebuild Houses',
				description:
					'Atque nisi doloremque tempore dicta porro, dolorum consectetur veniam perspiciatis error?',
				dueDate: 'dd/mm/yyyy',
				priority: 'p1',
				checklist: false,
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
				checklist: false,
			},
			{
				title: 'Meditation',
				description:
					'Nisi doloribus tempore dolorum nam soluta explicabo ratione! Ducimus, amet!',
				dueDate: 'dd/mm/yyyy',
				priority: 'p1',
				checklist: false,
			},
		],
	},
];

// project factory
const createProject = ({ name = 'Unknown' } = {}) => {
	return { name, todo: [] };
};

// push proj to projects
function pushProject(proj) {
	projects.push(proj);
}

let testProject = createProject();
pushProject(testProject);
// console.log(testProject);
// console.log(projects);

// todo factory with defaults
const createTodo = ({
	title = 'Unknown',
	description = 'no description',
	priority = 'p1',
	checklist = false,
} = {}) => {
	return { title, description, dueDate, priority, checklist };
};

// push todo

function pushTodo(indexNum, todo) {
	projects[indexNum].todo.push(todo);
}

let testTodo = createTodo();
console.log(testTodo);
pushTodo(2, testTodo);

// take input

const createTodo2 = (title, description, projectName) => {
	return { title, description, projectName };
};

console.log(createTodo2('brush', 'exactly', 'Maintenance'));

const todoTitleInput = document.querySelector('#todo-title');
const todoDescriptionInput = document.querySelector('#description');
const todoProjectNameInput = document.querySelector('#project-name');


function addTodoToProjectsArray(event) {
	let newTodo = createTodo2(
		todoTitleInput.value,
		todoDescriptionInput.value,
		todoProjectNameInput.value
	);

	console.log(newTodo);
	event.preventDefault();
}

//submit button

let submitButton = document.querySelector('#submit-btn');
console.log(submitButton);

console.log('test');
submitButton.addEventListener('click', addTodoToProjectsArray);

// function clearMain() {

// }

// function createTodo()
export { projects, main, ulAllProjects, title, todoContainer, ulTodoList };
