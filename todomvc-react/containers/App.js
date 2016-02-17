import React, { Component } from 'react';
import Header from '../components/Header.js';
import MainSection from '../components/MainSection.js';


import '../components/app.css';


class App extends Component {
	constructor(){
		super();
		this.state = {
			todos: [
				{
					completed: false,
					id: 0,
					text: "Use Redux"
				}
			],
			actions: {

			},
			filter: "show_all"
		}
	}

	//添加列表函数
	handleAddTodo(text){
		let todos = this.state.todos;
		let item = {
			completed: false,
			text: text,
			id: todos.length
		};
		todos.unshift(item);
		this.setState({todos: todos});
	}

	//
	handleCompleteTodo(id){
		let todos = this.state.todos;
		todos[id].completed = !todos[id].completed;
		this.setState({todos: todos});
	}

	render(){
		return (
			<div>
				<Header 
					addTodo={(e) => this.handleAddTodo(e)}
				/>
				<MainSection 
					todos={this.state.todos}
					completeTodo={(e) => this.handleCompleteTodo(e)}
				/>
			</div>
		)
	}
}

export default App;