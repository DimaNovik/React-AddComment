import React from 'react';
import ProductApp from './ProductApp';
import CommentForm from './CommentForm';

class CommentApp extends React.Component {
	constructor () {
		super();

	this.state = {
		comments: []
	}	

	this.commentAdd = this.commentAdd.bind(this);	
	}

	commentAdd(newComment) {
		this.setState({
			comments : [newComment, ...this.state.comments]
		});
	}

	render () 
	{
		return (
			<div className="wrapper">
				<p>Просмотр товара:</p>
				<ProductApp />
				<CommentForm addComment={this.commentAdd}/>
			</div>
		)
	}
}

export default CommentApp;