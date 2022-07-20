/** @format */

import { createSlice } from '@reduxjs/toolkit';

//crating state for auth login, logout
const authSlice = createSlice({
	name: 'auth',
	initialState: { isLoggedIn: false },
	reducers: {
		login(state) {
			state.isLoggedIn = true;
		},
		logout(state) {
			state.isLoggedIn = false;
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice;
