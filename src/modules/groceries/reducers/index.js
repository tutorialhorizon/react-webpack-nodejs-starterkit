'use strict';


// TODO import remove_grocery from './remove_grocery';

import {handleActions} from 'redux-actions';
import Immutable from 'seamless-immutable';

// Actions in this module
import * as ActionTypes from '../action_types';
import * as addGrocery from './addGrocery';

let initialState = Immutable([]);

// Handle FSA compliant actions
// https://github.com/acdlite/flux-standard-action
// throw: This is called when payload.error = true

export default handleActions({
	[ActionTypes.ADD_GROCERY]: {
		next: addGrocery.success,
		throw: addGrocery.failure
	}
}, initialState);

// I wanted to use handleAction but there was an open issue
// with returning its initialState
// https://github.com/acdlite/redux-actions/issues/23