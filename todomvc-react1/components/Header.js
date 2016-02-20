import React, { Component } from 'react';
import TodoTextInput from './TodoTextInput.js';

class Header extends Component {
	constructor(){
		super();

	}

	handleOnSave(text){
		this.props.addTodo(text);
	}
	render(){
		return (
			<header className="header">
				<h1>todos</h1>
				<TodoTextInput 
					onSave={(e) => this.handleOnSave(e)}
				/>
			</header>
		)
	}
}

export default Header;