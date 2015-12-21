'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Pages
import App from './App.jsx';
import Messages from './containers/Messages.jsx';
import Index from './containers/Index.jsx';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Index} />
        <Route path="messages" component={Messages} />
	</Route>
);