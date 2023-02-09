import { projects, todoContainer, ulTodoList } from './projects';

function createTodo() {

// console.log(projects);
// base on array length? projects.length / position [0]?
// for loop?
// readProject function
projects.forEach((proj) => {
    // console.log(proj.name);

    // projects[index].todo.forEach((todo) => {
    proj.todo.forEach((todo) => {
        //li element for every todo
        const todoSingle = document.createElement('li');
        todoSingle.classList.add('todo-single');
        ulTodoList.appendChild(todoSingle);

        //design columns in single list
        const col1 = document.createElement('div');
        col1.classList.add('col-1');
        todoSingle.appendChild(col1);

        const col2 = document.createElement('div');
        col2.classList.add('col-2');
        todoSingle.appendChild(col2);

        const col3 = document.createElement('div');
        col3.classList.add('col-3');
        todoSingle.appendChild(col3);

        //content col1

        const todoCheck = document.createElement('input');
        todoCheck.setAttribute('type', 'checkbox');
        todoCheck.classList.add('checkbox');
        col1.appendChild(todoCheck);

        //content col2

        const todoTitle = document.createElement('div');
        todoTitle.classList.add('todo-title');
        todoTitle.textContent = todo.title;
        col2.appendChild(todoTitle);

        const todoProjectName = document.createElement('div');
        todoProjectName.classList.add('todo-project-name');
        todoProjectName.textContent = proj.name;
        col2.appendChild(todoProjectName);

        const todoDescription = document.createElement('div');
        todoDescription.classList.add('todo-description');
        todoDescription.textContent = todo.description;
        col2.appendChild(todoDescription);

        //content col3

        const todoDate = document.createElement('input');
        todoDate.setAttribute('type', 'date');
        col3.appendChild(todoDate);

        const todoIconsContainer = document.createElement('div');
        todoIconsContainer.classList.add('todo-icons-container');
        col3.appendChild(todoIconsContainer);

        const todoIconEdit = document.createElement('i');
        todoIconEdit.textContent = 'edit';
        todoIconEdit.classList.add('material-symbols-outlined', 'todo-icon-edit');
        todoIconsContainer.appendChild(todoIconEdit);

        const todoIconDelete = document.createElement('i');
        todoIconDelete.textContent = 'delete';
        todoIconDelete.classList.add(
            'material-symbols-outlined',
            'todo-icon-delete'
        );
        todoIconsContainer.appendChild(todoIconDelete);
    });
});
}

export default createTodo;
