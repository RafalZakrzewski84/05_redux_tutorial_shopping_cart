/** @format */

import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
	name: 'ui',
	initialState: { notification: null },
	reducers: {
		showNotification(state, action) {
			state.notification = {
				msg: action.payload.msg,
				type: action.payload.type,
				open: action.payload.open,
			};
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice;
