import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App.js';
import appReducers from './reducers/rootReducer.js';
import { addTodo } from './actions/appActions.js';

let store = createStore(appReducers);
store.subscribe(() => 
	console.log(store.getState())
)
console.log(store.getState());
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));



render(
	<App />,
	document.getElementById('root')
)