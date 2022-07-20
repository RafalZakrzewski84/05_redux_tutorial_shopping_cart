/** @format */

import { configureStore, createSlice } from '@reduxjs/toolkit';

//creating state for counter
const counterSlice = createSlice({
	name: 'counter',
	initialState: { counter: 0 },
	//functions for changing counter state (actions)
	reducers: {
		add(state, action) {
			//can't be hardcoded values (+ 1)
			state.counter++;
		},
		remove(state, action) {
			//can't be hardcoded values (1 1)
			state.counter--;
		},
		addTen(state, action) {
			//can't be hardcoded values (+ action.payload)
			state.counter += action.payload;
		},
	},
});

//export actions from counterSlice reducers
export const actions = counterSlice.actions;

//creating store
const store = configureStore({
	reducer: counterSlice.reducer,
});
export default store;
