'use strict';

import {reduxReactRouter} from 'redux-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import middleware from './middleware';
import {applyMiddleware, compose} from 'redux';

export default function getStoreEnhancers(routes) {
	let middlewareEnhancer = applyMiddleware(...middleware);
	let reduxRouterEnhancer = reduxReactRouter({
		routes,
		createHistory: createBrowserHistory
	});

	// By default, we add some enhancers for you.
	// You can add more enhancers to this array
	let storeEnhancers = [
		middlewareEnhancer,
		reduxRouterEnhancer
	];

	if (process.env.NODE_ENV !== 'production') {
		console.log('Apply development environment store enhancers');

		// TODO: Add this after integrating with dev tools
		// storeEnhancers.push(require('redux-devtools').devTools());
		// storeEnhancers.push(require('redux-devtools').persistState(
		// 	window.location.href.match(/[?&]debug_session=([^&]+)\b/)
		// ));
	}

	return storeEnhancers;
};