import React, { Component } from 'react';

class TodoTextInput extends Component {

	render(){
		return (
			<input 
				className="new-todo"
				type="text"
				placeholder="What needs to be done?"
				autoFocus="true"
			/>
		)
	}
}

export default TodoTextInput;