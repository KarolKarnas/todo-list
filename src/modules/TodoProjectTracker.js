import Todo from "./Todo";
import Storage from "./Storage";

class TodoProjectsTracker {
    constructor() {
        // this._todoCount = 0;
        // this._proejectCount = 0;
        this._todos = Storage.getTodos();
        this._projects = Storage.getProjects();
    }
    addProject(project) {
        this._projects.push(project);
    }
    
    addTodo(todo) {
        this._todos.push(todo);
    }

    addTodoToProject(id) {
        
    }

}

export default TodoProjectsTracker
