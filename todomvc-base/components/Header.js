import React, { Component } from 'react';
import TodoTextInput from './TodoTextInput.js';

class Header extends Component {
	render(){
		return (
			<header className="header">
				<h1>todos</h1>
				<TodoTextInput />
			</header>
		)
	}
}

export default Header;