import React, { Component } from 'react';

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


export default App;