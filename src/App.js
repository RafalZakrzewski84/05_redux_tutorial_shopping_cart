/** @format */

import * as React from 'react';
import { useSelector } from 'react-redux';
import './App.css';

import Auth from './Components/Auth';
import Layout from './Components/Layout';

function App() {
	//initial state of auth.isLoggedIn from store from authSlice - will be false
	//we have to log in
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

	return (
		<div className="App">
			{!isLoggedIn && <Auth />}
			{isLoggedIn && <Layout />}
		</div>
	);
}

export default App;
