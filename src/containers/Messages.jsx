'use strict';

import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'

// Components
import Greeting from '../components/Greeting.jsx';
import {groceriesSelector} from '../selectors';

class Messages extends Component {
	renderEmptyMessage() {
		const {groceries} = this.props;

		if (!groceries.length) {
			return <p>Looks like you dont have any groceries to pick up</p>;
		}

		return null;
	}

	renderGroceryItem(item, idx) {
		return <li key={idx}>{item.name}</li>;
	}

	renderGroceryList() {
		const {groceries} = this.props;

		return (
			<div>
				Your grocery list is growing!
				<ul>
					{groceries.map(this.renderGroceryItem)}
				</ul>
			</div>
		);
	}

	render() {
		return (
			<main className="container">
				<Greeting />
				{this.renderEmptyMessage()}
				{this.renderGroceryList()}
				<Link to="/">Click here to go back</Link>
			</main>
		);
	}
};

// Wrap the component to inject dispatch and state into it
export default connect(groceriesSelector)(Messages);