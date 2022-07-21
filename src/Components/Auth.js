/** @format */

import React from 'react';
import './Auth.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';

function Auth() {
	const dispatch = useDispatch();
	//changing state of isLoggedIn
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(authActions.login());
	};

	return (
		<div className="Auth-Container">
			<h1>Login</h1>
			<form onSubmit={submitHandler}>
				<label htmlFor="username">Username</label>
				<input type="text" name="username" id="username" />
				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" />
				<button className="Auth-btn">Login</button>
			</form>
		</div>
	);
}

export default Auth;
