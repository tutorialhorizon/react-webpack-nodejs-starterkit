'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

// Redux integration libraries
import {applyMiddleware, compose, createStore} from 'redux';
import {ReduxRouter, reduxReactRouter} from 'redux-router';
import {Provider, connect} from 'react-redux';
import thunk from 'redux-thunk';

// Files from the app
import rootReducer from './reducers';
import routes from './Routes.jsx';

let middleware = [ thunk ];
let storeEnhancers = [
	reduxReactRouter({
		routes,
		createHistory: createBrowserHistory
	})
];
let finalCreateStore;

if (process.env.NODE_ENV === 'production') {
	// TODO
	// finalCreateStore = applyMiddleware(...middleware)(createStore)
} else {
	console.log('goes here');
	finalCreateStore = compose(
		applyMiddleware(...middleware),
		...storeEnhancers
		// TODO: Add dev tools
		// require('redux-devtools').devTools(),
		// require('redux-devtools').persistState(
		// 	window.location.href.match(/[?&]debug_session=([^&]+)\b/)
		// )
	)(createStore)
}

// const store = compose(
// 	applyMiddleware(...middleware),
// 	reduxReactRouter({
// 		routes,
// 		createHistory: createBrowserHistory
// 	})
// )(createStore)(reducers);

let store = finalCreateStore(rootReducer);

class Root extends Component {
	render() {
	    return (
	    	<div>
	        	<Provider store={store}>
					<ReduxRouter>
						{routes}
					</ReduxRouter>
	        	</Provider>
	      </div>
	    );
  	}
}

ReactDOM.render(<Root />, document.getElementById('app'));

store.dispatch({
	type: 'ADD_GROCERY',
	payload: {
		name: 'Yogurt'
	}
});

console.log(store.getState());

setTimeout(() => {
	store.dispatch({
		type: 'ADD_GROCERY',
		payload: {
			name: 'Milk'
		}
	});
}, 2000);