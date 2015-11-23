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

	return storeEnhancers;
};