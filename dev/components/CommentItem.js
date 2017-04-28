import React from 'react';

class CommentItem extends React.Component {
	constructor() {
		super();

		this.deleteCommentFromItem = this.deleteCommentFromItem.bind(this);
	}

	deleteCommentFromItem() {
		this.props.deleteComment(this.props.id);
	}

	render() {
		return (
			<li key={this.props.id}>
				<b>Имя:</b> {this.props.name}<br/>
				<b>Комментарий:</b> {this.props.text}	
				<span onClick={this.deleteCommentFromItem}>Удалить</span>
			</li>
		)
	}
}

export default CommentItem;