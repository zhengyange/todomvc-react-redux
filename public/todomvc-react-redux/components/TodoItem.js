import React, { Component } from 'react';

class TodoItem extends Component {

	render(){
		const {todo, completeTodo} = this.props;
		return (
			<li className={todo.completed?'completed':''}>
				<div className="view">
		          <input className="toggle"
		                 type="checkbox"
		                 checked={todo.completed}
		                 onChange={(id) => completeTodo(todo.id)}
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