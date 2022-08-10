/** @format */
import { uiActions } from './uiSlice';
import { cartActions } from './cartSlice';

export const fetchCartData = () => {
	return async (dispatch) => {
		const fetchCartHandler = async () => {
			//connecting to firebase for downloading cart
			const res = await fetch(
				'https://sdanews-acd6d-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json'
			);
			const data = await res.json();
			return data;
		};
		try {
			const cartData = await fetchCartHandler();
			dispatch(cartActions.replaceCartData(cartData));
		} catch (err) {
			dispatch(
				uiActions.showNotification({
					open: true,
					msg: 'Something went wrong during fetching',
					type: 'error',
				})
			);
		}
	};
};

export const sendCartData = (cart) => {
	return async (dispatch) => {
		//ui in uiSlice - state before sending data
		dispatch(
			uiActions.showNotification({
				open: true,
				msg: 'Sending order...',
				type: 'warning',
			})
		);
		const sendRequestToFB = async () => {
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
		try {
			await sendRequestToFB();
		} catch (e) {
			dispatch(
				uiActions.showNotification({
					open: true,
					msg: 'Something went wrong',
					type: 'error',
				})
			);
		}
	};
};
