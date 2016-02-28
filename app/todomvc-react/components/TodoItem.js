import React, { Component } from 'react';

class TodoItem extends Component {
	constructor(){
		super();

	}

	render(){
		const {todo, completeTodo, deleteTodo} = this.props;
		return (
			<li className={todo.completed?'completed':''}>
				<div className="view">
		          <input className="toggle"
		                 type="checkbox"
		                 checked={todo.completed}
		                 onChange={(e) => completeTodo(todo.id)}
		            />
		          <label>
		            {todo.text}
		          </label>
		          <button className="destroy"
		          	  onClick={() => deleteTodo(todo.id)}
		          />
		        </div>
			</li>
		)
	}
}

export default TodoItem;