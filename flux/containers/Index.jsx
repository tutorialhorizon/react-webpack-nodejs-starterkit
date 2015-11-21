'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

class Index extends Component {
	render() {
		return (
			<main className="container">
				Hi! You are at the index page!
				Navigate and check your messages  
				<Link to="messages"> over here</Link>
			</main>
		);
	}
};

export default Index;