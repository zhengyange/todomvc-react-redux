import React, { Component } from 'react';

class TodoTextInput extends Component {
	constructor(){
		super();
		this.state = {
			text: ''
		}
	}

	handleOnChange(e){
		this.setState({text: e.target.value});
	}

	handleOnKeyDown(e){
		let text = e.target.value.trim();
		if (e.which === 13) {
	      this.props.onSave(text)
	      // if (this.props.newTodo) {
	        this.setState({ text: '' })
	      // }
	    }
		// this.props.onSave(e.target.value);
	}

	render(){
		return (
			<input 
				className="new-todo"
				type="text"
				placeholder="What needs to be done?"
				autoFocus="true"
				value={this.state.text}
				onChange={(e) => this.handleOnChange(e)}
				onKeyDown={(e) => this.handleOnKeyDown(e)}
			/>
		)
	}
}

export default TodoTextInput;