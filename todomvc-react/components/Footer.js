import React, { Component } from 'react';
import {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../actions/appActions.js';
import {slelc} from '../actions.js';
const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}
class Footer extends Component {
	constructor(props){
		super(props);

	}


	render(){
		let {activeCount, filter:filterP, completedCount, onClearCompeleted, onFilterAll} = this.props;

		let itemWord = activeCount === 1 ? 'item' : 'items';
		return (
			<footer className="footer">
		        <span className="todo-count">
			        <strong>{activeCount?activeCount:'No'}</strong> {itemWord} left
			    </span>
		        <ul className="filters">
		          {[ 'SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_COMPLETED' ].map((filter, index) =>
		            <li key={filter}>
		              <a className={filter === filterP ? "selected" : ''}
				         style={{ cursor: 'pointer' }}
				         onClick={(e) => onFilterAll(filter)}
				         >
				        {FILTER_TITLES[filter]}
				      </a>
		            </li>
		          )}
		          
		        </ul>
		        {completedCount > 0 ? 
			          <button className="clear-completed" onClick={onClearCompeleted}>
			           	Clear completed
			          </button> : ''
		          }
		      </footer>
		)

	}
}

export default Footer;