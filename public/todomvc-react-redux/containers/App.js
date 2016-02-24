import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header.js';
import MainSection from '../components/MainSection.js';
import {addTodo, completeTodo, setFilter} from '../actions/appActions.js';
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/TodoFilters.js';

import '../components/app.css';


class App extends Component {
	constructor(){
		super();
	}

	render(){
		const {dispatch, filteredTodos} = this.props;
		return (
			<div>
				<Header 
					addTodo={(text) => dispatch(addTodo(text))}
				/>
				<MainSection 
					filteredTodos={filteredTodos}
					setFilter={(filter) => dispatch(setFilter(filter))}
					completeTodo={(id) => dispatch(completeTodo(id))}
				/>
			</div>
		)
	}
}

function filterTodos(todos, filter) {
  switch (filter) {
    case SHOW_ALL:
      return todos
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}

function select(state){
	console.log(state);
	return {
		filteredTodos: filterTodos(state.todos, state.filter),
		filter: state.filter
	}
}

export default connect(select)(App);