import React from 'react';
import CommentItem from './CommentItem'

class CommentList extends React.Component {
	render() {
		const {list} = this.props;
		return (
			<ul className='comment-list'>
				{	

					list.map((item) => (
						<CommentItem
							key={item.id}
							id={item.id}
							name={item.name}
							text={item.comment}
							deleteComment={this.props.deleteFromApp}
						/>
					))
				}
			</ul>
		)
	}
}

export default CommentList;
