import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header.js';
import MainSection from '../components/MainSection.js';


import '../components/app.css';


class App extends Component {

	render(){
		return (
			<div>
				<Header />
				<MainSection />
			</div>
		)
	}
}

function select(state){
	console.log(state);
	return {
		todos: state.todos
	}
}

export default connect(select)(App);