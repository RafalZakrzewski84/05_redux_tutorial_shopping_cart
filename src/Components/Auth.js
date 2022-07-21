/** @format */

import React from 'react';
import './Auth.css';

function Auth() {
	return (
		<div className="Auth-Container">
			<h1>Login</h1>
			<form>
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
