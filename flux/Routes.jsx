'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import history from './utils/history';

// Pages
import App from './App.jsx';
import Messages from './containers/Messages.jsx';
import Index from './containers/Index.jsx';

ReactDOM.render((
	<Router history={history}>
    	<Route path="/" component={App}>
    		<IndexRoute component={Index} />
            <Route path="messages" component={Messages} />
    	</Route>
  	</Router>
), document.getElementById('app'));