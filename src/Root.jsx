'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';

// Redux integration libraries
import {compose, createStore} from 'redux';
import {ReduxRouter} from 'redux-router';
import {Provider} from 'react-redux';

// Redux utilities in the app
import getStoreEnhancers from './storeEnhancers';
import rootReducer from './modules/rootReducer';

// Files from the app
import routes from './Routes.jsx';

let composedEnhancers = compose(...getStoreEnhancers(routes));
let finalCreateStore = composedEnhancers(createStore);
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