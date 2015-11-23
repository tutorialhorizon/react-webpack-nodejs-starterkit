'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';

// Redux integration libraries
import {applyMiddleware, compose, createStore} from 'redux';
import {ReduxRouter} from 'redux-router';
import {Provider} from 'react-redux';

// Redux utilities in the app
import middleware from './middleware';
import getStoreEnhancers from './storeEnhancers';
import {rootReducer} from './reducers';

// Files from the app
import routes from './Routes.jsx';

let finalCreateStore = compose(
	applyMiddleware(...middleware),
	...getStoreEnhancers(routes)
)(createStore);
let store = finalCreateStore(rootReducer);

// Create a stateless functional component for the Root
// https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components
function Root() {
	return (
		<div>
	    	<Provider store={store}>
				<ReduxRouter>
					{routes}
				</ReduxRouter>
	    	</Provider>
		</div>
	)
}

ReactDOM.render(<Root />, document.getElementById('app'));