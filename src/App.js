/** @format */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/uiSlice';
import './App.css';

import Auth from './Components/Auth';
import Layout from './Components/Layout';
import Notification from './Components/Notification';

let isFirstRendered = true;
console.log(isFirstRendered);

function App() {
	const dispatch = useDispatch();

	const notification = useSelector((state) => state.ui.notification);

	//initial state of auth.isLoggedIn from store from authSlice - will be false - we have to log in
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

	//checking state of cart from store - cartSlice
	const cart = useSelector((state) => state.cart);

	//effect will be induce in case of cart state change
	React.useEffect(() => {
		//doesn't work sth is causing change of cart and start fetching
		if (isFirstRendered) {
			isFirstRendered = false;
			console.log(isFirstRendered);
			return;
		}
		const sendRequestToFB = async () => {
			//ui in uiSlice - state before sending data
			dispatch(
				uiActions.showNotification({
					open: true,
					msg: 'Sending order...',
					type: 'warning',
				})
			);
			const res =
				//connecting to firebase db for sending cart in json file
				await fetch(
					'https://sdanews-acd6d-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json',
					{
						method: 'PUT',
						body: JSON.stringify(cart),
					}
				);
			const data = await res.json();
			// ui in uiSlice - state after successful putting data
			dispatch(
				uiActions.showNotification({
					open: true,
					msg: 'Data in database',
					type: 'success',
				})
			);
		};
		sendRequestToFB().catch((e) => {
			console.log(e);
			dispatch(
				uiActions.showNotification({
					open: true,
					msg: 'Something went wrong',
					type: 'error',
				})
			);
		});
	}, [cart]);

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
