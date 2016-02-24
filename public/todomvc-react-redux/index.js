import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import thunkMiddleware from 'redux-thunk';
import App from './containers/App.js';
import appReducers from './reducers';
import { addTodo } from './actions/appActions.js';

let store = createStore(appReducers);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)