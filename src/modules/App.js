import Todo from "./Todo";
import TodoProjectsTracker from "./TodoProjectTracker";


class App {

constructor() {
    this._tracker = new TodoProjectsTracker;
    this._tracker.addTodo(new Todo)
console.log(this._tracker)
console.log('hello')
}
}


export default App