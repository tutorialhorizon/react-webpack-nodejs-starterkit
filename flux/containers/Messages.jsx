'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

// Components
import Greeting from '../components/Greeting.jsx';

class Messages extends Component {
	render() {
		return (
			<main className="container">
				<Greeting />
				<p>Looks like you dont have any messages here. Were you expecting any?</p>
				<Link to="/">Click here to go back</Link>
			</main>
		);
	}
};

export default Messages;