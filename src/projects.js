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
	return { name, todo: []};
};

// push proj to projects
function pushProject(proj) {
	projects.push(proj);
}

let testProject = createProject();
pushProject(testProject);
console.log(testProject);
console.log(projects);

// todo factory
const createTodo = ({ title = 'Unknown', description = 'no description', priority = 'p1', checklist = false } = {}) => {
return {title, description, dueDate, priority, checklist}
};

// push todo 

function pushTodo(indexNum, todo) {
	projects[indexNum].todo.push(todo);
}


let testTodo = createTodo();
console.log(testTodo);
pushTodo(2, testTodo);

function clearMain() {

}

function createTodo()

export { projects, main, ulAllProjects, title, todoContainer, ulTodoList };
