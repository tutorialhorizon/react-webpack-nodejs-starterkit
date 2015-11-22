'use strict';

import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'

// Actions
import * as Actions from '../actions';

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

	getPayload() {
		const r = this.refs;
		return {
			name: r.groceryInput.value
		};
	}

	addGroceryItemAsync() {
		const p = this.props;

		p.dispatch(
			Actions.addGroceryItemAsync(this.getPayload())
		);
	}

	addGroceryItem() {
		const p = this.props;

		p.dispatch(
			Actions.addGroceryItem(this.getPayload())
		);
	}

	render() {
		return (
			<main className="container">
				<Greeting />
				{this.renderEmptyMessage()}
				{this.renderGroceryList()}
				<input placeholder="Add an item" 
					type="text" ref="groceryInput"
				/>
				<button onClick={this.addGroceryItemAsync.bind(this)}>
					Add Async
				</button>
				<button onClick={this.addGroceryItem.bind(this)}>
					Add Sync
				</button>
				<div className="mt-10">
					<Link to="/">Click here to go back</Link>
				</div>
			</main>
		);
	}
};

// Wrap the component to inject dispatch and state into it
export default connect(groceriesSelector)(Messages);