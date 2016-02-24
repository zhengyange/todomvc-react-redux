import React, { Component } from 'react';

class TodoItem extends Component {

	render(){
		const {todo} = this.props;
		return (
			<li className="">
				<div className="view">
		          <input className="toggle"
		                 type="checkbox"
		                 checked={todo.completed}
		            />
		          <label>
		            {todo.text}
		          </label>
		          <button className="destroy"/>
		        </div>
			</li>
		)
	}
}

export default TodoItem;