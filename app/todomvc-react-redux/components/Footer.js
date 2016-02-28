import React, { Component } from 'react';
import {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../constants/TodoFilters.js';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}
class Footer extends Component {
	
	render(){
		const {setFilter} = this.props;
		return (
			<footer className="footer">
		        <span className="todo-count">
			        <strong>{1}</strong> item left
			    </span>
		        <ul className="filters">
		          {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map((filter, index) =>
		            <li key={filter}>
		              <a className={index==0?"selected":''}
				         style={{ cursor: 'pointer' }}
				         onClick={() => setFilter(filter)}
				         >
				        {FILTER_TITLES[filter]}
				      </a>
		            </li>
		          )}
		          
		        </ul>
		        <button className="clear-completed" >
		           Clear completed
		        </button>
		      </footer>
		)

	}
}

export default Footer;