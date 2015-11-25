'use strict';

// Creates FSA compliant actions
// https://github.com/acdlite/flux-standard-action
import {createAction} from 'redux-actions';

// Actions in this module
import * as ActionTypes from '../action_types';

export const addGroceryItem = createAction(ActionTypes.ADD_GROCERY);