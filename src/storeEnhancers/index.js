'use strict';

import {reduxReactRouter} from 'redux-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

export default function getStoreEnhancers(routes) {
	let storeEnhancers = [
		reduxReactRouter({
			routes,
			createHistory: createBrowserHistory
		})
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