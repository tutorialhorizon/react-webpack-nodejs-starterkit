
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import history from './utils/history';

// Files from the app
import routes from './Routes.jsx';

// Create a stateless functional component for the Root
// https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components
function Root() {
	return (
		<Router history={history}>
			{routes}
		</Router>
	);
}

ReactDOM.render(<Root />, document.getElementById('app'));