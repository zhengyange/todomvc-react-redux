import {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../actions/appActions.js';
//添加任务方法
export function handleAddTodo(text){
	let allTodos = this.state.allTodos;
	let todos = this.state.todos;
	let activeCount = this.state.activeCount;
	let item = {
		completed: false,
		text: text,
		id: allTodos.length
	};
	
	switch(this.state.filter){
		case SHOW_ALL:		
			allTodos.unshift(item);
			this.setState({todos: allTodos, activeCount: activeCount + 1});
			break;
		case SHOW_ACTIVE:
			allTodos.unshift(item);
			this.setState({todos: allTodos.filter((todo) => !todo.completed), activeCount: activeCount + 1})
			break;
		case SHOW_COMPLETED:
			allTodos.unshift(item);
			this.setState({todos: allTodos.filter((todo) => todo.completed), activeCount: activeCount + 1})
			break;
	}
}

//完成单个任务操作函数
export function	handleCompleteTodo(id){
	let allTodos = this.state.allTodos;  
	let activeCount = this.state.activeCount;
	let completedCount = this.state.completedCount;

	let newTodos = allTodos.map((todo, index) => {
		if(id == todo.id){
			todo.completed = !todo.completed;
			if(todo.completed){
				activeCount = activeCount - 1;
				completedCount = completedCount + 1;
			}else{
				activeCount = activeCount + 1;
				completedCount = completedCount - 1;
			}
		}
		return todo;
	});
	this.setState({allTodos:newTodos, activeCount: activeCount, completedCount: completedCount});
	switch(this.state.filter){

		case SHOW_ALL:	
			this.setState({todos: newTodos});	
			break;
		case SHOW_ACTIVE:
			// this.setState({allTodos:newTodos, activeCount: activeCount, completedCount: completedCount});
			this.setState({todos: newTodos.filter((todo) => !todo.completed)})
			break;
		case SHOW_COMPLETED:
			// this.setState({allTodos:newTodos, activeCount: activeCount, completedCount: completedCount});
			this.setState({todos: newTodos.filter((todo) => todo.completed)})
			break;
	}



}

//删除todo
export function handleDeleteTodo(id){
	let todos = this.state.todos;  
	let activeCount = this.state.activeCount;
	let completedCount = this.state.completedCount;

	let newTodos = todos.filter((todo, index) => {
		console.log(id);
		if(id === todo.id){
			if(todo.completed){
				completedCount = completedCount - 1;
			}else{
				activeCount = activeCount - 1;
			}
		}
		return todo.id !== id
		
	});
	this.setState({todos: newTodos, allTodos:newTodos, activeCount: activeCount, completedCount:completedCount});
}

//操作完成所有选项
export function handleCompleteAll(checked){
	let todos = this.state.todos;  
	let activeCount = this.state.activeCount;
	let completedCount = this.state.completedCount;

	let newTodos = todos.map((todo, index) => {
		if(checked){
			todo.completed = true;
			activeCount = 0;
			completedCount = todos.length;
		}else{
			todo.completed = false;
			activeCount = todos.length;
			completedCount = 0;
		}
					
		return todo;
	});
	this.setState({todos: newTodos, allTodos:newTodos, activeCount: activeCount, completedCount:completedCount});
}

//清除已完成选项
export function handleOnClearCompeleted(e){
	let todos = this.state.todos;  

	let newTodos = todos.filter((todo, index) => {
		return !todo.completed;
								
	});
	this.setState({todos: newTodos, allTodos:newTodos, activeCount: newTodos.length, completedCount:0});
}

//筛选显示
export function handleOnFilterAll(filter){
	this.setState({filter: filter});
	let allTodos = this.state.allTodos;
	switch(filter){
		case 'SHOW_ALL':
			this.setState({todos: this.state.allTodos})
			break;
		case 'SHOW_ACTIVE':
			this.setState({todos: allTodos.filter((todo) => !todo.completed)})
			break;
		case 'SHOW_COMPLETED':
			this.setState({todos: allTodos.filter((todo) => todo.completed)})
			break;
	}
}