/** @format */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';

import Auth from './Components/Auth';
import Layout from './Components/Layout';
import Notification from './Components/Notification';
import { sendCartData } from './store/cartSlice';

let isFirstRendered = true;
console.log(isFirstRendered);

function App() {
	const dispatch = useDispatch();

	const notification = useSelector((state) => state.ui.notification);

	//initial state of auth.isLoggedIn from store from authSlice - will be false - we have to log in
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

	//checking state of cart from store - cartSlice
	const cart = useSelector((state) => state.cart);
	console.log(cart);

	//effect will be induce in case of cart state change
	React.useEffect(() => {
		//doesn't work sth is causing change of cart and start fetching
		//I added dispatch to use effect
		if (isFirstRendered) {
			isFirstRendered = false;
			console.log(isFirstRendered);
			return;
		}

		//function for fetching declared in certSlice
		dispatch(sendCartData(cart));
	}, [cart, dispatch]);

	return (
		<div className="App">
			{notification && (
				<Notification type={notification.type} msg={notification.msg} />
			)}
			{!isLoggedIn && <Auth />}
			{isLoggedIn && <Layout />}
		</div>
	);
}

export default App;
