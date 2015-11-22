'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

// Redux integration libraries
import {applyMiddleware, compose, createStore} from 'redux';
import {ReduxRouter, reduxReactRouter} from 'redux-router';
import {Provider, connect} from 'react-redux';

// Files from the app
import reducers from './reducers';
import routes from './Routes.jsx';

// TODO: redux-thunk integration
const store = compose(
  // applyMiddleware(m1, m2, m3),
  reduxReactRouter({
    routes,
    createHistory: createBrowserHistory
  })
)(createStore)(reducers);

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
	name: 'Yogurt'
});

console.log(store.getState());

setTimeout(() => {
	store.dispatch({
		type: 'ADD_GROCERY',
		name: 'Milk'
	});
}, 2000)