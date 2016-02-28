import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
import Footer from './Footer.js';

class MainSection extends Component {

	render() {
		const filteredTodos = [
				{
					completed: false,
					id: 0,
					text: "Use Redux"
				}
			];
		return (
			<section className="main">
				<input className="toggle-all" type="checkbox" />
				<ul className="todo-list">
					{filteredTodos.map((todo) => 
						<TodoItem 
							key={todo.id} 
							todo={todo}	
						/>
					)}
				</ul>
				<Footer />
			</section>
		);
	}
}

export default MainSection;