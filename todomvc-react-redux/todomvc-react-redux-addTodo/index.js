import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import thunkMiddleware from 'redux-thunk';
import App from './containers/App.js';
import appReducers from './reducers';
import { addTodo } from './actions/appActions.js';

let store = createStore(appReducers);
// console.log(store);
// store.subscribe(() => 
// 	console.log(store.getState())
// )
// store.dispatch(addTodo('Learn about actions'));
// store.dispatch(addTodo('Learn about reducers'));
// store.dispatch(addTodo('Learn about store'));



render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)