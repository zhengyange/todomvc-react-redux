import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
import Footer from './Footer.js';

class MainSection extends Component {

	render() {
		
		const {filteredTodos, setFilter, completeTodo} = this.props;
		console.log(filteredTodos);
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
				<Footer 
					setFilter={setFilter}
				/>
			</section>
		);
	}
}

export default MainSection;