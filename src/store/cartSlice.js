/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './uiSlice';

//creating state for cart
const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		itemList: [],
		totalQuantity: 0,
		showCart: false,
	},
	reducers: {
		addToCart(state, action) {
			const newItem = action.payload;
			//checking if newItem is in cart
			const cartItem = state.itemList.find((item) => item.id === newItem.id);

			if (cartItem) {
				//if newItem in cart increase qut nad price
				cartItem.quantity++;
				cartItem.totalPrice += newItem.price;
			} else {
				//if not add newItem to cart list
				state.itemList.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					name: newItem.name,
				});
			}
			//increasing total num of products in cart
			state.totalQuantity++;
		},
		removeFromCart(state, action) {
			//checking which item to modify by product id
			const id = action.payload;
			//choosing item from itemList
			const cartItem = state.itemList.find((item) => item.id === id);

			if (cartItem.quantity > 1) {
				//if more than one remove one product and decrease total price
				cartItem.quantity--;
				cartItem.totalPrice -= cartItem.price;
			} else if (cartItem.quantity === 1) {
				//if only one product generate new item list with out removed product
				state.itemList = state.itemList.filter((item) => item.id !== id);
			}
			//decreasing total num of products in cart
			state.totalQuantity--;
		},
		setShowCart(state) {
			//action will toggle state of showCart variable
			state.showCart = !state.showCart;
		},
	},
});

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

export const cartActions = cartSlice.actions;
export default cartSlice;
