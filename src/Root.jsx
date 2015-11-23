'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';

// Redux integration libraries
import {applyMiddleware, compose, createStore} from 'redux';
import {ReduxRouter} from 'redux-router';
import {Provider, connect} from 'react-redux';

// Redux utilities
import middleware from './middleware';

// Files from the app
import rootReducer from './reducers';
import routes from './Routes.jsx';
import getStoreEnhancers from './storeEnhancers';

let storeEnhancers = getStoreEnhancers(routes);

// let storeEnhancers = [
// 	reduxReactRouter({
// 		routes,
// 		createHistory: createBrowserHistory
// 	})
// ];
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