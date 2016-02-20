import React, { Component } from 'react';
import Header from '../components/Header.js';
import MainSection from '../components/MainSection.js';

import {
	handleAddTodo,					//添加任务方法
	handleCompleteTodo,				//完成单个任务操作函数
	handleDeleteTodo,				//删除todo
	handleCompleteAll,				//操作完成所有选项
	handleOnClearCompeleted,		//清除已完成选项
	handleOnFilterAll				//筛选显示
} from '../reducers/appReducer.js';

import '../components/app.css';


class App extends Component {
	constructor(){
		super();
		this.state = {
			allTodos: [
				{
					completed: false,
					id: 0,
					text: "Use Redux"
				}
			],
			todos: [
				{
					completed: false,
					id: 0,
					text: "Use Redux"
				}
			],
			actions: {

			},
			filter: "SHOW_ALL",
			activeCount: 1,
			completedCount: 0
		}
	}

	render(){
		return (
			<div>
				<Header 
					addTodo={handleAddTodo.bind(this)}
				/>
				<MainSection 
					todos={this.state.todos}
					activeCount={this.state.activeCount}
					completedCount={this.state.completedCount}
					filter={this.state.filter}
					completeTodo={handleCompleteTodo.bind(this)}
					deleteTodo={handleDeleteTodo.bind(this)}
					completeAll={handleCompleteAll.bind(this)}
					onClearCompeleted={handleOnClearCompeleted.bind(this)}
					onFilterAll={handleOnFilterAll.bind(this)}
				/>
			</div>
		)
	}
}

export default App;