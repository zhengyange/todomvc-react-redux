import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
import Footer from './Footer.js';

class MainSection extends Component {
	constructor(){
		super();
	}

	//完成所有任务操作
	handleCompleteAll(e){
		this.props.completeAll(e.target.checked);
	}

	render() {
		const filteredTodos = this.props.todos;
		const completeTodo = this.props.completeTodo;
		const deleteTodo = this.props.deleteTodo; 
		const activeCount = this.props.activeCount;
		const completedCount = this.props.completedCount;
		const onClearCompeleted = this.props.onClearCompeleted;
		const onFilterAll = this.props.onFilterAll;
		const filter = this.props.filter;
		return (
			<section className="main">
				<input 
					className="toggle-all" 
					type="checkbox" 
					onChange={(e) => this.handleCompleteAll(e)}/>
				<ul className="todo-list">
					{filteredTodos.map((todo) =>{
						if(todo){
							return <TodoItem 
								key={todo.id} 
								todo={todo}	
								completeTodo={completeTodo}
								deleteTodo={deleteTodo}
							/>
						}
					} 
						
					)}
				</ul>
				<Footer 
					activeCount={activeCount}
					completedCount={completedCount}
					filter={filter}
					onFilterAll={onFilterAll}
					onClearCompeleted={onClearCompeleted}
				/>
			</section>
		);
	}
}

export default MainSection;