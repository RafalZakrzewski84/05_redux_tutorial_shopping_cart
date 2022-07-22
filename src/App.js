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

	//checking state of cart from store - cartSlice
	const cart = useSelector((state) => state.cart);

	//effect will be induce in case of cart state change
	React.useEffect(() => {
		const sendRequestToFB = async () => {
			const res =
				await //connecting to firebase db for sending cart in json file
				fetch(
					'https://sdanews-acd6d-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json',
					{
						method: 'PUT',
						body: JSON.stringify(cart),
					}
				);
			const data = await res.json();
		};
		sendRequestToFB();
	}, [cart]);

	return (
		<div className="App">
			{!isLoggedIn && <Auth />}
			{isLoggedIn && <Layout />}
		</div>
	);
}

export default App;
