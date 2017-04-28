import React from 'react';
import ProductApp from './ProductApp';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

class CommentApp extends React.Component {
	constructor () {
		super();

	this.state = {
		comments: []
	}	

	this.commentAdd = this.commentAdd.bind(this);	
	this.commentDel = this.commentDel.bind(this);
	this.changeLocal = this.changeLocal.bind(this);


	}

	commentAdd(newComment) {
		this.setState({
			comments: local
		}), this.changeLocal();

		console.log(this.state.comments);

	}

	commentDel(delComm) {
		this.setState({
			comments: this.state.comments.filter(com => com.id !== delComm)
		});
	}

	changeLocal(locals) {

		if(!this.state.comments) {
			return;
		}

		localStorage.setItem('comments', JSON.stringify(this.state.comments));

		const local = JSON.parse(localStorage.getItem('comments'));

		console.log(local);

		this.setState({
			comments:local
		});

		

	//	localStorage.setItem('comments', JSON.stringify(this.state.comments));

	}



	render () 
	{

		return (
			<div className="wrapper">
				<p>Просмотр товара:</p>
				<ProductApp />
				<CommentForm localCom={this.changeLocal} addComment={this.commentAdd}/>
				<p>Комментарии:</p>
				<CommentList  deleteFromApp={this.commentDel} list={this.state.comments} />
			</div>
		)
	}
}

export default CommentApp;