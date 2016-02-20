import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
import Footer from './Footer.js';

class MainSection extends Component {
	constructor(){
		super();
	}


	render() {
		const filteredTodos = this.props.todos;
		const completeTodo = this.props.completeTodo;
		return (
			<section className="main">
				<input className="toggle-all" type="checkbox" />
				<ul className="todo-list">
					{filteredTodos.map((todo) => 
						<TodoItem 
							key={todo.id} 
							todo={todo}	
							completeTodo={completeTodo}
						/>
					)}
				</ul>
				<Footer />
			</section>
		);
	}
}

export default MainSection;