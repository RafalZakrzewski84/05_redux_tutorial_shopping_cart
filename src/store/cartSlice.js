/** @format */

import { createSlice } from '@reduxjs/toolkit';

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
			state.totalQuantity++;
		},
		removeFromCart(state, action) {},
		setShowCart(state) {
			//action will toggle state of showCart variable
			state.showCart = !state.showCart;
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice;
