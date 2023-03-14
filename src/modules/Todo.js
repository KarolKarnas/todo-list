class Todo {
	constructor(title = 'Default Title', description = 'Default Description', dueDate = '2023-02-03', priority = 'Priority 1', checklist = false) {
		this.id = Math.random().toString(16).slice(2);
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.checklist = checklist;
	}
}

export default Todo;
