'use strict';

import {addGroceryItem} from './addGroceryItem';

export function addGroceryItemAsync(payload) {
	return (dispatch, getState) => {
		setTimeout(() => {
			dispatch(addGroceryItem(payload));
		}, 1000);
	};
}