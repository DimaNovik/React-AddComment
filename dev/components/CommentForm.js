import React from 'react';

class CommentForm extends React.Component {
	constructor () {
		super();

		this.state ={
			name: '',
			comment:''
		}

		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeComment = this.handleChangeComment.bind(this);
		this.commentAdd = this.commentAdd.bind(this);
	}

	handleChangeName(e) {
		this.setState({
			name: e.target.value
		});
	}

	handleChangeComment(e) {
		this.setState({
			comment: e.target.value
		});
	}

	submitForm(e) {
		e.preventDefault();
	}

	commentAdd () {
		if (!this.state.name || !this.state.comment) {
			
			return;
		}

		
		
		const newComment = {
			id: Date.now(),
			name: this.state.name,
			comment: this.state.comment

		};

		this.props.addComment(newComment);
		this.setState({
			name: '',
			comment:''
		});


	}

	render() {
		return (
			<div>
			<p>Оставить комментарий:</p>
			<form className="comment-form" onSubmit={this.submitForm}>
				<input 
					type="text"
					placeholder="Ваше имя" 
					value={this.state.name}
					onChange={this.handleChangeName}/>
				<input 
					type="text"
					placeholder="Ваш комментарий"
					value={this.state.comment}
					onChange={this.handleChangeComment}/>
				<button
				  className="comment-form__button"
				  onClick={this.commentAdd}
				> Оставить комментарий
				</button>
			</form>
			</div>
		)
	}
} 

export default CommentForm;