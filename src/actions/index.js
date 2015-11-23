'use strict';

// Creates FSA compliant actions
// https://github.com/acdlite/flux-standard-action
import {createAction} from 'redux-actions';

import * as ActionTypes from '../actionTypes';

export const addGroceryItem = createAction(ActionTypes.ADD_GROCERY);

export function addGroceryItemAsync(payload) {
	return (dispatch, getState) => {
		setTimeout(() => {
			dispatch(addGroceryItem(payload));
		}, 1000);
	};
}