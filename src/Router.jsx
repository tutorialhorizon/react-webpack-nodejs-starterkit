'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';

import routes from './Routes.jsx';
import history from './utils/history';

ReactDOM.render((
	<Router history={history}>
    	{routes}
  	</Router>
), document.getElementById('app'));

