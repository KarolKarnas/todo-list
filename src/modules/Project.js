import Todo from "./Todo";

class Project {
	constructor(name = 'Deafult Project Title') {
		this.id = Math.random().toString(16).slice(2);
        this.name = name;
		this.todo = [];
	}
}

export default Project;
