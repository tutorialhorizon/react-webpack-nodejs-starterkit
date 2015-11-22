'use strict';

let initialState = [];

const ADD_GROCERY = 'ADD_GROCERY';

// TODO: Use seamless-immutable

// Function that returns a list of grocery items
export default groceries(state = initialState, action) {
	switch(action.type) {
		case ADD_GROCERY:
			return [
				{
					name: action.name,
					quantity: action.quantity
				}
			].concat(state);
		default:
			return state;
	}
}