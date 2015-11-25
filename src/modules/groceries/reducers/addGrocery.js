'use strict';

export function success(oldState, action) {
	let {payload} = action;

	return [
		{
			name: payload.name,
			quantity: payload.quantity || 1
		}
	].concat(oldState);
}

// Decide whats the best way to update the state
// when the payload has an error
// Many actions may not need to define this function
export function failure(oldState, action) {
	return action.payload;
}