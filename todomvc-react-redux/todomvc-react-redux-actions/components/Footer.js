import React, { Component } from 'react';


const FILTER_TITLES = {
  ['SHOW_ALL']: 'All',
  ['SHOW_ACTIVE']: 'Active',
  ['SHOW_COMPLETED']: 'Completed'
}
class Footer extends Component {
	
	render(){
		return (
			<footer className="footer">
		        <span className="todo-count">
			        <strong>{1}</strong> item left
			    </span>
		        <ul className="filters">
		          {[ 'SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_COMPLETED' ].map((filter, index) =>
		            <li key={filter}>
		              <a className={index==0?"selected":''}
				         style={{ cursor: 'pointer' }}
				         >
				        {FILTER_TITLES[filter]}
				      </a>
		            </li>
		          )}
		          <button className="clear-completed" >
		           Clear completed
		          </button>
		        </ul>
		      </footer>
		)

	}
}

export default Footer;