class Project {
	constructor(title = 'Deafult Project Title') {
		this.id = Math.random().toString(16).slice(2);
        this.title = title;
		this.todos = [];
	}
}

export default Project;
