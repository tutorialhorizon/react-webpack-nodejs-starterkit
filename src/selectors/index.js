'use strict';

import { createSelector } from 'reselect';

// https://github.com/rackt/reselect
// Basic selector which just extracts data from the state
const groceries = state => state.groceries;

export const groceriesSelector = createSelector(
	groceries,
	// You can add more selectors here
	(groceries) => {
		return {groceries};
	}
);