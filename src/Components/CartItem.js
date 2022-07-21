/** @format */

import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';

import './Cart.css';

const CartItem = ({ name, quantity, total, price, id }) => {
	const dispatch = useDispatch();

	//adding another the same product to cart
	const addOneItem = () => {
		dispatch(
			cartActions.addToCart({
				id,
				name,
				price,
			})
		);
	};

	//removing product from cart one by one or totally
	const removeItem = () => {
		dispatch(cartActions.removeFromCart(id));
	};

	return (
		<div className="cartItem">
			<h2> {name}</h2>
			<p>${price} /-</p>
			<p>x{quantity}</p>
			<article>Total ${total}</article>
			<button onClick={removeItem} className="cart-actions">
				-
			</button>
			<button onClick={addOneItem} className="cart-actions">
				+
			</button>
		</div>
	);
};

export default CartItem;
