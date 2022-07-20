/** @format */

import { createStore } from 'redux';

const reducerFn = (state = { counter: 0 }, action) => {
	//action for adding to counter
	if (action.type === 'ADD') {
		return { counter: state.counter + 1 };
	}
	//action for removing from counter
	if (action.type === 'REM') {
		return { counter: state.counter - 1 };
	}
	return state;
};
const store = createStore(reducerFn);

export default store;
