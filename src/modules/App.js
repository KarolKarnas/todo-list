import Todo from './Todo';
import TodoProjectsTracker from './TodoProjectTracker';

class App {
	constructor() {
		this._tracker = new TodoProjectsTracker();
		this._loadModal();
        this._tracker.loadTodos()
		//     this._tracker.addTodo(new Todo)
		console.log(this._tracker)
		// console.log('hello')
	}
	_loadModal() {
		document.querySelectorAll('[data-modal-target]').forEach((button) => {
			button.addEventListener('click', () => {
				const modal = document.querySelector(button.dataset.modalTarget);
				// submitButton.style.display = 'inherit';
				openModal(modal);
			});
		});
		document.querySelectorAll('[data-close-button]').forEach((button) => {
			button.addEventListener('click', () => {
				const modal = button.closest('.modal');
				closeModal(modal);
			});
		});

		document.getElementById('overlay').addEventListener('click', () => {
			const modals = document.querySelectorAll('.modal.active');
			modals.forEach((modal) => {
				closeModal(modal);
			});
		});

		function openModal(modal) {
			if (modal == null) return;
			modal.classList.add('active');
			overlay.classList.add('active');
		}

		function closeModal(modal) {
			if (modal == null) return;
			// submitButton.style.display = 'none';
			// editButton.style.display = 'none';
			clearInputs();
			modal.classList.remove('active');
			overlay.classList.remove('active');
		}
	}


}

export default App;