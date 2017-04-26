import React from 'react';

class TodoForm extends React.Component {
	constructor() {
		super();
		
		this.state = {
			text: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleChange(e) {
		this.setState({
			text: e.target.value
		});
	}

	submitForm(e) {
		e.preventDefault();
	}

	handleAdd() {
		if (!this.state.text) {
			return;
		}

		const newTodo = {
			id: Date.now(),
			text: this.state.text
		};

		this.props.addTodo(newTodo);
		this.setState({
			text: ''
		});
	}

	render() {
		return (
			<form className="todo-form" onSubmit={this.submitForm}>
				<textarea
				  placeholder="write todo"
				  className="todo-form__textarea"
				  value={this.state.text}
				  onChange={this.handleChange}
				/>
				<button
				  className="todo-form__button"
				  onClick={this.handleAdd}
				>
					add Todo
				</button>
			</form>
		)
	}	
}

export default TodoForm;